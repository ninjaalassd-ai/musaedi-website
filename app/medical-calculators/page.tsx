"use client";

import Link from "next/link";
import { useSite } from "@/components/site-provider";
import { PageLayout } from "@/components/ui";
import { calculatorsContent, getLocalizedText } from "@/lib/content";

export default function MedicalCalculatorsPage() {
  const { locale } = useSite();

  return (
    <PageLayout
      locale={locale}
      eyebrow={getLocalizedText(calculatorsContent.hero.eyebrow, locale)}
      title={getLocalizedText(calculatorsContent.hero.title, locale)}
      description={getLocalizedText(calculatorsContent.hero.description, locale)}
      primaryAction={{ href: "/download", label: locale === "ar" ? "تنزيل التطبيق" : "Download the app" }}
    >
      <div className="grid gap-6 md:grid-cols-2">
        {calculatorsContent.cards.map((card) => (
          <Link key={card.href} href={card.href} className="rounded-[1.5rem] border border-slate-200 bg-white/80 p-8 shadow-lg transition hover:-translate-y-1 hover:border-blue-400 dark:border-slate-800 dark:bg-slate-900/80">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{getLocalizedText(card.title, locale)}</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">{getLocalizedText(card.description, locale)}</p>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}
