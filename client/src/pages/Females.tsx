import { Button } from "@/components/ui/button";
import { Shield, Heart, Zap, Check, Lock, Bell, Activity, Smartphone } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

export default function Females() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-[#e8f5e9] pt-16">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-secondary/5 blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-[#d4edda] blur-[100px]" />
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-heading font-bold text-[#1a1a1a] leading-tight mb-6">
                Live Freedom. <br/>
                <span className="text-primary">Without Fear.</span>
              </h1>
              <p className="text-xl text-[#1a1a1a] mb-8 max-w-xl leading-relaxed">
                The world can feel unsafe. Walking to your car. Living alone. Going for a run. MySentry turns the watch you already wear into a 24/7 personal bodyguard and health guardian. So you can live your life on your terms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/pricing">
                  <Button className="h-14 px-8 rounded-full text-lg font-bold bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all">
                    Start Free Trial
                  </Button>
                </Link>
                <Link href="/features">
                  <Button variant="outline" className="h-14 px-8 rounded-full text-lg font-bold border-2 border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-all">
                    See How It Works
                  </Button>
                </Link>
              </div>
              
              <div className="mt-12 flex items-center gap-8">
                <div>
                  <p className="text-3xl font-bold text-primary">1 in 3</p>
                  <p className="text-sm text-[#1a1a1a] font-medium">Women experience violence</p>
                </div>
                <div className="w-px h-12 bg-primary/20"></div>
                <div>
                  <p className="text-3xl font-bold text-primary">2 Sec</p>
                  <p className="text-sm text-[#1a1a1a] font-medium">Panic response time</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="/images/hero-senior-monitoring.png" 
                  alt="Woman jogging safely with smart watch" 
                  className="w-full h-auto object-cover"
                />
                
                {/* Floating UI Card */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-primary/10"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                      <Bell className="h-5 w-5 text-red-600 animate-pulse" />
                    </div>
                    <div>
                      <p className="font-bold text-[#1a1a1a]">Panic Alarm Activated</p>
                      <p className="text-xs text-gray-600">Live video shared with 5 contacts + 911</p>
                    </div>
                    <Button size="sm" className="ml-auto bg-red-600 hover:bg-red-700 text-white rounded-full px-4">
                      Help Arriving
                    </Button>
                  </div>
                </motion.div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#1a1a1a] mb-6">
              The Silent Anxiety of Living Alone
            </h2>
            <p className="text-xl text-[#1a1a1a]">
              You shouldn't have to text "I'm home" just to prove you're safe.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#e8f5e9] border border-primary/10 hover:shadow-lg transition-all">
              <div className="h-14 w-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <Lock className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">The "Keys in Hand" Walk</h3>
              <p className="text-[#1a1a1a] mb-4">
                Walking to your car at night with keys between your fingers isn't freedom. It's survival mode.
              </p>
              <div className="bg-white p-4 rounded-xl border border-primary/10">
                <p className="text-sm font-bold text-primary mb-1">Did you know?</p>
                <p className="text-xs text-[#1a1a1a]">
                  65% of women constantly assess their surroundings for potential threats when walking alone.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#e8f5e9] border border-primary/10 hover:shadow-lg transition-all">
              <div className="h-14 w-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <Activity className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">Health Emergencies Alone</h3>
              <p className="text-[#1a1a1a] mb-4">
                Living alone means if you faint, fall, or have a medical event, no one might know for days.
              </p>
              <div className="bg-white p-4 rounded-xl border border-primary/10">
                <p className="text-sm font-bold text-primary mb-1">Here's the thing:</p>
                <p className="text-xs text-[#1a1a1a]">
                  Heart disease is the #1 killer of women, often presenting with subtle symptoms like fatigue or nausea.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#e8f5e9] border border-primary/10 hover:shadow-lg transition-all">
              <div className="h-14 w-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <Smartphone className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">The Dating App Risk</h3>
              <p className="text-[#1a1a1a] mb-4">
                Meeting a stranger from an app? Sending your location to 3 friends shouldn't be your only safety net.
              </p>
              <div className="bg-white p-4 rounded-xl border border-primary/10">
                <p className="text-sm font-bold text-primary mb-1">Did you know?</p>
                <p className="text-xs text-[#1a1a1a]">
                  MySentry's "MeetSafe" feature automatically alerts contacts if you don't check in after a date.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-24 bg-[#1a1a1a] text-white overflow-hidden">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">
                Your Personal Bodyguard. <br/>
                <span className="text-primary">On Your Wrist.</span>
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                MySentry transforms your Apple Watch or Samsung Galaxy Watch into a powerful safety device. No ugly panic buttons. No separate devices to charge. Just you, protected.
              </p>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary/50">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Discreet Panic Alarm</h3>
                    <p className="text-gray-400">
                      Trigger help silently. A simple tap sequence on your watch alerts 5 contacts and our 24/7 monitoring team instantly. Live video starts streaming automatically.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary/50">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Real-Time Health Monitoring</h3>
                    <p className="text-gray-400">
                      We track your vitals 24/7. If your heart rate spikes or drops dangerously while you're sleeping or alone, we send help automatically.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary/50">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">MeetSafe Mode</h3>
                    <p className="text-gray-400">
                      Going on a date or run? Set a timer. If you don't check in, we alert your contacts with your last known location and live audio/video.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl" />
              <img 
                src="/images/hero-device-mockup.png" 
                alt="MySentry App on Apple Watch" 
                className="relative z-10 w-full h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#e8f5e9]">
        <div className="container">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#1a1a1a] text-center mb-16">
            Women Who Reclaimed Their Freedom
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-primary/10">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(i => <div key={i} className="h-4 w-4 bg-primary rounded-full" />)}
              </div>
              <p className="text-[#1a1a1a] mb-6 italic">
                "I live alone in the city. The 'MeetSafe' feature is a game changer for my evening runs. Knowing someone will be alerted if I don't check in gives me the confidence to keep running."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-gray-200 rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100" alt="Sarah J." />
                </div>
                <div>
                  <p className="font-bold text-[#1a1a1a]">Sarah J.</p>
                  <p className="text-xs text-gray-500">Marketing Executive, 29</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-primary/10">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(i => <div key={i} className="h-4 w-4 bg-primary rounded-full" />)}
              </div>
              <p className="text-[#1a1a1a] mb-6 italic">
                "I had a severe allergic reaction while home alone. I couldn't reach my phone, but I tapped my watch. The agent was on video in seconds and stayed with me until EMS arrived."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-gray-200 rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100" alt="Michelle K." />
                </div>
                <div>
                  <p className="font-bold text-[#1a1a1a]">Michelle K.</p>
                  <p className="text-xs text-gray-500">Teacher, 34</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-primary/10">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(i => <div key={i} className="h-4 w-4 bg-primary rounded-full" />)}
              </div>
              <p className="text-[#1a1a1a] mb-6 italic">
                "As a real estate agent, I meet strangers in empty houses constantly. MySentry is my silent partner. I feel so much safer knowing help is just a discreet tap away."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-gray-200 rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1554151228-14d9def656ec?auto=format&fit=crop&q=80&w=100&h=100" alt="Elena R." />
                </div>
                <div>
                  <p className="font-bold text-[#1a1a1a]">Elena R.</p>
                  <p className="text-xs text-gray-500">Realtor, 42</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8">
            Reclaim Your Peace of Mind Today
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Try MySentry risk-free for 7 days. No contracts. Cancel anytime. Because your safety shouldn't be a subscription you regret.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/pricing">
              <Button size="lg" className="h-16 px-10 rounded-full text-xl font-bold bg-white text-primary hover:bg-gray-100 shadow-xl">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/features">
              <Button size="lg" variant="outline" className="h-16 px-10 rounded-full text-xl font-bold border-2 border-white text-white hover:bg-white hover:text-primary">
                Explore Features
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-sm text-white/80">
            Works with Apple Watch Series 4+ and Samsung Galaxy Watch 4+
          </p>
        </div>
      </section>
    </Layout>
  );
}
