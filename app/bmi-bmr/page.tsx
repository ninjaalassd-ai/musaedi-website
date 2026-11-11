"use client";

import { useSite } from "@/components/site-provider";
import { PageLayout } from "@/components/ui";
import { MedicalReferenceFooter } from "@/components/medical-reference-footer";

export default function BmiBmrPage() {
  const { locale } = useSite();
  const isArabic = locale === "ar";

  return (
    <PageLayout
      locale={locale}
      eyebrow={isArabic ? "مقاييس صحية" : "Health metrics"}
      title={isArabic ? "حساب BMI و BMR بسرعة" : "Calculate BMI and BMR quickly"}
      description={isArabic ? "تقييم سهل ومباشر يدعم القرار السريري والتواصل مع المريض." : "A fast assessment that supports clinical decisions and patient communication."}
      primaryAction={{ href: "/download", label: isArabic ? "تنزيل التطبيق" : "Download the app" }}
    >
      <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/80">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{isArabic ? "ماذا يقدم هذا القسم" : "What this module helps with"}</h2>
        <p className="mt-4 text-slate-600 dark:text-slate-300">{isArabic ? "حسابات واضحة ومقاييس سهلة لتخطيط الرعاية وتقييم الوضع العام." : "Clear calculations and easy metrics for care planning and general assessment."}</p>

        <div className="mt-8 rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-6 dark:border-slate-800 dark:bg-slate-950/70">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{isArabic ? "المعادلة المستخدمة / Formula used" : "Formula used / المعادلة المستخدمة"}</h3>

          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-300">BMI</p>
              <p className="mt-3 text-lg font-medium text-slate-900 dark:text-white">BMI = weight (kg) / [height (m)]²</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{isArabic ? "الوحدة: كجم / م²" : "Unit: kg / m²"}</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-300">BMR</p>
              <p className="mt-3 text-lg font-medium text-slate-900 dark:text-white">BMR = 10 × weight + 6.25 × height - 5 × age + 5</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{isArabic ? "للذكور، مع وزن بالكيلوغرام، وطول بالسنتيمتر، وعمر بالسنوات. النتيجة: kcal/day" : "For male values; weight in kg, height in cm, age in years. Result: kcal/day."}</p>
              <p className="mt-2 text-lg font-medium text-slate-900 dark:text-white">BMR = 10 × weight + 6.25 × height - 5 × age - 161</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{isArabic ? "للإناث، مع نفس الوحدات السابقة." : "For female values, with the same units."}</p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50/80 p-4 dark:border-amber-900/50 dark:bg-amber-950/30">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-300">{isArabic ? "اسم المعادلة والمصدر / Equation name and source" : "Equation name and source / اسم المعادلة والمصدر"}</p>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
              {isArabic
                ? "النسخة الحالية تطبق صيغة Mifflin-St Jeor في صورة BMR المعروفة، مع معادلة BMI القياسية. في هذا المشروع لا يوجد مرجع موثق يحدد الفئة العمرية أو الفئة السكانية المناسبة، لذلك يظل النطاق غير موثق بوضوح في هذه الصفحة."
                : "The current implementation applies the Mifflin-St Jeor form of the BMR equation together with the standard BMI formula. The project does not contain a documented reference that defines a suitable age range or population scope, so the applicable scope remains explicitly undocumented here."}
            </p>
          </div>
        </div>
      </div>

      <MedicalReferenceFooter
        locale={locale}
        lastReviewed="2026-11-05"
        scope={{
          en: "Educational BMI and BMR estimation support for general clinical context; this tool is not a diagnosis and should be interpreted with local clinical judgment and patient-specific factors.",
          ar: "دعم تعليمي لتقدير BMI و BMR في السياق السريري العام؛ هذه الأداة ليست تشخيصًا ويجب تفسيرها مع الحكم السريري المحلي والعوامل الشخصية للمريض.",
        }}
        sources={[
          { label: "WHO: Obesity and overweight", href: "https://www.who.int/news-room/fact-sheets/detail/obesity" },
          { label: "WHO: Body mass index - BMI", href: "https://www.who.int/data/gho/data/themes/topics/topic-details/GHO/body-mass-index-bmi" },
        ]}
      />
    </PageLayout>
  );
}
