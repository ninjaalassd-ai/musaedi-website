"use client";

import { useSite } from "@/components/site-provider";
import { PageLayout } from "@/components/ui";

export default function DrugInteractionCheckerPage() {
  const { locale } = useSite();
  const isArabic = locale === "ar";

  return (
    <PageLayout
      locale={locale}
      eyebrow={isArabic ? "أمان الدواء" : "Medication safety"}
      title={isArabic ? "فحص التداخلات الدوائية بسرعة" : "Check medication interactions quickly"}
      description={isArabic ? "ساعد في تحديد المخاطر المحتملة قبل أن تؤثر على صحة المريض." : "Help identify potential risks before they affect patient care."}
      primaryAction={{ href: "/download", label: isArabic ? "تنزيل التطبيق" : "Download the app" }}
    >
      <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/80">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{isArabic ? "الميزات المتاحة" : "What the experience offers"}</h2>
        <ul className="mt-6 space-y-3 text-slate-600 dark:text-slate-300">
          <li>• {isArabic ? "عرض تداخلات الأدوية بشكل واضح ومُرتب." : "Review key interactions in a clean, structured view."}</li>
          <li>• {isArabic ? "تبادل سريع للمعلومات مع الفريق العلاجي." : "Share critical insights with the care team quickly."}</li>
          <li>• {isArabic ? "تسليط الضوء على المخاطر إلى جانب المقاييس السريرية." : "Highlight risk factors alongside clinical context."}</li>
        </ul>
      </div>
    </PageLayout>
  );
}
