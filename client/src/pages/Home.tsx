import { useLayoutEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";
import HomepageExperience from "@/components/homepage/HomepageExperience";
import HomepageRingBanner from "@/components/homepage/HomepageRingBanner";

export default function Home() {
  const shellRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const shell = shellRef.current;
    const navbar = shell?.querySelector(":scope > nav");
    if (!shell || !navbar) return;
    const updateOffset = () => {
      shell.style.setProperty(
        "--hp-nav-height",
        `${navbar.getBoundingClientRect().height}px`
      );
    };
    updateOffset();
    const observer = new ResizeObserver(updateOffset);
    observer.observe(navbar);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="hp-live-shell" ref={shellRef}>
      <SEO />
      <Navbar />
      <div className="hp-ring-banner-slot">
        <HomepageRingBanner />
      </div>
      <HomepageExperience />
    </div>
  );
}
