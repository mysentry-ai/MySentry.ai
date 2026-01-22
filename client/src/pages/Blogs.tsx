import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { blogs } from '../lib/blogs';

const Blogs = () => {
  const [filter, setFilter] = useState<'All' | 'Senior Care' | 'Females' | 'Families' | 'Business'>('All');

  const filteredBlogs = filter === 'All' 
    ? blogs 
    : blogs.filter(blog => blog.category === filter);

  const categories = ['All', 'Senior Care', 'Females', 'Families', 'Business'];

  return (
    <div className="min-h-screen bg-white font-sans text-[#1a1a1a]">
      <SEO 
        title="Latest News & Articles | MySentry" 
        description="Expert advice, safety tips, and stories about protecting what matters most. Explore our articles on senior care, family safety, and personal security."
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center bg-[#e8f5e9] pt-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/blog-hero.jpg" 
            alt="MySentry Blog" 
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
              The Vital Companion Blog
            </span>
            <h1 className="text-[55px] font-normal mb-8 font-barlow uppercase leading-[0.9] tracking-tighter text-[#1a1a1a]">
              Latest News & Articles
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed max-w-2xl font-medium">
              Insights, guides, and stories to help you live freely and safely.
            </p>

            {/* Filter Controls */}
            <div className="flex flex-wrap gap-3 mt-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat as any)}
                  className={`px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 border-2 ${
                    filter === cat 
                      ? 'bg-[#386758] text-white border-[#386758] shadow-lg transform scale-105' 
                      : 'bg-white/50 text-gray-600 border-gray-300 hover:border-[#386758] hover:text-[#386758]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimatePresence mode='wait'>
            <motion.div 
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {filteredBlogs.map((blog) => (
                <Link key={blog.id} href={`/blog/${blog.slug}`}>
                  <div className="group cursor-pointer h-full flex flex-col bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2">
                    {/* Image Container */}
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={blog.image} 
                        alt={blog.title} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#386758]">
                        {blog.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex items-center gap-4 text-gray-400 text-xs font-medium uppercase tracking-wider mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {blog.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {blog.readTime}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 leading-tight group-hover:text-[#386758] transition-colors font-barlow">
                        {blog.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
                        {blog.excerpt}
                      </p>

                      <div className="flex items-center text-[#386758] font-bold uppercase tracking-wider text-sm group-hover:translate-x-2 transition-transform duration-300">
                        Read Article <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredBlogs.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500">No articles found in this category.</p>
              <button 
                onClick={() => setFilter('All')}
                className="mt-4 text-[#386758] font-bold hover:underline"
              >
                View all articles
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blogs;
