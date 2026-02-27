import { useState } from "react";
import { useLocation, useRoute, Link } from "wouter";
import { useBlogAdmin } from "@/hooks/useBlogAdmin";
import AdminLogin from "./AdminLogin";
import BlogList from "./BlogList";
import BlogEditor from "./BlogEditor";
import AIWizard from "./AIWizard";
import CategoryManager from "./CategoryManager";
import { Button } from "@/components/ui/button";
import {
  FileText,
  FolderOpen,
  Sparkles,
  LogOut,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";

export default function AdminLayout() {
  const { token, isAuthenticated, isLoading, login, logout, loginError, isLoginLoading } = useBlogAdmin();
  const [location, navigate] = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [isEditRoute, editParams] = useRoute("/edit/:id");
  const isNewPost = location === "/new";
  const isWizard = location === "/wizard";
  const isCategories = location === "/categories";
  const isList = location === "/" || location === "";

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-3 border-[#6AD990] border-t-transparent rounded-full animate-spin" />
          <span className="text-sm text-[#5C5C5C]">Loading...</span>
        </div>
      </div>
    );
  }

  if (!isAuthenticated || !token) {
    return <AdminLogin onLogin={login} error={loginError} isLoading={isLoginLoading} />;
  }

  // Full-screen pages (editor, wizard)
  if (isEditRoute || isNewPost) {
    const postId = isEditRoute ? parseInt(editParams!.id) : undefined;
    return <BlogEditor token={token} postId={postId} />;
  }

  if (isWizard) {
    return <AIWizard token={token} />;
  }

  const navItems = [
    { href: "~/admin/blog", label: "Blog Posts", icon: FileText, active: isList },
    { href: "~/admin/blog/categories", label: "Categories", icon: FolderOpen, active: isCategories },
    { href: "~/admin/blog/wizard", label: "AI Wizard", icon: Sparkles, active: isWizard },
  ];

  // Get current page title
  const currentPage = navItems.find((item) => item.active);

  return (
    <div className="min-h-screen bg-[#F8FAF9] flex">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-60" : "w-0 overflow-hidden"
        } transition-all duration-200 bg-white border-r border-[#E5E7EB] flex flex-col shrink-0`}
      >
        {/* Logo area */}
        <div className="h-16 px-5 flex items-center border-b border-[#E5E7EB]">
          <div className="flex items-center gap-2.5">
            <img src="/favicon.svg" alt="MySentry" className="w-8 h-8" />
            <div>
              <span className="font-bold text-[#232020] text-sm">MySentry</span>
              <span className="text-[#5C5C5C] text-xs block -mt-0.5">Blog CMS</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <div
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                  item.active
                    ? "bg-[#e8f5e9] text-[#232020] shadow-sm"
                    : "text-[#5C5C5C] hover:bg-[#F5F7F7] hover:text-[#232020]"
                }`}
              >
                <item.icon className={`w-[18px] h-[18px] ${item.active ? "text-[#6AD990]" : ""}`} />
                {item.label}
              </div>
            </Link>
          ))}
        </nav>

        {/* Sign out */}
        <div className="px-3 py-3 border-t border-[#E5E7EB]">
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start text-[#5C5C5C] hover:text-red-600 hover:bg-red-50 rounded-lg"
            onClick={logout}
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Top bar */}
        <header className="h-16 bg-white border-b border-[#E5E7EB] px-6 flex items-center gap-4 shrink-0">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-[#5C5C5C] hover:text-[#232020] hover:bg-[#F5F7F7] -ml-2"
          >
            {sidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </Button>
          <div className="flex items-center gap-1.5 text-sm">
            <span className="text-[#9CA3AF]">Admin</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#9CA3AF]" />
            <span className="text-[#232020] font-medium">{currentPage?.label || "Blog CMS"}</span>
          </div>
        </header>

        {/* Page content */}
        <div className="flex-1 p-6 overflow-auto">
          {isList && <BlogList token={token} />}
          {isCategories && <CategoryManager token={token} />}
        </div>
      </div>
    </div>
  );
}
