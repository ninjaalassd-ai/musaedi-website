"use client";

import { useSite } from "@/components/site-provider";
import { PageLayout } from "@/components/ui";
import { MedicalReferenceFooter } from "@/components/medical-reference-footer";

export default function DrugInteractionCheckerPage() {
  const { locale } = useSite();
  const isArabic = locale === "ar";

  return (
    <PageLayout
      locale={locale}
      eyebrow={isArabic ? "أمان الدواء" : "Medication safety"}
      title={isArabic ? "فحص التداخلات الدوائية بسرعة" : "Check medication interactions quickly"}
      description={isArabic ? "ساعد في تحديد المخاطر المحتملة قبل أن تؤثر على صحة المريض." : "Help identify potential risks before they affect patient care."}
      primaryAction={{ href: "/download", label: isArabic ? "تنزيل التطبيق" : "Download the app" }}
    >
      <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/80">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{isArabic ? "الميزات المتاحة" : "What the experience offers"}</h2>
        <ul className="mt-6 space-y-3 text-slate-600 dark:text-slate-300">
          <li>• {isArabic ? "عرض تداخلات الأدوية بشكل واضح ومُرتب." : "Review key interactions in a clean, structured view."}</li>
          <li>• {isArabic ? "تبادل سريع للمعلومات مع الفريق العلاجي." : "Share critical insights with the care team quickly."}</li>
          <li>• {isArabic ? "تسليط الضوء على المخاطر إلى جانب المقاييس السريرية." : "Highlight risk factors alongside clinical context."}</li>
        </ul>

        <div className="mt-8 rounded-[1.5rem] border border-amber-200 bg-amber-50/90 p-6 dark:border-amber-900/50 dark:bg-amber-950/50">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            {isArabic ? "تنبيه مهم" : "Important notice"}
          </h3>
          <div className="mt-3 space-y-3 text-sm leading-7 text-slate-700 dark:text-slate-200">
            <p>
              {isArabic
                ? "لا يغطي هذا الفاحص بالضرورة جميع الأدوية أو المكملات أو الأعشاب أو الحالات الصحية، وقد يفتقد بعض التداخلات أو يقتصر على أدوية محددة."
                : "This tool does not necessarily cover all medicines, supplements, herbal products, or health conditions, and some interactions may be missing or limited to selected drugs."}
            </p>
            <p>
              {isArabic
                ? "نتائج الأداة لا تكفي وحدها لإثبات سلامة الجمع بين الأدوية أو خطورته، ولا ينبغي الاعتماد عليها كدليل مستقل في اتخاذ القرار السريري."
                : "The tool’s results alone are not sufficient to prove that a drug combination is safe or risky, and they should not be used as a stand-alone clinical decision source."}
            </p>
            <p>
              {isArabic
                ? "يُستحسن مراجعة الصيدلي أو الطبيب قبل تعديل العلاج، ولا يُوقف دواء موصوف بناءً على نتيجة الأداة وحدها."
                : "It is recommended to review the result with a pharmacist or physician before changing therapy, and a prescribed medicine should not be stopped based on the tool result alone."}
            </p>
            <p>
              {isArabic
                ? "أي توسيع لقاعدة بيانات التداخلات يتطلب مراجعة مختص صحي مؤهل."
                : "Any expansion of the interaction database requires review by a qualified healthcare professional."}
            </p>
          </div>
        </div>
      </div>

      <MedicalReferenceFooter
        locale={locale}
        lastReviewed="2026-11-05"
        scope={{
          en: "Educational medication interaction support only. This checker is not exhaustive and does not replace a pharmacist review, clinical assessment, formulary policy, or local prescribing guidance.",
          ar: "دعم تعليمي لفحص تداخلات الأدوية فقط. هذا الفاحص ليس شاملًا ولا يستبدل مراجعة الصيدلي أو التقييم السريري أو سياسة الصيادلة المحلية أو إرشادات الوصفة المعتمدة.",
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
