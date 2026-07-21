"use client";

import { useSite } from "@/components/site-provider";
import { PageLayout } from "@/components/ui";

const questions = [
  {
    question: { en: "Is the site responsive?", ar: "هل الموقع متجاوب؟" },
    answer: { en: "Yes. Musaedi is designed mobile-first and adapts smoothly to every screen size.", ar: "نعم. تم تصميم مساعدي ليكون أولاً على الجوال ويتكيف بسلاسة مع جميع أحجام الشاشات." },
  },
  {
    question: { en: "Does it support both Arabic and English?", ar: "هل يدعم العربية والإنجليزية؟" },
    answer: { en: "Yes. The experience switches between Arabic and English with a fully mirrored layout in Arabic.", ar: "نعم. يدعم التجربة التبديل بين العربية والإنجليزية مع تخطيط معكوس بالكامل بالعربية." },
  },
];

export default function FaqPage() {
  const { locale } = useSite();
  const isArabic = locale === "ar";
  const t = (value: { en: string; ar: string }) => (isArabic ? value.ar : value.en);

  return (
    <PageLayout
      locale={locale}
      eyebrow={isArabic ? "الأسئلة الشائعة" : "FAQ"}
      title={isArabic ? "معلومات سريعة عن الموقع" : "Fast answers about the experience"}
      description={isArabic ? "إجابات قصيرة وأسئلة شائعة يرد عليها في أي وقت." : "Short answers to common questions people ask about the project."}
      primaryAction={{ href: "/contact", label: isArabic ? "تواصل معنا" : "Contact us" }}
    >
      <div className="grid gap-4">
        {questions.map((item) => (
          <div key={item.question.en} className="rounded-[1.5rem] border border-slate-200 bg-white/80 p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900/80">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{t(item.question)}</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">{t(item.answer)}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
