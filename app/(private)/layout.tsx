'use client';

import { Navbar } from "@/components/ui/navbar";
import { ProtectedRoute } from "@/components/protectedRoute";

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute>
      <Navbar />
      <main className="pt-20 px-4 sm:px-8 bg-gray-50 min-h-screen">
        {children}
      </main>
    </ProtectedRoute>
  );
}
