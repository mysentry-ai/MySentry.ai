import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { ROUTE_META } from "@shared/seo/route-meta";
import { resolveMeta } from "../../server/seo/resolve-meta";

const root = process.cwd();
const sourceRoot = path.join(root, "client", "src");
const consentRoute = "/sms-consent";
const requiredConsentText =
  "By clicking here you consent to receive customer care-related or one-on-one communication messages from MySentry. Message frequency may vary. Standard Message and Data Rates may apply. Reply STOP to opt out. Reply Help for help.";
const requiredPrivacyStatement =
  "We will not share your opt-in to an SMS campaign with any third party for purposes unrelated to providing you with the services of that campaign. We may share your Personal Data, including your SMS opt-in or consent status, with third parties that help us provide our messaging services, including but not limited to platform providers, phone companies, and any other vendors who assist us in the delivery of text messages.\nAll the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.";

const read = (...parts: string[]) =>
  fs.readFileSync(path.join(root, ...parts), "utf8");

function visitorSourceFiles(): string[] {
  const files: string[] = [];
  const walk = (directory: string) => {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const full = path.join(directory, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (
        /\.(ts|tsx|css)$/.test(entry.name) &&
        !entry.name.endsWith(".test.ts")
      ) {
        files.push(full);
      }
    }
  };
  walk(sourceRoot);
  return files;
}

describe("TCR SMS consent flow", () => {
  it("creates one direct consent route with active legal links and route-aware metadata", async () => {
    const app = read("client", "src", "App.tsx");
    const page = read("client", "src", "pages", "SmsConsent.tsx");
    const meta = await resolveMeta(consentRoute, "https://mysentry.ai");

    expect(app).toContain('import SmsConsent from "./pages/SmsConsent";');
    expect(app).toContain(
      '<Route path="/sms-consent" component={SmsConsent} />'
    );
    expect(page.match(/<h1\b/g)).toHaveLength(1);
    expect(page).toContain("Receive MySentry Information by SMS");
    expect(page).toContain('<SmsConsentForm source="sms-consent-page" />');
    expect(ROUTE_META[consentRoute]?.title).toBe("SMS Communication Consent");
    expect(meta.found).toBe(true);
    expect(meta.canonicalPath).toBe(consentRoute);
    expect(meta.robots).toBe("index,follow");
    expect(meta.title).toBe("SMS Communication Consent | MySentry");
    expect(meta.description).toContain("one-to-one customer care SMS");
  });

  it("requires recipient details, Privacy Policy acknowledgment, SMS consent, and a deliberate submission", () => {
    const form = read("client", "src", "components", "SmsConsentForm.tsx");

    expect(form).toContain(requiredConsentText);
    expect(form).toContain("const [hasSmsConsent, setHasSmsConsent] = useState(false);");
    expect(form).toContain("const [hasPrivacyAcknowledgment, setHasPrivacyAcknowledgment] =");
    expect(form).toContain("useState(false)");
    expect(form).toContain('name="name"');
    expect(form).toContain('name="email"');
    expect(form).toContain('name="phone"');
    expect(form).toContain('type="checkbox"');
    expect(form).toContain("privacyAcknowledged: true");
    expect(form).toContain("smsConsent: true");
    expect(form).toContain("smsConsentMutation.mutate");
    expect(form).toContain("Confirm SMS Consent");
    expect(form).toContain("Selecting the boxes alone does not send a request.");
    expect(form).toContain("SMS consent confirmed");
    expect(form).toContain('href="/privacy"');
    expect(form).toContain('href="/terms"');
    expect(form).not.toContain("defaultChecked");
  });

  it("limits the flow to requested one-to-one information and provides STOP and HELP instructions", () => {
    const page = read("client", "src", "pages", "SmsConsent.tsx");
    const form = read("client", "src", "components", "SmsConsentForm.tsx");

    expect(page).toContain("MySentry uses SMS for one-to-one customer follow-up");
    expect(page).toContain("What You May Receive");
    for (const messageType of [
      "Requested MySentry product information",
      "Product flyers",
      "PDF links",
      "MySentry website links",
      "Plan details",
      "Purchase links",
      "One-to-one follow-up communication related to a previous inquiry or conversation",
    ]) {
      expect(page).toContain(messageType);
    }
    expect(page).toContain(
      "Reply STOP at any time to opt out of MySentry SMS messages."
    );
    expect(page).toContain("Reply HELP for help.");
    expect(form).toContain("Reply STOP at any time to opt out");
    expect(form).toContain("or HELP for help.");
    expect(form).toContain("support@mysentry.ai");
    expect(page).not.toMatch(/generic promotional|third-party marketing SMS/i);
  });

  it("embeds the same actionable confirmation form in Privacy Policy while keeping the entry point footer-only", () => {
    const footer = read("client", "src", "components", "Footer.tsx");
    const navbar = read("client", "src", "components", "Navbar.tsx");
    const home = read("client", "src", "pages", "Home.tsx");
    const privacy = read("client", "src", "pages", "Privacy.tsx");
    const otherSources = visitorSourceFiles()
      .filter(file => !file.endsWith(`${path.sep}App.tsx`))
      .filter(file => !file.endsWith(`${path.sep}Footer.tsx`))
      .filter(file => !file.endsWith(`${path.sep}SmsConsent.tsx`))
      .filter(file => !file.endsWith(`${path.sep}Privacy.tsx`))
      .filter(file => !file.endsWith(`${path.sep}SmsConsentForm.tsx`));

    expect(footer).toContain('href="/sms-consent"');
    expect(footer).toContain("SMS Communication Consent");
    expect(navbar).not.toContain(consentRoute);
    expect(home).not.toContain("Receive MySentry Information by SMS");
    expect(home).not.toContain(requiredConsentText);
    expect(privacy).toContain("SMS_PRIVACY_DISCLOSURE");
    expect(privacy).toContain('source="privacy-policy"');
    expect(privacy).toContain("Confirm your SMS communication consent");
    for (const file of otherSources) {
      const text = fs.readFileSync(file, "utf8");
      expect(text, path.relative(root, file)).not.toContain(
        'href="/sms-consent"'
      );
    }
  });

  it("adds the TCR privacy statement verbatim, persists confirmations, and preserves direct Terms availability", () => {
    const privacy = read("client", "src", "pages", "Privacy.tsx");
    const terms = read("client", "src", "pages", "Terms.tsx");
    const routers = read("server", "routers.ts");
    const sitemap = read("server", "sitemaps.ts");

    expect(privacy).toContain(requiredPrivacyStatement);
    expect(privacy).toContain('id="sms-communications"');
    expect(routers).toContain("smsConsent: router");
    expect(routers).toContain("SMS Consent Confirmation");
    expect(routers).toContain("SMS Communication Consent: confirmed");
    expect(routers).toContain("Privacy Policy acknowledgment: confirmed");
    expect(routers).toContain("smsConsent: z.literal(true)");
    expect(routers).toContain("privacyAcknowledged: z.literal(true)");
    expect(terms).toContain("Terms & Conditions");
    expect(sitemap).toContain('url: "/sms-consent"');
  });
});
