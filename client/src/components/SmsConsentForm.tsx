import { FormEvent, useId, useState } from "react";
import { CheckCircle2, LoaderCircle, MessageSquareText, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { trpc } from "@/lib/trpc";

export const SMS_CONSENT_TEXT =
  "By clicking here you consent to receive customer care-related or one-on-one communication messages from MySentry. Message frequency may vary. Standard Message and Data Rates may apply. Reply STOP to opt out. Reply Help for help.";

type SmsConsentFormProps = {
  source: "sms-consent-page" | "privacy-policy";
  title?: string;
  description?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[0-9+().\-\s]{7,50}$/;

export default function SmsConsentForm({
  source,
  title = "Confirm SMS consent",
  description = "Enter the details for the number that may receive requested MySentry information. Then review and confirm both selections before sending your request.",
}: SmsConsentFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [hasSmsConsent, setHasSmsConsent] = useState(false);
  const [hasPrivacyAcknowledgment, setHasPrivacyAcknowledgment] =
    useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const fieldId = useId().replace(/:/g, "");

  const smsCheckboxId = `sms-consent-${fieldId}`;
  const privacyCheckboxId = `privacy-acknowledgment-${fieldId}`;
  const errorId = `sms-consent-error-${fieldId}`;

  const smsConsentMutation = trpc.smsConsent.submit.useMutation({
    onSuccess: () => {
      setIsConfirmed(true);
      setFormError(null);
    },
    onError: error => {
      setFormError(
        error.message ||
          "We could not record your consent. Please try again or contact support@mysentry.ai."
      );
    },
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError(null);

    if (name.trim().length < 2) {
      setFormError("Enter your full name to confirm this request.");
      return;
    }
    if (!emailPattern.test(email.trim())) {
      setFormError("Enter a valid email address to confirm this request.");
      return;
    }
    if (!phonePattern.test(phone.trim())) {
      setFormError("Enter a valid mobile phone number to confirm this request.");
      return;
    }
    if (!hasPrivacyAcknowledgment) {
      setFormError("Review and acknowledge the Privacy Policy before continuing.");
      return;
    }
    if (!hasSmsConsent) {
      setFormError("Select the SMS consent checkbox before continuing.");
      return;
    }

    smsConsentMutation.mutate({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      smsConsent: true,
      privacyAcknowledged: true,
      source,
    });
  };

  if (isConfirmed) {
    return (
      <section
        className="rounded-3xl border border-[#0b6848]/25 bg-[#f0f7f4] p-6 shadow-sm sm:p-8"
        aria-labelledby={`sms-consent-confirmed-${fieldId}`}
        role="status"
      >
        <div className="flex items-start gap-4">
          <CheckCircle2
            className="mt-0.5 h-8 w-8 shrink-0 text-[#0b6848]"
            aria-hidden="true"
          />
          <div>
            <h2
              id={`sms-consent-confirmed-${fieldId}`}
              className="text-2xl font-black tracking-tight text-gray-950"
            >
              SMS consent confirmed
            </h2>
            <p className="mt-3 leading-7 text-gray-800">
              Your acknowledgment has been recorded for the mobile number you
              provided. A MySentry team member may send the requested
              one-to-one information by SMS. Reply STOP at any time to opt out
              or HELP for help.
            </p>
            <p className="mt-3 leading-7 text-gray-800">
              Need to change your request? Contact{" "}
              <a
                href="mailto:support@mysentry.ai"
                className="font-bold text-[#005f91] underline decoration-2 underline-offset-4 hover:text-[#004f7b]"
              >
                support@mysentry.ai
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="rounded-3xl border border-[#0b6848]/20 bg-white p-6 shadow-sm sm:p-8"
      aria-labelledby={`sms-consent-heading-${fieldId}`}
    >
      <div className="flex items-start gap-4">
        <MessageSquareText
          className="mt-1 h-7 w-7 shrink-0 text-[#005f91]"
          aria-hidden="true"
        />
        <div>
          <h2
            id={`sms-consent-heading-${fieldId}`}
            className="text-2xl font-black tracking-tight text-gray-950 sm:text-3xl"
          >
            {title}
          </h2>
          <p className="mt-3 max-w-2xl leading-7 text-gray-700">
            {description}
          </p>
        </div>
      </div>

      <form className="mt-7 space-y-6" onSubmit={handleSubmit} noValidate>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <Label
              htmlFor={`sms-name-${fieldId}`}
              className="mb-2 block font-bold text-gray-950"
            >
              Full name
            </Label>
            <Input
              id={`sms-name-${fieldId}`}
              name="name"
              type="text"
              autoComplete="name"
              value={name}
              onChange={event => setName(event.target.value)}
              className="h-12 border-gray-300 bg-white text-gray-950 focus-visible:border-[#005f91] focus-visible:ring-[#005f91]/25"
              required
            />
          </div>
          <div>
            <Label
              htmlFor={`sms-email-${fieldId}`}
              className="mb-2 block font-bold text-gray-950"
            >
              Email address
            </Label>
            <Input
              id={`sms-email-${fieldId}`}
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
              className="h-12 border-gray-300 bg-white text-gray-950 focus-visible:border-[#005f91] focus-visible:ring-[#005f91]/25"
              required
            />
          </div>
          <div>
            <Label
              htmlFor={`sms-phone-${fieldId}`}
              className="mb-2 block font-bold text-gray-950"
            >
              Mobile phone number
            </Label>
            <Input
              id={`sms-phone-${fieldId}`}
              name="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              value={phone}
              onChange={event => setPhone(event.target.value)}
              className="h-12 border-gray-300 bg-white text-gray-950 focus-visible:border-[#005f91] focus-visible:ring-[#005f91]/25"
              required
            />
          </div>
        </div>

        <div className="space-y-4 rounded-2xl border border-[#005f91]/25 bg-[#eaf5fb] p-5 sm:p-6">
          <div className="flex items-start gap-4">
            <input
              id={privacyCheckboxId}
              name="privacy-acknowledgment"
              type="checkbox"
              checked={hasPrivacyAcknowledgment}
              onChange={event =>
                setHasPrivacyAcknowledgment(event.target.checked)
              }
              aria-describedby={`privacy-acknowledgment-text-${fieldId}`}
              className="mt-1 h-5 w-5 shrink-0 rounded border-[#0b6848] accent-[#005f91] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#005f91]/30"
            />
            <Label
              htmlFor={privacyCheckboxId}
              id={`privacy-acknowledgment-text-${fieldId}`}
              className="cursor-pointer text-base leading-7 text-gray-950"
            >
              I have reviewed the{" "}
              <Link
                href="/privacy"
                className="font-bold text-[#005f91] underline decoration-2 underline-offset-4 hover:text-[#004f7b] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#005f91]/25"
              >
                Privacy Policy
              </Link>{" "}
              and acknowledge that it applies to this request.
            </Label>
          </div>

          <div className="flex items-start gap-4 border-t border-[#005f91]/15 pt-4">
            <input
              id={smsCheckboxId}
              name="sms-consent"
              type="checkbox"
              checked={hasSmsConsent}
              onChange={event => setHasSmsConsent(event.target.checked)}
              aria-describedby={`sms-consent-statement-${fieldId}`}
              className="mt-1 h-5 w-5 shrink-0 rounded border-[#0b6848] accent-[#005f91] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#005f91]/30"
            />
            <div
              id={`sms-consent-statement-${fieldId}`}
              className="text-base leading-7 text-gray-950"
            >
              <Label htmlFor={smsCheckboxId} className="cursor-pointer text-base leading-7">
                {SMS_CONSENT_TEXT}
              </Label>{" "}
              <Link
                href="/terms"
                className="font-bold text-[#005f91] underline decoration-2 underline-offset-4 hover:text-[#004f7b] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#005f91]/25"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>

        {formError && (
          <p
            id={errorId}
            className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 font-medium leading-6 text-red-800"
            role="alert"
          >
            {formError}
          </p>
        )}

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex max-w-xl items-start gap-2 text-sm leading-6 text-gray-700">
            <ShieldCheck
              className="mt-0.5 h-5 w-5 shrink-0 text-[#0b6848]"
              aria-hidden="true"
            />
            Selecting the boxes alone does not send a request. Submit this form
            to record your acknowledgment and SMS consent.
          </p>
          <button
            type="submit"
            disabled={smsConsentMutation.isPending}
            aria-describedby={formError ? errorId : undefined}
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[#004F7B] px-6 py-3 font-bold uppercase tracking-wide text-white shadow-md transition-all duration-150 hover:bg-[#003A5B] hover:shadow-lg active:scale-[0.97] disabled:cursor-not-allowed disabled:bg-gray-400 disabled:shadow-none"
          >
            {smsConsentMutation.isPending ? (
              <>
                <LoaderCircle className="h-5 w-5 animate-spin" aria-hidden="true" />
                Recording consent
              </>
            ) : (
              "Confirm SMS Consent"
            )}
          </button>
        </div>
      </form>
    </section>
  );
}
