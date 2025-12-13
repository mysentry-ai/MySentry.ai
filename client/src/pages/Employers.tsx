import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, HardHat, Factory, Truck, Construction, CheckCircle2, AlertTriangle, TrendingDown } from "lucide-react";
import { Link } from "wouter";

export default function Employers() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/employer-safety.png" 
            alt="Industrial Safety" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent" />
        </div>

        <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-semibold border border-secondary/30">
              <HardHat className="h-4 w-4" />
              For Enterprise & Industry
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
              Protect Your Workforce.<br />
              <span className="text-secondary">Eliminate Downtime.</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-lg">
              Workplace accidents don't just cost money—they cost trust. MySentry provides real-time health and safety monitoring to prevent incidents before they happen.
            </p>
            <div className="flex gap-4 pt-4">
              <Link href="/pricing">
                <Button size="lg" variant="secondary" className="h-12 px-8 rounded-full">
                  View Enterprise Plans
                </Button>
              </Link>
              <Button variant="outline" className="h-12 px-8 rounded-full border-white/20 text-white hover:bg-white/10 hover:text-white">
                Schedule Demo
              </Button>
            </div>
          </div>
          
          {/* Stat Card */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl max-w-md ml-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-destructive/20 rounded-lg text-destructive-foreground">
                  <AlertTriangle className="h-8 w-8" />
                </div>
                <div>
                  <p className="text-sm text-white/70">Industry Average</p>
                  <p className="text-lg font-bold">Cost of Injury</p>
                </div>
                <div className="ml-auto text-2xl font-bold text-white">$42,000</div>
              </div>
              <div className="h-px bg-white/20 my-4" />
              <div className="flex items-center gap-4">
                <div className="p-3 bg-secondary/20 rounded-lg text-secondary">
                  <TrendingDown className="h-8 w-8" />
                </div>
                <div>
                  <p className="text-sm text-white/70">With MySentry</p>
                  <p className="text-lg font-bold">Risk Reduction</p>
                </div>
                <div className="ml-auto text-2xl font-bold text-secondary">-85%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Sections */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">Tailored for High-Risk Industries</h2>
            <p className="text-muted-foreground">Every environment has unique challenges. We have specific solutions for yours.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Factory,
                title: "Manufacturing",
                desc: "Monitor fatigue and heat stress on the factory floor to prevent machinery accidents.",
                features: ["Heat Stress Alerts", "Repetitive Motion Tracking"]
              },
              {
                icon: Construction,
                title: "Construction",
                desc: "Real-time fall detection and location tracking for lone workers on hazardous sites.",
                features: ["Fall Detection", "GPS Location", "Impact Sensing"]
              },
              {
                icon: Truck,
                title: "Logistics",
                desc: "Keep drivers safe with drowsiness detection and vitals monitoring during long hauls.",
                features: ["Drowsiness Alerts", "Heart Rate Variability"]
              }
            ].map((industry, idx) => (
              <div key={idx} className="group p-8 rounded-2xl border border-border bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="h-14 w-14 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <industry.icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">{industry.title}</h3>
                <p className="text-muted-foreground mb-6">{industry.desc}</p>
                <ul className="space-y-2">
                  {industry.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm font-medium text-primary/80">
                      <CheckCircle2 className="h-4 w-4 text-secondary" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Cost of Inaction (StoryBrand: Failure) */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                The Hidden Cost of "Business as Usual"
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Ignoring worker safety isn't just unethical—it's bad business. Without proactive monitoring, you are one accident away from:
              </p>
              <ul className="space-y-4">
                {[
                  "Massive insurance premium hikes",
                  "Legal liabilities and lawsuits",
                  "Loss of skilled labor and morale",
                  "Production halts and downtime"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-destructive font-medium">
                    <AlertTriangle className="h-5 w-5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-border">
              <h3 className="text-xl font-bold text-primary mb-4">ROI Calculator</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground">Avg. Cost of Incident</span>
                  <span className="font-bold text-destructive">$42,000</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground">MySentry Annual Cost (per user)</span>
                  <span className="font-bold text-primary">$120</span>
                </div>
                <div className="pt-4">
                  <div className="p-4 bg-secondary/10 rounded-lg text-center">
                    <p className="text-sm text-primary mb-1">Potential Savings Per Prevention</p>
                    <p className="text-3xl font-bold text-secondary">$41,880</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
            Ready to Secure Your Workforce?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join industry leaders who have moved from reactive to proactive safety.
          </p>
          <Link href="/pricing">
            <Button size="lg" className="h-14 px-10 text-lg rounded-full shadow-lg hover:scale-105 transition-transform">
              See Enterprise Pricing
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
