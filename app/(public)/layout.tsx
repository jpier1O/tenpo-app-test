'use client'

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-lavender text-gray-800 px-4">
      {children}
    </main>
  );
}

