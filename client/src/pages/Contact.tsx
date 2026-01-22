import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare, AlertCircle, CheckCircle2 } from 'lucide-react';
import { cn } from "@/lib/utils";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    subject: false,
    message: false
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  useEffect(() => {
    const newErrors = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    let isValid = true;

    if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (formData.subject.trim().length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters long';
      isValid = false;
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
      isValid = false;
    }

    setErrors(newErrors);
    setIsFormValid(isValid);
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#1a1a1a]">
      <Navbar />
      
      {/* Hero Section - Standardized */}
      <section className="relative min-h-[80vh] flex items-center bg-[#e8f5e9] pt-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/contact-hero.jpg" 
            alt="Contact MySentry Support" 
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
              Contact Us
            </span>
            <h1 className="text-[55px] font-black mb-8 font-barlow uppercase leading-[0.9] tracking-tighter text-[#1a1a1a]">
              We're Here<br/>
              <span className="text-gray-600">To Help.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed max-w-2xl font-medium">
              Whether you have a question about our technology, need support, or just want to say hello, our team is ready to listen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Details */}
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-8 font-barlow uppercase text-[#386758]">Get in Touch</h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Our dedicated support team is available to assist you with any inquiries. We pride ourselves on quick, helpful responses.
              </p>
              
              <div className="space-y-10">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-[#e8f5e9] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-7 h-7 text-[#386758]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-[#1a1a1a] font-barlow uppercase">Call Us</h3>
                    <p className="text-gray-600 mb-1 text-lg">Andrew Caldwell, Chief Revenue Officer</p>
                    <a href="tel:+16143615073" className="text-xl font-bold text-[#386758] hover:underline">
                      +1 (614) 361-5073
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-[#e8f5e9] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-7 h-7 text-[#386758]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-[#1a1a1a] font-barlow uppercase">Email Us</h3>
                    <p className="text-gray-600 mb-1 text-lg">For general inquiries and support:</p>
                    <a href="mailto:support@MySentry.ai" className="text-xl font-bold text-[#386758] hover:underline">
                      support@MySentry.ai
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-[#e8f5e9] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-[#386758]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-[#1a1a1a] font-barlow uppercase">Headquarters</h3>
                    <p className="text-gray-600 text-lg">
                      MySentry.ai<br />
                      Alexandria, Virginia, USA
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <MessageSquare className="w-8 h-8 text-[#386758]" />
                <h3 className="text-3xl font-black text-[#1a1a1a] font-barlow uppercase">Send a Message</h3>
              </div>
              
              <form className="space-y-6" action="mailto:support@MySentry.ai" method="post" encType="text/plain">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-[#1a1a1a] mb-2 uppercase tracking-wide">Name</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        id="name" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={cn(
                          "w-full px-4 py-3 rounded-xl border outline-none transition-all bg-gray-50 h-12",
                          touched.name && errors.name 
                            ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20" 
                            : "border-gray-200 focus:border-[#386758] focus:ring-2 focus:ring-[#386758]/20",
                          touched.name && !errors.name && "border-green-500"
                        )}
                        placeholder="Your Name"
                        required
                      />
                      {touched.name && !errors.name && (
                        <CheckCircle2 className="absolute right-3 top-3.5 w-5 h-5 text-green-500" />
                      )}
                    </div>
                    {touched.name && errors.name && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-[#1a1a1a] mb-2 uppercase tracking-wide">Email</label>
                    <div className="relative">
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={cn(
                          "w-full px-4 py-3 rounded-xl border outline-none transition-all bg-gray-50 h-12",
                          touched.email && errors.email 
                            ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20" 
                            : "border-gray-200 focus:border-[#386758] focus:ring-2 focus:ring-[#386758]/20",
                          touched.email && !errors.email && "border-green-500"
                        )}
                        placeholder="your@email.com"
                        required
                      />
                      {touched.email && !errors.email && (
                        <CheckCircle2 className="absolute right-3 top-3.5 w-5 h-5 text-green-500" />
                      )}
                    </div>
                    {touched.email && errors.email && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-[#1a1a1a] mb-2 uppercase tracking-wide">Subject</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={cn(
                        "w-full px-4 py-3 rounded-xl border outline-none transition-all bg-gray-50 h-12",
                        touched.subject && errors.subject 
                          ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20" 
                          : "border-gray-200 focus:border-[#386758] focus:ring-2 focus:ring-[#386758]/20",
                        touched.subject && !errors.subject && "border-green-500"
                      )}
                      placeholder="How can we help?"
                      required
                    />
                    {touched.subject && !errors.subject && (
                      <CheckCircle2 className="absolute right-3 top-3.5 w-5 h-5 text-green-500" />
                    )}
                  </div>
                  {touched.subject && errors.subject && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.subject}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-[#1a1a1a] mb-2 uppercase tracking-wide">Message</label>
                  <div className="relative">
                    <textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      rows={5}
                      className={cn(
                        "w-full px-4 py-3 rounded-xl border outline-none transition-all bg-gray-50 resize-none",
                        touched.message && errors.message 
                          ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20" 
                          : "border-gray-200 focus:border-[#386758] focus:ring-2 focus:ring-[#386758]/20",
                        touched.message && !errors.message && "border-green-500"
                      )}
                      placeholder="Tell us more about your inquiry..."
                      required
                    />
                    {touched.message && !errors.message && (
                      <CheckCircle2 className="absolute right-3 top-3.5 w-5 h-5 text-green-500" />
                    )}
                  </div>
                  {touched.message && errors.message && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>
                
                <button 
                  type="submit" 
                  disabled={!isFormValid}
                  className={cn(
                    "w-full py-4 rounded-xl font-bold uppercase tracking-wide transition-all duration-300",
                    isFormValid 
                      ? "bg-[#386758] text-white hover:bg-[#2d5246] shadow-lg hover:shadow-xl transform hover:-translate-y-1" 
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  )}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
