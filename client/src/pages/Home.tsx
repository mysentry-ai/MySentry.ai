import { useState, useEffect } from "react";
import { Link } from "wouter";
import ResponsiveImage from "@/components/ResponsiveImage";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import { ArrowRight, Check, Shield, Activity, Users, Building2, Heart, AlertTriangle, Phone, MapPin, Video, Lock, Clock, Smartphone, Watch, Menu } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import ExpandableCarousel, { CarouselItem } from "@/components/ExpandableCarousel";
import HowItWorksDemo from "@/components/HowItWorksDemo";
import ComparisonSection from "@/components/ComparisonSection";
import TestimonialSection from "@/components/TestimonialSection";
import WhatWeProvide from "@/components/WhatWeProvide";


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
      link: "/how-it-works#fall-detection",
      ctaText: "See Fall Detection"
    },
    {
      id: "individual-silent-health",
      tag: "Health Monitoring",
      title: "The Silent Health Crisis",
      subtitle: "Don't let a hidden condition catch you off guard.",
      description: "You feel fine, but your body is silently struggling with a heart condition or infection that could strike suddenly. By the time you feel symptoms, it might be too late. MySentry's Real-Time Health Monitoring tracks HRV, SpO2, and heart rate 24/7, alerting you to abnormalities before they become emergencies.",
      image: "/images/challenge-individual-silent-health.jpg",
      link: "/how-it-works#health-monitoring",
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
      link: "/how-it-works#panic-alarm",
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
      link: "/how-it-works#crash-detection",
      ctaText: "Protect Your Teen"
    },
    {
      id: "family-sandwich",
      tag: "Caregiver Support",
      title: "The Sandwich Generation Guilt",
      subtitle: "Caring for parents and kids without burning out.",
      description: "You're caring for aging parents and your own children, feeling overwhelmed by the impossibility of being everywhere at once. The constant 'what if' stress is exhausting. MySentry's Smart Connectivity keeps you informed with automated check-ins and alerts, so you only need to worry when it really matters.",
      image: "/images/challenge-family-sandwich.jpg",
      link: "/how-it-works#smart-connectivity",
      ctaText: "Support Your Family"
    },
    {
      id: "family-latchkey",
      tag: "Child Safety",
      title: "The Latchkey Kid Worry",
      subtitle: "Bridge the gap between school and home.",
      description: "Your child walks home from school or stays home alone, and you worry about their safety during that gap. A simple text isn't enough if an emergency happens. MySentry's Live Video & GPS lets you instantly check in or receive alerts if they leave a safe zone or trigger a panic alarm.",
      image: "/images/challenge-family-latchkey.jpg",
      link: "/how-it-works#live-video",
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
      link: "/how-it-works#meetsafe",
      ctaText: "See Discreet Panic"
    },
    {
      id: "female-solo-runner",
      tag: "Active Safety",
      title: "The Solo Runner Fear",
      subtitle: "Run with confidence, never alone.",
      description: "You love running outdoors, but you're hyper-aware of your surroundings and the risk of being followed. That shadow behind you makes your heart race. MySentry's 24/7 Professional Monitoring travels with you, ready to intervene with live voice and video the moment you feel threatened.",
      image: "/images/challenge-female-solo-runner.jpg",
      link: "/how-it-works#live-video",
      ctaText: "Run Safer"
    },
    {
      id: "female-living-alone",
      tag: "Home Safety",
      title: "The Living Alone Vulnerability",
      subtitle: "Turn your solitude into security.",
      description: "You live alone and worry about a break-in or a medical emergency happening when no one is around. If you choke or fall, there's no one to hear you. MySentry's Voice-Activated Help means you can summon emergency services from anywhere in your home, hands-free, 24/7.",
      image: "/images/challenge-female-living-alone.jpg",
      link: "/how-it-works#panic-alarm",
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
      link: "/how-it-works#near-fall-detection",
      ctaText: "Maintain Independence"
    },
    {
      id: "senior-burden",
      tag: "Family Peace",
      title: "The Burden on Family Anxiety",
      subtitle: "Be their parent, not their patient.",
      description: "You don't want to be a burden on your children, constantly calling them for help or making them worry. You hesitate to call for help even when you need it. MySentry's Automated Health Alerts notify family only when necessary, so they know you're okay without constant check-ins.",
      image: "/images/challenge-senior-burden.jpg",
      link: "/how-it-works#smart-connectivity",
      ctaText: "Reduce the Burden"
    },
    {
      id: "senior-hidden-heart",
      tag: "Heart Health",
      title: "The Hidden Heart Risk",
      subtitle: "Let your watch watch over your heart.",
      description: "As you age, your heart health becomes unpredictable. A silent heart attack or stroke can happen while you sleep, with no warning. MySentry's Continuous Vitals Monitoring tracks your heart rate and oxygen levels, alerting pros to critical changes instantly.",
      image: "/images/challenge-senior-hidden-heart.jpg",
      link: "/how-it-works#health-monitoring",
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
      link: "/how-it-works#panic-alarm",
      ctaText: "Protect Lone Workers"
    },
    {
      id: "employee-health",
      tag: "Workforce Health",
      title: "The Health Liability Blindspot",
      subtitle: "Proactively protect your people and your business.",
      description: "Your workforce is aging or physically active, and a workplace heart attack or heat stroke could be catastrophic. A preventable medical incident can lead to massive liability. MySentry's Health Vitals Monitoring can detect signs of heat stress or cardiac distress early, allowing for intervention before an incident occurs.",
      image: "/images/challenge-employee-health.jpg",
      link: "/how-it-works#health-monitoring",
      ctaText: "Reduce Liability"
    },
    {
      id: "employee-culture",
      tag: "Safety Culture",
      title: "The Safety Culture Gap",
      subtitle: "Automate your emergency response.",
      description: "You have safety protocols, but in the heat of the moment, employees might panic. Relying on an employee to dial a number is a weak link. MySentry's Automatic Incident Reporting triggers instantly upon a fall, crash, or panic press, ensuring protocol is followed every single time.",
      image: "/images/challenge-employee-culture.jpg",
      link: "/how-it-works#panic-alarm",
      ctaText: "Automate Safety"
    }
  ];

  return (
    <Layout>
      <HeroSection
        label="24/7 Safety & Health Monitoring with Emergency Response"
        title={<>Never Face a Safety or<br/><span className="text-gray-600">Health Emergency Alone.</span></>}
        description="MySentry turns your smart phone and smart wearables into 24/7 safety and health monitoring so help is dispatched fast when you can’t respond."
        imageSrc="/images/families-hero.jpg"
        imageAlt="Family safety and connection"
      />

      {/* How It Works Demo */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">How It Works</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1a1a1a]">
              Protection in 4 Simple Steps
            </h2>
          </div>
          <HowItWorksDemo />
        </div>
      </section>

      {/* Who Is MySentry For? (Expandable Carousel) */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Who We Protect</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1a1a1a] mb-6">
              Safety for Every Stage of Life
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Whether you're an active senior, a concerned parent, or an employer, MySentry adapts to your specific safety needs.
            </p>
          </div>
          
          <ExpandableCarousel items={peaceChallenges} />
        </div>
      </section>

      {/* What We Provide */}
      <WhatWeProvide />

      {/* Testimonials */}
      <TestimonialSection />

      {/* Comparison Section */}
      <ComparisonSection />
    </Layout>
  );
}
