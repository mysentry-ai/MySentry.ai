import { Building2, Car, ClipboardCheck, Home, MapPin, Radio, Smartphone, Users } from "lucide-react";
import NurseSpecialtyPage from "@/components/NurseSpecialtyPage";

export default function TravelNurses() {
  return (
    <NurseSpecialtyPage
      seoTitle="Travel Nurse Safety App for New Assignments"
      seoDescription="Plan for unfamiliar facilities, housing, parking, and commutes with eligible MySentry alerts, trusted contacts, setup guidance, and limitations."
      canonical="https://mysentry.ai/nurses/travel-nurses"
      label="Travel Nurse Safety"
      h1="A safety setup you can review for every new assignment."
      heroDescription="A new contract can change your facility, housing, parking, commute, local contacts, and escalation procedures at the same time. MySentry can provide a consistent personal-safety layer while you learn the rules and resources in each location."
      heroImage="/images/cdn/rUMdMJIpZDvPYyBm.jpg"
      heroAlt="Travel nurse reviewing a new assignment route and facility information"
      directAnswer="MySentry can help an eligible travel nurse prepare user-activated alerts, Safety Checks, trusted contacts, permitted incident context, and eligible monitoring for a new assignment. The setup travels with the nurse only when the phone, supported device, plan, permissions, connectivity, region, and service remain eligible. It does not replace facility onboarding, local security, employer procedures, housing judgment, or emergency services."
      problemsHeading="A new assignment changes more than the unit."
      problemsIntro="The first days of a contract require practical safety decisions across work, housing, and travel. Three transitions deserve a deliberate plan."
      problems={[
        { icon: Building2, title: "An unfamiliar facility has unfamiliar rules", description: "Duress systems, badge access, security numbers, staff entrances, reporting expectations, and after-hours procedures can differ from the nurse's previous assignment." },
        { icon: Home, title: "Temporary housing changes the routine", description: "Entrances, parking, building access, neighborhood routes, roommates, and property contacts may all be new. A familiar personal setup still needs local verification." },
        { icon: Car, title: "Commutes and support networks reset", description: "A new route, schedule, transit option, and time zone can affect who is available to check in. Trusted contacts need the current address and an understood role." },
      ]}
      fitHeading="Keep one personal layer, then localize it."
      fitIntro="MySentry can provide familiar alert and check-in tools, but every assignment should begin with a fresh review of facility policy, regional eligibility, trusted contacts, routes, permissions, and connectivity."
      tools={[
        { icon: Smartphone, title: "Consistent personal alert access", description: "Use eligible phone or supported wearable controls according to the current configuration while learning the facility's approved internal procedures." },
        { icon: ClipboardCheck, title: "Assignment-specific Safety Checks", description: "Plan timed check-ins for an unfamiliar commute, parking transition, or other eligible activity when a configured check-in adds value." },
        { icon: Users, title: "Updated trusted contacts", description: "Choose people who are awake, reachable, and familiar with the current assignment, housing location, and expected next step." },
        { icon: MapPin, title: "Permitted context for the current location", description: "Supported alert context may help orient a contact or eligible monitoring workflow when permissions, settings, app state, and connectivity allow it." },
      ]}
      workflowHeading="Reset the plan at the start of each contract."
      workflowIntro="A configuration that made sense in one city or facility may not fit the next. Treat each assignment as a new setup review."
      workflow={[
        { title: "Learn the local safety resources", description: "Save facility security, staffing, supervisor, housing, transportation, and emergency contacts. Confirm staff entrances, parking, escorts, and reporting procedures." },
        { title: "Update people and places", description: "Review trusted contacts, home and work addresses, commute details, time zones, notification permissions, and who should act on an alert or missed check-in." },
        { title: "Confirm technical eligibility", description: "Check the current phone, wearable, software, plan, region, permissions, battery, and connection before assuming a previously used feature will operate." },
        { title: "Practice before a stressful moment", description: "Test the selected alert or Safety Check workflow and keep facility and local emergency options accessible as the primary approved resources." },
      ]}
      limitations={[
        "Availability can change by device, software, plan, permission, connection, region, and service terms, so a past setup does not guarantee future eligibility.",
        "Indoor location, temporary housing Wi-Fi, parking structures, and rural routes may reduce or interrupt connectivity and available context.",
        "MySentry does not verify housing safety, screen a neighborhood, approve a commute, replace facility orientation, or override employer procedures.",
        "Detection, delivery, monitoring contact, escalation, emergency-service response, arrival, and outcomes are not guaranteed.",
      ]}
      evidenceText="CDC and NIOSH healthcare-worker guidance recognizes offsite work, schedule changes, fatigue, procedures, and training as relevant parts of healthcare safety. For a travel nurse, that supports a repeatable personal checklist that is updated for each employer and location."
      faqs={[
        { question: "Can I use the same MySentry setup in every assignment?", answer: "Not without review. Confirm device, plan, permissions, connectivity, regional availability, monitoring eligibility, facility policy, and trusted contacts for each contract." },
        { question: "Does MySentry replace facility security or a staff duress system?", answer: "No. Learn and follow the facility's approved security, duress, reporting, and emergency procedures. MySentry is only a supplemental personal layer." },
        { question: "Can I use a Safety Check for a new commute?", answer: "A Safety Check may be useful for an eligible planned activity. Set a realistic duration, confirm who may receive the configured follow-up, and maintain a direct emergency option." },
        { question: "Will it work in parking garages or temporary housing?", answer: "Operation is not guaranteed in any location. Building materials, app state, battery, permissions, and network availability can affect delivery and context." },
        { question: "Can contacts see my location all the time?", answer: "MySentry does not describe unrestricted continuous access. Supported location sharing follows the selected feature, permissions, settings, and active workflow." },
        { question: "Do I need to change trusted contacts when I change time zones?", answer: "Review them. A useful contact should understand the assignment, know the current address, be reachable during the relevant hours, and know what action is expected." },
        { question: "Does supported-device detection guarantee an alert after a fall or crash?", answer: "No. Detection depends on eligible hardware, how it is carried or worn, settings, permissions, app state, connectivity, and event conditions." },
        { question: "Can my staffing agency or facility provide coverage?", answer: "Employers can review workforce options. Eligibility, employee consent, policy alignment, devices, permissions, regions, and service terms must be confirmed before any rollout." },
      ]}
      relatedLinks={[
        { text: "Nurse Safety Hub", href: "/nurses" },
        { text: "Night Shift Nurses", href: "/nurses/night-shift" },
        { text: "Panic Alarm App", href: "/features/panic-button-app" },
        { text: "Safety Check-In App", href: "/features/safety-check-in-app" },
      ]}
    />
  );
}
