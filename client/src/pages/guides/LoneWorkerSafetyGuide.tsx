import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function LoneWorkerSafetyGuide() {
  return (
    <SEOPageTemplate
      seoTitle="Lone Worker Safety Planning Guide | MySentry"
      seoDescription="Build a practical lone-worker safety plan covering hazards, check-ins, alerts, connectivity, privacy, training, and escalation responsibilities."
      canonical="https://mysentry.ai/guides/lone-worker-safety"
      label="Lone Worker Safety Guide"
      h1="How to Build a Lone Worker Safety Plan"
      h1Sub="Start with the work, the hazards, the people, and the response plan before choosing technology."
      problem="A lone worker may be out of sight, beyond normal supervision, in an unfamiliar location, or unable to reach a nearby colleague during a safety concern."
      empathy="A useful program must fit the actual work environment, respect employee privacy, and assign clear responsibilities without assuming that an app can replace workplace controls or emergency procedures."
      steps={[
        { title: "Identify Lone-Work Scenarios", description: "Document which roles work alone, where they work, when isolation occurs, and which hazards or public interactions may be relevant." },
        { title: "Define the Response Plan", description: "Assign check-in expectations, designated contacts, escalation steps, disconnected-area procedures, and responsibility for reviewing incidents." },
        { title: "Select and Test Technology", description: "Confirm device, plan, permissions, connectivity, privacy, accessibility, and training requirements before a pilot rollout." },
      ]}
      primaryCta={{ text: "Book a Demo", href: "/contact" }}
      secondaryCta={{ text: "Review Lone Worker Features", href: "/use-cases/lone-worker-safety-app" }}
      directAnswer="A lone worker safety plan is a documented process for identifying isolated work, assessing hazards, setting check-in and alert procedures, assigning response responsibilities, training workers, and reviewing incidents. MySentry can supplement that plan with eligible Panic Alarm, Safety Check, device-detection, alert-context, and monitoring features. It does not certify compliance or replace workplace controls."
      howItWorks={[
        "List the roles, tasks, work areas, schedules, and conditions that create lone-work exposure.",
        "Assess hazards and determine which risks require elimination, engineering controls, administrative controls, training, supervision, personal protective equipment, or another measure.",
        "Define when a worker checks in, who receives an alert, what information may be shared, and what happens when connectivity is unavailable.",
        "Pilot any technology with representative workers, document feedback, and test the approved alert workflow.",
        "Review incidents, near misses, policy changes, workforce feedback, and coverage gaps at a defined interval.",
      ]}
      afterAlert={[
        "Follow the organization's documented response procedure rather than improvising responsibilities during an event.",
        "Use only the location, audio, video, contact, or account context permitted for that alert and workplace policy.",
        "Call local emergency services directly whenever it is safe and appropriate.",
        "Document the incident and review whether controls, training, contacts, or procedures need to change.",
      ]}
      bestFor={["Employers with field, mobile, after-hours, remote, or isolated workers", "Safety teams reviewing check-in and escalation processes", "Organizations planning a consent-based technology pilot"]}
      notIdealFor={["Replacing required controls, supervision, training, or emergency procedures", "Covert employee tracking", "Assuming one workflow fits every role, site, region, or collective agreement"]}
      keyTakeaways={[
        "Technology should support a written program, not define it.",
        "Connectivity, permissions, privacy, accessibility, and human responsibility are part of the safety design.",
        "Verify applicable legal and regulatory requirements with qualified safety and legal professionals.",
      ]}
      faqs={[
        { question: "What is a lone worker?", answer: "A lone worker performs work without immediate, direct support from a nearby colleague. The relevant definition and requirements may vary by role, worksite, jurisdiction, contract, and policy." },
        { question: "Does MySentry make an organization compliant?", answer: "No. MySentry does not certify compliance. Employers should review applicable safety, labor, privacy, accessibility, and industry requirements with qualified professionals." },
        { question: "Should employers track workers continuously?", answer: "A safety program should use only necessary, disclosed, and appropriately authorized data. MySentry should not be described or deployed as covert tracking." },
        { question: "What should happen when a worker misses a check-in?", answer: "The written procedure should define who reviews the missed check-in, how contact is attempted, what information may be used, and when an internal or emergency escalation is appropriate." },
        { question: "What if the work area has no connection?", answer: "Maintain a separate disconnected-area procedure. Alert delivery and shared context require an available supported network connection." },
      ]}
      setupRequirements={{
        devices: "Currently supported phones and, for optional wearable features, an eligible watch configuration. Confirm compatibility before rollout.",
        permissions: "Use only the location, notification, motion, background, microphone, camera, and contact permissions required by the approved workflow.",
        connectivity: "Confirm coverage across intended work areas and document a separate procedure for disconnected locations.",
        limitations: "MySentry does not certify compliance or guarantee detection, alert delivery, monitoring contact, escalation, emergency-service response, or arrival.",
      }}
      proofBlocks={[
        { claim: "Hazard-led planning", detail: "Start with the role, task, environment, and controls rather than choosing a tool before understanding the work." },
        { claim: "Defined responsibilities", detail: "Name the people responsible for check-ins, alert review, escalation, documentation, and program improvement." },
        { claim: "Tested procedures", detail: "Pilot the workflow, include disconnected-area scenarios, and document what workers and supervisors should expect." },
      ]}
      relatedLinks={[
        { text: "Lone Worker Safety App", href: "/use-cases/lone-worker-safety-app" },
        { text: "Professional Monitoring", href: "/features/24-7-professional-monitoring" },
        { text: "Employer Safety", href: "/employers" },
        { text: "Book a Demo", href: "/contact" },
      ]}
    />
  );
}
