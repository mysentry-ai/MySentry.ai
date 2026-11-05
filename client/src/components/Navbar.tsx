import { useLayoutEffect, useRef } from "react";
import { useLocation } from "wouter";
import {
  PUBLIC_HEADER_HTML,
  PUBLIC_BANNER_HTML,
} from "./public-shell/publicShellMarkup";
import { initializePublicNavigation } from "./public-shell/initializePublicNavigation";
import "./public-shell/publicShell.css";

// React must not replace these DOM nodes during a parent scroll-state update.
const headerMarkup = { __html: PUBLIC_HEADER_HTML + PUBLIC_BANNER_HTML };

export default function Navbar() {
  const root = useRef<HTMLDivElement>(null);
  const [location] = useLocation();
  useLayoutEffect(() => {
    const shell = root.current;
    if (!shell) return;
    const dispose = initializePublicNavigation(shell);
    const header = shell.querySelector<HTMLElement>(".site-header")!;
    const banner = shell.querySelector<HTMLElement>(".ring-marquee-banner")!;
    const measure = () => {
      shell.style.setProperty(
        "--public-header-height",
        `${header.getBoundingClientRect().height}px`
      );
      // Existing pages already reserve their fixed-header space in their hero.
      // Add only the banner height, rather than doubling that page offset.
      shell.style.height = `${banner.getBoundingClientRect().height}px`;
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(header);
    observer.observe(banner);
    return () => {
      observer.disconnect();
      dispose();
    };
  }, [location]);
  return (
    <div
      className="public-shell public-shell-header"
      ref={root}
      dangerouslySetInnerHTML={headerMarkup}
    />
  );
}
