import SEOPageTemplate from '@/components/SEOPageTemplate';

export default function ConstructionSolutionPage() {
  const pageProps = {
    seoTitle: 'Fall Detection for Construction | MySentry',
    seoDescription: 'Protect your construction crew with MySentry\'s automatic fall detection, lone worker monitoring, and panic alarm system. Enhance safety and simplify OSHA compliance.',
    canonical: 'https://mysentry.ai/solutions/construction',
    label: 'Construction Safety',
    h1: 'Automated Safety Monitoring for the Modern Construction Site',
    problem: 'Construction sites are inherently dangerous environments. Your team faces constant risks from falls, accidents, and health emergencies, often while working alone in remote or elevated areas. Meanwhile, you face the pressure of maintaining strict OSHA compliance and the financial and reputational costs of a single incident.',
    empathy: 'Managing a construction crew is a balancing act. You\'re responsible for their safety, but you can\'t be everywhere at once. You need a reliable system that watches over your team, provides immediate help when needed, and simplifies your safety documentation, giving you and your crew peace of mind.',
    steps: [
      {
        title: 'Equip Your Crew',
        description: 'Each worker gets a small, discreet MySentry device, worn on the body. It\'s rugged, water-resistant, and designed for the tough conditions of a construction site.',
      },
      {
        title: 'Monitor Automatically',
        description: 'MySentry continuously monitors for falls and potential health emergencies. If a fall is detected, it automatically triggers an alert after 2 minutes if the worker doesn\'t respond.',
      },
      {
        title: 'Respond Instantly',
        description: 'Alerts are sent to on-site safety managers and our 24/7 monitoring center. GPS location pinpoints exactly where help is needed, ensuring a rapid response.',
      },
      {
        title: 'Streamline Compliance',
        description: 'Every event is logged, creating an automatic paper trail for OSHA and internal safety audits. Demonstrate your commitment to safety with concrete data.',
      },
    ],
    primaryCta: { text: 'Book a Demo', href: '/contact' },
    secondaryCta: { text: 'See Pricing', href: '/pricing' },
    directAnswer: 'The most effective way to enhance construction site safety is with an automated monitoring system like MySentry. It provides immediate fall detection, a panic alarm for conscious workers, and GPS tracking to locate individuals quickly, complementing traditional safety protocols with a layer of proactive, 24/7 protection.',
    howItWorks: [
      'Automatic Fall Detection: Using advanced motion sensors, MySentry detects the signature of a hard fall. If the worker is unresponsive for two minutes, an alert is automatically dispatched.',
      'On-Demand Panic Alarm: Workers can instantly call for help via a voice command, a tap on their smartphone, or their smartwatch. This is crucial for situations where a fall hasn\'t occurred but assistance is needed.',
      'Real-Time Health Monitoring: The device monitors key biometric data, providing an early warning system for potential health issues like heatstroke or cardiac events on the job.',
      'Pinpoint GPS Tracking: In an emergency, every second counts. Our system provides the exact GPS coordinates of the worker, so help can be sent to the right location without delay.',
    ],
    afterAlert: [
      'When an alert is triggered, a multi-channel notification is sent to your designated safety managers and our professional monitoring team. We attempt to contact the worker first. If there is no response, we coordinate with on-site personnel or local emergency services, providing them with the critical location and incident data they need.',
    ],
    bestFor: [
      'General Contractors seeking a comprehensive site-wide safety solution.',
      'Roofing Companies aiming to protect workers at heights.',
      'Electrical and Plumbing Contractors with teams working in isolated areas.',
      'Any construction business committed to exceeding OSHA standards and fostering a culture of safety.',
    ],
    notIdealFor: [
      'Companies operating exclusively in office or low-risk environments.',
      'Hobbyists or DIYers not working in a professional capacity.',
      'Organizations without a designated safety contact or protocol.',
    ],
    keyTakeaways: [
      'Protect Lone Workers: Ensure every worker, especially those in remote or isolated sections of a site, is always connected to help.',
      'Mitigate Fall Risks: Provide an immediate response for falls from height, the leading cause of fatalities in construction.',
      'Simplify OSHA Compliance: Automate incident logging and reporting to make safety audits smoother and more accurate.',
      'Reduce Response Times: Cut down the time it takes to find and assist an injured worker with precise GPS location data.',
      'Empower Your Crew: Give your workers the confidence that comes from knowing a dedicated safety net is watching over them.',
      'Lower Insurance Costs: Demonstrate proactive risk management to potentially lower your workers\' compensation and liability insurance premiums.',
    ],
    faqs: [
      {
        question: 'How durable is the MySentry device for a construction environment?',
        answer: 'The device is built to withstand the rigors of a construction site. It is IP67 rated for water and dust resistance and housed in a rugged, shock-absorbent casing.',
      },
      {
        question: 'Does this system require a lot of training for my crew?',
        answer: 'No. The system is designed for simplicity. The device is worn and works automatically in the background. We provide a simple onboarding session to show workers how to use the manual panic alarm features.',
      },
      {
        question: 'What are the connectivity requirements on-site?',
        answer: 'MySentry uses a cellular connection to transmit alerts, so it works anywhere there is cell service. No Wi-Fi is required.',
      },
      {
        question: 'Can we manage alerts and see worker status ourselves?',
        answer: 'Yes. Your designated safety managers will have access to a secure dashboard where they can view the status of all active devices, manage alert notifications, and review incident history.',
      },
    ],
    setupRequirements: {
      devices: 'Pre-configured, ruggedized MySentry devices for each worker.',
      permissions: 'Access to a secure company dashboard for safety managers.',
      connectivity: 'Reliable cellular service on-site for alert transmission.',
      limitations: 'The system is a supplementary tool and not a replacement for emergency services; always call 911 in critical situations.',
    },
    proofBlocks: [
      {
        claim: '34% Reduction in Incident Response Time',
        detail: 'Based on internal beta program data, MySentry significantly cuts down the time to get help to a worker in need.',
      },
      {
        claim: 'A Non-Negotiable Part of Our Safety Gear',
        detail: '“MySentry gives me peace of mind. I know if one of my guys has a problem, we\'ll know about it instantly.” - John Miller, Safety Manager',
      },
    ],
    relatedLinks: [
      { text: 'Lone Worker Safety Guide', href: '/guides/lone-worker-safety' },
      { text: 'How MySentry Works', href: '/how-it-works' },
    ],
    heroImage: '/images/solutions/construction-hero.jpg',
  };

  return <SEOPageTemplate {...pageProps} />;
}
