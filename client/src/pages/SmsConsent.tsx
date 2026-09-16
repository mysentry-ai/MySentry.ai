import { CheckCircle2, CircleHelp, ShieldCheck } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import SmsConsentForm from "@/components/SmsConsentForm";

const messageTypes = [
  "Requested MySentry product information",
  "Product flyers",
  "PDF links",
  "MySentry website links",
  "Plan details",
  "Purchase links",
  "One-to-one follow-up communication related to a previous inquiry or conversation",
];

export default function SmsConsent() {
  return (
    <Layout>
      <SEO />

      <main className="bg-white pb-20 pt-32 sm:pt-36 lg:pb-24 lg:pt-40">
        <section className="border-b border-[#0b6848]/15 bg-[#f0f7f4]">
          <div className="container py-12 sm:py-16">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#005f91]">
                Communication preferences
              </p>
              <h1 className="mt-3 text-4xl font-black leading-tight tracking-tight text-gray-950 sm:text-5xl">
                Receive MySentry Information by SMS
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-800">
                Choose to receive requested MySentry product information,
                flyers, PDFs, website links, plan details, and purchase
                information by text message.
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-800">
                MySentry uses SMS for one-to-one customer follow-up after a
                person requests information during a call, inquiry, or product
                conversation. The form below records your communication
                preferences. Both checkboxes are optional. MySentry uses SMS for
                this request only when you select SMS consent and submit the
                form.
              </p>
            </div>
          </div>
        </section>

        <section className="container py-12 sm:py-16" aria-label="SMS consent confirmation form">
          <div className="mx-auto max-w-3xl">
            <SmsConsentForm source="sms-consent-page" />
          </div>
        </section>

        <section
          className="bg-[#f8fbf9] py-12 sm:py-16"
          aria-labelledby="sms-messages-heading"
        >
          <div className="container">
            <div className="mx-auto max-w-3xl">
              <h2
                id="sms-messages-heading"
                className="text-3xl font-black tracking-tight text-gray-950 sm:text-4xl"
              >
                What You May Receive
              </h2>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {messageTypes.map(messageType => (
                  <li
                    key={messageType}
                    className="flex gap-3 rounded-2xl border border-[#0b6848]/15 bg-white p-4 text-gray-800 shadow-sm"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#0b6848]"
                      aria-hidden="true"
                    />
                    <span className="leading-6">{messageType}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          className="container py-12 sm:py-16"
          aria-labelledby="sms-help-heading"
        >
          <div className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-2">
            <article className="rounded-3xl border border-[#0b6848]/20 bg-white p-6 shadow-sm">
              <ShieldCheck
                className="h-8 w-8 text-[#0b6848]"
                aria-hidden="true"
              />
              <h2
                id="sms-help-heading"
                className="mt-5 text-xl font-black text-gray-950"
              >
                Opt out
              </h2>
              <p className="mt-3 leading-7 text-gray-700">
                Reply STOP at any time to opt out of MySentry SMS messages.
              </p>
            </article>
            <article className="rounded-3xl border border-[#005f91]/20 bg-white p-6 shadow-sm">
              <CircleHelp
                className="h-8 w-8 text-[#005f91]"
                aria-hidden="true"
              />
              <h2 className="mt-5 text-xl font-black text-gray-950">
                Help and support
              </h2>
              <p className="mt-3 leading-7 text-gray-700">
                Reply HELP for help.
              </p>
              <p className="mt-3 leading-7 text-gray-700">
                MySentry support: {" "}
                <a
                  href="mailto:support@mysentry.ai"
                  className="font-bold text-[#005f91] underline decoration-2 underline-offset-4 hover:text-[#004f7b]"
                >
                  support@mysentry.ai
                </a>
              </p>
            </article>
          </div>
        </section>
      </main>
    </Layout>
  );
}
