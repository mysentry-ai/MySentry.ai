import React, { useEffect } from 'react';
import { useRoute } from 'wouter';
import { blogs } from '../lib/blogs';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import BlogCTA from '../components/BlogCTA';
import { Link } from 'wouter';

const BlogPost = () => {
  const [match, params] = useRoute('/blog/:slug');
  const slug = params?.slug;
  const blog = blogs.find(b => b.slug === slug);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#fcfbf9] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-medium text-[#1a1a1a] mb-4">Article Not Found</h1>
          <Link href="/blogs" className="text-[#386758] hover:underline">
            Return to Safety & Health Hub
          </Link>
        </div>
      </div>
    );
  }

  // Find related posts (same category, excluding current)
  const relatedPosts = blogs
    .filter(b => b.category === blog.category && b.id !== blog.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#fcfbf9] font-sans text-[#1a1a1a]">
      <SEO 
        title={`${blog.title} | MySentry Safety & Health Hub`}
        description={blog.excerpt}
        image={blog.image}
      />
      <Navbar />

      {/* Article Header - Centered & Editorial */}
      <header className="pt-32 pb-12 px-4 md:px-8 max-w-4xl mx-auto text-center">
        <Link href="/blogs" className="inline-flex items-center text-gray-700 hover:text-[#386758] mb-8 transition-colors text-sm font-bold uppercase tracking-widest">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Safety & Health Hub
        </Link>
        
        <div className="mb-6">
          <span className="bg-[#e8f5e9] text-[#386758] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            {blog.category}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#1a1a1a] mb-8 leading-tight font-barlow">
          {blog.title}
        </h1>

        <div className="flex items-center justify-center gap-6 text-gray-700 text-sm font-medium uppercase tracking-wider border-t border-b border-gray-200 py-6">
          <span className="flex items-center gap-2">
            <Calendar className="w-4 h-4" /> {blog.date}
          </span>
          <span className="w-1 h-1 bg-gray-300 rounded-full" />
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4" /> {blog.readTime}
          </span>
        </div>
      </header>

      {/* Hero Image - Wide & Cinematic */}
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 mb-16">
        <div className="relative aspect-[21/9] md:aspect-[2/1] overflow-hidden rounded-2xl">
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="container mx-auto px-4 max-w-[1200px] flex flex-col lg:flex-row gap-16 relative">
        
        {/* Sidebar - Share & Progress (Sticky) */}
        <aside className="hidden lg:block w-48 relative">
          <div className="sticky top-32 flex flex-col gap-8">
            <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Share</div>
            <div className="flex flex-col gap-4">
              <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-900 hover:bg-[#386758] hover:text-white hover:border-[#386758] transition-all">
                <Facebook className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-900 hover:bg-[#386758] hover:text-white hover:border-[#386758] transition-all">
                <Twitter className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-900 hover:bg-[#386758] hover:text-white hover:border-[#386758] transition-all">
                <Linkedin className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-900 hover:bg-[#386758] hover:text-white hover:border-[#386758] transition-all">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </aside>

        {/* Article Content */}
        <article className="flex-1 max-w-3xl mx-auto lg:mx-0">
          <p className="text-xl md:text-2xl text-gray-900 leading-relaxed mb-12 font-light border-l-4 border-[#386758] pl-6 italic">
            {blog.excerpt}
          </p>

          <div 
            className="prose prose-lg max-w-none 
              prose-headings:font-barlow prose-headings:font-medium prose-headings:text-[#1a1a1a] prose-headings:mt-12 prose-headings:mb-6
              prose-p:text-gray-900 prose-p:leading-8 prose-p:mb-6 prose-p:font-light
              prose-a:text-[#386758] prose-a:no-underline hover:prose-a:underline prose-a:font-medium
              prose-li:text-gray-900 prose-li:leading-8
              prose-strong:text-[#1a1a1a] prose-strong:font-semibold
              prose-blockquote:border-l-4 prose-blockquote:border-[#386758] prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-700 prose-blockquote:bg-gray-50 prose-blockquote:py-4 prose-blockquote:pr-4 prose-blockquote:rounded-r-lg"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Author Bio Box */}
          <div className="mt-16 p-8 bg-white rounded-2xl border border-gray-100 flex items-center gap-6 shadow-sm">
            <div className="w-16 h-16 bg-[#e8f5e9] rounded-full flex items-center justify-center text-[#386758] font-bold text-xl">
              MS
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Written By</div>
              <div className="text-lg font-bold text-[#1a1a1a]">MySentry Editorial Team</div>
              <p className="text-gray-700 text-sm mt-1">Dedicated to bringing you the latest insights on safety, health, and independence.</p>
            </div>
          </div>

          {/* CTA Section - Integrated */}
          <BlogCTA />
        </article>
      </div>

      {/* Related Articles Section */}
      {relatedPosts.length > 0 && (
        <section className="bg-white py-24 mt-24 border-t border-gray-100">
          <div className="container mx-auto px-4 max-w-[1400px]">
            <h3 className="text-3xl font-medium text-[#1a1a1a] mb-12 text-center font-barlow">
              More from {blog.category}
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <div className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-xl aspect-[3/2] mb-6 bg-gray-100">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <h4 className="text-xl font-medium text-[#1a1a1a] mb-2 leading-tight group-hover:underline decoration-1 underline-offset-4">
                      {post.title}
                    </h4>
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mt-3">
                      {post.readTime}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default BlogPost;
