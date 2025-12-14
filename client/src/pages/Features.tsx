import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ShieldAlert, Activity, Car, HeartPulse, Video, Smartphone, Watch, Check, ArrowRight, AlertTriangle, MapPin, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[#e8f5e9] pt-16">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-secondary/5 blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-[#d4edda] blur-[100px]" />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-[#1a1a1a] mb-6">
              Safety. Health. Connectivity.
            </h1>
            <p className="text-xl text-[#1a1a1a] mb-8">
              MySentry combines three essential pillars to keep you safe, healthy, and connected. Seven integrated features work together 24/7 to detect problems early, respond instantly, and keep your family informed every step of the way.
            </p>
            <Link href="/pricing">
              <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-primary text-white hover:bg-primary/90 font-semibold shadow-lg">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Feature 1: Panic Alarm */}
      <section className="py-24 border-t border-primary/10 bg-[#d4edda]">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-square rounded-3xl bg-[#e8f5e9] border-2 border-primary/20 flex items-center justify-center relative overflow-hidden shadow-lg hover-lift">
              <ShieldAlert className="h-32 w-32 text-primary" />
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6 fade-in-up">
            <div className="text-primary font-mono text-sm tracking-widest uppercase font-bold">Feature 01</div>
            <h2 className="text-4xl font-heading font-bold text-[#1a1a1a]">Help with one tap. Or one word.</h2>
            <p className="text-lg text-[#1a1a1a]">
              Panic button on your phone or watch. Voice activation works even when your screen is locked. An agent answers in seconds. No waiting. No confusion. Just help.
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-center gap-3 text-[#1a1a1a]">
                <div className="h-8 w-8 rounded-full bg-[#c8e6c9] flex items-center justify-center"><Smartphone className="h-4 w-4 text-primary" /></div>
                One-tap panic button on phone and watch
              </li>
              <li className="flex items-center gap-3 text-[#1a1a1a]">
                <div className="h-8 w-8 rounded-full bg-[#c8e6c9] flex items-center justify-center"><Watch className="h-4 w-4 text-primary" /></div>
                Voice activation ("Help" or "MySentry") in 6 languages
              </li>
              <li className="flex items-center gap-3 text-[#1a1a1a]">
                <div className="h-8 w-8 rounded-full bg-[#c8e6c9] flex items-center justify-center"><Video className="h-4 w-4 text-primary" /></div>
                Instant live video connection with agent
              </li>
              <li className="flex items-center gap-3 text-[#1a1a1a]">
                <div className="h-8 w-8 rounded-full bg-[#c8e6c9] flex items-center justify-center"><MapPin className="h-4 w-4 text-primary" /></div>
                Automatic location sent to emergency contacts
              </li>
            </ul>
            <div className="p-4 rounded-xl bg-[#c8e6c9] border border-primary/20 mt-6">
              <p className="text-sm text-[#1a1a1a] italic">
                <strong>💡 Did you know?</strong> Voice activation works even when your phone is locked or in your pocket. No fumbling. No delays.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#c8e6c9] border border-primary/20 mt-3">
              <p className="text-sm text-[#1a1a1a] italic">
                <strong>💡 Here's the thing:</strong> Most people freeze in emergencies. They don't know what to say. MySentry's voice activation works with any word. Just speak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: Fall Detection */}
      <section className="py-24 border-t border-primary/10 bg-[#e8f5e9]">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 fade-in-up">
            <div className="text-primary font-mono text-sm tracking-widest uppercase font-bold">Feature 02</div>
            <h2 className="text-4xl font-heading font-bold text-[#1a1a1a]">Your watch detects falls. Automatically.</h2>
            <p className="text-lg text-[#1a1a1a]">
              Hard fall? Your watch knows in 2 seconds and calls for help. You don't have to do anything. You don't have to press a button. You don't have to yell for help. The system responds for you.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-[#d4edda] border border-primary/10">
                <h4 className="font-bold text-[#1a1a1a] mb-1">2 Second Detection</h4>
                <p className="text-sm text-[#1a1a1a]">Faster than you can press a button.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#d4edda] border border-primary/10">
                <h4 className="font-bold text-[#1a1a1a] mb-1">15 Second Countdown</h4>
                <p className="text-sm text-[#1a1a1a]">Cancel if it was a false alarm.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#d4edda] border border-primary/10">
                <h4 className="font-bold text-[#1a1a1a] mb-1">Works at Any Angle</h4>
                <p className="text-sm text-[#1a1a1a]">Standing, sitting, or lying down.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#d4edda] border border-primary/10">
                <h4 className="font-bold text-[#1a1a1a] mb-1">Live Video Instantly</h4>
                <p className="text-sm text-[#1a1a1a]">Agent sees exactly what happened.</p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-[#c8e6c9] border border-primary/20 mt-6">
              <p className="text-sm text-[#1a1a1a] italic">
                <strong>💡 Did you know?</strong> Lying on the floor for more than 1 hour causes serious complications like blood clots and pneumonia. MySentry gets help there in minutes.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#c8e6c9] border border-primary/20 mt-3">
              <p className="text-sm text-[#1a1a1a] italic">
                <strong>💡 Here's the thing:</strong> Most falls happen when no one is around. By the time someone finds you, hours have passed. That's when permanent damage occurs. MySentry detects falls instantly, even when you're alone.
              </p>
            </div>
          </div>
          <div>
            <div className="aspect-square rounded-3xl bg-[#d4edda] border-2 border-primary/20 flex items-center justify-center relative overflow-hidden shadow-lg hover-lift">
               <Activity className="h-32 w-32 text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: Near-Fall Detection */}
      <section className="py-24 border-t border-primary/10 bg-[#d4edda]">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-square rounded-3xl bg-[#e8f5e9] border-2 border-primary/20 flex items-center justify-center relative overflow-hidden shadow-lg hover-lift">
              <AlertTriangle className="h-32 w-32 text-primary" />
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6 fade-in-up">
            <div className="text-primary font-mono text-sm tracking-widest uppercase font-bold">Feature 03</div>
            <h2 className="text-4xl font-heading font-bold text-[#1a1a1a]">Prevent falls before they happen.</h2>
            <p className="text-lg text-[#1a1a1a]">
              Your watch detects a sudden drop in heart rate while you're walking—a sign you might lose balance. MySentry alerts you immediately so you can grab something and prevent the fall. At the same time, our monitoring team is standing by in case you need help.
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-start gap-3 text-[#1a1a1a]">
                <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span><strong>Real-Time Heart Rate Monitoring:</strong> Detects abnormal patterns while walking</span>
              </li>
              <li className="flex items-start gap-3 text-[#1a1a1a]">
                <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span><strong>Immediate Alert:</strong> You get a warning to steady yourself</span>
              </li>
              <li className="flex items-start gap-3 text-[#1a1a1a]">
                <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span><strong>Monitoring Team Ready:</strong> Agents are alerted and standing by</span>
              </li>
            </ul>
            <div className="p-4 rounded-xl bg-[#c8e6c9] border border-primary/20 mt-6">
              <p className="text-sm text-[#1a1a1a] italic">
                <strong>💡 Did you know?</strong> A sudden drop in heart rate is one of the earliest warning signs of fainting or loss of balance. Catching it early prevents the fall entirely.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#c8e6c9] border border-primary/20 mt-3">
              <p className="text-sm text-[#1a1a1a] italic">
                <strong>💡 Here's the thing:</strong> Prevention is better than response. MySentry doesn't just help after you fall—it helps you avoid falling in the first place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 4: Crash Detection */}
      <section className="py-24 border-t border-primary/10 bg-[#e8f5e9]">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 fade-in-up">
            <div className="text-primary font-mono text-sm tracking-widest uppercase font-bold">Feature 04</div>
            <h2 className="text-4xl font-heading font-bold text-[#1a1a1a]">Car crash? We know immediately.</h2>
            <p className="text-lg text-[#1a1a1a]">
              Your phone detects the impact of a car crash in seconds. It sends your exact GPS location to emergency services and your 5 emergency contacts. An agent calls you immediately. Help is on the way.
            </p>
            <ul className="space-y-3 pt-4">
              <li className="flex items-start gap-3 text-[#1a1a1a]">
                <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span>Recognizes the unique impact signature of a car crash</span>
              </li>
              <li className="flex items-start gap-3 text-[#1a1a1a]">
                <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span>Sends GPS coordinates to 911 and emergency contacts</span>
              </li>
              <li className="flex items-start gap-3 text-[#1a1a1a]">
                <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span>Initiates live video call with agent</span>
              </li>
              <li className="flex items-start gap-3 text-[#1a1a1a]">
                <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span>15-second countdown to cancel if it was a false alarm</span>
              </li>
            </ul>
            <div className="p-4 rounded-xl bg-[#c8e6c9] border border-primary/20 mt-6">
              <p className="text-sm text-[#1a1a1a] italic">
                <strong>💡 Did you know?</strong> Distinguishes between a crash and a pothole. No false alarms. No unnecessary emergency responses.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#c8e6c9] border border-primary/20 mt-3">
              <p className="text-sm text-[#1a1a1a] italic">
                <strong>💡 Here's the thing:</strong> 40% of vehicle accident claims are disputed. MySentry automatically records video evidence. No disputes. No legal fees. Just clear proof of what happened.
              </p>
            </div>
          </div>
          <div>
            <div className="aspect-square rounded-3xl bg-[#d4edda] border-2 border-primary/20 flex items-center justify-center relative overflow-hidden shadow-lg hover-lift">
              <Car className="h-32 w-32 text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 5: Real-Time Health Monitoring */}
      <section className="py-24 border-t border-primary/10 bg-[#d4edda]">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-square rounded-3xl bg-[#e8f5e9] border-2 border-primary/20 flex items-center justify-center relative overflow-hidden shadow-lg hover-lift">
              <HeartPulse className="h-32 w-32 text-primary" />
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6 fade-in-up">
            <div className="text-primary font-mono text-sm tracking-widest uppercase font-bold">Feature 05</div>
            <h2 className="text-4xl font-heading font-bold text-[#1a1a1a]">Your watch learns YOUR normal.</h2>
            <p className="text-lg text-[#1a1a1a]">
              Not a generic average. Not a population baseline. YOUR baseline. Your watch learns your unique vital signs and detects when something is wrong before you even feel sick. Early detection prevents emergencies.
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-start gap-3 text-[#1a1a1a]">
                <Check className="h-5 w-5 text-primary mt-1 shrink-0" />
                <span><strong>Heart Rate & HRV:</strong> Alerts if your pulse spikes, drops, or shows abnormal variation</span>
              </li>
              <li className="flex items-start gap-3 text-[#1a1a1a]">
                <Check className="h-5 w-5 text-primary mt-1 shrink-0" />
                <span><strong>Blood Oxygen (SpO₂):</strong> Monitors oxygen levels for signs of respiratory distress</span>
              </li>
              <li className="flex items-start gap-3 text-[#1a1a1a]">
                <Check className="h-5 w-5 text-primary mt-1 shrink-0" />
                <span><strong>Wrist Temperature:</strong> Detects fever or infection early</span>
              </li>
              <li className="flex items-start gap-3 text-[#1a1a1a]">
                <Check className="h-5 w-5 text-primary mt-1 shrink-0" />
                <span><strong>Respiratory Rate:</strong> Monitors breathing patterns for distress</span>
              </li>
            </ul>
            <div className="p-4 rounded-xl bg-[#c8e6c9] border border-primary/20 mt-6">
              <p className="text-sm text-[#1a1a1a] italic">
                <strong>💡 Did you know?</strong> 80% of health emergencies show warning signs in vital signs 24-48 hours before symptoms appear. Early detection prevents emergencies entirely.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#c8e6c9] border border-primary/20 mt-3">
              <p className="text-sm text-[#1a1a1a] italic">
                <strong>💡 Here's the thing:</strong> Most people don't know their own vital sign baselines. Your watch does. It knows when something is wrong before you do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 6: Smart Connectivity */}
      <section className="py-24 border-t border-primary/10 bg-[#e8f5e9]">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 fade-in-up">
            <div className="text-primary font-mono text-sm tracking-widest uppercase font-bold">Feature 06</div>
            <h2 className="text-4xl font-heading font-bold text-[#1a1a1a]">Your family always knows where you are.</h2>
            <p className="text-lg text-[#1a1a1a]">
              Set it up once. Forget about it. Your family gets automated location alerts at intervals you choose. They don't have to ask. They don't have to worry. They just know you're safe.
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-start gap-3 text-[#1a1a1a]">
                <Check className="h-5 w-5 text-primary mt-1 shrink-0" />
                <span><strong>Automated Location Sharing:</strong> Set intervals (hourly, daily, weekly)</span>
              </li>
              <li className="flex items-start gap-3 text-[#1a1a1a]">
                <Check className="h-5 w-5 text-primary mt-1 shrink-0" />
                <span><strong>Select Your Contacts:</strong> Choose who gets location updates</span>
              </li>
              <li className="flex items-start gap-3 text-[#1a1a1a]">
                <Check className="h-5 w-5 text-primary mt-1 shrink-0" />
                <span><strong>No Constant Monitoring:</strong> You're not tracked every second—just at intervals you choose</span>
              </li>
              <li className="flex items-start gap-3 text-[#1a1a1a]">
                <Check className="h-5 w-5 text-primary mt-1 shrink-0" />
                <span><strong>Peace of Mind:</strong> Family knows you're safe without asking</span>
              </li>
            </ul>
            <div className="p-4 rounded-xl bg-[#c8e6c9] border border-primary/20 mt-6">
              <p className="text-sm text-[#1a1a1a] italic">
                <strong>💡 Did you know?</strong> Families who know their loved one's location report 40% less anxiety. They stop asking "Where are you?" and start feeling confident.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#c8e6c9] border border-primary/20 mt-3">
              <p className="text-sm text-[#1a1a1a] italic">
                <strong>💡 Here's the thing:</strong> Smart Connectivity isn't surveillance. It's peace of mind. It's your family knowing you're safe without you having to prove it every time.
              </p>
            </div>
          </div>
          <div>
            <div className="aspect-square rounded-3xl bg-[#d4edda] border-2 border-primary/20 flex items-center justify-center relative overflow-hidden shadow-lg hover-lift">
              <MapPin className="h-32 w-32 text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 7: 24/7 Professional Monitoring */}
      <section className="py-24 border-t border-primary/10 bg-[#d4edda]">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-square rounded-3xl bg-[#e8f5e9] border-2 border-primary/20 flex items-center justify-center relative overflow-hidden shadow-lg hover-lift">
              <Video className="h-32 w-32 text-primary" />
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6 fade-in-up">
            <div className="text-primary font-mono text-sm tracking-widest uppercase font-bold">Feature 07</div>
            <h2 className="text-4xl font-heading font-bold text-[#1a1a1a]">Real agents. Real help. Every time.</h2>
            <p className="text-lg text-[#1a1a1a]">
              The game changer. Live video. Real agents. Real help. Every emergency. No bots. No delays. No guessing. Agents see exactly what's happening and dispatch the right help immediately.
            </p>
            <div className="space-y-6 pt-4">
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary font-bold">1</div>
                <div>
                  <h4 className="text-[#1a1a1a] font-bold">Agents See Everything</h4>
                  <p className="text-[#1a1a1a] text-sm">They assess the scene, your condition, and your surroundings. They dispatch the right help immediately.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                <div>
                  <h4 className="text-[#1a1a1a] font-bold">Your Family Sees Too</h4>
                  <p className="text-[#1a1a1a] text-sm">5 emergency contacts get a link to the live video instantly. They see exactly what's happening.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary font-bold">3</div>
                <div>
                  <h4 className="text-[#1a1a1a] font-bold">Video Evidence Recorded</h4>
                  <p className="text-[#1a1a1a] text-sm">Every incident is recorded. Clear evidence for insurance, liability protection, and peace of mind.</p>
                </div>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-[#c8e6c9] border border-primary/20 mt-6">
              <p className="text-sm text-[#1a1a1a] italic">
                <strong>💡 Did you know?</strong> Average response time from alert to agent: 12 seconds. From alert to emergency services dispatched: 45 seconds.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#c8e6c9] border border-primary/20 mt-3">
              <p className="text-sm text-[#1a1a1a] italic">
                <strong>💡 Here's the thing:</strong> Traditional medical alert systems send you to a call center. MySentry sends you to an agent who can SEE what's happening and dispatch the RIGHT help immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-32 bg-[#e8f5e9] border-t border-primary/10">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-[#1a1a1a] mb-6">
              Three pillars. One solution.
            </h2>
            <p className="text-lg text-[#1a1a1a]">
              MySentry integrates Safety, Health, and Connectivity into one seamless system. Every feature supports all three pillars, creating a comprehensive protection network that works 24/7.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "🛡️ Safety",
                description: "Instant detection and response to emergencies",
                items: ["Panic Alarm (voice or tap)", "Fall Detection (automatic)", "Crash Detection (automatic)", "Live Video Response", "24/7 Professional Monitoring"]
              },
              {
                title: "❤️ Health",
                description: "Continuous monitoring of your vital signs",
                items: ["Real-Time Health Monitoring", "Personalized Baselines", "Near-Fall Detection", "Early Warning Alerts", "Preventive Care Focus"]
              },
              {
                title: "🔗 Connectivity",
                description: "Keep your family informed and connected",
                items: ["Smart Connectivity Alerts", "5 Emergency Contacts", "Live Video Sharing", "Automated Location Updates", "Peace of Mind"]
              }
            ].map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-white border border-primary/10 hover:border-primary/30 transition-all"
              >
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">{pillar.title}</h3>
                <p className="text-[#1a1a1a] font-semibold mb-6 text-primary">{pillar.description}</p>
                <ul className="space-y-3">
                  {pillar.items.map((item, i) => (
                    <li key={i} className="flex gap-3 text-[#1a1a1a]">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="bg-[#d4edda] rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">How They Work Together</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Prevention",
                  items: ["Near-Fall Detection alerts you to prevent falls", "Real-Time Health Monitoring detects problems 24-48 hours early", "Smart Connectivity keeps your family informed"]
                },
                {
                  title: "Detection",
                  items: ["Fall Detection works automatically", "Crash Detection works automatically", "Health Threshold Alerts work automatically"]
                },
                {
                  title: "Response",
                  items: ["Panic Alarm connects you to an agent in seconds", "Live Video shows agents exactly what's happening", "Emergency contacts are alerted immediately"]
                },
                {
                  title: "Evidence",
                  items: ["Video is recorded for every incident", "Clear documentation for insurance claims", "Liability protection with video evidence"]
                }
              ].map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-white border border-primary/10 hover:border-primary/30 transition-all"
              >
                <h3 className="text-2xl font-bold text-primary mb-6">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex gap-3 text-[#1a1a1a]">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center bg-primary text-white">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Ready to be protected?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            7-day free trial. No credit card. Cancel anytime. See for yourself how MySentry keeps you safe.
          </p>
          <Link href="/pricing">
            <Button size="lg" className="h-14 px-12 text-lg rounded-full bg-[#e8f5e9] text-primary hover:bg-[#e8f5e9]/90 font-bold shadow-xl">
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
