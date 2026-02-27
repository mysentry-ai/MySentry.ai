import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Loader2 } from "lucide-react";

interface AdminLoginProps {
  onLogin: (username: string, password: string) => Promise<any>;
  error?: string;
  isLoading?: boolean;
}

export default function AdminLogin({ onLogin, error, isLoading }: AdminLoginProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onLogin(username, password);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#e8f5e9] via-[#f0faf2] to-[#dff0e4] flex-col justify-center items-center p-12 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#6AD990]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-[#004F7B]/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 text-center max-w-md">
          <img src="/favicon.svg" alt="MySentry" className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-[#232020] mb-3">MySentry Blog CMS</h1>
          <p className="text-[#5C5C5C] text-lg leading-relaxed">
            Create, manage, and publish blog content with AI-powered tools and SEO optimization.
          </p>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="flex-1 flex items-center justify-center bg-white p-8">
        <div className="w-full max-w-sm">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
            <img src="/favicon.svg" alt="MySentry" className="w-10 h-10" />
            <span className="text-xl font-bold text-[#232020]">Blog CMS</span>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#232020]">Welcome back</h2>
            <p className="text-[#5C5C5C] mt-1">Sign in to manage your blog content</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <Label htmlFor="username" className="text-sm font-medium text-[#232020]">
                Username
              </Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
                className="h-11 bg-[#F5F7F7] border-[#E5E7EB] text-[#232020] placeholder:text-[#9CA3AF] focus:border-[#6AD990] focus:ring-[#6AD990]/20 rounded-lg"
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="password" className="text-sm font-medium text-[#232020]">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="h-11 bg-[#F5F7F7] border-[#E5E7EB] text-[#232020] placeholder:text-[#9CA3AF] focus:border-[#6AD990] focus:ring-[#6AD990]/20 pr-10 rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#5C5C5C] transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {error && (
              <div className="text-red-600 text-sm bg-red-50 border border-red-200 p-3 rounded-lg">
                {error}
              </div>
            )}

            <Button
              type="submit"
              className="w-full h-11 bg-[#6AD990] hover:bg-[#5bc97e] text-[#232020] font-semibold rounded-lg shadow-none transition-colors"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>

          <p className="text-center text-xs text-[#9CA3AF] mt-8">
            MySentry Blog Management System
          </p>
        </div>
      </div>
    </div>
  );
}
