import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Headset,
  Play,
  ShieldCheck,
  Smartphone,
  UsersRound,
  Watch,
} from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { trackLeadEvent } from "@/lib/metaPixel";
import HomepageWalkthrough from "./HomepageWalkthrough";
import { audiences, HOMEPAGE_ASSETS, HOMEPAGE_LINKS } from "./homepageContent";
import "./homepage.css";

const faqs = [
  {
    question: "Do I need a smartwatch?",
    answer:
      "No. Core phone-based safety features do not require a smartwatch. Some detection features require a compatible wearable.",
  },
  {
    question: "Who receives my alerts?",
    answer:
      "The trusted contacts you configure and, when enabled and supported, eligible professional monitoring. Shared information depends on your permissions and settings.",
  },
  {
    question: "Can I use MySentry with Ring?",
    answer:
      "MySentry is available in the Ring Appstore. Compatible devices, permissions and applicable services are required for connected camera context.",
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
          loading="eager"
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
          loading="eager"
          src={HOMEPAGE_ASSETS.googlePlayBadge}
          alt="Get it on Google Play"
          className="hp-google-play-badge"
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
            loading="eager"
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
        loading="eager"
        src={HOMEPAGE_ASSETS.ringBadge}
        alt="Available in the Ring Appstore"
      />
    </a>
  );
}

