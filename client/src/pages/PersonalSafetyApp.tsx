import AudienceSafetyPage from "@/components/AudienceSafetyPage";

export default function PersonalSafetyApp() {
  return (
    <AudienceSafetyPage
      seoTitle="Personal Safety App With Monitoring | MySentry"
      seoDescription="Review the MySentry Panic Alarm, Safety Checks, eligible device detection, trusted contacts, professional monitoring, requirements, and limitations."
      canonical="https://mysentry.ai/personal-safety-app"
      label="Personal Safety App"
      h1="One Personal Safety Workflow for Everyday Life"
      h1Sub="Prepare supported alerts, trusted contacts, and professional monitoring before you need them."
      problem="Walking, driving, living, exercising, traveling, or working alone can create moments when unlocking a phone, explaining a location, or contacting several people feels difficult."
      directAnswer="MySentry connects a user-activated Panic Alarm, configured voice and device triggers, scheduled Safety Checks, eligible fall or crash events, supported wellness signals, up to 5 trusted contacts, and 24/7 professional monitoring on supported phones and optional wearables."
      bestFor={[
        "People who commute, exercise, travel, live, or work alone",
        "Families preparing a consent-based alert plan",
        "Eligible phone and wearable users who want personal safety and supported wellness context in one app",
      ]}
      notIdealFor={[
        "Replacing a direct call to 911 or local emergency services",
        "Diagnosing, predicting, treating, or preventing a medical condition",
        "Use without a supported device, required permissions, or an available connection",
      ]}
    />
  );
}
