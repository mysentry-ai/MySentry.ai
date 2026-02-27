import { useState, useEffect, useCallback } from "react";
import { trpc } from "@/lib/trpc";

const TOKEN_KEY = "blog_admin_token";

export function useBlogAdmin() {
  const [token, setToken] = useState<string | null>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(TOKEN_KEY);
    }
    return null;
  });
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
    localStorage.setItem(TOKEN_KEY, result.token);
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
    localStorage.removeItem(TOKEN_KEY);
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
