import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { HeroHeading, HeroText, LabelText, SectionHeading, CardHeading, BodyText } from "@/components/ui/typography";
import { Link } from "wouter";
import ResponsiveImage from "@/components/ResponsiveImage";
import { Heart, MapPin, AlertCircle, Video, Shield, Clock, CheckCircle2, ArrowRight, Eye, Smartphone, TrendingDown, Zap, Car, Activity, Watch, Users, Lock, Building2 } from "lucide-react";
import ExpandableCarousel, { CarouselItem } from "@/components/ExpandableCarousel";
import GetStartedSection from "@/components/GetStartedSection";
import { motion } from "framer-motion";

export default function Females() {
  const femaleChallenges: CarouselItem[] = [
    {
      id: "jogging-safety",
      title: "Jogging Alone",
      subtitle: "Run with confidence",
      description: "Feel safe on your evening runs. Our GPS tracking and instant panic button mean you're never truly alone, even on secluded paths.",
      image: "/images/challenge-female-jogging-night.jpg",
      icon: Activity,
      tag: "Active Safety",
      link: "/how-it-works",
      ctaText: "Learn More"
    },
    {
      id: "dating-safety",
      title: "Dating Safety",
      subtitle: "Meet new people securely",
      description: "Use MeetSafe mode to set check-in timers for dates. If you don't check in, we automatically alert your emergency contacts and monitoring center.",
      image: "/images/challenge-female-dating.jpg",
      icon: Heart,
      tag: "MeetSafe",
      link: "/how-it-works",
      ctaText: "See How It Works"
    },
    {
      id: "rideshare-safety",
      title: "Rideshare Safety",
      subtitle: "Travel without fear",
      description: "Share your live trip status with loved ones. If your ride goes off-route or stops unexpectedly, we can intervene immediately.",
      image: "/images/challenge-female-rideshare.jpg",
      icon: Car,
      tag: "Travel Safe",
      link: "/how-it-works",
      ctaText: "Learn More"
    },
    {
      id: "discreet-alert",
      title: "Discreet Alerts",
      subtitle: "Call for help silently",
      description: "In uncomfortable situations, trigger a silent alarm without raising suspicion. Our agents listen in and send help while you stay safe.",
      image: "/images/feature-voice-panic.jpg",
      icon: Shield,
      tag: "Silent Panic",
      link: "/how-it-works",
      ctaText: "Learn More"
    },
    {
      id: "campus-safety",
      title: "Campus Safety",
      subtitle: "Walk home safely",
      description: "Late night study session? Walking back to your dorm? MySentry is your virtual companion, ensuring you get home safe every time.",
      image: "/images/feature-emergency-contacts.jpg",
      icon: MapPin,
      tag: "Student Safety",
      link: "/how-it-works",
      ctaText: "Learn More"
    },
    {
      id: "solo-travel",
      title: "Solo Travel",
      subtitle: "Explore the world freely",
      description: "Traveling alone is empowering but comes with risks. MySentry works globally, providing you with 24/7 protection wherever your adventures take you.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2574&auto=format&fit=crop",
      icon: MapPin,
      tag: "Travel Freedom",
      link: "/how-it-works",
      ctaText: "Travel Safe"
    },
    {
      id: "night-shift",
      title: "Night Shift",
      subtitle: "Safe commute home",
      description: "Leaving work late at night? Our 'Walk With Me' feature lets agents virtually escort you to your car or front door via live video.",
      image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2669&auto=format&fit=crop",
      icon: Clock,
      tag: "Work Safety",
      link: "/how-it-works",
      ctaText: "Commute Safe"
    },
    {
      id: "domestic-violence",
      title: "Domestic Safety",
      subtitle: "Discreet help at home",
      description: "If you're in a volatile situation at home, use a voice code or silent button press to summon police without alerting the aggressor.",
      image: "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?q=80&w=2671&auto=format&fit=crop",
      icon: Shield,
      tag: "Home Protection",
      link: "/how-it-works",
      ctaText: "Get Help"
    },
    {
      id: "online-meeting",
      title: "Online Marketplace",
      subtitle: "Safe transactions",
      description: "Meeting someone to buy or sell items? Set a safety timer and share your location so friends know exactly where you are and when you should be done.",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2670&auto=format&fit=crop",
      icon: Users,
      tag: "Transaction Safety",
      link: "/how-it-works",
      ctaText: "Trade Safely"
    },
    {
      id: "parking-garage",
      title: "Parking Garages",
      subtitle: "Navigate dark spaces",
      description: "Parking garages can be intimidating. Keep MySentry active on your wrist, ready to trigger a loud siren or silent alarm instantly.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
      icon: Car,
      tag: "Urban Safety",
      link: "/how-it-works",
      ctaText: "Stay Alert"
    },
    {
      id: "hotel-safety",
      title: "Hotel Safety",
      subtitle: "Secure your room",
      description: "Staying in a hotel alone? Use MySentry as a portable panic button by your bedside for added peace of mind while you sleep.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670&auto=format&fit=crop",
      icon: Lock,
      tag: "Travel Security",
      link: "/how-it-works",
      ctaText: "Sleep Soundly"
    },
    {
      id: "public-transit",
      title: "Public Transit",
      subtitle: "Ride with confidence",
      description: "Subways and buses can be unpredictable. With MySentry, you have a direct line to security professionals who can see what you see.",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2670&auto=format&fit=crop",
      icon: MapPin,
      tag: "Commuter Safety",
      link: "/how-it-works",
      ctaText: "Ride Safe"
    },
    {
      id: "real-estate",
      title: "Real Estate Agents",
      subtitle: "Show homes safely",
      description: "Showing properties to strangers? MySentry provides a safety net, allowing you to signal for help discreetly if a client makes you uncomfortable.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2573&auto=format&fit=crop",
      icon: Building2,
      tag: "Professional Safety",
      link: "/how-it-works",
      ctaText: "Work Safe"
    },
    {
      id: "health-emergency",
      title: "Health Emergencies",
      subtitle: "Sudden illness response",
      description: "If you have a medical condition or severe allergy, MySentry can speak for you when you can't, sending your medical info to first responders.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop",
      icon: Heart,
      tag: "Medical Alert",
      link: "/how-it-works",
      ctaText: "Be Prepared"
    },
    {
      id: "stalking",
      title: "Stalking Protection",
      subtitle: "Document and deter",
      description: "Feeling followed? Activate MySentry to record video evidence and log your location, building a case while summoning immediate help.",
      image: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=2670&auto=format&fit=crop",
      icon: Eye,
      tag: "Personal Security",
      link: "/how-it-works",
      ctaText: "Get Protection"
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Females" 
        description="Stay safe everywhere with MySentry. Discreet panic button, live location sharing, and 24/7 monitoring for women."
      />
      
      {/* HERO SECTION - Standardized with Features Page Style */}
      <section className="relative min-h-[80vh] flex items-center bg-[#e8f5e9] pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
           {/* Relatable Hero Image */}
           <ResponsiveImage 
             src="/images/hero-female-active.jpg" 
             alt="Confident woman walking in city" 
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
            <LabelText variant="primary">
              Personal Safety Reimagined
            </LabelText>
            <HeroHeading>
              Freedom To Go<br/>
              <span className="text-muted-foreground">Anywhere.</span>
            </HeroHeading>
            <HeroText>
              Walking alone at night? Meeting someone new? Traveling solo? MySentry is your silent guardian. We detect threats, share your location, and alert 24/7 professional monitoring with live video so help can be dispatched fast.
            </HeroText>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/pricing"
                className="bg-primary text-white hover:bg-primary/90 font-bold uppercase tracking-wider rounded-full px-10 h-16 text-lg transition-all hover:scale-105 shadow-xl flex items-center justify-center" 
                onClick={() => window.scrollTo(0, 0)}
              >
                START 7-DAY FREE TRIAL
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PEACE: The Problem & Empathy */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <LabelText className="text-red-500">The Reality</LabelText>
            <SectionHeading>
              Safety shouldn't be a <br/>
              <span className="text-muted-foreground">constant worry.</span>
            </SectionHeading>
            <BodyText className="text-xl">
              You check your surroundings. You hold your keys. You share your location. But if something actually happens, who will help you in that split second?
            </BodyText>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-14 w-14 rounded-2xl bg-red-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <AlertCircle className="h-7 w-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. Phones are too slow.</h3>
              <p className="text-gray-600 leading-relaxed">
                In an emergency, you don't have time to unlock your phone and dial 911. You need a way to call for help instantly and discreetly.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-14 w-14 rounded-2xl bg-purple-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Eye className="h-7 w-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Solo activities feel risky.</h3>
              <p className="text-gray-600 leading-relaxed">
                Running alone? Taking an Uber late at night? Meeting a stranger from an app? The "what if" is always in the back of your mind.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-14 w-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. Location isn't enough.</h3>
              <p className="text-gray-600 leading-relaxed">
                Sharing your location is great, but it doesn't stop an attack. You need someone who can see what's happening and send police immediately.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PEACE: The Solution (Expandable Carousel) */}
      <section className="py-32 bg-[#f8fafc] relative overflow-hidden">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-purple-600 font-bold tracking-wider uppercase text-sm mb-4 block">Empowered Safety</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1a1a1a] mb-6 leading-tight">
              Protection That Fits Your Life
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover how MySentry gives you the freedom to live confidently with features designed for modern women.
            </p>
          </div>

          <ExpandableCarousel items={femaleChallenges} />
        </div>
      </section>

      {/* Get Started Section */}
      <GetStartedSection />

      {/* PEACE: The Change & End Result */}
      <section className="py-32 bg-[#e8f5e9] relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">The Transformation</span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-[#1a1a1a] mb-8 leading-tight">
              From cautious to <br/>
              <span className="text-primary">confident.</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Don't let fear hold you back. With MySentry, you can live your life fully, knowing that you're never truly alone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Total Protection",
                desc: "Panic button, crash detection, and MeetSafe mode for every situation."
              },
              {
                icon: Video,
                title: "Live Evidence",
                desc: "Video and audio are recorded and streamed to agents, providing crucial evidence."
              },
              {
                icon: Heart,
                title: "Peace of Mind",
                desc: "Your loved ones know you're safe, and you know help is always there."
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
          <div className="bg-[#003d60] rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
              <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[80%] rounded-full bg-primary blur-[150px]" />
            </div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-5xl md:text-7xl font-heading font-bold text-white mb-8 uppercase tracking-tight">
                Take Back Your Freedom.
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Start your 7-day free trial. Safety that fits your lifestyle.
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
