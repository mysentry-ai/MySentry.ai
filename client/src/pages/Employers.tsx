import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { TrendingUp, Shield, Briefcase, AlertTriangle, CheckCircle2, DollarSign } from "lucide-react";

export default function Employers() {
  const industries = [
    {
      name: "Construction",
      challenge: "Falls from heights, equipment injuries, heat exhaustion in remote sites.",
      benefit: "Detect falls instantly. Response time drops from 30 min to 2 min.",
      roi: "Reduce workers' comp claims by 35-40%"
    },
    {
      name: "Healthcare",
      challenge: "Staff working 12+ hour shifts. Fatigue-related errors and injuries.",
      benefit: "Monitor stress levels and alert supervisors if vitals spike dangerously.",
      roi: "Reduce burnout-related turnover by 20%"
    },
    {
      name: "Logistics & Delivery",
      challenge: "Drivers alone in vehicles. Crashes, medical events, safety threats.",
      benefit: "Crash detection + live video response. Family notified automatically.",
      roi: "Reduce incident response time by 70%"
    },
    {
      name: "Field Service",
      challenge: "Technicians working alone in unfamiliar locations. Safety risks.",
      benefit: "Panic button + location tracking. Agents see live video of incident.",
      roi: "Reduce safety incidents by 45%"
    },
    {
      name: "Mining & Extraction",
      challenge: "Extreme environments. Falls, equipment failures, medical emergencies.",
      benefit: "Passive health monitoring + fall detection in real-time.",
      roi: "Reduce downtime from 8 hours to 15 minutes per incident"
    },
    {
      name: "Warehousing",
      challenge: "Fast-paced, repetitive work. Slips, trips, falls. Fatigue injuries.",
      benefit: "Fall detection + health monitoring. Immediate response.",
      roi: "Reduce OSHA recordable incidents by 50%"
    }
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider">
              <Shield className="h-3 w-3 fill-current" />
              Enterprise Safety
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground leading-tight fade-in-up">
              Protect Your Employees.<br/>
              <span className="text-primary">Your Most Valuable Assets.</span>
            </h1>
            
            <p className="text-xl text-foreground/80 leading-relaxed fade-in-up" style={{animationDelay: '0.1s'}}>
              Improve productivity. Reduce turnover. Prevent incidents. MySentry detects emergencies before they become disasters—and responds in seconds, not minutes.
            </p>
            <div className="flex gap-4 pt-4">
              <Link href="/pricing">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-primary text-white hover:bg-primary/90 font-semibold">
                  Request Demo
                </Button>
              </Link>
            </div>
            <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
              <p className="text-sm text-foreground/70 italic">
                <strong className="text-primary">Did you know?</strong> The average workplace injury costs $42,000 in direct and indirect costs.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-primary/5 border-2 border-primary/20 overflow-hidden relative shadow-lg flex items-center justify-center">
               <div className="text-center space-y-6">
                 <TrendingUp className="h-24 w-24 text-primary/30 mx-auto" />
                 <div>
                   <p className="text-3xl font-bold text-primary">40%</p>
                   <p className="text-foreground/60 text-sm">Avg. Incident Reduction</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem: Hidden Costs */}
      <section className="py-24 bg-primary/5 border-t border-primary/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
              The Real Cost of <br/>
              <span className="text-primary">Workplace Incidents</span>
            </h2>
            <p className="text-lg text-foreground/70">
              It's not just the medical bill. It's lost productivity, worker's comp premiums, regulatory fines, and damaged morale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Delayed Response",
                desc: "Worker collapses. No one knows for 10 minutes. Permanent damage.",
                icon: AlertTriangle,
                metric: "10 min avg"
              },
              {
                title: "Expensive Downtime",
                desc: "Incident investigation, incident reports, compliance audits.",
                icon: DollarSign,
                metric: "$42K avg"
              },
              {
                title: "Insurance Premiums",
                desc: "Each incident raises your rates for years.",
                icon: TrendingUp,
                metric: "15-20% increase"
              }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white border border-primary/10 hover:border-primary/30 transition-colors shadow-sm hover:shadow-md">
                <item.icon className="h-10 w-10 text-primary mb-6" />
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-foreground/60 mb-4">{item.desc}</p>
                <p className="text-primary font-bold text-sm">{item.metric}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution: Industry Breakdown */}
      <section className="py-24 border-t border-primary/10 bg-white">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Tailored for Your Industry
            </h2>
            <p className="text-xl text-foreground/70">
              Whether your team works at heights, in vehicles, or in warehouses—MySentry adapts to your specific risks.
            </p>
          </div>

          <div className="grid gap-6">
            {industries.map((industry, idx) => (
              <div key={idx} className="group p-8 rounded-3xl bg-primary/5 border border-primary/10 hover:border-primary/30 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-md">
                <div className="grid md:grid-cols-4 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">{industry.name}</h3>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60 uppercase tracking-widest font-bold mb-2">Challenge</p>
                    <p className="text-foreground/80">{industry.challenge}</p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60 uppercase tracking-widest font-bold mb-2">MySentry Solution</p>
                    <p className="text-foreground/80">{industry.benefit}</p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60 uppercase tracking-widest font-bold mb-2">ROI</p>
                    <p className="text-primary font-bold text-lg">{industry.roi}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Difference: Live Video */}
      <section className="py-24 bg-primary/5 border-t border-primary/10">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-heading font-bold text-foreground">
              Agents See the Scene. <br/>
              <span className="text-primary">In Real-Time.</span>
            </h2>
            <p className="text-lg text-foreground/70">
              Traditional panic buttons send a text. MySentry sends a live video stream to our monitoring center AND your emergency team.
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-start gap-3 text-foreground/80">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                <span><strong>Immediate Assessment:</strong> Agents see exactly what happened and dispatch the right resources.</span>
              </li>
              <li className="flex items-start gap-3 text-foreground/80">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                <span><strong>Faster Response:</strong> No guessing. No delays. Help arrives in minutes, not hours.</span>
              </li>
              <li className="flex items-start gap-3 text-foreground/80">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                <span><strong>Better Outcomes:</strong> Immediate medical intervention = fewer permanent injuries.</span>
              </li>
            </ul>
            <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 mt-6">
              <p className="text-sm text-foreground/70 italic">
                <strong className="text-primary">💡</strong> Average response time: 12 seconds from alert to agent assessment.
              </p>
            </div>
          </div>
          <div>
             <div className="aspect-video rounded-3xl bg-white border-2 border-primary/20 overflow-hidden relative shadow-lg flex items-center justify-center">
               <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
                 <Briefcase className="h-20 w-20 text-primary/20" />
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="py-24 border-t border-primary/10 bg-white">
        <div className="container">
          <h2 className="text-4xl font-heading font-bold text-foreground mb-16 text-center">
            Built for Enterprise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Team Management",
                desc: "Assign workers to teams. Track incidents by department. Generate compliance reports automatically.",
                icon: Briefcase
              },
              {
                title: "Compliance Ready",
                desc: "OSHA, HIPAA, and SOC 2 compliant. Audit trails for every incident.",
                icon: Shield
              },
              {
                title: "Custom Thresholds",
                desc: "Set health alerts based on your industry standards and worker profiles.",
                icon: TrendingUp
              }
            ].map((feature, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-primary/5 border border-primary/10 hover:border-primary/30 transition-colors">
                <feature.icon className="h-10 w-10 text-primary mb-6" />
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-foreground/60">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-primary text-white">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Reduce Incidents. <br/>
            Protect Your Team.
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Request a demo and see how MySentry works for your industry.
          </p>
          <Link href="/pricing">
            <Button size="lg" className="h-14 px-10 text-lg rounded-full bg-white text-primary hover:bg-white/90 shadow-xl font-bold">
              Schedule Enterprise Demo
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
