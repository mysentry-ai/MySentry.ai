import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import { lazy, Suspense, useEffect, type ComponentType } from "react";
import Layout from "./components/Layout";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
// A page owns its existing Layout/Navbar/Footer. The fallback replaces that page,
// rather than wrapping it, so the approved public shell is rendered exactly once.
function PublicRouteFallback() {
  return (
    <Layout>
      <section
        role="status"
        aria-live="polite"
        aria-busy="true"
        className="container flex min-h-[55vh] flex-col justify-center pb-16 pt-48"
      >
        <h1 className="text-2xl font-semibold">Loading MySentry...</h1>
        <p className="mt-3">Your page will be ready shortly.</p>
      </section>
    </Layout>
  );
}

function lazyPublicPage(load: () => Promise<{ default: ComponentType }>) {
  const Page = lazy(load);
  return function LazyPublicPage() {
    return (
      <Suspense fallback={<PublicRouteFallback />}>
        <Page />
      </Suspense>
    );
  };
}

function AdminRouteFallback() {
  return (
    <div
      className="min-h-screen bg-white flex items-center justify-center"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="flex flex-col items-center gap-3">
        <div
          className="w-10 h-10 border-3 border-[#6AD990] border-t-transparent rounded-full animate-spin"
          aria-hidden="true"
        />
        <span className="text-sm text-[#5C5C5C]">Loading...</span>
      </div>
    </div>
  );
}

// Signal a paint opportunity after React has committed real UI (including a
// nonblank route fallback). The chatbot listens independently in index.html.
function FirstAppPaint() {
  useEffect(() => {
    let secondFrame = 0;
    const firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => {
        document.documentElement.dataset.mysentryAppPainted = "true";
        window.dispatchEvent(new Event("mysentry:app-painted"));
      });
    });
    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
    };
  }, []);
  return null;
}

// Keep Home eager: it performs the existing full-document root handoff without
// waiting for a chunk or changing the server-owned homepage/redirect behavior.

