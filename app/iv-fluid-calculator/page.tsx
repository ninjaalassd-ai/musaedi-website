"use client";

import { useMemo, useState } from "react";
import { Activity, ArrowRight, Droplets, ShieldCheck, Timer } from "lucide-react";
import { useSite } from "@/components/site-provider";
import { PageLayout } from "@/components/ui";
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
    </PageLayout>
  );
}
