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
    <div className="min-h-screen bg-[#e8f5e9] font-sans text-[#1a1a1a]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/contact-hero.jpg" 
            alt="Contact MySentry Support" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white pt-20 md:pt-0">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6 font-barlow uppercase tracking-wide"
          >
            We're Here to Help
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed"
          >
            Whether you have a question about our technology, need support, or just want to say hello, our team is ready to listen.
          </motion.p>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Details */}
            <div>
              <h2 className="text-4xl font-bold mb-8 font-barlow uppercase text-[#004F7B]">Get in Touch</h2>
              <p className="text-lg text-gray-600 mb-12">
                Our dedicated support team is available to assist you with any inquiries. We pride ourselves on quick, helpful responses.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#e8f5e9] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#386758]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#1a1a1a] font-barlow uppercase">Call Us</h3>
                    <p className="text-gray-600 mb-1">Andrew Caldwell, Chief Revenue Officer</p>
                    <a href="tel:+16143615073" className="text-lg font-medium text-[#004F7B] hover:underline">
                      +1 (614) 361-5073
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#e8f5e9] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#386758]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#1a1a1a] font-barlow uppercase">Email Us</h3>
                    <p className="text-gray-600 mb-1">For general inquiries and support:</p>
                    <a href="mailto:support@MySentry.ai" className="text-lg font-medium text-[#004F7B] hover:underline">
                      support@MySentry.ai
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#e8f5e9] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#386758]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#1a1a1a] font-barlow uppercase">Headquarters</h3>
                    <p className="text-gray-600">
                      MySentry.ai<br />
                      Columbus, Ohio, USA
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <MessageSquare className="w-8 h-8 text-[#386758]" />
                <h3 className="text-2xl font-bold text-[#1a1a1a] font-barlow uppercase">Send a Message</h3>
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
                          "w-full px-4 py-3 rounded-lg border outline-none transition-all bg-gray-50",
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
                          "w-full px-4 py-3 rounded-lg border outline-none transition-all bg-gray-50",
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
                        "w-full px-4 py-3 rounded-lg border outline-none transition-all bg-gray-50",
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
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={cn(
                        "w-full px-4 py-3 rounded-lg border outline-none transition-all resize-none bg-gray-50",
                        touched.message && errors.message 
                          ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20" 
                          : "border-gray-200 focus:border-[#386758] focus:ring-2 focus:ring-[#386758]/20",
                        touched.message && !errors.message && "border-green-500"
                      )}
                      placeholder="Tell us more about your inquiry..."
                      required
                    ></textarea>
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
                    "w-full font-bold py-4 rounded-lg transition-all shadow-lg uppercase tracking-widest text-sm",
                    isFormValid 
                      ? "bg-[#386758] text-white hover:bg-[#2c5246] cursor-pointer" 
                      : "bg-gray-300 text-gray-500 cursor-not-allowed shadow-none"
                  )}
                >
                  Send Message
                </button>
                <p className="text-xs text-center text-gray-500 mt-4">
                  By sending this message, you agree to our Privacy Policy. We'll get back to you as soon as possible.
                </p>
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
