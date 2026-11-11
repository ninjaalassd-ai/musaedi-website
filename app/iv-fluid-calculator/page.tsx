"use client";

import { useMemo, useState } from "react";
import { Activity, ArrowRight, Droplets, ShieldCheck, Timer } from "lucide-react";
import { useSite } from "@/components/site-provider";
import { PageLayout } from "@/components/ui";
import { MedicalReferenceFooter } from "@/components/medical-reference-footer";
import { medicalService } from "@/src/lib/medical-service";

type FluidMode = "maintenance" | "resuscitation" | "replacement";

export default function IvFluidCalculatorPage() {
  const { locale } = useSite();
  const isArabic = locale === "ar";

  const [mode, setMode] = useState<FluidMode>("maintenance");
  const [weight, setWeight] = useState("70");
  const [fluidType, setFluidType] = useState("Normal saline");
  const [rate, setRate] = useState("100");
  const [duration, setDuration] = useState("8");
  const [notes, setNotes] = useState("");

  const summary = useMemo(() => medicalService.calculateIvFluidPlan(mode, Number(weight) || 70, Number(rate) || 100, Number(duration) || 8, fluidType), [duration, fluidType, mode, rate, weight]);

  return (
    <PageLayout
      locale={locale}
      eyebrow={isArabic ? "سائل وريدي" : "IV fluid planning"}
      title={isArabic ? "واجهة احترافية لتخطيط السوائل الوريدية" : "A polished IV fluid calculator interface"}
      description={isArabic ? "تصميم حديث ومريح يركز على الوضوح، وسهولة التصفح، وتقديم نظرة عامة مهنية مع حسابات تقديرية مبنية على طبقة بيانات وهمية جاهزة للاستبدال بقاعدة حقيقية لاحقاً." : "A clean, modern experience focused on clarity, ease of review, and a professional clinical presentation with mock-backed calculations ready to be replaced by a real backend later."}
      primaryAction={{ href: "/download", label: isArabic ? "تنزيل التطبيق" : "Download the app" }}
      secondaryAction={{ href: "/medical-calculators", label: isArabic ? "الآلات الحاسبة" : "View calculators" }}
    >
      <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <section className="rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/80">
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-300">
            <Droplets className="h-4 w-4" />
            {isArabic ? "إعداد الخطة" : "Plan setup"}
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <label className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 dark:border-slate-800 dark:bg-slate-950/70">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{isArabic ? "الوزن (كجم)" : "Weight (kg)"}</span>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-700 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              />
            </label>

            <label className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 dark:border-slate-800 dark:bg-slate-950/70">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{isArabic ? "نوع السائل" : "Fluid type"}</span>
              <select
                value={fluidType}
                onChange={(e) => setFluidType(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-700 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              >
                <option>Normal saline</option>
                <option>Ringer lactate</option>
                <option>Dextrose 5%</option>
              </select>
            </label>

            <label className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 dark:border-slate-800 dark:bg-slate-950/70">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{isArabic ? "معدل التسريب (مل/ساعة)" : "Infusion rate (mL/hr)"}</span>
              <input
                type="number"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-700 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              />
            </label>

            <label className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 dark:border-slate-800 dark:bg-slate-950/70">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{isArabic ? "المدة (ساعات)" : "Duration (hours)"}</span>
              <input
                type="number"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-700 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              />
            </label>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              { key: "maintenance", label: isArabic ? "صيانة" : "Maintenance" },
              { key: "resuscitation", label: isArabic ? "إنعاش" : "Resuscitation" },
              { key: "replacement", label: isArabic ? "تعويض" : "Replacement" },
            ].map((option) => (
              <button
                key={option.key}
                type="button"
                onClick={() => setMode(option.key as FluidMode)}
                className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${mode === option.key ? "bg-blue-600 text-white shadow-md" : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"}`}
              >
                {option.label}
              </button>
            ))}
          </div>

          <label className="mt-6 block rounded-2xl border border-slate-200 bg-slate-50/80 p-4 dark:border-slate-800 dark:bg-slate-950/70">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{isArabic ? "ملاحظات سريرية" : "Clinical notes"}</span>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={4}
              placeholder={isArabic ? "أضف أي ملاحظات أو إجراءات متابعة هنا..." : "Add any notes or follow-up instructions here..."}
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-700 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            />
          </label>
        </section>

        <div className="space-y-6">
          <section className="rounded-[2rem] border border-slate-200 bg-slate-50/90 p-6 shadow-lg dark:border-slate-800 dark:bg-slate-950/80">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              {isArabic ? "ما المقصود بخطط الصيانة، الإنعاش، والتعويض؟" : "What maintenance, resuscitation, and replacement plans mean"}
            </h2>
            <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50/80 p-4 text-sm leading-7 text-amber-900 dark:border-amber-900/50 dark:bg-amber-950/30 dark:text-amber-200">
              {isArabic
                ? "الطريقة الفعلية في المشروع هي: targetRate = round((rate || fallbackRate) × modeMultiplier × fluidMultiplier)؛ ثم totalVolume = round(targetRate × duration). هذه ليست صيغة علاجية مستقلة، بل نموذج حسابي بسيط داخل التطبيق."
                : "The actual method in the project is: targetRate = round((rate || fallbackRate) × modeMultiplier × fluidMultiplier); then totalVolume = round(targetRate × duration). This is not a standalone treatment formula; it is a simplified calculator model within the app."}
            </div>
            <div className="mt-4 space-y-4 text-sm leading-7 text-slate-700 dark:text-slate-300">
              <p>
                {isArabic
                  ? "الخطة الصيانة تُستخدم للحفاظ على السوائل والمحاليل لدى المريض المستقر، بهدف تلبية احتياجاته اليومية دون نقص أو زيادة." 
                  : "The maintenance plan is used to keep a stable patient hydrated with the daily fluid needs needed without deficit or overload."}
              </p>
              <p>
                {isArabic
                  ? "خطة الإنعاش تُستخدم عندما يحتاج المريض إلى تعزيز فوري لتدفق الدم والأكسجين، مثل حالات الصدمة أو انخفاض ضغط الدم الحاد." 
                  : "The resuscitation plan is used when the patient needs an urgent boost to blood flow and oxygen delivery, such as shock or severe hypotension."}
              </p>
              <p>
                {isArabic
                  ? "خطة التعويض تُستخدم لتعويض الخسائر السائلة المستمرة أو المتوقعة بسبب النزيف، الإسهال، القيء، أو الجراحات." 
                  : "The replacement plan is used to replace ongoing or expected fluid losses from bleeding, diarrhea, vomiting, or surgical drains."}
              </p>
            </div>
          </section>

          <section className="rounded-[2rem] bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 p-8 text-white shadow-2xl">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-100">
              <Activity className="h-4 w-4" />
              {isArabic ? "ملخص الخطة" : "Plan overview"}
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
                <p className="text-sm text-blue-50/90">{isArabic ? "الوضع" : "Mode"}</p>
                <p className="mt-1 text-xl font-semibold">{summary.modeLabel[locale]}</p>
              </div>

              <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
                <p className="text-sm text-blue-50/90">{isArabic ? "نوع السائل" : "Fluid type"}</p>
                <p className="mt-1 text-xl font-semibold">{fluidType}</p>
              </div>

              <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
                <p className="text-sm text-blue-50/90">{isArabic ? "المعدل المستهدف" : "Target rate"}</p>
                <p className="mt-1 text-xl font-semibold">{summary.targetRate} mL/hr</p>
              </div>

              <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
                <p className="text-sm text-blue-50/90">{isArabic ? "الحجم الكلي" : "Total volume"}</p>
                <p className="mt-1 text-xl font-semibold">{summary.totalVolume} mL</p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/20 bg-white/10 p-4 text-sm text-blue-50/90 backdrop-blur">
              {summary.recommendation[locale]}
            </div>

            <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50/20 p-4 text-sm text-slate-900 dark:border-blue-800 dark:bg-blue-900/20 dark:text-blue-100">
              <div className="flex items-center gap-2 text-sm font-semibold text-blue-800 dark:text-blue-100">
                <ArrowRight className="h-4 w-4" />
                {isArabic ? "ملاحظة: التفاصيل تختلف حسب الصيانة، الإنعاش، والتعويض." : "Note: details vary across maintenance, resuscitation, and replacement plans."}
              </div>
            </div>
          </section>

          <section className="rounded-[2rem] border border-amber-200 bg-amber-50/90 p-6 shadow-lg dark:border-amber-900/50 dark:bg-amber-950/60">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-amber-700 dark:text-amber-300">
              <ShieldCheck className="h-4 w-4" />
              {isArabic ? "تنبيه سريري" : "Clinical alert"}
            </div>

            <div className="mt-4 space-y-3 text-sm leading-7 text-slate-700 dark:text-slate-200">
              <p>
                {isArabic
                  ? "اختيار نوع السائل، كميته، ومعدل إعطائه يعتمد على تقييم حالة المريض، والمدخول والفقد، والتحاليل، والأمراض المصاحبة، وقد يتغير وفقًا للصورة السريرية الحالية. لا تُستخدم هذه الحاسبة كوصفة علاجية مستقلة أو بديلاً عن تقييم طبي مؤهل."
                  : "The choice of fluid type, amount, and rate depends on the patient’s assessment, intake and losses, laboratory values, comorbidities, and current clinical context. This calculator is not a standalone treatment prescription or a substitute for qualified clinical assessment."}
              </p>
              <p>
                {isArabic
                  ? "تستند هذه الفكرة إلى إرشادات NICE IV fluid therapy in adults in hospital (CG174): الإرشاد يخص البالغين داخل المستشفى فقط، ولا يُعمَّم على الأطفال أو الرعاية المنزلية أو الحالات الاجتماعية/المنزلية. لا تمثل هذه الحاسبة تنفيذًا مباشرًا لتلك الإرشادات، بل نموذج حسابي تعليمي فقط."
                  : "This principle is aligned with the NICE guideline IV fluid therapy in adults in hospital (CG174): the guidance applies to adult inpatients in hospital only and is not generalised to children, home-care settings, or non-hospital contexts. This calculator does not reproduce the guideline directly; it is a simplified educational calculator model only."}
              </p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900/80">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-300">
              <ShieldCheck className="h-4 w-4" />
              {isArabic ? "نصائح الأمان" : "Safety notes"}
            </div>

            <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2"><Timer className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />{isArabic ? "تأكد من مراجعة المعايير السريرية قبل أي قرار علاجي." : "Confirm all clinical parameters before acting on any treatment plan."}</li>
              <li className="flex items-start gap-2"><Timer className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />{isArabic ? "راقب الحالة العامة والتوازن المائي بانتظام." : "Monitor patient status and fluid balance throughout therapy."}</li>
              <li className="flex items-start gap-2"><Timer className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />{summary.note[locale]}</li>
            </ul>
          </section>
        </div>
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
            <p className="mt-3 text-base font-medium text-slate-900 dark:text-white">
              {isArabic
                ? "تُحسب المعدلة المستهدفة في التطبيق الحالي على النحو التالي: targetRate = round((rate || fallbackRate) × modeMultiplier × fluidMultiplier)"
                : "The app currently calculates the target rate as: targetRate = round((rate || fallbackRate) × modeMultiplier × fluidMultiplier)"}
            </p>
            <p className="mt-3 text-base font-medium text-slate-900 dark:text-white">
              {isArabic
                ? "ثم يُحسب الحجم الكلي: totalVolume = round(targetRate × (duration || 1))"
                : "Then the total volume is calculated as: totalVolume = round(targetRate × (duration || 1))"}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 dark:border-slate-800 dark:bg-slate-950/70">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-300">
              {isArabic ? "المتغيرات" : "Variables"}
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li><span className="font-semibold">rate:</span> {isArabic ? "معدل التسريب، الوحدة: مل/ساعة" : "Infusion rate in mL/hr"}</li>
              <li><span className="font-semibold">duration:</span> {isArabic ? "مدة التسريب، الوحدة: ساعة" : "Duration in hours"}</li>
              <li><span className="font-semibold">weightKg:</span> {isArabic ? "الوزن بالكيلوغرام" : "Weight in kilograms (kg)"}</li>
              <li><span className="font-semibold">fluidType:</span> {isArabic ? "نوع السائل: Normal saline، Ringer lactate، أو Dextrose 5%" : "Fluid type: Normal saline, Ringer lactate, or Dextrose 5%"}</li>
              <li><span className="font-semibold">mode:</span> {isArabic ? "نوع الخطة: maintenance، resuscitation، أو replacement" : "Mode: maintenance, resuscitation, or replacement"}</li>
              <li><span className="font-semibold">targetRate:</span> {isArabic ? "المعدل المستهدف، الوحدة: مل/ساعة" : "Target rate in mL/hr"}</li>
              <li><span className="font-semibold">totalVolume:</span> {isArabic ? "الحجم الكلي، الوحدة: مل" : "Total volume in mL"}</li>
            </ul>
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50/80 p-5 dark:border-amber-900/50 dark:bg-amber-950/30">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-300">
            {isArabic ? "الفئة" : "Applicability"}
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">
            {isArabic
              ? "لا يوجد في المشروع توثيق محدد يحدد فئة عمرية أو معيار سريري خاص لخطة السوائل هذه. المعلومات الواردة هنا تعكس صيغة التطبيق الحالية فقط دون إضافة نطاق استخدام غير موثق."
              : "The project does not provide a documented age group or specific clinical scope for this fluid plan. The information reflects the current app formula only, without adding an undocumented usage scope."}
          </p>
        </div>

        <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50/80 p-5 dark:border-slate-800 dark:bg-slate-950/70">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-300">
            {isArabic ? "مثال بسيط" : "Simple example"}
          </p>
          <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">
            {isArabic
              ? "إذا كان الوزن 70 كجم، والمعدل 100 مل/ساعة، والمدة 8 ساعات، والخطة maintenance، ونوع السائل Normal saline: targetRate = round(100 × 1 × 1) = 100 مل/ساعة، totalVolume = 100 × 8 = 800 مل."
              : "If weight is 70 kg, the rate is 100 mL/hr, duration is 8 hours, mode is maintenance, and fluid type is Normal saline: targetRate = round(100 × 1 × 1) = 100 mL/hr, and totalVolume = 100 × 8 = 800 mL."}
          </p>
        </div>

        <p className="mt-5 rounded-2xl border border-red-200 bg-red-50/80 p-4 text-sm text-red-700 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-200">
          {isArabic
            ? "تنبيه: دقة الناتج تعتمد على صحة البيانات المدخلة، وبنية الخطة المختارة، وقد تختلف الخطة السريرية الفعلية حسب الحالة."
            : "Warning: the result depends on the accuracy of the entered data and the selected plan logic, and the actual clinical plan may differ according to the patient context."}
        </p>
      </section>

      <MedicalReferenceFooter
        locale={locale}
        lastReviewed="2026-11-05"
        scope={{
          en: "Scope: adult inpatient fluid therapy guidance only. This calculator is educational and does not replace clinical assessment or local institution policy. It is not intended for children or home-care settings.",
          ar: "النطاق: إرشادات علاج السوائل للبالغين في المستشفى فقط. هذه الحاسبة تعليمية ولا تستبدل التقييم السريري أو سياسة المؤسسة المحلية. لا تُستخدم للأطفال أو في الرعاية المنزلية.",
        }}
        sources={[
          { label: "NICE: Intravenous fluid therapy in adults in hospital", href: "https://www.nice.org.uk/guidance/cg174" },
          { label: "NICE: Guideline recommendations", href: "https://www.nice.org.uk/guidance/cg174/chapter/recommendations" },
        ]}
      />
    </PageLayout>
  );
}
