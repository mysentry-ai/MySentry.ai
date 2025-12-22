import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Activity, HeartPulse, ShieldAlert, CheckCircle2, Play, Star } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Layout>
      <SEO 
        title="Home" 
        description="MySentry turns your smartwatch into a 24/7 personal safety device with professional monitoring, fall detection, and health alerts. Live freedom without fear."
      />
      
      {/* HERO SECTION - Whoop Style: Full Screen Video Background */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10" /> {/* Darker overlay for better text readability */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
          >
            <source src="https://videos.pexels.com/video-files/8637185/8637185-sd_640_360_25fps.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 container h-full flex flex-col justify-center items-start pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl space-y-8"
          >
            <h1 className="text-5xl md:text-8xl font-heading font-bold leading-[0.9] tracking-tighter text-white uppercase drop-shadow-lg">
              Don't Face a<br/>
              <span className="text-primary drop-shadow-md">Health or Safety</span><br/>
              Emergency Alone.
            </h1>
            
            <p className="text-xl md:text-2xl text-white max-w-2xl font-medium leading-relaxed drop-shadow-md">
              MySentry turns your smartwatch and phone into real-time safety and health monitoring. 24/7 professional monitoring dispatch help fast when you need it most.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Link href="/pricing">
                <Button className="bg-white text-black hover:bg-gray-100 font-bold uppercase tracking-wider rounded-full px-10 h-16 text-lg transition-all hover:scale-105 shadow-xl">
                  Start 7-Day Free Trial
                </Button>
              </Link>
              <Link href="/features">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 hover:text-white font-bold uppercase tracking-wider rounded-full px-10 h-16 text-lg backdrop-blur-sm shadow-lg">
                  <Play className="mr-2 h-5 w-5 fill-current" />
                  See How It Works
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VALUE PROPOSITION - High Contrast Section */}
      <section className="py-24 bg-black text-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4 border-t border-white/20 pt-8">
              <ShieldAlert className="h-10 w-10 text-primary" />
              <h3 className="text-2xl font-heading font-bold uppercase tracking-wide">Fall & Crash Detection</h3>
              <p className="text-gray-400 leading-relaxed">
                Advanced algorithms detect hard falls and car crashes instantly, alerting our monitoring center even if you can't speak.
              </p>
            </div>
            <div className="space-y-4 border-t border-white/20 pt-8">
              <HeartPulse className="h-10 w-10 text-primary" />
              <h3 className="text-2xl font-heading font-bold uppercase tracking-wide">Health Vitals Monitoring</h3>
              <p className="text-gray-400 leading-relaxed">
                Continuous monitoring of heart rate and vital signs. We detect abnormalities before they become emergencies.
              </p>
            </div>
            <div className="space-y-4 border-t border-white/20 pt-8">
              <Activity className="h-10 w-10 text-primary" />
              <h3 className="text-2xl font-heading font-bold uppercase tracking-wide">24/7 Professional Response</h3>
              <p className="text-gray-400 leading-relaxed">
                Our certified monitoring center is always watching. We dispatch police, fire, or EMS with your exact location and health data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE HIGHLIGHT - Split Layout */}
      <section className="py-0 bg-white">
        <div className="grid lg:grid-cols-2 min-h-[80vh]">
          <div className="bg-gray-100 relative overflow-hidden group">
            <img 
              src="/images/home-protection-bubble.png" 
              alt="Live Monitoring" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center p-12 lg:p-24 space-y-8">
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Total Protection</span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold leading-tight uppercase tracking-tight">
              We Watch<br/>So You Can Live.
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Most safety devices are reactive. MySentry is proactive. We analyze data from your smartwatch in real-time to identify risks and intervene immediately.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Automatic Fall Detection",
                "24/7 Professional Monitoring",
                "Real-time GPS Location",
                "Live Audio & Video Connection"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-lg font-medium">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="pt-8">
              <Link href="/features">
                <Button className="bg-black text-white hover:bg-gray-800 font-bold uppercase tracking-wider rounded-full px-8 h-14 text-base">
                  Explore Features
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - Carousel Style */}
      <section className="py-32 bg-gray-50 overflow-hidden">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight mb-6">
              Trusted by Families Everywhere
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from people who found peace of mind with MySentry.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Mom fell. Help arrived in 3 minutes. That's the difference between recovery and permanent damage.",
                author: "Margaret Chen",
                role: "Daughter of Senior"
              },
              {
                quote: "We went from hoping someone finds an injured worker to knowing instantly. That's peace of mind.",
                author: "James Rodriguez",
                role: "Construction Manager"
              },
              {
                quote: "I can hike alone again. My family knows I'm safe. That's freedom.",
                author: "Sarah Williams",
                role: "Active Senior"
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-xl font-medium leading-relaxed mb-8 text-gray-800">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-bold text-lg uppercase tracking-wide">{testimonial.author}</div>
                  <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION - Bold & Direct */}
      <section className="py-32 bg-primary text-white text-center">
        <div className="container max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase tracking-tighter mb-8">
            Start Your Free Trial Today
          </h2>
          <p className="text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
            Experience the peace of mind that comes with 24/7 professional protection. No contracts, cancel anytime.
          </p>
          <Link href="/pricing">
            <Button className="bg-white text-primary hover:bg-gray-100 font-bold uppercase tracking-wider rounded-full px-12 h-20 text-xl shadow-2xl hover:scale-105 transition-all">
              Start 7-Day Free Trial
            </Button>
          </Link>
          <p className="mt-6 text-sm font-medium opacity-80 uppercase tracking-widest">
            No credit card required for setup
          </p>
        </div>
      </section>
    </Layout>
  );
}
