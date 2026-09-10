import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-[#1a1a1a]">
      <SEO />
      <Navbar />
      
      {/* Hero Section - Standardized */}
      <section className="relative min-h-[80vh] flex items-center bg-[#e8f5e9] pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/cdn/QVNDUrAMsxMgicVc.jpg" 
            alt="MySentry Vision" 
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            loading="lazy"
            width="1920" height="1080"
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
              To help individuals, families, and workforces prepare for safety concerns with supported alerts, Safety Checks, optional wellness signals, and professional monitoring availability.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-10 bg-[#e8f5e9] rounded-3xl hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-bold mb-4 text-[#386758] font-barlow uppercase">Protect</h3>
                <p className="text-gray-600 text-lg">Advanced detection for falls, crashes, and health anomalies.</p>
              </div>
              <div className="p-10 bg-[#e8f5e9] rounded-3xl hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-bold mb-4 text-[#386758] font-barlow uppercase">Connect</h3>
                <p className="text-gray-600 text-lg">Configurable check-ins and alerts for the contacts a user chooses, subject to enabled permissions and service availability.</p>
              </div>
              <div className="p-10 bg-[#e8f5e9] rounded-3xl hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-bold mb-4 text-[#386758] font-barlow uppercase">Plan</h3>
                <p className="text-gray-600 text-lg">Practical information that helps people choose a safety routine that fits their circumstances.</p>
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
                  <h3 className="text-2xl font-bold mb-3 text-[#d6f4ff] font-barlow uppercase">Support depends on your setup.</h3>
                  <p className="text-lg opacity-90 leading-relaxed">Professional monitoring is available for eligible plans and alerts, subject to device, settings, permissions, connectivity, region, and service availability.</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-[#d6f4ff] font-barlow uppercase">Privacy is part of setup.</h3>
                  <p className="text-lg opacity-90 leading-relaxed">Users control eligible permissions and configured contacts. Review the Privacy Policy for how the App may collect, use, and share information.</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-[#d6f4ff] font-barlow uppercase">We document what is available.</h3>
                  <p className="text-lg opacity-90 leading-relaxed">Features and guidance are updated as support details are confirmed. MySentry does not guarantee detection, contact, escalation, response, or outcome.</p>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
               <img 
                src="/images/cdn/QRKKwqMiGpYMAFfR.jpg" 
                alt="MySentry Promise" 
                className="w-full h-full object-cover"
                loading="lazy"
                width="800" height="600"
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
