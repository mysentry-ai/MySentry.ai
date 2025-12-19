import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const Blogs = () => {
  return (
    <div className="min-h-screen bg-background pt-24">
      <SEO 
        title="Blog | MySentry" 
        description="Stay updated with the latest insights on personal safety, health monitoring, and technology trends from the MySentry team."
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
              Safety Insights
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Expert advice, industry trends, and stories about living fearlessly.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Why Smartwatches Are the Future of Personal Safety",
                excerpt: "Traditional medical alert buttons are outdated. Discover how modern smartwatches are revolutionizing how we protect our loved ones.",
                date: "Dec 15, 2025",
                author: "Dr. Sarah Chen",
                category: "Technology"
              },
              {
                title: "5 Signs Your Aging Parent Might Need Extra Support",
                excerpt: "Recognizing the subtle changes in your parent's routine can help you intervene before a crisis occurs. Here's what to look for.",
                date: "Dec 10, 2025",
                author: "James Wilson",
                category: "Senior Care"
              },
              {
                title: "The Hidden Cost of Workplace Accidents",
                excerpt: "Beyond the immediate medical bills, workplace injuries can have a devastating long-term impact on your business. Learn how to mitigate the risk.",
                date: "Dec 05, 2025",
                author: "Michael Ross",
                category: "Business"
              },
              {
                title: "Understanding Fall Detection Technology",
                excerpt: "How does your watch know you've fallen? We dive deep into the sensors and algorithms that power this life-saving feature.",
                date: "Nov 28, 2025",
                author: "Tech Team",
                category: "Innovation"
              },
              {
                title: "How to Talk to Your Parents About Safety Monitoring",
                excerpt: "It's a sensitive conversation. Here are practical tips for discussing safety monitoring without making them feel like they're losing independence.",
                date: "Nov 20, 2025",
                author: "Lisa Thompson",
                category: "Family"
              },
              {
                title: "Real Estate Safety: A Guide for Agents",
                excerpt: "Meeting new clients alone carries inherent risks. Here are essential safety protocols every real estate agent should follow.",
                date: "Nov 15, 2025",
                author: "Robert Martinez",
                category: "Industry"
              }
            ].map((post, i) => (
              <motion.article 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border/50 hover:border-primary/50 transition-all group flex flex-col"
              >
                <div className="h-48 bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/10 flex items-center justify-center text-primary/40 group-hover:scale-105 transition-transform duration-500">
                    {/* Placeholder for blog image */}
                    <span className="font-bold text-lg">Article Image</span>
                  </div>
                  <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wider">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 flex-1">
                    {post.excerpt}
                  </p>
                  <button className="text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
