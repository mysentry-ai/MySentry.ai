/** Public read policy only. No DB handles, writes, or shared-pool cancellation. */
export type PublicReadState = "available" | "unavailable" | "deadline-exceeded";
export type PublicReadResult<T> =
  | { state: "available"; value: T }
  | { state: "unavailable" | "deadline-exceeded"; value: T };

const CONNECTION_CODES = new Set([
  "ECONNREFUSED", "ECONNRESET", "ETIMEDOUT", "ENOTFOUND", "EAI_AGAIN",
  "EHOSTUNREACH", "ENETUNREACH", "PROTOCOL_CONNECTION_LOST",
  "PROTOCOL_ENQUEUE_AFTER_FATAL_ERROR", "ER_ACCESS_DENIED_ERROR",
  "ER_CON_COUNT_ERROR", "ER_TOO_MANY_USER_CONNECTIONS", "POOL_CLOSED",
]);

/** Drizzle wraps driver errors in cause; never classify SQL/logic errors as outages. */
export function isDatabaseAvailabilityFailure(error: unknown): boolean {
  const seen = new Set<unknown>();
  let current = error;
  for (let depth = 0; current != null && depth < 8 && !seen.has(current); depth += 1) {
    seen.add(current);
    const record = typeof current === "object" ? current as Record<string, unknown> : null;
    if (typeof record?.code === "string" && CONNECTION_CODES.has(record.code)) return true;
    const message = typeof record?.message === "string" ? record.message : typeof current === "string" ? current : "";
    if (/database not available|database connection|connect.*database|\b(?:ECONNREFUSED|ECONNRESET|ETIMEDOUT|ENOTFOUND|EAI_AGAIN|PROTOCOL_CONNECTION_LOST|ER_ACCESS_DENIED_ERROR)\b|access denied|pool is closed|no connections available|queue limit reached/i.test(message)) return true;
    current = record?.cause;
  }
  return false;
}

export function createPublicReadGate(options: {
  deadlineMs: number;
  maxInFlight: number;
  unavailableCooldownMs: number;
  isAvailabilityFailure: (error: unknown) => boolean;
}) {
  const pending = new Map<string, Promise<PublicReadResult<unknown>>>();
  let unavailableUntil = 0;

  return {
    read<T>(key: string, operation: (signal: AbortSignal) => Promise<T>, fallback: T): Promise<PublicReadResult<T>> {
      const existing = pending.get(key);
      if (existing) return existing as Promise<PublicReadResult<T>>;
      if (Date.now() < unavailableUntil || pending.size >= options.maxInFlight) {
        return Promise.resolve({ state: "unavailable", value: fallback });
      }

      const controller = new AbortController();
      let finished = false;
      let resolve!: (value: PublicReadResult<T>) => void;
      let reject!: (error: unknown) => void;
      const result = new Promise<PublicReadResult<T>>((res, rej) => { resolve = res; reject = rej; });
      pending.set(key, result as Promise<PublicReadResult<unknown>>);
      const markUnavailable = () => {
        unavailableUntil = Math.max(unavailableUntil, Date.now() + options.unavailableCooldownMs);
      };
      const timeout = setTimeout(() => {
        finished = true;
        markUnavailable();
        controller.abort(); // Fetch observes this. Existing DB reads do not: retain their admission slot.
        resolve({ state: "deadline-exceeded", value: fallback });
      }, options.deadlineMs);

      // Attach both handlers immediately: late errors are consumed, never cached as success.
      Promise.resolve().then(() => operation(controller.signal)).then(value => {
        if (!finished) resolve({ state: "available", value });
      }, error => {
        if (finished) return;
        if (options.isAvailabilityFailure(error)) {
          markUnavailable();
          resolve({ state: "unavailable", value: fallback });
        } else {
          reject(error);
        }
      }).finally(() => {
        finished = true;
        clearTimeout(timeout);
        pending.delete(key);
      });
      return result;
    },
    get inFlight() { return pending.size; },
  };
}
