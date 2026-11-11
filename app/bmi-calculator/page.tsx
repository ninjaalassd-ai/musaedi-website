"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Activity, HeartPulse, Scale } from "lucide-react";
import { useSite } from "@/components/site-provider";
import { PageLayout } from "@/components/ui";
import { MedicalReferenceFooter } from "@/components/medical-reference-footer";
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

              <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur">
                <p className="text-sm text-blue-50/90">{isArabic ? "نصيحة غذائية سريعة" : "Quick dietary guidance"}</p>
                <p className="mt-2 text-base leading-7 text-blue-50/90">{metrics.dietAdvice[locale]}</p>
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

      <section className="mt-8 rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/80">
        <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
          {isArabic ? "طريقة الحساب" : "Calculation method"}
        </h3>

        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 dark:border-slate-800 dark:bg-slate-950/70">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-300">
              {isArabic ? "المعادلة" : "Equation"}
            </p>
            <p className="mt-3 text-lg font-medium text-slate-900 dark:text-white">
              BMI = weightKg / (heightCm / 100)^2
            </p>
            <p className="mt-3 text-lg font-medium text-slate-900 dark:text-white">
              BMR = 10 × weightKg + 6.25 × heightCm - 5 × age + 5 {isArabic ? "(للذكور)" : "(male)"}
            </p>
            <p className="mt-2 text-lg font-medium text-slate-900 dark:text-white">
              BMR = 10 × weightKg + 6.25 × heightCm - 5 × age - 161 {isArabic ? "(للإناث)" : "(female)"}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 dark:border-slate-800 dark:bg-slate-950/70">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-300">
              {isArabic ? "المتغيرات" : "Variables"}
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li><span className="font-semibold">BMI:</span> {isArabic ? "مؤشر كتلة الجسم" : "Body Mass Index"}</li>
              <li><span className="font-semibold">weightKg:</span> {isArabic ? "الوزن بالكيلوغرام" : "Weight in kilograms (kg)"}</li>
              <li><span className="font-semibold">heightCm:</span> {isArabic ? "الطول بالسنتيمتر" : "Height in centimeters (cm)"}</li>
              <li><span className="font-semibold">age:</span> {isArabic ? "العمر بالسنوات" : "Age in years"}</li>
              <li><span className="font-semibold">BMR:</span> {isArabic ? "المعدل الأساسي للأيض، والوحدة: سعرات/يوم" : "Basal metabolic rate in calories/day"}</li>
              <li><span className="font-semibold">sex:</span> {isArabic ? "الجنس: ذكر أو أنثى، كما تم تعريفه في التطبيق الحالي" : "Sex: male or female, as defined in the current app logic"}</li>
            </ul>
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50/80 p-5 dark:border-amber-900/50 dark:bg-amber-950/30">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-300">
            {isArabic ? "الفئة" : "Applicability"}
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">
            {isArabic
              ? "لا يوجد في المشروع توثيق محدد يحدد فئة عمرية أو فئة سكانية معينة لهذه الصيغة. تم تطبيق المعادلات الحالية كما هي في الرمز البرمجي دون إضافة نطاق استخدام غير موثق."
              : "The project does not provide a documented age group or population scope for this formula. The current equations are applied exactly as implemented in code, without adding an undocumented usage scope."}
          </p>
        </div>

        <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50/80 p-5 dark:border-slate-800 dark:bg-slate-950/70">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-300">
            {isArabic ? "مثال بسيط" : "Simple example"}
          </p>
          <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">
            {isArabic
              ? "إذا كان الوزن 70 كجم، والطول 170 سم، والعمر 30 سنة، والجنس ذكر: BMI = 70 / (1.70)^2 ≈ 24.2، وBMR = 10×70 + 6.25×170 - 5×30 + 5 = 1,580 سعر/يوم تقريبًا."
              : "If weight is 70 kg, height is 170 cm, age is 30, and sex is male: BMI = 70 / (1.70)^2 ≈ 24.2, and BMR = 10×70 + 6.25×170 - 5×30 + 5 = 1,580 calories/day approximately."}
          </p>
        </div>

        <p className="mt-5 rounded-2xl border border-red-200 bg-red-50/80 p-4 text-sm text-red-700 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-200">
          {isArabic
            ? "تنبيه: دقة الناتج تعتمد على صحة البيانات المدخلة، وعلى أن المعادلة المستخدمة تتوافق مع السياق الذي تُستعمل فيه."
            : "Warning: the result depends on the accuracy of the entered data and on the context in which the selected formula is used."}
        </p>
      </section>

      <MedicalReferenceFooter
        locale={locale}
        lastReviewed="2026-11-05"
        scope={{
          en: "Educational BMI and BMR estimation support for general clinical context. This calculator is not a diagnosis and should be interpreted with local clinical judgment and patient-specific assessment.",
          ar: "دعم تعليمي لتقدير BMI وBMR في السياق السريري العام. هذه الحاسبة ليست تشخيصًا ويجب تفسيرها مع الحكم السريري المحلي والتقييم الخاص بالمريض.",
        }}
        sources={[
          { label: "WHO: Obesity and overweight", href: "https://www.who.int/news-room/fact-sheets/detail/obesity" },
          { label: "WHO: Body mass index - BMI", href: "https://www.who.int/data/gho/data/themes/topics/topic-details/GHO/body-mass-index-bmi" },
        ]}
      />
    </PageLayout>
  );
}
