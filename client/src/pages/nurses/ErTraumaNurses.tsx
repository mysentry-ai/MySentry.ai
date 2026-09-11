import { Building2, ClipboardCheck, DoorOpen, Radio, ShieldAlert, Smartphone, Users } from "lucide-react";
import NurseSpecialtyPage from "@/components/NurseSpecialtyPage";

export default function ErTraumaNurses() {
  return (
    <NurseSpecialtyPage
      seoTitle="ER and Trauma Nurse Safety App and Duress Planning"
      seoDescription="See how MySentry can supplement facility procedures with eligible personal alerts, trusted contacts, setup guidance, and clear limitations."
      canonical="https://mysentry.ai/nurses/er-trauma"
      label="ER and Trauma Nurse Safety"
      h1="Personal alert access that respects the clinical safety plan."
      heroDescription="ER and trauma nurses work in high-pressure environments where patient or visitor aggression, fast-moving teams, and internal escalation procedures can intersect. MySentry can add a personal safety layer without replacing facility duress systems, security, training, or clinical judgment."
      heroImage="/images/cdn/CdUihnsjRgcMzrEo.jpg"
      heroAlt="Emergency department nurse reviewing a staff safety and duress procedure"
      directAnswer="MySentry gives eligible ER and trauma nurses user-activated alert access, supported Safety Checks, trusted contacts, permitted incident context, and eligible professional monitoring. Configure it around facility policy and use it alongside the approved staff duress system, internal security, supervisor chain, workplace reporting, emergency services, and clinical judgment."
      problemsHeading="Fast clinical environments need clear escalation roles."
      problemsIntro="A personal tool is useful only when it fits the facility's existing prevention and response program. Start with these three planning problems."
      problems={[
        { icon: ShieldAlert, title: "Patient or visitor aggression can escalate", description: "Threats, intimidation, and physical aggression require prevention, de-escalation, staffing, environmental controls, reporting, and post-event support, not a single technology promise." },
        { icon: Building2, title: "Internal response paths are facility-specific", description: "Duress buttons, code calls, security teams, unit leadership, and documentation rules differ. Staff need to know which approved channel takes priority." },
        { icon: DoorOpen, title: "Risk extends beyond the treatment space", description: "Entrances, corridors, isolated rooms, parking areas, and the trip home may involve different resources and connectivity than the clinical unit." },
      ]}
      fitHeading="Add personal access without confusing the chain of response."
      fitIntro="Facility controls remain primary. MySentry can be considered for eligible personal situations where the nurse, employer policy, device, permissions, and connectivity support a separate or supplemental workflow."
      tools={[
        { icon: Smartphone, title: "User-activated personal alert", description: "An eligible phone or supported control may let the nurse begin the configured MySentry workflow when able and when its use aligns with policy." },
        { icon: Radio, title: "Permitted alert context", description: "Available location, audio, video, or account context depends on feature support, permissions, app state, connectivity, plan, and the situation." },
        { icon: Users, title: "Trusted-contact roles", description: "Selected contacts should understand whether they are a personal support contact, employer contact, or neither, and should not be confused with facility security." },
        { icon: ClipboardCheck, title: "Planned transitions", description: "Safety Checks may support an eligible parking, commute, or other planned activity outside the immediate clinical response system." },
      ]}
      workflowHeading="Make the response hierarchy unmistakable."
      workflowIntro="Before enrollment, the nurse and any participating employer should define where a personal alert fits and which approved facility action comes first."
      workflow={[
        { title: "Learn the facility prevention program", description: "Review de-escalation training, duress systems, security contacts, incident reporting, staffing resources, and post-event procedures for the assigned unit." },
        { title: "Define the personal use case", description: "Decide whether MySentry is intended for an offsite transition, a parking check-in, or another permitted personal context rather than assuming it replaces an internal alarm." },
        { title: "Configure eligible controls and contacts", description: "Confirm the device, permissions, plan, network, and contacts. Keep the selected control reachable without interfering with care or infection-control requirements." },
        { title: "Practice both workflows", description: "Test the MySentry setup separately from the facility drill and confirm that staff know the limits, priorities, and backup steps for each." },
      ]}
      limitations={[
        "MySentry does not prevent workplace violence, de-escalate a person, summon facility security, enforce staffing, replace a duress system, or complete required reporting.",
        "Indoor location and connectivity may be limited by building materials, restricted areas, device state, permissions, or network conditions.",
        "Wellness signals are informational and must not be used to diagnose fatigue, illness, impairment, or fitness for clinical duty.",
        "Detection, delivery, contact, escalation, emergency-service response, arrival, and outcomes are not guaranteed.",
      ]}
      evidenceText="NIOSH and OSHA recommend comprehensive workplace-violence prevention programs that include leadership, worker participation, hazard assessment, controls, training, reporting, and program review. Personal alert technology can support a program, but it cannot stand in for those organizational responsibilities."
      faqs={[
        { question: "How does MySentry fit with the hospital duress alarm?", answer: "Use the facility's approved duress, security, emergency, and reporting procedures. MySentry can add approved personal alerts, Safety Checks, permitted context, contacts, and eligible monitoring to the wider plan." },
        { question: "Can MySentry guarantee that security or emergency services will respond?", answer: "No. Delivery, contact, escalation, security response, emergency-service response, and arrival depend on people, systems, connectivity, policies, and local conditions." },
        { question: "Will location context be accurate inside every hospital?", answer: "No. Indoor location can be limited by device hardware, permissions, app state, building materials, network conditions, and feature support." },
        { question: "Can I trigger an alert without opening the app?", answer: "Available phone, watch, or configured voice controls depend on current device eligibility, software, permissions, settings, app state, and connectivity. Confirm the supported setup before relying on it." },
        { question: "Does MySentry record patient information?", answer: "MySentry should not be used to intentionally collect protected patient information. Any permitted alert context must follow law, employer policy, privacy requirements, and the current feature configuration." },
        { question: "Can the app tell whether I am too fatigued to work?", answer: "No. MySentry is not a medical device and does not diagnose fatigue, impairment, illness, or fitness for duty. Follow clinical and employer guidance." },
        { question: "Can a hospital offer MySentry to staff?", answer: "An employer can review workforce options, but policy alignment, privacy, employee consent, device eligibility, permissions, regions, service terms, and incident procedures must be established first." },
        { question: "Where may a Safety Check be most appropriate?", answer: "A nurse may consider an eligible Safety Check for a planned transition such as a parking walk or commute when employer policy permits. It does not replace a live security escort or urgent facility response." },
      ]}
      relatedLinks={[
        { text: "Nurse Safety Hub", href: "/nurses" },
        { text: "Night Shift Nurses", href: "/nurses/night-shift" },
        { text: "For Employers", href: "/employers" },
        { text: "Professional Monitoring", href: "/features/24-7-professional-monitoring" },
      ]}
    />
  );
}
