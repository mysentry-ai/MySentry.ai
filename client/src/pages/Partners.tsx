import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, ShieldCheck, Globe, Zap } from 'lucide-react';
import SEO from '../components/SEO';

const Partners = () => {
  return (
    <div className="min-h-screen bg-background pt-24">
      <SEO 
        title="Partners | MySentry" 
        description="Partner with MySentry to deliver world-class safety and health monitoring solutions to your customers."
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-primary mb-6"
            >
              Partner With Purpose
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Join forces with the leader in AI-powered personal safety. Together, we can protect more lives and provide peace of mind to families everywhere.
            </motion.p>
          </div>
        </div>
      </section>

      {/* The Problem & Empathy (for potential partners) */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">The Market Gap</h2>
              <p className="text-lg text-muted-foreground">
                Your customers are looking for modern safety solutions, but traditional options are outdated, stigmatizing, and limited. They want technology that fits their lifestyle, not bulky hardware that limits it.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-background p-8 rounded-2xl shadow-sm border border-border"
              >
                <h3 className="text-xl font-bold text-red-600 mb-3">The Challenge</h3>
                <p className="text-muted-foreground">
                  Offering standalone, single-purpose devices often leads to low adoption rates and high churn. Customers simply stop wearing them.
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-background p-8 rounded-2xl shadow-sm border border-border"
              >
                <h3 className="text-xl font-bold text-primary mb-3">The Opportunity</h3>
                <p className="text-muted-foreground">
                  MySentry integrates with the devices they already love, Apple and Samsung watches. This means higher engagement, better retention, and real value.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution: Partnership Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Why Partner with MySentry?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Innovative Technology",
                desc: "Offer the only solution that combines health monitoring, fall detection, and 24/7 professional response on consumer smartwatches."
              },
              {
                icon: ShieldCheck,
                title: "Trusted Reliability",
                desc: "Backed by Rapid Response Monitoring, ensuring your customers get the gold standard in emergency care."
              },
              {
                icon: Globe,
                title: "Scalable Growth",
                desc: "Flexible partnership models designed to grow with your business, from affiliate programs to white-label opportunities."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-8 rounded-2xl shadow-lg border border-border/50 hover:border-primary/50 transition-colors text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Partners */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-12">Our Strategic Partners</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Logos would go here - using text placeholders for now */}
            <div className="text-2xl font-bold text-foreground/50">Rapid Response Monitoring</div>
            <div className="text-2xl font-bold text-foreground/50">Apple Health</div>
            <div className="text-2xl font-bold text-foreground/50">Samsung Health</div>
            <div className="text-2xl font-bold text-foreground/50">FirstNet</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-3xl p-12 text-center text-primary-foreground relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern.png')] opacity-10" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Become a Partner</h2>
              <p className="text-lg text-primary-foreground/90 mb-8">
                Ready to expand your portfolio with the future of personal safety? Let's talk.
              </p>
              <button className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg flex items-center gap-2 mx-auto">
                <Handshake className="w-5 h-5" />
                Contact Partnership Team
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