export default function HomepageExperience() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <MotionConfig reducedMotion="user">
      <div className="hp-page">
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
                <h1 id="homepage-title">Never Face an Emergency Alone.</h1>
                <p className="hp-hero-lead">
                  Being independent matters. But so does knowing someone can be
                  alerted when you need help.
                </p>
                <p className="hp-hero-micro">
                  MySentry connects your safety alerts to people you trust and
                  24/7 professional monitoring that can help coordinate an
                  emergency response.
                </p>
                <div className="hp-hero-actions">
                  <a
                    className="hp-button"
                    href="/pricing#pricing-plans"
                    onClick={trackLeadEvent}
                  >
                    Start Your 7-Day Free Trial{" "}
                    <ArrowRight size={18} aria-hidden="true" />
                  </a>
                </div>
                <p className="hp-badge-label">Download Now</p>
                <StoreBadges />
                <p className="hp-trial-note">
                  No Credit Card Required for Your 7-Day Free Trial.
                </p>
              </motion.div>

              <motion.div
                className="hp-hero-visual"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
              >
                <img
                  className="hp-hero-device hp-device--hero"
                  src={HOMEPAGE_ASSETS.allInOne}
                  alt="Actual MySentry app mockups showing Panic Alarm, MeetSafe, family connectivity and smartwatch support"
                  width={1095}
                  height={622}
                  fetchPriority="high"
                />
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
                <p className="hp-eyebrow">MYSENTRY AT A GLANCE</p>
                <h2 className="hp-section-heading" id="how-it-works-title">
                  From a safety alert to people who can help.
                </h2>
                <p className="hp-section-intro">
                  An alert starts. Your people are notified. Next steps can be
                  coordinated.
                </p>
              </div>
              <p className="hp-story-hook">
                <strong>Text me when you get home.</strong>
                <br />
                But a text is not always enough when someone needs help.
              </p>
              <div className="hp-stage-grid">
                <article className="hp-stage hp-reveal">
                  <span className="hp-stage-number">1</span>
                  <h3>An alert starts</h3>
                  <p>
                    Request help, or let a supported device start a safety
                    check.
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
              <div className="hp-stage-visual hp-mockup-inline">
                <img
                  src={HOMEPAGE_ASSETS.emergencyContacts}
                  alt="Person holding MySentry with a map and emergency contact context visible"
                  loading="eager"
                  decoding="async"
                />
              </div>
              <div className="hp-app-details">
                <div className="hp-app-detail">
                  <img
                    src={HOMEPAGE_ASSETS.meetSafe}
                    alt="Supplied MySentry MeetSafe app screens for safe meetings"
                    width={649}
                    height={595}
                    loading="eager"
                    decoding="async"
                  />
                  <Link
                    className="hp-text-link"
                    href="/features/safety-check-in-app"
                  >
                    MeetSafe check-ins{" "}
                    <ArrowRight size={17} aria-hidden="true" />
                  </Link>
                </div>
                <div className="hp-app-detail">
                  <img
                    src={HOMEPAGE_ASSETS.safetyCheck}
                    alt="Supplied MySentry safety check alert and contact notification screens"
                    width={704}
                    height={595}
                    loading="eager"
                    decoding="async"
                  />
                  <Link
                    className="hp-text-link"
                    href="/features/emergency-contacts"
                  >
                    Your emergency contacts{" "}
                    <ArrowRight size={17} aria-hidden="true" />
                  </Link>
                </div>
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
                {videoOpen ? (
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/7eT5sQQgsm8?rel=0&cc_load_policy=1"
                    title="MySentry personal safety explainer"
                    loading="eager"
                    allow="accelerometer; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <button
                    type="button"
                    className="hp-video-poster"
                    onClick={() => setVideoOpen(true)}
                    aria-label="Load the MySentry YouTube explainer"
                  >
                    <img
                      src="https://i.ytimg.com/vi/7eT5sQQgsm8/hqdefault.jpg"
                      alt="MySentry explainer video thumbnail"
                      width={480}
                      height={360}
                    />
                    <span className="hp-video-play">
                      <Play fill="currentColor" size={26} aria-hidden="true" />
                    </span>
                  </button>
                )}
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
                        loading="eager"
                        decoding="async"
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
                <p className="hp-eyebrow">AVAILABLE ON THE RING APPSTORE</p>
                <h2 className="hp-section-heading" id="ring-title">
                  Bring permitted camera context into a panic workflow.
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
                  Requires compatible Ring devices, access permissions and
                  active applicable services. See Ring terms.
                </p>
              </div>
              <div className="hp-ring-art hp-mockup-plain">
                <img
                  className="hp-ring-device"
                  width={2628}
                  height={1755}
                  src={HOMEPAGE_ASSETS.ringScreen}
                  alt="MySentry home screen with Ring availability, emergency contacts and a Panic control"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </section>

          <section
            className="hp-section"
            id="wearables"
            aria-labelledby="wearables-title"
          >
            <div className="hp-shell hp-two-col hp-wearables-layout">
              <div className="hp-section-head">
                <p className="hp-eyebrow">
                  SAFETY ON YOUR PHONE AND SUPPORTED WATCHES
                </p>
                <h2 className="hp-section-heading" id="wearables-title">
                  Support that is close at hand.
                </h2>
                <p className="hp-section-intro">
                  MySentry works on your phone, with added safety features on
                  compatible smartwatches.
                </p>
                <p className="hp-watch-note">
                  Available device features vary by model, operating system,
                  permissions and plan.
                </p>
              </div>
              <div className="hp-watch-visual hp-mockup-plain">
                <img
                  src={HOMEPAGE_ASSETS.watchPanic}
                  width={202}
                  height={341}
                  alt="MySentry Panic Alarm control on a compatible smartwatch"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
            <div className="hp-shell">
              <div className="hp-wearables">
                <Link
                  className="hp-watch-tile"
                  href="/integrations/apple-watch"
                >
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
                Upcoming integrations are not yet available. Devices, features
                and launch timing are subject to change.
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
                  <p className="hp-badge-label">Download Now</p>
                  <StoreBadges includeRing={false} />
                </div>
                <div className="hp-final-phone hp-mockup-plain">
                  <img
                    src={HOMEPAGE_ASSETS.heroSenior}
                    alt="Older adult holding the MySentry app with personal safety alert context"
                    width={1018}
                    height={817}
                    loading="eager"
                    decoding="async"
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
                          className={
                            open ? "hp-faq-chevron is-open" : "hp-faq-chevron"
                          }
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
                <img src="/images/logo.png" alt="MySentry" />
                <p>Never face an emergency alone.</p>
                <StoreBadges compact includeRing={false} />
              </div>
              <div>
                <h2 className="hp-footer-title">Explore</h2>
                <div className="hp-footer-links">
                  <a href="#how-it-works">How It Works</a>
                  <a href="#four-steps">Protection in 4 Steps</a>
                  <Link href={HOMEPAGE_LINKS.ringDetails}>
                    Ring Integration
                  </Link>
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
                MySentry supports personal safety and wellness awareness and
                does not replace emergency services or medical care. Features
                vary by eligibility and compatible devices.
              </p>
              <p>
                © {new Date().getFullYear()} MySentry. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </MotionConfig>
  );
}
