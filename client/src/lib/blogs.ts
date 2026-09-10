import {
  EXACT_RING_PR_CONTENT,
  EXACT_RING_PR_HERO_URL,
  EXACT_RING_PR_SLUG,
  EXACT_RING_PR_SUBTITLE,
  EXACT_RING_PR_TITLE,
} from "@shared/seo/exact-ring-press-release";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: "Senior Care" | "Females" | "Families" | "Business";
  image: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string;
}

export const blogs: BlogPost[] = [
  {
    id: "fallback-ring-appstore-pr",
    slug: EXACT_RING_PR_SLUG,
    title: EXACT_RING_PR_TITLE,
    category: "Business",
    image: EXACT_RING_PR_HERO_URL,
    excerpt: EXACT_RING_PR_SUBTITLE,
    date: "Sep 10, 2026",
    readTime: "4 min read",
    content: EXACT_RING_PR_CONTENT,
  },
  {
    id: "fallback-senior-plan",
    slug: "senior-safety-plan-family-conversation",
    title: "Build a Senior Safety Plan Without Taking Away Independence",
    category: "Senior Care",
    image: "/images/happy-senior-hiking.jpg",
    excerpt:
      "A respectful safety plan starts with the older adult's goals, then adds agreed check-ins, eligible devices, and clear backup steps.",
    date: "Sep 7, 2026",
    readTime: "4 min read",
    content: `
      <p class="lead">You may want to stay active, keep your routines, and make your own decisions while giving the people you trust a clear way to support you. The difficult part is agreeing on a plan that adds practical backup without turning everyday life into continuous supervision.</p>
      <h3>Start with the person's priorities</h3>
      <p>Ask what the older adult wants help with. One person may want a check-in before an evening walk. Another may want a simple way to signal a trusted contact from an eligible phone or wearable. Consent and clarity matter more than adding every available feature.</p>
      <h3>MySentry's supporting role</h3>
      <p>MySentry can support an agreed personal-safety plan when eligible features, devices, permissions, contacts, connectivity, regions, plans, and services are configured correctly. It is not a medical device and does not diagnose a condition, guarantee fall detection, provide continuous location tracking, or replace emergency services, clinical judgment, professional care, home modifications, or local support.</p>
      <h3>A practical plan</h3>
      <ol>
        <li>Write down the situations where a check-in or manual alert would be useful.</li>
        <li>Choose trusted contacts together and agree on what each person should do after an alert.</li>
        <li>Confirm device eligibility, permissions, connectivity, and plan availability.</li>
        <li>Test the setup and keep a direct way to contact local emergency services.</li>
      </ol>
      <p><a href="/guides/aging-in-place-safety-checklist">Use the aging-in-place safety checklist</a> to prepare the conversation, then <a href="/use-cases/medical-alert-app-for-seniors">review the senior decision guide</a> together.</p>
    `,
  },
  {
    id: "fallback-dating-plan",
    slug: "first-date-safety-plan",
    title: "A First-Date Safety Plan You Can Set Up Before You Leave",
    category: "Females",
    image: "/images/cdn/jwsBikltRBgQccmM.jpg",
    excerpt:
      "Choose a public meeting place, tell a trusted person the plan, agree on a check-in, and keep your own way home.",
    date: "Sep 7, 2026",
    readTime: "3 min read",
    content: `
      <p class="lead">Meeting someone new should not require you to ignore practical safety questions. A short plan made before the date can give you clearer choices if the location changes, you feel uncomfortable, or you decide to leave.</p>
      <h3>Decide before the moment</h3>
      <p>Choose a public place, arrange your own transportation, and tell a trusted person when you expect to check in. Decide what a missed check-in means so your contact is not guessing about the next step.</p>
      <h3>MySentry's supporting role</h3>
      <p>Eligible MySentry check-in or alert features can support that plan when the device, permissions, trusted contacts, connectivity, region, plan, and services are available and configured. MySentry does not prevent harm, guarantee alert delivery, continuously track a person, guarantee contact or response, or replace emergency services and direct local help.</p>
      <h3>A practical plan</h3>
      <ol>
        <li>Share the meeting place and expected end time with someone you trust.</li>
        <li>Agree on a check-in time and the action your contact should take if you miss it.</li>
        <li>Keep your phone charged and retain your own transportation option.</li>
        <li>Leave when you want to and contact local emergency services directly if immediate help is needed.</li>
      </ol>
      <p><a href="/guides/family-safety-app-privacy-guide">Review the consent and privacy guide</a>, then <a href="/use-cases/safety-app-for-women">compare the available personal-safety paths</a>.</p>
    `,
  },
  {
    id: "fallback-family-plan",
    slug: "consent-first-family-safety-plan",
    title: "Create a Family Safety Plan That Respects Privacy",
    category: "Families",
    image: "/images/family-hero-base.jpg",
    excerpt:
      "A useful family plan defines who needs support, what information is shared, and what trusted contacts should do after a check-in or alert.",
    date: "Sep 7, 2026",
    readTime: "4 min read",
    content: `
      <p class="lead">Family members may have different routines, devices, and privacy expectations. A plan works better when everyone understands what will be configured, what may be shared, and what should happen after an alert.</p>
      <h3>Agree on support instead of surveillance</h3>
      <p>Start with specific situations. A college student may want a check-in after an evening class. An older parent may want an agreed contact for a manual alert. A worker may need an employer-approved check-in process. Each person should know the plan and consent to their role.</p>
      <h3>MySentry's supporting role</h3>
      <p>MySentry can provide eligible safety features within a configured family plan, subject to device compatibility, permissions, connectivity, regions, plans, and service availability. It does not guarantee detection, delivery, contact, escalation, response, location accuracy, or an outcome. It does not replace emergency services, professional care, employer procedures, or direct communication.</p>
      <h3>A practical plan</h3>
      <ol>
        <li>List the situations each family member wants the plan to cover.</li>
        <li>Choose trusted contacts and define each person's responsibility.</li>
        <li>Confirm devices, permissions, connectivity, and available plan features.</li>
        <li>Test each agreed workflow and revise it when routines change.</li>
      </ol>
      <p><a href="/guides/family-safety-app-privacy-guide">Use the family privacy guide</a> to prepare the discussion, then <a href="/families">review the family safety journey</a>.</p>
    `,
  },
  {
    id: "fallback-lone-worker-plan",
    slug: "lone-worker-check-in-plan",
    title: "Build a Lone-Worker Check-In Plan Around Real Tasks",
    category: "Business",
    image: "/images/worker-safety.png",
    excerpt:
      "Start with the task, environment, and employer procedure, then define check-ins, contacts, escalation responsibilities, and direct emergency options.",
    date: "Sep 7, 2026",
    readTime: "4 min read",
    content: `
      <p class="lead">A worker may be alone in a patient home, rental property, utility site, vehicle, or after-hours workplace. The employer still needs a plan that names the hazard, sets a check-in expectation, and tells people what to do when contact is missed.</p>
      <h3>Technology is one part of the program</h3>
      <p>MySentry can support eligible check-ins or alerts within an employer-approved safety process. It does not replace a hazard assessment, training, supervision, security procedures, emergency services, or the employer's legal and policy responsibilities.</p>
      <h3>A practical plan</h3>
      <ol>
        <li>Identify the task, location, travel period, and foreseeable communication gaps.</li>
        <li>Set a check-in interval that matches the employer's written procedure.</li>
        <li>Assign trained contacts and define when they should call the worker, a supervisor, site security, or local emergency services.</li>
        <li>Confirm device eligibility, permissions, connectivity, plan availability, and a backup communication method.</li>
      </ol>
      <p>Test the process during a routine shift. Record what failed, update the procedure, and repeat the test after devices, staffing, locations, or responsibilities change.</p>
      <p><a href="/guides/lone-worker-safety-checklist">Use the lone-worker checklist</a>, then <a href="/use-cases/lone-worker-safety-app">review how MySentry can fit into an existing employer program</a>.</p>
    `,
  },
  {
    id: "fallback-after-school-plan",
    slug: "after-school-family-check-in-plan",
    title: "Plan the After-School Check-In Before the School Day Ends",
    category: "Families",
    image: "/images/teen-driver.jpg",
    excerpt:
      "Agree on the arrival routine, trusted contacts, missed check-in steps, and direct emergency options before a child or teen heads home.",
    date: "Sep 7, 2026",
    readTime: "3 min read",
    content: `
      <p class="lead">The gap between school dismissal and an adult arriving home can create uncertainty for both young people and caregivers. A clear routine helps everyone know what to do without requiring continuous supervision.</p>
      <h3>Agree on the routine together</h3>
      <p>Decide where the young person should go, when they should check in, and who can help nearby. Age, maturity, transportation, school rules, home access, and local conditions should shape the plan.</p>
      <h3>MySentry's supporting role</h3>
      <p>Eligible MySentry check-in or alert features may support an agreed family plan when the device, permissions, contacts, connectivity, region, plan, and services are available and configured. MySentry does not provide continuous tracking, replace adult supervision, guarantee alert delivery or response, or replace direct contact with local emergency services.</p>
      <h3>A practical plan</h3>
      <ol>
        <li>Write down the normal route, destination, and expected arrival time.</li>
        <li>Choose a trusted adult and agree on a simple check-in.</li>
        <li>Define what the adult should do after a missed check-in.</li>
        <li>Test any eligible app workflow and keep a phone-based backup plan.</li>
      </ol>
      <p><a href="/guides/family-safety-app-privacy-guide">Review the family privacy guide</a>, then <a href="/families">build the family plan together</a>.</p>
    `,
  },
];
