import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import type { AuthState, User, UserRole } from "@/types";
import { apiClient } from "@/services/apiClient";

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    token: null,
    isAuthenticated: false,
    isLoading: true,
  });

  useEffect(() => {
    const token = localStorage.getItem("sv_token");
    if (token) {
      // TODO: validate token with backend
      apiClient
        .get<User>("/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setState({
            user: res.data,
            token,
            isAuthenticated: true,
            isLoading: false,
          });
        })
        .catch(() => {
          localStorage.removeItem("sv_token");
          setState({ user: null, token: null, isAuthenticated: false, isLoading: false });
        });
    } else {
      setState((s) => ({ ...s, isLoading: false }));
    }
  }, []);

  const login = async (email: string, password: string) => {
    const res = await apiClient.post<{ user: User; token: string }>("/auth/login", {
      email,
      password,
    });
    const { user, token } = res.data;
    localStorage.setItem("sv_token", token);
    setState({ user, token, isAuthenticated: true, isLoading: false });
  };

  const logout = () => {
    localStorage.removeItem("sv_token");
    setState({ user: null, token: null, isAuthenticated: false, isLoading: false });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
