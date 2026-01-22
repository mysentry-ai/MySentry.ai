import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-[#1a1a1a]">
      <Navbar />
      
      {/* Hero Section - Standardized */}
      <section className="relative min-h-[80vh] flex items-center bg-[#e8f5e9] pt-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/about-hero.jpg" 
            alt="MySentry Vision" 
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#e8f5e9] via-[#e8f5e9]/90 to-transparent z-10" />
        </div>
        
        <div className="relative z-20 container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-[#386758] font-bold tracking-widest uppercase text-sm mb-4 block">
              About Us
            </span>
            <h1 className="text-[36px] md:text-[45px] font-normal mb-8 font-barlow uppercase leading-[0.9] tracking-tighter text-[#1a1a1a]">
              Our Vision
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed max-w-2xl font-medium">
              A world where safety is proactive, health is understood, and no one ever has to face an emergency alone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-8 font-barlow uppercase text-[#386758]">Our Mission</h2>
            <p className="text-2xl leading-relaxed text-gray-700 mb-16 font-light">
              To empower individuals, families, and workforces with intelligent, 24/7 safety and health monitoring that bridges the gap between detection and response.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-10 bg-[#e8f5e9] rounded-3xl hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-bold mb-4 text-[#386758] font-barlow uppercase">Protect</h3>
                <p className="text-gray-600 text-lg">Advanced detection for falls, crashes, and health anomalies.</p>
              </div>
              <div className="p-10 bg-[#e8f5e9] rounded-3xl hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-bold mb-4 text-[#386758] font-barlow uppercase">Connect</h3>
                <p className="text-gray-600 text-lg">Seamless communication with loved ones and emergency services.</p>
              </div>
              <div className="p-10 bg-[#e8f5e9] rounded-3xl hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-bold mb-4 text-[#386758] font-barlow uppercase">Empower</h3>
                <p className="text-gray-600 text-lg">Data-driven insights to live longer, healthier, and more independent lives.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="py-24 bg-[#386758] text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-12 font-barlow uppercase">Our Promise</h2>
              <div className="space-y-10">
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-[#4ADE80] font-barlow uppercase">We are always there.</h3>
                  <p className="text-lg opacity-90 leading-relaxed">24/7 professional monitoring means you never have to worry about "what if."</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-[#4ADE80] font-barlow uppercase">We respect your privacy.</h3>
                  <p className="text-lg opacity-90 leading-relaxed">Your health and location data is yours. We only share it when it matters most, during an emergency.</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-[#4ADE80] font-barlow uppercase">We innovate for you.</h3>
                  <p className="text-lg opacity-90 leading-relaxed">Continuously evolving our AI to detect more, predict better, and respond faster.</p>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
               <img 
                src="/images/blog-senior-care.jpg" 
                alt="MySentry Promise" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
