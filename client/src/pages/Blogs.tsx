import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "Why Smartwatches Are the Future of Personal Safety",
    excerpt: "Traditional medical alert buttons are outdated. Discover how modern smartwatches are revolutionizing how we protect our loved ones.",
    author: "Dr. Sarah Chen",
    date: "Dec 15, 2025",
    category: "Technology",
    image: "/images/blog-smartwatch.jpg"
  },
  {
    id: 2,
    title: "5 Signs Your Aging Parent Might Need Extra Support",
    excerpt: "Recognizing the subtle changes in your parent's routine can help you intervene before a crisis occurs. Here's what to look for.",
    author: "James Wilson",
    date: "Dec 10, 2025",
    category: "Senior Care",
    image: "/images/blog-senior-care.jpg"
  },
  {
    id: 3,
    title: "The Hidden Cost of Workplace Accidents",
    excerpt: "Beyond the immediate medical bills, workplace injuries can have a devastating long-term impact on your business. Learn how to mitigate the risk.",
    author: "Michael Ross",
    date: "Dec 05, 2025",
    category: "Business",
    image: "/images/blog-workplace.jpg"
  },
  {
    id: 4,
    title: "Understanding Fall Detection Technology",
    excerpt: "How does your watch know you've fallen? We dive deep into the sensors and algorithms that power this life-saving feature.",
    author: "Tech Team",
    date: "Nov 28, 2025",
    category: "Innovation",
    image: "/images/blog-hero.jpg"
  },
  {
    id: 5,
    title: "How to Talk to Your Parents About Safety Monitoring",
    excerpt: "It's a sensitive conversation. Here are practical tips for discussing safety monitoring without making them feel like they're losing independence.",
    author: "Lisa Thompson",
    date: "Nov 20, 2025",
    category: "Family",
    image: "/images/blog-senior-care.jpg"
  },
  {
    id: 6,
    title: "Real Estate Safety: A Guide for Agents",
    excerpt: "Meeting new clients alone carries inherent risks. Here are essential safety protocols every real estate agent should follow.",
    author: "Robert Martinez",
    date: "Nov 15, 2025",
    category: "Industry",
    image: "/images/blog-workplace.jpg"
  }
];

export const Blogs = () => {
  return (
    <div className="min-h-screen bg-[#e8f5e9] font-sans text-[#1a1a1a]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/blog-hero.jpg" 
            alt="MySentry Safety Insights" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6 font-barlow uppercase tracking-wide"
          >
            Safety Insights
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed"
          >
            Expert advice, industry trends, and stories about living fearlessly.
          </motion.p>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#004F7B]">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 group-hover:text-[#004F7B] transition-colors leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <button className="flex items-center gap-2 text-[#386758] font-bold uppercase tracking-wide text-sm group-hover:gap-3 transition-all">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blogs;
