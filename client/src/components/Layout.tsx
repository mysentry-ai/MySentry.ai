import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[#e8f5e9] font-sans text-[#1a1a1a] selection:bg-secondary/30" style={{ backgroundColor: '#e8f5e9', color: '#1a1a1a' }}>
      <Navbar />
      <main className="flex-1 flex flex-col">
        {children}
      </main>
      <Footer />
    </div>
  );
}
