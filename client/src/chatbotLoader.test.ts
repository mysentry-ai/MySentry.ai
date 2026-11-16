import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import ts from "typescript";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const root = path.resolve(import.meta.dirname, "../..");
const source = fs.readFileSync(path.join(root, "client/public/mysentry-chatbot.js"), "utf8");
const tree = ts.createSourceFile("widget.js", source, ts.ScriptTarget.Latest, true, ts.ScriptKind.JS);
const imports: ts.CallExpression[] = [];
function visit(node: ts.Node) {
  if (ts.isCallExpression(node) && node.expression.kind === ts.SyntaxKind.ImportKeyword) imports.push(node);
  ts.forEachChild(node, visit);
}
visit(tree);
const code = source.slice(0, imports[0].getStart(tree)) + "__loadChatbot()" + source.slice(imports[0].end);

function criticalImage({
  selector = "#heroDevice img",
  complete = false,
  naturalWidth = 1270,
  top = 400,
  visibility = "visible",
  decode = vi.fn<() => Promise<void>>().mockResolvedValue(undefined),
} = {}) {
  const events = new EventTarget();
  return {
    selector, complete, naturalWidth, decode,
    css: { display: "block", visibility },
    getBoundingClientRect: vi.fn(() => ({ width: 300, height: 170, top, left: 0, right: 300, bottom: top + 170 })),
    addEventListener: events.addEventListener.bind(events),
    removeEventListener: vi.fn(events.removeEventListener.bind(events)),
    loaded: () => events.dispatchEvent(new Event("load")),
    broken: () => events.dispatchEvent(new Event("error")),
  };
}

function harness({
  spa = false,
  readyState = "complete",
  painted = false,
  pathname = "/",
  width = 390,
  height = 844,
  visualViewport = false,
  images = [] as ReturnType<typeof criticalImage>[],
  idle = false,
  idleDelay = 50,
  load = vi.fn().mockResolvedValue({ default: { init: vi.fn() } }),
} = {}) {
  const events = new EventTarget();
  const domEvents = new EventTarget();
  const viewportEvents = new EventTarget();
  const timers: { callback: () => Promise<void>; delay: number }[] = [];
  const frames: (() => void)[] = [];
  let host: { hidden: boolean; style: { setProperty: ReturnType<typeof vi.fn> } } | null = null;
  const warn = vi.fn();
  const requestIdleCallback = vi.fn((callback: () => void, options: { timeout: number }) =>
    setTimeout(callback, Math.min(idleDelay, options.timeout)));
  const window = {
    innerWidth: width,
    innerHeight: height,
    location: { pathname },
    addEventListener: events.addEventListener.bind(events),
    requestAnimationFrame: (callback: () => void) => frames.push(callback),
    setTimeout: (callback: () => Promise<void>, delay: number) => {
      timers.push({ callback, delay });
      return setTimeout(callback, delay);
    },
    clearTimeout,
    getComputedStyle: (image: ReturnType<typeof criticalImage>) => image.css,
    ...(idle ? { requestIdleCallback } : {}),
    ...(visualViewport ? { visualViewport: { width, height, addEventListener: viewportEvents.addEventListener.bind(viewportEvents) } } : {}),
  };
  const document = {
    readyState,
    addEventListener: domEvents.addEventListener.bind(domEvents),
    getElementById: (id: string) => spa && id === "root" ? {} : null,
    querySelector: (selector: string) => selector === "flowise-chatbot" ? host : null,
    querySelectorAll: vi.fn((selector: string) => images.filter(image => selector.split(", ").includes(image.selector))),
    documentElement: { dataset: { mysentryAppPainted: painted ? "true" : undefined } },
  };
  const context = vm.createContext({ window, document, console: { warn }, __loadChatbot: load });
  const execute = () => vm.runInContext(code, context);
  execute();
  return {
    window, document, timers, frames, load, warn, execute, requestIdleCallback,
    state: () => (window as typeof window & { __mysentryChatbotLoader?: { status: string } }).__mysentryChatbotLoader?.status,
    dom: () => domEvents.dispatchEvent(new Event("DOMContentLoaded")),
    paint: () => events.dispatchEvent(new Event("mysentry:app-painted")),
    frame: () => frames.shift()!(),
    event: (name: string) => events.dispatchEvent(new Event(name)),
    viewportResize: () => viewportEvents.dispatchEvent(new Event("resize")),
    addHost: () => host = { hidden: false, style: { setProperty: vi.fn() } },
  };
}

