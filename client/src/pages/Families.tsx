import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Heart, MapPin, AlertCircle, Video, Shield, Clock, CheckCircle2, ArrowRight, Eye, Smartphone, TrendingDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Families() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#e8f5e9] pt-16">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-secondary/5 blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-primary/5 blur-[100px]" />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c8e6c9] border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              For Families
            </div>

            <h1 className="text-5xl md:text-6xl font-heading font-bold text-[#1a1a1a] mb-6">
              Stop worrying. Start living.
            </h1>
            <p className="text-xl text-[#1a1a1a] mb-8 leading-relaxed">
              You can't be there all the time. But MySentry can. Know your loved one is safe without checking in every hour. That's real peace of mind.
            </p>
            <Link href="/pricing">
              <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-primary text-white hover:bg-primary/90 font-semibold shadow-lg">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 mt-16">
              <div className="fade-in-up">
                <div className="text-3xl font-bold text-primary">2 sec</div>
                <p className="text-sm text-[#1a1a1a]">Emergency alert</p>
              </div>
              <div className="fade-in-up" style={{ animationDelay: "0.1s" }}>
                <div className="text-3xl font-bold text-primary">24/7</div>
                <p className="text-sm text-[#1a1a1a]">Real-time monitoring</p>
              </div>
              <div className="fade-in-up" style={{ animationDelay: "0.2s" }}>
                <div className="text-3xl font-bold text-primary">5 contacts</div>
                <p className="text-sm text-[#1a1a1a]">Get live video alerts</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem - Why Families Need This */}
      <section className="py-32 bg-[#d4edda] border-t border-primary/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-[#1a1a1a] mb-6">
              The guilt of distance.
            </h2>
            <p className="text-lg text-[#1a1a1a]">
              You love them. You worry. But you can't be there. And they don't want you hovering. MySentry bridges that gap.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-3xl bg-white border border-primary/20 hover:border-primary/40 transition-all"
            >
              <AlertCircle className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
                You can't call every hour.
              </h3>
              <p className="text-[#1a1a1a] leading-relaxed">
                And they don't want you to. But what if something happens? MySentry watches so you don't have to.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 rounded-3xl bg-white border border-primary/20 hover:border-primary/40 transition-all"
            >
              <Heart className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
                Health changes quietly.
              </h3>
              <p className="text-[#1a1a1a] leading-relaxed">
                A stroke doesn't announce itself. A heart problem doesn't feel like an emergency. But your watch sees it coming.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-3xl bg-white border border-primary/20 hover:border-primary/40 transition-all"
            >
              <Eye className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
                You need to know, not hover.
              </h3>
              <p className="text-[#1a1a1a] leading-relaxed">
                MySentry gives you visibility without intrusion. Peace of mind without the guilt.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature 1: Live Health Monitoring */}
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
                <div className="text-primary font-mono text-sm tracking-widest uppercase font-bold mb-4">Feature 01</div>
                <h2 className="text-4xl font-heading font-bold text-[#1a1a1a] mb-6">
                  See their health in real time.
                </h2>
                <p className="text-lg text-[#1a1a1a] leading-relaxed mb-6">
                  You don't need to ask "How are you feeling?" anymore. MySentry shows you. Heart rate. Oxygen levels. Temperature. Activity. You see their baseline and get alerted if something changes.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#1a1a1a]">What you'll see:</h3>
                <ul className="space-y-3">
                  {[
                    { title: "Daily Activity", desc: "Know they're moving and staying active" },
                    { title: "Heart Health", desc: "See resting heart rate and get alerts for irregularities" },
                    { title: "Oxygen Levels", desc: "Immediate alert if oxygen drops dangerously" },
                    { title: "Temperature Trends", desc: "Early warning of fever or infection" },
                    { title: "Sleep Quality", desc: "Understand their rest patterns and overall wellness" }
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
                  <strong>Did you know?</strong> 80% of health problems show warning signs in vital signs 24-48 hours before symptoms appear. You'll see them first.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="aspect-square rounded-3xl bg-white border-2 border-primary/20 flex items-center justify-center shadow-lg hover-lift"
            >
              <Heart className="h-40 w-40 text-primary/30" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature 2: Smart Connectivity */}
      <section className="py-32 bg-[#d4edda] border-t border-primary/10">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="aspect-square rounded-3xl bg-white border-2 border-primary/20 flex items-center justify-center shadow-lg hover-lift order-2 lg:order-1"
            >
              <MapPin className="h-40 w-40 text-primary/30" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8 order-1 lg:order-2"
            >
              <div>
                <div className="text-primary font-mono text-sm tracking-widest uppercase font-bold mb-4">Feature 02</div>
                <h2 className="text-4xl font-heading font-bold text-[#1a1a1a] mb-6">
                  Know where they are. Automatically.
                </h2>
                <p className="text-lg text-[#1a1a1a] leading-relaxed mb-6">
                  Set it once. Forget about it. MySentry sends location updates to your selected contacts at intervals you choose. No more "Where are you?" texts. No more worry.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary font-bold">1</div>
                  <div>
                    <h4 className="text-[#1a1a1a] font-bold mb-1">Choose Your Contacts</h4>
                    <p className="text-[#1a1a1a] text-sm">Select up to 5 family members who get location alerts.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                  <div>
                    <h4 className="text-[#1a1a1a] font-bold mb-1">Set Your Interval</h4>
                    <p className="text-[#1a1a1a] text-sm">Hourly, daily, or custom—whatever gives you peace of mind.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary font-bold">3</div>
                  <div>
                    <h4 className="text-[#1a1a1a] font-bold mb-1">Automatic Updates</h4>
                    <p className="text-[#1a1a1a] text-sm">They get location alerts without you having to ask or remind them.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#c8e6c9] border border-primary/20">
                <p className="text-[#1a1a1a] italic">
                  <strong>Did you know?</strong> Families who use Smart Connectivity report 60% less daily anxiety about their loved one's safety.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature 3: Near-Fall Detection & Fall Detection */}
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
                <div className="text-primary font-mono text-sm tracking-widest uppercase font-bold mb-4">Feature 03</div>
                <h2 className="text-4xl font-heading font-bold text-[#1a1a1a] mb-6">
                  When they fall, you're there.
                </h2>
                <p className="text-lg text-[#1a1a1a] leading-relaxed mb-6">
                  MySentry detects falls in 2 seconds and immediately connects you via live video. You see what's happening. You can talk to them. You're part of the response.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white border border-primary/10">
                  <h4 className="text-[#1a1a1a] font-bold mb-2">Near-Fall Warning</h4>
                  <p className="text-[#1a1a1a] text-sm">You get alerted if their heart rate drops suddenly—a sign they might be losing balance. You can check in immediately.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-primary/10">
                  <h4 className="text-[#1a1a1a] font-bold mb-2">Live Video Connection</h4>
                  <p className="text-[#1a1a1a] text-sm">If they fall, you see it. You talk to them. You're part of the emergency response.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-primary/10">
                  <h4 className="text-[#1a1a1a] font-bold mb-2">Immediate Dispatch</h4>
                  <p className="text-[#1a1a1a] text-sm">Emergency services are called automatically with exact location. You're on the call.</p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#c8e6c9] border border-primary/20">
                <p className="text-[#1a1a1a] italic">
                  <strong>Did you know?</strong> Being on a live video call with a family member during an emergency reduces their anxiety by 70% and helps paramedics respond faster.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="aspect-square rounded-3xl bg-white border-2 border-primary/20 flex items-center justify-center shadow-lg hover-lift"
            >
              <Video className="h-40 w-40 text-primary/30" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Families Choose MySentry */}
      <section className="py-32 bg-[#d4edda] border-t border-primary/10">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-[#1a1a1a] mb-6">
              Peace of mind. Without the guilt.
            </h2>
            <p className="text-lg text-[#1a1a1a]">
              You can finally stop worrying and start living. They stay independent. You stay connected.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Eye,
                title: "See without hovering",
                desc: "Know they're safe without constant check-ins. Respect their independence while staying informed."
              },
              {
                icon: Heart,
                title: "Health before crisis",
                desc: "Spot health changes early. Prevent emergencies instead of just responding to them."
              },
              {
                icon: MapPin,
                title: "Location without tracking",
                desc: "Automated updates mean you know where they are without asking. They don't feel watched."
              },
              {
                icon: Video,
                title: "Be there when it matters",
                desc: "In an emergency, you're on the video call. You're part of the solution, not just informed after."
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

      {/* Testimonials */}
      <section className="py-32 bg-[#e8f5e9] border-t border-primary/10">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-[#1a1a1a] mb-6">
              Real families. Real peace of mind.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Jennifer, Daughter",
                quote: "My mom lives 2 hours away. I used to call her 3 times a day. Now I see her activity on my phone. I call when I want to talk, not because I'm worried. She loves that.",
                highlight: "Smart Connectivity"
              },
              {
                name: "Michael, Son",
                quote: "Dad had a minor fall. I got the video alert. I was on the call with him and the paramedics. I could reassure him. That made all the difference.",
                highlight: "Live Video Response"
              },
              {
                name: "Sarah, Daughter",
                quote: "Mom's watch detected an irregular heartbeat she didn't even feel. We got her to the doctor. The doctor said another week and it could have been serious.",
                highlight: "Health Monitoring"
              },
              {
                name: "David, Son",
                quote: "I set location alerts for daily updates. I know Mom made it to the store and back home safely. No more anxiety. No more guilt."
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
                <div className="flex items-center justify-between">
                  <strong className="text-[#1a1a1a]">{testimonial.name}</strong>
                  {testimonial.highlight && (
                    <span className="text-xs font-bold text-primary bg-[#c8e6c9] px-3 py-1 rounded-full">{testimonial.highlight}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Family Bundle CTA */}
      <section className="py-32 bg-[#d4edda] border-t border-primary/10">
        <div className="container max-w-3xl text-center">
          <h2 className="text-4xl font-heading font-bold text-[#1a1a1a] mb-6">
            Protect your whole family.
          </h2>
          <p className="text-lg text-[#1a1a1a] mb-8">
            Family Bundle: Add up to 4 family members. Just $5 per additional member per month. One app. One peace of mind.
          </p>
          <Link href="/pricing">
            <Button size="lg" className="h-14 px-12 text-lg rounded-full bg-primary text-white hover:bg-primary/90 font-bold shadow-xl">
              View Family Plans
            </Button>
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 text-center bg-primary text-white">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Stop worrying. Start living.
          </h2>
          <p className="text-xl text-white/90 mb-8">
            7-day free trial. See for yourself why families choose MySentry.
          </p>
          <Link href="/pricing">
            <Button size="lg" className="h-14 px-12 text-lg rounded-full bg-white text-primary hover:bg-white/90 font-bold shadow-xl">
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
