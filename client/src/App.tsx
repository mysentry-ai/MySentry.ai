import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Seniors from "./pages/Seniors";
import Families from "./pages/Families";
import Employers from "./pages/Employers";
import Pricing from "./pages/Pricing";
import HowItWorks from "./pages/HowItWorks";
import Females from "./pages/Females";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import Privacy from "./pages/Privacy";
import Partner from "./pages/Partner";
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

// SEO Pages - Use Cases
import UseCasesHub from "./pages/UseCasesHub";
import SafetyAppForWomen from "./pages/use-cases/SafetyAppForWomen";
import FamilySafetyApp from "./pages/use-cases/FamilySafetyApp";
import MedicalAlertForSeniors from "./pages/use-cases/MedicalAlertForSeniors";
import LoneWorkerSafetyApp from "./pages/use-cases/LoneWorkerSafetyApp";
import HomeHealthcareWorkerSafety from "./pages/use-cases/HomeHealthcareWorkerSafety";

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
function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/how-it-works" component={HowItWorks} />
      <Route path="/females" component={Females} />
      <Route path="/seniors" component={Seniors} />
      <Route path="/families" component={Families} />
      <Route path="/employers" component={Employers} />
      <Route path="/pricing" component={Pricing} />
      
      {/* New Pages */}
      <Route path="/about-us" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/team" component={Team} />
      <Route path="/blogs" component={Blogs} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/partner" component={Partner} />
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
      <Route path="/features/meetsafe-check-ins" component={MeetSafeCheckIns} />

      {/* SEO Pages - Use Cases */}
      <Route path="/use-cases" component={UseCasesHub} />
      <Route path="/use-cases/safety-app-for-women" component={SafetyAppForWomen} />
      <Route path="/use-cases/family-safety-app" component={FamilySafetyApp} />
      <Route path="/use-cases/medical-alert-app-for-seniors" component={MedicalAlertForSeniors} />
      <Route path="/use-cases/lone-worker-safety-app" component={LoneWorkerSafetyApp} />
      <Route path="/use-cases/home-healthcare-worker-safety" component={HomeHealthcareWorkerSafety} />

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

      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
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
