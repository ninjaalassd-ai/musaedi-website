"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AlertTriangle, ArrowRight, Search, ShieldCheck, Stethoscope } from "lucide-react";
import { useSite } from "@/components/site-provider";
import { PageLayout } from "@/components/ui";
import { MedicalReferenceFooter } from "@/components/medical-reference-footer";
import { medicalService } from "@/src/lib/medical-service";

const severityCards = [
  {
    title: { en: "Monitor closely", ar: "راقب عن كثب" },
    description: {
      en: "Potential interaction with manageable clinical impact.",
      ar: "تداخل محتمل مع تأثير سريري يمكن التحكم فيه.",
    },
  },
  {
    title: { en: "Use with caution", ar: "استخدم بحذر" },
    description: {
      en: "Requires dose adjustment or extra monitoring.",
      ar: "يتطلب تعديل الجرعة أو مراقبة إضافية.",
    },
  },
  {
    title: { en: "Avoid combination", ar: "تجنب التداخلات" },
    description: {
      en: "High-risk pairing that should be avoided when possible.",
      ar: "تداخلات عالية المخاطر يجب تجنبها عند الإمكان.",
    },
  },
];

export default function DrugInteractionPage() {
  const { locale } = useSite();
  const isArabic = locale === "ar";
  const t = (value: { en: string; ar: string }) => (isArabic ? value.ar : value.en);

  const [drugA, setDrugA] = useState("warfarin");
  const [drugB, setDrugB] = useState("ibuprofen");
  const [reviewedPair, setReviewedPair] = useState({ drugA: "warfarin", drugB: "ibuprofen" });

  const drugASuggestions = useMemo(() => {
    const query = drugA.trim();
    if (!query) return [];
    return medicalService.searchDrugs(drugA, locale).slice(0, 5).map((drug) => ({
      id: drug.id,
      label: drug.name[locale],
      secondary: drug.synonyms.length ? drug.synonyms[0] : "",
    }));
  }, [drugA, locale]);

  const drugBSuggestions = useMemo(() => {
    const query = drugB.trim();
    if (!query) return [];
    return medicalService.searchDrugs(drugB, locale).slice(0, 5).map((drug) => ({
      id: drug.id,
      label: drug.name[locale],
      secondary: drug.synonyms.length ? drug.synonyms[0] : "",
    }));
  }, [drugB, locale]);

  const result = useMemo(() => medicalService.getInteractionReport(reviewedPair.drugA, reviewedPair.drugB, locale), [locale, reviewedPair.drugA, reviewedPair.drugB]);

  return (
    <PageLayout
      locale={locale}
      eyebrow={isArabic ? "مراقبة دوائية آمنة" : "Medication safety"}
      title={isArabic ? "فحص التداخلات الدوائية بشكل احترافي" : "Review drug interactions with professional clarity"}
      description={isArabic ? "استكشف تداخلات الأدوية بسرعة مع نتائج مخصصة من طبقة البيانات الافتراضية، وهي جاهزة للتعويض بقاعدة بيانات حقيقية لاحقاً." : "Explore medication interactions quickly with results generated from a mock data layer that is ready to be replaced by a real database later."}
      primaryAction={{ href: "/download", label: isArabic ? "تنزيل التطبيق" : "Download the app" }}
      secondaryAction={{ href: "/medical-calculators", label: isArabic ? "الآلات الحاسبة" : "View calculators" }}
    >
      <div className="space-y-6">
        <section className="rounded-[2rem] border border-amber-200 bg-amber-50/90 p-6 shadow-lg dark:border-amber-900/50 dark:bg-amber-950/50">
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-1 h-5 w-5 text-amber-700 dark:text-amber-300" />
            <div>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{isArabic ? "مصدر البيانات ونطاق التغطية / Data source and coverage" : "Data source and coverage / مصدر البيانات ونطاق التغطية"}</h2>
              <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-300">
                {isArabic
                  ? "بيانات هذا الفاحص ليست مرتبطة بمزود بيانات رسمي موثق في المشروع، ولا يوجد اسم مزود محدد، ولا تاريخ تحديث مثبت، ولا قائمة تغطية شاملة للأدوية أو المكملات أو الأعشاب أو الحالات الصحية. لذلك لا يُعد الفاحص شاملاً، ولا يُفترض أنه يغطي جميع التداخلات الممكنة."
                  : "The data used by this checker is not linked to a formally documented provider in the project, and there is no verified provider name, update date, or exhaustive coverage list for medications, supplements, herbal products, or health conditions. The checker is therefore not comprehensive and must not be treated as covering all possible interactions."}
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-300">
                {isArabic
                  ? "أي توسيع لقاعدة بيانات التداخلات يتطلب مراجعة مختص صحي مؤهل."
                  : "Any expansion of the interaction database requires review by a qualified healthcare professional."}
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/80">
            <div className="flex flex-wrap items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-300">
              <Search className="h-4 w-4" />
              {isArabic ? "واجهة بحث" : "Search interface"}
            </div>
            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50/80 p-4 shadow-inner dark:border-slate-800 dark:bg-slate-950/70">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-200" htmlFor="drug-a">
                {isArabic ? "دواء 1" : "Medication 1"}
              </label>
              <div className="space-y-2">
                <input
                  id="drug-a"
                  type="text"
                  value={drugA}
                  onChange={(e) => setDrugA(e.target.value)}
                  placeholder={isArabic ? "مثال: وارفارين" : "Example: Warfarin"}
                  className="mt-2 flex-1 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none ring-0 placeholder:text-slate-400 focus:border-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                />
                {drugASuggestions.length > 0 ? (
                  <div className="space-y-2 rounded-2xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-950">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                      {isArabic ? "اقتراحات الدواء 1" : "Medication 1 suggestions"}
                    </p>
                    <div className="grid gap-2">
                      {drugASuggestions.map((suggestion) => (
                        <button
                          key={suggestion.id}
                          type="button"
                          onClick={() => {
                            setDrugA(suggestion.label);
                          }}
                          className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-3 py-2 text-left text-sm text-slate-700 transition hover:border-blue-500 hover:bg-blue-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:bg-slate-900"
                        >
                          <span>{suggestion.label}</span>
                          {suggestion.secondary ? <span className="text-xs text-slate-500 dark:text-slate-400">{suggestion.secondary}</span> : null}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>

              <label className="mt-4 block text-sm font-medium text-slate-700 dark:text-slate-200" htmlFor="drug-b">
                {isArabic ? "دواء 2" : "Medication 2"}
              </label>
              <div className="space-y-2">
                <input
                  id="drug-b"
                  type="text"
                  value={drugB}
                  onChange={(e) => setDrugB(e.target.value)}
                  placeholder={isArabic ? "مثال: إيبوبروفين" : "Example: Ibuprofen"}
                  className="mt-2 flex-1 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none ring-0 placeholder:text-slate-400 focus:border-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                />
                {drugBSuggestions.length > 0 ? (
                  <div className="space-y-2 rounded-2xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-950">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                      {isArabic ? "اقتراحات الدواء 2" : "Medication 2 suggestions"}
                    </p>
                    <div className="grid gap-2">
                      {drugBSuggestions.map((suggestion) => (
                        <button
                          key={suggestion.id}
                          type="button"
                          onClick={() => {
                            setDrugB(suggestion.label);
                          }}
                          className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-3 py-2 text-left text-sm text-slate-700 transition hover:border-blue-500 hover:bg-blue-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:bg-slate-900"
                        >
                          <span>{suggestion.label}</span>
                          {suggestion.secondary ? <span className="text-xs text-slate-500 dark:text-slate-400">{suggestion.secondary}</span> : null}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>

              <button
                type="button"
                onClick={() => setReviewedPair({ drugA, drugB })}
                className="mt-4 rounded-2xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                {isArabic ? "ابدأ الفحص" : "Run review"}
              </button>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {[{ en: "Cardiac", ar: "قلب" }, { en: "Antibiotic", ar: "مضاد حيوي" }, { en: "Anticoagulant", ar: "مضاد تخثر" }].map((pill) => (
                <span key={pill.en} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300">
                  {isArabic ? pill.ar : pill.en}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-amber-200 bg-amber-50/90 p-8 shadow-lg dark:border-amber-900/60 dark:bg-amber-950/50">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-amber-700 dark:text-amber-300">
              <AlertTriangle className="h-4 w-4" />
              {isArabic ? "نتيجة الفحص" : "Review result"}
            </div>
            {result ? (
              <div className="mt-6 rounded-2xl border border-amber-200 bg-white/80 p-4 dark:border-amber-900/50 dark:bg-slate-950/70">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-semibold text-slate-900 dark:text-white">{t(result.drugA)} + {t(result.drugB)}</p>
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-800 dark:bg-amber-900/60 dark:text-amber-200">
                    {t(result.severity)}
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{t(result.summary)}</p>
                <p className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-200">{t(result.recommendation)}</p>
              </div>
            ) : (
              <p className="mt-6 text-sm text-slate-600 dark:text-slate-300">
                {isArabic ? "أدخل أسماء الأدوية لعرض التقييم." : "Enter medication names to see a structured review."}
              </p>
            )}
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/80">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-300">
                {isArabic ? "درجات الخطورة" : "Severity overview"}
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">
                {isArabic ? "تنظيم واضح للمخاطر" : "A clear way to prioritize risk"}
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 dark:border-emerald-900/50 dark:bg-emerald-950/50 dark:text-emerald-300">
              <ShieldCheck className="h-4 w-4" />
              {isArabic ? "مساعدات موثوقة" : "Trusted clinical guidance"}
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {severityCards.map((card) => (
              <div key={card.title.en} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 dark:border-slate-800 dark:bg-slate-950/70">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
                  <Stethoscope className="h-4 w-4 text-blue-600 dark:text-blue-300" />
                  {t(card.title)}
                </div>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{t(card.description)}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-blue-200 bg-gradient-to-r from-blue-600 to-cyan-500 p-8 text-white shadow-2xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-100">
                {isArabic ? "ابدأ الآن" : "Start now"}
              </p>
              <h2 className="mt-3 text-3xl font-semibold">
                {isArabic ? "استخدم مساعدي مع أدواتك اليومية" : "Bring Musaedi into your daily clinical workflow"}
              </h2>
            </div>
            <Link href="/download" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-blue-700 transition hover:-translate-y-1">
              {isArabic ? "تنزيل التطبيق" : "Download the app"} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>

      <MedicalReferenceFooter
        locale={locale}
        lastReviewed="2026-11-05"
        scope={{
          en: "Educational medication-interaction support for general clinical awareness only. This tool is not exhaustive and does not replace clinician judgment, pharmacist review, local formulary policy, or institution-approved prescribing guidance.",
          ar: "دعم تعليمي للتعرف على تداخلات الأدوية في السياق السريري العام فقط. هذه الأداة ليست شاملة ولا تستبدل حكم الطبيب أو مراجعة الصيدلي أو سياسة الصيادلة المحلية أو إرشادات الوصفة المعتمدة في المؤسسة.",
        }}
        sources={[
          { label: "NHS: Medicines information", href: "https://www.nhs.uk/conditions/medicines-information/" },
          { label: "BNF: British National Formulary", href: "https://www.bnf.org/" },
          { label: "EMA: Medicines", href: "https://www.ema.europa.eu/en" },
        ]}
      />
    </PageLayout>
  );
}
