import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ArrowRight, Building2, Users, ShieldCheck, BarChart3, ChevronDown, Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export const Partner = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setCompletedSteps([...completedSteps, currentStep]);
    setCurrentStep(currentStep + 1);
  };

  const handleBackStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("Application submitted successfully! We'll be in touch soon.");
    setIsSubmitting(false);
    // Reset form logic would go here
    window.location.href = "mailto:support@MySentry.ai?subject=New Partner Application";
  };

  const StepHeader = ({ step, title, isActive, isCompleted }: { step: number, title: string, isActive: boolean, isCompleted: boolean }) => (
    <div 
      className={cn(
        "flex items-center justify-between p-6 cursor-pointer transition-colors",
        isActive ? "bg-[#004F7B] text-white" : "bg-gray-50 text-gray-600 hover:bg-gray-100",
        isCompleted ? "bg-[#e8f5e9] text-[#386758]" : ""
      )}
      onClick={() => {
        if (isCompleted || step < currentStep) setCurrentStep(step);
      }}
    >
      <div className="flex items-center gap-4">
        <div className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-2",
          isActive ? "border-white bg-white text-[#004F7B]" : "border-current",
          isCompleted ? "border-[#386758] bg-[#386758] text-white" : ""
        )}>
          {isCompleted ? <Check className="w-4 h-4" /> : step}
        </div>
        <h3 className="text-lg font-bold uppercase tracking-wide">{title}</h3>
      </div>
      <ChevronDown className={cn("w-5 h-5 transition-transform", isActive ? "rotate-180" : "")} />
    </div>
  );

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
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="p-8 md:p-12 border-b border-gray-100 text-center">
              <h2 className="text-3xl md:text-4xl font-black font-barlow uppercase text-[#004F7B] mb-4">Join Our Dealer Network</h2>
              <p className="text-gray-600">Complete the application below to get started.</p>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Step 1: Company Information */}
              <div className="border-b border-gray-100">
                <StepHeader 
                  step={1} 
                  title="Company Information" 
                  isActive={currentStep === 1} 
                  isCompleted={completedSteps.includes(1)} 
                />
                <AnimatePresence>
                  {currentStep === 1 && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-8 space-y-6">
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
                        <div className="flex justify-end pt-4">
                          <Button 
                            type="button" 
                            onClick={handleNextStep}
                            className="bg-[#004F7B] text-white px-8 h-12 rounded-xl font-bold uppercase tracking-wide hover:bg-[#003855]"
                          >
                            Next Step
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Step 2: Primary Contact Information */}
              <div className="border-b border-gray-100">
                <StepHeader 
                  step={2} 
                  title="Primary Contact Information" 
                  isActive={currentStep === 2} 
                  isCompleted={completedSteps.includes(2)} 
                />
                <AnimatePresence>
                  {currentStep === 2 && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-8 space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First Name *</Label>
                            <Input id="firstName" required placeholder="First name" className="h-12 bg-gray-50" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name *</Label>
                            <Input id="lastName" required placeholder="Last name" className="h-12 bg-gray-50" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input id="email" required type="email" placeholder="name@company.com" className="h-12 bg-gray-50" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input id="phone" required type="tel" placeholder="+1 (555) 000-0000" className="h-12 bg-gray-50" />
                        </div>
                        <div className="flex justify-between pt-4">
                          <Button 
                            type="button" 
                            variant="outline"
                            onClick={handleBackStep}
                            className="px-8 h-12 rounded-xl font-bold uppercase tracking-wide"
                          >
                            Back
                          </Button>
                          <Button 
                            type="button" 
                            onClick={handleNextStep}
                            className="bg-[#004F7B] text-white px-8 h-12 rounded-xl font-bold uppercase tracking-wide hover:bg-[#003855]"
                          >
                            Next Step
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Step 3: Licensing Information */}
              <div>
                <StepHeader 
                  step={3} 
                  title="Licensing Information" 
                  isActive={currentStep === 3} 
                  isCompleted={completedSteps.includes(3)} 
                />
                <AnimatePresence>
                  {currentStep === 3 && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-8 space-y-6">
                        <p className="text-sm text-gray-500 italic">* At least one State Sales Tax ID is required</p>
                        
                        <div className="space-y-2">
                          <Label htmlFor="taxId">State Sales Tax ID *</Label>
                          <Input id="taxId" required placeholder="Enter Tax ID" className="h-12 bg-gray-50" />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="taxState">State/Province *</Label>
                          <Input id="taxState" required placeholder="State/Province" className="h-12 bg-gray-50" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="licenseNum">Additional License Number</Label>
                          <Input id="licenseNum" placeholder="Optional" className="h-12 bg-gray-50" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="licenseState">State/Province</Label>
                          <Input id="licenseState" placeholder="State/Province" className="h-12 bg-gray-50" />
                        </div>

                        <div className="flex justify-between pt-8">
                          <Button 
                            type="button" 
                            variant="outline"
                            onClick={handleBackStep}
                            className="px-8 h-12 rounded-xl font-bold uppercase tracking-wide"
                          >
                            Back
                          </Button>
                          <Button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="bg-[#004F7B] text-white px-12 h-12 rounded-xl font-bold uppercase tracking-wide hover:bg-[#003855]"
                          >
                            {isSubmitting ? "Submitting..." : "Submit Application"}
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partner;
