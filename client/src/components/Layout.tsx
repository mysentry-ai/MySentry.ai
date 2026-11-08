import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[#e8f5e9] font-sans text-[#1a1a1a] selection:bg-secondary/30" style={{ backgroundColor: '#e8f5e9', color: '#1a1a1a' }}>
      <a
        href="#main-content"
        className="public-skip-link fixed left-4 top-4 z-[10000] -translate-y-[200%] rounded-md bg-[#004F7B] px-4 py-3 font-semibold text-white focus:translate-y-0 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[#004F7B]"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-1 flex flex-col scroll-mt-40">
        {children}
      </main>
      <Footer />
    </div>
  );
}
