import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";
import HomepageExperience from "@/components/homepage/HomepageExperience";

export default function Home() {
  return (
    <div className="hp-live-shell">
      <SEO />
      <Navbar />
      <HomepageExperience />
    </div>
  );
}
