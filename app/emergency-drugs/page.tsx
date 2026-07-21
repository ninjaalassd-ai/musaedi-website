"use client";

import { useMemo, useState } from "react";
import { Search, ShieldCheck, Stethoscope } from "lucide-react";
import { useSite } from "@/components/site-provider";
import { PageLayout } from "@/components/ui";
import { medicalService } from "@/src/lib/medical-service";

const filters = [
  { key: "all", label: { en: "All", ar: "الكل" } },
  { key: "Resuscitation", label: { en: "Resuscitation", ar: "الإنعاش" } },
  { key: "Cardiac", label: { en: "Cardiac", ar: "قلب" } },
  { key: "Emergency", label: { en: "Emergency", ar: "طوارئ" } },
  { key: "Metabolic", label: { en: "Metabolic", ar: "استقلاب" } },
];

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
            </article>
          ))}
        </section>
      </div>
    </PageLayout>
  );
}
