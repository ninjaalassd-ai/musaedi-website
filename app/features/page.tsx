"use client";

import { useSite } from "@/components/site-provider";
import { FeatureCard, PageLayout } from "@/components/ui";
import { featuresContent, getLocalizedText } from "@/lib/content";

export default function FeaturesPage() {
  const { locale } = useSite();

  return (
    <PageLayout
      locale={locale}
      eyebrow={getLocalizedText(featuresContent.hero.eyebrow, locale)}
      title={getLocalizedText(featuresContent.hero.title, locale)}
      description={getLocalizedText(featuresContent.hero.description, locale)}
      primaryAction={{ href: "/download", label: locale === "ar" ? "تنزيل التطبيق" : "Download the app" }}
      secondaryAction={{ href: "/medical-calculators", label: locale === "ar" ? "الآلات الحاسبة" : "View calculators" }}
    >
      <div className="grid gap-6 md:grid-cols-3">
        {featuresContent.cards.map((card) => (
          <FeatureCard key={card.title.en} title={getLocalizedText(card.title, locale)} description={getLocalizedText(card.description, locale)} locale={locale} href={card.href} />
        ))}
      </div>
    </PageLayout>
  );
}
