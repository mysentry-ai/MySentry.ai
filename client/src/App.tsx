import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Seniors from "./pages/Seniors";
import Families from "./pages/Families";
import Employers from "./pages/Employers";
import Pricing from "./pages/Pricing";
import PricingLegacy from "./pages/PricingLegacy";
import HowItWorks from "./pages/HowItWorks";
import Females from "./pages/Females";
import Nurses from "./pages/Nurses";
import TravelNurses from "./pages/nurses/TravelNurses";
import HomeHealthNurses from "./pages/nurses/HomeHealthNurses";
import ErTraumaNurses from "./pages/nurses/ErTraumaNurses";
import NightShiftNurses from "./pages/nurses/NightShiftNurses";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import Privacy from "./pages/Privacy";
import AccountDeletion from "./pages/AccountDeletion";
import Partners from "./pages/Partners";
import Terms from "./pages/Terms";

// SEO Pages - Features
import FeaturesHub from "./pages/features/FeaturesHub";
import PanicButtonApp from "./pages/features/PanicButtonApp";
import FallDetectionApp from "./pages/features/FallDetectionApp";
import CrashDetection from "./pages/features/CrashDetection";
import ProfessionalMonitoring from "./pages/features/ProfessionalMonitoring";
import EmergencyContacts from "./pages/features/EmergencyContacts";
import LiveVideoResponse from "./pages/features/LiveVideoResponse";
import HealthMonitoring from "./pages/features/HealthMonitoring";
import MeetSafeCheckIns from "./pages/features/MeetSafeCheckIns";
import SafetyCheckInApp from "./pages/features/SafetyCheckInApp";
import FamilyConnectivity from "./pages/features/FamilyConnectivity";
import AutomatedCall from "./pages/features/AutomatedCall";
import SecureRoute from "./pages/features/SecureRoute";

// SEO Pages - Use Cases
import UseCasesHub from "./pages/UseCasesHub";
import SafetyAppForWomen from "./pages/use-cases/SafetyAppForWomen";
import FamilySafetyApp from "./pages/use-cases/FamilySafetyApp";
import MedicalAlertForSeniors from "./pages/use-cases/MedicalAlertForSeniors";
import LoneWorkerSafetyApp from "./pages/use-cases/LoneWorkerSafetyApp";
import HomeHealthcareWorkerSafety from "./pages/use-cases/HomeHealthcareWorkerSafety";
import TeenDriverSafety from "./pages/use-cases/TeenDriverSafety";

// SEO Pages - Industries
import IndustriesHub from "./pages/IndustriesHub";
import HomeHealthcare from "./pages/industries/HomeHealthcare";
import Construction from "./pages/industries/Construction";
import Retail from "./pages/industries/Retail";
import Hospitality from "./pages/industries/Hospitality";
import RealEstate from "./pages/industries/RealEstate";
import Education from "./pages/industries/Education";
import SecurityGuarding from "./pages/industries/SecurityGuarding";

// SEO Pages - Compare
import CompareHub from "./pages/CompareHub";
import NoonlightVsMysentry from "./pages/compare/NoonlightVsMysentry";
import Life360VsMysentry from "./pages/compare/Life360VsMysentry";
import FallCallVsMysentry from "./pages/compare/FallCallVsMysentry";
import GooglePersonalSafetyVsMysentry from "./pages/compare/GooglePersonalSafetyVsMysentry";
import SOSecureAdtVsMysentry from "./pages/compare/SOSecureAdtVsMysentry";
import MedicalAlertDevicesVsMysentry from "./pages/compare/MedicalAlertDevicesVsMysentry";
import OuraRingVsMysentry from "./pages/compare/OuraRingVsMysentry";
import WhoopVsMysentry from "./pages/compare/WhoopVsMysentry";
import MedicalGuardianVsMysentry from "./pages/compare/MedicalGuardianVsMysentry";
import LivelyVsMysentry from "./pages/compare/LivelyVsMysentry";
import AppleWatchFallDetectionVsMysentry from "./pages/compare/AppleWatchFallDetectionVsMysentry";
import SamsungGalaxyWatchVsMysentry from "./pages/compare/SamsungGalaxyWatchVsMysentry";
import TraditionalMedicalAlertsComparison from "./pages/compare/TraditionalMedicalAlertsComparison";
import FitnessWearablesComparison from "./pages/compare/FitnessWearablesComparison";

// New SEO Pages - Audience & Pillar
import PersonalSafetyApp from "./pages/PersonalSafetyApp";
import WhoWeProtectSeniors from "./pages/who-we-protect/Seniors";
import WhoWeProtectWomen from "./pages/who-we-protect/Women";
import WhoWeProtectEmployers from "./pages/who-we-protect/Employers";
import WhoWeProtectDrivers from "./pages/who-we-protect/Drivers";
import WhoWeProtectStudents from "./pages/who-we-protect/Students";
import WhoWeProtectChildrenAndTeens from "./pages/who-we-protect/ChildrenAndTeens";

// Phase 2 - Solutions (Vertical-Specific BOFU)
import DeliveryDriversSolution from "./pages/solutions/DeliveryDriversSolution";
import RetailWorkersSolution from "./pages/solutions/RetailWorkersSolution";

// Phase 2 - Safety For (Audience-Specific BOFU)
import WomenLivingAlone from "./pages/safety-for/WomenLivingAlone";
import SeniorsAgingInPlace from "./pages/safety-for/SeniorsAgingInPlace";
import SoloTravelers from "./pages/safety-for/SoloTravelers";

// Phase 2 - Case Studies (B2B Sales Enablement)
import HomeHealthcareCaseStudy from "./pages/case-studies/HomeHealthcareCaseStudy";
import RealEstateCaseStudy from "./pages/case-studies/RealEstateCaseStudy";
import FieldServicesCaseStudy from "./pages/case-studies/FieldServicesCaseStudy";

// Phase 2 - Resources
import EmployerOnePager from "./pages/resources/EmployerOnePager";

// Phase 2 - Integrations (Wearable Pages)
import AppleWatchIntegration from "./pages/integrations/AppleWatchIntegration";
import SamsungGalaxyWatchIntegration from "./pages/integrations/SamsungGalaxyWatchIntegration";
import OuraRingIntegration from "./pages/integrations/OuraRingIntegration";
import RingIntegration from "./pages/integrations/RingIntegration";

// Ring Landing Page
import RingLandingPage from "./pages/RingLandingPage";

// Phase 2 - Guides (Authority Content)
import LoneWorkerSafetyGuide from "./pages/guides/LoneWorkerSafetyGuide";
import ProfessionalMonitoringGuide from "./pages/guides/ProfessionalMonitoringGuide";
import SeniorSafetyPlanningGuide from "./pages/guides/SeniorSafetyPlanningGuide";
import {
  AgingInPlaceChecklistPage,
  FamilySafetyWithoutTrackingPage,
  NightShiftNurseChecklistPage,
  PeopleLivingAlonePage,
  RenterSafetyPage,
  UtilityWorkersPage,
  WearableFallLimitationsPage,
} from "./pages/growth/OrganicGrowthPages";

// Admin
import AdminLayout from "./pages/admin/AdminLayout";

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

      {/* SEO Pages - Features */}
      <Route path="/features" component={FeaturesHub} />
      <Route path="/features/panic-button-app" component={PanicButtonApp} />
      <Route path="/features/fall-detection-app" component={FallDetectionApp} />
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
        {() => { window.location.replace("/admin/blog"); return null; }}
      </Route>
      <Route path="/admin/blog" nest>
        <AdminLayout />
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
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
