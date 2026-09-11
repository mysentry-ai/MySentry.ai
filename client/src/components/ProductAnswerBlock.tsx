import { ArrowRight, Settings2, ShieldCheck, Users } from "lucide-react";
import { Link } from "wouter";

const answers = [
  {
    icon: ShieldCheck,
    title: "What is MySentry?",
    text: "MySentry is a personal safety and wellness service for individuals, families, and teams. It brings user-activated alerts, supported-device detection, trusted contacts, wellness signals, and eligible professional monitoring into one app.",
  },
  {
    icon: Settings2,
    title: "How does it work?",
    text: "You configure supported devices, contacts, permissions, and alert preferences. When an eligible alert starts, permitted context may be shared for review and appropriate next steps.",
  },
  {
    icon: Users,
    title: "Who can stay connected?",
    text: "Configured family members and responders can use supported iOS or Android phones. Eligible alerts can also reach 24/7 professional monitoring, which can verify the event and contact emergency services when appropriate.",
  },
];

export default function ProductAnswerBlock() {
  return (
    <section aria-labelledby="mysentry-overview" className="border-y border-[#386758]/15 bg-white py-14">
      <div className="container max-w-6xl">
        <div className="mb-9 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#255044]">MySentry at a glance</p>
          <h2 id="mysentry-overview" className="text-3xl font-bold leading-tight text-[#0F172A] md:text-4xl">
            One connected place to prepare, activate, and share safety context.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {answers.map(({ icon: Icon, title, text }) => (
            <article key={title} className="rounded-3xl border border-[#386758]/15 bg-[#f8fbf9] p-6">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#004F7B]/10 text-[#004F7B]">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A]">{title}</h3>
              <p className="mt-3 text-base leading-relaxed text-[#475569]">{text}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-5">
          <Link href="/features" className="inline-flex items-center gap-2 font-bold text-[#004F7B] hover:underline">
            Explore Current Features <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link href="/pricing" className="inline-flex items-center gap-2 font-bold text-[#255044] hover:underline">
            Compare Plans and Eligibility <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
