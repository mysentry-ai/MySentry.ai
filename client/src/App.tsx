import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Seniors from "./pages/Seniors";
import Families from "./pages/Families";
import Employers from "./pages/Employers";
import Pricing from "./pages/Pricing";
import Features from "./pages/Features";
import Females from "./pages/Females";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/features" component={Features} />
      <Route path="/females" component={Females} />
      <Route path="/seniors" component={Seniors} />
      <Route path="/families" component={Families} />
      <Route path="/employers" component={Employers} />
      <Route path="/pricing" component={Pricing} />
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
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
