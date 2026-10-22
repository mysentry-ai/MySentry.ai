import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  BellRing,
  CarFront,
  HeartPulse,
  MessageCircleQuestion,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { useState } from "react";
import { HOMEPAGE_ASSETS } from "./homepageContent";

type Scenario = "fall" | "crash" | "panic" | "health";
type Step = { title: string; text: string; icon: typeof Activity };

const scenarios: Record<
  Scenario,
  {
    label: string;
    icon: typeof Activity;
    image: string;
    alt: string;
    steps: Step[];
  }
> = {
  fall: {
    label: "Fall Detection",
    icon: ShieldCheck,
    image: HOMEPAGE_ASSETS.contactsScreen,
    alt: "MySentry emergency contacts screen on a phone",
    steps: [
      {
        title: "A fall may be detected.",
        text: "A compatible watch identifies a possible fall.",
        icon: Activity,
      },
      {
        title: "A safety check follows.",
        text: "The supported device or app asks if you're okay.",
        icon: MessageCircleQuestion,
      },
      {
        title: "An alert may start.",
        text: "If you request help or cannot respond, MySentry can trigger a Panic Alarm.",
        icon: BellRing,
      },
      {
        title: "Your people can be notified.",
        text: "Chosen contacts and eligible monitoring receive permitted information.",
        icon: UsersRound,
      },
    ],
  },
  crash: {
    label: "Crash Detection",
    icon: CarFront,
    image: HOMEPAGE_ASSETS.contactsScreen,
    alt: "MySentry emergency contacts screen on a phone",
    steps: [
      {
        title: "A serious impact is detected.",
        text: "Supported sensors identify a possible crash.",
        icon: CarFront,
      },
      {
        title: "MySentry checks on you.",
        text: "Confirm you're safe or ask for help.",
        icon: MessageCircleQuestion,
      },
      {
        title: "No response may trigger an alert.",
        text: "The enabled safety workflow can escalate.",
        icon: BellRing,
      },
      {
        title: "Contacts get context.",
        text: "Permitted location and details help them understand what's happening.",
        icon: UsersRound,
      },
    ],
  },
  panic: {
    label: "Panic Alarm",
    icon: BellRing,
    image: HOMEPAGE_ASSETS.panicWatch,
    alt: "MySentry Panic Alarm control on a compatible smartwatch",
    steps: [
      {
        title: "You request help.",
        text: "Use your phone or supported watch.",
        icon: BellRing,
      },
      {
        title: "The alert flow begins.",
        text: "An in-app tap includes a short cancellation countdown.",
        icon: MessageCircleQuestion,
      },
      {
        title: "The alarm becomes active.",
        text: "If not canceled, MySentry starts the configured alert.",
        icon: Activity,
      },
      {
        title: "Connected people can respond.",
        text: "Trusted contacts and eligible monitoring may receive the alarm.",
        icon: UsersRound,
      },
    ],
  },
  health: {
    label: "Health Monitoring",
    icon: HeartPulse,
    image: HOMEPAGE_ASSETS.contactsScreen,
    alt: "MySentry emergency contacts screen on a phone",
    steps: [
      {
        title: "Your watch shares supported readings.",
        text: "Available signals depend on your device and permissions.",
        icon: Activity,
      },
      {
        title: "MySentry evaluates a concern.",
        text: "Supported heart-rate workflows use confirmation rules.",
        icon: MessageCircleQuestion,
      },
      {
        title: "A critical alert may start.",
        text: "When conditions are met, MySentry can escalate.",
        icon: BellRing,
      },
      {
        title: "Your safety network can be alerted.",
        text: "Configured contacts and eligible monitoring receive permitted context.",
        icon: UsersRound,
      },
    ],
  },
};

export default function HomepageWalkthrough() {
  const [selected, setSelected] = useState<Scenario>("fall");
  const scenario = scenarios[selected];
  return (
    <div className="hp-walkthrough">
      <div
        className="hp-tablist"
        role="tablist"
        aria-label="Choose a safety workflow"
      >
        {(Object.keys(scenarios) as Scenario[]).map(key => {
          const item = scenarios[key];
          const Icon = item.icon;
          const active = key === selected;
          return (
            <button
              className={`hp-tab ${active ? "is-active" : ""}`}
              id={`hp-tab-${key}`}
              key={key}
              type="button"
              role="tab"
              aria-selected={active}
              aria-controls={`hp-panel-${key}`}
              onClick={() => setSelected(key)}
            >
              <Icon aria-hidden="true" size={18} />
              {item.label}
            </button>
          );
        })}
      </div>
      <div
        className="hp-walkthrough-panel"
        id={`hp-panel-${selected}`}
        role="tabpanel"
        aria-labelledby={`hp-tab-${selected}`}
      >
        <div className="hp-walkthrough-phone" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.img
              key={selected}
              src={scenario.image}
              alt={scenario.alt}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 12 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            />
          </AnimatePresence>
        </div>
        <div className="hp-step-grid">
          {scenario.steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article className="hp-step-card" key={step.title}>
                <span className="hp-step-index">0{index + 1}</span>
                <Icon className="hp-step-icon" aria-hidden="true" size={23} />
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            );
          })}
        </div>
      </div>
      <p className="hp-legal-note">
        Features vary by compatible device, enabled settings, permissions and
        connectivity. MySentry is not a medical device.
      </p>
    </div>
  );
}
