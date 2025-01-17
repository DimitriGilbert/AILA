"use client";

import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, type ReactNode } from "react";
import { ThemeToggle } from "~/components/theme-toggle";
import { Menu } from "./menu";
import Link from "next/link";

export function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className="min-h-screen bg-background">
          <header className="container mx-auto p-4">
            <div className="flex justify-between">
              <Link href="/"><h1 className="text-center text-4xl font-bold">AILA Project</h1></Link>
              <Menu />
              <ThemeToggle />
            </div>
          </header>
          {children}
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