function firstPaint(h: ReturnType<typeof harness>) {
  h.frame();
  expect(h.timers).toHaveLength(0);
  h.frame();
}

describe("shared optional Flowise loader", () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  it("is deferred in the SPA and keeps CDN code out of main bootstrap", () => {
    const html = fs.readFileSync(path.join(root, "client/index.html"), "utf8");
    expect(html.match(/<script defer src="\/mysentry-chatbot\.js"><\/script>/g)).toHaveLength(1);
    expect(html).not.toContain("Chatbot.init");
    expect(imports).toHaveLength(1);
    expect(tree.statements.filter(ts.isImportDeclaration)).toHaveLength(0);
    expect(source).toContain("https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js");
    expect(fs.readFileSync(path.join(root, "client/src/main.tsx"), "utf8")).not.toContain("flowise-embed");
  });

  it("does not start the SDK at 2.3s or while critical load/decode is pending, then yields to idle", async () => {
    const logo = criticalImage({ selector: ".brand img", top: 20 });
    let resolveDecode!: () => void;
    const hero = criticalImage({ decode: vi.fn(() => new Promise<void>(resolve => { resolveDecode = resolve; })) });
    const h = harness({ images: [logo, hero], idle: true });
    firstPaint(h);
    await vi.advanceTimersByTimeAsync(2300);
    expect(h.state()).toBe("waiting-images");
    expect(h.load).not.toHaveBeenCalled();
    expect(h.requestIdleCallback).not.toHaveBeenCalled();
    logo.loaded(); hero.loaded();
    await vi.advanceTimersByTimeAsync(1200);
    expect(logo.decode).toHaveBeenCalledTimes(1);
    expect(hero.decode).toHaveBeenCalledTimes(1);
    expect(h.load).not.toHaveBeenCalled();
    resolveDecode();
    await vi.advanceTimersByTimeAsync(0);
    expect(h.state()).toBe("scheduled");
    expect(vi.getTimerCount()).toBe(1); // The 8s guard has been canceled.
    await vi.advanceTimersByTimeAsync(1199);
    expect(h.requestIdleCallback).not.toHaveBeenCalled();
    await vi.advanceTimersByTimeAsync(1);
    expect(h.requestIdleCallback).toHaveBeenCalledWith(expect.any(Function), { timeout: 2000 });
    expect(h.load).not.toHaveBeenCalled();
    await vi.advanceTimersByTimeAsync(50);
    expect(h.load).toHaveBeenCalledTimes(1);
    expect(h.state()).toBe("ready");
    await vi.advanceTimersByTimeAsync(10000);
    expect(h.load).toHaveBeenCalledTimes(1);
  });

  it.each([".brand img", "#heroDevice img"])("keeps the SDK pending for %s even when the other critical image is ready", async selector => {
    const logo = criticalImage({ selector: ".brand img", top: 20, complete: selector !== ".brand img" });
    const hero = criticalImage({ complete: selector !== "#heroDevice img" });
    const h = harness({ images: [logo, hero] });
    firstPaint(h);
    await vi.advanceTimersByTimeAsync(2300);
    expect(h.state()).toBe("waiting-images");
    expect(h.load).not.toHaveBeenCalled();
    (selector === ".brand img" ? logo : hero).loaded();
    await vi.advanceTimersByTimeAsync(1200);
    expect(h.load).toHaveBeenCalledTimes(1);
    expect(h.state()).toBe("ready");
  });

  it.each(["load", "decode"])("bounds a hung critical image %s at 8s and a busy idle queue at 2s", async phase => {
    let resolveDecode!: () => void;
    const hero = criticalImage({
      complete: phase === "decode",
      decode: vi.fn(() => new Promise<void>(resolve => { resolveDecode = resolve; })),
    });
    const h = harness({ images: [hero], idle: true, idleDelay: Infinity });
    firstPaint(h);
    h.execute(); h.paint(); // Neither embed re-execution nor SPA paint bypasses the gate.
    await vi.advanceTimersByTimeAsync(7999);
    expect(h.load).not.toHaveBeenCalled();
    expect(h.state()).toBe("waiting-images");
    await vi.advanceTimersByTimeAsync(1);
    expect(h.state()).toBe("scheduled");
    expect(hero.removeEventListener).toHaveBeenCalledTimes(2);
    await vi.advanceTimersByTimeAsync(1200);
    expect(h.requestIdleCallback).toHaveBeenCalledTimes(1);
    await vi.advanceTimersByTimeAsync(1999);
    expect(h.load).not.toHaveBeenCalled();
    await vi.advanceTimersByTimeAsync(1);
    expect(h.load).toHaveBeenCalledTimes(1);
    expect(h.state()).toBe("ready");
    if (phase === "decode") resolveDecode();
    hero.loaded(); hero.broken(); h.execute();
    await vi.advanceTimersByTimeAsync(10000);
    expect(h.load).toHaveBeenCalledTimes(1);
  });

  it("waits for cached image decode and then starts automatically without an idle API", async () => {
    let resolveDecode!: () => void;
    const hero = criticalImage({ complete: true, decode: vi.fn(() => new Promise<void>(resolve => { resolveDecode = resolve; })) });
    const h = harness({ images: [hero] });
    firstPaint(h);
    await vi.advanceTimersByTimeAsync(1200);
    expect(hero.decode).toHaveBeenCalledTimes(1);
    expect(h.load).not.toHaveBeenCalled();
    resolveDecode();
    await vi.advanceTimersByTimeAsync(1199);
    expect(h.load).not.toHaveBeenCalled();
    await vi.advanceTimersByTimeAsync(1);
    expect(h.load).toHaveBeenCalledTimes(1);
  });

  it.each(["error", "cached broken", "decode rejection", "decode throw", "no decode"])("fails open after %s without waiting the 8s cap", async failure => {
    const image = criticalImage({
      selector: ".hero-device img",
      complete: failure === "cached broken",
      naturalWidth: failure === "cached broken" ? 0 : 1270,
    });
    if (failure === "decode rejection") image.decode.mockRejectedValue(new Error("bad image"));
    if (failure === "decode throw") image.decode.mockImplementation(() => { throw new Error("decode unavailable"); });
    if (failure === "no decode") Object.defineProperty(image, "decode", { value: undefined });
    const h = harness({ images: [image] });
    firstPaint(h);
    if (failure === "error") image.broken();
    else if (failure !== "cached broken") image.loaded();
    await vi.advanceTimersByTimeAsync(1200);
    expect(h.load).toHaveBeenCalledTimes(1);
    expect(h.state()).toBe("ready");
    expect(h.warn).not.toHaveBeenCalled();
    expect(vi.getTimerCount()).toBe(0);
  });

  it("ignores offscreen/hidden critical matches and unrelated pending images without window.load", async () => {
    const logo = criticalImage({ selector: ".brand img", complete: true, top: 20 });
    const offscreen = criticalImage({ top: 2000 });
    const hidden = criticalImage({ visibility: "hidden" });
    const unrelated = criticalImage({ selector: ".feature-media img" });
    const h = harness({ images: [logo, offscreen, hidden, unrelated] });
    firstPaint(h);
    expect(h.document.querySelectorAll).toHaveBeenCalledWith(".brand img, #heroDevice img, .hero-device img");
    await vi.advanceTimersByTimeAsync(1200);
    expect(h.load).toHaveBeenCalledTimes(1);
    for (const image of [offscreen, hidden, unrelated]) {
      expect(image.decode).not.toHaveBeenCalled();
      expect(image.removeEventListener).not.toHaveBeenCalled();
    }
  });

  it("keeps SPA app-painted/1200ms sequencing unchanged even with pending images and an idle API", async () => {
    const hero = criticalImage();
    const h = harness({ spa: true, readyState: "loading", images: [hero], idle: true });
    h.dom();
    await vi.advanceTimersByTimeAsync(10000);
    expect(h.load).not.toHaveBeenCalled();
    expect(h.frames).toHaveLength(0);
    h.paint(); h.paint();
    await vi.advanceTimersByTimeAsync(1199);
    expect(h.load).not.toHaveBeenCalled();
    await vi.advanceTimersByTimeAsync(1);
    expect(h.load).toHaveBeenCalledTimes(1);
    expect(h.document.querySelectorAll).not.toHaveBeenCalled();
    expect(h.requestIdleCallback).not.toHaveBeenCalled();
    expect(hero.decode).not.toHaveBeenCalled();
  });

  it.each(["images", "idle"])("rechecks admin navigation during the standalone %s wait", async phase => {
    const hero = criticalImage();
    const h = harness({ images: [hero], idle: true });
    firstPaint(h);
    if (phase === "idle") {
      hero.loaded();
      await vi.advanceTimersByTimeAsync(1200);
      expect(h.requestIdleCallback).toHaveBeenCalledTimes(1);
    }
    h.window.location.pathname = "/admin/blog";
    if (phase === "images") hero.broken();
    await vi.advanceTimersByTimeAsync(10000);
    expect(h.load).not.toHaveBeenCalled();
    expect(h.state()).toBe("skipped");
  });

  it("keeps chat optional and available if critical-image inspection throws", async () => {
    const hero = criticalImage();
    hero.getBoundingClientRect.mockImplementation(() => { throw new Error("unavailable geometry"); });
    const h = harness({ images: [hero] });
    expect(() => firstPaint(h)).not.toThrow();
    await vi.advanceTimersByTimeAsync(1200);
    expect(h.load).toHaveBeenCalledTimes(1);
    expect(h.state()).toBe("ready");
  });

  it("waits for standalone DOM readiness, two frames and the optional delay", async () => {
    const init = vi.fn();
    const h = harness({ readyState: "loading", load: vi.fn().mockResolvedValue({ default: { init } }) });
    expect(h.frames).toHaveLength(0);
    h.paint();
    expect(h.timers).toHaveLength(0);
    h.dom();
    expect(h.frames).toHaveLength(1);
    firstPaint(h);
    expect(h.timers).toHaveLength(1);
    expect(h.timers[0].delay).toBe(1200);
    expect(h.load).not.toHaveBeenCalled();
    await vi.advanceTimersByTimeAsync(1200);
    expect(init).toHaveBeenCalledTimes(1);
    expect(h.state()).toBe("ready");
  });

  it("initializes a late-loaded standalone root without an SPA event", async () => {
    const h = harness();
    firstPaint(h);
    await vi.advanceTimersByTimeAsync(1200);
    expect(h.load).toHaveBeenCalledTimes(1);
  });

  it("does not treat SPA DOM readiness or frames as application paint", async () => {
    const h = harness({ spa: true, readyState: "loading", pathname: "/pricing" });
    h.dom();
    expect(h.frames).toHaveLength(0);
    expect(h.timers).toHaveLength(0);
    h.paint(); h.paint();
    expect(h.timers).toHaveLength(1);
    await h.timers[0].callback();
    expect(h.load).toHaveBeenCalledTimes(1);
  });

  it("honors the already-painted SPA marker even on a root SPA fallback", () => {
    const h = harness({ spa: true, painted: true });
    expect(h.timers).toHaveLength(1);
    expect(h.frames).toHaveLength(0);
  });

  it("guards repeated script execution before scheduling and during SDK loading", async () => {
    let resolve!: (value: object) => void;
    const init = vi.fn();
    const h = harness({ load: vi.fn(() => new Promise(done => { resolve = done; })) });
    h.execute();
    expect(h.frames).toHaveLength(1);
    firstPaint(h);
    h.execute();
    expect(h.timers).toHaveLength(1);
    await vi.advanceTimersByTimeAsync(1200);
    expect(h.state()).toBe("loading");
    h.execute();
    resolve({ default: { init } });
    await vi.advanceTimersByTimeAsync(0);
    h.execute(); h.paint();
    expect(init).toHaveBeenCalledTimes(1);
    expect(h.load).toHaveBeenCalledTimes(1);
  });

  it.each(["before", "during"])("does not replace an existing Flowise embed %s SDK load", async when => {
    let resolve!: (value: object) => void;
    const init = vi.fn();
    const h = harness({ spa: true, painted: true, load: vi.fn(() => new Promise(done => { resolve = done; })) });
    if (when === "before") h.addHost();
    const pending = h.timers[0].callback();
    if (when === "during") { h.addHost(); resolve({ default: { init } }); }
    await pending;
    expect(init).not.toHaveBeenCalled();
    expect(h.load).toHaveBeenCalledTimes(when === "before" ? 0 : 1);
  });

  it.each(["/admin", "/admin/blog", "/admin/blog/edit"])("does no startup work on %s", pathname => {
    const h = harness({ spa: true, painted: true, pathname });
    h.paint(); h.dom(); h.execute();
    expect(h.frames).toHaveLength(0);
    expect(h.timers).toHaveLength(0);
    expect(h.load).not.toHaveBeenCalled();
  });

  it("rechecks admin navigation before fetching and after SDK loading", async () => {
    const before = harness({ spa: true, painted: true });
    before.window.location.pathname = "/admin/blog";
    await before.timers[0].callback();
    expect(before.load).not.toHaveBeenCalled();
    let resolve!: (value: object) => void;
    const init = vi.fn();
    const during = harness({ spa: true, painted: true, load: vi.fn(() => new Promise(done => { resolve = done; })) });
    const pending = during.timers[0].callback();
    during.window.location.pathname = "/admin/blog";
    resolve({ default: { init } });
    await pending;
    expect(init).not.toHaveBeenCalled();
  });

  it.each(["CDN", "initialization", "invalid SDK"])("contains %s rejection without retry loops or startup failure", async failure => {
    const load = failure === "CDN"
      ? vi.fn().mockRejectedValue(new Error("CDN unavailable"))
      : vi.fn().mockResolvedValue({ default: failure === "invalid SDK" ? {} : { init: vi.fn().mockRejectedValue(new Error("SDK rejected")) } });
    const h = harness({ spa: true, painted: true, load });
    await expect(h.timers[0].callback()).resolves.toBeUndefined();
    expect(h.warn).toHaveBeenCalledTimes(1);
    expect(h.state()).toBe("failed");
    h.execute(); h.paint();
    expect(h.load).toHaveBeenCalledTimes(1);
    expect(h.timers).toHaveLength(1);
  });

  it("uses execution-time visual viewport dimensions, preserves branding and enables safe-area styling", async () => {
    const init = vi.fn();
    const h = harness({ spa: true, painted: true, width: 1440, height: 900, visualViewport: true, load: vi.fn().mockResolvedValue({ default: { init } }) });
    h.window.visualViewport!.width = 320;
    h.window.visualViewport!.height = 420;
    await h.timers[0].callback();
    const config = init.mock.calls[0][0];
    expect(config.chatflowid).toBe("343c9ce8-205b-434d-9c95-68737d97752e");
    expect(config.apiHost).toBe("https://flowise.zigron.com");
    expect(config.theme.chatWindow).toMatchObject({ width: 300, height: 300, title: "MySentry Assistant", welcomeMessage: "Hi there! What brings you in today?", textInput: { autoFocus: false }, footer: { company: "MySentry.AI" } });
    expect(config.theme.button).toMatchObject({ size: 50, customIconSrc: "/chatbot-icon.jpg", autoWindowOpen: { autoOpen: false, autoOpenOnMobile: false } });
    expect(config.theme.customCSS).toContain("safe-area-inset-bottom");
    expect(config.theme.customCSS).toContain("2147483000");
  });

  it("updates viewport constraints on resize and hides the existing widget on SPA admin navigation", async () => {
    let host!: ReturnType<ReturnType<typeof harness>["addHost"]>;
    const init = vi.fn(() => { host = h.addHost(); });
    const h = harness({ spa: true, painted: true, visualViewport: true, load: vi.fn().mockResolvedValue({ default: { init } }) });
    await h.timers[0].callback();
    expect(host.style.setProperty).toHaveBeenCalledWith("--mysentry-chat-height", "844px");
    h.window.visualViewport!.height = 400;
    h.viewportResize();
    expect(host.style.setProperty).toHaveBeenLastCalledWith("--mysentry-chat-height", "400px");
    h.window.location.pathname = "/admin/blog";
    h.event("pushState");
    expect(host.hidden).toBe(true);
    h.window.location.pathname = "/pricing";
    h.event("popstate");
    expect(host.hidden).toBe(false);
    expect(init).toHaveBeenCalledTimes(1);
  });
});
