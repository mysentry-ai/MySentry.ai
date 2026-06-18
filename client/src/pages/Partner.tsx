import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ArrowRight, Building2, Users, ShieldCheck, BarChart3, ChevronDown, Check, AlertCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { HeroHeading, HeroText, LabelText, SectionHeading, CardHeading } from "@/components/ui/typography";
import HeroSection from "@/components/HeroSection";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { trpc } from "@/lib/trpc";

export const Partner = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [formError, setFormError] = useState<string | null>(null);
  
  // tRPC mutation for partner application
  const partnerMutation = trpc.partner.submit.useMutation({
    onSuccess: () => {
      toast.success("Application submitted successfully! We'll be in touch soon.");
      setIsSubmitting(false);
      // Reset form
      setFormData({
        companyName: '',
        website: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        taxId: '',
        taxState: '',
        licenseNum: '',
        licenseState: ''
      });
      setCurrentStep(1);
      setCompletedSteps([]);
    },
    onError: (error) => {
      toast.error(error.message || "Failed to submit application. Please try again.");
      setIsSubmitting(false);
    }
  });
  
  // Form State
  const [formData, setFormData] = useState({
    companyName: '',
    website: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    taxId: '',
    taxState: '',
    licenseNum: '',
    licenseState: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    // Clear error when user starts typing
    if (formError) setFormError(null);
  };

  const validateStep1 = () => {
    const required = ['companyName', 'website', 'address', 'city', 'state', 'zip', 'country'];
    const missing = required.filter(field => !formData[field as keyof typeof formData]);
    
    if (missing.length > 0) {
      setFormError("Please fill in all required company information.");
      return false;
    }

    // Website validation
    const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    if (!urlRegex.test(formData.website)) {
      setFormError("Please enter a valid website URL (e.g., mysentry.ai).");
      return false;
    }

    // Zip code validation (US 5 digit or 5+4, or generic alphanumeric for international)
    const zipRegex = /^\d{5}(-\d{4})?$|^[A-Za-z0-9\s-]{3,10}$/;
    if (!zipRegex.test(formData.zip)) {
      setFormError("Please enter a valid Zip/Postal Code.");
      return false;
    }

    return true;
  };

  const validateStep2 = () => {
    const required = ['firstName', 'lastName', 'email', 'phone'];
    const missing = required.filter(field => !formData[field as keyof typeof formData]);
    
    if (missing.length > 0) {
      setFormError("Please fill in all required contact information.");
      return false;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormError("Please enter a valid email address.");
      return false;
    }
    
    return true;
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    
    if (currentStep === 1 && !validateStep1()) return;
    if (currentStep === 2 && !validateStep2()) return;

    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep]);
    }
    setCurrentStep(currentStep + 1);
  };

  const handleBackStep = () => {
    setFormError(null);
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError(null);
    
    // Validate Step 3
    if (!formData.taxId || !formData.taxState) {
      setFormError("Please fill in all required licensing information.");
      return;
    }

    setIsSubmitting(true);
    
    // Submit to backend via tRPC
    partnerMutation.mutate({
      companyName: formData.companyName,
      contactName: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      website: formData.website,
      partnerType: "dealer", // Default partner type for this form
      industry: "security", // Default industry
      companySize: "", // Not collected in this form
      currentSolutions: `Address: ${formData.address}, ${formData.city}, ${formData.state} ${formData.zip}, ${formData.country}`,
      targetMarket: "",
      expectedVolume: "",
      additionalInfo: `Tax ID: ${formData.taxId} (${formData.taxState}), License: ${formData.licenseNum || 'N/A'} (${formData.licenseState || 'N/A'})`,
      howHeard: "",
    });
  };

  const StepHeader = ({ step, title, isActive, isCompleted }: { step: number, title: string, isActive: boolean, isCompleted: boolean }) => (
    <div 
      className={cn(
        "flex items-center justify-between p-6 cursor-pointer transition-colors",
        "bg-[#004F7B] text-white border-b border-[#003d60]",
        isCompleted ? "bg-[#e0f2fe] text-[#004F7B]" : ""
      )}
      onClick={() => {
        // Only allow clicking if step is completed or it's a previous step
        if (completedSteps.includes(step) || step < currentStep) {
          setCurrentStep(step);
        }
      }}
    >
      <div className="flex items-center gap-4">
        <div className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all duration-300",
          isActive ? "border-[#4ADE80] bg-[#4ADE80] text-[#022c22]" : "border-white text-white",
          isCompleted ? "border-[#004F7B] bg-[#004F7B] text-white" : ""
        )}>
          {isCompleted ? <Check className="w-5 h-5" /> : step}
        </div>
        <h3 className="text-lg font-bold uppercase tracking-wide font-barlow">{title}</h3>
      </div>
      <ChevronDown className={cn("w-5 h-5 transition-transform", isActive ? "rotate-180" : "")} />
    </div>
  );

  return (
    <div className="min-h-screen bg-white font-sans text-[#1a1a1a]">
      <SEO />
      <Navbar />
      
      <div className="relative">
        <HeroSection
          label="Partner Program"
          imageSrc="https://files.manuscdn.com/user_upload_by_module/session_file/310519663247484611/PNeMojefSAcSjgAW.jpg"
          imageAlt="MySentry Partner Network"
          showCta={false}
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              className="bg-[#004F7B] text-white hover:bg-[#003d60] font-bold uppercase tracking-wider text-lg h-14 px-8 rounded-full shadow-lg hover:shadow-xl transition-all"
              onClick={() => document.getElementById('partner-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Become a Partner
            </Button>
          </div>
        </HeroSection>
      </div>

      {/* Value Proposition */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionHeading variant="primary">Why Become an Authorized Dealer?</SectionHeading>
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
                <div className="w-16 h-16 bg-[#e0f2fe] rounded-2xl flex items-center justify-center mb-6 text-[#004F7B]">
                  <item.icon className="w-8 h-8" />
                </div>
                <CardHeading>{item.title}</CardHeading>
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
                    description: "Easily distribute and manage licenses across your client portfolio."
                  },
                  {
                    step: "03",
                    title: "User Management",
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
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663247484611/UoakOftbovNQJNav.jpg" 
                alt="Dealer Dashboard Interface" 
                className="relative rounded-3xl shadow-2xl border border-white/10"
                loading="lazy"
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

            {/* Error Message Display - Top of Form */}
            <AnimatePresence>
              {formError && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="bg-[#004F7B] text-white px-8 py-4 flex items-center gap-3"
                >
                  <AlertCircle className="w-5 h-5 flex-shrink-0 text-[#4ADE80]" />
                  <p className="font-medium">{formError}</p>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} noValidate>
              {/* Step 1: Company Information */}
              <div className="border-b border-gray-100">
                <StepHeader 
                  step={1} 
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
                            <Label htmlFor="companyName" className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wide">Company Name *</Label>
                            <Input id="companyName" value={formData.companyName} onChange={handleInputChange} required placeholder="Enter company name" className="h-12 bg-gray-50 border-gray-200 focus:border-[#004F7B] focus:ring-2 focus:ring-[#004F7B]/20" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="website" className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wide">Company Website *</Label>
                            <Input id="website" value={formData.website} onChange={handleInputChange} required placeholder="https://" className="h-12 bg-gray-50 border-gray-200 focus:border-[#004F7B] focus:ring-2 focus:ring-[#004F7B]/20" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="address" className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wide">Company Address *</Label>
                          <Input id="address" value={formData.address} onChange={handleInputChange} required placeholder="Street address" className="h-12 bg-gray-50 border-gray-200 focus:border-[#004F7B] focus:ring-2 focus:ring-[#004F7B]/20" />
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="city" className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wide">City *</Label>
                            <Input id="city" value={formData.city} onChange={handleInputChange} required placeholder="City" className="h-12 bg-gray-50 border-gray-200 focus:border-[#004F7B] focus:ring-2 focus:ring-[#004F7B]/20" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="state" className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wide">State/Province *</Label>
                            <Input id="state" value={formData.state} onChange={handleInputChange} required placeholder="State" className="h-12 bg-gray-50 border-gray-200 focus:border-[#004F7B] focus:ring-2 focus:ring-[#004F7B]/20" />
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="zip" className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wide">Zip/Postal Code *</Label>
                            <Input id="zip" value={formData.zip} onChange={handleInputChange} required placeholder="Zip code" className="h-12 bg-gray-50 border-gray-200 focus:border-[#004F7B] focus:ring-2 focus:ring-[#004F7B]/20" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="country" className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wide">Country *</Label>
                            <Input id="country" value={formData.country} onChange={handleInputChange} required placeholder="Country" className="h-12 bg-gray-50 border-gray-200 focus:border-[#004F7B] focus:ring-2 focus:ring-[#004F7B]/20" />
                          </div>
                        </div>
                        <div className="flex justify-end pt-4">
                          <Button 
                            type="button" 
                            onClick={handleNextStep}
                            className="bg-[#004F7B] text-white px-8 h-12 rounded-xl font-bold uppercase tracking-wide hover:bg-[#2d5246]"
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
                            <Label htmlFor="firstName" className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wide">First Name *</Label>
                            <Input id="firstName" value={formData.firstName} onChange={handleInputChange} required placeholder="First name" className="h-12 bg-gray-50 border-gray-200 focus:border-[#004F7B] focus:ring-2 focus:ring-[#004F7B]/20" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName" className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wide">Last Name *</Label>
                            <Input id="lastName" value={formData.lastName} onChange={handleInputChange} required placeholder="Last name" className="h-12 bg-gray-50 border-gray-200 focus:border-[#004F7B] focus:ring-2 focus:ring-[#004F7B]/20" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wide">Email Address *</Label>
                          <Input id="email" value={formData.email} onChange={handleInputChange} required type="email" placeholder="name@company.com" className="h-12 bg-gray-50 border-gray-200 focus:border-[#004F7B] focus:ring-2 focus:ring-[#004F7B]/20" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wide">Phone Number *</Label>
                          <Input id="phone" value={formData.phone} onChange={handleInputChange} required type="tel" placeholder="+1 (555) 000-0000" className="h-12 bg-gray-50 border-gray-200 focus:border-[#004F7B] focus:ring-2 focus:ring-[#004F7B]/20" />
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
                            className="bg-[#004F7B] text-white px-8 h-12 rounded-xl font-bold uppercase tracking-wide hover:bg-[#2d5246]"
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
                          <Label htmlFor="taxId" className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wide">State Sales Tax ID *</Label>
                          <Input id="taxId" value={formData.taxId} onChange={handleInputChange} required placeholder="Enter Tax ID" className="h-12 bg-gray-50 border-gray-200 focus:border-[#004F7B] focus:ring-2 focus:ring-[#004F7B]/20" />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="taxState" className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wide">State/Province *</Label>
                          <Input id="taxState" value={formData.taxState} onChange={handleInputChange} required placeholder="State/Province" className="h-12 bg-gray-50 border-gray-200 focus:border-[#004F7B] focus:ring-2 focus:ring-[#004F7B]/20" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="licenseNum" className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wide">State Security License #</Label>
                          <Input id="licenseNum" value={formData.licenseNum} onChange={handleInputChange} placeholder="Optional" className="h-12 bg-gray-50 border-gray-200 focus:border-[#004F7B] focus:ring-2 focus:ring-[#004F7B]/20" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="licenseState" className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wide">State/Province</Label>
                          <Input id="licenseState" value={formData.licenseState} onChange={handleInputChange} placeholder="State/Province" className="h-12 bg-gray-50 border-gray-200 focus:border-[#004F7B] focus:ring-2 focus:ring-[#004F7B]/20" />
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
                            className="bg-[#004F7B] text-white px-12 h-12 rounded-xl font-bold uppercase tracking-wide hover:bg-[#2d5246]"
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
