import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Camera,
  CheckCircle2,
  ChevronDown,
  Headset,
  Menu,
  Smartphone,
  UsersRound,
  Watch,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { trackLeadEvent } from "@/lib/metaPixel";
import HomepageWalkthrough from "./HomepageWalkthrough";
import { audiences, HOMEPAGE_ASSETS, HOMEPAGE_LINKS } from "./homepageContent";
import "./homepage.css";

const faqs = [
  {
    question: "Do I need a smartwatch?",
    answer:
      "No. Core phone-based safety features don't require a smartwatch; some detection features do require a compatible wearable.",
  },
  {
    question: "Who receives my alerts?",
    answer:
      "The trusted contacts you configure, and eligible professional monitoring when enabled and supported. Shared information depends on your permissions and settings.",
  },
  {
    question: "Can I use MySentry with Ring?",
    answer:
      "Yes, through its Ring Appstore listing with compatible devices and required permissions. See the Ring integration details.",
  },
] as const;

function StoreBadges({
  compact = false,
  includeRing = true,
}: {
  compact?: boolean;
  includeRing?: boolean;
}) {
  const className = compact ? "hp-footer-badges" : "hp-badges";
  return (
    <div className={className} aria-label="Download MySentry">
      <a
        className="hp-badge-link"
        href={HOMEPAGE_LINKS.appStore}
        target="_blank"
        rel="noreferrer"
        onClick={trackLeadEvent}
        aria-label="Download MySentry on the App Store"
      >
        <img
          src={HOMEPAGE_ASSETS.appStoreBadge}
          alt="Download on the App Store"
        />
      </a>
      <a
        className="hp-badge-link"
        href={HOMEPAGE_LINKS.googlePlay}
        target="_blank"
        rel="noreferrer"
        onClick={trackLeadEvent}
        aria-label="Get MySentry on Google Play"
      >
        <img
          src={HOMEPAGE_ASSETS.googlePlayBadge}
          alt="Get it on Google Play"
        />
      </a>
      {includeRing && (
        <a
          className="hp-badge-link"
          href={HOMEPAGE_LINKS.ringAppstore}
          target="_blank"
          rel="noreferrer"
          onClick={trackLeadEvent}
          aria-label="Explore MySentry in the Ring Appstore"
        >
          <img
            src={HOMEPAGE_ASSETS.ringBadge}
            alt="Available in the Ring Appstore"
          />
        </a>
      )}
    </div>
  );
}

function RingBadge() {
  return (
    <a
      className="hp-badge-link"
      href={HOMEPAGE_LINKS.ringAppstore}
      target="_blank"
      rel="noreferrer"
      onClick={trackLeadEvent}
      aria-label="Explore MySentry in the Ring Appstore"
    >
      <img
        src={HOMEPAGE_ASSETS.ringBadge}
        alt="Available in the Ring Appstore"
      />
    </a>
  );
}

