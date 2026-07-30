import { Link } from "wouter";

/**
 * Animated full-width announcement banner for the MySentry x Ring Appstore launch.
 * Placed directly below the navbar and above the hero section.
 * Uses a smooth CSS marquee animation (no blinking, readable speed).
 */
export default function RingTopBanner() {
  const message =
    "Ring users can now get MySentry for $4.99/month on the Ring Appstore. Save 67% on personal emergency response.";

  // Repeat the message to create a seamless loop
  const repeated = Array(6).fill(message);

  return (
    <div className="w-full bg-[#1a1a1a] text-white overflow-hidden relative z-40">
      <style>{`
        @keyframes ring-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ring-marquee-track {
          display: flex;
          width: max-content;
          animation: ring-marquee 40s linear infinite;
        }
        .ring-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="flex items-center h-10">
        {/* Scrolling text */}
        <div className="ring-marquee-track">
          {repeated.map((text, i) => (
            <span
              key={i}
              className="flex items-center gap-3 px-8 text-[13px] font-medium whitespace-nowrap"
            >
              <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-primary/80 text-white text-[9px] font-black shrink-0">
                ●
              </span>
              {text}
            </span>
          ))}
        </div>

        {/* Sticky CTA on the right - always visible */}
        <Link
          href="/ring"
          className="absolute right-0 top-0 h-full flex items-center px-5 bg-primary text-white text-[12px] font-bold tracking-wide hover:bg-primary/90 transition-colors whitespace-nowrap z-10 shrink-0"
          style={{ boxShadow: "-8px 0 16px rgba(0,0,0,0.35)" }}
        >
          Explore More →
        </Link>
      </div>
    </div>
  );
}
