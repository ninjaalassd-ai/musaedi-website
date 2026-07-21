import type { Locale } from "@/src/types/i18n";

export type DrugRecord = {
  id: string;
  name: { en: string; ar: string };
  synonyms: string[];
  category: { en: string; ar: string };
  summary: { en: string; ar: string };
  uses: { en: string; ar: string };
  dosage: { en: string; ar: string };
  sideEffects: { en: string; ar: string };
  contraindications: { en: string; ar: string };
  pregnancy: { en: string; ar: string };
  interactions: { en: string; ar: string };
  caution: { en: string; ar: string };
};

export type InteractionRecord = {
  id: string;
  drugA: { en: string; ar: string };
  drugB: { en: string; ar: string };
  severity: { en: string; ar: string };
  summary: { en: string; ar: string };
  recommendation: { en: string; ar: string };
};

export type EmergencyDrugRecord = {
  id: string;
  name: { en: string; ar: string };
  category: { en: string; ar: string };
  summary: { en: string; ar: string };
  note: { en: string; ar: string };
};

export type BmiBmrResult = {
  bmi: string;
  bmr: string;
  bmiLabel: { en: string; ar: string };
};

export type IvFluidSummary = {
  modeLabel: { en: string; ar: string };
  recommendation: { en: string; ar: string };
  targetRate: number;
  totalVolume: number;
  note: { en: string; ar: string };
};

export interface MedicalRepository {
  searchDrugs(query: string, locale: Locale): DrugRecord[];
  getDrugByName(query: string, locale: Locale): DrugRecord | null;
  getInteractionReport(drugA: string, drugB: string, locale: Locale): InteractionRecord | null;
  getEmergencyDrugs(query: string, category: string, locale: Locale): EmergencyDrugRecord[];
  calculateBmiBmr(heightCm: number, weightKg: number, age: number, sex: "male" | "female"): BmiBmrResult;
  calculateIvFluidPlan(mode: "maintenance" | "resuscitation" | "replacement", weightKg: number, rate: number, duration: number, fluidType: string): IvFluidSummary;
}

function normalize(value: string) {
  return value.toLowerCase().trim();
}

