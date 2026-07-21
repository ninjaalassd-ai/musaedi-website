"use client";

import Link from "next/link";
import { ArrowRight, Menu, Moon, Sun, Stethoscope, X } from "lucide-react";
import { useMemo, useState } from "react";
import { navItems, translateLabel } from "@/src/config/site";
import { footerLinks } from "@/src/content/marketing";
import { useSite } from "@/src/components/layout/site-provider";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const { locale, setLocale, theme, setTheme } = useSite();
  const [menuOpen, setMenuOpen] = useState(false);
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.14),_transparent_42%)] text-slate-900 transition-colors dark:text-slate-100">
      <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3 text-lg font-semibold tracking-tight">
            <img src="/musaedi-logo.png" alt="Musaedi logo" className="h-11 w-11 rounded-2xl bg-white/80 p-2 shadow-lg object-cover" />
            <span>
              <span className="block text-sm text-slate-500 dark:text-slate-400">Karar Medical Apps</span>
              <span className="text-slate-900 dark:text-white">{locale === "ar" ? "مساعدي" : "Musaedi"}</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-blue-600 dark:text-slate-300">
                {translateLabel(item.label, locale)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setLocale(locale === "en" ? "ar" : "en")}
              className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-blue-400 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
              aria-label="Switch language"
            >
              {locale === "en" ? "العربية" : "English"}
            </button>
            <button
              type="button"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="rounded-full border border-slate-200 bg-white p-2.5 text-slate-700 shadow-sm transition hover:border-blue-400 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
              aria-label="Toggle color theme"
            >
              {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              className="rounded-full border border-slate-200 bg-white p-2.5 text-slate-700 shadow-sm transition hover:border-blue-400 hover:text-blue-700 lg:hidden dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div className="border-t border-slate-200 bg-white/95 px-4 py-4 dark:border-slate-800 dark:bg-slate-950/95 lg:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-blue-600 dark:text-slate-300" onClick={() => setMenuOpen(false)}>
                  {translateLabel(item.label, locale)}
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        {children}
      </main>

      <footer className="border-t border-slate-200 bg-white/70 py-10 dark:border-slate-800 dark:bg-slate-950/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 text-sm text-slate-600 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 dark:text-slate-300">
          <div>
            <p className="font-semibold text-slate-900 dark:text-white">{locale === "ar" ? "مساعدي" : "Musaedi"}</p>
            <p>{locale === "ar" ? "منصة طبية حديثة مصممة للسرعة والثقة." : "A premium medical platform for speed and trust."}</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            {footerLinks.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-blue-600">
                {translateLabel(item.label, locale)}
              </Link>
            ))}
            <Link href="/contact" className="inline-flex items-center gap-1 font-semibold text-blue-700 transition hover:text-blue-800 dark:text-blue-300">
              {locale === "ar" ? "تواصل معنا" : "Contact us"} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-6 max-w-7xl px-4 text-center text-xs text-slate-500 sm:px-6 lg:px-8 dark:text-slate-400">
          © {currentYear} Karar Medical Apps. {locale === "ar" ? "جميع الحقوق محفوظة." : "All rights reserved."}
        </div>
      </footer>
    </div>
  );
}
