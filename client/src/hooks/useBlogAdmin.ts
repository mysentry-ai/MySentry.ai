import { useState, useEffect, useCallback } from "react";
import { trpc } from "@/lib/trpc";
import {
  getBlogAdminToken,
  setBlogAdminToken,
  clearBlogAdminToken,
} from "@/lib/blogAdminToken";

export function useBlogAdmin() {
  const [token, setToken] = useState<string | null>(() => getBlogAdminToken());
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const verifyQuery = trpc.blog.adminVerify.useQuery(
    { token: token || "" },
    { enabled: !!token, retry: false }
  );

  useEffect(() => {
    if (!token) {
      setIsAuthenticated(false);
      setIsLoading(false);
      return;
    }
    if (verifyQuery.data) {
      setIsAuthenticated(verifyQuery.data.valid);
      setIsLoading(false);
    }
    if (verifyQuery.error) {
      setIsAuthenticated(false);
      setIsLoading(false);
    }
  }, [token, verifyQuery.data, verifyQuery.error]);

  const loginMutation = trpc.blog.adminLogin.useMutation();

  const login = useCallback(async (username: string, password: string) => {
    const result = await loginMutation.mutateAsync({ username, password });
    setBlogAdminToken(result.token);
    setToken(result.token);
    setIsAuthenticated(true);
    return result;
  }, [loginMutation]);

  const logoutMutation = trpc.blog.adminLogout.useMutation();

  const logout = useCallback(async () => {
    if (token) {
      try {
        await logoutMutation.mutateAsync({ token });
      } catch {}
    }
    clearBlogAdminToken();
    setToken(null);
    setIsAuthenticated(false);
  }, [token, logoutMutation]);

  return {
    token,
    isAuthenticated,
    isLoading,
    login,
    logout,
    loginError: loginMutation.error?.message,
    isLoginLoading: loginMutation.isPending,
  };
}
