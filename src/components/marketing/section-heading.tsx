import { Sparkles } from "lucide-react";
import type { Locale } from "@/src/types/i18n";

export function SectionHeading({
  eyebrow,
  title,
  description,
  locale,
}: {
  eyebrow: string;
  title: string;
  description: string;
  locale: Locale;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center" dir={locale === "ar" ? "rtl" : "ltr"}>
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 dark:border-blue-900/50 dark:bg-blue-950/50 dark:text-blue-200">
        <Sparkles className="h-4 w-4" />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
        {title}
      </h2>
      <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">{description}</p>
    </div>
  );
}
