"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AlertCircle, ArrowRight, Search, ShieldCheck, Stethoscope } from "lucide-react";
import { useSite } from "@/components/site-provider";
import { PageLayout } from "@/components/ui";
import { MedicalReferenceFooter } from "@/components/medical-reference-footer";
import { medicalService } from "@/src/lib/medical-service";

const infoSections = [
  { key: "scientificName", title: { en: "Scientific name", ar: "الاسم العلمي" } },
  { key: "tradeName", title: { en: "Brand name", ar: "الاسم التجاري" } },
  { key: "indications", title: { en: "Indications", ar: "الاستطبابات" } },
  { key: "dosageRouteAge", title: { en: "Dosage, route, and age group", ar: "الجرعة وطريق الإعطاء والفئة العمرية" } },
  { key: "contraindicationsWarnings", title: { en: "Contraindications and important warnings", ar: "موانع الاستعمال والتحذيرات المهمة" } },
  { key: "importantSideEffects", title: { en: "Important side effects", ar: "الآثار الجانبية المهمة" } },
  { key: "relevantInteractions", title: { en: "Relevant interactions", ar: "التداخلات ذات الصلة" } },
  { key: "source", title: { en: "Source", ar: "المصدر" } },
  { key: "lastReviewed", title: { en: "Last reviewed", ar: "تاريخ آخر مراجعة" } },
];

