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

function Router() {
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
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/team" component={Team} />
      <Route path="/blogs" component={Blogs} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/partner" component={Partner} />

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
