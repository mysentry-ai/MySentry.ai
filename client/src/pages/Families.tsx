import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Heart, MapPin, AlertCircle, Video, Shield, Clock, CheckCircle2, ArrowRight, Eye, Smartphone, TrendingDown, Zap, Car } from "lucide-react";
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
              For Mothers
            </div>

            <h1 className="text-5xl md:text-6xl font-heading font-bold text-[#1a1a1a] mb-6">
              Know instantly when something's wrong.
            </h1>
            <p className="text-xl text-[#1a1a1a] mb-8 leading-relaxed">
              Your child falls. Your parent has a health crisis. Your spouse crashes. You don't hear about it later. You know about it now. In seconds. With video proof. So you can act.
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
                <p className="text-sm text-[#1a1a1a]">You're alerted</p>
              </div>
              <div className="fade-in-up" style={{ animationDelay: "0.1s" }}>
                <div className="text-3xl font-bold text-primary">12 sec</div>
                <p className="text-sm text-[#1a1a1a]">Agent responds</p>
              </div>
              <div className="fade-in-up" style={{ animationDelay: "0.2s" }}>
                <div className="text-3xl font-bold text-primary">Live video</div>
                <p className="text-sm text-[#1a1a1a]">You see everything</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Mother's Burden */}
      <section className="py-32 bg-[#d4edda] border-t border-primary/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-[#1a1a1a] mb-6">
              The weight of responsibility.
            </h2>
            <p className="text-lg text-[#1a1a1a]">
              You can't be everywhere at once. But you're responsible for everyone. That's the mother's burden. MySentry lightens it.
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
                You worry constantly.
              </h3>
              <p className="text-[#1a1a1a] leading-relaxed">
                Is your teenager home safe? Did your parent take a fall? Is your spouse okay on the highway? The "what-ifs" never stop.
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
                You can't call every hour.
              </h3>
              <p className="text-[#1a1a1a] leading-relaxed">
                They'd resent you for it. But you need to know they're safe. You need proof, not promises.
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
                When something happens, you're last to know.
              </h3>
              <p className="text-[#1a1a1a] leading-relaxed">
                A fall. A crash. A health crisis. Hours pass before you find out. By then, the damage is done.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature 1: Panic Alarm - Family Activated */}
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
                  Your child can call for help with one tap.
                </h2>
                <p className="text-lg text-[#1a1a1a] leading-relaxed mb-6">
                  No need to dial 911. No need to remember numbers. One tap on their watch or phone. You're alerted. A professional agent responds. Emergency services are dispatched. All in seconds.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#1a1a1a]">Perfect for:</h3>
                <ul className="space-y-3">
                  {[
                    { title: "New Drivers", desc: "Car trouble. Accident. Unsafe situation. One tap gets help." },
                    { title: "College Students", desc: "Walking home late. Unsafe situation. One tap alerts you and authorities." },
                    { title: "Kids Walking Home", desc: "Bullying. Lost. Scared. One tap and you know exactly where they are." },
                    { title: "Elderly Parents", desc: "Need help but can't reach phone. One tap calls for immediate assistance." }
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
                  <strong>Did you know?</strong> Response time is everything in emergencies. The first 5 minutes determine outcomes. MySentry gets help there in seconds, not minutes.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="aspect-square rounded-3xl bg-white border-2 border-primary/20 flex items-center justify-center shadow-lg hover-lift"
            >
              <Zap className="h-40 w-40 text-primary/30" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature 2: Crash Detection */}
      <section className="py-32 bg-[#d4edda] border-t border-primary/10">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="aspect-square rounded-3xl bg-white border-2 border-primary/20 flex items-center justify-center shadow-lg hover-lift order-2 lg:order-1"
            >
              <Car className="h-40 w-40 text-primary/30" />
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
                  Your teenager crashes. You know instantly.
                </h2>
                <p className="text-lg text-[#1a1a1a] leading-relaxed mb-6">
                  Severe impact detected. You get an alert with their exact location. An agent calls them immediately. If they don't respond, emergency services are dispatched automatically. You're on the call.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary font-bold">1</div>
                  <div>
                    <h4 className="text-[#1a1a1a] font-bold mb-1">Impact Detected</h4>
                    <p className="text-[#1a1a1a] text-sm">Severe acceleration/deceleration or collision detected by phone sensors.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                  <div>
                    <h4 className="text-[#1a1a1a] font-bold mb-1">You're Alerted</h4>
                    <p className="text-[#1a1a1a] text-sm">Location, vehicle info, and video stream sent to you immediately.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary font-bold">3</div>
                  <div>
                    <h4 className="text-[#1a1a1a] font-bold mb-1">Help Arrives</h4>
                    <p className="text-[#1a1a1a] text-sm">EMS dispatched to exact location. Agent stays on call with your teen.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#c8e6c9] border border-primary/20">
                <p className="text-[#1a1a1a] italic">
                  <strong>Did you know?</strong> 1 in 5 teens will be in a car crash in their first year of driving. Crash detection saves lives by getting help there before they even realize they need it.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature 3: Fall & Health Alarms */}
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
                  Your parent falls. You're on the call in seconds.
                </h2>
                <p className="text-lg text-[#1a1a1a] leading-relaxed mb-6">
                  Fall detected automatically. You get a live video alert. You can see what's happening and talk to them. An agent is already coordinating emergency response. You're not helpless. You're in control.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white border border-primary/10">
                  <h4 className="text-[#1a1a1a] font-bold mb-2">Fall Detection</h4>
                  <p className="text-[#1a1a1a] text-sm">Detected in 2 seconds. You get live video. Help is dispatched.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-primary/10">
                  <h4 className="text-[#1a1a1a] font-bold mb-2">Health Crisis Alert</h4>
                  <p className="text-[#1a1a1a] text-sm">Abnormal heart rate or oxygen levels trigger immediate alert to you.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-primary/10">
                  <h4 className="text-[#1a1a1a] font-bold mb-2">You're in Control</h4>
                  <p className="text-[#1a1a1a] text-sm">You see the situation, talk to them, and coordinate with emergency services.</p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#c8e6c9] border border-primary/20">
                <p className="text-[#1a1a1a] italic">
                  <strong>Did you know?</strong> Being on a video call during an emergency reduces patient anxiety by 70% and helps paramedics respond faster. Your presence matters.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="aspect-square rounded-3xl bg-white border-2 border-primary/20 flex items-center justify-center shadow-lg hover-lift"
            >
              <AlertCircle className="h-40 w-40 text-primary/30" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature 4: Smart Connectivity */}
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
                <div className="text-primary font-mono text-sm tracking-widest uppercase font-bold mb-4">Feature 04</div>
                <h2 className="text-4xl font-heading font-bold text-[#1a1a1a] mb-6">
                  Know where they are. Without asking.
                </h2>
                <p className="text-lg text-[#1a1a1a] leading-relaxed mb-6">
                  Set location alerts once. Forget about it. You get automatic updates at intervals you choose. Your teenager made it to school. Your parent made it home. No nagging. No guilt. Just peace.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary font-bold">1</div>
                  <div>
                    <h4 className="text-[#1a1a1a] font-bold mb-1">Set It Once</h4>
                    <p className="text-[#1a1a1a] text-sm">Choose contacts and update intervals (hourly, daily, custom).</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                  <div>
                    <h4 className="text-[#1a1a1a] font-bold mb-1">Forget About It</h4>
                    <p className="text-[#1a1a1a] text-sm">They don't need to do anything. Updates happen automatically.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary font-bold">3</div>
                  <div>
                    <h4 className="text-[#1a1a1a] font-bold mb-1">Peace of Mind</h4>
                    <p className="text-[#1a1a1a] text-sm">You know they're safe without the constant worry or nagging.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#c8e6c9] border border-primary/20">
                <p className="text-[#1a1a1a] italic">
                  <strong>Did you know?</strong> Mothers who use Smart Connectivity report 60% less daily anxiety. That's not just peace of mind. That's freedom.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Mother's Promise */}
      <section className="py-32 bg-[#d4edda] border-t border-primary/10">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-[#1a1a1a] mb-6">
              You can finally let go.
            </h2>
            <p className="text-lg text-[#1a1a1a]">
              Not because you stop caring. But because you stop worrying. MySentry is the safety net that lets your family live freely.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Eye,
                title: "See without hovering",
                desc: "Know they're safe without constant check-ins. They stay independent. You stay informed."
              },
              {
                icon: Heart,
                title: "Act, don't react",
                desc: "In emergencies, you're part of the solution. You see it happening. You're on the call. You matter."
              },
              {
                icon: MapPin,
                title: "Location without tracking",
                desc: "Automated updates mean you know where they are without asking. They don't feel watched."
              },
              {
                icon: Zap,
                title: "Help arrives in seconds",
                desc: "Not hours. Not days. Seconds. That's the difference between recovery and permanent damage."
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

      {/* Testimonials from Mothers */}
      <section className="py-32 bg-[#e8f5e9] border-t border-primary/10">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-[#1a1a1a] mb-6">
              What mothers say.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Sarah, Mother of Two",
                quote: "My daughter crashed her car. I got the alert before she even called me. I was on the video call with the paramedics. I knew she was okay. That 30 seconds of knowing changed everything.",
                highlight: "Crash Detection"
              },
              {
                name: "Margaret, Caregiver",
                quote: "My mom fell in the kitchen. I got the alert, saw her on video, and paramedics arrived in 4 minutes. The doctor said if she'd been there longer, it could have been serious. MySentry saved her life.",
                highlight: "Fall Detection"
              },
              {
                name: "Jennifer, Mother of Three",
                quote: "I don't call my kids constantly anymore. I set location alerts and I know they made it to school, to practice, home safely. They love that I'm not nagging. I love that I'm not worried.",
                highlight: "Smart Connectivity"
              },
              {
                name: "Lisa, Mother & Daughter",
                quote: "My teenager can hit the panic button if something feels wrong. My mom gets health alerts if her heart rate is irregular. Everyone's protected. I can finally breathe."
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
            Protect everyone you love.
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
            You can finally let go.
          </h2>
          <p className="text-xl text-white/90 mb-8">
            7-day free trial. See for yourself why mothers choose MySentry.
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
