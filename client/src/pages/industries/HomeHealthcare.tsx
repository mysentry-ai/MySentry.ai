import IndustrySafetyPage from "@/components/IndustrySafetyPage";

export default function HomeHealthcare() {
  return (
    <IndustrySafetyPage
      industry="Home Healthcare"
      canonical="https://mysentry.ai/industries/home-healthcare"
      seoDescription="A supplemental personal-safety workflow for eligible home healthcare teams, including supported Panic Alarm, Safety Checks, device signals, and monitoring availability."
      audienceExamples={[
        "Home health aides visiting clients in private homes",
        "Visiting nurses and therapy teams traveling between appointments",
        "Hospice and in-home care teams working without an on-site colleague",
      ]}
      risks="Home healthcare teams may work alone in private homes, adapt to changing surroundings, and travel between visits."
      heroImage="/images/cdn/hero-home-healthcare-FyAFPcaaseQ5VKXwe2ieTZ.webp"
    />
  );
}
