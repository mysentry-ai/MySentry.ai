import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Camera,
  CheckCircle2,
  Clock3,
  Headset,
  HeartHandshake,
  Menu,
  ShieldCheck,
  Smartphone,
  UsersRound,
  UserRound,
  Watch,
  X,
} from "lucide-react";
import SEO from "@/components/SEO";
import HowItWorksDemo from "@/components/HowItWorksDemo";
import { getMySentryLoginUrl } from "@/const";
import {
  HOME_ASSETS,
  HOME_AUDIENCES,
  HOME_DESTINATIONS,
  HOME_FAQS,
  HOME_STAGES,
} from "./homepageContent";
import {
  homeLinkEvent,
  trackHomepageEvent,
  type HomeEvent,
} from "./homepageAnalytics";
import "./homepage.css";

function TrackedLink({
  href,
  id,
  source,
  event = "cta_clicked",
  children,
  className,
  label,
  onClick,
}: {
  href: string;
  id: string;
  source: string;
  event?: HomeEvent;
  children: ReactNode;
  className?: string;
  label?: string;
  onClick?: () => void;
}) {
  const external = href.startsWith("https://");
  return (
    <a
      href={href}
      className={className}
      aria-label={label}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      onClick={e => {
        homeLinkEvent(
          event,
          id,
          label ?? e.currentTarget.textContent?.trim() ?? id,
          href,
          source
        );
        onClick?.();
      }}
    >
      {children}
    </a>
  );
}

export function StoreBadges({
  placement,
  ring = true,
}: {
  placement: "hero" | "final" | "footer";
  ring?: boolean;
}) {
  return (
    <div
      className="hp-badges"
      aria-label="App download and Ring Appstore links"
    >
      <TrackedLink
        href={HOME_DESTINATIONS.apple}
        id={`${placement}_ios`}
        source={placement}
        event="app_store_link_clicked"
        label="Download MySentry on the App Store"
      >
        <img
          src={HOME_ASSETS.apple}
          width="984"
          height="283"
          alt="Download on the App Store"
          decoding="async"
        />
      </TrackedLink>
      <TrackedLink
        href={HOME_DESTINATIONS.google}
        id={`${placement}_android`}
        source={placement}
        event="play_store_link_clicked"
        label="Get MySentry on Google Play"
      >
        <img
          src={HOME_ASSETS.google}
          width="983"
          height="339"
          alt="Get it on Google Play"
          decoding="async"
        />
      </TrackedLink>
      {ring && (
        <TrackedLink
          href={HOME_DESTINATIONS.ring}
          id={`${placement}_ring_appstore`}
          source={placement}
          event="ring_cta_clicked"
          label="Explore MySentry on the Ring Appstore"
        >
          <img
            src={HOME_ASSETS.ringBadge}
            width="820"
            height="300"
            alt="Available on the Ring Appstore"
            decoding="async"
          />
        </TrackedLink>
      )}
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  intro,
  centered = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  centered?: boolean;
}) {
  return (
    <div className={`hp-heading${centered ? " hp-heading-center" : ""}`}>
      {eyebrow && <p className="hp-eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {intro && <p className="hp-lead">{intro}</p>}
    </div>
  );
}

function useOnceInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      entries => {
        if (entries.some(entry => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

function HomepageHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const toggle = useRef<HTMLButtonElement>(null);
  const nav = [
    ["How It Works", "#how-it-works"],
    ["Who It's For", "#who-its-for"],
    ["Ring", HOME_DESTINATIONS.ringDetails],
    ["Pricing", HOME_DESTINATIONS.pricing],
    ["Help", "/contact"],
  ];
  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 10);
    scroll();
    window.addEventListener("scroll", scroll, { passive: true });
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries)
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
      },
      { rootMargin: "-15% 0px -60% 0px" }
    );
    ["how-it-works", "who-its-for", "get-the-app"].forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => {
      window.removeEventListener("scroll", scroll);
      observer.disconnect();
    };
  }, []);
  useEffect(() => {
    if (!open) return;
    const escape = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [open]);
  return (
    <header
      className={`hp-header${scrolled ? " hp-header-scrolled" : ""}`}
      data-home-section="00"
    >
      <div className="hp-container hp-header-inner">
        <a href="#top" className="hp-logo" aria-label="MySentry homepage">
          <img src={HOME_ASSETS.logo} width="360" height="160" alt="MySentry" />
        </a>
        <nav className="hp-desktop-nav" aria-label="Primary navigation">
          {nav.map(([text, href]) => (
            <TrackedLink
              key={href}
              href={href}
              id={`nav_${text.toLowerCase().replaceAll(" ", "_")}`}
              source="header"
              className={active === href ? "is-current" : ""}
            >
              {text}
            </TrackedLink>
          ))}
        </nav>
        <div className="hp-header-actions">
          <TrackedLink
            href={getMySentryLoginUrl()}
            id="header_login"
            source="account"
            event="external_link_opened"
            className="hp-login"
          >
            Login
          </TrackedLink>
          <TrackedLink
            href="#get-the-app"
            id="header_app"
            source="header"
            className="hp-button"
          >
            Get the App
            <ArrowRight size={18} aria-hidden="true" />
          </TrackedLink>
        </div>
        <button
          ref={toggle}
          className="hp-menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="homepage-mobile-menu"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      <nav
        id="homepage-mobile-menu"
        aria-label="Mobile navigation"
        className="hp-mobile-nav"
        hidden={!open}
      >
        {nav.map(([text, href]) => (
          <TrackedLink
            key={href}
            href={href}
            id={`mobile_nav_${text.toLowerCase().replaceAll(" ", "_")}`}
            source="header"
            onClick={() => setOpen(false)}
          >
            {text}
          </TrackedLink>
        ))}
        <TrackedLink
          href="#get-the-app"
          id="mobile_header_app"
          source="header"
          className="hp-button"
          onClick={() => setOpen(false)}
        >
          Get the App
          <ArrowRight size={18} aria-hidden="true" />
        </TrackedLink>
        <TrackedLink
          href={getMySentryLoginUrl()}
          id="mobile_login"
          source="account"
          event="external_link_opened"
          onClick={() => setOpen(false)}
        >
          Login
        </TrackedLink>
      </nav>
    </header>
  );
}

