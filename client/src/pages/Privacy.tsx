import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export const Privacy = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-[#1a1a1a]">
      <Navbar />
      
      {/* Hero Section - Standardized */}
      <section className="relative min-h-[60vh] flex items-center bg-[#e8f5e9] pt-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/blog-hero.jpg" 
            alt="Privacy Policy" 
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
              Legal
            </span>
            <h1 className="text-[55px] font-normal mb-8 font-barlow uppercase leading-[0.9] tracking-tighter text-[#1a1a1a]">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed max-w-2xl font-medium">
              Last Updated: January 4, 2026
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-24 max-w-4xl">
        <div className="bg-white p-8 md:p-16 rounded-3xl shadow-xl border border-gray-100 prose prose-lg max-w-none prose-headings:font-barlow prose-headings:uppercase prose-headings:font-bold prose-headings:text-[#1a1a1a] prose-a:text-[#386758] prose-a:no-underline hover:prose-a:underline prose-p:text-gray-600 prose-li:text-gray-600">
          
          <p className="lead text-xl text-gray-700 font-medium">
            At MySentry.ai ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
          </p>

          <h3>1. Information We Collect</h3>
          <p>
            We collect information that you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support. This may include:
          </p>
          <ul>
            <li>Personal identification information (Name, email address, phone number, etc.)</li>
            <li>Health and safety data necessary for our monitoring services (only with your explicit consent)</li>
            <li>Location data for emergency response services</li>
            <li>Payment information for subscription services</li>
          </ul>

          <h3>2. How We Use Your Information</h3>
          <p>
            We use the information we collect to:
          </p>
          <ul>
            <li>Provide, operate, and maintain our services</li>
            <li>Improve, personalize, and expand our website and app</li>
            <li>Understand and analyze how you use our services</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
            <li>Process your transactions and manage your orders</li>
            <li>Send you emails</li>
            <li>Find and prevent fraud</li>
          </ul>

          <h3>3. Sharing Your Information</h3>
          <p>
            We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential. We may also release information when it's release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property or safety.
          </p>
          <div className="bg-[#e8f5e9] p-6 rounded-xl border border-[#386758]/20 my-6">
            <p className="m-0 text-[#386758] font-medium">
              <strong>Emergency Situations:</strong> In the event of an emergency detected by our system, we may share your location and relevant health information with emergency responders and your designated emergency contacts to facilitate immediate assistance.
            </p>
          </div>

          <h3>4. Data Security</h3>
          <p>
            We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information. We use encryption technology to protect sensitive information transmitted online. We also protect your information offline. Only employees who need the information to perform a specific job (for example, billing or customer service) are granted access to personally identifiable information.
          </p>

          <h3>5. Your Rights</h3>
          <p>
            You have the right to access, correct, or delete your personal information. You may also object to the processing of your personal data, request restriction of processing, and request data portability. To exercise these rights, please contact us at <a href="mailto:support@MySentry.ai">support@MySentry.ai</a>.
          </p>

          <h3>6. Changes to This Privacy Policy</h3>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
          </p>

          <h3>7. Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <ul>
            <li>By email: <a href="mailto:support@MySentry.ai">support@MySentry.ai</a></li>
            <li>By phone: +1 (614) 361-5073</li>
          </ul>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
