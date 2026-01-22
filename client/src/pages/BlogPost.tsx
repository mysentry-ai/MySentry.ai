import React, { useEffect } from 'react';
import { useRoute } from 'wouter';
import { blogs } from '../lib/blogs';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
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
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <Link href="/blogs" className="text-[#386758] hover:underline">
            Return to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans text-[#1a1a1a]">
      <SEO 
        title={`${blog.title} | MySentry Blog`}
        description={blog.excerpt}
        image={blog.image}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
        </div>
        
        <div className="relative z-20 container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <Link href="/blogs" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors group">
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Articles
            </Link>
            
            <div className="flex items-center gap-4 text-white/80 mb-6 text-sm font-medium tracking-wider uppercase">
              <span className="bg-[#386758] px-3 py-1 rounded-full text-white">
                {blog.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" /> {blog.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" /> {blog.readTime}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {blog.title}
            </h1>
            
            <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
              {blog.excerpt}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <article className="container mx-auto px-4 py-24 max-w-3xl">
        <div 
          className="prose prose-lg max-w-none 
            prose-headings:font-barlow prose-headings:font-bold prose-headings:text-[#1a1a1a] 
            prose-p:text-gray-600 prose-p:leading-relaxed
            prose-a:text-[#386758] prose-a:no-underline hover:prose-a:underline
            prose-li:text-gray-600
            prose-strong:text-[#1a1a1a] prose-strong:font-bold
            prose-lead:text-xl prose-lead:text-gray-700 prose-lead:font-medium"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* CTA Section */}
        <div className="mt-20 p-10 bg-[#e8f5e9] rounded-3xl border border-[#386758]/20 text-center">
          <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">
            Ready to take the next step?
          </h3>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Don't let worry hold you back. Experience the freedom and safety of MySentry today.
          </p>
          <a 
            href="https://buy.stripe.com/test_7sI01c2H82hQ4QEaEE" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-[#386758] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#2d5246] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Start Your 7-Day Free Trial
          </a>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
