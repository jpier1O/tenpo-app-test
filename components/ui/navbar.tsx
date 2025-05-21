"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/Button/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/home", enabled: true },
    { name: "Perfil", href: "/profile", enabled: true },
    { name: "Configuración", href: "/settings", enabled: false },
  ];

  const handleLogout = () => {
    logout();
    router.replace("/login");
  };

  return (
    <header className="bg-white shadow fixed w-full z-10 top-0 left-0">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <h1 className="text-xl font-bold text-purple">Tenpo App</h1>

          <nav className="hidden md:flex gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.enabled ? item.href : "#"}
              onClick={(e) => !item.enabled && e.preventDefault()}
              className={cn(
                "text-sm font-medium",
                item.enabled
                  ? pathname === item.href
                    ? "text-purple font-semibold"
                    : "text-gray-700 hover:text-purple"
                  : "text-gray-400 cursor-not-allowed"
              )}
            >
              {item.name}
            </Link>
          ))}

          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="hidden md:inline-flex"
            onClick={handleLogout}
          >
            Cerrar Sesión
          </Button>
          <button
            className="md:hidden text-purple"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="md:hidden bg-white px-6 pb-4 flex flex-col gap-3 shadow">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium hover:text-purple",
                pathname === item.href ? "text-purple font-semibold" : "text-gray-700"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Button variant="outline" onClick={handleLogout}>
            Cerrar Sesión
          </Button>
        </nav>
      )}
    </header>
  );
};
