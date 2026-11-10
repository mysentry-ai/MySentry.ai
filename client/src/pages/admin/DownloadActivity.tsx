import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import {
  Link2,
  MousePointerClick,
  RefreshCw,
  Smartphone,
  ExternalLink,
  AlertCircle,
} from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const names: Record<string, string> = {
  ios: "App Store",
  android: "Google Play",
  ring: "Ring Appstore",
  other: "Desktop / other",
};
const number = (value: number) => value.toLocaleString();
const date = (value: number) =>
  new Date(value).toLocaleDateString(undefined, {
    timeZone: "UTC",
    month: "short",
    day: "numeric",
  });

export default function DownloadActivity() {
  const [days, setDays] = useState<7 | 30 | 90>(30);
  const query = trpc.blog.downloadActivitySummary.useQuery(
    { days },
    { retry: false, staleTime: 30000 }
  );
  const data = query.data;
  return (
    <main
      className="download-activity-report mx-auto max-w-[1300px] space-y-6 text-slate-900"
      aria-labelledby="download-activity-heading"
    >
      <style>{`.download-activity-report .activity-metric h2{font-size:14px!important;line-height:1.45!important;font-weight:600!important;letter-spacing:0!important}.download-activity-report .activity-metric .activity-metric-value{font-size:32px!important;line-height:1.15!important;font-weight:700!important;color:#004f7b!important}`}</style>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#0b6848]">
            Private activity report
          </p>
          <h1
            id="download-activity-heading"
            className="mt-2 text-2xl font-bold text-[#004f7b]"
          >
            Download link activity
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            See how often your smart link is opened and which stores visitors
            choose. These are recorded visits and store actions, not unique
            people or completed installs.
          </p>
          <a
            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#004f7b] underline underline-offset-4"
            href="https://mysentry-5pk35fzr.manus.space/download"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Link2 className="h-4 w-4" aria-hidden="true" />
            Open independent smart download link
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <label className="text-sm text-slate-700" htmlFor="download-period">
            Report period
          </label>
          <select
            id="download-period"
            className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:outline-[#007bc2]"
            value={days}
            onChange={event =>
              setDays(Number(event.target.value) as 7 | 30 | 90)
            }
          >
            <option value={7}>Last 7 days</option>
            <option value={30}>Last 30 days</option>
            <option value={90}>Last 90 days</option>
          </select>
          <Button
            type="button"
            variant="outline"
            className="border-slate-300 bg-white text-[#004f7b]"
            disabled={query.isFetching}
            onClick={() => void query.refetch()}
          >
            <RefreshCw className="mr-2 h-4 w-4" aria-hidden="true" />
            Refresh
          </Button>
        </div>
      </div>
      {query.isLoading ? (
        <div
          role="status"
          className="rounded-2xl border border-slate-200 bg-white p-8 text-slate-600"
        >
          Loading download activity...
        </div>
      ) : query.error ? (
        <div
          role="alert"
          className="rounded-2xl border border-amber-300 bg-amber-50 p-6 text-amber-950"
        >
          <div className="flex items-center gap-2 font-semibold">
            <AlertCircle className="h-5 w-5" aria-hidden="true" />
            Tracking data is not available
          </div>
          <p className="mt-2 text-sm leading-6">
            The download tracking storage is unavailable. This is not a zero
            count. Your download link and store buttons still work.
          </p>
          <p className="mt-2 text-sm leading-6">
            Try refreshing the report. Visits from before tracking was activated
            cannot be reconstructed by this counter.
          </p>
        </div>
      ) : data ? (
        <>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              {
                label: "All-time link opens",
                value: data.allTimeVisits,
                icon: Link2,
                note: "Since the first recorded visit",
              },
              {
                label: `Link opens, last ${days} days`,
                value: data.visits,
                icon: Link2,
                note: "Anonymous navigation visits",
              },
              {
                label: "Automatic redirect attempts",
                value: data.redirectAttempts,
                icon: Smartphone,
                note: "iOS and Android, selected period",
              },
              {
                label: "Store-click actions",
                value: data.storeClicks,
                icon: MousePointerClick,
                note: "At most one per visit per store",
              },
            ].map(card => (
              <section
                key={card.label}
                className="activity-metric rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-sm font-semibold leading-5 text-slate-700">
                    {card.label}
                  </h2>
                  <card.icon
                    className="h-5 w-5 shrink-0 text-[#0b6848]"
                    aria-hidden="true"
                  />
                </div>
                <p className="activity-metric-value mt-4 text-3xl font-bold text-[#004f7b]">
                  {number(card.value)}
                </p>
                <p className="mt-2 text-xs leading-5 text-slate-500">
                  {card.note}
                </p>
              </section>
            ))}
          </div>
          <div className="grid gap-5 lg:grid-cols-[2fr_1fr]">
            <section className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="text-lg font-semibold text-[#004f7b]">
                Daily link opens
              </h2>
              <p className="mt-1 text-xs text-slate-500">
                UTC calendar days. The detailed values are also in the table
                below.
              </p>
              <div
                className="mt-5 h-64"
                role="img"
                aria-label={`Daily recorded link visits for the last ${days} days, ${data.visits} total`}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={data.daily}
                    margin={{ top: 8, right: 8, bottom: 0, left: -20 }}
                  >
                    <CartesianGrid vertical={false} stroke="#e2e8f0" />
                    <XAxis
                      dataKey="day"
                      tickFormatter={date}
                      minTickGap={35}
                      tick={{ fontSize: 11 }}
                    />
                    <YAxis allowDecimals={false} tick={{ fontSize: 11 }} />
                    <Tooltip labelFormatter={value => date(Number(value))} />
                    <Bar
                      dataKey="visits"
                      name="Link opens"
                      fill="#004f7b"
                      radius={[4, 4, 0, 0]}
                      isAnimationActive={false}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </section>
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="text-lg font-semibold text-[#004f7b]">
                Device breakdown
              </h2>
              <p className="mt-1 text-xs text-slate-500">
                Recorded visits, selected period.
              </p>
              <dl className="mt-5 space-y-4">
                {data.platforms.map(row => (
                  <div
                    key={row.platform}
                    className="flex items-center justify-between gap-3 border-b border-slate-100 pb-4"
                  >
                    <dt className="text-sm text-slate-700">
                      {row.platform === "ios"
                        ? "iPhone / iPad"
                        : row.platform === "android"
                          ? "Android"
                          : "Desktop / other"}
                    </dt>
                    <dd className="font-semibold text-[#004f7b]">
                      {number(row.visits)}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          </div>
          <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <h2 className="p-5 text-lg font-semibold text-[#004f7b]">
              Store actions
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <caption className="sr-only">
                  Recorded store actions for the selected report period
                </caption>
                <thead className="bg-slate-50 text-slate-600">
                  <tr>
                    <th scope="col" className="px-5 py-3">
                      Store
                    </th>
                    <th scope="col" className="px-5 py-3">
                      Redirect attempts
                    </th>
                    <th scope="col" className="px-5 py-3">
                      Visits with a click
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.stores.map(row => (
                    <tr key={row.store} className="border-t border-slate-100">
                      <th
                        scope="row"
                        className="px-5 py-4 font-medium text-slate-800"
                      >
                        {names[row.store]}
                      </th>
                      <td className="px-5 py-4">
                        {number(row.redirectAttempts)}
                      </td>
                      <td className="px-5 py-4">{number(row.clicks)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          <details className="rounded-2xl border border-slate-200 bg-white p-5">
            <summary className="cursor-pointer font-semibold text-[#004f7b]">
              Daily counts and CSV export
            </summary>
            <Button
              type="button"
              variant="outline"
              className="my-4 bg-white text-[#004f7b]"
              onClick={() => {
                const csv = [
                  "UTC date,Link opens,Automatic redirect attempts,Store-click actions",
                  ...data.daily.map(
                    row =>
                      `${new Date(row.day).toISOString().slice(0, 10)},${row.visits},${row.redirectAttempts},${row.clicks}`
                  ),
                ].join("\n");
                const url = URL.createObjectURL(
                  new Blob([csv], { type: "text/csv;charset=utf-8" })
                );
                const link = document.createElement("a");
                link.href = url;
                link.download = "mysentry-download-activity.csv";
                link.click();
                setTimeout(() => URL.revokeObjectURL(url), 1000);
              }}
            >
              Export daily counts
            </Button>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr>
                    <th scope="col" className="py-3 pr-4">
                      Date (UTC)
                    </th>
                    <th scope="col" className="pr-4">
                      Opens
                    </th>
                    <th scope="col" className="pr-4">
                      Redirect attempts
                    </th>
                    <th scope="col">Store-click actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[...data.daily].reverse().map(row => (
                    <tr key={row.day} className="border-t border-slate-100">
                      <th scope="row" className="py-3 pr-4 font-normal">
                        {date(row.day)}
                      </th>
                      <td className="pr-4">{row.visits}</td>
                      <td className="pr-4">{row.redirectAttempts}</td>
                      <td>{row.clicks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </details>
          <p className="text-xs leading-6 text-slate-600">
            {data.startedAt
              ? `First recorded activity: ${new Date(data.startedAt).toLocaleString()}. `
              : "No activity has been recorded yet. "}
            Tracking stores no IP addresses, names, email addresses, cookies, or
            persistent visitor IDs. Privacy opt-outs and recognized automated
            requests are excluded. Blocked or undelivered requests may be
            missed. Store clicks are counted once per navigation per store, so
            clicking multiple stores can count more than one action for a visit.
          </p>
        </>
      ) : null}
    </main>
  );
}
