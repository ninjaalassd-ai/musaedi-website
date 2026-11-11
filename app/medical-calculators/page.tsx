"use client";

import Link from "next/link";
import { useSite } from "@/components/site-provider";
import { PageLayout } from "@/components/ui";
import { MedicalReferenceFooter } from "@/components/medical-reference-footer";
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

      <MedicalReferenceFooter
        locale={locale}
        lastReviewed="2026-11-05"
        scope={{
          en: "Educational calculator directory for general clinical awareness. Tools provide supporting estimates only and do not replace clinician judgment, patient assessment, or institutional policy.",
          ar: "دليل حاسبات تعليمية للوعي السريري العام. الأدوات توفر تقديرات داعمة فقط ولا تستبدل حكم الطبيب أو تقييم المريض أو سياسة المؤسسة.",
        }}
        sources={[
          { label: "WHO: Obesity and overweight", href: "https://www.who.int/news-room/fact-sheets/detail/obesity" },
          { label: "NICE: Intravenous fluid therapy in adults in hospital", href: "https://www.nice.org.uk/guidance/cg174" },
        ]}
      />
    </PageLayout>
  );
}
