"use client";

import { useSite } from "@/components/site-provider";
import { PageLayout } from "@/components/ui";

export default function BecomeSupporterPage() {
  const { locale } = useSite();
  const isArabic = locale === "ar";

  return (
    <PageLayout
      locale={locale}
      eyebrow={isArabic ? "دعم اختياري ومتميز" : "Optional, premium support"}
      title={isArabic ? "كن داعمًا لمساعدي وادعم رحلة الرعاية الطبية الرقمية" : "Become a supporter of Musaedi and strengthen the medical experience"}
      description={isArabic ? "إذا وجدت هذه الأدوات مفيدة، فالدعم اختياري بالكامل ويُقدّر كثيرًا. يساعدك على البقاء مع مشروع نضيف له الثقة والاحترافية من يوم لآخر." : "If you find these tools valuable, support is completely optional and deeply appreciated. It helps sustain a project built with trust, clarity, and professionalism."}
      primaryAction={{ href: "/contact", label: isArabic ? "تواصل معنا" : "Contact us" }}
      secondaryAction={{ href: "/features", label: isArabic ? "استعرض الميزات" : "Explore features" }}
    >
      <section className="rounded-[2rem] border border-slate-200/80 bg-white/85 p-12 text-center shadow-xl shadow-blue-100/60 backdrop-blur dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-none">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600 dark:text-blue-300">
            {isArabic ? "قريبًا" : "Coming soon"}
          </p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
            {isArabic ? "صفحة كن داعماً قيد الإعداد" : "Become a supporter is coming soon"}
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            {isArabic ? "نعمل على تجهيز صفحة الدعم قريبًا. تابعنا للحصول على التحديثات والأدوات الجديدة." : "We're preparing the supporter page now. Check back soon for updates and new ways to contribute."}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              {isArabic ? "تواصل معنا" : "Contact us"}
            </a>
            <a
              href="/features"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-blue-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
            >
              {isArabic ? "استعرض الميزات" : "Explore features"}
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
