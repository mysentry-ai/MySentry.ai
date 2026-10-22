import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  BellRing,
  HeartPulse,
  MessageCircleQuestion,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { useState } from "react";
import { HOMEPAGE_ASSETS } from "./homepageContent";

type Scenario = "fall" | "panic" | "wellness";
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
    image: HOMEPAGE_ASSETS.fallDetection,
    alt: "MySentry fall detected alert shown on a compatible smartwatch",
    steps: [
      {
        title: "A possible fall is noticed.",
        text: "A compatible watch can identify a possible fall.",
        icon: Activity,
      },
      {
        title: "A safety check follows.",
        text: "The supported device or app can ask whether you are okay.",
        icon: MessageCircleQuestion,
      },
      {
        title: "An alert can begin.",
        text: "If you request help or cannot respond, a configured workflow can start.",
        icon: BellRing,
      },
      {
        title: "Your people get context.",
        text: "Chosen contacts and eligible monitoring can receive permitted information.",
        icon: UsersRound,
      },
    ],
  },
  panic: {
    label: "Panic Alarm",
    icon: BellRing,
    image: HOMEPAGE_ASSETS.panicFlow,
    alt: "MySentry Panic Alarm flow showing a countdown, location and permitted video context",
    steps: [
      {
        title: "You request help.",
        text: "Use the phone or a supported watch to begin a Panic Alarm.",
        icon: BellRing,
      },
      {
        title: "You can cancel in time.",
        text: "An in-app tap includes a short cancellation countdown.",
        icon: MessageCircleQuestion,
      },
      {
        title: "The configured alert starts.",
        text: "If it is not canceled, MySentry begins the selected alert workflow.",
        icon: Activity,
      },
      {
        title: "People can respond.",
        text: "Trusted contacts and eligible monitoring may receive permitted context.",
        icon: UsersRound,
      },
    ],
  },
  wellness: {
    label: "Wellness Signals",
    icon: HeartPulse,
    image: HOMEPAGE_ASSETS.healthMonitoring,
    alt: "MySentry wellness monitoring and emergency contacts interfaces",
    steps: [
      {
        title: "Your device shares supported readings.",
        text: "Available wellness signals depend on your device and permissions.",
        icon: Activity,
      },
      {
        title: "A configured workflow reviews a concern.",
        text: "MySentry can use supported signal patterns and selected settings.",
        icon: MessageCircleQuestion,
      },
      {
        title: "An alert may be configured.",
        text: "When your selected conditions are met, an alert workflow can begin.",
        icon: BellRing,
      },
      {
        title: "Your safety network is connected.",
        text: "Configured contacts and eligible monitoring can receive permitted context.",
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
        connectivity. MySentry supports wellness awareness and is not a medical
        device.
      </p>
    </div>
  );
}