export default function DrugInformationPage() {
  const { locale } = useSite();
  const isArabic = locale === "ar";
  const t = (value: { en: string; ar: string }) => (isArabic ? value.ar : value.en);

  const [searchTerm, setSearchTerm] = useState("amox");
  const [selectedDrugId, setSelectedDrugId] = useState<string | null>(null);

  const results = useMemo(() => medicalService.searchDrugs(searchTerm, locale), [locale, searchTerm]);

  const suggestions = useMemo(() => {
    const query = searchTerm.trim();
    if (!query) {
      return [];
    }
    return results.slice(0, 5).map((drug) => ({
      id: drug.id,
      label: drug.name[locale],
      secondary: drug.synonyms.length ? drug.synonyms[0] : "",
    }));
  }, [locale, results, searchTerm]);

  const selectedDrug = useMemo(() => {
    if (selectedDrugId) {
      return results.find((drug) => drug.id === selectedDrugId) ?? results[0] ?? null;
    }
    return results[0] ?? null;
  }, [results, selectedDrugId]);

  const sectionContent = selectedDrug
    ? {
        scientificName: selectedDrug.scientificName,
        tradeName: selectedDrug.tradeName,
        indications: selectedDrug.indications,
        dosageRouteAge: selectedDrug.dosageRouteAge,
        contraindicationsWarnings: selectedDrug.contraindicationsWarnings,
        importantSideEffects: selectedDrug.importantSideEffects,
        relevantInteractions: selectedDrug.relevantInteractions,
        source: selectedDrug.source,
        lastReviewed: selectedDrug.lastReviewed,
        uses: selectedDrug.uses,
        dosage: selectedDrug.dosage,
        sideEffects: selectedDrug.sideEffects,
        contraindications: selectedDrug.contraindications,
        pregnancy: selectedDrug.pregnancy,
        interactions: selectedDrug.interactions,
      }
    : null;

  return (
    <PageLayout
      locale={locale}
      eyebrow={isArabic ? "معلومات دوائية" : "Drug information"}
      title={isArabic ? "مرجع مرئي سريع للأدوية" : "A quick, visual medication reference"}
      description={isArabic ? "استعرض معلومات أساسية عن الدواء بطريقة منظمة ومصممة للسرعة والوضوح." : "Review essential medication details in a structured, fast-reading experience designed for clarity."}
      primaryAction={{ href: "/download", label: isArabic ? "تنزيل التطبيق" : "Download the app" }}
      secondaryAction={{ href: "/drug-interaction", label: isArabic ? "فحص التداخلات" : "Check interactions" }}
    >
      <div className="space-y-6">
        <section className="rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/80">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-300">
                {isArabic ? "بحث عن دواء" : "Drug search"}
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">
                {isArabic ? "ابحث عن دواء بسرعة" : "Search for a medication quickly"}
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-medium text-amber-700 dark:border-amber-900/50 dark:bg-amber-950/50 dark:text-amber-300">
              <ShieldCheck className="h-4 w-4" />
              {isArabic ? "حالة المصدر: غير موثقة بالكامل" : "Source status: not fully verified"}
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50/80 p-4 shadow-inner dark:border-slate-800 dark:bg-slate-950/70">
            <div className="mb-4 rounded-2xl border border-amber-200 bg-amber-50/80 p-4 text-sm leading-7 text-amber-800 dark:border-amber-900/50 dark:bg-amber-950/30 dark:text-amber-200">
              <p>
                {isArabic
                  ? "مصدر بيانات الأدوية وتاريخ تحديثها ونطاق تغطيتها غير موثق في هذا المشروع. لا نؤكد أن قاعدة البيانات تشمل جميع الأدوية أو المكملات أو الأعشاب. لا تُعامل الجرعات أو الموانع أو التداخلات كإرشادات علاجية مؤكدة، ويجب مراجعة مصدر دوائي مهني أو دليل مصرح به قبل أي قرار علاجي."
                  : "Drug data source, update date, and coverage are not documented in this project. We do not claim the database covers all medicines, supplements, or herbal products. Doses, contraindications, and interactions should not be treated as confirmed therapeutic instructions, and a professional medication source or authorized formulary should be consulted before any treatment decision."}
              </p>
              <p className="mt-2">
                {isArabic
                  ? "أي توسيع لقاعدة البيانات العلاجية يتطلب مراجعة مختص صحي مؤهل."
                  : "Any expansion of the drug database requires review by a qualified healthcare professional."}
              </p>
            </div>
            <label className="text-sm font-medium text-slate-700 dark:text-slate-200" htmlFor="drug-search">
              {isArabic ? "أدخل اسم الدواء" : "Enter a medication name"}
            </label>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row">
              <div className="flex flex-1 flex-col gap-2">
                <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-900">
                  <Search className="h-4 w-4 text-slate-400" />
                  <input
                    id="drug-search"
                    type="text"
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setSelectedDrugId(null);
                    }}
                    placeholder={isArabic ? "مثال: أموكسيسيلين" : "Example: Amoxicillin"}
                    className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400 dark:text-slate-100"
                  />
                </div>
                {suggestions.length > 0 ? (
                  <div className="space-y-2 rounded-2xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-950">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                      {isArabic ? "اقتراحات البحث" : "Search suggestions"}
                    </p>
                    <div className="grid gap-2">
                      {suggestions.map((suggestion) => (
                        <button
                          key={suggestion.id}
                          type="button"
                          onClick={() => {
                            setSearchTerm(suggestion.label);
                            setSelectedDrugId(suggestion.id);
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
                onClick={() => {
                  const firstResult = results[0];
                  if (firstResult) {
                    setSelectedDrugId(firstResult.id);
                  }
                }}
                className="rounded-2xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                {isArabic ? "عرض المعلومات" : "View details"}
              </button>
            </div>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
              {isArabic ? "ابحث باسم الدواء العلمي أو التجاري لاكتشاف النتائج بسرعة." : "Search by generic or trade name to find results faster."}
            </p>

            {results.length > 0 ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {results.map((drug) => (
                  <button
                    key={drug.id}
                    type="button"
                    onClick={() => {
                      setSearchTerm(drug.name[locale]);
                      setSelectedDrugId(drug.id);
                    }}
                    className={`rounded-full px-3 py-1.5 text-sm font-semibold transition ${selectedDrug?.id === drug.id ? "bg-blue-600 text-white" : "bg-white text-slate-700 dark:bg-slate-800 dark:text-slate-200"}`}
                  >
                    {drug.name[locale]}
                  </button>
                ))}
              </div>
            ) : (
              <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
                {isArabic ? "لا توجد نتائج لهذا الاسم. جرّب كلمة رئيسية أخرى." : "No matching medication found. Try another keyword."}
              </p>
            )}
          </div>
        </section>

        {selectedDrug ? (
          <section className="rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/80">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-300">
                  {selectedDrug.category[locale]}
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-slate-900 dark:text-white">{selectedDrug.name[locale]}</h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">{selectedDrug.summary[locale]}</p>
              </div>
              <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-medium text-amber-700 dark:border-amber-900/50 dark:bg-amber-950/50 dark:text-amber-300">
                {selectedDrug.source?.[locale]
                  ? `${isArabic ? "المصدر المدرج" : "Source recorded"}: ${selectedDrug.source[locale]}`
                  : isArabic ? "لا توجد بيانات مصدر مباشرة موثقة لهذا العنصر في المشروع الحالي." : "No direct source data is recorded for this item in the current project."}
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {infoSections.map((section) => {
                const content = sectionContent?.[section.key as keyof typeof sectionContent];
                const safeValue = content?.[locale]?.trim();
                return (
                  <div key={section.key} className="rounded-[1.6rem] border border-slate-200 bg-slate-50/80 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/70">
                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
                      <Stethoscope className="h-4 w-4 text-blue-600 dark:text-blue-300" />
                      {t(section.title)}
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {safeValue || (isArabic ? "قيد المراجعة — لا توجد بيانات موثقة في هذا الوقت." : "Pending review — no verified data available at this time.")}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
        ) : null}

        <section className="rounded-[2rem] border border-amber-200 bg-amber-50/90 p-8 shadow-lg dark:border-amber-900/50 dark:bg-amber-950/50">
          <div className="flex items-start gap-3">
            <AlertCircle className="mt-1 h-5 w-5 text-amber-700 dark:text-amber-300" />
            <div>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                {isArabic ? "مهم: هذه المعلومات لأغراض تعليمية فقط" : "Important: this content is for educational purposes only"}
              </h2>
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {isArabic ? "يرجى الرجوع إلى أخصائي طب مؤهل أو دليل موثوق قبل اتخاذ أي قرار سريري." : "Please consult a qualified clinician or trusted source before making any clinical decision."}
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-blue-200 bg-gradient-to-r from-blue-600 to-cyan-500 p-8 text-white shadow-2xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-100">
                {isArabic ? "ابدأ الآن" : "Start now"}
              </p>
              <h2 className="mt-3 text-3xl font-semibold">
                {isArabic ? "استخدم مساعدي في كل خطوة من رعايتك" : "Use Musaedi at every step of your care workflow"}
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
          en: "Educational medication reference for general clinical awareness. This content is not a substitute for the current local formulary, prescribing policy, pharmacist review, or clinician judgment.",
          ar: "مرجع تعليمي للأدوية بهدف الوعي السريري العام. هذا المحتوى لا يستبدل الصيغة المحلية الحالية أو سياسة الوصفة أو مراجعة الصيدلي أو حكم الطبيب.",
        }}
        sources={[
          { label: "BNF: British National Formulary", href: "https://www.bnf.org/" },
          { label: "NHS: Medicines information", href: "https://www.nhs.uk/conditions/medicines-information/" },
          { label: "EMA: Medicines", href: "https://www.ema.europa.eu/en" },
        ]}
      />
    </PageLayout>
  );
}
