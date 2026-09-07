import IndustrySafetyPage from "@/components/IndustrySafetyPage";

export default function RealEstate() {
  return (
    <IndustrySafetyPage
      industry="Real Estate"
      canonical="https://mysentry.ai/industries/real-estate"
      seoDescription="A supplemental personal-safety workflow for eligible real-estate teams with supported Panic Alarm, Safety Checks, device signals, and monitoring availability."
      audienceExamples={[
        "Independent agents meeting new clients at listings",
        "Leasing staff and property managers visiting vacant properties",
        "Brokerages documenting a consistent safety workflow for field teams",
      ]}
      risks="Real-estate professionals may meet new people alone, enter vacant properties, and travel between listings without a nearby colleague."
      heroImage="/images/cdn/hero-real-estate-dAoBKmzF88UvcCt9qLwiSC.webp"
    />
  );
}
