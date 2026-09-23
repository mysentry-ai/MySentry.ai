import { useMemo, useState } from "react";
import { trpc } from "@/lib/trpc";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  CheckCircle2,
  Clock3,
  Inbox,
  Mail,
  MessageSquareText,
  Phone,
  RefreshCw,
  Search,
  ShieldCheck,
  XCircle,
} from "lucide-react";

type Submission = {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  subject: string | null;
  message: string;
  source: string | null;
  status: "new" | "read" | "responded" | "archived";
  createdAt: Date;
};

type PreferenceState = "confirmed" | "not selected" | null;

function preferenceFromMessage(message: string, label: string): PreferenceState {
  const match = message.match(new RegExp(`${label}: (confirmed|not selected)`));
  return match?.[1] === "confirmed"
    ? "confirmed"
    : match?.[1] === "not selected"
      ? "not selected"
      : null;
}

function PreferenceBadge({
  label,
  state,
}: {
  label: string;
  state: PreferenceState;
}) {
  if (!state) return null;

  const confirmed = state === "confirmed";
  return (
    <Badge
      className={
        confirmed
          ? "border border-emerald-200 bg-emerald-50 text-emerald-800 hover:bg-emerald-50"
          : "border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-50"
      }
    >
      {confirmed ? (
        <CheckCircle2 className="mr-1 h-3.5 w-3.5" aria-hidden="true" />
      ) : (
        <XCircle className="mr-1 h-3.5 w-3.5" aria-hidden="true" />
      )}
      {label}: {state}
    </Badge>
  );
}

function StatusBadge({ status }: { status: Submission["status"] }) {
  const styles = {
    new: "border border-blue-200 bg-blue-50 text-blue-800 hover:bg-blue-50",
    read: "border border-amber-200 bg-amber-50 text-amber-800 hover:bg-amber-50",
    responded:
      "border border-emerald-200 bg-emerald-50 text-emerald-800 hover:bg-emerald-50",
    archived: "border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-50",
  };

  return <Badge className={styles[status]}>{status}</Badge>;
}

