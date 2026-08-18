import { useEffect, useMemo } from 'react';
import { useRoute, useLocation } from 'wouter';
import { trpc } from '@/lib/trpc';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { ArrowLeft, Clock, Calendar, Share2, Facebook, Twitter, Linkedin, Loader2 } from 'lucide-react';
import BlogCTA from '../components/BlogCTA';
import { Link } from 'wouter';
import { fallbackBlogCategories, getFallbackBlogPostBySlug, getFallbackRelatedPosts } from '@/lib/blogFallback';

const BlogPost = () => {
  const [match, params] = useRoute('/blog/:slug');
  const [, navigate] = useLocation();
  const slug = params?.slug || '';

  // Fetch from database
  const postQuery = trpc.blog.public.getBySlug.useQuery(
    { slug },
    { enabled: !!slug }
  );

  const apiPost = postQuery.data?.post;
  const fallbackPost = !postQuery.isLoading && !apiPost ? getFallbackBlogPostBySlug(slug) : null;
  const post = apiPost || fallbackPost;
  const useFallbackPost = !apiPost && !!fallbackPost;
  const isRedirect = postQuery.data?.redirect;
  const newSlug = postQuery.data?.newSlug;

  // Handle redirect
  useEffect(() => {
    if (isRedirect && newSlug) {
      navigate(`/blog/${newSlug}`, { replace: true });
    }
  }, [isRedirect, newSlug, navigate]);

  // Fetch related posts
  const relatedQuery = trpc.blog.public.related.useQuery(
    {
      categoryId: post?.categoryId ?? 0,
      excludeId: post?.id ?? 0,
      tags: Array.isArray(post?.tags) ? (post.tags as string[]) : null,
      limit: 4,
    },
    { enabled: !!post?.categoryId && !!post?.id }
  );
  const relatedPosts = useFallbackPost
    ? getFallbackRelatedPosts(post?.categoryId ?? 0, post?.id ?? 0)
    : relatedQuery.data || [];

  // Fetch categories for name lookup
  const categoriesQuery = trpc.blog.public.categories.useQuery();
  const categoryMap = useMemo(() => {
    const map: Record<number, string> = {};
    (useFallbackPost ? fallbackBlogCategories : categoriesQuery.data || []).forEach(c => { map[c.id] = c.name; });
    return map;
  }, [categoriesQuery.data, useFallbackPost]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const formatDate = (date: string | Date | null) => {
    if (!date) return '';
    const d = new Date(date);
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  // Loading state
  if (postQuery.isLoading) {
    return (
      <div className="min-h-screen bg-[#fcfbf9]">
        <Navbar />
        <div className="flex items-center justify-center pt-40 pb-20">
          <Loader2 className="w-8 h-8 animate-spin text-[#386758]" />
        </div>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-[#fcfbf9] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-medium text-gray-900 mb-4">Article Not Found</h1>
          <Link href="/blogs" className="text-[#386758] hover:underline">
            Return to Safety & Health Hub
          </Link>
        </div>
      </div>
    );
  }

  const categoryName = post.categoryId ? categoryMap[post.categoryId] : null;
  const postUpdatedAt = post.updatedAt;
  const postHeroImageCaption = post.heroImageCaption;

  return (
    <div className="min-h-screen bg-[#fcfbf9] font-sans text-gray-900">
      <SEO 
        title={post.metaTitle || `${post.title} | MySentry Safety & Health Hub`}
        description={post.metaDescription || post.excerpt || ''}
        image={post.ogImageUrl || post.heroImageUrl || undefined}
      />

      {/* Article Schema (JSON-LD) for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.metaDescription || post.excerpt || '',
            image: post.heroImageUrl || undefined,
            datePublished: post.publishedAt ? new Date(post.publishedAt).toISOString() : undefined,
            dateModified: postUpdatedAt ? new Date(postUpdatedAt).toISOString() : undefined,
            author: {
              "@type": "Organization",
              name: post.authorName || "MySentry Editorial Team",
              url: "https://mysentry.ai"
            },
            publisher: {
              "@type": "Organization",
              name: "MySentry",
              url: "https://mysentry.ai",
              logo: {
                "@type": "ImageObject",
                url: "https://mysentry.ai/mysentry-logo.svg"
              }
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://mysentry.ai/blog/${slug}`
            },
            wordCount: post.contentHtml ? post.contentHtml.replace(/<[^>]*>/g, '').split(/\s+/).length : undefined,
            articleSection: categoryName || undefined,
            keywords: Array.isArray(post.tags) ? (post.tags as string[]).join(', ') : undefined
          })
        }}
      />
      <Navbar />

      {/* Article Header - Centered & Editorial */}
      <header className="pt-32 pb-12 px-4 md:px-8 max-w-4xl mx-auto text-center">
        <Link href="/blogs" className="inline-flex items-center text-gray-900 hover:text-[#386758] mb-8 transition-colors text-sm font-bold uppercase tracking-widest">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Safety & Health Hub
        </Link>
        
        {categoryName && (
          <div className="mb-6">
            <span className="bg-[#e8f5e9] text-[#386758] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              {categoryName}
            </span>
          </div>
        )}

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 mb-8 leading-tight font-barlow">
          {post.title}
        </h1>

        <div className="flex items-center justify-center gap-6 text-gray-900 text-sm font-medium uppercase tracking-wider border-t border-b border-gray-200 py-6">
          <span className="flex items-center gap-2">
            <Calendar className="w-4 h-4" /> {formatDate(post.publishedAt)}
          </span>
          <span className="w-1 h-1 bg-gray-300 rounded-full" />
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4" /> {post.readTimeMinutes || 5} min read
          </span>
        </div>
      </header>

      {/* Hero Image - Wide & Cinematic */}
      {post.heroImageUrl && (
        <div className="w-full max-w-[1400px] mx-auto px-0 md:px-8 mb-16">
          <div className="relative aspect-[4/3] sm:aspect-[16/9] md:aspect-[2/1] overflow-hidden rounded-none sm:rounded-2xl">
            <img 
              src={post.heroImageUrl} 
              alt={post.heroImageAlt || post.title} 
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              width="1200" height="600"
            />
            {categoryName && (
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#1a1a1a]">
                {categoryName}
              </div>
            )}
            {postHeroImageCaption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-white text-sm text-center">{postHeroImageCaption}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Main Content Layout */}
      <div className="container mx-auto px-4 max-w-[1200px] flex flex-col lg:flex-row gap-16 relative">
        
        {/* Sidebar - Share & Progress (Sticky) */}
        <aside className="hidden lg:block w-48 relative">
          <div className="sticky top-32 flex flex-col gap-8">
            <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Share</div>
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-900 hover:bg-[#386758] hover:text-white hover:border-[#386758] transition-all"
              >
                <Facebook className="w-4 h-4" />
              </button>
              <button 
                onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`, '_blank')}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-900 hover:bg-[#386758] hover:text-white hover:border-[#386758] transition-all"
              >
                <Twitter className="w-4 h-4" />
              </button>
              <button 
                onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-900 hover:bg-[#386758] hover:text-white hover:border-[#386758] transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </button>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                }}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-900 hover:bg-[#386758] hover:text-white hover:border-[#386758] transition-all"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </aside>

        {/* Article Content */}
        <article className="flex-1 max-w-3xl mx-auto lg:mx-0">
          {post.excerpt && (
            <p className="text-xl md:text-2xl text-gray-900 leading-relaxed mb-12 font-light border-l-4 border-[#386758] pl-6 italic">
              {post.excerpt}
            </p>
          )}

          <div 
            id="blog-content"
            className="prose prose-lg max-w-none blog-content"
            dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }}
          />

          {/* Tags */}
          {Array.isArray(post.tags) && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {(post.tags as string[]).map((tag: string, i: number) => (
                  <span key={i} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Author Bio Box */}
          <div className="mt-16 p-8 bg-white rounded-2xl border border-gray-100 flex items-center gap-6 shadow-sm">
            <div className="w-16 h-16 bg-[#e8f5e9] rounded-full flex items-center justify-center text-[#386758] font-bold text-xl">
              {(post.authorName || 'MS').split(' ').map(w => w[0]).join('').slice(0, 2)}
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Written By</div>
              <div className="text-lg font-bold text-gray-900">{post.authorName || 'MySentry Editorial Team'}</div>
              <p className="text-gray-900 text-sm mt-1">Dedicated to bringing you the latest insights on safety, health, and independence.</p>
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
            <h3 className="text-3xl font-medium text-gray-900 mb-12 text-center font-barlow">
              More from {categoryName || 'this category'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedPosts.map((rp) => (
                <Link key={rp.id} href={`/blog/${rp.slug}`}>
                  <div className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-xl aspect-[3/2] mb-6 bg-gray-100">
                      <img 
                        src={rp.heroImageUrl || '/images/blog-placeholder.jpg'} 
                        alt={rp.heroImageAlt || rp.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                        width="600" height="400"
                      />
                      {rp.categoryId && categoryMap[rp.categoryId] && (
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#1a1a1a]">
                          {categoryMap[rp.categoryId]}
                        </div>
                      )}
                    </div>
                    <h4 className="text-xl font-medium text-gray-900 mb-2 leading-tight group-hover:underline decoration-1 underline-offset-4">
                      {rp.title}
                    </h4>
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mt-3">
                      {rp.readTimeMinutes || 5} min read
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
