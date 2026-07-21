import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import type { Locale } from "@/src/types/i18n";

export function FeatureCard({
  title,
  description,
  locale,
  href,
}: {
  title: string;
  description: string;
  locale: Locale;
  href?: string;
}) {
  const cardContent = (
    <>
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20 transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[0_12px_30px_-8px_rgba(37,99,235,0.45)]">
        <ShieldCheck className="h-6 w-6 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-semibold text-slate-900 transition-colors duration-300 ease-out group-hover:text-blue-700 dark:text-white dark:group-hover:text-blue-300">{title}</h3>
          <p className="mt-3 text-slate-600 transition-colors duration-300 ease-out dark:text-slate-300">{description}</p>
        </div>
        {href ? (
          <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700 transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-950/60 dark:text-blue-200 dark:group-hover:bg-blue-500">
            <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
          </span>
        ) : null}
      </div>
    </>
  );

  const sharedClasses =
    "group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 p-7 shadow-[0_20px_70px_-35px_rgba(37,99,235,0.45)] backdrop-blur-xl transition-all duration-300 ease-out will-change-transform hover:-translate-y-2 hover:scale-[1.01] hover:border-blue-400 hover:shadow-[0_30px_80px_-30px_rgba(37,99,235,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-slate-800 dark:bg-slate-900/80 dark:focus-visible:ring-offset-slate-950";

  const cardClasses = `${sharedClasses} ${href ? "cursor-pointer active:scale-[0.99]" : "cursor-default"}`;

  if (!href) {
    return (
      <div className={cardClasses} dir={locale === "ar" ? "rtl" : "ltr"}>
        {cardContent}
      </div>
    );
  }

  return (
    <Link href={href} className={cardClasses} dir={locale === "ar" ? "rtl" : "ltr"} aria-label={title} title={title}>
      {cardContent}
    </Link>
  );
}
