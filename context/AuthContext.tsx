"use client";

import { EXPIRATION_TIME_IN_MINUTES } from "@/lib/constants";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type AuthContextType = {
  token: string | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    const expiration = sessionStorage.getItem("token_expiration");
  
    if (storedToken && expiration && Date.now() < Number(expiration)) {
      setToken(storedToken);
    } else {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("token_expiration");
    }
  
    setLoading(false);
  }, []);

  const login = (email: string, password: string) => {
    if (email === "tenpouser@tenpo.com" && password === "Adm1nT3np0!") {
      const fakeToken = "token-fake-tenpo";
      const expiration = Date.now() + EXPIRATION_TIME_IN_MINUTES * 60 * 1000;
  
      sessionStorage.setItem("token", fakeToken);
      sessionStorage.setItem("token_expiration", expiration.toString());
  
      setToken(fakeToken);
    } else {
      throw new Error("Credenciales incorrectas");
    }
  };

  const logout = () => {
    setToken(null);
    sessionStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
