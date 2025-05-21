"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/Button/button";
import { Card } from "@/components/ui/Card/card";
import { Input } from "@/components/ui/Input/input";
import { EyeClosedIcon, EyeIcon } from "lucide-react";
import { LoadingSpinner } from "@/components/ui/loadingSpinner";

const Login = () => {
  const router = useRouter();
  const { token, login, loading } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isView, setIsView] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (hasMounted && !loading && token) {
      router.replace("/home");
    }
  }, [hasMounted, loading, token]);

  const handleLogin = () => {
    setError("");
  
    if (!email || !password) {
      setError("Por favor ingresa email y contraseña.");
      return;
    }
  
    try {
      login(email, password);
    } catch (err) {
      setError("Correo o contraseña incorrectos.");
      console.log(err);
    }
  };

  if (!hasMounted || loading) return <LoadingSpinner message="Verificando sesión..." />;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-lavender px-4">
      <div className="flex justify-center items-center py-6">
        <p className="text-3xl font-semibold text-black">Tenpo App</p>
      </div>

      <div className="flex items-center justify-center">
        <Card className="p-8 w-[350px]">
          <div className="flex flex-col gap-2">
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Input
              placeholder="E-mail"
              className="flex-1 text-purple"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="relative w-full">
              <Input
                type={isView ? "text" : "password"}
                placeholder="Password"
                className="pr-10 w-full text-purple"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setIsView(!isView)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-purple"
              >
                {isView ? <EyeClosedIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
              </button>
            </div>
            {/* add forgot password to demostrate the increment of functionalities in the future */}
            <div className="text-left">
              <Button
                disabled={true}
                variant="link"
                className="text-purple2 font-normal"
                onClick={() => router.push("/forgot-password")}
              >
                Forgot password
              </Button>
            </div>
            <Button onClick={handleLogin}>Log in</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;
