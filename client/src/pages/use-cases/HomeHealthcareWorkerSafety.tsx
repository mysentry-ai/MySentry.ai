import IndustrySafetyPage from "@/components/IndustrySafetyPage";

export default function HomeHealthcareWorkerSafety() {
  return (
    <IndustrySafetyPage
      industry="Home Healthcare"
      canonical="https://mysentry.ai/use-cases/home-healthcare-worker-safety"
      seoDescription="A supplemental personal-safety workflow for eligible home healthcare teams, with supported personal alerts, Safety Checks, device-dependent event detection, designated contacts, and professional monitoring options."
      audienceExamples={[
        "Home health and visiting-nurse teams",
        "Hospice and in-home care organizations",
        "Therapy, social-work, and community-care teams",
        "Supervisors responsible for lone-visit procedures",
      ]}
      risks="Home healthcare work can involve three distinct challenges: entering unfamiliar private homes, working alone while conditions change during a visit, and traveling between appointments with uneven connectivity or delayed access to support."
      heroImage="/images/cdn/hero-home-healthcare-FyAFPcaaseQ5VKXwe2ieTZ.webp"
    />
  );
}
