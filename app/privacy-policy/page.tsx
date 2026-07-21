"use client";

import { useSite } from "@/components/site-provider";
import { PageLayout } from "@/components/ui";
import { policyContent, getLocalizedText } from "@/lib/content";

export default function PrivacyPolicyPage() {
  const { locale } = useSite();

  return (
    <PageLayout
      locale={locale}
      eyebrow={getLocalizedText(policyContent.hero.eyebrow, locale)}
      title={getLocalizedText(policyContent.hero.title, locale)}
      description={getLocalizedText(policyContent.hero.description, locale)}
      primaryAction={{ href: "/terms-of-service", label: locale === "ar" ? "شروط الاستخدام" : "Terms of service" }}
    >
      <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/80">
        <p className="text-slate-600 dark:text-slate-300">{locale === "ar" ? "نحن نقدر خصوصيتك ونحافظ على الشفافية في كيفية استخدام المعلومات التي تقدمها لنا." : "We value your privacy and keep our handling of information transparent and respectful."}</p>
      </div>
    </PageLayout>
  );
}