export default function HomepageExperience() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="hp-page">
      <header className="hp-header">
        <div className="hp-shell hp-header-inner">
          <a href="#top" className="hp-logo" aria-label="MySentry home">
            <img src={HOMEPAGE_ASSETS.logo} alt="MySentry" />
          </a>
          <nav className="hp-nav" aria-label="Homepage navigation">
            <a href="#how-it-works">How It Works</a>
            <a href="#who-its-for">Who It's For</a>
            <Link href={HOMEPAGE_LINKS.ringDetails}>Ring</Link>
            <Link href={HOMEPAGE_LINKS.pricing}>Pricing</Link>
            <Link href={HOMEPAGE_LINKS.contact}>Help</Link>
          </nav>
          <a className="hp-button hp-header-cta" href="#get-the-app">
            Get the App
          </a>
          <button
            className="hp-menu-trigger"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(value => !value)}
          >
            {menuOpen ? (
              <X size={24} aria-hidden="true" />
            ) : (
              <Menu size={24} aria-hidden="true" />
            )}
          </button>
        </div>
        <nav
          className={`hp-mobile-menu ${menuOpen ? "is-open" : ""}`}
          aria-label="Mobile homepage navigation"
        >
          <a href="#how-it-works" onClick={() => setMenuOpen(false)}>
            How It Works
          </a>
          <a href="#who-its-for" onClick={() => setMenuOpen(false)}>
            Who It's For
          </a>
          <Link
            href={HOMEPAGE_LINKS.ringDetails}
            onClick={() => setMenuOpen(false)}
          >
            Ring
          </Link>
          <Link
            href={HOMEPAGE_LINKS.pricing}
            onClick={() => setMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href={HOMEPAGE_LINKS.contact}
            onClick={() => setMenuOpen(false)}
          >
            Help
          </Link>
          <a
            className="hp-button"
            href="#get-the-app"
            onClick={() => setMenuOpen(false)}
          >
            Get the App
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hp-hero" aria-labelledby="homepage-title">
          <div className="hp-shell hp-hero-grid">
            <motion.div
              className="hp-hero-copy"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <p className="hp-eyebrow">
                PERSONAL SAFETY APP FOR FAMILIES &amp; SENIORS
              </p>
              <h1 id="homepage-title">Never face an emergency alone.</h1>
              <p className="hp-hero-lead">
                MySentry connects your safety alerts to the people you trust
                and, when eligible, a 24/7 professional monitoring team.
              </p>
              <p className="hp-hero-micro">Stay independent. Stay connected.</p>
              <div className="hp-hero-actions">
                <a
                  className="hp-button"
                  href="#how-it-works"
                  onClick={trackLeadEvent}
                >
                  See How It Works <ArrowRight size={18} aria-hidden="true" />
                </a>
              </div>
              <p className="hp-badge-label">Download Now</p>
              <StoreBadges />
              <p className="hp-eligibility">
                Monitoring and features depend on plan, settings, compatible
                devices, connectivity and availability.
              </p>
            </motion.div>
            <motion.div
              className="hp-hero-visual"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
            >
              <div className="hp-hero-glow" aria-hidden="true" />
              <span className="hp-connector hp-connector--contacts">
                <UsersRound size={15} aria-hidden="true" /> Trusted contacts
              </span>
              <img
                className="hp-hero-device"
                src={HOMEPAGE_ASSETS.heroApp}
                alt="MySentry app shown on a phone held by family members"
              />
              <span className="hp-connector hp-connector--monitoring">
                <Headset size={15} aria-hidden="true" /> Professional monitoring
              </span>
            </motion.div>
          </div>
        </section>

        <section
          className="hp-section"
          id="how-it-works"
          aria-labelledby="how-it-works-title"
        >
          <div className="hp-shell">
            <div className="hp-section-head is-centered">
              <p className="hp-eyebrow">HOW IT WORKS</p>
              <h2 className="hp-section-heading" id="how-it-works-title">
                From a safety alert to people who can help.
              </h2>
              <p className="hp-section-intro">
                An alert starts. Your people are notified. Next steps can be
                coordinated.
              </p>
            </div>
            <p className="hp-story-hook">
              <strong>“Text me when you get home.”</strong>
              <br />
              But a text isn't always enough when someone needs help.
            </p>
            <div className="hp-stage-grid">
              <article className="hp-stage hp-reveal">
                <span className="hp-stage-number">1</span>
                <h3>An alert starts</h3>
                <p>
                  Request help, or let a supported device start a safety check.
                </p>
              </article>
              <article className="hp-stage hp-reveal">
                <span className="hp-stage-number">2</span>
                <h3>Your people know</h3>
                <p>
                  Chosen contacts can receive an alert and the context you
                  allow.
                </p>
              </article>
              <article className="hp-stage hp-reveal">
                <span className="hp-stage-number">3</span>
                <h3>Help can be coordinated</h3>
                <p>
                  Eligible professional monitoring can review the alert and
                  determine next steps.
                </p>
              </article>
            </div>
            <div className="hp-stage-visual">
              <img
                src={HOMEPAGE_ASSETS.contactsScreen}
                alt="MySentry emergency contacts and location context on a phone"
                loading="lazy"
              />
            </div>
            <a className="hp-text-link" href="#four-steps">
              Explore Protection Steps{" "}
              <ArrowRight size={17} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section
          className="hp-section hp-video-section"
          aria-labelledby="action-video-title"
        >
          <div className="hp-shell hp-video-layout">
            <div className="hp-section-head">
              <p className="hp-eyebrow">A CLOSER LOOK</p>
              <h2 className="hp-section-heading" id="action-video-title">
                See MySentry in Action
              </h2>
              <p className="hp-section-intro">
                Discover how MySentry connects personal safety alerts with the
                people who matter.
              </p>
            </div>
            <motion.div
              className="hp-video-frame"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.42, ease: "easeOut" }}
            >
              <iframe
                src="https://www.youtube-nocookie.com/embed/7eT5sQQgsm8?rel=0&cc_load_policy=1"
                title="MySentry personal safety explainer"
                loading="lazy"
                allow="accelerometer; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </div>
        </section>

        <section
          className="hp-section"
          id="who-its-for"
          aria-labelledby="who-its-for-title"
        >
          <div className="hp-shell">
            <div className="hp-section-head">
              <p className="hp-eyebrow">BUILT AROUND REAL LIFE</p>
              <h2 className="hp-section-heading" id="who-its-for-title">
                Confidence for them. Peace of mind for you.
              </h2>
              <p className="hp-section-intro">
                For the everyday moments when being connected matters.
              </p>
            </div>
            <div className="hp-audience-grid">
              {audiences.map((audience, index) => (
                <motion.div
                  key={audience.title}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.18, delay: index * 0.06 }}
                >
                  <Link className="hp-audience-card" href={audience.href}>
                    <img
                      src={audience.image}
                      alt={audience.alt}
                      loading="lazy"
                    />
                    <div className="hp-audience-copy">
                      <p className="hp-audience-label">{audience.title}</p>
                      <h3>{audience.headline}</h3>
                      <p>{audience.description}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="hp-section hp-section--tint"
          id="four-steps"
          aria-labelledby="four-steps-title"
        >
          <div className="hp-shell">
            <div className="hp-section-head is-centered">
              <p className="hp-eyebrow">A CLOSER LOOK</p>
              <h2 className="hp-section-heading" id="four-steps-title">
                Protection in 4 Simple Steps
              </h2>
              <p className="hp-section-intro">
                Choose a safety moment and see what happens next.
              </p>
            </div>
            <HomepageWalkthrough />
          </div>
        </section>

        <section
          className="hp-section"
          id="professional-monitoring"
          aria-labelledby="monitoring-title"
        >
          <div className="hp-shell hp-two-col">
            <div className="hp-section-head">
              <p className="hp-eyebrow">REAL PEOPLE. CONNECTED RESPONSE.</p>
              <h2 className="hp-section-heading" id="monitoring-title">
                More than an alert. A connected response.
              </h2>
              <p className="hp-section-intro">
                Your trusted contacts can receive an alert. When enabled and
                included in your plan, 24/7 professional monitoring can review
                available information and help coordinate appropriate next
                steps.
              </p>
              <p className="hp-provider-line">
                Professional monitoring for MySentry is provided through{" "}
                <strong>Rapid Response Monitoring.</strong>
              </p>
              <a
                className="hp-text-link"
                href={HOMEPAGE_LINKS.rapidResponse}
                target="_blank"
                rel="noreferrer"
              >
                Learn about Rapid Response Monitoring{" "}
                <ArrowRight size={17} aria-hidden="true" />
              </a>
              <p className="hp-eligibility">
                Monitoring services and response workflows depend on
                eligibility, settings and incident circumstances.
              </p>
            </div>
            <div
              className="hp-monitoring-graph"
              aria-label="MySentry connects configured alerts with trusted contacts and eligible professional monitoring"
            >
              <div className="hp-monitor-node">
                <Smartphone size={31} aria-hidden="true" />
                <strong>MySentry app</strong>
                <span>Configured alert</span>
              </div>
              <div className="hp-monitor-node">
                <UsersRound size={31} aria-hidden="true" />
                <strong>Trusted contacts</strong>
                <span>Permitted context</span>
              </div>
              <div className="hp-monitor-node">
                <Headset size={31} aria-hidden="true" />
                <strong>Rapid Response Monitoring</strong>
                <span>Eligible monitoring</span>
              </div>
            </div>
          </div>
        </section>

        <section
          className="hp-section hp-section--tint"
          id="ring-integration"
          aria-labelledby="ring-title"
        >
          <div className="hp-shell hp-two-col">
            <div className="hp-section-head">
              <p className="hp-eyebrow">NOW AVAILABLE ON THE RING APPSTORE</p>
              <h2 className="hp-section-heading" id="ring-title">
                What if your home cameras could add context when help is needed?
              </h2>
              <p className="hp-section-intro">
                With eligible Ring cameras and your permission, camera context
                can support an active MySentry Panic Alarm.
              </p>
              <div className="hp-hero-actions">
                <Link
                  className="hp-button"
                  href={HOMEPAGE_LINKS.ringDetails}
                  onClick={trackLeadEvent}
                >
                  See MySentry + Ring{" "}
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </div>
              <div className="hp-ring-badge">
                <RingBadge />
              </div>
              <p className="hp-eligibility">
                Requires compatible Ring devices, access permissions and active
                applicable services. See Ring terms.
              </p>
            </div>
            <div
              className="hp-ring-art"
              aria-label="MySentry and Ring integration illustration"
            >
              <div className="hp-ring-camera" aria-hidden="true">
                <Camera size={46} />
              </div>
              <div className="hp-ring-path" aria-hidden="true" />
              <img
                className="hp-ring-device"
                src={HOMEPAGE_ASSETS.ringApp}
                alt="MySentry app screen with Ring Appstore availability"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section
          className="hp-section"
          id="wearables"
          aria-labelledby="wearables-title"
        >
          <div className="hp-shell">
            <div className="hp-section-head is-centered">
              <p className="hp-eyebrow">
                SAFETY ON YOUR PHONE AND SUPPORTED WATCHES
              </p>
              <h2 className="hp-section-heading" id="wearables-title">
                Support that's close at hand.
              </h2>
              <p className="hp-section-intro">
                MySentry works on your phone, with added safety features on
                compatible smartwatches.
              </p>
            </div>
            <div className="hp-wearables">
              <Link className="hp-watch-tile" href="/integrations/apple-watch">
                <CheckCircle2 size={28} aria-hidden="true" />
                <p className="hp-watch-status">
                  AVAILABLE ON SUPPORTED DEVICES
                </p>
                <h3>Apple Watch</h3>
              </Link>
              <Link
                className="hp-watch-tile"
                href="/integrations/samsung-galaxy-watch"
              >
                <CheckCircle2 size={28} aria-hidden="true" />
                <p className="hp-watch-status">
                  AVAILABLE ON SUPPORTED DEVICES
                </p>
                <h3>Samsung Galaxy Watch</h3>
              </Link>
              <div className="hp-watch-tile is-soon">
                <Watch size={28} aria-hidden="true" />
                <p className="hp-watch-status">COMING SOON</p>
                <h3>Garmin</h3>
              </div>
              <div className="hp-watch-tile is-soon">
                <Watch size={28} aria-hidden="true" />
                <p className="hp-watch-status">COMING SOON</p>
                <h3>Ikaria</h3>
              </div>
            </div>
            <p className="hp-watch-note">
              Upcoming integrations are not yet available. Devices, features and
              launch timing are subject to change.
            </p>
          </div>
        </section>

        <section
          className="hp-section hp-section--tint"
          id="pricing-preview"
          aria-labelledby="pricing-preview-title"
        >
          <div className="hp-shell">
            <div className="hp-section-head is-centered">
              <p className="hp-eyebrow">SIMPLE CHOICES</p>
              <h2 className="hp-section-heading" id="pricing-preview-title">
                A safety plan for you or your family.
              </h2>
              <p className="hp-section-intro">
                Choose the coverage that fits your life.
              </p>
            </div>
            <div className="hp-pricing-grid">
              <article className="hp-plan">
                <p className="hp-plan-label">Individual</p>
                <h3 className="hp-plan-price">
                  $15<span>/month</span>
                </h3>
                <p>Personal safety and connected alerts for you.</p>
              </article>
              <article className="hp-plan is-featured">
                <p className="hp-plan-label">Family</p>
                <h3 className="hp-plan-price">
                  $30<span>/month</span>
                </h3>
                <p>Support for the people you care about.</p>
              </article>
            </div>
            <div className="hp-pricing-action">
              <Link
                className="hp-button"
                href={HOMEPAGE_LINKS.pricing}
                onClick={trackLeadEvent}
              >
                Compare Plans <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section
          className="hp-section hp-final"
          id="get-the-app"
          aria-labelledby="get-app-title"
        >
          <div className="hp-shell">
            <div className="hp-final-card">
              <div>
                <h2 className="hp-section-heading" id="get-app-title">
                  Live your life. Stay connected to help.
                </h2>
                <p className="hp-section-intro">
                  Get MySentry and set up the people you trust.
                </p>
                <p className="hp-badge-label">Download the app</p>
                <StoreBadges includeRing={false} />
              </div>
              <div className="hp-final-phone">
                <img
                  src={HOMEPAGE_ASSETS.heroApp}
                  alt="MySentry app home screen"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="hp-faq" aria-label="Frequently asked questions">
              {faqs.map((faq, index) => {
                const open = index === openFaq;
                return (
                  <div className="hp-faq-item" key={faq.question}>
                    <button
                      className="hp-faq-question"
                      type="button"
                      aria-expanded={open}
                      aria-controls={`faq-answer-${index}`}
                      onClick={() => setOpenFaq(open ? null : index)}
                    >
                      {faq.question}
                      <ChevronDown
                        size={20}
                        aria-hidden="true"
                        style={{
                          transform: open ? "rotate(180deg)" : undefined,
                          transition: "transform 180ms ease",
                        }}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.p
                          className="hp-faq-answer"
                          id={`faq-answer-${index}`}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.18 }}
                        >
                          {faq.answer}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="hp-footer">
        <div className="hp-shell">
          <div className="hp-footer-grid">
            <div className="hp-footer-brand">
              <img src={HOMEPAGE_ASSETS.logo} alt="MySentry" />
              <p>Never face an emergency alone.</p>
              <StoreBadges compact includeRing={false} />
            </div>
            <div>
              <h2 className="hp-footer-title">Explore</h2>
              <div className="hp-footer-links">
                <a href="#how-it-works">How It Works</a>
                <a href="#four-steps">Protection in 4 Steps</a>
                <Link href={HOMEPAGE_LINKS.ringDetails}>Ring Integration</Link>
                <Link href={HOMEPAGE_LINKS.pricing}>Pricing</Link>
              </div>
            </div>
            <div>
              <h2 className="hp-footer-title">For You</h2>
              <div className="hp-footer-links">
                <Link href="/use-cases/family-safety-app">Families</Link>
                <Link href="/use-cases/medical-alert-app-for-seniors">
                  Seniors
                </Link>
                <Link href="/use-cases/safety-app-for-women">Women</Link>
                <a href="#wearables">Compatible Watches</a>
              </div>
            </div>
            <div>
              <h2 className="hp-footer-title">Help</h2>
              <div className="hp-footer-links">
                <a href="#get-the-app">FAQ</a>
                <Link href={HOMEPAGE_LINKS.contact}>Contact and Support</Link>
                <Link href={HOMEPAGE_LINKS.smsConsent}>
                  SMS Communication Consent
                </Link>
                <Link href={HOMEPAGE_LINKS.accountDeletion}>
                  Account Deletion
                </Link>
              </div>
            </div>
            <div>
              <h2 className="hp-footer-title">Legal</h2>
              <div className="hp-footer-links">
                <Link href={HOMEPAGE_LINKS.privacy}>Privacy Policy</Link>
                <Link href={HOMEPAGE_LINKS.terms}>Terms</Link>
              </div>
            </div>
          </div>
          <div className="hp-footer-bottom">
            <p>
              MySentry supports personal safety and wellness awareness and does
              not replace emergency services or medical care. Features vary by
              eligibility and compatible devices.
            </p>
            <p>© {new Date().getFullYear()} MySentry. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
