import { useState, useCallback, useMemo } from "react";
import { User, Users, Shield, HeartPulse, Calendar, CalendarCheck, Building2, Check, X, Loader2 } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import EmployerDemoModal from "@/components/EmployerDemoModal";
import { getSignupUrl, getEnterpriseSignupUrl, type PlanType, type BillingCycle, type EnterpriseCoverage } from "@/const";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { trackLeadEvent } from "@/lib/metaPixel";

/* ─── Pricing Data ─── */
const PRICING = {
  individual_monthly: 15,   // $15 per license per month
  family_monthly: 30,       // $30 per license per month
  // Yearly = monthly × 12 × 0.8 (20% discount)
  individual_yearly: 15 * 12 * 0.8,   // $144 per license per year
  family_yearly: 30 * 12 * 0.8,       // $288 per license per year
};

const FEATURES_B2C = [
  "Panic Alarm (Voice, Button, Watch)",
  "Supported-Device Fall Detection",
  "Supported-Device Crash Detection",
  "Supported Wellness Signals",
  "Eligible 24/7 Professional Monitoring",
  "Permitted Live Video During Alerts",
  "Permitted Location Sharing During Alerts",
  "5 Emergency Contacts",
  "MeetSafe (Optional)",
  "Automated Call (Optional)",
  "Alert-Based Family Connectivity",
];

const FEATURES_B2B = [
  "Eligible Essential Safety Features",
  "Permitted Incident Context",
  "Dedicated Account Manager",
  "Configurable Rollout Support",
  "User-Activated SOS Alerts",
  "Supported-Device Detection",
  "Professional Alert Review",
  "Trusted Contact Workflows",
  "Employee and Family Options",
  "Contact Us for Device and Regional Eligibility",
];

const QUICK_EMPLOYEE_COUNTS = [10, 50, 100, 500];

/* ─── Types ─── */
type Mode = "b2c" | "b2b";
type Coverage = "individual" | "family";
type Billing = "monthly" | "yearly";

