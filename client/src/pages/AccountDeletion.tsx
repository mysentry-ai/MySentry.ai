import { Link } from "wouter";
import {
  AlertCircle,
  CheckCircle2,
  CreditCard,
  FileCheck2,
  Mail,
  ShieldCheck,
  Trash2,
  UserCheck,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const requestSteps = [
  {
    icon: Mail,
    title: "Send your request",
    description:
      "Email support@mysentry.ai from the email address associated with your MySentry account. Use the subject line Account Deletion Request.",
  },
  {
    icon: FileCheck2,
    title: "Identify the account",
    description:
      "Include the account holder's name and registered email address. Do not send your password, verification codes, medical records, or detailed incident information.",
  },
  {
    icon: UserCheck,
    title: "Complete verification",
    description:
      "MySentry may ask for additional information to verify that the requester is authorized to act for the account before processing the request.",
  },
  {
    icon: Trash2,
    title: "Request review and processing",
    description:
      "After verification, MySentry will review the request under the Privacy Policy and applicable law. Some information may be retained where legally or operationally required.",
  },
];

export default function AccountDeletion() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-gray-950">
      <SEO />
      <Navbar />

      <main>
        <section className="bg-gradient-to-br from-[#eef8f3] via-white to-[#eaf5fb] pb-20 pt-32 sm:pt-36 lg:pb-24 lg:pt-40">
          <div className="container grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#005f91]">
                Privacy and account control
              </p>
              <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-gray-950 sm:text-5xl lg:text-[55px]">
                Delete Your MySentry Account
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-800">
                You can request deletion of your MySentry account and associated personal information by contacting our support team. We may need to verify your identity before processing the request.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:support@mysentry.ai?subject=Account%20Deletion%20Request"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#005f91] px-6 py-3 text-center text-base font-bold text-white shadow-lg transition hover:bg-[#004f7b] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#005f91]/30"
                >
                  <Mail className="h-5 w-5" aria-hidden="true" />
                  Email an Account Deletion Request
                </a>
                <Link
                  href="/privacy#requesting-data-deletion"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-[#0b6848] bg-white px-6 py-3 text-center text-base font-bold text-[#0b6848] transition hover:bg-[#e8f5e9] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0b6848]/25"
                >
                  Review the Privacy Policy
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#0b6848] p-7 text-white shadow-2xl sm:p-9">
              <ShieldCheck className="h-12 w-12 text-[#8ee8b1]" aria-hidden="true" />
              <h2 className="mt-6 text-2xl font-black sm:text-3xl">Before you send the request</h2>
              <ul className="mt-6 space-y-4 text-base leading-7 text-white">
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#8ee8b1]" aria-hidden="true" />
                  <span>Use the email address connected to the account when possible.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#8ee8b1]" aria-hidden="true" />
                  <span>Do not include passwords, one-time codes, or unnecessary sensitive information.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#8ee8b1]" aria-hidden="true" />
                  <span>Review any active billing separately before assuming an account request stops renewal.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24" aria-labelledby="deletion-steps-heading">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#005f91]">Request process</p>
              <h2 id="deletion-steps-heading" className="mt-3 text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
                How to request account deletion
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-700">
                The public request process uses the verified MySentry support address listed in the Privacy Policy.
              </p>
            </div>

            <ol className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-2">
              {requestSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <li key={step.title} className="rounded-3xl border border-[#0b6848]/20 bg-white p-7 shadow-sm">
                    <div className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#005f91] text-lg font-black text-white">
                        {index + 1}
                      </span>
                      <div>
                        <Icon className="mb-4 h-7 w-7 text-[#0b6848]" aria-hidden="true" />
                        <h3 className="text-xl font-black text-gray-950">{step.title}</h3>
                        <p className="mt-3 leading-7 text-gray-700">{step.description}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        <section className="bg-[#f0f7f4] py-20 lg:py-24" aria-labelledby="important-details-heading">
          <div className="container">
            <div className="mx-auto max-w-6xl">
              <h2 id="important-details-heading" className="text-center text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
                Important details before deletion
              </h2>
              <div className="mt-12 grid gap-6 lg:grid-cols-3">
                <article className="rounded-3xl bg-white p-7 shadow-sm">
                  <CreditCard className="h-9 w-9 text-[#005f91]" aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-black text-gray-950">Billing may be separate</h3>
                  <p className="mt-3 leading-7 text-gray-700">
                    Account deletion and subscription cancellation may be handled through different systems. Review the billing channel shown in your account or purchase receipt, and contact support if you cannot identify it.
                  </p>
                </article>
                <article className="rounded-3xl bg-white p-7 shadow-sm">
                  <ShieldCheck className="h-9 w-9 text-[#0b6848]" aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-black text-gray-950">Verification protects the account</h3>
                  <p className="mt-3 leading-7 text-gray-700">
                    We may need to verify the requester's identity or authority. If you cannot access the registered email address, explain that in your request so support can identify an appropriate verification path.
                  </p>
                </article>
                <article className="rounded-3xl bg-white p-7 shadow-sm">
                  <AlertCircle className="h-9 w-9 text-[#005f91]" aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-black text-gray-950">Some records may remain</h3>
                  <p className="mt-3 leading-7 text-gray-700">
                    Certain records may be retained when required by law or for legitimate security, fraud-prevention, billing, dispute-resolution, or service-integrity purposes, as described in the Privacy Policy.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24">
          <div className="container">
            <div className="mx-auto max-w-4xl rounded-[2rem] bg-[#004f7b] p-8 text-center text-white shadow-xl sm:p-12">
              <h2 className="text-3xl font-black sm:text-4xl">Ready to submit your request?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white">
                Email support from the address connected to your account when possible. If you need help identifying the account, explain the issue without sending passwords or verification codes.
              </p>
              <a
                href="mailto:support@mysentry.ai?subject=Account%20Deletion%20Request"
                className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-base font-black text-[#004f7b] transition hover:bg-[#eaf5fb] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
                Email support@mysentry.ai
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
