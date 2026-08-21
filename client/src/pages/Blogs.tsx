import { useState, useMemo } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, Clock, Calendar, Loader2 } from 'lucide-react';
import HeroSection from "@/components/HeroSection";
import { trpc } from '@/lib/trpc';

const Blogs = () => {
  const [categoryId, setCategoryId] = useState<number | null>(null);

  // Fetch categories
  const categoriesQuery = trpc.blog.public.categories.useQuery();
  const categories = categoriesQuery.data || [];

  // Fetch posts from database
  const postsQuery = trpc.blog.public.list.useQuery({
    categoryId: categoryId ?? undefined,
    limit: 200,
  });
  const posts = postsQuery.data?.posts || [];

  // Featured blog (first published post)
  const featuredBlog = categoryId === null ? posts[0] : null;
  const gridPosts = categoryId === null ? posts.slice(1) : posts;

  const isLoading = postsQuery.isLoading;

  // Build a category name lookup
  const categoryMap = useMemo(() => {
    const map: Record<number, string> = {};
    categories.forEach(c => { map[c.id] = c.name; });
    return map;
  }, [categories]);

  const formatDate = (date: string | Date | null) => {
    if (!date) return '';
    const d = new Date(date);
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-[#fcfbf9] font-sans text-[#1a1a1a]">
      <SEO />
      <Navbar />

      <HeroSection
        label="Safety & Health Hub"
        title={<>Stories, science, and strategies<br/><span className="text-gray-600">for living a safer, freer life.</span></>}
        imageSrc="/images/cdn/GqszcNTBcTbleCyx.jpg"
        imageAlt="Safety & Health Hub"
      />

      <section className="pt-16 px-4 md:px-8 lg:px-16 max-w-[1400px] mx-auto">
        {/* Filter Navigation - Underlined Style */}
        <div className="flex flex-wrap gap-8 border-b border-gray-200 pb-4 mb-16">
          <button
            onClick={() => setCategoryId(null)}
            className={`text-sm font-medium uppercase tracking-widest transition-all duration-300 pb-4 -mb-4 border-b-2 ${
              categoryId === null
                ? 'text-[#1a1a1a] border-[#1a1a1a]' 
                : 'text-gray-400 border-transparent hover:text-[#1a1a1a]'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategoryId(cat.id)}
              className={`text-sm font-medium uppercase tracking-widest transition-all duration-300 pb-4 -mb-4 border-b-2 ${
                categoryId === cat.id
                  ? 'text-[#1a1a1a] border-[#1a1a1a]' 
                  : 'text-gray-400 border-transparent hover:text-[#1a1a1a]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-[#386758]" />
          </div>
        )}

        {/* Featured Article (Only show on 'All' view) */}
        {!isLoading && featuredBlog && categoryId === null && (
          <Link href={`/blog/${featuredBlog.slug}`}>
            <div className="group cursor-pointer grid lg:grid-cols-2 gap-8 mb-24 items-center">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] lg:aspect-[16/10]">
                <img 
                  src={featuredBlog.heroImageUrl || '/images/blog-placeholder.jpg'} 
                  alt={featuredBlog.heroImageAlt || featuredBlog.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  width="800" height="500"
                />
                {featuredBlog.categoryId && categoryMap[featuredBlog.categoryId] && (
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#1a1a1a]">
                    {categoryMap[featuredBlog.categoryId]}
                  </div>
                )}
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
                  <span>{formatDate(featuredBlog.publishedAt)}</span>
                  <span className="mx-2">•</span>
                  <span>{featuredBlog.readTimeMinutes || 5} min read</span>
                </div>
              </div>
            </div>
          </Link>
        )}
      </section>

      {/* Blog Grid - Clean & Spacious */}
      <section className="pb-32 px-4 md:px-8 lg:px-16 max-w-[1400px] mx-auto">
        {!isLoading && (
          <AnimatePresence mode='wait'>
            <motion.div 
              key={categoryId ?? 'all'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
            >
              {gridPosts.map((blog) => (
                <Link key={blog.id} href={`/blog/${blog.slug}`}>
                  <div className="group cursor-pointer flex flex-col h-full">
                    {/* Image */}
                    <div className="relative overflow-hidden rounded-xl aspect-[3/2] mb-6 bg-gray-100">
                      <img 
                        src={blog.heroImageUrl || '/images/blog-placeholder.jpg'} 
                        alt={blog.heroImageAlt || blog.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                        width="600" height="400"
                      />
                      {blog.categoryId && categoryMap[blog.categoryId] && (
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#1a1a1a]">
                          {categoryMap[blog.categoryId]}
                        </div>
                      )}
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
                          <span>{formatDate(blog.publishedAt)}</span>
                          <span>•</span>
                          <span>{blog.readTimeMinutes || 5} min read</span>
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
        )}

        {!isLoading && posts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500 font-light">No articles found in this category.</p>
            <button 
              onClick={() => setCategoryId(null)}
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