/* ─── Helpers ─── */
function formatMoney(amount: number): string {
  return "$" + amount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

/* ─── Custom Quote Modal ─── */
function CustomQuoteModal({ isOpen, onClose, defaultEmployees }: { isOpen: boolean; onClose: () => void; defaultEmployees: number }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [scheduleDemo, setScheduleDemo] = useState(true);
  const [formData, setFormData] = useState({
    company: "",
    employees: String(defaultEmployees),
    email: "",
    requirements: "",
  });

  // Use the existing demo request mutation for quote submissions
  const quoteMutation = trpc.demo.request.useMutation({
    onSuccess: () => {
      setIsSubmitting(false);
      setIsSuccess(true);
    },
    onError: (error) => {
      setIsSubmitting(false);
      toast.error(error.message || "Failed to submit quote request. Please try again.");
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    quoteMutation.mutate({
      name: formData.company,
      email: formData.email,
      company: formData.company,
      companySize: formData.employees,
      useCase: "employer-quote",
      message: `${formData.requirements ? formData.requirements + "\n\n" : ""}${scheduleDemo ? "[Requested live product demo]" : ""}`,
    });
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ company: "", employees: String(defaultEmployees), email: "", requirements: "" });
      setScheduleDemo(true);
    }, 300);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="sm:max-w-[520px] p-0 gap-0 bg-white border-0 shadow-2xl rounded-2xl overflow-hidden">
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-16 px-8 text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-[#0F172A]">Quote Request Received!</h3>
            <p className="text-[#64748B] max-w-xs">Our enterprise safety team will reach out shortly with a tailored package for your organization.</p>
            <button
              onClick={handleClose}
              className="mt-4 px-8 py-3 bg-[#0F172A] text-white rounded-xl font-bold hover:bg-[#1E293B] transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="p-8">
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-[#94A3B8] hover:text-[#0F172A] transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Title */}
            <h2 className="text-2xl font-bold text-[#0F172A] mb-2">Get a Custom Quote</h2>
            <p className="text-[#64748B] text-sm mb-8">
              Fill out the form below and our team will build a tailored package for your organization.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Company Name */}
              <div>
                <Label htmlFor="quote-company" className="text-[#0F172A] font-bold text-sm mb-2 block">
                  Company Name
                </Label>
                <Input
                  id="quote-company"
                  name="company"
                  placeholder="Acme Corporation"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="h-12 bg-white border-2 border-black text-[#0F172A] placeholder:text-[#94A3B8] rounded-xl focus:border-black focus:ring-black"
                />
              </div>

              {/* Number of Employees + Work Email */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="quote-employees" className="text-[#0F172A] font-bold text-sm mb-2 block">
                    Number of Employees
                  </Label>
                  <Input
                    id="quote-employees"
                    name="employees"
                    type="number"
                    min={1}
                    placeholder="5"
                    required
                    value={formData.employees}
                    onChange={handleChange}
                    className="h-12 bg-white border-2 border-black text-[#0F172A] placeholder:text-[#94A3B8] rounded-xl focus:border-black focus:ring-black"
                  />
                </div>
                <div>
                  <Label htmlFor="quote-email" className="text-[#0F172A] font-bold text-sm mb-2 block">
                    Work Email
                  </Label>
                  <Input
                    id="quote-email"
                    name="email"
                    type="email"
                    placeholder="name@company.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="h-12 bg-white border-2 border-black text-[#0F172A] placeholder:text-[#94A3B8] rounded-xl focus:border-black focus:ring-black"
                  />
                </div>
              </div>

              {/* Specific Safety Requirements */}
              <div>
                <Label htmlFor="quote-requirements" className="text-[#0F172A] font-bold text-sm mb-2 block">
                  Other requirements (Optional)
                </Label>
                <Textarea
                  id="quote-requirements"
                  name="requirements"
                  placeholder="E.g., We need hardware integrations..."
                  value={formData.requirements}
                  onChange={handleChange}
                  className="min-h-[100px] bg-white border-2 border-black text-[#0F172A] placeholder:text-[#94A3B8] rounded-xl focus:border-black focus:ring-black resize-none"
                />
              </div>

              {/* Schedule Demo Checkbox */}
              <div className="flex items-start gap-3">
                <Checkbox
                  id="quote-demo"
                  checked={scheduleDemo}
                  onCheckedChange={(checked) => setScheduleDemo(checked === true)}
                  className="mt-0.5 data-[state=checked]:bg-[#22C55E] data-[state=checked]:border-[#22C55E]"
                />
                <label htmlFor="quote-demo" className="text-sm text-[#334155] leading-snug cursor-pointer">
                  I would like to schedule a live product demo with an expert.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#0F172A] text-white rounded-xl text-base font-bold cursor-pointer transition-all hover:bg-[#1E293B] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Request Quote"
                )}
              </button>
            </form>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

/* ─── Main Component ─── */
export default function Pricing() {
  const [mode, setMode] = useState<Mode>("b2c");
  const [coverage, setCoverage] = useState<Coverage>("individual");
  const [billing, setBilling] = useState<Billing>("monthly");
  const [licenses, setLicenses] = useState(2);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  /* Derived pricing: same logic for B2C (1 license) and B2B (N licenses) */
  const calculated = useMemo(() => {
    const numLicenses = mode === "b2b" ? licenses : 1;

    if (billing === "monthly") {
      // Monthly: Individual = 15 × licenses, Family = 30 × licenses
      const perLicense = coverage === "individual" ? PRICING.individual_monthly : PRICING.family_monthly;
      const total = perLicense * numLicenses;
      return {
        displayPrice: total,
        cycleLabel: "Billed monthly",
        savings: 0,
        costPerUser: mode === "b2b" ? formatMoney(perLicense) + " / user / mo" : null,
      };
    } else {
      // Yearly: Individual = 15 × 12 × 0.8 × licenses ($144), Family = 30 × 12 × 0.8 × licenses ($288)
      const yearlyPerLicense = coverage === "individual" ? PRICING.individual_yearly : PRICING.family_yearly;
      const monthlyPerLicense = coverage === "individual" ? PRICING.individual_monthly : PRICING.family_monthly;
      const total = yearlyPerLicense * numLicenses;
      const monthlyEquiv = total / 12;
      const savings = (monthlyPerLicense * 12 * numLicenses) - total;
      return {
        displayPrice: total,
        cycleLabel: `Billed annually (${formatMoney(monthlyEquiv)}/mo)`,
        savings,
        costPerUser: mode === "b2b" ? formatMoney(yearlyPerLicense / 12) + " / user / mo" : null,
      };
    }
  }, [mode, coverage, billing, licenses]);

  const features = mode === "b2b" ? FEATURES_B2B : FEATURES_B2C;

  const summaryTitle = useMemo(() => {
    if (mode === "b2b") {
      return coverage === "individual" ? "For Employers (Individual)" : "For Employers (Family)";
    }
    return coverage === "individual" ? "For Individuals" : "For Families";
  }, [mode, coverage]);

  const planBadge = mode === "b2b" ? "Essential Safety for Employers" : "Essential Safety";

  /* CTA handler */
  const handleCheckout = useCallback(() => {
    trackLeadEvent(); // Track Lead event for Meta Pixel
    if (mode === "b2c") {
      const planType: PlanType = coverage;
      const billingCycle: BillingCycle = billing === "yearly" ? "yearly" : "monthly";
      const url = getSignupUrl(planType, billingCycle);
      window.open(url, "_blank");
    } else {
      // Enterprise checkout: map coverage + billing to correct UUID, inject dynamic licences
      const enterpriseCoverage: EnterpriseCoverage =
        coverage === "family" ? "employees_families" : "employees_only";
      const billingCycle: BillingCycle = billing === "yearly" ? "yearly" : "monthly";
      const url = getEnterpriseSignupUrl(enterpriseCoverage, billingCycle, licenses);
      window.open(url, "_blank");
    }
  }, [mode, coverage, billing, licenses]);

  /* License slider handler  -  minimum is 2 for Enterprise plans */
  const handleSliderChange = useCallback((val: number) => {
    const clamped = Math.max(2, Math.min(10000, val));
    setLicenses(clamped);
  }, []);

  const handleInputChange = useCallback((val: string) => {
    const num = parseInt(val, 10);
    if (!isNaN(num)) {
      handleSliderChange(num);
    }
  }, [handleSliderChange]);

  /* Step numbering */
  const planStepNum = 2;
  const licensesStepNum = mode === "b2b" ? 3 : -1;
  const billingStepNum = mode === "b2b" ? 4 : 3;

  return (
    <Layout>
      <SEO />

      {/* Hero  -  title + subtitle + toggle */}
      <section className="text-center pt-28 md:pt-32 pb-10 px-5">
        <h1 className="text-3xl md:text-[55px] font-extrabold text-[#0F172A] uppercase tracking-tight mb-3 leading-tight">
          Simple, Transparent Pricing.
        </h1>
        <p className="text-lg md:text-xl text-[#64748B] font-medium max-w-[600px] mx-auto mb-8">
          Protection that fits your life and budget.
        </p>

        {/* B2C / B2B Toggle - white background */}
        <div className="inline-flex bg-white p-1.5 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-[#E2E8F0]">
          <button
            onClick={() => setMode("b2c")}
            className={cn(
              "flex items-center gap-2 px-6 md:px-8 py-3 rounded-full text-sm md:text-[15px] font-bold transition-all duration-300",
              mode === "b2c"
                ? "bg-[#004F7B] text-white shadow-[0_4px_10px_rgba(0,79,123,0.24)]"
                : "bg-transparent text-[#64748B] hover:text-[#0F172A]"
            )}
          >
            <User className="w-4 h-4" />
            Personal Plans
          </button>
          <button
            onClick={() => setMode("b2b")}
            className={cn(
              "flex items-center gap-2 px-6 md:px-8 py-3 rounded-full text-sm md:text-[15px] font-bold transition-all duration-300",
              mode === "b2b"
                ? "bg-[#004F7B] text-white shadow-[0_4px_10px_rgba(0,79,123,0.24)]"
                : "bg-transparent text-[#64748B] hover:text-[#0F172A]"
            )}
          >
            <Building2 className="w-4 h-4" />
            Enterprise Plans
          </button>
        </div>
      </section>

      {/* ─── Main Layout: Configurator + Summary ─── */}
      <section className="max-w-[1200px] mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 items-start">

          {/* ─── LEFT: Configurator ─── */}
          <div className="flex flex-col gap-8">

            {/* Step 1: Coverage Type */}
            <StepBlock stepNum={1} title="Who is this plan for?">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <SelectCard
                  active={coverage === "individual"}
                  onClick={() => setCoverage("individual")}
                  icon={<User className="w-6 h-6 text-[#2E7D6F]" />}
                  title={mode === "b2b" ? "Employees Only" : "Just Me"}
                  description={mode === "b2b" ? "Covers your employees" : "Coverage for a single user."}
                />
                <SelectCard
                  active={coverage === "family"}
                  onClick={() => setCoverage("family")}
                  icon={<Users className="w-6 h-6 text-[#2E7D6F]" />}
                  title={mode === "b2b" ? "Employees + Families" : "My Family"}
                  description={mode === "b2b" ? "Covers employees and their family members" : "Coverage for up to 5 family members."}
                />
              </div>
            </StepBlock>

            {/* Step 2: Plan Type */}
            <StepBlock id="pricing-plans" stepNum={planStepNum} title="Select your plan">
              <div className="grid grid-cols-1 gap-4">
                <SelectCard
                  active
                  icon={<Shield className="w-6 h-6 text-[#2E7D6F]" />}
                  title={mode === "b2b" ? "Essential Safety for Employers" : "Essential Safety"}
                  description="Connected safety tools, supported wellness signals, trusted contacts, and eligible monitoring in one current plan."
                  badge={<span className="absolute -top-2.5 right-4 bg-[#2E7D6F] text-white text-[11px] font-bold px-2.5 py-1 rounded-full">Most Popular</span>}
                />
              </div>
            </StepBlock>

            {/* Step 3 (B2B only): Number of Employees */}
            {mode === "b2b" && (
              <StepBlock stepNum={licensesStepNum} title="Number of Employees">
                <div className="mt-2">
                  <div className="flex justify-between items-center mb-5">
                    <span className="text-[15px] font-semibold text-[#64748B]">Drag to adjust or type number:</span>
                  <input
                    type="number"
                    value={licenses}
                    min={2}
                    max={10000}
                    onChange={(e) => handleInputChange(e.target.value)}
                    className="w-[90px] px-3 py-2.5 text-lg font-bold border-2 border-[#E2E8F0] rounded-xl text-center text-[#0F172A] outline-none transition-colors focus:border-[#6ad990]"
                  />
                  </div>
                  <input
                    type="range"
                    min={2}
                    max={500}
                    value={Math.min(licenses, 500)}
                    onChange={(e) => handleSliderChange(parseInt(e.target.value, 10))}
                    className="w-full accent-[#6ad990] h-2 rounded-full appearance-none cursor-pointer mb-6"
                    style={{
                      background: `linear-gradient(to right, #6ad990 ${((Math.min(licenses, 500) - 2) / 498) * 100}%, #E2E8F0 ${((Math.min(licenses, 500) - 2) / 498) * 100}%)`,
                    }}
                  />
                  <div className="flex gap-2 flex-wrap">
                    {QUICK_EMPLOYEE_COUNTS.map((count) => (
                      <button
                        key={count}
                        onClick={() => setLicenses(count)}
                        className="bg-[#F1F5F9] border border-transparent px-4 py-2 rounded-full text-[13px] font-semibold text-[#475569] cursor-pointer transition-all hover:bg-white hover:border-[#004F7B] hover:text-[#004F7B]"
                      >
                        {count}{count === 500 ? "+" : ""}
                      </button>
                    ))}
                  </div>
                </div>
              </StepBlock>
            )}

            {/* Step 3/4: Billing Duration */}
            <StepBlock stepNum={billingStepNum} title="Select Billing Duration">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <SelectCard
                  active={billing === "monthly"}
                  onClick={() => setBilling("monthly")}
                  icon={<Calendar className="w-6 h-6 text-[#2E7D6F]" />}
                  title="Monthly"
                  description="Pay as you go, cancel anytime."
                />
                <SelectCard
                  active={billing === "yearly"}
                  onClick={() => setBilling("yearly")}
                  icon={<CalendarCheck className="w-6 h-6 text-[#2E7D6F]" />}
                  title="Yearly"
                  description="Save more with annual billing."
                  badge={<span className="absolute -top-2.5 right-4 bg-[#0F172A] text-white text-[11px] font-bold px-2.5 py-1 rounded-full">Save 20%</span>}
                />
              </div>
            </StepBlock>
          </div>

          {/* ─── RIGHT: Sticky Summary ─── */}
          <div className="lg:sticky lg:top-10">
            <div className="bg-white rounded-3xl p-8 shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-black/5">
              {/* Header */}
              <div className="flex justify-between items-center text-xs uppercase tracking-widest font-extrabold text-[#2E7D6F] mb-6">
                <span>{summaryTitle}</span>
                <span className="bg-[#F4FBF7] text-[#0F172A] px-2.5 py-1 rounded-lg text-xs font-extrabold">{planBadge}</span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="text-5xl md:text-[56px] font-extrabold text-[#0F172A] leading-none tracking-tighter">
                  {formatMoney(calculated.displayPrice)}
                </div>
                {calculated.costPerUser && (
                  <div className="text-sm font-bold text-[#255044] mt-1">{calculated.costPerUser}</div>
                )}
                <div className="text-[15px] text-[#64748B] font-medium mt-2">{calculated.cycleLabel}</div>
              </div>

              {/* Features */}
              <div className="py-6 border-t border-b border-[#E2E8F0] flex flex-col gap-3 mb-6">
                {features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm font-medium text-[#334155]">
                    <Check className="w-4 h-4 text-[#255044] mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Savings Row */}
              {billing === "yearly" && calculated.savings > 0 && (
                <div className="flex justify-between text-[15px] font-bold text-[#166534] bg-[#DCFCE7] px-4 py-3 rounded-xl mb-6">
                  <span>Yearly Savings</span>
                  <span>{formatMoney(calculated.savings)}</span>
                </div>
              )}

              {/* CTA Buttons */}
              <button
                onClick={handleCheckout}
                className="w-full py-4.5 bg-[#004F7B] text-white border-none rounded-xl text-base font-bold cursor-pointer transition-all shadow-[0_4px_15px_rgba(0,79,123,0.24)] hover:translate-y-[-2px] hover:bg-[#003A5B] hover:shadow-[0_8px_20px_rgba(0,79,123,0.3)] flex justify-center items-center gap-2.5"
              >
                {mode === "b2c" ? "Review Plans and Eligibility" : "Proceed with Payment"}
              </button>

              {mode === "b2b" && (
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="w-full py-4 bg-transparent text-[#0F172A] border-2 border-[#E2E8F0] rounded-xl text-[15px] font-bold cursor-pointer transition-all mt-3 hover:border-[#0F172A] hover:bg-[#F8FAFC]"
                >
                  Customized Quotation
                </button>
              )}
              <p className="mt-5 text-xs leading-relaxed text-[#64748B]">
                Feature availability depends on plan, supported device, permissions, connectivity, region, and third-party services. MySentry is not a substitute for calling 911 or local emergency services and is not a medical device.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Modal (for "Get Offer") */}
      <EmployerDemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        planName={planBadge}
      />

      {/* Custom Quote Modal (for "Customized Quotation") */}
      <CustomQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        defaultEmployees={licenses}
      />
    </Layout>
  );
}

/* ─── Sub-components ─── */

function StepBlock({ stepNum, title, children, id }: { stepNum: number; title: string; children: React.ReactNode; id?: string }) {
  return (
    <div id={id} className="scroll-mt-28 bg-white rounded-3xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-white/50">
      <h2 className="text-lg font-bold text-[#0F172A] mb-6 flex items-center gap-3">
        <span className="bg-[#DCFCE7] text-[#2E7D6F] w-7 h-7 rounded-full flex items-center justify-center text-sm font-extrabold">
          {stepNum}
        </span>
        {title}
      </h2>
      {children}
    </div>
  );
}

interface SelectCardProps {
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: React.ReactNode;
  titleClassName?: string;
}

function SelectCard({ active = false, disabled = false, onClick, icon, title, description, badge, titleClassName }: SelectCardProps) {
  return (
    <div
      onClick={disabled ? undefined : onClick}
      className={cn(
        "relative border-2 rounded-2xl p-5 transition-all text-left",
        disabled
          ? "opacity-60 cursor-not-allowed bg-[#F8FAFC] border-[#E2E8F0]"
          : active
            ? "border-[#6ad990] bg-[#DCFCE7] cursor-pointer"
            : "border-[#E2E8F0] bg-white cursor-pointer hover:border-[#A7F3D0]"
      )}
    >
      {badge}
      <div className="mb-3">{icon}</div>
      <div className={cn("text-base font-bold text-[#0F172A] mb-1", titleClassName)}>{title}</div>
      <div className="text-[13px] text-[#64748B] leading-snug">{description}</div>
    </div>
  );
}
