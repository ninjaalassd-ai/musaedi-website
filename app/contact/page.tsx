"use client";

import { useSite } from "@/components/site-provider";
import { PageLayout } from "@/components/ui";

export default function ContactPage() {
  const { locale } = useSite();
  const isArabic = locale === "ar";

  return (
    <PageLayout
      locale={locale}
      eyebrow={isArabic ? "تواصل معنا" : "Get in touch"}
      title={isArabic ? "نحن هنا لدعم أفكارك ومشروعك" : "We are here to support your vision"}
      description={isArabic ? "إذا كنت بحاجة إلى استفسارات أو تعاون أو ملاحظات، فسنكون سعداء بالاستجابة." : "If you have questions, collaboration ideas, or feedback, we would be glad to hear from you."}
      primaryAction={{ href: "/", label: isArabic ? "العودة للرئيسية" : "Back home" }}
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{isArabic ? "المعلومات" : "Contact details"}</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">{isArabic ? "البريد: ninjaalassd@gmail.com" : "Email: ninjaalassd@gmail.com"}</p>
          <p className="mt-2 text-slate-600 dark:text-slate-300">{isArabic ? "المنصة: Karar Medical Apps" : "Studio: Karar Medical Apps"}</p>
        </div>
        <div className="rounded-[2rem] border border-blue-200 bg-blue-50/80 p-8 shadow-lg dark:border-blue-900/50 dark:bg-blue-950/50">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{isArabic ? "البريد فقط للرسائل" : "Email only for messages"}</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">{isArabic ? "لا يوجد دردشة فورية. الرجاء إرسال استفسارك عبر البريد الإلكتروني فقط." : "No live chat available. Please send your inquiry via email only."}</p>
          <p className="mt-4 text-slate-600 dark:text-slate-300">{isArabic ? "البريد الإلكتروني هو القناة الرسمية الوحيدة للدعم." : "Email is the only official support channel."}</p>
        </div>
      </div>
    </PageLayout>
  );
}
