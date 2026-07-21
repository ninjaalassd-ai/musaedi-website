"use client";

import { useSite } from "@/components/site-provider";
import { PageLayout } from "@/components/ui";

export default function BmiBmrPage() {
  const { locale } = useSite();
  const isArabic = locale === "ar";

  return (
    <PageLayout
      locale={locale}
      eyebrow={isArabic ? "مقاييس صحية" : "Health metrics"}
      title={isArabic ? "حساب BMI و BMR بسرعة" : "Calculate BMI and BMR quickly"}
      description={isArabic ? "تقييم سهل ومباشر يدعم القرار السريري والتواصل مع المريض." : "A fast assessment that supports clinical decisions and patient communication."}
      primaryAction={{ href: "/download", label: isArabic ? "تنزيل التطبيق" : "Download the app" }}
    >
      <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/80">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{isArabic ? "ماذا يقدم هذا القسم" : "What this module helps with"}</h2>
        <p className="mt-4 text-slate-600 dark:text-slate-300">{isArabic ? "حسابات واضحة ومقاييس سهلة لتخطيط الرعاية وتقييم الوضع العام." : "Clear calculations and easy metrics for care planning and general assessment."}</p>
      </div>
    </PageLayout>
  );
}
