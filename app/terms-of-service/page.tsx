"use client";

import { useSite } from "@/components/site-provider";
import { PageLayout } from "@/components/ui";

export default function TermsOfServicePage() {
  const { locale } = useSite();
  const isArabic = locale === "ar";

  return (
    <PageLayout
      locale={locale}
      eyebrow={isArabic ? "الشروط" : "Terms"}
      title={isArabic ? "شروط الاستخدام" : "Terms of service"}
      description={isArabic ? "هذه الشروط تنظم استخدامك للموقع والتطبيق المعروض هنا." : "These terms govern your use of the site and the app experience presented here."}
      primaryAction={{ href: "/privacy-policy", label: isArabic ? "سياسة الخصوصية" : "Privacy policy" }}
    >
      <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/80">
        <p className="text-slate-600 dark:text-slate-300">{isArabic ? "يجب استخدام المحتوى والموارد بطريقة مسؤولة واحترافية، مع الالتزام بالنظام العام واللوائح الطبية المعمول بها." : "Content and resources should be used responsibly and professionally, in line with applicable medical and public guidance."}</p>
      </div>
    </PageLayout>
  );
}
