import React from 'react';
import { motion } from 'framer-motion';
import { Users, Linkedin, Mail } from 'lucide-react';
import SEO from '../components/SEO';

const Team = () => {
  return (
    <div className="min-h-screen bg-background pt-24">
      <SEO 
        title="Our Team | MySentry" 
        description="Meet the dedicated professionals behind MySentry, working tirelessly to redefine personal safety."
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
              The People Behind the Protection
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              We are a diverse team of engineers, designers, and safety experts united by a single purpose: to empower you to live fearlessly.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Founder Name",
                role: "CEO & Founder",
                bio: "Driven by a personal mission to make safety accessible to everyone, everywhere."
              },
              {
                name: "CTO Name",
                role: "Chief Technology Officer",
                bio: "Architecting the intelligent systems that keep watch when you can't."
              },
              {
                name: "Head of Safety",
                role: "Director of Safety Operations",
                bio: "Ensuring every alert is handled with speed, precision, and care."
              },
              {
                name: "Lead Designer",
                role: "Head of Product Design",
                bio: "Crafting intuitive experiences that make safety feel natural, not burdensome."
              },
              {
                name: "Medical Advisor",
                role: "Chief Medical Officer",
                bio: "Guiding our health monitoring features with clinical expertise."
              },
              {
                name: "Customer Success",
                role: "Head of Customer Experience",
                bio: "Dedicated to supporting our community at every step of their journey."
              }
            ].map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border/50 hover:border-primary/50 transition-all group"
              >
                <div className="h-64 bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/10 flex items-center justify-center text-primary/40 group-hover:bg-primary/20 transition-colors">
                    <Users className="w-24 h-24" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4">
                    {member.bio}
                  </p>
                  <div className="flex gap-3">
                    <button className="p-2 rounded-full bg-secondary hover:bg-primary/10 text-primary transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-full bg-secondary hover:bg-primary/10 text-primary transition-colors">
                      <Mail className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">Join Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            We're always looking for passionate individuals who want to make a real difference in people's lives. If you're ready to build the future of safety, we want to hear from you.
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-colors shadow-lg">
            View Open Positions
          </button>
        </div>
      </section>
    </div>
  );
};

export default Team;