const NotFound = lazyPublicPage(() => import("./pages/NotFound"));
const Download = lazyPublicPage(() => import("./pages/Download"));
const Seniors = lazyPublicPage(() => import("./pages/Seniors"));
const Families = lazyPublicPage(() => import("./pages/Families"));
const Employers = lazyPublicPage(() => import("./pages/Employers"));
const Pricing = lazyPublicPage(() => import("./pages/Pricing"));
const PricingLegacy = lazyPublicPage(() => import("./pages/PricingLegacy"));
const HowItWorks = lazyPublicPage(() => import("./pages/HowItWorks"));
const Females = lazyPublicPage(() => import("./pages/Females"));
const Nurses = lazyPublicPage(() => import("./pages/Nurses"));
const TravelNurses = lazyPublicPage(
  () => import("./pages/nurses/TravelNurses")
);
const HomeHealthNurses = lazyPublicPage(
  () => import("./pages/nurses/HomeHealthNurses")
);
const ErTraumaNurses = lazyPublicPage(
  () => import("./pages/nurses/ErTraumaNurses")
);
const NightShiftNurses = lazyPublicPage(
  () => import("./pages/nurses/NightShiftNurses")
);
const About = lazyPublicPage(() => import("./pages/About"));
const Contact = lazyPublicPage(() => import("./pages/Contact"));
const Team = lazyPublicPage(() => import("./pages/Team"));
const Blogs = lazyPublicPage(() => import("./pages/Blogs"));
const BlogPost = lazyPublicPage(() => import("./pages/BlogPost"));
const Privacy = lazyPublicPage(() => import("./pages/Privacy"));
const AccountDeletion = lazyPublicPage(() => import("./pages/AccountDeletion"));
const Partners = lazyPublicPage(() => import("./pages/Partners"));
const Terms = lazyPublicPage(() => import("./pages/Terms"));
const SmsConsent = lazyPublicPage(() => import("./pages/SmsConsent"));
const FeaturesHub = lazyPublicPage(
  () => import("./pages/features/FeaturesHub")
);
const PanicButtonApp = lazyPublicPage(
  () => import("./pages/features/PanicButtonApp")
);
const FallDetectionApp = lazyPublicPage(
  () => import("./pages/features/FallDetectionApp")
);
const CrashDetection = lazyPublicPage(
  () => import("./pages/features/CrashDetection")
);
const ProfessionalMonitoring = lazyPublicPage(
  () => import("./pages/features/ProfessionalMonitoring")
);
const EmergencyContacts = lazyPublicPage(
  () => import("./pages/features/EmergencyContacts")
);
const LiveVideoResponse = lazyPublicPage(
  () => import("./pages/features/LiveVideoResponse")
);
const HealthMonitoring = lazyPublicPage(
  () => import("./pages/features/HealthMonitoring")
);
const SafetyCheckInApp = lazyPublicPage(
  () => import("./pages/features/SafetyCheckInApp")
);
const FamilyConnectivity = lazyPublicPage(
  () => import("./pages/features/FamilyConnectivity")
);
const AutomatedCall = lazyPublicPage(
  () => import("./pages/features/AutomatedCall")
);
const SecureRoute = lazyPublicPage(
  () => import("./pages/features/SecureRoute")
);
const UseCasesHub = lazyPublicPage(() => import("./pages/UseCasesHub"));
const SafetyAppForWomen = lazyPublicPage(
  () => import("./pages/use-cases/SafetyAppForWomen")
);
const FamilySafetyApp = lazyPublicPage(
  () => import("./pages/use-cases/FamilySafetyApp")
);
const MedicalAlertForSeniors = lazyPublicPage(
  () => import("./pages/use-cases/MedicalAlertForSeniors")
);
const LoneWorkerSafetyApp = lazyPublicPage(
  () => import("./pages/use-cases/LoneWorkerSafetyApp")
);
const TeenDriverSafety = lazyPublicPage(
  () => import("./pages/use-cases/TeenDriverSafety")
);
const IndustriesHub = lazyPublicPage(() => import("./pages/IndustriesHub"));
const HomeHealthcare = lazyPublicPage(
  () => import("./pages/industries/HomeHealthcare")
);
const Construction = lazyPublicPage(
  () => import("./pages/industries/Construction")
);
const Retail = lazyPublicPage(() => import("./pages/industries/Retail"));
const Hospitality = lazyPublicPage(
  () => import("./pages/industries/Hospitality")
);
const RealEstate = lazyPublicPage(
  () => import("./pages/industries/RealEstate")
);
const Education = lazyPublicPage(() => import("./pages/industries/Education"));
const SecurityGuarding = lazyPublicPage(
  () => import("./pages/industries/SecurityGuarding")
);
const CompareHub = lazyPublicPage(() => import("./pages/CompareHub"));
const NoonlightVsMysentry = lazyPublicPage(
  () => import("./pages/compare/NoonlightVsMysentry")
);
const Life360VsMysentry = lazyPublicPage(
  () => import("./pages/compare/Life360VsMysentry")
);
const FallCallVsMysentry = lazyPublicPage(
  () => import("./pages/compare/FallCallVsMysentry")
);
const GooglePersonalSafetyVsMysentry = lazyPublicPage(
  () => import("./pages/compare/GooglePersonalSafetyVsMysentry")
);
const SOSecureAdtVsMysentry = lazyPublicPage(
  () => import("./pages/compare/SOSecureAdtVsMysentry")
);
const MedicalAlertDevicesVsMysentry = lazyPublicPage(
  () => import("./pages/compare/MedicalAlertDevicesVsMysentry")
);
const AppleWatchFallDetectionVsMysentry = lazyPublicPage(
  () => import("./pages/compare/AppleWatchFallDetectionVsMysentry")
);
const SamsungGalaxyWatchVsMysentry = lazyPublicPage(
  () => import("./pages/compare/SamsungGalaxyWatchVsMysentry")
);
const TraditionalMedicalAlertsComparison = lazyPublicPage(
  () => import("./pages/compare/TraditionalMedicalAlertsComparison")
);
const FitnessWearablesComparison = lazyPublicPage(
  () => import("./pages/compare/FitnessWearablesComparison")
);
const PersonalSafetyApp = lazyPublicPage(
  () => import("./pages/PersonalSafetyApp")
);
const DeliveryDriversSolution = lazyPublicPage(
  () => import("./pages/solutions/DeliveryDriversSolution")
);
const SoloTravelers = lazyPublicPage(
  () => import("./pages/safety-for/SoloTravelers")
);
const HomeHealthcareCaseStudy = lazyPublicPage(
  () => import("./pages/case-studies/HomeHealthcareCaseStudy")
);
const RealEstateCaseStudy = lazyPublicPage(
  () => import("./pages/case-studies/RealEstateCaseStudy")
);
const FieldServicesCaseStudy = lazyPublicPage(
  () => import("./pages/case-studies/FieldServicesCaseStudy")
);
const EmployerOnePager = lazyPublicPage(
  () => import("./pages/resources/EmployerOnePager")
);
const AppleWatchIntegration = lazyPublicPage(
  () => import("./pages/integrations/AppleWatchIntegration")
);
const SamsungGalaxyWatchIntegration = lazyPublicPage(
  () => import("./pages/integrations/SamsungGalaxyWatchIntegration")
);
const OuraRingIntegration = lazyPublicPage(
  () => import("./pages/integrations/OuraRingIntegration")
);
const RingIntegration = lazyPublicPage(
  () => import("./pages/integrations/RingIntegration")
);
const LoneWorkerSafetyGuide = lazyPublicPage(
  () => import("./pages/guides/LoneWorkerSafetyGuide")
);
const SeniorSafetyPlanningGuide = lazyPublicPage(
  () => import("./pages/guides/SeniorSafetyPlanningGuide")
);
const AdminLayout = lazy(() => import("./pages/admin/AdminLayout"));
const AgingInPlaceChecklistPage = lazyPublicPage(() =>
  import("./pages/growth/OrganicGrowthPages").then(module => ({
    default: module.AgingInPlaceChecklistPage,
  }))
);
const FamilySafetyWithoutTrackingPage = lazyPublicPage(() =>
  import("./pages/growth/OrganicGrowthPages").then(module => ({
    default: module.FamilySafetyWithoutTrackingPage,
  }))
);
const NightShiftNurseChecklistPage = lazyPublicPage(() =>
  import("./pages/growth/OrganicGrowthPages").then(module => ({
    default: module.NightShiftNurseChecklistPage,
  }))
);
const PeopleLivingAlonePage = lazyPublicPage(() =>
  import("./pages/growth/OrganicGrowthPages").then(module => ({
    default: module.PeopleLivingAlonePage,
  }))
);
const RenterSafetyPage = lazyPublicPage(() =>
  import("./pages/growth/OrganicGrowthPages").then(module => ({
    default: module.RenterSafetyPage,
  }))
);
const UtilityWorkersPage = lazyPublicPage(() =>
  import("./pages/growth/OrganicGrowthPages").then(module => ({
    default: module.UtilityWorkersPage,
  }))
);
const WearableFallLimitationsPage = lazyPublicPage(() =>
  import("./pages/growth/OrganicGrowthPages").then(module => ({
    default: module.WearableFallLimitationsPage,
  }))
);

