import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export const RING_ANNOUNCEMENT =
  "Ring users: Your cameras help you check on your home. But a personal emergency also needs a way to alert people. MySentry connects safety alerts to trusted contacts and eligible professional monitoring.";

export default function HomepageRingBanner() {
  return (
    <aside
      className="hp-ring-announcement"
      aria-label="MySentry for Ring users"
    >
      <div className="hp-ring-announcement-copy">
        <p className="sr-only">{RING_ANNOUNCEMENT}</p>
        <div className="hp-ring-announcement-track" aria-hidden="true">
          {[0, 1].map(group => (
            <div className="hp-ring-announcement-group" key={group}>
              {[0, 1, 2].map(copy => (
                <span key={copy}>{RING_ANNOUNCEMENT}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <Link className="hp-ring-announcement-cta" href="/integrations/ring">
        Explore the Integration <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </aside>
  );
}
