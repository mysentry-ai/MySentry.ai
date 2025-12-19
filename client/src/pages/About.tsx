import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Heart, Users, Award, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

const About = () => {
  return (
    <div className="min-h-screen bg-background pt-24">
      <SEO 
        title="About Us | MySentry" 
        description="Learn about the mission, vision, and team behind MySentry - the world's first AI companion for personal safety and health monitoring."
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
              Our Mission: <br/>
              <span className="text-foreground">Safety Without Limits</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              We believe everyone deserves to live fearlessly. MySentry was born from a simple yet powerful idea: technology should be the guardian that allows you to embrace life fully, knowing help is always just a heartbeat away.
            </motion.p>
          </div>
        </div>
      </section>

      {/* The Problem & Empathy */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="/images/senior-hiking.jpg" 
                alt="Senior hiking with confidence" 
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-primary mb-6">Why We Started</h2>
              <p className="text-lg text-muted-foreground mb-6">
                In a world that can be unpredictable, the fear of "what if" often holds us back. What if I fall? What if I have a health crisis alone? What if my loved one needs help and I'm not there?
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We understood that traditional medical alert buttons were stigmatizing and limited. You shouldn't have to choose between your dignity and your safety. You shouldn't have to wear a "help button" that screams vulnerability.
              </p>
              <div className="flex items-center gap-4 text-primary font-semibold">
                <Heart className="w-6 h-6 fill-current" />
                <span>We built MySentry to change the narrative.</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Solution & Change */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Redefining Personal Protection</h2>
            <p className="text-lg text-muted-foreground">
              MySentry isn't just an app; it's a comprehensive safety ecosystem. By leveraging the devices you already wear and love—your Apple or Samsung watch—we've created a discreet, powerful, and intelligent guardian.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Proactive Protection",
                desc: "We don't just react to emergencies; we help prevent them with health monitoring and predictive alerts."
              },
              {
                icon: Users,
                title: "Family Connection",
                desc: "Bridging the gap between independence and care, keeping families connected without being intrusive."
              },
              {
                icon: Award,
                title: "Professional Response",
                desc: "Partnered with Rapid Response Monitoring to provide 24/7 expert assistance when it matters most."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-8 rounded-2xl shadow-lg border border-border/50 hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Meet The Team</h2>
            <p className="text-lg text-muted-foreground">The innovators and caregivers behind MySentry.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Placeholder for team members - can be updated with real data later */}
            {[1, 2, 3].map((_, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-background rounded-2xl overflow-hidden shadow-lg text-center group"
              >
                <div className="h-64 bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/10 flex items-center justify-center text-primary/40">
                    <Users className="w-20 h-20" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-1">Team Member {i + 1}</h3>
                  <p className="text-primary text-sm font-medium mb-4">Position Title</p>
                  <p className="text-muted-foreground text-sm">
                    Dedicated to bringing safety and peace of mind to families everywhere.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-3xl p-12 text-center text-primary-foreground relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern.png')] opacity-10" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission</h2>
              <p className="text-lg text-primary-foreground/90 mb-8">
                Experience the freedom of being protected everywhere. Start your journey with MySentry today.
              </p>
              <button className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
