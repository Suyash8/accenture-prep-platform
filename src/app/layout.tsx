import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Accenture Practice Platform 2026",
  description: "Official pattern practice suite for Accenture: Cognitive games, Pseudocode, Technical MCQ, Coding, and SJT rounds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans bg-[#f8fafc] dark:bg-[#0f172a] text-slate-900 dark:text-slate-100 transition-colors">
        <ThemeProvider>
          {/* Simple Unified Navigation Bar */}
          <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2.5 font-bold text-slate-900 dark:text-white hover:text-purple-600 transition-colors">
                <span className="w-7 h-7 rounded-lg bg-purple-600 text-white flex items-center justify-center text-xs font-black">
                  A&gt;
                </span>
                <span className="text-sm font-semibold tracking-tight">Accenture Prep</span>
              </Link>

              <div className="flex items-center gap-2 sm:gap-4">
                <nav className="flex items-center gap-1 sm:gap-2 text-xs font-medium text-slate-600 dark:text-slate-400">
                  <Link
                    href="/games"
                    className="px-2.5 py-1.5 rounded-lg hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    Games
                  </Link>
                  <Link
                    href="/pseudocode"
                    className="px-2.5 py-1.5 rounded-lg hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    Pseudocode
                  </Link>
                  <Link
                    href="/coding"
                    className="px-2.5 py-1.5 rounded-lg hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    Coding
                  </Link>
                  <Link
                    href="/sql"
                    className="px-2.5 py-1.5 rounded-lg hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    SQL
                  </Link>
                  <Link
                    href="/frontend"
                    className="px-2.5 py-1.5 rounded-lg hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors hidden md:inline-block"
                  >
                    Frontend
                  </Link>
                  <Link
                    href="/mocks"
                    className="px-2.5 py-1.5 rounded-lg hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    Tests
                  </Link>
                  <Link
                    href="/analytics"
                    className="px-2.5 py-1.5 rounded-lg hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    Analytics
                  </Link>
                  <Link
                    href="/mistakes"
                    className="px-2.5 py-1.5 rounded-lg hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    Notebook
                  </Link>
                </nav>

                <ThemeToggle />
              </div>
            </div>
          </header>

          {/* Page Content */}
          <div className="flex-1 flex flex-col">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
