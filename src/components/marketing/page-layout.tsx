import type { ReactNode } from "react";
import type { Locale } from "@/src/types/i18n";
import { PageHero } from "@/src/components/marketing/page-hero";

export function PageLayout({
  locale,
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  children,
}: {
  locale: Locale;
  eyebrow: string;
  title: string;
  description: string;
  primaryAction?: { href: string; label: string };
  secondaryAction?: { href: string; label: string };
  children: ReactNode;
}) {
  return (
    <div className="space-y-8" dir={locale === "ar" ? "rtl" : "ltr"}>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={description}
        primaryAction={primaryAction}
        secondaryAction={secondaryAction}
        locale={locale}
      />
      {children}
    </div>
  );
}
