import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import HeroSection from "@/components/HeroSection";
import { blogs } from '../lib/blogs';

const Blogs = () => {
  const [filter, setFilter] = useState<'All' | 'Senior Care' | 'Females' | 'Families' | 'Business'>('All');

  const filteredBlogs = filter === 'All' 
    ? blogs 
    : blogs.filter(blog => blog.category === filter);

  const categories = ['All', 'Senior Care', 'Females', 'Families', 'Business'];

  // Featured blog (first one or random)
  const featuredBlog = blogs[0];

  return (
    <div className="min-h-screen bg-[#fcfbf9] font-sans text-[#1a1a1a]">
      <SEO 
        title="Safety & Health Blog | Personal Safety Tips & Emergency Preparedness | MySentry" 
        description="Expert advice on personal safety, fall prevention, family protection, and emergency preparedness. Read the latest from MySentry's safety and health blog."
        canonical="https://mysentry.ai/blogs"
      />
      <Navbar />

      <HeroSection
        label="Safety & Health Hub"
        title={<>Stories, science, and strategies<br/><span className="text-gray-600">for living a safer, freer life.</span></>}
        description="Explore our articles on senior care, family safety, and personal security."
        imageSrc="https://files.manuscdn.com/user_upload_by_module/session_file/310519663247484611/GqszcNTBcTbleCyx.jpg"
        imageAlt="Safety & Health Hub"
      />

      <section className="pt-16 px-4 md:px-8 lg:px-16 max-w-[1400px] mx-auto">
        {/* Filter Navigation - Underlined Style */}
        <div className="flex flex-wrap gap-8 border-b border-gray-200 pb-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`text-sm font-medium uppercase tracking-widest transition-all duration-300 pb-4 -mb-4 border-b-2 ${
                filter === cat 
                  ? 'text-[#1a1a1a] border-[#1a1a1a]' 
                  : 'text-gray-400 border-transparent hover:text-[#1a1a1a]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Article (Only show on 'All' view) */}
        {filter === 'All' && (
          <Link href={`/blog/${featuredBlog.slug}`}>
            <div className="group cursor-pointer grid lg:grid-cols-2 gap-8 mb-24 items-center">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] lg:aspect-[16/10]">
                <img 
                  src={featuredBlog.image} 
                  alt={featuredBlog.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center lg:pl-8">
                <span className="text-[#386758] font-bold tracking-widest uppercase text-xs mb-4">
                  Featured Story
                </span>
                <h2 className="text-[1.75rem] md:text-[2.25rem] font-heading font-bold leading-tight mb-6 group-hover:underline decoration-1 underline-offset-4 text-[#1a1a1a]">
                  {featuredBlog.title}
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed line-clamp-3">
                  {featuredBlog.excerpt}
                </p>
                <div className="flex items-center text-sm font-medium text-gray-500 uppercase tracking-wider">
                  <span>{featuredBlog.date}</span>
                  <span className="mx-2">•</span>
                  <span>{featuredBlog.readTime}</span>
                </div>
              </div>
            </div>
          </Link>
        )}
      </section>

      {/* Blog Grid - Clean & Spacious */}
      <section className="pb-32 px-4 md:px-8 lg:px-16 max-w-[1400px] mx-auto">
        <AnimatePresence mode='wait'>
          <motion.div 
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
          >
            {filteredBlogs.filter(b => filter !== 'All' || b.id !== featuredBlog.id).map((blog) => (
              <Link key={blog.id} href={`/blog/${blog.slug}`}>
                <div className="group cursor-pointer flex flex-col h-full">
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-xl aspect-[3/2] mb-6 bg-gray-100">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#1a1a1a]">
                      {blog.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-[1.25rem] md:text-[1.5rem] font-heading font-bold leading-tight mb-3 group-hover:underline decoration-1 underline-offset-4 text-[#1a1a1a]">
                      {blog.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2 text-base leading-relaxed">
                      {blog.excerpt}
                    </p>

                    <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-100">
                      <div className="flex items-center gap-3 text-gray-400 text-[11px] font-bold uppercase tracking-wider">
                        <span>{blog.date}</span>
                        <span>•</span>
                        <span>{blog.readTime}</span>
                      </div>
                      <span className="text-[#386758] opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                        <ArrowRight className="w-5 h-5" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredBlogs.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500 font-light">No articles found in this category.</p>
            <button 
              onClick={() => setFilter('All')}
              className="mt-4 text-[#386758] font-medium hover:underline"
            >
              View all articles
            </button>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default Blogs;