function formatDate(value: Date) {
  return new Date(value).toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export default function SubmissionList() {
  const [query, setQuery] = useState("");
  const submissionsQuery = trpc.blog.submissions.list.useQuery({ limit: 250 });

  const submissions = submissionsQuery.data as Submission[] | undefined;
  const normalizedQuery = query.trim().toLowerCase();
  const filteredSubmissions = useMemo(() => {
    const rows = submissions ?? [];
    if (!normalizedQuery) return rows;

    return rows.filter(submission =>
      [
        submission.name,
        submission.email,
        submission.phone,
        submission.subject,
        submission.source,
        submission.message,
      ]
        .filter(Boolean)
        .some(value => value!.toLowerCase().includes(normalizedQuery))
    );
  }, [normalizedQuery, submissions]);

  if (submissionsQuery.isLoading) {
    return (
      <div className="flex min-h-64 items-center justify-center rounded-2xl border border-slate-200 bg-white">
        <div className="flex items-center gap-3 text-sm text-slate-600">
          <RefreshCw className="h-5 w-5 animate-spin text-[#005f91]" aria-hidden="true" />
          Loading website submissions...
        </div>
      </div>
    );
  }

  if (submissionsQuery.error) {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-red-900">
        <h1 className="text-xl font-bold">Submissions are not available</h1>
        <p className="mt-2 leading-6">{submissionsQuery.error.message}</p>
        <Button
          type="button"
          variant="outline"
          className="mt-4 border-red-300 bg-white text-red-800 hover:bg-red-100"
          onClick={() => submissionsQuery.refetch()}
        >
          <RefreshCw className="mr-2 h-4 w-4" aria-hidden="true" />
          Try again
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[1400px] space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#005f91]">
            Private admin area
          </p>
          <h1 className="mt-2 text-2xl font-bold text-[#232020]">
            Website submissions
          </h1>
          <p className="mt-1 text-sm text-[#5C5C5C]">
            {submissions?.length ?? 0} saved form record{(submissions?.length ?? 0) === 1 ? "" : "s"}, including SMS communication preferences.
          </p>
        </div>
        <Button
          type="button"
          variant="outline"
          className="border-[#005f91]/30 bg-white text-[#005f91] hover:bg-[#eaf5fb]"
          onClick={() => submissionsQuery.refetch()}
          disabled={submissionsQuery.isFetching}
        >
          <RefreshCw
            className={`mr-2 h-4 w-4 ${submissionsQuery.isFetching ? "animate-spin" : ""}`}
            aria-hidden="true"
          />
          Refresh
        </Button>
      </div>

      <div className="relative max-w-lg">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
          aria-hidden="true"
        />
        <Input
          type="search"
          value={query}
          onChange={event => setQuery(event.target.value)}
          placeholder="Search name, email, phone, source, or preference"
          className="h-11 border-slate-300 bg-white pl-9 text-slate-950 focus-visible:border-[#005f91] focus-visible:ring-[#005f91]/25"
        />
      </div>

      {filteredSubmissions.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
          <Inbox className="mx-auto h-10 w-10 text-[#005f91]" aria-hidden="true" />
          <h2 className="mt-4 text-lg font-bold text-slate-950">
            {normalizedQuery ? "No matching submissions" : "No saved submissions yet"}
          </h2>
          <p className="mx-auto mt-2 max-w-md leading-6 text-slate-600">
            {normalizedQuery
              ? "Try a different name, email address, phone number, source, or preference."
              : "Completed website contact forms and SMS communication preference forms will appear here."}
          </p>
        </div>
      ) : (
        <>
          <div className="hidden overflow-hidden rounded-2xl border border-slate-200 bg-white lg:block">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[980px] text-left text-sm">
                <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-600">
                  <tr>
                    <th className="px-5 py-4 font-bold">Contact</th>
                    <th className="px-5 py-4 font-bold">Submission</th>
                    <th className="px-5 py-4 font-bold">Preferences</th>
                    <th className="px-5 py-4 font-bold">Received</th>
                    <th className="px-5 py-4 font-bold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {filteredSubmissions.map(submission => {
                    const smsPreference = preferenceFromMessage(
                      submission.message,
                      "SMS Communication Consent"
                    );
                    const privacyAcknowledgment = preferenceFromMessage(
                      submission.message,
                      "Privacy Policy acknowledgment"
                    );
                    const isSmsPreference = Boolean(smsPreference);

                    return (
                      <tr key={submission.id} className="align-top transition-colors hover:bg-slate-50">
                        <td className="px-5 py-4">
                          <p className="font-semibold text-slate-950">{submission.name}</p>
                          <a
                            href={`mailto:${submission.email}`}
                            className="mt-1 inline-flex items-center gap-1 text-[#005f91] hover:underline"
                          >
                            <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                            {submission.email}
                          </a>
                          {submission.phone && (
                            <p className="mt-1 inline-flex items-center gap-1 text-slate-600">
                              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                              {submission.phone}
                            </p>
                          )}
                        </td>
                        <td className="max-w-sm px-5 py-4">
                          <p className="font-medium text-slate-900">
                            {submission.subject || "Website contact request"}
                          </p>
                          {submission.source && (
                            <p className="mt-1 text-xs text-slate-500">Source: {submission.source}</p>
                          )}
                          <p className="mt-2 line-clamp-3 leading-6 text-slate-600">
                            {isSmsPreference
                              ? "SMS communication preference record"
                              : submission.message}
                          </p>
                        </td>
                        <td className="px-5 py-4">
                          {isSmsPreference ? (
                            <div className="flex max-w-56 flex-wrap gap-2">
                              <PreferenceBadge label="SMS" state={smsPreference} />
                              <PreferenceBadge label="Privacy" state={privacyAcknowledgment} />
                            </div>
                          ) : (
                            <span className="text-slate-500">Not applicable</span>
                          )}
                        </td>
                        <td className="whitespace-nowrap px-5 py-4 text-slate-600">
                          <span className="inline-flex items-center gap-1.5">
                            <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
                            {formatDate(submission.createdAt)}
                          </span>
                        </td>
                        <td className="px-5 py-4">
                          <StatusBadge status={submission.status} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid gap-4 lg:hidden">
            {filteredSubmissions.map(submission => {
              const smsPreference = preferenceFromMessage(
                submission.message,
                "SMS Communication Consent"
              );
              const privacyAcknowledgment = preferenceFromMessage(
                submission.message,
                "Privacy Policy acknowledgment"
              );
              const isSmsPreference = Boolean(smsPreference);

              return (
                <article key={submission.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h2 className="font-bold text-slate-950">{submission.name}</h2>
                      <p className="mt-1 text-sm text-slate-600">
                        {submission.subject || "Website contact request"}
                      </p>
                    </div>
                    <StatusBadge status={submission.status} />
                  </div>
                  <div className="mt-4 space-y-2 text-sm">
                    <a href={`mailto:${submission.email}`} className="flex items-center gap-2 text-[#005f91] hover:underline">
                      <Mail className="h-4 w-4" aria-hidden="true" />
                      {submission.email}
                    </a>
                    {submission.phone && (
                      <p className="flex items-center gap-2 text-slate-700">
                        <Phone className="h-4 w-4" aria-hidden="true" />
                        {submission.phone}
                      </p>
                    )}
                    <p className="flex items-center gap-2 text-slate-600">
                      <Clock3 className="h-4 w-4" aria-hidden="true" />
                      {formatDate(submission.createdAt)}
                    </p>
                  </div>
                  {submission.source && (
                    <p className="mt-4 text-xs text-slate-500">Source: {submission.source}</p>
                  )}
                  {isSmsPreference ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      <PreferenceBadge label="SMS" state={smsPreference} />
                      <PreferenceBadge label="Privacy" state={privacyAcknowledgment} />
                    </div>
                  ) : (
                    <p className="mt-4 whitespace-pre-wrap leading-6 text-slate-700">{submission.message}</p>
                  )}
                </article>
              );
            })}
          </div>
        </>
      )}

      <p className="flex items-start gap-2 rounded-xl border border-[#005f91]/20 bg-[#eaf5fb] px-4 py-3 text-sm leading-6 text-slate-700">
        <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#0b6848]" aria-hidden="true" />
        SMS communication choices are displayed exactly as submitted. An unchecked SMS box is shown as not selected and does not authorize text messages.
      </p>
    </div>
  );
}