function ThreeStages() {
  const { ref, visible } = useOnceInView();
  const [selected, setSelected] = useState(0);
  const interacted = useRef(false);
  useEffect(() => {
    if (
      !visible ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const timers = [1, 2].map(index =>
      window.setTimeout(() => {
        if (!interacted.current) setSelected(index);
      }, index * 900)
    );
    return () => timers.forEach(timer => window.clearTimeout(timer));
  }, [visible]);
  const icons = [ShieldCheck, UsersRound, Headset];
  return (
    <section
      id="how-it-works"
      className="hp-section hp-soft"
      data-home-section="02"
      aria-labelledby="hp-story-title"
    >
      <div className="hp-container">
        <div className="hp-story-hook">
          <span>“Text me when you get home.”</span>
          <p>But a text isn't always enough when someone needs help.</p>
        </div>
        <div className="hp-heading hp-heading-center">
          <p className="hp-eyebrow">HOW IT WORKS</p>
          <h2 id="hp-story-title">
            From a safety alert to people who can help.
          </h2>
          <p className="hp-lead">
            An alert starts. Your people are notified. Next steps can be
            coordinated.
          </p>
        </div>
        <div
          ref={ref}
          className={`hp-three-stages${visible ? " hp-in-view" : ""}`}
        >
          <ol>
            {HOME_STAGES.map((stage, index) => {
              const Icon = icons[index];
              return (
                <li
                  key={stage.title}
                  className={selected === index ? "hp-stage-selected" : ""}
                >
                  <button
                    type="button"
                    aria-label={`Explore stage ${index + 1}: ${stage.title}`}
                    aria-pressed={selected === index}
                    onClick={() => {
                      interacted.current = true;
                      setSelected(index);
                    }}
                  >
                    <Icon size={26} strokeWidth={1.75} aria-hidden="true" />
                  </button>
                  <h3>
                    <span>{index + 1} · </span>
                    {stage.title}
                  </h3>
                  <p>{stage.description}</p>
                </li>
              );
            })}
          </ol>
        </div>
        <div className="hp-center">
          <TrackedLink
            href="#four-steps"
            id="story_steps"
            source="story"
            className="hp-text-link"
          >
            Explore Protection Steps
            <ArrowRight size={20} aria-hidden="true" />
          </TrackedLink>
        </div>
      </div>
    </section>
  );
}

function Audiences() {
  const { ref, visible } = useOnceInView();
  const icons = [UsersRound, HeartHandshake, ShieldCheck];
  return (
    <section id="who-its-for" className="hp-section" data-home-section="03">
      <div className="hp-container">
        <SectionHeading
          eyebrow="BUILT AROUND REAL LIFE"
          title="Confidence for them. Peace of mind for you."
          intro="For the everyday moments when being connected matters."
        />
        <div
          ref={ref}
          className={`hp-audiences${visible ? " hp-in-view" : ""}`}
        >
          {HOME_AUDIENCES.map((audience, index) => {
            const Icon = icons[index];
            return (
              <article key={audience.label} className="hp-audience-card">
                <img
                  src={audience.image}
                  width="1920"
                  height="1280"
                  alt={audience.alt}
                  loading="lazy"
                  decoding="async"
                />
                <div className="hp-audience-copy">
                  <div className="hp-audience-label">
                    <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
                    {audience.label}
                  </div>
                  <h3>{audience.title}</h3>
                  <p>{audience.description}</p>
                  <TrackedLink
                    href={audience.href}
                    id={`audience_${audience.label.toLowerCase()}`}
                    source="audiences"
                    className="hp-text-link"
                    label={`Explore MySentry for ${audience.label.toLowerCase()}`}
                  >
                    Explore
                    <ArrowRight size={18} aria-hidden="true" />
                  </TrackedLink>
                </div>
              </article>
            );
          })}
        </div>
        <p className="hp-note hp-photo-note">
          Lifestyle imagery is illustrative, not customer testimonials.
        </p>
      </div>
    </section>
  );
}

function Monitoring() {
  const { ref, visible } = useOnceInView();
  return (
    <section
      id="professional-monitoring"
      className="hp-section hp-blue-tint"
      data-home-section="05"
    >
      <div className="hp-container hp-two-column hp-monitoring-layout">
        <div>
          <SectionHeading
            eyebrow="REAL PEOPLE. CONNECTED RESPONSE."
            title="More than an alert. A connected response."
          />
          <p>
            Your trusted contacts can receive an alert. When enabled and
            included in your plan, 24/7 professional monitoring can review
            available information and help coordinate appropriate next steps.
          </p>
          <p className="hp-provider-credit">
            Professional monitoring for MySentry is provided through Rapid
            Response Monitoring.
          </p>
          <TrackedLink
            href={HOME_DESTINATIONS.provider}
            id="monitoring_provider"
            source="provider"
            event="external_link_opened"
            className="hp-text-link"
          >
            Learn about Rapid Response Monitoring
            <ArrowUpRight size={20} aria-hidden="true" />
          </TrackedLink>
          <p className="hp-note">
            Monitoring services and response workflows depend on eligibility,
            settings and incident circumstances.
          </p>
        </div>
        <div
          ref={ref}
          className={`hp-response-graph${visible ? " hp-in-view" : ""}`}
          role="group"
          aria-label="A MySentry alert can share permitted information with trusted contacts and eligible professional monitoring in parallel."
        >
          <div className="hp-response-origin">
            <Smartphone size={30} strokeWidth={1.75} aria-hidden="true" />
            <strong>MySentry app</strong>
            <span>Your safety alert</span>
          </div>
          <div className="hp-response-paths" aria-hidden="true">
            <span />
            <span />
          </div>
          <div className="hp-response-recipients">
            <div className="hp-response-node">
              <UsersRound size={28} strokeWidth={1.75} aria-hidden="true" />
              <div>
                <strong>Trusted contacts</strong>
                <span>The people you choose</span>
              </div>
            </div>
            <div className="hp-response-node">
              <Headset size={28} strokeWidth={1.75} aria-hidden="true" />
              <div>
                <strong>Rapid Response Monitoring</strong>
                <span>24/7 monitoring (eligible plans)</span>
              </div>
            </div>
          </div>
          <p className="hp-note">Only the context you permit.</p>
        </div>
      </div>
    </section>
  );
}

function RingSpotlight() {
  const { ref, visible } = useOnceInView();
  return (
    <section
      id="ring-integration"
      className="hp-section"
      data-home-section="06"
    >
      <div className="hp-container hp-two-column">
        <div
          ref={ref}
          className={`hp-ring-visual${visible ? " hp-in-view" : ""}`}
        >
          <div className="hp-ring-camera">
            <Camera size={54} strokeWidth={1.5} aria-hidden="true" />
            <span>Compatible Ring camera</span>
          </div>
          <span className="hp-ring-connection" aria-hidden="true" />
          <img
            src={HOME_ASSETS.ringPhone}
            width="600"
            height="1080"
            alt="Owner-supplied MySentry app screen with the Ring integration banner"
            loading="lazy"
            decoding="async"
          />
          <p className="hp-note hp-asset-gate">
            Staging: approved Ring camera image required.
          </p>
        </div>
        <div>
          <SectionHeading
            eyebrow="NOW AVAILABLE ON THE RING APPSTORE"
            title="What if your home cameras could add context when help is needed?"
          />
          <p className="hp-lead">
            With eligible Ring cameras and your permission, camera context can
            support an active MySentry Panic Alarm.
          </p>
          <TrackedLink
            href={HOME_DESTINATIONS.ringDetails}
            id="ring_details"
            source="ring"
            event="ring_cta_clicked"
            className="hp-button"
          >
            See MySentry + Ring
            <ArrowRight size={20} aria-hidden="true" />
          </TrackedLink>
          <div className="hp-ring-badge">
            <TrackedLink
              href={HOME_DESTINATIONS.ring}
              id="spotlight_ring_appstore"
              source="ring"
              event="ring_cta_clicked"
              label="Explore MySentry on the Ring Appstore"
            >
              <img
                src={HOME_ASSETS.ringBadge}
                width="820"
                height="300"
                alt="Available on the Ring Appstore"
                loading="lazy"
              />
            </TrackedLink>
          </div>
          <p className="hp-note">
            Requires compatible Ring devices, access permissions and active
            applicable services. See{" "}
            <a
              href="https://ring.com/terms"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ring terms
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

function Wearables() {
  return (
    <section
      id="wearables"
      className="hp-section hp-soft"
      data-home-section="07"
    >
      <div className="hp-container">
        <SectionHeading
          eyebrow="SAFETY ON YOUR PHONE AND SUPPORTED WATCHES"
          title="Support that's close at hand."
          intro="MySentry works on your phone, with added safety features on compatible smartwatches."
          centered
        />
        <div className="hp-watch-groups">
          <div>
            <p className="hp-device-group-label">
              Available on supported devices
            </p>
            <div className="hp-watch-pair">
              {["Apple Watch", "Samsung Galaxy Watch"].map(name => (
                <div key={name} className="hp-watch-tile">
                  <Watch size={34} strokeWidth={1.5} aria-hidden="true" />
                  <h3>{name}</h3>
                  <span>
                    <CheckCircle2 size={16} aria-hidden="true" />
                    Supported devices
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="hp-device-group-label">Coming soon</p>
            <div className="hp-watch-pair">
              {["Garmin", "Ikaria"].map(name => (
                <div key={name} className="hp-watch-tile hp-coming-soon">
                  <Watch size={34} strokeWidth={1.5} aria-hidden="true" />
                  <h3>{name}</h3>
                  <span>
                    <Clock3 size={16} aria-hidden="true" />
                    Coming soon
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="hp-note hp-center">
          Upcoming integrations are not yet available. Devices, features and
          launch timing are subject to change.
        </p>
        <div className="hp-center">
          <TrackedLink
            href="/features"
            id="wearables_features"
            source="wearables"
            className="hp-text-link"
          >
            See compatible features
            <ArrowRight size={20} aria-hidden="true" />
          </TrackedLink>
        </div>
      </div>
    </section>
  );
}

function PricingPreview() {
  return (
    <section id="pricing-preview" className="hp-section" data-home-section="08">
      <div className="hp-container">
        <SectionHeading
          eyebrow="SIMPLE CHOICES"
          title="A safety plan for you or your family."
          intro="Choose the coverage that fits your life."
          centered
        />
        <div className="hp-prices">
          <article className="hp-price-card">
            <UserRound size={28} strokeWidth={1.75} aria-hidden="true" />
            <h3>Individual</h3>
            <p className="hp-price">
              <span>$15</span>/month
            </p>
            <p>Personal safety and connected alerts for you.</p>
          </article>
          <article className="hp-price-card hp-family-price">
            <UsersRound size={28} strokeWidth={1.75} aria-hidden="true" />
            <h3>Family</h3>
            <p className="hp-price">
              <span>$30</span>/month
            </p>
            <p>Support for the people you care about.</p>
          </article>
        </div>
        <div className="hp-center">
          <TrackedLink
            href={HOME_DESTINATIONS.pricing}
            id="pricing_compare"
            source="pricing"
            className="hp-button"
          >
            Compare Plans
            <ArrowRight size={20} aria-hidden="true" />
          </TrackedLink>
        </div>
        <p className="hp-note hp-price-note">
          Prices are from the supplied product knowledge base; verify the
          current U.S. checkout, taxes, family-seat terms and trial eligibility
          before publishing.
        </p>
      </div>
    </section>
  );
}

function ClosingCTA() {
  return (
    <section
      id="get-the-app"
      className="hp-section hp-blue-tint"
      data-home-section="09"
    >
      <div className="hp-container">
        <div className="hp-closing">
          <div>
            <SectionHeading
              title="Live your life. Stay connected to help."
              intro="Get MySentry and set up the people you trust."
            />
            <StoreBadges placement="final" ring={false} />
            <p className="hp-note hp-also-ring">
              Also available on the Ring Appstore
            </p>
            <div className="hp-ring-badge">
              <TrackedLink
                href={HOME_DESTINATIONS.ring}
                id="final_ring_appstore"
                source="final"
                event="ring_cta_clicked"
                label="Explore MySentry on the Ring Appstore"
              >
                <img
                  src={HOME_ASSETS.ringBadge}
                  width="820"
                  height="300"
                  alt="Available on the Ring Appstore"
                  loading="lazy"
                />
              </TrackedLink>
            </div>
          </div>
          <img
            className="hp-closing-phone"
            src={HOME_ASSETS.homePhone}
            width="600"
            height="1080"
            alt="Supplied MySentry app home screen"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div
          id="homepage-faq"
          className="hp-faq"
          aria-label="MySentry frequently asked questions"
        >
          {HOME_FAQS.map((faq, index) => (
            <details key={faq.question}>
              <summary>
                {faq.question}
                <span aria-hidden="true">+</span>
              </summary>
              <p>
                {faq.answer}
                {index === 2 && (
                  <>
                    {" "}
                    <TrackedLink
                      href={HOME_DESTINATIONS.ringDetails}
                      id="faq_ring_details"
                      source="faq"
                      event="ring_cta_clicked"
                      className="hp-inline-link"
                    >
                      MySentry + Ring
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </TrackedLink>
                  </>
                )}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomepageFooter() {
  const groups = [
    {
      title: "Explore",
      links: [
        ["How It Works", "#how-it-works"],
        ["Protection in 4 Steps", "#four-steps"],
        ["Ring Integration", HOME_DESTINATIONS.ringDetails],
        ["Pricing", HOME_DESTINATIONS.pricing],
      ],
    },
    {
      title: "For You",
      links: [
        ["Families", "#who-its-for"],
        ["Seniors", "#who-its-for"],
        ["Women", "#who-its-for"],
        ["Compatible Watches", "#wearables"],
      ],
    },
    {
      title: "Help",
      links: [
        ["FAQ", "#homepage-faq"],
        ["Contact and Support", "/contact"],
        ["All Features", "/features"],
        ["Guides and Blog", "/blogs"],
      ],
    },
    {
      title: "Legal",
      links: [
        ["Privacy Policy", "/privacy"],
        ["Terms", "/terms"],
        ["SMS Communications", "/sms-consent"],
        ["Account Deletion", "/account-deletion"],
      ],
    },
  ];
  return (
    <footer className="hp-footer" data-home-section="10">
      <div className="hp-container">
        <div className="hp-footer-grid">
          <div className="hp-footer-brand">
            <a href="#top" aria-label="MySentry homepage">
              <img
                src={HOME_ASSETS.logo}
                width="360"
                height="160"
                alt="MySentry"
              />
            </a>
            <p>Never face an emergency alone.</p>
            <StoreBadges placement="footer" ring={false} />
          </div>
          {groups.map(group => (
            <div key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.links.map(([text, href]) => (
                  <li key={text}>
                    <TrackedLink
                      href={href}
                      id={`footer_${text.toLowerCase().replaceAll(" ", "_")}`}
                      source="footer"
                      event={
                        href === HOME_DESTINATIONS.ringDetails
                          ? "ring_cta_clicked"
                          : "cta_clicked"
                      }
                    >
                      {text}
                    </TrackedLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="hp-footer-bottom">
          <p>© {new Date().getFullYear()} MySentry. All rights reserved.</p>
          <div className="hp-footer-more">
            <a href="/use-cases">Use Cases</a>
            <a href="/industries">Industries</a>
            <a href="/compare">Compare</a>
            <a href="/about-us">About</a>
          </div>
        </div>
        <p className="hp-note hp-footer-boundary">
          MySentry supports personal safety and wellness awareness and does not
          replace emergency services or medical care. Features vary by
          eligibility and compatible devices.
        </p>
      </div>
    </footer>
  );
}

export default function HomepageExperience() {
  const viewed = useRef(false);
  useEffect(() => {
    if (!viewed.current) {
      trackHomepageEvent("screen_view");
      viewed.current = true;
    }
  }, []);
  return (
    <div className="homepage-v1" id="top">
      <SEO />
      <a className="hp-skip-link" href="#homepage-main">
        Skip to main content
      </a>
      <HomepageHeader />
      <main id="homepage-main">
        <section className="hp-hero" data-home-section="01">
          <div className="hp-container hp-hero-grid">
            <div className="hp-hero-copy">
              <p className="hp-eyebrow">
                PERSONAL SAFETY APP FOR FAMILIES &amp; SENIORS
              </p>
              <h1>Never face an emergency alone.</h1>
              <p className="hp-lead">
                MySentry connects your safety alerts to the people you trust
                and, when eligible, a 24/7 professional monitoring team.
              </p>
              <p className="hp-hero-micro">Stay independent. Stay connected.</p>
              <TrackedLink
                href="#how-it-works"
                id="hero_how"
                source="hero"
                className="hp-button"
              >
                See How It Works
                <ArrowRight size={20} aria-hidden="true" />
              </TrackedLink>
              <p className="hp-download-label">
                Download the app or explore MySentry on Ring.
              </p>
              <StoreBadges placement="hero" />
              <p className="hp-note hp-hero-note">
                Monitoring and features depend on plan, settings, compatible
                devices, connectivity and availability.
              </p>
            </div>
            <div className="hp-hero-visual">
              <div className="hp-lifestyle">
                <img
                  src={HOME_ASSETS.heroPhoto}
                  width="1920"
                  height="1072"
                  alt="An older parent enjoys an everyday family moment with her adult daughter and grandchildren"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
              <div className="hp-hero-phone">
                <img
                  src={HOME_ASSETS.homePhone}
                  width="600"
                  height="1080"
                  alt="Owner-supplied MySentry personal safety app home screen"
                  loading="eager"
                  decoding="async"
                />
              </div>
              <div className="hp-hero-connections">
                <span>
                  <UsersRound size={19} strokeWidth={1.75} aria-hidden="true" />
                  Trusted contacts
                </span>
                <span>
                  <Headset size={19} strokeWidth={1.75} aria-hidden="true" />
                  Professional monitoring
                </span>
              </div>
            </div>
          </div>
        </section>
        <ThreeStages />
        <Audiences />
        <section
          id="four-steps"
          className="hp-section hp-soft"
          data-home-section="04"
        >
          <div className="hp-container">
            <SectionHeading
              eyebrow="A CLOSER LOOK"
              title="Protection in 4 Simple Steps"
              intro="Choose a safety moment and see what happens next."
              centered
            />
            <HowItWorksDemo homepageMode />
          </div>
        </section>
        <Monitoring />
        <RingSpotlight />
        <Wearables />
        <PricingPreview />
        <ClosingCTA />
      </main>
      <HomepageFooter />
    </div>
  );
}
