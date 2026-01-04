import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <div className="min-h-screen bg-[#e8f5e9] font-sans text-[#1a1a1a]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/about-hero.jpg" 
            alt="MySentry Vision" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6 font-barlow uppercase tracking-wide"
          >
            Our Vision
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed"
          >
            A world where safety is proactive, health is understood, and no one ever has to face an emergency alone.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 font-barlow uppercase text-[#004F7B]">Our Mission</h2>
            <p className="text-2xl leading-relaxed text-gray-700 mb-12">
              To empower individuals, families, and workforces with intelligent, 24/7 safety and health monitoring that bridges the gap between detection and response.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="p-8 bg-[#e8f5e9] rounded-2xl">
                <h3 className="text-xl font-bold mb-4 text-[#386758]">Protect</h3>
                <p className="text-gray-600">Advanced detection for falls, crashes, and health anomalies.</p>
              </div>
              <div className="p-8 bg-[#e8f5e9] rounded-2xl">
                <h3 className="text-xl font-bold mb-4 text-[#386758]">Connect</h3>
                <p className="text-gray-600">Seamless communication with loved ones and emergency services.</p>
              </div>
              <div className="p-8 bg-[#e8f5e9] rounded-2xl">
                <h3 className="text-xl font-bold mb-4 text-[#386758]">Empower</h3>
                <p className="text-gray-600">Data-driven insights to live longer, healthier, and more independent lives.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="py-24 bg-[#004F7B] text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 font-barlow uppercase">Our Promise</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-[#6AD990]">We are always there.</h3>
                  <p className="text-lg opacity-90">24/7 professional monitoring means you never have to worry about "what if."</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-[#6AD990]">We respect your privacy.</h3>
                  <p className="text-lg opacity-90">Your health and location data is yours. We only share it when it matters most, during an emergency.</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-[#6AD990]">We innovate for you.</h3>
                  <p className="text-lg opacity-90">Continuously evolving our AI to detect more, predict better, and respond faster.</p>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
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
