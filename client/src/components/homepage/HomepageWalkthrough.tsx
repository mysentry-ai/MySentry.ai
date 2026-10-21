import { useRef, useState, type KeyboardEvent } from "react";
import {
  Activity,
  BellRing,
  Car,
  HeartPulse,
  MessageCircleQuestion,
  UsersRound,
} from "lucide-react";
import {
  HOME_ASSETS,
  HOME_WORKFLOWS,
  type HomeScenario,
} from "./homepageContent";

const scenarios: HomeScenario[] = ["fall", "crash", "panic", "health"];
const scenarioIcons = [Activity, Car, BellRing, HeartPulse];
const stepIcons = [Activity, MessageCircleQuestion, BellRing, UsersRound];

export default function HomepageWalkthrough() {
  const [scenario, setScenario] = useState<HomeScenario>("fall");
  const [selectedStep, setSelectedStep] = useState(0);
  const [animate, setAnimate] = useState(false);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const workflow = HOME_WORKFLOWS[scenario];

  const onKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    let next: number;
    if (event.key === "ArrowRight") next = (index + 1) % scenarios.length;
    else if (event.key === "ArrowLeft")
      next = (index + scenarios.length - 1) % scenarios.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = scenarios.length - 1;
    else return;
    event.preventDefault();
    // Keyboard content changes are instant; they never wait for an animation.
    setAnimate(false);
    setSelectedStep(0);
    setScenario(scenarios[next]);
    tabs.current[next]?.focus();
  };

  return (
    <div className="hp-walkthrough">
      <div className="hp-tab-scroll">
        <div
          role="tablist"
          aria-label="Choose a safety moment"
          className="hp-tabs"
        >
          {scenarios.map((id, index) => {
            const Icon = scenarioIcons[index];
            return (
              <button
                key={id}
                ref={element => {
                  tabs.current[index] = element;
                }}
                type="button"
                role="tab"
                id={`workflow-tab-${id}`}
                aria-controls={`workflow-panel-${id}`}
                aria-selected={scenario === id}
                tabIndex={scenario === id ? 0 : -1}
                onKeyDown={event => onKeyDown(event, index)}
                onClick={event => {
                  setAnimate(event.detail > 0);
                  setSelectedStep(0);
                  setScenario(id);
                }}
              >
                <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
                {HOME_WORKFLOWS[id].label}
              </button>
            );
          })}
        </div>
      </div>
      <p className="hp-tab-hint">
        Choose a tab above to explore all four steps.
      </p>
      <div
        className="hp-workflow-panel"
        data-transition={animate ? "animated" : "instant"}
        key={scenario}
        id={`workflow-panel-${scenario}`}
        role="tabpanel"
        tabIndex={0}
        aria-labelledby={`workflow-tab-${scenario}`}
      >
        <figure className="hp-workflow-screen">
          <img
            src={HOME_ASSETS[workflow.screen]}
            alt={workflow.alt}
            width="600"
            height="1080"
            loading="lazy"
            decoding="async"
          />
          <figcaption>{workflow.caption}</figcaption>
        </figure>
        <ol className="hp-workflow-steps">
          {workflow.steps.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <li
                key={`${scenario}-${index}`}
                className={selectedStep === index ? "hp-step-selected" : ""}
              >
                <button
                  type="button"
                  className="hp-step-top"
                  aria-label={`Explore step ${index + 1}: ${step.title}`}
                  aria-pressed={selectedStep === index}
                  onClick={() => setSelectedStep(index)}
                >
                  <span className="hp-step-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Icon size={24} strokeWidth={1.75} aria-hidden="true" />
                </button>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            );
          })}
        </ol>
      </div>
      <p className="hp-note hp-workflow-note">
        Features vary by compatible device, enabled settings, permissions and
        connectivity. MySentry is not a medical device.
      </p>
    </div>
  );
}
