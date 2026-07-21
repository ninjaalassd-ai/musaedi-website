"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Locale, Theme } from "@/src/types/i18n";

type SiteContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const SiteContext = createContext<SiteContextValue | undefined>(undefined);

export function SiteProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [theme, setThemeState] = useState<Theme>("light");

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const storedLocale = window.localStorage.getItem("musaedi-locale") as Locale | null;
    if (storedLocale === "en" || storedLocale === "ar") {
      setLocaleState(storedLocale);
    }

    const storedTheme = window.localStorage.getItem("musaedi-theme") as Theme | null;
    if (storedTheme === "light" || storedTheme === "dark") {
      setThemeState(storedTheme);
    } else {
      setThemeState(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = locale;
    window.localStorage.setItem("musaedi-theme", theme);
    window.localStorage.setItem("musaedi-locale", locale);
  }, [theme, locale]);

  const setLocale = (value: Locale) => setLocaleState(value);
  const setTheme = (value: Theme) => setThemeState(value);

  const value = useMemo(() => ({ locale, setLocale, theme, setTheme }), [locale, theme]);

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error("useSite must be used within a SiteProvider");
  }
  return context;
}
