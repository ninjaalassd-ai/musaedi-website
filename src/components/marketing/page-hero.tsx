import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Locale } from "@/src/types/i18n";

export function PageHero({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  locale,
}: {
  eyebrow: string;
  title: string;
  description: string;
  primaryAction?: { href: string; label: string };
  secondaryAction?: { href: string; label: string };
  locale: Locale;
}) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 px-6 py-16 text-white shadow-2xl sm:px-10 lg:px-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.24),_transparent_45%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between" dir={locale === "ar" ? "rtl" : "ltr"}>
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-100">{eyebrow}</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
          <p className="mt-4 text-lg text-blue-50/90">{description}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {primaryAction ? (
            <Link
              href={primaryAction.href}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-blue-700 transition hover:-translate-y-1"
            >
              {primaryAction.label} <ArrowRight className="h-4 w-4" />
            </Link>
          ) : null}
          {secondaryAction ? (
            <Link
              href={secondaryAction.href}
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-6 py-3 font-semibold backdrop-blur transition hover:bg-white/20"
            >
              {secondaryAction.label}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
