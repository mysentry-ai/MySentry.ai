import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Shield, Activity, Users, Building2, Heart, AlertTriangle, Phone, MapPin, Video, Lock, Clock, Smartphone, Watch, Menu } from "lucide-react";
import { motion } from "framer-motion";
import ExpandableCarousel, { CarouselItem } from "@/components/ExpandableCarousel";
import HowItWorksDemo from "@/components/HowItWorksDemo";
import PricingSection from "@/components/PricingSection";
import UGCSection from "@/components/UGCSection";
import WhatWeProvide from "@/components/WhatWeProvide";
import SafetySimulation from "@/components/SafetySimulation";

export default function Home() {
  const scrollToPricing = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const peaceChallenges: CarouselItem[] = [
    // Individual Challenges
    {
      id: "individual-unwitnessed",
      tag: "Individual Safety",
      title: "The Unwitnessed Accident",
      subtitle: "When you can't call for help, who will?",
      description: "You're hiking, running, or working alone, and you suffer a severe fall or injury where no one can see you. It's terrifying to think about lying injured for hours, unable to call for help. MySentry's Fall Detection and Panic Alarm automatically detect the incident and send live video, location, and vitals to 24/7 pros and your family instantly.",
      image: "/images/challenge-individual-unwitnessed.jpg",
      link: "/features",
      ctaText: "See Fall Detection"
    },
    {
      id: "individual-silent-health",
      tag: "Health Monitoring",
      title: "The Silent Health Crisis",
      subtitle: "Don't let a hidden condition catch you off guard.",
      description: "You feel fine, but your body is silently struggling with a heart condition or infection that could strike suddenly. By the time you feel symptoms, it might be too late. MySentry's Real-Time Health Monitoring tracks HRV, SpO2, and heart rate 24/7, alerting you to abnormalities before they become emergencies.",
      image: "/images/challenge-individual-silent-health.jpg",
      link: "/features",
      ctaText: "View Health Features",
      widget: "heart-rate"
    },
    {
      id: "individual-commute",
      tag: "Personal Safety",
      title: "The Vulnerable Commute",
      subtitle: "Walking alone shouldn't feel like a risk.",
      description: "You take rideshares or walk to your car late at night, feeling exposed and vulnerable. A predator or an accident can happen in a split second. MySentry's Voice-Activated Panic lets you trigger a silent alarm just by speaking, instantly connecting you to a live agent with video evidence.",
      image: "/images/challenge-individual-commute.jpg",
      link: "/females",
      ctaText: "Explore Safety Tools"
    },
    
    // Family Challenges
    {
      id: "family-teen-driver",
      tag: "Family Peace of Mind",
      title: "The Teen Driver Anxiety",
      subtitle: "Stop worrying every time they take the keys.",
      description: "Your teenager is a new driver, and you constantly worry about them getting into a crash without you knowing. If they crash on a lonely road, they might be unconscious. MySentry's Crash Detection instantly recognizes a collision and alerts 24/7 responders and parents with the exact location and live video.",
      image: "/images/challenge-family-teen-driving.jpg",
      link: "/families",
      ctaText: "Protect Your Teen"
    },
    {
      id: "family-sandwich",
      tag: "Caregiver Support",
      title: "The Sandwich Generation Guilt",
      subtitle: "Caring for parents and kids without burning out.",
      description: "You're caring for aging parents and your own children, feeling overwhelmed by the impossibility of being everywhere at once. The constant 'what if' stress is exhausting. MySentry's Smart Connectivity keeps you informed with automated check-ins and alerts, so you only need to worry when it really matters.",
      image: "/images/challenge-family-sandwich.jpg",
      link: "/families",
      ctaText: "Support Your Family"
    },
    {
      id: "family-latchkey",
      tag: "Child Safety",
      title: "The Latchkey Kid Worry",
      subtitle: "Bridge the gap between school and home.",
      description: "Your child walks home from school or stays home alone, and you worry about their safety during that gap. A simple text isn't enough if an emergency happens. MySentry's Live Video & GPS lets you instantly check in or receive alerts if they leave a safe zone or trigger a panic alarm.",
      image: "/images/challenge-family-latchkey.jpg",
      link: "/families",
      ctaText: "Secure Their Safety"
    },

    // Female Challenges
    {
      id: "female-bad-date",
      tag: "Dating Safety",
      title: "The Bad Date Scenario",
      subtitle: "A discreet exit strategy when you need it most.",
      description: "You're on a date that starts to feel unsafe, but you don't want to escalate things visibly. Being trapped in an uncomfortable situation can quickly turn dangerous. MySentry's Discreet Panic Button on your watch lets you signal for help silently, alerting monitoring agents to listen in and dispatch police if needed.",
      image: "/images/challenge-female-bad-date.jpg",
      link: "/females",
      ctaText: "See Discreet Panic"
    },
    {
      id: "female-solo-runner",
      tag: "Active Safety",
      title: "The Solo Runner Fear",
      subtitle: "Run with confidence, never alone.",
      description: "You love running outdoors, but you're hyper-aware of your surroundings and the risk of being followed. That shadow behind you makes your heart race. MySentry's 24/7 Professional Monitoring travels with you, ready to intervene with live voice and video the moment you feel threatened.",
      image: "/images/challenge-female-solo-runner.jpg",
      link: "/females",
      ctaText: "Run Safer"
    },
    {
      id: "female-living-alone",
      tag: "Home Safety",
      title: "The Living Alone Vulnerability",
      subtitle: "Turn your solitude into security.",
      description: "You live alone and worry about a break-in or a medical emergency happening when no one is around. If you choke or fall, there's no one to hear you. MySentry's Voice-Activated Help means you can summon emergency services from anywhere in your home, hands-free, 24/7.",
      image: "/images/challenge-female-living-alone.jpg",
      link: "/females",
      ctaText: "Secure Your Home"
    },

    // Senior Challenges
    {
      id: "senior-independence",
      tag: "Senior Independence",
      title: "The Loss of Independence Fear",
      subtitle: "Stay in the home you love, safely.",
      description: "You're afraid that a single fall or health scare will force you out of your home and into assisted living. You've built a life you love, and losing your freedom is devastating. MySentry's Near-Fall Detection identifies stability issues early, helping you prevent falls so you can stay in your own home safely for years longer.",
      image: "/images/challenge-senior-independence.jpg",
      link: "/seniors",
      ctaText: "Maintain Independence"
    },
    {
      id: "senior-burden",
      tag: "Family Peace",
      title: "The Burden on Family Anxiety",
      subtitle: "Be their parent, not their patient.",
      description: "You don't want to be a burden on your children, constantly calling them for help or making them worry. You hesitate to call for help even when you need it. MySentry's Automated Health Alerts notify family only when necessary, so they know you're okay without constant check-ins.",
      image: "/images/challenge-senior-burden.jpg",
      link: "/seniors",
      ctaText: "Reduce the Burden"
    },
    {
      id: "senior-hidden-heart",
      tag: "Heart Health",
      title: "The Hidden Heart Risk",
      subtitle: "Let your watch watch over your heart.",
      description: "As you age, your heart health becomes unpredictable. A silent heart attack or stroke can happen while you sleep, with no warning. MySentry's Continuous Vitals Monitoring tracks your heart rate and oxygen levels, alerting pros to critical changes instantly.",
      image: "/images/challenge-senior-hidden-heart.jpg",
      link: "/seniors",
      ctaText: "Monitor Your Heart",
      widget: "heart-rate"
    },

    // Employee Challenges
    {
      id: "employee-remote",
      tag: "Lone Worker",
      title: "The Remote Worker Risk",
      subtitle: "Extend your duty of care beyond the office.",
      description: "Your employees work alone in the field, visiting client homes or remote sites where supervision is impossible. If an accident happens, you might not know for hours. MySentry's Lone Worker Protection provides a panic button and fall detection that connects directly to your security team or 911.",
      image: "/images/challenge-employee-remote.jpg",
      link: "/employers",
      ctaText: "Protect Lone Workers"
    },
    {
      id: "employee-health",
      tag: "Workforce Health",
      title: "The Health Liability Blindspot",
      subtitle: "Proactively protect your people and your business.",
      description: "Your workforce is aging or physically active, and a workplace heart attack or heat stroke could be catastrophic. A preventable medical incident can lead to massive liability. MySentry's Health Vitals Monitoring can detect signs of heat stress or cardiac distress early, allowing for intervention before an incident occurs.",
      image: "/images/challenge-employee-health.jpg",
      link: "/employers",
      ctaText: "Reduce Liability"
    },
    {
      id: "employee-culture",
      tag: "Safety Culture",
      title: "The Safety Culture Gap",
      subtitle: "Automate your emergency response.",
      description: "You have safety protocols, but in the heat of the moment, employees might panic. Relying on an employee to dial a number is a weak link. MySentry's Automatic Incident Reporting triggers instantly upon a fall, crash, or panic press, ensuring protocol is followed every single time.",
      image: "/images/challenge-employee-culture.jpg",
      link: "/employers",
      ctaText: "Automate Safety"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="flex items-center gap-2">
          <img src="/images/logo.png" alt="MySentry" className="h-12 w-auto" />
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="/features" className="text-white/90 hover:text-white font-medium transition-colors">Features</Link>
          <Link href="/females" className="text-white/90 hover:text-white font-medium transition-colors">For Females</Link>
          <Link href="/seniors" className="text-white/90 hover:text-white font-medium transition-colors">For Seniors</Link>
          <Link href="/families" className="text-white/90 hover:text-white font-medium transition-colors">For Families</Link>
          <Link href="/employers" className="text-white/90 hover:text-white font-medium transition-colors">For Employers</Link>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-white hover:bg-white/10 hidden md:inline-flex">
            Log in
          </Button>
          <Link href="/pricing">
            <Button className="bg-white text-[#386758] hover:bg-white/90 font-semibold">
              Get Started
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden text-white">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://videos.pexels.com/video-files/8637185/8637185-sd_640_360_25fps.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-[#386758]/40" />
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 max-w-7xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold text-white uppercase tracking-tighter mb-6 drop-shadow-2xl"
          >
            DON'T FACE A<br />
            HEALTH OR SAFETY<br />
            EMERGENCY<br />
            ALONE.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl font-medium leading-relaxed drop-shadow-lg mb-10"
          >
            MySentry turns your phone and smartwatch into a 24/7 safety and health companion. 
            We monitor, detect, and respond so help reaches you fast, even if you can't ask for it.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 w-full max-w-md sm:max-w-none justify-center"
          >
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-6 h-auto font-bold uppercase tracking-wider w-full sm:w-auto whitespace-normal text-center"
              style={{ color: '#000000' }}
              onClick={scrollToPricing}
            >
              Start 7-Day Free Trial
            </Button>
            <Link href="/how-it-works" className="w-full sm:w-auto">
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 h-auto font-bold uppercase tracking-wider w-full sm:w-auto"
              >
                See How It Works
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 bg-[#e8f5e9]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#386758]/10 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-10 h-10 text-[#386758]" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-[#1a1a1a] mb-4 uppercase tracking-wide">Safety</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Panic Alarm, Fall Detection, Crash Detection, and Live Video Evidence protect you in any emergency.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#386758]/10 rounded-full flex items-center justify-center mb-6">
                <Activity className="w-10 h-10 text-[#386758]" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-[#1a1a1a] mb-4 uppercase tracking-wide">Health</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Real-Time Monitoring, Personalized Baselines, and Near-Fall Detection keep you ahead of health risks.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#386758]/10 rounded-full flex items-center justify-center mb-6">
                <Users className="w-10 h-10 text-[#386758]" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-[#1a1a1a] mb-4 uppercase tracking-wide">Connectivity</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Smart Alerts, 5 Emergency Contacts, and Location Updates keep your loved ones informed and connected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is MySentry For? Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
          <h2 className="text-5xl md:text-7xl font-heading font-bold text-[#1a1a1a] mb-6 uppercase tracking-tighter">
            Who Is MySentry For?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored protection for every stage of life. Select a challenge below to see how MySentry solves it.
          </p>
        </div>
        
        <ExpandableCarousel items={peaceChallenges} />
      </section>

      {/* How It Works Demo Section */}
      <HowItWorksDemo />

      {/* Safety Simulation Section */}
      <SafetySimulation />

      {/* UGC / Testimonials Section */}
      <UGCSection />

      {/* What We Provide Section */}
      <WhatWeProvide />

      {/* Pricing Section */}
      <PricingSection />

      {/* Final CTA Section */}
      <section className="py-24 bg-[#1a1a1a] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-5xl md:text-7xl font-heading font-bold mb-8 uppercase tracking-tighter">
            Ready to Protect What Matters Most?
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Join thousands of families who trust MySentry for 24/7 safety and health monitoring.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-gray-200 text-xl px-12 py-8 h-auto font-bold uppercase tracking-wider rounded-full"
            style={{ color: '#000000' }}
            onClick={scrollToPricing}
          >
            Start 7-Day Free Trial
          </Button>
          <p className="mt-6 text-sm text-gray-500">
            No commitment. Cancel anytime. Credit card needed for trial but not charged for first 7 days.
          </p>
        </div>
      </section>
    </div>
  );
}
