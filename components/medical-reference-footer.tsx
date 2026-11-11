type ReferenceLink = {
  label: string;
  href: string;
};

type MedicalReferenceFooterProps = {
  locale: "en" | "ar";
  lastReviewed: string;
  scope: { en: string; ar: string };
  sources: ReferenceLink[];
};

export function MedicalReferenceFooter({ locale, lastReviewed, scope, sources }: MedicalReferenceFooterProps) {
  const isArabic = locale === "ar";

  return (
    <footer
      className="mt-8 rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/80"
      dir={isArabic ? "rtl" : "ltr"}
      lang={locale}
    >
      <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-300">
        <span>{isArabic ? "المصادر والمراجعة" : "Sources and review"}</span>
        <span className="text-slate-400 dark:text-slate-500">|</span>
        <span className="text-slate-500 dark:text-slate-400">Sources and review</span>
      </div>

      <div className="mt-5 space-y-5 text-sm leading-7 text-slate-700 dark:text-slate-300">
        <div>
          <p className="font-semibold text-slate-900 dark:text-white">{isArabic ? "تنبيه عام / General alert" : "General alert / تنبيه عام"}</p>
          <p className="mt-2 text-slate-700 dark:text-slate-300" dir="rtl">
            يقدم الموقع معلومات تعليمية وأدوات مساعدة فقط، ولا يستبدل التقييم السريري أو السياسات المعتمدة في المؤسسة الصحية. في الحالات الطارئة، اتبع بروتوكولات الطوارئ المحلية وقرار الفريق الطبي المؤهل.
          </p>
          <p className="mt-2 text-slate-700 dark:text-slate-300" dir="ltr">
            This site provides educational information and supporting tools only and does not replace clinical assessment or institution-approved policies. In emergencies, follow local emergency protocols and the decisions of the qualified clinical team.
          </p>
        </div>

        <div>
          <p className="font-semibold text-slate-900 dark:text-white">{isArabic ? "نطاق المعلومات / Scope" : "Scope / نطاق المعلومات"}</p>
          <p className="mt-2" dir="rtl">{scope.ar}</p>
          <p className="mt-2" dir="ltr">{scope.en}</p>
        </div>

        <div>
          <p className="font-semibold text-slate-900 dark:text-white">{isArabic ? "تاريخ آخر مراجعة / Last reviewed" : "Last reviewed / تاريخ آخر مراجعة"}</p>
          <p className="mt-2">{lastReviewed}</p>
        </div>

        <div>
          <p className="font-semibold text-slate-900 dark:text-white">{isArabic ? "المصادر الرسمية / Official sources" : "Official sources / المصادر الرسمية"}</p>
          <ul className="mt-2 list-disc space-y-1 pl-5" dir="ltr">
            {sources.map((source) => (
              <li key={source.href}>
                <a href={source.href} target="_blank" rel="noreferrer" className="text-blue-600 underline decoration-blue-400 underline-offset-4 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200">
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
