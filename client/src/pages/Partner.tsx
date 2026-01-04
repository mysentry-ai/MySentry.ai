import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Building2, Users, ShieldCheck, BarChart3 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export const Partner = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("Application submitted successfully! We'll be in touch soon.");
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#1a1a1a]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/partner-hero.jpg" 
            alt="MySentry Partner Network" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black mb-6 font-barlow uppercase tracking-wide text-white leading-tight"
            >
              Join the <span className="text-[#4ADE80]">Dealer Network</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200 mb-8 font-light leading-relaxed"
            >
              Expand your business with the world's first AI-powered personal assistant for employee safety, security, and wellness.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button 
                size="lg"
                className="bg-[#4ADE80] text-[#022c22] hover:bg-[#22c55e] font-bold uppercase tracking-wider text-lg h-14 px-8 rounded-full"
                onClick={() => document.getElementById('partner-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Become a Partner
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-black font-barlow uppercase text-[#004F7B] mb-4">Why Become an Authorized Dealer?</h2>
            <p className="text-xl text-gray-600">Position yourself as a leader in AI-driven safety solutions.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Building2,
                title: "Industry-Specific Solutions",
                description: "Tackle safety challenges in healthcare, retail, hospitality, and more with features supporting discreet exits and real-time monitoring."
              },
              {
                icon: ShieldCheck,
                title: "Comprehensive Safety Suite",
                description: "Offer a complete safety platform ensuring your clients' employees are protected against workplace hazards and emergencies."
              },
              {
                icon: Users,
                title: "Exclusive Dealer Support",
                description: "Benefit from personalized training, marketing support, and dedicated account management to help you grow."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#e8f5e9] rounded-2xl flex items-center justify-center mb-6 text-[#386758]">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-barlow uppercase text-[#1a1a1a] mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3-Step Process (The Plan) */}
      <section className="py-24 bg-[#004F7B] text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black font-barlow uppercase mb-12 leading-tight">
                Dealer Dashboard & <br/><span className="text-[#4ADE80]">Capabilities</span>
              </h2>
              
              <div className="space-y-12">
                {[
                  {
                    step: "01",
                    title: "Hierarchical Management",
                    description: "Build your partner network, including child dealers & organizations, each with its own set of licenses & user base."
                  },
                  {
                    step: "02",
                    title: "License Allocation",
                    description: "Easily grant or revoke access to MySentry and track allocated licenses in real time."
                  },
                  {
                    step: "03",
                    title: "Account Control",
                    description: "Instantly manage application access to ensure security and compliance."
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="flex gap-6"
                  >
                    <div className="text-5xl font-black text-[#4ADE80]/20 font-barlow">{item.step}</div>
                    <div>
                      <h3 className="text-2xl font-bold font-barlow uppercase mb-2">{item.title}</h3>
                      <p className="text-gray-300 leading-relaxed max-w-md">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#4ADE80] rounded-3xl blur-3xl opacity-20" />
              <img 
                src="/images/partner-dashboard.jpg" 
                alt="Dealer Dashboard Interface" 
                className="relative rounded-3xl shadow-2xl border border-white/10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="partner-form" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black font-barlow uppercase text-[#004F7B] mb-4">Join Our Dealer Network</h2>
              <p className="text-gray-600">Fill in the form below, and our experts will guide you through your journey with MySentry.ai</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="companyName">Company Name *</Label>
                  <Input id="companyName" required placeholder="Enter company name" className="h-12 bg-gray-50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Company Website *</Label>
                  <Input id="website" required placeholder="https://" className="h-12 bg-gray-50" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Company Address *</Label>
                <Input id="address" required placeholder="Street address" className="h-12 bg-gray-50" />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="city">City *</Label>
                  <Input id="city" required placeholder="City" className="h-12 bg-gray-50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State/Province *</Label>
                  <Input id="state" required placeholder="State" className="h-12 bg-gray-50" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="zip">Zip/Postal Code *</Label>
                  <Input id="zip" required placeholder="Zip code" className="h-12 bg-gray-50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country *</Label>
                  <Input id="country" required placeholder="Country" className="h-12 bg-gray-50" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="contactName">Contact Name *</Label>
                  <Input id="contactName" required placeholder="Full name" className="h-12 bg-gray-50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Main Phone *</Label>
                  <Input id="phone" required type="tel" placeholder="+1 (555) 000-0000" className="h-12 bg-gray-50" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" required type="email" placeholder="name@company.com" className="h-12 bg-gray-50" />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full h-14 text-lg font-bold uppercase tracking-wider bg-[#004F7B] hover:bg-[#003855] text-white rounded-xl transition-all"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
              
              <p className="text-center text-sm text-gray-400">
                By submitting this form, you agree to be contacted by MySentry.ai regarding your application.
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partner;