function createMockMedicalRepository(): MedicalRepository {
  const drugs: DrugRecord[] = [
    {
      id: "amoxicillin",
      name: { en: "Amoxicillin", ar: "أموكسيسيلين" },
      synonyms: ["Amoxil", "penicillin derivative"],
      category: { en: "Antibiotic", ar: "مضاد حيوي" },
      summary: {
        en: "A broad-spectrum penicillin used for bacterial infections and common outpatient care.",
        ar: "مضاد حيوي واسع الطيف من عائلة البنسلين يُستخدم لعلاج العدوى البكتيرية والرعاية الخارجية الشائعة.",
      },
      uses: {
        en: "Treats respiratory, ear, skin, and urinary tract infections when clinically appropriate.",
        ar: "يعالج العدوى التنفسية والأذن والجلد والمسالك البولية عند مناسبة ذلك سريريًا.",
      },
      dosage: {
        en: "Dosing depends on age, renal function, and infection severity. Follow institutional guidance.",
        ar: "تعتمد الجرعة على العمر ووظيفة الكلى وشدة العدوى. اتبع الإرشادات المؤسسية.",
      },
      sideEffects: {
        en: "May cause nausea, diarrhea, rash, or mild stomach upset.",
        ar: "قد يسبب الغثيان والإسهال والطفح أو اضطرابًا خفيفًا في المعدة.",
      },
      contraindications: {
        en: "Avoid if there is a known allergy to penicillin or cephalosporin antibiotics.",
        ar: "تجنب الاستخدام إذا كان هناك حساسية معروفة للبنسلين أو مضادات حيوية من عائلة السيفالوسبورين.",
      },
      pregnancy: {
        en: "Use should be guided by clinician judgment and maternal-fetal risk assessment.",
        ar: "يجب أن يُوجه استخدامه وفقًا لتقدير الطبيب ومخاطر الأم والجنين.",
      },
      interactions: {
        en: "May interact with anticoagulants, oral contraceptives, and some antacids.",
        ar: "قد يتداخل مع مضادات التخثر وموانع الحمل الفموية وبعض مضادات الحموضة.",
      },
      caution: {
        en: "Monitor for allergy symptoms and review recent antibiotic exposure.",
        ar: "راقب أعراض الحساسية واستعرض التعرض الأخير للمضادات الحيوية.",
      },
    },
    {
      id: "metformin",
      name: { en: "Metformin", ar: "ميتفورمين" },
      synonyms: ["Glucophage"],
      category: { en: "Antidiabetic", ar: "مضاد للسكري" },
      summary: {
        en: "A first-line therapy for type 2 diabetes that helps improve insulin sensitivity.",
        ar: "علاج أولي لمرض السكري من النوع الثاني يساعد على تحسين حساسية الأنسولين.",
      },
      uses: {
        en: "Used for glycemic control in adults and some pediatric patients under specialist guidance.",
        ar: "يُستخدم للسيطرة على نسبة السكر في البالغين وبعض المرضى الأطفال تحت إشراف أخصائي.",
      },
      dosage: {
        en: "Start low and titrate slowly, especially in older adults or those with renal impairment.",
        ar: "ابدأ بجرعة منخفضة وقم بالزيادة تدريجيًا، خاصة في كبار السن أو من يعانون من ضعف وظائف الكلى.",
      },
      sideEffects: {
        en: "Commonly causes gastrointestinal upset, nausea, and transient diarrhea.",
        ar: "يؤدي عادة إلى اضطراب في الجهاز الهضمي والغثيان والإسهال المؤقت.",
      },
      contraindications: {
        en: "Avoid in severe renal failure or acute metabolic acidosis.",
        ar: "تجنب الاستخدام في حالات الفشل الكلوي الحاد أو الحماض الأيضي الحاد.",
      },
      pregnancy: {
        en: "It is often used in gestational diabetes, but should be supervised by a clinician.",
        ar: "غالبًا ما يُستخدم في سكري الحمل، لكن يجب إشراف الطبيب عليه.",
      },
      interactions: {
        en: "May interact with iodinated contrast agents, alcohol, and certain cardiac medicines.",
        ar: "قد يتداخل مع عوامل التباين المحتوية على اليود والكحول وبعض أدوية القلب.",
      },
      caution: {
        en: "Check kidney function before initiation and during dose escalation.",
        ar: "تحقق من وظائف الكلى قبل البدء وخلال زيادة الجرعة.",
      },
    },
    {
      id: "warfarin",
      name: { en: "Warfarin", ar: "وارفارين" },
      synonyms: ["Coumadin"],
      category: { en: "Anticoagulant", ar: "مضاد تخثر" },
      summary: {
        en: "An oral anticoagulant used to reduce clot formation in high-risk patients.",
        ar: "مضاد تخثر عن طريق الفم يُستخدم لتقليل تكون الجلطات لدى المرضى المعرضين للخطر.",
      },
      uses: {
        en: "Used for atrial fibrillation, deep vein thrombosis, and mechanical valve prophylaxis.",
        ar: "يُستخدم لرجفان الأذين والجلطة الدموية العميقة والوقاية من الصمامات الميكانيكية.",
      },
      dosage: {
        en: "Dose must be individualized and monitored with INR testing.",
        ar: "يجب أن تُحدد الجرعة فرديًا ومراقبتها باستخدام فحص INR.",
      },
      sideEffects: {
        en: "Bleeding risk, bruising, and rare skin necrosis are important concerns.",
        ar: "يُعد خطر النزف والكدمات ونخر الجلد النادر من المخاوف المهمة.",
      },
      contraindications: {
        en: "Avoid in active bleeding, severe hypertension, or pregnancy unless indicated.",
        ar: "تجنب الاستخدام في النزف النشط أو ارتفاع ضغط الدم الشديد أو الحمل إلا عند الإشارة.",
      },
      pregnancy: {
        en: "Often avoided in pregnancy due to fetal bleeding risk.",
        ar: "غالبًا ما يُتجنّب في الحمل بسبب خطر النزف الجنيني.",
      },
      interactions: {
        en: "Highly sensitive to antibiotics, NSAIDs, and many herbal supplements.",
        ar: "حساس للغاية للمضادات الحيوية ومضادات الالتهاب غير الستيروئيدية والعديد من المكملات العشبية.",
      },
      caution: {
        en: "Schedule INR checks and review all recent medication changes.",
        ar: "جدول فحوصات INR ومراجعة جميع التغييرات الدوائية الأخيرة.",
      },
    },
  ];

  const interactions: InteractionRecord[] = [
    {
      id: "warfarin-nsaid",
      drugA: { en: "Warfarin", ar: "وارفارين" },
      drugB: { en: "NSAID", ar: "مضاد التهاب غير ستيرويدي" },
      severity: { en: "Major", ar: "خطير" },
      summary: {
        en: "This combination may significantly increase bleeding risk and requires careful monitoring.",
        ar: "قد يزيد هذا الجمع بشكل كبير من خطر النزف ويتطلب مراقبة دقيقة.",
      },
      recommendation: {
        en: "Consider an alternative therapy and review clotting parameters if no alternative exists.",
        ar: "فكر في علاج بديل ومراجعة معايير التخثر إذا لم يوجد بديل.",
      },
    },
    {
      id: "amiodarone-antibiotic",
      drugA: { en: "Amiodarone", ar: "أميودارون" },
      drugB: { en: "Antibiotic", ar: "مضاد حيوي" },
      severity: { en: "Moderate", ar: "متوسط" },
      summary: {
        en: "Some antibiotics can increase the risk of QT prolongation when combined with amiodarone.",
        ar: "بعض المضادات الحيوية قد تزيد من خطر إطالة QT عند دمجها مع الأميودارون.",
      },
      recommendation: {
        en: "Review ECG monitoring and consult a pharmacist for dose adjustment options.",
        ar: "راجع مراقبة تخطيط القلب واستشر الصيدلي حول خيارات تعديل الجرعة.",
      },
    },
  ];

  const emergencyDrugs: EmergencyDrugRecord[] = [
    {
      id: "adrenaline",
      name: { en: "Adrenaline", ar: "الأدرينالين" },
      category: { en: "Resuscitation", ar: "الإنعاش" },
      summary: { en: "Critical for anaphylaxis and advanced cardiac life support workflows.", ar: "حاسم لفرط التحسس ودعم الحياة القلبي المتقدم." },
      note: { en: "Keep ready for rapid administration in emergency protocols.", ar: "أبقِه جاهزًا للتقديم السريع في بروتوكولات الطوارئ." },
    },
    {
      id: "amiodarone",
      name: { en: "Amiodarone", ar: "الأميودارون" },
      category: { en: "Cardiac", ar: "قلب" },
      summary: { en: "Used for refractory ventricular arrhythmias and emergency cardiac support.", ar: "يُستخدم لاضطرابات نظم القلب البطيني المقاومة ودعم القلب الطارئ." },
      note: { en: "Requires close monitoring because of its serious adverse-effect profile.", ar: "يتطلب مراقبة قريبة بسبب ملف الآثار الجانبية الخطير." },
    },
    {
      id: "atropine",
      name: { en: "Atropine", ar: "أتروبين" },
      category: { en: "Emergency", ar: "طوارئ" },
      summary: { en: "Common in bradycardia and anticholinergic emergency support scenarios.", ar: "شائع في حالات بطء القلب ودعم الطوارئ المضاد للكولين." },
      note: { en: "Use under clear clinical protocol and ongoing observation.", ar: "استخدم وفق بروتوكول سريري واضح ومراقبة مستمرة." },
    },
    {
      id: "glucose",
      name: { en: "Glucose", ar: "الجلوكوز" },
      category: { en: "Metabolic", ar: "استقلاب" },
      summary: { en: "Rapid support for severe hypoglycemia in acute care settings.", ar: "دعم سريع لنقص السكر الشديد في بيئات الرعاية الحادة." },
      note: { en: "Administer quickly when hypoglycemia is suspected and confirmed.", ar: "أعطه بسرعة عند الاشتباه في نقص السكر وتأكيده." },
    },
  ];

  return {
    searchDrugs(query, locale) {
      const q = normalize(query);
      if (!q) {
        return drugs.slice(0, 3);
      }
      return drugs.filter((drug) => {
        const haystack = [drug.name[locale], drug.category[locale], drug.summary[locale], ...drug.synonyms].join(" ").toLowerCase();
        return haystack.includes(q);
      });
    },
    getDrugByName(query, locale) {
      const matches = this.searchDrugs(query, locale);
      return matches[0] ?? null;
    },
    getInteractionReport(drugA, drugB, locale) {
      const qA = normalize(drugA);
      const qB = normalize(drugB);
      if (!qA || !qB) {
        return interactions[0] ?? null;
      }
      return (
        interactions.find((item) => {
          const haystack = `${item.drugA[locale]} ${item.drugB[locale]}`.toLowerCase();
          return haystack.includes(qA) || haystack.includes(qB);
        }) ?? interactions[0] ?? null
      );
    },
    getEmergencyDrugs(query, category, locale) {
      const q = normalize(query);
      const c = normalize(category);
      return emergencyDrugs.filter((drug) => {
        const matchesQuery = !q || [drug.name[locale], drug.summary[locale], drug.note[locale], drug.category[locale]].join(" ").toLowerCase().includes(q);
        const matchesCategory = !c || c === "all" || normalize(drug.category[locale]).includes(c) || normalize(drug.category.en).includes(c);
        return matchesQuery && matchesCategory;
      });
    },
    calculateBmiBmr(heightCm, weightKg, age, sex) {
      const bmi = weightKg / ((heightCm / 100) * (heightCm / 100));
      const bmr = sex === "female" ? 10 * weightKg + 6.25 * heightCm - 5 * age - 161 : 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
      let bmiLabel = { en: "Normal", ar: "طبيعي" };
      if (bmi < 18.5) bmiLabel = { en: "Underweight", ar: "أقل من الوزن الطبيعي" };
      else if (bmi < 25) bmiLabel = { en: "Normal", ar: "طبيعي" };
      else if (bmi < 30) bmiLabel = { en: "Overweight", ar: "زيادة وزن" };
      else bmiLabel = { en: "Obese", ar: "سمنة" };
      return { bmi: bmi.toFixed(1), bmr: bmr.toFixed(0), bmiLabel };
    },
    calculateIvFluidPlan(mode, weightKg, rate, duration, fluidType) {
      const modeMultiplier = mode === "maintenance" ? 1 : mode === "resuscitation" ? 1.3 : 1.1;
      const fluidMultiplier = fluidType === "Ringer lactate" ? 1.05 : fluidType === "Dextrose 5%" ? 0.95 : 1;
      const fallbackRate = mode === "maintenance" ? Math.max(40, weightKg * 4) : mode === "resuscitation" ? Math.max(80, weightKg * 8) : Math.max(60, weightKg * 6);
      const targetRate = Math.round((Number(rate) || fallbackRate) * modeMultiplier * fluidMultiplier);
      const totalVolume = Math.round(targetRate * (Number(duration) || 1));
      const note = {
        en: "This is an educational estimate based on the selected plan and fluid type.",
        ar: "هذا تقدير تعليمي بناءً على الخطة والنوع المختار للسائل.",
      };
      const recommendation = {
        en: `Estimated ${mode} plan: ${targetRate} mL/hr with ${totalVolume} mL over ${duration || 1} hours.`,
        ar: `الخطة التقديرية ${mode}: ${targetRate} مل/ساعة مع ${totalVolume} مل خلال ${duration || 1} ساعة.`,
      };
      const modeLabel = {
        en: mode === "maintenance" ? "Maintenance" : mode === "resuscitation" ? "Resuscitation" : "Replacement",
        ar: mode === "maintenance" ? "صيانة" : mode === "resuscitation" ? "إنعاش" : "تعويض",
      };
      return { modeLabel, recommendation, targetRate, totalVolume, note };
    },
  };
}

export const medicalService = createMockMedicalRepository();

export function createMedicalRepository(): MedicalRepository {
  return createMockMedicalRepository();
}
