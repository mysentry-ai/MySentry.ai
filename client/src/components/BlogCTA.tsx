import React from 'react';
import { Link } from 'wouter';

const BlogCTA = () => {
  return (
    <div className="mt-16 relative overflow-hidden rounded-3xl bg-[#386758] text-white p-10 md:p-16 text-center shadow-xl">
      <div className="relative z-10">
        <h3 className="text-3xl md:text-4xl font-medium mb-6 font-barlow leading-tight">
          Experience True <br className="hidden md:block" /> Peace of Mind
        </h3>
        <p className="text-white/90 mb-10 max-w-xl mx-auto text-lg font-light leading-relaxed">
          Join thousands of others who have reclaimed their independence with MySentry.
        </p>
        <Link 
          href="/pricing" 
          className="inline-block bg-white text-[#386758] px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Start 7-Day Free Trial
        </Link>
      </div>
      {/* Abstract Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[200%] bg-white rounded-full blur-[100px]" />
      </div>
    </div>
  );
};

export default BlogCTA;
