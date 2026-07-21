"use client";

import Link from "next/link";
import { useSite } from "@/components/site-provider";
import { PageLayout } from "@/components/ui";

export default function DownloadPage() {
  const { locale } = useSite();
  const isArabic = locale === "ar";

  return (
    <PageLayout
      locale={locale}
      eyebrow={isArabic ? "ابدأ الآن" : "Get started"}
      title={isArabic ? "حمّل مساعدي وابدأ بالثقة" : "Download Musaedi and begin with confidence"}
      description={isArabic ? "تطبيق مصمم ليكون سريعاً، أنيقاً، ومناسباً للقرارات الطبية اليومية." : "An app designed to feel fast, polished, and relevant to everyday medical decisions."}
      primaryAction={{ href: "/", label: isArabic ? "العودة للرئيسية" : "Return home" }}
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{isArabic ? "متوفر قريباً" : "Coming soon"}</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">{isArabic ? "سيتم الإعلان عن روابط التثبيت بمجرد الانتهاء من الإطلاق." : "Install links will be shared as soon as deployment is finalized."}</p>
        </div>
        <div className="rounded-[2rem] border border-blue-200 bg-blue-50/80 p-8 shadow-lg dark:border-blue-900/50 dark:bg-blue-950/50">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{isArabic ? "ما ستجده عند التثبيت" : "What you will find once installed"}</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">{isArabic ? "تجربة أنيقة ومبنية على ثقة المستخدم، مع أدوات طبية موثوقة للجميع." : "A refined experience built around trust, with reliable medical tools for everyday use."}</p>
          <Link href="/contact" className="mt-6 inline-flex text-sm font-semibold text-blue-700 dark:text-blue-300">{isArabic ? "تواصل معنا للمزيد" : "Contact us for more details"}</Link>
        </div>
      </div>
    </PageLayout>
  );
}
