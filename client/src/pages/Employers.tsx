import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Heart, TrendingUp, Users, DollarSign, AlertCircle, Video, Shield, Clock, CheckCircle2, ArrowRight, Zap, Car, Activity, BarChart3, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { industries } from "@/data/industries";

export default function Employers() {
  const [activeIndustry, setActiveIndustry] = useState(industries[0]);
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#e8f5e9] pt-16">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-secondary/5 blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-primary/5 blur-[100px]" />
        </div>

        <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c8e6c9] border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              For Employers
            </div>

            <h1 className="text-5xl md:text-6xl font-heading font-bold text-[#1a1a1a] mb-6">
              Protect your employees. Boost your bottom line.
            </h1>
            <p className="text-xl text-[#1a1a1a] mb-8 leading-relaxed">
              When employees feel safe and healthy, they're more productive, more loyal, and less likely to leave. MySentry handles all the safety monitoring. You get the results: reduced downtime, lower insurance costs, and increased revenue from better retention and productivity.
            </p>
            <Link href="/pricing">
              <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-primary text-white hover:bg-primary/90 font-semibold shadow-lg">
                Get Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 mt-16">
              <div className="fade-in-up">
                <div className="text-3xl font-bold text-primary">$47K</div>
                <p className="text-sm text-[#1a1a1a]">Avg. cost per workplace injury</p>
              </div>
              <div className="fade-in-up" style={{ animationDelay: "0.1s" }}>
                <div className="text-3xl font-bold text-primary">2 sec</div>
                <p className="text-sm text-[#1a1a1a]">Emergency detection & alert</p>
              </div>
              <div className="fade-in-up" style={{ animationDelay: "0.2s" }}>
                <div className="text-3xl font-bold text-primary">100%</div>
                <p className="text-sm text-[#1a1a1a]">Hands-off for employers</p>
              </div>
            </div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white rotate-1 hover:rotate-0 transition-all duration-500">
              <img 
                src="/images/business-meeting-happy.jpg" 
                alt="Diverse team having a productive meeting" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-primary/10">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-[#1a1a1a]">Workforce Protected</p>
                    <p className="text-xs text-gray-600">Safety Score: 98/100 • Incidents: 0</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </section>

      {/* The Business Challenge */}
      <section className="py-32 bg-[#d4edda] border-t border-primary/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-[#1a1a1a] mb-6">
              Your employees are your greatest asset.
            </h2>
            <p className="text-lg text-[#1a1a1a]">
              But injuries, health crises, and accidents create expensive downtime, turnover, and lost productivity. Employees who feel unprotected become disengaged. They leave.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-3xl bg-white border border-primary/20 hover:border-primary/40 transition-all"
            >
              <DollarSign className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
                Downtime costs explode.
              </h3>
              <p className="text-[#1a1a1a] leading-relaxed">
                One workplace injury = lost productivity, medical costs, workers' comp claims, and replacement worker expenses. Average cost: $47,000 per incident.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 rounded-3xl bg-white border border-primary/20 hover:border-primary/40 transition-all"
            >
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
                Retention plummets.
              </h3>
              <p className="text-[#1a1a1a] leading-relaxed">
                Employees who don't feel protected leave. Replacing a single employee costs 50-200% of their salary. Your best people walk out the door.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-3xl bg-white border border-primary/20 hover:border-primary/40 transition-all"
            >
              <TrendingUp className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
                Insurance premiums rise.
              </h3>
              <p className="text-[#1a1a1a] leading-relaxed">
                More claims = higher premiums. Fewer incidents = lower rates. MySentry reduces both the incidents and the claims.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-32 bg-white border-t border-primary/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-[#1a1a1a] mb-6">
              Tailored Protection for Every Industry
            </h2>
            <p className="text-lg text-[#1a1a1a]">
              Every workplace has unique risks. MySentry adapts to yours. Select your industry to see how we solve your specific safety challenges.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setActiveIndustry(industry)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${
                  activeIndustry.id === industry.id
                    ? "bg-primary text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <industry.icon className="h-4 w-4" />
                {industry.title}
              </button>
            ))}
          </div>

          <div className="bg-[#f8fafc] rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-xl overflow-hidden relative min-h-[600px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndustry.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid lg:grid-cols-2 gap-12 items-center h-full"
              >
                <div className="space-y-8 relative z-10">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
                      <activeIndustry.icon className="h-3 w-3" />
                      {activeIndustry.title}
                    </div>
                    <h3 className="text-3xl font-bold text-[#1a1a1a] mb-6 leading-tight">
                      {activeIndustry.peace.problem}
                    </h3>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-2xl border-l-4 border-red-500 shadow-sm">
                      <p className="text-sm font-bold text-red-500 mb-1 uppercase tracking-wide">The Reality</p>
                      <p className="text-[#1a1a1a] italic">"{activeIndustry.peace.empathy}"</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border-l-4 border-primary shadow-sm">
                      <p className="text-sm font-bold text-primary mb-1 uppercase tracking-wide">The Solution</p>
                      <p className="text-[#1a1a1a] font-medium">{activeIndustry.peace.answer}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-green-50 p-4 rounded-xl">
                        <p className="text-xs font-bold text-green-700 mb-1 uppercase">The Change</p>
                        <p className="text-sm text-[#1a1a1a]">{activeIndustry.peace.change}</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-xl">
                        <p className="text-xs font-bold text-blue-700 mb-1 uppercase">The Result</p>
                        <p className="text-sm text-[#1a1a1a]">{activeIndustry.peace.endResult}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl group">
                  <img 
                    src={activeIndustry.image} 
                    alt={`${activeIndustry.title} safety scenario`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                      <p className="text-sm font-bold uppercase tracking-wider">Active Monitoring</p>
                    </div>
                    <p className="text-lg font-medium opacity-90">
                      Protecting your {activeIndustry.title.toLowerCase()} workforce 24/7.
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* The Promise: Productivity & Retention */}
      <section className="py-32 bg-[#e8f5e9] border-t border-primary/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-[#1a1a1a] mb-6">
              Employees who feel safe stay. And produce more.
            </h2>
            <p className="text-lg text-[#1a1a1a]">
              When employees know they're protected—that help arrives in seconds, that their health is monitored, that their employer cares—they're more engaged, more loyal, and more productive. That's not just safety. That's your bottom line.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-3xl bg-white border border-primary/20 hover:border-primary/40 transition-all"
            >
              <Award className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
                Improved Retention
              </h3>
              <p className="text-[#1a1a1a] leading-relaxed mb-4">
                Employees who feel protected stay. Reduced turnover saves you 50-200% per employee replacement. Over a year, that's thousands in savings.
              </p>
              <p className="text-[#1a1a1a] font-bold text-primary">Impact: $100K+ annual savings per 50 employees</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 rounded-3xl bg-white border border-primary/20 hover:border-primary/40 transition-all"
            >
              <BarChart3 className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
                Increased Productivity
              </h3>
              <p className="text-[#1a1a1a] leading-relaxed mb-4">
                Engaged employees produce 17% more. Reduced absenteeism and presenteeism from health issues. Fewer accidents = fewer disruptions.
              </p>
              <p className="text-[#1a1a1a] font-bold text-primary">Impact: 10-15% productivity gain</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-3xl bg-white border border-primary/20 hover:border-primary/40 transition-all"
            >
              <DollarSign className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
                Reduced Insurance Costs
              </h3>
              <p className="text-[#1a1a1a] leading-relaxed mb-4">
                Fewer claims = lower premiums. Early intervention prevents serious injuries. Video evidence reduces dispute costs.
              </p>
              <p className="text-[#1a1a1a] font-bold text-primary">Impact: 10-20% insurance premium reduction</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-8 rounded-3xl bg-white border border-primary/20 hover:border-primary/40 transition-all"
            >
              <TrendingUp className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
                Reduced Downtime
              </h3>
              <p className="text-[#1a1a1a] leading-relaxed mb-4">
                Early detection prevents minor incidents from becoming serious injuries. Faster response = faster recovery = faster return to work.
              </p>
              <p className="text-[#1a1a1a] font-bold text-primary">Impact: 30-40% reduction in injury-related downtime</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works: Features Tied to Business Outcomes */}
      <section className="py-32 bg-[#d4edda] border-t border-primary/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-[#1a1a1a] mb-6">
              How MySentry protects your employees (and your bottom line).
            </h2>
            <p className="text-lg text-[#1a1a1a]">
              You don't manage anything. MySentry handles everything. 24/7 professional monitoring. Automatic response. Video evidence recorded.
            </p>
          </div>
        </div>
      </section>

      {/* Feature 1: Crash Detection */}
      <section className="py-32 bg-[#e8f5e9] border-t border-primary/10">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <div className="text-primary font-mono text-sm tracking-widest uppercase font-bold mb-4">Safety Feature 01</div>
                <h2 className="text-4xl font-heading font-bold text-[#1a1a1a] mb-6">
                  Crash Detection: Reduce vehicle incident downtime.
                </h2>
                <p className="text-lg text-[#1a1a1a] leading-relaxed mb-6">
                  Your driver crashes. MySentry detects it in 2 seconds. An agent calls immediately. Help is dispatched. You get video evidence. The employee gets immediate care. No hours of waiting. No guessing what happened.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#1a1a1a]">Business Impact:</h3>
                <ul className="space-y-3">
                  {[
                    { title: "Faster Response", desc: "Help arrives in minutes, not hours. Employee recovers faster. Returns to work sooner." },
                    { title: "Clear Liability", desc: "Video evidence shows exactly what happened. Reduces dispute costs and insurance claims." },
                    { title: "Reduced Downtime", desc: "Early intervention prevents minor crashes from becoming major injuries." }
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#1a1a1a]">{item.title}:</strong>
                        <p className="text-[#1a1a1a] text-sm">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-[#c8e6c9] border border-primary/20">
                <p className="text-[#1a1a1a] italic">
                  <strong>💡 Did you know?</strong> A single vehicle accident can cost $47,000+ in medical, legal, and replacement costs. Crash detection prevents that by getting help there in seconds. And video evidence eliminates disputes.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#c8e6c9] border border-primary/20 mt-4">
                <p className="text-[#1a1a1a] italic">
                  <strong>💡 Here's the thing:</strong> Most employers don't realize that 40% of vehicle accident claims are disputed. With MySentry's automatic video recording, you have clear evidence. No disputes. Faster resolution. Lower costs.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="aspect-square rounded-3xl bg-white border-2 border-primary/20 flex items-center justify-center shadow-lg hover-lift"
            >
              <Car className="h-40 w-40 text-primary/30" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature 2: Fall Detection */}
      <section className="py-32 bg-[#d4edda] border-t border-primary/10">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="aspect-square rounded-3xl bg-white border-2 border-primary/20 flex items-center justify-center shadow-lg hover-lift order-2 lg:order-1"
            >
              <AlertCircle className="h-40 w-40 text-primary/30" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8 order-1 lg:order-2"
            >
              <div>
                <div className="text-primary font-mono text-sm tracking-widest uppercase font-bold mb-4">Safety Feature 02</div>
                <h2 className="text-4xl font-heading font-bold text-[#1a1a1a] mb-6">
                  Fall Detection: Eliminate costly workplace injuries.
                </h2>
                <p className="text-lg text-[#1a1a1a] leading-relaxed mb-6">
                  An employee falls on the job. MySentry detects it instantly. An agent responds. Help is dispatched to their exact location. They're not lying on the floor for hours. They're not suffering permanent damage. They recover. They return to work.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#1a1a1a]">Business Impact:</h3>
                <ul className="space-y-3">
                  {[
                    { title: "Prevent Permanent Damage", desc: "Early intervention prevents complications. Faster recovery. Employee returns to full productivity." },
                    { title: "Reduce Workers' Comp Claims", desc: "Fewer serious injuries = lower claims = lower insurance premiums." },
                    { title: "Liability Protection", desc: "Documented response proves you took immediate action. Reduces legal exposure." }
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#1a1a1a]">{item.title}:</strong>
                        <p className="text-[#1a1a1a] text-sm">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-[#c8e6c9] border border-primary/20">
                <p className="text-[#1a1a1a] italic">
                  <strong>💡 Did you know?</strong> Lying on the floor for hours after a fall causes serious complications (blood clots, pneumonia, permanent disability). MySentry gets help there in minutes.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#c8e6c9] border border-primary/20 mt-4">
                <p className="text-[#1a1a1a] italic">
                  <strong>💡 Here's the thing:</strong> Most falls happen when no one is around. By the time someone discovers the employee, hours have passed. That's when permanent damage occurs. MySentry detects falls instantly, even when no one is nearby.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature 3: Real-Time Health Monitoring */}
      <section className="py-32 bg-[#e8f5e9] border-t border-primary/10">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <div className="text-primary font-mono text-sm tracking-widest uppercase font-bold mb-4">Health Feature 01</div>
                <h2 className="text-4xl font-heading font-bold text-[#1a1a1a] mb-6">
                  Real-Time Health Monitoring: Prevent workplace health crises.
                </h2>
                <p className="text-lg text-[#1a1a1a] leading-relaxed mb-6">
                  An employee's heart rate is irregular. Their oxygen levels are dropping. Their temperature is rising. MySentry detects it before they even feel sick. An alert goes out. Help is available. They get medical attention before it becomes a crisis.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#1a1a1a]">Monitored Metrics:</h3>
                <ul className="space-y-3">
                  {[
                    { title: "Heart Rate & HRV", desc: "Detects irregular patterns and abnormal variations" },
                    { title: "Blood Oxygen (SpO₂)", desc: "Immediate alert if oxygen drops dangerously" },
                    { title: "Temperature", desc: "Early warning of fever or infection" },
                    { title: "Respiratory Rate", desc: "Monitors breathing patterns for distress" }
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#1a1a1a]">{item.title}:</strong>
                        <p className="text-[#1a1a1a] text-sm">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#1a1a1a]">Business Impact:</h3>
                <ul className="space-y-3">
                  {[
                    { title: "Prevent Absenteeism", desc: "Early intervention prevents health crises. Employees stay healthy. Less sick days." },
                    { title: "Reduce Health Insurance Costs", desc: "Healthier employees = lower health insurance premiums." },
                    { title: "Increase Productivity", desc: "Healthy employees are engaged employees. They produce more." }
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#1a1a1a]">{item.title}:</strong>
                        <p className="text-[#1a1a1a] text-sm">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-[#c8e6c9] border border-primary/20">
                <p className="text-[#1a1a1a] italic">
                  <strong>💡 Did you know?</strong> 80% of health problems show warning signs in vital signs 24-48 hours before symptoms appear. Early detection prevents workplace health crises.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#c8e6c9] border border-primary/20 mt-4">
                <p className="text-[#1a1a1a] italic">
                  <strong>💡 Here's the thing:</strong> Most employers don't monitor employee health at all. They wait for employees to collapse. By then, it's an emergency. MySentry monitors 24/7, detects problems early, and prevents emergencies before they happen.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="aspect-square rounded-3xl bg-white border-2 border-primary/20 flex items-center justify-center shadow-lg hover-lift"
            >
              <Activity className="h-40 w-40 text-primary/30" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature 4: Employee-Initiated Panic Alarm */}
      <section className="py-32 bg-[#d4edda] border-t border-primary/10">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="aspect-square rounded-3xl bg-white border-2 border-primary/20 flex items-center justify-center shadow-lg hover-lift order-2 lg:order-1"
            >
              <Zap className="h-40 w-40 text-primary/30" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8 order-1 lg:order-2"
            >
              <div>
                <div className="text-primary font-mono text-sm tracking-widest uppercase font-bold mb-4">Safety Feature 04</div>
                <h2 className="text-4xl font-heading font-bold text-[#1a1a1a] mb-6">
                  Employee Panic Alarm: Empower your workforce.
                </h2>
                <p className="text-lg text-[#1a1a1a] leading-relaxed mb-6">
                  An employee feels unsafe. Needs help. One tap on their watch or phone. Immediate response. Help is dispatched. They feel protected. They feel valued. They stay.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#1a1a1a]">Business Impact:</h3>
                <ul className="space-y-3">
                  {[
                    { title: "Improved Safety Culture", desc: "Employees know help is one tap away. Confidence increases. Productivity increases." },
                    { title: "Reduced Turnover", desc: "Employees who feel protected stay. Saves 50-200% per employee replacement." },
                    { title: "Liability Protection", desc: "Documented response proves you took immediate action. Reduces legal exposure." }
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#1a1a1a]">{item.title}:</strong>
                        <p className="text-[#1a1a1a] text-sm">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-[#c8e6c9] border border-primary/20">
                <p className="text-[#1a1a1a] italic">
                  <strong>💡 Did you know?</strong> Employees who feel their employer cares about their safety are 3x more likely to stay. That's retention. That's your bottom line.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#c8e6c9] border border-primary/20 mt-4">
                <p className="text-[#1a1a1a] italic">
                  <strong>💡 Here's the thing:</strong> A panic button is more than safety—it's a signal that you care. Employees feel valued. Morale improves. Productivity increases. Turnover drops. That's the real ROI.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* You Don't Manage Anything */}
      <section className="py-32 bg-[#e8f5e9] border-t border-primary/10">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-[#1a1a1a] mb-6">
              You don't manage anything. MySentry handles everything.
            </h2>
            <p className="text-lg text-[#1a1a1a]">
              No training. No monitoring. No paperwork. Just results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Users,
                title: "24/7 Professional Monitoring",
                desc: "Our team monitors every alert. Responds to every emergency. Coordinates with emergency services. You don't lift a finger."
              },
              {
                icon: Video,
                title: "Automatic Video Recording",
                desc: "Every incident is recorded. Clear evidence for insurance claims, liability protection, and dispute resolution."
              },
              {
                icon: Clock,
                title: "Instant Response",
                desc: "Employees get help in seconds. You get documented proof of your response. No guessing. No delays."
              },
              {
                icon: Shield,
                title: "Hands-Off for You",
                desc: "Set it up once. Forget about it. MySentry handles all the safety monitoring. You focus on running your business."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-white border border-primary/10 hover:border-primary/30 transition-all"
              >
                <item.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">{item.title}</h3>
                <p className="text-[#1a1a1a]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Employee Safety & Health Challenges */}
      <section className="py-32 bg-[#d4edda] border-t border-primary/10">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-[#1a1a1a] mb-6">
              The real challenges every employer faces.
            </h2>
            <p className="text-lg text-[#1a1a1a]">
              Whether you have 10 employees or 1,000, these safety and health challenges are universal.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                challenge: "Employees Fall. And Nobody Knows.",
                scenario: "An employee falls in a warehouse. They hit their head. They're dazed. They try to get up but can't. They lie there. Minutes pass. Hours pass. By the time someone finds them, permanent damage has occurred. MySentry detects the fall in 2 seconds. Help arrives in minutes. The employee recovers fully.",
                soundbite: "Did you know? Lying on the floor for more than 1 hour after a fall causes serious complications like blood clots and pneumonia. MySentry gets help there in minutes, not hours."
              },
              {
                challenge: "Drivers Crash. Evidence Disappears.",
                scenario: "One of your delivery drivers crashes. You don't know what happened. The other driver blames your employee. Insurance gets involved. Disputes. Lawsuits. Months of legal fees. MySentry records the crash, captures video, and provides clear evidence. Case closed.",
                soundbite: "Did you know? 40% of vehicle accident claims are disputed. Video evidence eliminates disputes and saves you thousands in legal fees and insurance claims."
              },
              {
                challenge: "Employees Get Sick. Productivity Tanks.",
                scenario: "An employee's heart rate is irregular. Their oxygen is dropping. But they don't feel sick yet. They keep working. Then they collapse. Emergency room. Weeks off work. Lost productivity. MySentry detects the warning signs 24-48 hours before they get sick. Early intervention prevents the crisis.",
                soundbite: "Did you know? 80% of health emergencies show warning signs in vital signs 24-48 hours before symptoms appear. Early detection prevents workplace health crises and keeps employees productive."
              },
              {
                challenge: "Employees Feel Unsafe. They Leave.",
                scenario: "An employee feels threatened. Unsafe. Vulnerable. They don't know who to call. They quit. You lose a trained employee. Recruiting and training a replacement costs 50-200% of their salary. MySentry gives them a panic button. One tap. Help arrives. They feel protected. They stay.",
                soundbite: "Did you know? Employees who feel their employer cares about their safety are 3x more likely to stay. That's not just safety—that's retention. That's your bottom line."
              },
              {
                challenge: "Insurance Claims Pile Up. Premiums Skyrocket.",
                scenario: "You have 3-4 workplace incidents per year. Each one is a workers' comp claim. Your insurance company raises your premiums. Year after year, costs climb. MySentry prevents incidents before they happen. Fewer claims. Lower premiums. Immediate ROI.",
                soundbite: "Did you know? One serious workplace injury can cost $47,000+ in medical, legal, and replacement costs. Preventing just 2-3 incidents per year pays for MySentry 10x over."
              },
              {
                challenge: "You Don't Know What Happened. Liability Exposure.",
                scenario: "An employee gets hurt. They sue. You don't have clear evidence of what happened. You can't prove you responded quickly. Liability exposure increases. Settlements are higher. MySentry records everything. Clear evidence. Documented response. Liability protection.",
                soundbite: "Did you know? Companies with documented emergency response protocols and video evidence settle workplace injury lawsuits for 30-50% less than companies without documentation."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="p-8 rounded-2xl bg-white border border-primary/10 hover:border-primary/30 transition-all"
              >
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">{item.challenge}</h3>
                <p className="text-[#1a1a1a] mb-6 leading-relaxed">{item.scenario}</p>
                <div className="p-4 rounded-lg bg-[#c8e6c9] border border-primary/20">
                  <p className="text-[#1a1a1a] italic">
                    <strong>💡 {item.soundbite}</strong>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Preview */}
      <section className="py-32 bg-[#e8f5e9] border-t border-primary/10">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-[#1a1a1a] mb-6">
              What's the ROI?
            </h2>
            <p className="text-lg text-[#1a1a1a] mb-8">
              For a company with 50 employees:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl bg-white border border-primary/10"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">Annual Costs</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-[#1a1a1a]">
                  <span>MySentry Enterprise Plan</span>
                  <span className="font-bold">$15,000</span>
                </div>
                <div className="border-t border-primary/10 pt-3 flex justify-between text-[#1a1a1a] font-bold">
                  <span>Total Cost</span>
                  <span>$15,000</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 rounded-2xl bg-white border border-primary/10"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">Annual Savings</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-[#1a1a1a]">
                  <span>Reduced downtime (1-2 incidents prevented)</span>
                  <span className="font-bold">$47,000</span>
                </div>
                <div className="flex justify-between text-[#1a1a1a]">
                  <span>Reduced insurance premiums (15% reduction)</span>
                  <span className="font-bold">$25,000</span>
                </div>
                <div className="flex justify-between text-[#1a1a1a]">
                  <span>Improved retention (2-3 fewer replacements)</span>
                  <span className="font-bold">$100,000</span>
                </div>
                <div className="flex justify-between text-[#1a1a1a]">
                  <span>Productivity gains (10-15% improvement)</span>
                  <span className="font-bold">$75,000</span>
                </div>
                <div className="border-t border-primary/10 pt-3 flex justify-between text-[#1a1a1a] font-bold">
                  <span>Total Savings</span>
                  <span className="text-primary">$247,000</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 p-8 rounded-2xl bg-[#c8e6c9] border border-primary/20 text-center">
            <p className="text-2xl font-bold text-primary mb-2">
              ROI: 1,547% in Year 1
            </p>
            <p className="text-[#1a1a1a]">
              For every $1 spent on MySentry, you get back $15.47 in savings and productivity gains.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials from Employers */}
      <section className="py-32 bg-[#d4edda] border-t border-primary/10">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-[#1a1a1a] mb-6">
              What employers say.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "John, Construction Company Owner",
                quote: "We had a worker fall off scaffolding. MySentry detected it, called for help, and paramedics arrived in 4 minutes. He recovered fully. Without MySentry, he could have been there for hours. That's a life saved.",
                company: "50+ employees"
              },
              {
                name: "Maria, Transportation Manager",
                quote: "One of our drivers crashed. We got the alert, saw the video, and knew exactly what happened. No disputes. No insurance headaches. Just clear evidence and a fast resolution.",
                company: "100+ employees"
              },
              {
                name: "David, Manufacturing Plant Manager",
                quote: "Our insurance company reduced our premiums by 18% after we implemented MySentry. Fewer claims, faster response, better outcomes. The ROI was immediate.",
                company: "200+ employees"
              },
              {
                name: "Sarah, Healthcare Administrator",
                quote: "Our nurses feel safer knowing they can hit a panic button if needed. Turnover has dropped 12%. Morale is up. And we haven't had a single serious incident in the ER since we started using MySentry."
              }
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-white border border-primary/10 hover:border-primary/30 transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary text-lg">★</span>
                  ))}
                </div>
                <p className="text-[#1a1a1a] mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                <div>
                  <strong className="text-[#1a1a1a]">{testimonial.name}</strong>
                  {testimonial.company && (
                    <p className="text-xs text-primary font-bold">{testimonial.company}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Pricing CTA */}
      <section className="py-32 bg-[#e8f5e9] border-t border-primary/10">
        <div className="container max-w-3xl text-center">
          <h2 className="text-4xl font-heading font-bold text-[#1a1a1a] mb-6">
            Ready to protect your employees and your bottom line?
          </h2>
          <p className="text-lg text-[#1a1a1a] mb-8">
            Custom enterprise pricing based on your team size. Dedicated account manager. Full integration support.
          </p>
          <Link href="/pricing">
            <Button size="lg" className="h-14 px-12 text-lg rounded-full bg-primary text-white hover:bg-primary/90 font-bold shadow-xl">
              Get Enterprise Demo
            </Button>
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 text-center bg-primary text-white">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Protect your employees. Boost your bottom line.
          </h2>
          <p className="text-xl text-white/90 mb-8">
            See how MySentry can save your company $100K+ annually while improving employee safety and retention.
          </p>
          <Link href="/pricing">
            <Button size="lg" className="h-14 px-12 text-lg rounded-full bg-white text-primary hover:bg-white/90 font-bold shadow-xl">
              Schedule Demo
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
