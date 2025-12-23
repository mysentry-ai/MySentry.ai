import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Heart, Shield, Users, Smartphone, MapPin, Bell, CheckCircle2, ArrowRight, Activity, Watch, Lock, Home, Car, Clock, AlertCircle, School } from "lucide-react";
import ExpandableCarousel from "@/components/ExpandableCarousel";
import { motion } from "framer-motion";

export default function Families() {
  return (
    <Layout>
      <SEO 
        title="Families" 
        description="Protect your whole family with MySentry. Real-time location, crash detection, and health alerts for everyone you love."
      />
      
      {/* HERO SECTION - Standardized with Features Page Style */}
      <section className="relative min-h-[80vh] flex items-center bg-[#e8f5e9] pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
           {/* Relatable Hero Image */}
           <img 
             src="/images/family-hero-base.jpg" 
             alt="Happy family outdoors" 
             className="absolute inset-0 w-full h-full object-cover opacity-60"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-[#e8f5e9] via-[#e8f5e9]/90 to-transparent z-10" />
        </div>

        <div className="container relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
              For Modern Families
            </span>
            <h1 className="text-6xl md:text-8xl font-heading font-bold uppercase leading-[0.9] tracking-tighter mb-8 text-[#1a1a1a]">
              Protect Everyone<br/>
              <span className="text-gray-600">You Love.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed max-w-2xl font-medium">
              Kids at school? Parents at home? Teenager driving? MySentry connects your whole family. See real-time locations, get crash alerts, and know instantly if a loved one needs help.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/pricing">
                <Button className="bg-primary text-white hover:bg-primary/90 font-bold uppercase tracking-wider rounded-full px-10 h-16 text-lg transition-all hover:scale-105 shadow-xl flex items-center justify-center" onClick={() => window.scrollTo(0, 0)}>
                  START 7-DAY FREE TRIAL
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PEACE: The Problem & Empathy */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="text-red-500 font-bold tracking-wider uppercase text-sm mb-4 block">The Reality</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1a1a1a] mb-8 leading-tight">
              Worrying about family <br/>
              <span className="text-gray-400">is exhausting.</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              "Did they get there safe?" "Why aren't they answering?" "Is Dad okay alone?" The constant check-ins and anxiety take a toll on everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-14 w-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. Where are they?</h3>
              <p className="text-gray-600 leading-relaxed">
                Texting "where are you" is annoying for teens and stressful for parents. You need a way to know they're safe without nagging.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-14 w-14 rounded-2xl bg-red-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Car className="h-7 w-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Driving is dangerous.</h3>
              <p className="text-gray-600 leading-relaxed">
                Car accidents are the #1 cause of death for teens. If a crash happens, you need to know instantly, not hours later.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-14 w-14 rounded-2xl bg-green-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. Aging parents.</h3>
              <p className="text-gray-600 leading-relaxed">
                You can't be with your elderly parents 24/7. You need to know if they fall or have a health issue, even when you're at work.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PEACE: The Solution (Expandable Carousel) */}
      <section className="py-32 bg-[#f8fafc] relative overflow-hidden">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">Family Safety</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1a1a1a] mb-6 leading-tight">
              Connected & Protected
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              See how MySentry brings your family closer and keeps everyone safe, no matter where they are.
            </p>
          </div>

          <ExpandableCarousel 
            items={[
              {
                id: "kids-school",
                title: "Kids at School",
                subtitle: "Safe arrival notifications",
                description: "Get notified automatically when your kids arrive at school or return home. Know they're safe without needing to text or call them constantly.",
                image: "/images/challenge-family-kids-school.jpg",
                icon: School,
                tag: "School Safety",
                link: "/features",
                ctaText: "Learn More"
              },
              {
                id: "teen-driving",
                title: "Teen Drivers",
                subtitle: "Peace of mind on the road",
                description: "Monitor your teen's driving habits and get instant alerts if a crash occurs. We send help immediately, even if they can't call for it themselves.",
                image: "/images/challenge-family-teen-driving.jpg",
                icon: Car,
                tag: "Driving Safety",
                link: "/features",
                ctaText: "See How It Works"
              },
              {
                id: "elderly-parents",
                title: "Elderly Parents",
                subtitle: "Care from a distance",
                description: "Keep an eye on aging parents who live alone. Receive alerts for falls or health issues so you can intervene quickly, even from miles away.",
                image: "/images/challenge-senior-living-alone.jpg",
                icon: Heart,
                tag: "Senior Care",
                link: "/features",
                ctaText: "Learn More"
              },
              {
                id: "voice-panic",
                title: "Voice Panic Alarm",
                subtitle: "Help is just a word away",
                description: "In an emergency, your child or teen can simply say a safe word to trigger an immediate alert. No need to reach for a phone or press a button.",
                image: "/images/challenge-family-voice-panic.jpg",
                icon: Smartphone,
                tag: "Voice Activation",
                link: "/features",
                ctaText: "Explore Features"
              },
              {
                id: "emergency-contacts",
                title: "Emergency Network",
                subtitle: "Connected protection",
                description: "If one family member triggers an alert, everyone is notified instantly. Coordinate help and stay connected during any emergency situation.",
                image: "/images/feature-emergency-contacts.jpg",
                icon: Users,
                tag: "Emergency Contacts",
                link: "/features",
                ctaText: "Learn More"
              }
            ]} 
          />
        </div>
      </section>

      {/* PEACE: The Change & End Result */}
      <section className="py-32 bg-[#e8f5e9] relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">The Transformation</span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-[#1a1a1a] mb-8 leading-tight">
              From anxious to <br/>
              <span className="text-primary">assured.</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Stop worrying about where everyone is or if they're safe. MySentry gives you the peace of mind to let your family live their lives, knowing you're always connected.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Total Protection",
                desc: "Crash detection, fall detection, and panic button for every family member."
              },
              {
                icon: MapPin,
                title: "Always Connected",
                desc: "See where everyone is at a glance without having to call or text."
              },
              {
                icon: Heart,
                title: "Health Insights",
                desc: "Monitor vital signs for elderly parents or family members with health conditions."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="bg-[#1a1a1a] rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
              <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[80%] rounded-full bg-primary blur-[150px]" />
            </div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-5xl md:text-7xl font-heading font-bold text-white mb-8 uppercase tracking-tight">
                Protect Your Family Today.
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Start your 7-day free trial. One subscription covers the whole family.
              </p>
              <Link href="/pricing">
                <Button className="bg-primary text-white hover:bg-primary/90 font-bold uppercase tracking-wider rounded-full px-12 h-20 text-xl transition-all hover:scale-105 shadow-xl" onClick={() => window.scrollTo(0, 0)}>
                  START 7-DAY FREE TRIAL
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
