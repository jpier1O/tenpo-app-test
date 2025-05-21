// "use client";

// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { useAuth } from "@/context/AuthContext";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";

// export const Navbar = () => {
//   const pathname = usePathname();
//   const router = useRouter();
//   const { logout } = useAuth();

//   const navItems = [
//     { name: "Home", href: "/home" },
//     { name: "Perfil", href: "/profile" },
//     { name: "Configuración", href: "/settings" },
//   ];

//   const handleLogout = () => {
//     logout();
//     router.replace("/login");
//   };

//   return (
//     <header className="bg-white shadow fixed w-full z-10 top-0 left-0">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//         <div className="flex items-center gap-6">
//           <h1 className="text-xl font-bold text-purple">Tenpo App</h1>
//           <nav className="flex gap-4">
//             {navItems.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className={cn(
//                   "text-sm font-medium hover:text-purple",
//                   pathname === item.href ? "text-purple font-semibold" : "text-gray-700"
//                 )}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </nav>
//         </div>
//         <Button variant="outline" onClick={handleLogout}>
//           Logout
//         </Button>
//       </div>
//     </header>
//   );
// };
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
    { name: "Home", href: "/home" },
    { name: "Perfil", href: "/profile" },
    { name: "Configuración", href: "/settings" },
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
                href={item.href}
                className={cn(
                  "text-sm font-medium hover:text-purple",
                  pathname === item.href ? "text-purple font-semibold" : "text-gray-700"
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
            Logout
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
            Logout
          </Button>
        </nav>
      )}
    </header>
  );
};