function RedirectRoute({ to }: { to: string }) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return null;
}

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/download" component={Download} />
      <Route path="/download/" component={Download} />
      <Route path="/how-it-works" component={HowItWorks} />
      <Route path="/females" component={Females} />
      <Route path="/nurses" component={Nurses} />
      <Route path="/nurses/travel-nurses" component={TravelNurses} />
      <Route path="/nurses/home-health" component={HomeHealthNurses} />
      <Route path="/nurses/er-trauma" component={ErTraumaNurses} />
      <Route path="/nurses/night-shift" component={NightShiftNurses} />
      <Route path="/seniors" component={Seniors} />
      <Route path="/families" component={Families} />
      <Route path="/employers" component={Employers} />
      <Route path="/pricing" component={Pricing} />
      {/* Legacy pricing page preserved for future reactivation - hidden from navigation */}
      <Route path="/pricing-legacy" component={PricingLegacy} />
      
      {/* New Pages */}
      <Route path="/about-us" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/team" component={Team} />
      <Route path="/blog/fall-detection-apple-watch-vs-dedicated-safety-app">{() => <RedirectRoute to="/compare/apple-watch-fall-detection-vs-mysentry" />}</Route>
      <Route path="/blogs" component={Blogs} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/account-deletion" component={AccountDeletion} />
      <Route path="/partner">{() => <RedirectRoute to="/partners" />}</Route>
      <Route path="/partners" component={Partners} />
      <Route path="/terms" component={Terms} />
      <Route path="/sms-consent" component={SmsConsent} />

      {/* SEO Pages - Features */}
      <Route path="/features" component={FeaturesHub} />
      <Route path="/features/panic-button-app" component={PanicButtonApp} />
      <Route path="/features/panic-alarm">{() => <RedirectRoute to="/features/panic-button-app" />}</Route>
      <Route path="/features/fall-detection-app" component={FallDetectionApp} />
      <Route path="/features/fall-detection">{() => <RedirectRoute to="/features/fall-detection-app" />}</Route>
      <Route path="/features/safety-check">{() => <RedirectRoute to="/features/safety-check-in-app" />}</Route>
      <Route path="/features/crash-detection" component={CrashDetection} />
      <Route path="/features/24-7-professional-monitoring" component={ProfessionalMonitoring} />
      <Route path="/features/emergency-contacts" component={EmergencyContacts} />
      <Route path="/features/live-video-response" component={LiveVideoResponse} />
      <Route path="/features/health-monitoring" component={HealthMonitoring} />
      <Route path="/features/meetsafe-check-ins">{() => <RedirectRoute to="/features/safety-check-in-app" />}</Route>
      <Route path="/features/safety-check-in-app" component={SafetyCheckInApp} />
      <Route path="/features/family-connectivity" component={FamilyConnectivity} />
      <Route path="/features/automated-call" component={AutomatedCall} />
      <Route path="/features/secure-route" component={SecureRoute} />

      {/* SEO Pages - Use Cases */}
      <Route path="/use-cases" component={UseCasesHub} />
      <Route path="/use-cases/safety-app-for-women" component={SafetyAppForWomen} />
      <Route path="/use-cases/family-safety-app" component={FamilySafetyApp} />
      <Route path="/use-cases/medical-alert-app-for-seniors" component={MedicalAlertForSeniors} />
      <Route path="/use-cases/lone-worker-safety-app" component={LoneWorkerSafetyApp} />
      <Route path="/use-cases/home-healthcare-worker-safety">{() => <RedirectRoute to="/use-cases/lone-worker-safety-app" />}</Route>
      <Route path="/use-cases/teen-driver-safety" component={TeenDriverSafety} />
      <Route path="/use-cases/personal-safety-app-for-renters" component={RenterSafetyPage} />

      {/* SEO Pages - Industries */}
      <Route path="/industries" component={IndustriesHub} />
      <Route path="/industries/home-healthcare" component={HomeHealthcare} />
      <Route path="/industries/construction" component={Construction} />
      <Route path="/industries/retail" component={Retail} />
      <Route path="/industries/hospitality" component={Hospitality} />
      <Route path="/industries/real-estate" component={RealEstate} />
      <Route path="/industries/education" component={Education} />
      <Route path="/industries/security-guarding" component={SecurityGuarding} />

      {/* SEO Pages - Compare */}
      <Route path="/compare" component={CompareHub} />
      <Route path="/compare/noonlight-vs-mysentry" component={NoonlightVsMysentry} />
      <Route path="/compare/life360-vs-mysentry" component={Life360VsMysentry} />
      <Route path="/compare/fallcall-vs-mysentry" component={FallCallVsMysentry} />
      <Route path="/compare/google-personal-safety-vs-mysentry" component={GooglePersonalSafetyVsMysentry} />
      <Route path="/compare/sosecure-adt-vs-mysentry" component={SOSecureAdtVsMysentry} />
      <Route path="/compare/medical-alert-devices-vs-mysentry" component={MedicalAlertDevicesVsMysentry} />
      <Route path="/compare/oura-ring-vs-mysentry">{() => <RedirectRoute to="/compare/fitness-wearables-vs-mysentry" />}</Route>
      <Route path="/compare/whoop-vs-mysentry">{() => <RedirectRoute to="/compare/fitness-wearables-vs-mysentry" />}</Route>
      <Route path="/compare/medical-guardian-vs-mysentry">{() => <RedirectRoute to="/compare/traditional-medical-alerts-vs-mysentry" />}</Route>
      <Route path="/compare/lively-vs-mysentry">{() => <RedirectRoute to="/compare/traditional-medical-alerts-vs-mysentry" />}</Route>
      <Route path="/compare/apple-watch-fall-detection-vs-mysentry" component={AppleWatchFallDetectionVsMysentry} />
      <Route path="/compare/samsung-galaxy-watch-vs-mysentry" component={SamsungGalaxyWatchVsMysentry} />
      <Route path="/compare/traditional-medical-alerts-vs-mysentry" component={TraditionalMedicalAlertsComparison} />
      <Route path="/compare/fitness-wearables-vs-mysentry" component={FitnessWearablesComparison} />

      {/* New SEO Pages - Audience & Pillar */}
      <Route path="/personal-safety-app" component={PersonalSafetyApp} />
      <Route path="/medical-alert-system-for-seniors">{() => <RedirectRoute to="/use-cases/medical-alert-app-for-seniors" />}</Route>
      <Route path="/who-we-protect/seniors">{() => <RedirectRoute to="/use-cases/medical-alert-app-for-seniors" />}</Route>
      <Route path="/who-we-protect/women">{() => <RedirectRoute to="/use-cases/safety-app-for-women" />}</Route>
      <Route path="/who-we-protect/employers">{() => <RedirectRoute to="/use-cases/lone-worker-safety-app" />}</Route>
      <Route path="/who-we-protect/drivers">{() => <RedirectRoute to="/use-cases/teen-driver-safety" />}</Route>
      <Route path="/who-we-protect/students">{() => <RedirectRoute to="/use-cases/family-safety-app" />}</Route>
      <Route path="/who-we-protect/children-and-teens">{() => <RedirectRoute to="/use-cases/family-safety-app" />}</Route>

      {/* Phase 2 - Solutions (Vertical-Specific BOFU) */}
      <Route path="/solutions/home-healthcare">{() => <RedirectRoute to="/industries/home-healthcare" />}</Route>
      <Route path="/solutions/real-estate">{() => <RedirectRoute to="/industries/real-estate" />}</Route>
      <Route path="/solutions/delivery-drivers" component={DeliveryDriversSolution} />
      <Route path="/solutions/utility-workers" component={UtilityWorkersPage} />
      <Route path="/solutions/construction">{() => <RedirectRoute to="/industries/construction" />}</Route>
      <Route path="/solutions/retail-workers">{() => <RedirectRoute to="/industries/retail" />}</Route>

      {/* Phase 2 - Safety For (Audience-Specific BOFU) */}
      <Route path="/safety-for/women-living-alone">{() => <RedirectRoute to="/use-cases/safety-app-for-women" />}</Route>
      <Route path="/safety-for/seniors-aging-in-place">{() => <RedirectRoute to="/use-cases/medical-alert-app-for-seniors" />}</Route>
      <Route path="/safety-for/solo-travelers" component={SoloTravelers} />
      <Route path="/safety-for/people-living-alone" component={PeopleLivingAlonePage} />

      {/* Phase 2 - Case Studies */}
      <Route path="/case-studies/home-healthcare" component={HomeHealthcareCaseStudy} />
      <Route path="/case-studies/real-estate" component={RealEstateCaseStudy} />
      <Route path="/case-studies/field-services" component={FieldServicesCaseStudy} />

      {/* Phase 2 - Resources */}
      <Route path="/resources/employer-one-pager" component={EmployerOnePager} />

      {/* Ring Landing Page */}
      <Route path="/ring">{() => <RedirectRoute to="/integrations/ring" />}</Route>

      {/* Phase 2 - Integrations (Wearable Pages) */}
      <Route path="/integrations/apple-watch" component={AppleWatchIntegration} />
      <Route path="/integrations/samsung-galaxy-watch" component={SamsungGalaxyWatchIntegration} />
      <Route path="/integrations/oura-ring" component={OuraRingIntegration} />
      <Route path="/integrations/ring" component={RingIntegration} />

      {/* Phase 2 - Guides (Authority Content) */}
      <Route path="/guides/lone-worker-safety" component={LoneWorkerSafetyGuide} />
      <Route path="/guides/professional-monitoring">{() => <RedirectRoute to="/features/24-7-professional-monitoring" />}</Route>
      <Route path="/guides/senior-safety-planning" component={SeniorSafetyPlanningGuide} />
      <Route path="/guides/aging-in-place-checklist" component={AgingInPlaceChecklistPage} />
      <Route path="/guides/family-safety-without-constant-tracking" component={FamilySafetyWithoutTrackingPage} />
      <Route path="/guides/night-shift-nurse-safety-checklist" component={NightShiftNurseChecklistPage} />
      <Route path="/guides/wearable-fall-detection-limitations" component={WearableFallLimitationsPage} />

      {/* Admin Blog CMS */}
      <Route path="/admin">
        {() => <RedirectRoute to="/admin/blog" />}
      </Route>
      <Route path="/admin/blog" nest>
        <Suspense fallback={<AdminRouteFallback />}>
          <AdminLayout />
        </Suspense>
      </Route>

      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <ScrollToTop />
          <Toaster />
          <Router />
          <FirstAppPaint />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
