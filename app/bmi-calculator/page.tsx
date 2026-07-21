"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Activity, HeartPulse, Scale } from "lucide-react";
import { useSite } from "@/components/site-provider";
import { PageLayout } from "@/components/ui";
import { medicalService } from "@/src/lib/medical-service";

export default function BmiCalculatorPage() {
  const { locale } = useSite();
  const isArabic = locale === "ar";

  const [heightCm, setHeightCm] = useState("170");
  const [weightKg, setWeightKg] = useState("70");
  const [age, setAge] = useState("30");
  const [sex, setSex] = useState<"male" | "female">("male");

  const metrics = useMemo(() => {
    const h = Number(heightCm);
    const w = Number(weightKg);
    const a = Number(age);

    if (!h || !w || !a) {
      return null;
    }

    return medicalService.calculateBmiBmr(h, w, a, sex);
  }, [age, heightCm, sex, weightKg]);

  return (
    <PageLayout
      locale={locale}
      eyebrow={isArabic ? "حاسبة BMI و BMR" : "BMI & BMR calculator"}
      title={isArabic ? "حساب صحي سريع ومهني" : "A modern, professional health calculator"}
      description={isArabic ? "احسب مؤشر كتلة الجسم والاحتياج السعري اليومي مع واجهة مصممة للوضوح والسرعة." : "Calculate body mass index and daily calorie needs with a clear, responsive medical-style interface."}
      primaryAction={{ href: "/download", label: isArabic ? "تنزيل التطبيق" : "Download the app" }}
      secondaryAction={{ href: "/medical-calculators", label: isArabic ? "الآلات الحاسبة" : "View calculators" }}
    >
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <section className="rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/80">
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-300">
            <Scale className="h-4 w-4" />
            {isArabic ? "المدخلات" : "Inputs"}
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 dark:border-slate-800 dark:bg-slate-950/70">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{isArabic ? "الطول (سم)" : "Height (cm)"}</span>
              <input
                type="number"
                value={heightCm}
                onChange={(e) => setHeightCm(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-700 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              />
            </label>

            <label className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 dark:border-slate-800 dark:bg-slate-950/70">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{isArabic ? "الوزن (كجم)" : "Weight (kg)"}</span>
              <input
                type="number"
                value={weightKg}
                onChange={(e) => setWeightKg(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-700 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              />
            </label>

            <label className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 dark:border-slate-800 dark:bg-slate-950/70">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{isArabic ? "العمر" : "Age"}</span>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-700 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              />
            </label>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 dark:border-slate-800 dark:bg-slate-950/70">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{isArabic ? "الجنس" : "Sex"}</span>
              <div className="mt-3 flex gap-2">
                <button
                  type="button"
                  onClick={() => setSex("male")}
                  className={`flex-1 rounded-xl px-3 py-2 text-sm font-semibold transition ${sex === "male" ? "bg-blue-600 text-white" : "bg-white text-slate-700 dark:bg-slate-900 dark:text-slate-200"}`}
                >
                  {isArabic ? "ذكر" : "Male"}
                </button>
                <button
                  type="button"
                  onClick={() => setSex("female")}
                  className={`flex-1 rounded-xl px-3 py-2 text-sm font-semibold transition ${sex === "female" ? "bg-blue-600 text-white" : "bg-white text-slate-700 dark:bg-slate-900 dark:text-slate-200"}`}
                >
                  {isArabic ? "أنثى" : "Female"}
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-blue-200 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 p-8 text-white shadow-2xl">
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-100">
            <HeartPulse className="h-4 w-4" />
            {isArabic ? "النتائج" : "Results"}
          </div>

          {metrics ? (
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur">
                <p className="text-sm text-blue-50/90">{isArabic ? "BMI" : "BMI"}</p>
                <p className="mt-2 text-4xl font-semibold">{metrics.bmi}</p>
                <p className="mt-2 text-sm text-blue-50/90">{isArabic ? metrics.bmiLabel.ar : metrics.bmiLabel.en}</p>
              </div>

              <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur">
                <p className="text-sm text-blue-50/90">{isArabic ? "BMR" : "BMR"}</p>
                <p className="mt-2 text-4xl font-semibold">{metrics.bmr}</p>
                <p className="mt-2 text-sm text-blue-50/90">{isArabic ? "سعرات/يوم" : "Calories/day"}</p>
              </div>
            </div>
          ) : (
            <div className="mt-6 rounded-2xl border border-white/20 bg-white/10 p-6 text-sm text-blue-50/90 backdrop-blur">
              <div className="flex items-center gap-2">
                <Activity className="h-4 w-4" />
                {isArabic ? "أدخل البيانات لعرض التقدير" : "Enter your details to preview the assessment"}
              </div>
            </div>
          )}

          <Link href="/download" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-blue-700 transition hover:-translate-y-1">
            {isArabic ? "تنزيل تطبيق مساعدي" : "Download Musaedi app"} <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </div>
    </PageLayout>
  );
}
