import { Car, ClipboardCheck, Clock3, Moon, Radio, Smartphone, Users } from "lucide-react";
import NurseSpecialtyPage from "@/components/NurseSpecialtyPage";

export default function NightShiftNurses() {
  return (
    <NurseSpecialtyPage
      seoTitle="Night Shift Nurse Safety App and Check-In Planning"
      seoDescription="Prepare for after-hours transitions, parking, and commutes with Safety Checks, eligible alerts, trusted contacts, and clear limitations."
      canonical="https://mysentry.ai/nurses/night-shift"
      label="Night Shift Nurse Safety"
      h1="Plan the quiet transitions before and after a demanding shift."
      heroDescription="Night-shift safety includes more than the clinical unit. Quieter corridors, lower-traffic entrances, parking areas, transit, and the drive home can require different check-ins and resources. MySentry can add eligible personal tools to that broader plan."
      heroImage="/images/cdn/eAqkYaznpJbyFziv.jpg"
      heroAlt="Night shift nurse preparing a safety check-in before leaving work"
      directAnswer="MySentry connects eligible night-shift nurses to user-activated alerts, planned Safety Checks, trusted contacts, permitted incident context, and professional monitoring for selected moments. Configure it alongside employer procedures, security resources, transportation planning, and emergency services."
      problemsHeading="After-hours safety changes across the shift."
      problemsIntro="The plan should cover the unit, the route out, and the trip home without turning fatigue or risk into a medical claim."
      problems={[
        { icon: Moon, title: "Quieter areas may have fewer people nearby", description: "Corridors, staff entrances, elevators, transit stops, and parking areas can feel different after hours. Staff should know the available security and escort resources." },
        { icon: Car, title: "The commute starts after demanding work", description: "The drive or ride home deserves a plan that includes rest, transportation alternatives, contacts, and direct emergency options rather than reliance on automatic detection." },
        { icon: Clock3, title: "Check-in timing must fit real shift conditions", description: "Handoffs, overtime, delayed relief, and changing schedules can make rigid timers unhelpful unless the user can adjust and cancel them appropriately." },
      ]}
      fitHeading="Support planned transitions without diagnosing fatigue."
      fitIntro="MySentry can help organize a check-in or provide access to an eligible personal alert. It cannot determine whether someone is safe to drive, alert, impaired, ill, or fit for duty."
      tools={[
        { icon: ClipboardCheck, title: "Flexible Safety Checks", description: "Schedule an eligible check-in for a planned parking, transit, or commute transition and adjust it when the shift changes." },
        { icon: Smartphone, title: "User-activated Panic Alarm", description: "Keep an eligible phone or supported control accessible when moving through a permitted after-hours setting." },
        { icon: Users, title: "Trusted contacts who are actually available", description: "Choose contacts who understand the schedule, local resources, and the action expected if a supported notification arrives." },
        { icon: Radio, title: "Eligible monitoring and permitted context", description: "A supported alert may connect to monitoring and include available permitted context, subject to plan, device, settings, app state, connection, and region." },
      ]}
      workflowHeading="Create an after-hours plan that can change with the shift."
      workflowIntro="The goal is not constant monitoring. It is a clear, practiced option for specific transitions when the nurse wants an added layer."
      workflow={[
        { title: "Identify the transition", description: "Choose the specific moment that needs support, such as a remote parking area, transit connection, isolated corridor, or unfamiliar route home." },
        { title: "Use employer resources first", description: "Save security numbers, request an escort where available, follow badge and entrance procedures, and report hazards through the approved channel." },
        { title: "Configure the personal workflow", description: "Set a realistic Safety Check or keep an eligible alert control accessible. Confirm contacts, battery, permissions, app state, device support, and connectivity." },
        { title: "Plan for fatigue without making a diagnosis", description: "Use rest, a ride, public transit, a hotel, a family pickup, or employer resources when needed. MySentry cannot decide whether it is safe to drive." },
      ]}
      limitations={[
        "MySentry does not diagnose fatigue, impairment, illness, sleep deprivation, or fitness to work or drive.",
        "Supported-device crash or fall detection may miss events or activate when no emergency exists, and it does not guarantee alert delivery or response.",
        "Parking structures, elevators, basements, rural routes, app state, battery, permissions, and network conditions can affect available features and context.",
        "MySentry does not replace a security escort, safe transportation, employer policy, workplace reporting, clinical judgment, or direct emergency contact.",
      ]}
      evidenceText="CDC and NIOSH identify fatigue, schedule changes, procedures, training, and workplace violence as relevant healthcare-worker safety concerns. A responsible night-shift page should therefore focus on preparation and approved resources rather than claiming that an app can measure readiness or prevent an incident."
      faqs={[
        { question: "Can MySentry tell whether I am too tired to drive?", answer: "No. MySentry does not diagnose fatigue, impairment, or fitness to drive. Use rest, alternate transportation, employer resources, and professional guidance when needed." },
        { question: "Can I schedule a Safety Check for the walk to my car?", answer: "An eligible Safety Check may support a planned transition. Confirm the timer, contacts, permissions, connectivity, and configured follow-up, and use a security escort when available." },
        { question: "Does crash detection guarantee help after a collision?", answer: "No. Supported-device detection depends on the device, how it is carried or worn, settings, permissions, app state, connectivity, and event conditions. Delivery and response are not guaranteed." },
        { question: "Will MySentry work in a parking garage?", answer: "Operation is not guaranteed. Structures and underground areas may limit network and location availability, so keep an alternative call or escort plan." },
        { question: "Can my family watch my full commute?", answer: "MySentry does not describe unrestricted continuous family tracking. Supported location or alert context follows the selected feature, permissions, settings, and active workflow." },
        { question: "Do I need a smartwatch on night shift?", answer: "No wearable is required for every feature. Supported controls, detection, and wellness context require an eligible watch and current compatibility." },
        { question: "How does MySentry fit with the hospital's after-hours security process?", answer: "Follow employer entrance, escort, security, reporting, and emergency procedures. MySentry can add approved personal alerts, Safety Checks, contacts, context, and eligible monitoring to the wider plan." },
        { question: "Can my employer include MySentry in a night-shift program?", answer: "Employers can review options, but policy alignment, employee consent, privacy, device eligibility, permissions, region, connectivity, and response roles must be established first." },
      ]}
      relatedLinks={[
        { text: "Night Shift Safety Checklist", href: "/guides/night-shift-nurse-safety-checklist" },
        { text: "Nurse Safety Hub", href: "/nurses" },
        { text: "ER and Trauma Nurses", href: "/nurses/er-trauma" },
        { text: "Travel Nurses", href: "/nurses/travel-nurses" },
        { text: "Safety Check-In App", href: "/features/safety-check-in-app" },
      ]}
    />
  );
}
