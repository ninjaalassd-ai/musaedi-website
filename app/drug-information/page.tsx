"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AlertCircle, ArrowRight, Search, ShieldCheck, Stethoscope } from "lucide-react";
import { useSite } from "@/components/site-provider";
import { PageLayout } from "@/components/ui";
import { medicalService } from "@/src/lib/medical-service";

const infoSections = [
  { key: "uses", title: { en: "Uses", ar: "الاستخدامات" } },
  { key: "dosage", title: { en: "Dosage", ar: "الجرعة" } },
  { key: "sideEffects", title: { en: "Side effects", ar: "الآثار الجانبية" } },
  { key: "contraindications", title: { en: "Contraindications", ar: "موانع الاستخدام" } },
  { key: "pregnancy", title: { en: "Pregnancy", ar: "الحمل" } },
  { key: "interactions", title: { en: "Interactions", ar: "التداخلات" } },
];

export default function DrugInformationPage() {
  const { locale } = useSite();
  const isArabic = locale === "ar";
  const t = (value: { en: string; ar: string }) => (isArabic ? value.ar : value.en);

  const [searchTerm, setSearchTerm] = useState("amox");
  const [selectedDrugId, setSelectedDrugId] = useState<string | null>(null);

  const results = useMemo(() => medicalService.searchDrugs(searchTerm, locale), [locale, searchTerm]);

  const selectedDrug = useMemo(() => {
    if (selectedDrugId) {
      return results.find((drug) => drug.id === selectedDrugId) ?? results[0] ?? null;
    }
    return results[0] ?? null;
  }, [results, selectedDrugId]);

  const sectionContent = selectedDrug
    ? {
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
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 dark:border-emerald-900/50 dark:bg-emerald-950/50 dark:text-emerald-300">
              <ShieldCheck className="h-4 w-4" />
              {isArabic ? "معلومات موثوقة" : "Trusted reference"}
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50/80 p-4 shadow-inner dark:border-slate-800 dark:bg-slate-950/70">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-200" htmlFor="drug-search">
              {isArabic ? "أدخل اسم الدواء" : "Enter a medication name"}
            </label>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row">
              <div className="flex flex-1 items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-900">
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
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700 dark:border-emerald-900/50 dark:bg-emerald-950/50 dark:text-emerald-300">
                {selectedDrug.caution[locale]}
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {infoSections.map((section) => {
                const content = sectionContent?.[section.key as keyof typeof sectionContent];
                return (
                  <div key={section.key} className="rounded-[1.6rem] border border-slate-200 bg-slate-50/80 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/70">
                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
                      <Stethoscope className="h-4 w-4 text-blue-600 dark:text-blue-300" />
                      {t(section.title)}
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{content ? content[locale] : ""}</p>
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
    </PageLayout>
  );
}
