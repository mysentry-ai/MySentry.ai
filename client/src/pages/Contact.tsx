import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

export const Contact = () => {
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
                    <h3 className="text-xl font-bold mb-2 text-[#1a1a1a]">Call Us</h3>
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
                    <h3 className="text-xl font-bold mb-2 text-[#1a1a1a]">Email Us</h3>
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
                    <h3 className="text-xl font-bold mb-2 text-[#1a1a1a]">Headquarters</h3>
                    <p className="text-gray-600">
                      MySentry.ai<br />
                      Columbus, Ohio, USA
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#f8fafc] p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <MessageSquare className="w-8 h-8 text-[#386758]" />
                <h3 className="text-2xl font-bold text-[#1a1a1a]">Send a Message</h3>
              </div>
              
              <form className="space-y-6" action="mailto:support@MySentry.ai" method="post" encType="text/plain">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#386758] focus:ring-2 focus:ring-[#386758]/20 outline-none transition-all"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#386758] focus:ring-2 focus:ring-[#386758]/20 outline-none transition-all"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#386758] focus:ring-2 focus:ring-[#386758]/20 outline-none transition-all"
                    placeholder="How can we help?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#386758] focus:ring-2 focus:ring-[#386758]/20 outline-none transition-all resize-none"
                    placeholder="Tell us more about your inquiry..."
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#386758] text-white font-bold py-4 rounded-xl hover:bg-[#2c5246] transition-colors shadow-lg uppercase tracking-wide"
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
