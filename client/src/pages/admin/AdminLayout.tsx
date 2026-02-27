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
  LayoutDashboard,
} from "lucide-react";

export default function AdminLayout() {
  const { token, isAuthenticated, isLoading, login, logout, loginError, isLoginLoading } = useBlogAdmin();
  const [location, navigate] = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // In nested routing context, useLocation returns paths relative to /admin/blog
  // So "/" means /admin/blog, "/edit/17" means /admin/blog/edit/17, etc.
  const [isEditRoute, editParams] = useRoute("/edit/:id");
  const isNewPost = location === "/new";
  const isWizard = location === "/wizard";
  const isCategories = location === "/categories";
  const isList = location === "/" || location === "";

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-[#386758] border-t-transparent rounded-full" />
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

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-56" : "w-0 overflow-hidden"
        } transition-all duration-200 bg-white border-r flex flex-col shrink-0`}
      >
        <div className="p-4 border-b">
          <div className="flex items-center gap-2">
            <LayoutDashboard className="w-5 h-5 text-[#386758]" />
            <span className="font-bold text-gray-900">Blog Admin</span>
          </div>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <div
                className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  item.active
                    ? "bg-[#e8f5e9] text-[#386758]"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </div>
            </Link>
          ))}
        </nav>
        <div className="p-3 border-t">
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start text-gray-500 hover:text-red-600"
            onClick={logout}
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 min-w-0">
        <header className="bg-white border-b px-4 py-3 flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </Button>
          <span className="text-sm text-gray-500">MySentry Blog CMS</span>
        </header>
        <div className="p-6">
          {isList && <BlogList token={token} />}
          {isCategories && <CategoryManager token={token} />}
        </div>
      </div>
    </div>
  );
}
