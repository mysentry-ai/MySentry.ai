import { Car, ClipboardCheck, Home, MapPin, Radio, ShieldCheck, Smartphone } from "lucide-react";
import NurseSpecialtyPage from "@/components/NurseSpecialtyPage";

export default function HomeHealthNurses() {
  return (
    <NurseSpecialtyPage
      seoTitle="Home Health Nurse Safety App and Solo Visit Planning"
      seoDescription="Explore user-activated alerts, Safety Checks, trusted contacts, setup needs, and limitations for home health nurses working in private homes."
      canonical="https://mysentry.ai/nurses/home-health"
      label="Home Health Nurse Safety"
      h1="A personal safety plan for solo visits and the road between them."
      heroDescription="Home health nurses move through private homes, changing conditions, and travel between appointments. MySentry can add eligible personal alerts, Safety Checks, trusted contacts, and permitted incident context to an agency-approved safety plan."
      heroImage="/images/cdn/brsrMeZqzKnRPjcC.jpg"
      heroAlt="Home health nurse reviewing a visit plan before entering a residence"
      directAnswer="MySentry is a supplemental personal-safety service for home health nurses using eligible phones and supported wearable configurations. It can support user-activated alerts, planned Safety Checks, trusted-contact workflows, permitted incident context, and eligible professional monitoring. It does not replace an agency risk assessment, visit policy, supervisor, security resource, emergency service, or required incident reporting."
      problemsHeading="Home visits change from one doorway to the next."
      problemsIntro="A useful plan must account for the work environment before introducing a new tool. These three moments deserve specific preparation."
      problems={[
        { icon: Home, title: "Working beyond immediate coworker support", description: "A nurse may enter a residence alone and work out of sight of a supervisor or teammate. The agency procedure should define when the nurse is considered alone and how support is requested." },
        { icon: ShieldCheck, title: "Conditions can change without notice", description: "People, pets, entrances, stairs, lighting, and household conditions may differ from the referral or a previous visit. The nurse still needs authority to pause, leave, or contact the agency." },
        { icon: Car, title: "Travel is part of the safety plan", description: "Parking, walking to an entrance, driving between visits, and working in weak-service areas create separate transitions that need contacts, check-ins, and a backup procedure." },
      ]}
      fitHeading="Use MySentry around the agency procedure, not instead of it."
      fitIntro="Start with the agency's visit policy, escalation contacts, reporting process, and local emergency guidance. Then configure only the MySentry tools that the nurse understands and is permitted to use."
      tools={[
        { icon: Smartphone, title: "User-activated Panic Alarm", description: "Keep an eligible phone or supported control accessible so the nurse may begin the configured alert workflow when able." },
        { icon: ClipboardCheck, title: "Planned Safety Checks", description: "Schedule a timed check-in for an eligible visit or transition and define the configured follow-up if the nurse does not confirm." },
        { icon: Radio, title: "Trusted-contact coordination", description: "Choose contacts who understand their role, the agency process, and which alert information they may receive." },
        { icon: MapPin, title: "Permitted incident context", description: "Supported location or other alert context may be available when the feature, permission, app state, plan, and connection allow it." },
      ]}
      workflowHeading="Prepare one repeatable visit workflow."
      workflowIntro="The safest configuration is one the nurse and agency have reviewed, practiced, and backed up for disconnected locations."
      workflow={[
        { title: "Review the visit and agency procedure", description: "Confirm known hazards, arrival and departure expectations, supervisor contacts, emergency guidance, and the conditions that allow the nurse to delay or leave a visit." },
        { title: "Configure the appropriate check-in", description: "If a Safety Check fits the approved process, set a realistic duration and confirm what the configured follow-up is expected to do." },
        { title: "Keep alert access practical", description: "Place the eligible phone or supported control where it can be reached, then verify battery, permissions, notifications, app state, and network availability." },
        { title: "Practice and maintain a backup", description: "Test the workflow with the selected contacts and retain a separate call, code word, supervisor, or emergency procedure for situations where MySentry is unavailable." },
      ]}
      limitations={[
        "Private homes and community locations may have weak or unavailable connectivity, which can prevent or delay alert delivery and shared context.",
        "Supported-device detection may miss an event or activate when no emergency exists. It is not a substitute for a user-initiated call when one is possible.",
        "MySentry does not screen a residence, authorize a visit, provide a security escort, enforce an agency policy, or complete required workplace reporting.",
        "Detection, delivery, contact, escalation, emergency-service response, arrival, and outcomes are not guaranteed.",
      ]}
      evidenceText="NIOSH and OSHA describe healthcare workplace-violence prevention as a comprehensive employer responsibility involving assessment, controls, training, reporting, and response planning. A personal app can be one supplemental layer, but it should never be presented as the workplace program itself."
      faqs={[
        { question: "Does MySentry replace my agency's home-visit safety policy?", answer: "No. Follow the agency's visit screening, supervisor, check-in, withdrawal, incident-reporting, and emergency procedures. MySentry is supplemental." },
        { question: "Can I schedule a check-in for a home visit?", answer: "A Safety Check may be available on an eligible plan and configuration. Confirm the duration, contacts, permissions, connectivity, and configured follow-up before relying on it." },
        { question: "Will MySentry work inside every home?", answer: "No service works in every setting. Building materials, device condition, app state, permissions, battery, and network availability can affect operation." },
        { question: "Does MySentry automatically send emergency services to the home?", answer: "No automatic dispatch or arrival is guaranteed. An eligible monitoring workflow may review permitted context, attempt contact, and coordinate next steps when appropriate. Call 911 directly whenever it is safe and possible." },
        { question: "Can my agency or family continuously track me?", answer: "MySentry does not describe unrestricted continuous access to private wellness information. Any supported alert or location context follows the selected feature, permissions, settings, and policy." },
        { question: "Is a smartwatch required?", answer: "No smartwatch is required for every MySentry feature. Wearable controls, supported-device detection, and wellness context require an eligible device and current compatibility." },
        { question: "What should I do when a visit has no reliable signal?", answer: "Use the agency's disconnected-location procedure. Alert delivery and shared context require an available supported connection, so a separate check-in or escalation method is essential." },
        { question: "Can an employer provide MySentry to a home health team?", answer: "Employers can review workforce options, but device eligibility, employee consent, policy alignment, permissions, regions, and service terms must be confirmed before rollout." },
      ]}
      relatedLinks={[
        { text: "Nurse Safety Hub", href: "/nurses" },
        { text: "Lone Worker Safety Guide", href: "/guides/lone-worker-safety" },
        { text: "Home Healthcare Industry", href: "/industries/home-healthcare" },
        { text: "Safety Check-In App", href: "/features/safety-check-in-app" },
      ]}
    />
  );
}
