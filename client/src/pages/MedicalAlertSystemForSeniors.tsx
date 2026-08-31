import AudienceSafetyPage from "@/components/AudienceSafetyPage";

export default function MedicalAlertSystemForSeniors() {
  return (
    <AudienceSafetyPage
      seoTitle="Senior Safety and Fall Alert App | MySentry"
      seoDescription="Review MySentry supported-device fall alerts, Panic Alarm, Safety Checks, trusted contacts, professional monitoring, and limitations for older adults."
      canonical="https://mysentry.ai/medical-alert-system-for-seniors"
      label="Senior Safety"
      h1="A Smartphone-Based Safety Option for Independent Older Adults"
      h1Sub="Supported-device fall checks, a user-activated Panic Alarm, trusted contacts, and professional monitoring."
      problem="An older adult may live independently, spend time alone, or be unable to reach a phone after a fall-like event. Families want a clear alert plan without taking away dignity, privacy, or control."
      directAnswer="MySentry is a supplemental smartphone-based safety and wellness service for eligible older adults. It can combine supported-device fall detection, a user-activated Panic Alarm, scheduled Safety Checks, supported wearable wellness signals, up to 5 trusted contacts, and professional monitoring. It is not a medical device and does not replace emergency services or professional medical care."
      bestFor={[
        "Independent older adults who regularly carry a supported phone",
        "Eligible watch users who want additional fall and Panic Alarm controls",
        "Families preparing a consent-based alert and contact workflow",
      ]}
      notIdealFor={[
        "Older adults who do not regularly carry or use a supported phone",
        "Replacing a prescribed medical device, in-home care, or emergency services",
        "Continuous family access to private wellness data",
      ]}
    />
  );
}
