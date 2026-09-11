import {
  Activity,
  ArrowRight,
  BellRing,
  HeartPulse,
  MapPin,
  Mic2,
  Radio,
  Smartphone,
  Users,
  Video,
  Watch,
} from "lucide-react";
import { Link } from "wouter";

const problems = [
  {
    icon: Watch,
    title: "A watch may not recognize every emergency",
    description: "Apple and Samsung both document conditions and limits for fall detection and SOS. A safety plan needs more than one way to ask for help.",
  },
  {
    icon: Mic2,
    title: "You may not be able to reach a device",
    description: "A configured MySentry voice command gives you another way to start a Panic Alarm when your phone or watch is out of reach.",
  },
  {
    icon: Users,
    title: "An alert still needs a response plan",
    description: "Family, responders, useful incident context, and professional monitoring need to know what happened and what to do next.",
  },
];

const capabilities = [
  {
    icon: BellRing,
    title: "More ways to start a Panic Alarm",
    description: "Use supported watch and phone controls, phone shake, supported button actions, or a configured voice command.",
  },
  {
    icon: HeartPulse,
    title: "AI-supported wellness analysis",
    description: "MySentry algorithms compare supported readings with a personal baseline and can start a Panic Alarm after a critical pattern is verified. Wellness analysis is not a medical diagnosis.",
  },
  {
    icon: MapPin,
    title: "Live location and phone context",
    description: "An eligible online Panic Alarm can share live location, phone battery level, and permitted phone audio or video when enabled.",
  },
  {
    icon: Smartphone,
    title: "One family across iOS and Android",
    description: "A supported Apple Watch or Samsung Galaxy Watch wearer can stay connected with configured family members and responders using supported iOS or Android phones.",
  },
  {
    icon: Radio,
    title: "24/7 professional monitoring",
    description: "The monitoring team can review an eligible event and, after verification, contact emergency services, including 911, when appropriate.",
  },
  {
    icon: Video,
    title: "Context beyond a device alert",
    description: "Permitted location, audio, video, battery, alert, and account context can help responders understand the situation during a supported workflow.",
  },
];

const watchPaths = [
  {
    name: "Apple Watch",
    native: "Keep Apple Fall Detection, Emergency SOS, and Medical ID emergency contacts enabled under Apple's documented setup conditions.",
    connected: "MySentry can connect an eligible Apple fall outcome or user-triggered alert to family, permitted phone context, and eligible 24/7 professional monitoring.",
    href: "/compare/apple-watch-fall-detection-vs-mysentry",
  },
  {
    name: "Samsung Galaxy Watch",
    native: "Keep Samsung hard-fall detection, Emergency SOS, assigned emergency contacts, and location settings enabled on a supported configuration.",
    connected: "MySentry can connect supported Samsung motion and wellness signals or a user-triggered alert to one wider family and monitoring workflow.",
    href: "/compare/samsung-galaxy-watch-vs-mysentry",
  },
];

export default function ComparisonSection() {
  return (
    <section className="bg-white py-24">
      <div className="container max-w-6xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#006a9c]">Your watch plus MySentry</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-[#0b2f4f] md:text-5xl">
            Keep the watch. Add the response network.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-700">
            Apple Watch and Samsung Galaxy Watch provide valuable wrist-based safety features. MySentry connects supported watch events with voice panic, wellness analysis, mixed-device family alerts, live phone context, and eligible 24/7 professional monitoring.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {problems.map(({ icon: Icon, title, description }) => (
            <article key={title} className="rounded-3xl border border-slate-200 bg-[#f8fbfa] p-7">
              <Icon className="h-7 w-7 text-[#0b6848]" aria-hidden="true" />
              <h3 className="mt-5 text-xl font-bold text-[#0b2f4f]">{title}</h3>
              <p className="mt-3 leading-relaxed text-slate-700">{description}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-[2rem] bg-[#0b2f4f] p-7 text-white md:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#b7edff]">What MySentry adds</p>
            <h3 className="mt-4 text-3xl font-bold text-white md:text-4xl">One connected safety workflow around the devices you already use</h3>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(({ icon: Icon, title, description }) => (
              <article key={title} className="rounded-2xl border border-white/15 bg-white/10 p-6">
                <Icon className="h-6 w-6 text-[#b7edff]" aria-hidden="true" />
                <h4 className="mt-4 text-lg font-bold text-white">{title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-[#e5edf5]">{description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {watchPaths.map(path => (
            <article key={path.name} className="rounded-3xl border border-slate-200 bg-[#f8fbfa] p-7 shadow-sm md:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#007bc2]">{path.name} plus MySentry</p>
              <h3 className="mt-3 text-2xl font-bold text-[#0b2f4f]">Use both parts of the safety plan</h3>
              <div className="mt-6 space-y-5">
                <div>
                  <p className="font-bold text-[#0b2f4f]">Keep the native watch features</p>
                  <p className="mt-2 leading-relaxed text-slate-700">{path.native}</p>
                </div>
                <div>
                  <p className="font-bold text-[#0b2f4f]">Connect the wider response</p>
                  <p className="mt-2 leading-relaxed text-slate-700">{path.connected}</p>
                </div>
              </div>
              <Link href={path.href} className="mt-7 inline-flex items-center gap-2 font-bold text-[#005f91] underline decoration-2 underline-offset-4 hover:text-[#0b6848]">
                Read the detailed comparison <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-[#0b6848]/20 bg-[#edf8f1] p-7 text-center md:p-9">
          <p className="mx-auto max-w-4xl text-sm leading-relaxed text-slate-700">
            Features depend on supported devices, app state, permissions, connectivity, plan, region, and service availability. If you can call 911 directly during an immediate emergency, do so.
          </p>
          <Link href="/pricing#pricing-plans" className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#0b6848] px-8 py-4 text-lg font-bold text-white shadow-lg shadow-[#0b6848]/20 transition hover:bg-[#084f38]">
            Review plans and eligibility <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
