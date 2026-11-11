"use client";

import { useMemo, useState } from "react";
import { Search, ShieldCheck, Stethoscope } from "lucide-react";
import { useSite } from "@/components/site-provider";
import { PageLayout } from "@/components/ui";
import { MedicalReferenceFooter } from "@/components/medical-reference-footer";
import { medicalService } from "@/src/lib/medical-service";

const filters = [
  { key: "all", label: { en: "All", ar: "الكل" } },
  { key: "Resuscitation", label: { en: "Resuscitation", ar: "الإنعاش" } },
  { key: "Cardiac", label: { en: "Cardiac", ar: "قلب" } },
  { key: "Respiratory", label: { en: "Respiratory", ar: "تنفسي" } },
  { key: "Metabolic", label: { en: "Metabolic", ar: "استقلاب" } },
  { key: "Emergency", label: { en: "Emergency", ar: "طوارئ" } },
];

const emergencyDetailFields = [
  { key: "scientificName", label: { en: "Scientific name", ar: "الاسم العلمي" } },
  { key: "tradeName", label: { en: "Brand name", ar: "الاسم التجاري" } },
  { key: "indications", label: { en: "Indications", ar: "الاستطبابات" } },
  { key: "dosageRouteAge", label: { en: "Dosage, route, and age group", ar: "الجرعة وطريق الإعطاء والفئة العمرية" } },
  { key: "contraindicationsWarnings", label: { en: "Contraindications and warnings", ar: "موانع الاستعمال والتحذيرات" } },
  { key: "importantSideEffects", label: { en: "Important side effects", ar: "الآثار الجانبية المهمة" } },
  { key: "relevantInteractions", label: { en: "Relevant interactions", ar: "التداخلات ذات الصلة" } },
  { key: "source", label: { en: "Source", ar: "المصدر" } },
  { key: "sourceUrl", label: { en: "Reference link", ar: "رابط المرجع" } },
  { key: "lastReviewed", label: { en: "Last reviewed", ar: "آخر مراجعة" } },
] as const;

export default function EmergencyDrugsPage() {
  const { locale } = useSite();
  const isArabic = locale === "ar";
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredDrugs = useMemo(() => medicalService.getEmergencyDrugs(search, activeFilter, locale), [activeFilter, locale, search]);

  return (
    <PageLayout
      locale={locale}
      eyebrow={isArabic ? "طوارئ" : "Emergency readiness"}
      title={isArabic ? "أدوية الطوارئ في متناول يدك" : "Emergency drugs at your fingertips"}
      description={isArabic ? "مرجع سريع ومبسط للأدوية الحيوية التي قد تحتاجها في لحظات الضغط مع واجهة احترافية ومصقولة." : "A quick, simplified reference for essential medicines you may need in high-pressure moments, presented in a polished professional interface."}
      primaryAction={{ href: "/download", label: isArabic ? "تنزيل التطبيق" : "Download the app" }}
    >
      <div className="space-y-6">
        <section className="rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/80">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-300">
                {isArabic ? "بحث وتصنيف" : "Search and filters"}
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">
                {isArabic ? "ابحث عن دواء طارئ بسرعة" : "Find an emergency drug quickly"}
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 dark:border-emerald-900/50 dark:bg-emerald-950/50 dark:text-emerald-300">
              <ShieldCheck className="h-4 w-4" />
              {isArabic ? "مرجع سريع" : "Fast reference"}
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50/80 p-4 text-sm leading-7 text-amber-800 dark:border-amber-900/50 dark:bg-amber-950/30 dark:text-amber-200">
            <p>
              {isArabic
                ? "مصدر بيانات أدوية الطوارئ وتاريخ تحديثها ونطاق تغطيتها غير موثق في هذا المشروع. لا نؤكد أن القائمة تشمل كل الأدوية أو المكملات أو الأعشاب أو كل سيناريو طارئ."
                : "Emergency-drug data source, update date, and coverage are not documented in this project. We do not claim the list covers every drug, supplement, herb, or emergency scenario."}
            </p>
            <p className="mt-2">
              {isArabic
                ? "أي توسيع لقائمة أدوية الطوارئ يتطلب مراجعة مختص صحي مؤهل."
                : "Any expansion of the emergency drug list requires review by a qualified healthcare professional."}
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-4 lg:flex-row">
            <label className="flex flex-1 items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 dark:border-slate-800 dark:bg-slate-950/70">
              <Search className="h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={isArabic ? "ابحث عن أدرينالين أو الجلوكوز..." : "Search for adrenaline or glucose..."}
                className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400 dark:text-slate-100"
              />
            </label>

            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  type="button"
                  onClick={() => setActiveFilter(filter.key)}
                  className={`rounded-full px-3 py-2 text-sm font-semibold transition ${activeFilter === filter.key ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"}`}
                >
                  {filter.label[locale]}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {filteredDrugs.map((drug) => (
            <article key={drug.id} className="rounded-[1.6rem] border border-slate-200 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-400 dark:border-slate-800 dark:bg-slate-900/80">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
                <Stethoscope className="h-4 w-4 text-blue-600 dark:text-blue-300" />
                {drug.name[locale]}
              </div>
              <div className="mt-3 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 dark:bg-blue-950/50 dark:text-blue-200">
                {drug.category[locale]}
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{drug.note[locale]}</p>
              <p className="mt-3 text-sm font-medium text-slate-500 dark:text-slate-400">{drug.summary[locale]}</p>

              <div className="mt-5 space-y-3 border-t border-slate-200 pt-4 dark:border-slate-800">
                {emergencyDetailFields.map((field) => {
                  const value = drug[field.key]?.[locale]?.trim();
                  if (field.key === "sourceUrl" && value) {
                    return (
                      <div key={field.key} className="text-sm">
                        <p className="font-semibold text-slate-700 dark:text-slate-200">{field.label[locale]}</p>
                        <a
                          href={value}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-1 inline-block break-all text-blue-600 underline decoration-blue-400 underline-offset-4 dark:text-blue-300"
                        >
                          {value}
                        </a>
                      </div>
                    );
                  }

                  return (
                    <div key={field.key} className="text-sm">
                      <p className="font-semibold text-slate-700 dark:text-slate-200">{field.label[locale]}</p>
                      <p className="mt-1 text-slate-600 dark:text-slate-300">
                        {value || (isArabic ? "قيد المراجعة — لا توجد بيانات موثقة في هذا الوقت." : "Pending review — no verified data available at this time.")}
                      </p>
                    </div>
                  );
                })}
              </div>
            </article>
          ))}
        </section>
      </div>

      <MedicalReferenceFooter
        locale={locale}
        lastReviewed="2026-11-05"
        scope={{
          en: "Emergency-drug support for educational awareness and rapid reference. It does not replace local emergency algorithms, resuscitation protocols, institutional policy, or the judgment of the responding clinical team.",
          ar: "دعم تعليمي لأدوية الطوارئ والمرجع السريع. لا يحل محل خوارزميات الطوارئ المحلية أو بروتوكولات الإنعاش أو سياسة المؤسسة أو حكم الفريق الطبي الاستجابة.",
        }}
        sources={[
          { label: "Resuscitation Council UK", href: "https://www.resus.org.uk/" },
          { label: "NICE: Sepsis guidance", href: "https://www.nice.org.uk/guidance/ng51" },
          { label: "NICE: Clinical emergencies", href: "https://www.nice.org.uk/guidance" },
        ]}
      />
    </PageLayout>
  );
}
