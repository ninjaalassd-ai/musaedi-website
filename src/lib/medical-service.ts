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
  scientificName?: { en: string; ar: string };
  tradeName?: { en: string; ar: string };
  indications?: { en: string; ar: string };
  dosageRouteAge?: { en: string; ar: string };
  contraindicationsWarnings?: { en: string; ar: string };
  importantSideEffects?: { en: string; ar: string };
  relevantInteractions?: { en: string; ar: string };
  source?: { en: string; ar: string };
  lastReviewed?: { en: string; ar: string };
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
  scientificName?: { en: string; ar: string };
  tradeName?: { en: string; ar: string };
  indications?: { en: string; ar: string };
  dosageRouteAge?: { en: string; ar: string };
  contraindicationsWarnings?: { en: string; ar: string };
  importantSideEffects?: { en: string; ar: string };
  relevantInteractions?: { en: string; ar: string };
  source?: { en: string; ar: string };
  sourceUrl?: { en: string; ar: string };
  lastReviewed?: { en: string; ar: string };
};

export type BmiBmrResult = {
  bmi: string;
  bmr: string;
  bmiLabel: { en: string; ar: string };
  dietAdvice: { en: string; ar: string };
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
  getDrugCount(): number;
  getInteractionReport(drugA: string, drugB: string, locale: Locale): InteractionRecord | null;
  getInteractionCount(): number;
  getEmergencyDrugs(query: string, category: string, locale: Locale): EmergencyDrugRecord[];
  getEmergencyDrugCount(): number;
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
      id: "paracetamol",
      name: { en: "Paracetamol", ar: "باراسيتامول" },
      synonyms: ["Acetaminophen", "Tylenol"],
      category: { en: "Analgesic", ar: "مسكن" },
      summary: {
        en: "A widely used pain reliever and fever reducer for mild to moderate discomfort.",
        ar: "مسكن وخافض حرارة يستخدم على نطاق واسع للألم الخفيف إلى المتوسط.",
      },
      uses: {
        en: "Relieves headaches, musculoskeletal pain, and fever in both adults and children.",
        ar: "يخفف الصداع وآلام الجهاز الحركي والحمى لدى البالغين والأطفال.",
      },
      dosage: {
        en: "Use according to age and weight guidelines. Do not exceed the maximum daily dose.",
        ar: "استخدم وفقًا لإرشادات العمر والوزن. لا تتجاوز الحد الأقصى اليومي.",
      },
      sideEffects: {
        en: "Generally well tolerated but may affect the liver in overdose situations.",
        ar: "يتحمل بشكل عام جيدًا لكنه قد يؤثر على الكبد في حالات الجرعة الزائدة.",
      },
      contraindications: {
        en: "Avoid in severe hepatic impairment or known hypersensitivity.",
        ar: "تجنب في حالات ضعف الكبد الشديدة أو فرط الحساسية المعروف.",
      },
      pregnancy: {
        en: "Considered relatively safe when used at recommended doses under supervision.",
        ar: "يُعتبر آمنًا نسبيًا عند استخدامه بالجرعات الموصى بها وتحت الإشراف.",
      },
      interactions: {
        en: "May interact with alcohol and some liver-metabolized medications.",
        ar: "قد يتداخل مع الكحول وبعض الأدوية التي يتم استقلابها في الكبد.",
      },
      caution: {
        en: "Review liver function and avoid long-term high-dose use without medical review.",
        ar: "راجع وظيفة الكبد وتجنب الاستخدام طويل الأمد بجرعات عالية دون مراجعة طبية.",
      },
    },
    {
      id: "ibuprofen",
      name: { en: "Ibuprofen", ar: "إيبوبروفين" },
      synonyms: ["Advil", "Motrin"],
      category: { en: "NSAID", ar: "مضاد التهاب غير ستيرويدي" },
      summary: {
        en: "Commonly used for pain, inflammation, and fever with a fast-acting profile.",
        ar: "يستخدم عادةً للألم والالتهاب والحمى مع تأثير سريع.",
      },
      uses: {
        en: "Effective for musculoskeletal pain, headaches, and mild inflammatory conditions.",
        ar: "فعال لألم الجهاز الحركي والصداع والحالات الالتهابية الخفيفة.",
      },
      dosage: {
        en: "Take with food and use the lowest effective dose for the shortest duration.",
        ar: "تناول مع الطعام واستخدم أدنى جرعة فعالة لأقصر مدة.",
      },
      sideEffects: {
        en: "May cause gastrointestinal irritation, renal stress, and increased bleeding risk.",
        ar: "قد يسبب تهيجًا في الجهاز الهضمي وإجهادًا كلوياً وزيادة خطر النزف.",
      },
      contraindications: {
        en: "Avoid in active ulcers, severe renal impairment, or uncontrolled hypertension.",
        ar: "تجنب في القرحة النشطة أو ضعف الكلى الشديد أو ارتفاع ضغط الدم غير المنضبط.",
      },
      pregnancy: {
        en: "Use caution in pregnancy and follow obstetric guidance for timing and indication.",
        ar: "استخدم بحذر في الحمل واتبع إرشادات التوليد للوقت والدلالة.",
      },
      interactions: {
        en: "May interact with anticoagulants, ACE inhibitors, and other NSAIDs.",
        ar: "قد يتداخل مع مضادات التخثر ومثبطات الإنزيم المحول للأنجيوتنسين وأدوية NSAID الأخرى.",
      },
      caution: {
        en: "Monitor renal function and stop if abdominal pain or dark stools occur.",
        ar: "راقب وظائف الكلى وتوقف إذا حدث ألم بطني أو براز داكن.",
      },
    },
    {
      id: "omeprazole",
      name: { en: "Omeprazole", ar: "أومبرازول" },
      synonyms: ["Prilosec"],
      category: { en: "Proton pump inhibitor", ar: "مثبط مضخة البروتون" },
      summary: {
        en: "A medication used to reduce gastric acid production in reflux and ulcer disease.",
        ar: "دواء يقلل من إنتاج حمض المعدة في حالات الارتجاع وقرحة المعدة.",
      },
      uses: {
        en: "Used for GERD, peptic ulcer disease, and acid-related dyspepsia.",
        ar: "يُستخدم لمرض الارتجاع والمعدة التقرحية وعسر الهضم الناجم عن الحمض.",
      },
      dosage: {
        en: "Typically taken once daily before breakfast for standard indications.",
        ar: "عادةً يؤخذ مرة واحدة يوميًا قبل الإفطار للحالات القياسية.",
      },
      sideEffects: {
        en: "May cause headache, nausea, and long-term changes in magnesium or B12.",
        ar: "قد يسبب صداعًا وغثيانًا وتغيرات طويلة الأمد في المغنيسيوم أو فيتامين ب12.",
      },
      contraindications: {
        en: "Avoid if there is hypersensitivity to proton pump inhibitors.",
        ar: "تجنب إذا كان هناك فرط حساسية لمثبطات مضخة البروتون.",
      },
      pregnancy: {
        en: "Generally considered safe when clinically indicated, but review obstetric guidance.",
        ar: "يعتبر آمنًا عمومًا عند وجود دلالة سريرية، لكن راجع إرشادات التوليد.",
      },
      interactions: {
        en: "May interact with clopidogrel and other medications requiring acidic absorption.",
        ar: "قد يتداخل مع كلوبيدوجريل وأدوية أخرى تتطلب امتصاصًا حمضيًا.",
      },
      caution: {
        en: "Use the lowest effective dose and reassess need periodically.",
        ar: "استخدم أدنى جرعة فعالة وأعد تقييم الحاجة بشكل دوري.",
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
    {
      id: "aspirin",
      name: { en: "Aspirin", ar: "أسبرين" },
      synonyms: ["Acetylsalicylic acid"],
      category: { en: "Antiplatelet", ar: "مضاد التجلط" },
      summary: {
        en: "A platelet inhibitor used for cardiovascular protection and pain relief.",
        ar: "مضاد لتجمع الصفائح الدموية يُستخدم للحماية القلبية والألم.",
      },
      uses: {
        en: "Used for pain, fever, antiplatelet therapy, and selected cardiovascular prevention.",
        ar: "يُستخدم للألم والحمى والعلاج المضاد للتجلط وبعض الوقاية القلبية.",
      },
      dosage: {
        en: "Dose depends on the indication and patient factors; use the lowest effective amount.",
        ar: "تعتمد الجرعة على الدلالة وعوامل المريض؛ استخدم أدنى جرعة فعالة.",
      },
      sideEffects: {
        en: "Gastric irritation, bleeding, tinnitus, and rash are notable concerns.",
        ar: "تهيّج المعدة، النزف، طنين الأذن، والطفح من المخاوف المهمة.",
      },
      contraindications: {
        en: "Avoid in active bleeding, ulcers, aspirin allergy, and selected pediatric viral illness scenarios.",
        ar: "تجنب في النزف النشط أو القرحة أو الحساسية للأسبرين وبعض حالات العدوى الفيروسية عند الأطفال.",
      },
      pregnancy: {
        en: "Use may be restricted in late pregnancy and should follow obstetric advice.",
        ar: "قد يقتصر الاستخدام في نهاية الحمل ويجب اتباع نصيحة التوليد.",
      },
      interactions: {
        en: "May increase bleeding when combined with anticoagulants or other NSAIDs.",
        ar: "قد يزيد النزف عند دمجه مع مضادات التخثر أو مضادات الالتهاب الأخرى.",
      },
      caution: {
        en: "Monitor for GI bleeding and avoid overuse.",
        ar: "راقب النزيف المعوي وتجنب الإفراط في الاستخدام.",
      },
    },
    {
      id: "atenolol",
      name: { en: "Atenolol", ar: "أتينولول" },
      synonyms: ["beta-blocker"],
      category: { en: "Cardiovascular", ar: "قلب وعائي" },
      summary: {
        en: "A beta-blocker used for blood pressure control and arrhythmia management.",
        ar: "حاصِر بيتا يُستخدم للسيطرة على الضغط وملف اضطرابات النظم.",
      },
      uses: {
        en: "Useful for hypertension, angina, and selected arrhythmia indications.",
        ar: "مفيد في ارتفاع الضغط والذبحة وبعض مؤشرات اضطرابات النظم.",
      },
      dosage: {
        en: "Dose varies by indication, renal function, and age.",
        ar: "تختلف الجرعة حسب الدلالة ووظائف الكلى والعمر.",
      },
      sideEffects: {
        en: "Fatigue, bradycardia, low blood pressure, and cold extremities may occur.",
        ar: "النعاس، بطء القلب، انخفاض ضغط الدم، وبرودة الأطراف قد تحدث.",
      },
      contraindications: {
        en: "Avoid in severe bradycardia, decompensated shock, or asthma exacerbation.",
        ar: "تجنب في بطء القلب الشديد أو الصدمة المتدهورة أو تفاقم الربو.",
      },
      pregnancy: {
        en: "Use only when benefits outweigh risks and under clinician guidance.",
        ar: "يُستخدم فقط إذا كانت الفائدة تفوق الخطر وتحت توجيه طبي.",
      },
      interactions: {
        en: "May blunt bronchodilator response and interact with calcium-channel blockers.",
        ar: "قد يضعف الاستجابة للمنشطات القصبية ويتداخل مع حاصرات القنوات الكالسيومية.",
      },
      caution: {
        en: "Monitor pulse and blood pressure during dose changes.",
        ar: "راقب النبض وضغط الدم أثناء تغيير الجرعة.",
      },
    },
    {
      id: "amlodipine",
      name: { en: "Amlodipine", ar: "أملوديبين" },
      synonyms: ["Calcium channel blocker"],
      category: { en: "Antihypertensive", ar: "مخفض ضغط" },
      summary: {
        en: "A calcium-channel blocker used for hypertension and angina.",
        ar: "حاصر قنوات الكالسيوم يُستخدم لارتفاع الضغط والذبحة.",
      },
      uses: {
        en: "Helpful for blood pressure control and coronary vasodilation.",
        ar: "مفيد في السيطرة على ضغط الدم وتوسيع الشرايين التاجية.",
      },
      dosage: {
        en: "Dose is commonly once daily and adjusted to the clinical response.",
        ar: "الجرعة عادةً مرة يوميًا وتُعدّل حسب الاستجابة السريرية.",
      },
      sideEffects: {
        en: "Peripheral edema, flushing, dizziness, and headache may appear.",
        ar: "تورم الأطراف، احمرار الوجه، دوخة، صداع قد يظهر.",
      },
      contraindications: {
        en: "Use cautiously in severe hypotension and some forms of heart failure.",
        ar: "استخدم بحذر في انخفاض ضغط الدم الشديد وبعض أشكال فشل القلب.",
      },
      pregnancy: {
        en: "Consider whether benefits outweigh risks under clinician guidance.",
        ar: "ضع في الاعتبار الفائدة مقابل الخطر تحت توجيه طبي.",
      },
      interactions: {
        en: "May enhance the blood-pressure-lowering effect with other antihypertensives.",
        ar: "قد يرفع تأثير خفض الضغط عند الجمع مع خافضات ضغط أخرى.",
      },
      caution: {
        en: "Monitor for edema and blood pressure changes.",
        ar: "راقب التورم وتغيرات ضغط الدم.",
      },
    },
    {
      id: "azithromycin",
      name: { en: "Azithromycin", ar: "أزيثروميسين" },
      synonyms: ["Zithromax"],
      category: { en: "Antibiotic", ar: "مضاد حيوي" },
      summary: {
        en: "A macrolide antibiotic used for respiratory and selected infections.",
        ar: "مضاد حيوي من عائلة الماكروليد يُستخدم للالتهابات التنفسية وبعض العدوى المختارة.",
      },
      uses: {
        en: "Used for community-acquired pneumonia, sinusitis, and some other infections.",
        ar: "يُستخدم في الالتهاب الرئوي المكتسب من المجتمع والتهاب الجيوب وبعض العدوى الأخرى.",
      },
      dosage: {
        en: "Short-course dosing is common, but guidance varies by indication.",
        ar: "الجرعة قصيرة المدى شائعة، لكن الإرشاد يختلف حسب الدلالة.",
      },
      sideEffects: {
        en: "Nausea, diarrhea, and rare QT prolongation are important considerations.",
        ar: "الغثيان، الإسهال، وإطالة QT النادرة من الاعتبارات المهمة.",
      },
      contraindications: {
        en: "Avoid if there is known macrolide allergy or significant QT risk.",
        ar: "تجنب إذا كان هناك حساسية للماكروليدات أو خطر QT كبير.",
      },
      pregnancy: {
        en: "Generally acceptable with medical supervision when needed.",
        ar: "يُعتبر مقبولًا عمومًا تحت إشراف طبي عند الحاجة.",
      },
      interactions: {
        en: "May increase QT risk with other QT-prolonging drugs.",
        ar: "قد يزيد خطر QT مع أدوية أخرى تطيل QT.",
      },
      caution: {
        en: "Review heart rhythm risk before combining with other QT-active drugs.",
        ar: "راجع خطر إيقاع القلب قبل الدمج مع أدوية QT النشطة.",
      },
    },
    {
      id: "furosemide",
      name: { en: "Furosemide", ar: "فوروزميد" },
      synonyms: ["Lasix"],
      category: { en: "Diuretic", ar: "مدر للبول" },
      summary: {
        en: "A loop diuretic used for fluid overload, edema, and selected blood pressure conditions.",
        ar: "مدر حلقي يُستخدم لفرط السوائل والوذمة وبعض حالات ارتفاع الضغط.",
      },
      uses: {
        en: "Helpful in heart failure, edema, and selected hypertensive settings.",
        ar: "مفيد في فشل القلب والوذمة وبعض إعدادات ارتفاع الضغط.",
      },
      dosage: {
        en: "Dosing depends on weight, kidney function, and volume status.",
        ar: "تعتمد الجرعة على الوزن ووظائف الكلى وحالة السوائل.",
      },
      sideEffects: {
        en: "Low potassium, dehydration, muscle cramps, and dizziness can occur.",
        ar: "انخفاض البوتاسيوم، الجفاف، تقلصات العضلات، والدوخة ممكنة.",
      },
      contraindications: {
        en: "Avoid in severe dehydration and anuria unless instructed by a specialist.",
        ar: "تجنب في الجفاف الشديد وقلة البول إلا إذا أوصى به أخصائي.",
      },
      pregnancy: {
        en: "Use only when clinically required and monitored.",
        ar: "يُستخدم فقط عند الضرورة السريرية مع المراقبة.",
      },
      interactions: {
        en: "May worsen potassium depletion when combined with digoxin or corticosteroids.",
        ar: "قد يفاقم استنزاف البوتاسيوم عند الجمع مع الديجوكسين أو الكورتيكوستيرويدات.",
      },
      caution: {
        en: "Monitor electrolytes and blood pressure closely.",
        ar: "راقب الشوارد وضغط الدم عن كثب.",
      },
    },
    {
      id: "insulin-glargine",
      name: { en: "Insulin Glargine", ar: "إنسولين جلارجين" },
      synonyms: ["Lantus"],
      category: { en: "Antidiabetic", ar: "مضاد للسكري" },
      summary: {
        en: "A long-acting insulin used for basal glycemic control.",
        ar: "إنسولين طويل المفعول يُستخدم للتحكم القاعدي في السكر.",
      },
      uses: {
        en: "Used for diabetes management to maintain stable background insulin levels.",
        ar: "يُستخدم لإدارة السكري للحفاظ على مستويات إنسولين أساسية مستقرة.",
      },
      dosage: {
        en: "Dose is individualized and depends on daily insulin requirements.",
        ar: "تُحدد الجرعة فرديًا وفقًا لمتطلبات الأنسولين اليومية.",
      },
      sideEffects: {
        en: "Hypoglycemia, weight gain, and injection-site reactions are common concerns.",
        ar: "انخفاض السكر، زيادة الوزن، وردود فعل في موقع الحقن من المخاوف الشائعة.",
      },
      contraindications: {
        en: "Avoid in hypoglycemia or when insulin use is not appropriate.",
        ar: "تجنب في حالات انخفاض السكر أو عندما لا يكون استخدام الأنسولين مناسبًا.",
      },
      pregnancy: {
        en: "Often used under specialist oversight during pregnancy.",
        ar: "غالبًا ما يُستخدم تحت إشراف أخصائي أثناء الحمل.",
      },
      interactions: {
        en: "Combined glucose-lowering agents can increase hypoglycemia risk.",
        ar: "يمكن أن تزيد العلاجات المخفضة للسكر من خطر انخفاض السكر عند الجمع.",
      },
      caution: {
        en: "Monitor glucose patterns closely and adjust doses carefully.",
        ar: "راقب أنماط السكر بعناية واضبط الجرعات بحذر.",
      },
    },
    {
      id: "losartan",
      name: { en: "Losartan", ar: "لوسارتان" },
      synonyms: ["ARB"],
      category: { en: "Antihypertensive", ar: "مخفض ضغط" },
      summary: {
        en: "An ARB used to lower blood pressure and protect kidney function.",
        ar: "مضاد مستقبلات الأنجيوتنسين الثاني يُستخدم لخفض ضغط الدم وحماية الكلى.",
      },
      uses: {
        en: "Used for hypertension, heart failure, and diabetic kidney protection.",
        ar: "يُستخدم لارتفاع الضغط وفشل القلب وحماية الكلى في مرض السكري.",
      },
      dosage: {
        en: "Dose varies based on blood pressure target and renal status.",
        ar: "تتغير الجرعة بحسب هدف ضغط الدم وحالة الكلى.",
      },
      sideEffects: {
        en: "Dizziness, fatigue, and mild hyperkalemia may occur.",
        ar: "الدوخة، التعب، وارتفاع البوتاسيوم الخفيف قد يحدث.",
      },
      contraindications: {
        en: "Avoid in pregnancy and significant bilateral renal artery stenosis.",
        ar: "تجنب في الحمل ومع تضيق شرايين الكلى الثنائي الشديد.",
      },
      pregnancy: {
        en: "Avoid in pregnancy due to fetal risk.",
        ar: "تجنب في الحمل بسبب خطر الجنين.",
      },
      interactions: {
        en: "Risk of hyperkalemia increases with potassium supplements or other RAAS blockers.",
        ar: "يزيد خطر ارتفاع البوتاسيوم مع المكملات البوتاسية أو مثبطات محور الرينين-الأنجيوتنسين.",
      },
      caution: {
        en: "Monitor potassium and blood pressure after starting treatment.",
        ar: "راقب البوتاسيوم وضغط الدم بعد بدء العلاج.",
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
    {
      id: "lisinopril-potassium",
      drugA: { en: "Lisinopril", ar: "ليسينوبريل" },
      drugB: { en: "Potassium supplement", ar: "مكمل البوتاسيوم" },
      severity: { en: "Major", ar: "خطير" },
      summary: {
        en: "ACE inhibitors can raise potassium levels, and potassium supplements may worsen this effect.",
        ar: "قد تزيد مثبطات إنزيم التحويل للأنجيوتنسين من مستوى البوتاسيوم، وقد تؤدي المكملات إلى تفاقم هذا التأثير.",
      },
      recommendation: {
        en: "Check potassium and renal function before and after starting the combination.",
        ar: "تحقق من مستوى البوتاسيوم ووظائف الكلى قبل وبعد بدء الخلط.",
      },
    },
    {
      id: "metformin-contrast",
      drugA: { en: "Metformin", ar: "ميتفورمين" },
      drugB: { en: "Iodinated contrast", ar: "مادة تباين محتوية على اليود" },
      severity: { en: "Moderate", ar: "متوسط" },
      summary: {
        en: "Contrast studies can increase the risk of lactic acidosis when metformin is continued in renal impairment.",
        ar: "قد تزيد الدراسات بالتباين من خطر الحماض اللبني عند استمرار الميتفورمين مع ضعف وظائف الكلى.",
      },
      recommendation: {
        en: "Review renal function before and after imaging; follow institutional imaging guidance.",
        ar: "راجع وظائف الكلى قبل وبعد التصوير واتبع إرشادات التصوير المؤسسية.",
      },
    },
    {
      id: "warfarin-ibuprofen",
      drugA: { en: "Warfarin", ar: "وارفارين" },
      drugB: { en: "Ibuprofen", ar: "إيبوبروفين" },
      severity: { en: "Major", ar: "خطير" },
      summary: {
        en: "NSAIDs can increase bleeding risk and may potentiate the anticoagulant effect of warfarin.",
        ar: "قد تزيد مضادات الالتهاب غير الستيرويدية من خطر النزف وتضاعف تأثير مضاد التخثر في الوارفارين.",
      },
      recommendation: {
        en: "Use a safer alternative when possible and monitor INR closely.",
        ar: "استخدم بديلًا أكثر أمانًا عند الإمكان وراقب INR عن كثب.",
      },
    },
    {
      id: "simvastatin-azithromycin",
      drugA: { en: "Simvastatin", ar: "سيمفاستاتين" },
      drugB: { en: "Azithromycin", ar: "أزيثروميسين" },
      severity: { en: "Moderate", ar: "متوسط" },
      summary: {
        en: "Some antibiotic combinations can increase the risk of muscle toxicity when statins are used concurrently.",
        ar: "قد تزيد بعض مزيجات المضادات الحيوية من خطر سمية العضلات عند استخدام الستاتين بشكل متزامن.",
      },
      recommendation: {
        en: "Look for muscle pain or weakness and consider a lower-risk alternative if symptoms appear.",
        ar: "ابحث عن آلام أو ضعف في العضلات وفكر في بديل أقل خطورة إذا ظهرت الأعراض.",
      },
    },
    {
      id: "ciprofloxacin-iron",
      drugA: { en: "Ciprofloxacin", ar: "سيبروفلوكساسين" },
      drugB: { en: "Iron supplement", ar: "مكمل الحديد" },
      severity: { en: "Moderate", ar: "متوسط" },
      summary: {
        en: "Minerals such as iron can reduce absorption of fluoroquinolones and lower their effectiveness.",
        ar: "يمكن للمعادن مثل الحديد أن تقلل امتصاص الفلوروكينولونات وتخفض فعاليتها.",
      },
      recommendation: {
        en: "Separate doses by several hours when possible.",
        ar: "افصل الجرعات عن بعضها عدة ساعات عند الإمكان.",
      },
    },
    {
      id: "digoxin-clarithromycin",
      drugA: { en: "Digoxin", ar: "ديجوكسين" },
      drugB: { en: "Clarithromycin", ar: "كلاريثروميسين" },
      severity: { en: "Major", ar: "خطير" },
      summary: {
        en: "Clarithromycin may increase digoxin levels and raise toxicity risk.",
        ar: "قد يزيد الكلاريثروميسين من مستويات الديجوكسين ويزيد خطر السمية.",
      },
      recommendation: {
        en: "Monitor drug levels and clinical signs of toxicity if combined.",
        ar: "راقب مستويات الدواء وعلامات السمية السريرية إذا تم الدمج.",
      },
    },
    {
      id: "levothyroxine-calcium",
      drugA: { en: "Levothyroxine", ar: "ليفوثيروكسين" },
      drugB: { en: "Calcium supplement", ar: "مكمل الكالسيوم" },
      severity: { en: "Moderate", ar: "متوسط" },
      summary: {
        en: "Calcium can reduce the absorption of thyroid hormone replacement and lower its effectiveness.",
        ar: "يمكن أن يقلل الكالسيوم من امتصاص بديل هرمون الغدة الدرقية ويخفض فعاليته.",
      },
      recommendation: {
        en: "Separate dosing by at least 4 hours.",
        ar: "افصل الجرعة بمقدار 4 ساعات على الأقل.",
      },
    },
    {
      id: "furosemide-digoxin",
      drugA: { en: "Furosemide", ar: "فوروزميد" },
      drugB: { en: "Digoxin", ar: "ديجوكسين" },
      severity: { en: "Moderate", ar: "متوسط" },
      summary: {
        en: "Diuretic-induced potassium loss can increase digoxin toxicity.",
        ar: "قد يزيد فقدان البوتاسيوم الناجم عن المدرات من سمية الديجوكسين.",
      },
      recommendation: {
        en: "Check potassium and monitor for digoxin toxicity warning signs.",
        ar: "تحقق من البوتاسيوم وراقب علامات سمية الديجوكسين.",
      },
    },
    {
      id: "losartan-potassium",
      drugA: { en: "Losartan", ar: "لوسارتان" },
      drugB: { en: "Potassium supplement", ar: "مكمل البوتاسيوم" },
      severity: { en: "Major", ar: "خطير" },
      summary: {
        en: "Potassium-sparing effects can be amplified by potassium-containing products and supplements.",
        ar: "يمكن تضخيم التأثيرات الحافظة للبوتاسيوم بواسطة المنتجات والمكملات المحتوية على البوتاسيوم.",
      },
      recommendation: {
        en: "Monitor renal function and potassium levels when using both.",
        ar: "راقب وظائف الكلى ومستوى البوتاسيوم عند استخدام الاثنين معًا.",
      },
    },
    {
      id: "amlodipine-atorvastatin",
      drugA: { en: "Amlodipine", ar: "أملوديبين" },
      drugB: { en: "Atorvastatin", ar: "أتورفاستاتين" },
      severity: { en: "Moderate", ar: "متوسط" },
      summary: {
        en: "This combination is usually manageable but may require attention to blood pressure and liver function.",
        ar: "عادةً ما يكون هذا الجمع قابلاً للإدارة لكنه قد يتطلب الانتباه إلى ضغط الدم ووظائف الكبد.",
      },
      recommendation: {
        en: "Reassess blood pressure and watch for side effects from either medicine if symptoms appear.",
        ar: "أعد تقييم ضغط الدم وراقب الآثار الجانبية لأي من الدواءين إذا ظهرت الأعراض.",
      },
    },
    {
      id: "atorvastatin-clarithromycin",
      drugA: { en: "Atorvastatin", ar: "أتورفاستاتين" },
      drugB: { en: "Clarithromycin", ar: "كلاريثروميسين" },
      severity: { en: "Major", ar: "خطير" },
      summary: {
        en: "Clarithromycin can increase atorvastatin exposure and raise the risk of muscle toxicity.",
        ar: "قد يزيد الكلاريثروميسين من تعرض الجسم للأتورفاستاتين ويزيد خطر سمية العضلات.",
      },
      recommendation: {
        en: "Use a lower statin dose or an alternative antibiotic when possible and review muscle symptoms.",
        ar: "استخدم جرعة أقل من الستاتين أو بديلًا للمضاد الحيوي عند الإمكان وراجع أعراض العضلات.",
      },
    },
    {
      id: "prednisone-amlodipine",
      drugA: { en: "Prednisone", ar: "بريدنيزون" },
      drugB: { en: "Amlodipine", ar: "أملوديبين" },
      severity: { en: "Moderate", ar: "متوسط" },
      summary: {
        en: "Prednisone can worsen blood sugar and blood pressure control, which may increase the effect of calcium-channel blockers.",
        ar: "قد يفاقم بريدنيزون التحكم في سكر الدم وضغط الدم، مما قد يزيد تأثير حاصرات القنوات الكالسيومية.",
      },
      recommendation: {
        en: "Monitor glucose, blood pressure, and edema when using both together.",
        ar: "راقب مستوى السكر وضغط الدم والتورم عند استخدامهما معًا.",
      },
    },
    {
      id: "metformin-spironolactone",
      drugA: { en: "Metformin", ar: "ميتفورمين" },
      drugB: { en: "Spironolactone", ar: "سبيرونولاكتون" },
      severity: { en: "Moderate", ar: "متوسط" },
      summary: {
        en: "This combination may add to the risk of dehydration or electrolyte imbalance in susceptible patients.",
        ar: "قد يزيد هذا الجمع من خطر الجفاف أو خلل الشوارد في المرضى المعرضين للخطر.",
      },
      recommendation: {
        en: "Reassess renal function and hydration status before prolonged co-use.",
        ar: "أعد تقييم وظائف الكلى وحالة الترطيب قبل الاستخدام المشترك المطول.",
      },
    },
    {
      id: "digoxin-diuretic",
      drugA: { en: "Digoxin", ar: "ديجوكسين" },
      drugB: { en: "Diuretic", ar: "مدر للبول" },
      severity: { en: "Major", ar: "خطير" },
      summary: {
        en: "Loop or thiazide diuretics can lower potassium and increase digoxin toxicity risk.",
        ar: "قد تقلل مدرات البول الحلقية أو الثيازيدية من البوتاسيوم وتزيد خطر سمية الديجوكسين.",
      },
      recommendation: {
        en: "Check potassium and digoxin levels when these drugs are combined.",
        ar: "تحقق من مستوى البوتاسيوم ومستوى الديجوكسين عند دمج هذه الأدوية.",
      },
    },
    {
      id: "ketoconazole-warfarin",
      drugA: { en: "Ketoconazole", ar: "كيتوكونازول" },
      drugB: { en: "Warfarin", ar: "وارفارين" },
      severity: { en: "Major", ar: "خطير" },
      summary: {
        en: "Ketoconazole can inhibit warfarin metabolism and dramatically increase bleeding risk.",
        ar: "قد يمنع كيتوكونازول أيض الوارفارين ويزيد بشكل كبير من خطر النزف.",
      },
      recommendation: {
        en: "Avoid this combination unless a clinician is closely monitoring INR and bleeding.",
        ar: "تجنب هذا الجمع إلا إذا كان الطبيب يراقب INR ونزيف الدم عن كثب.",
      },
    },
    {
      id: "allopurinol-azathioprine",
      drugA: { en: "Allopurinol", ar: "ألوبورينول" },
      drugB: { en: "Azathioprine", ar: "أزايثيوبيرين" },
      severity: { en: "Major", ar: "خطير" },
      summary: {
        en: "Allopurinol can increase azathioprine exposure and cause severe bone marrow toxicity.",
        ar: "قد يزيد الألوبورينول من تعرض الجسم للأزايثيوبيرين ويؤدي إلى سميّة خطيرة في نخاع العظم.",
      },
      recommendation: {
        en: "This combination requires specialist oversight and dose reduction planning.",
        ar: "يتطلب هذا الجمع إشرافًا أخصائيًا وتخطيطًا لتقليل الجرعة.",
      },
    }
  ];

  const emergencyDrugs: EmergencyDrugRecord[] = [
    {
      id: "adrenaline",
      name: { en: "Adrenaline", ar: "الأدرينالين" },
      category: { en: "Resuscitation", ar: "الإنعاش" },
      summary: { en: "Critical for anaphylaxis and advanced cardiac life support workflows.", ar: "حاسم لفرط التحسس ودعم الحياة القلبي المتقدم." },
      note: { en: "Keep ready for rapid administration in emergency protocols.", ar: "أبقِه جاهزًا للتقديم السريع في بروتوكولات الطوارئ." },
      scientificName: { en: "Epinephrine", ar: "إبينيفرين" },
      tradeName: { en: "Adrenaline, Epipen, Jext", ar: "أدرينالين، إيبين، جيكس" },
      indications: { en: "Anaphylaxis, severe bronchospasm, shock, and cardiac arrest algorithms when indicated.", ar: "فرط التحسس الحاد، التشنج القصبي الشديد، الصدمة، وخوارزميات توقف القلب عند الحاجة." },
      dosageRouteAge: { en: "Adult IM 0.5 mg (1:1000) into the anterolateral thigh; repeat every 5–15 min if needed. Intravenous use is restricted to resuscitation protocols and skilled teams.", ar: "للبالغ: 0.5 ملغ داخل العضلة في الفخذ الأمامي الخارجي (1:1000) مع تكرار كل 5-15 دقيقة إذا لزم. يتم استخدام الحقن الوريدي فقط ضمن بروتوكولات الإنعاش وتحت إشراف فريق مهني." },
      contraindicationsWarnings: { en: "Use with caution in severe hypertension, arrhythmias, and catecholamine-sensitive ischemia; monitor for tachycardia and myocardial ischemia.", ar: "استخدم بحذر في ارتفاع ضغط الدم الشديد، الاضطرابات النظمية، والذبحة المرتبطة بالكاتيكولامين؛ راقب التسارع القلبي ونقص التروية القلبية." },
      importantSideEffects: { en: "Palpitations, tremor, anxiety, hypertension, arrhythmia, and ischemic chest pain.", ar: "خفقان، رعشة، قلق، ارتفاع ضغط الدم، اضطراب النظم، وألم صدر بسبب نقص التروية." },
      relevantInteractions: { en: "May be potentiated by MAO inhibitors and tricyclic antidepressants; use caution with other sympathomimetics.", ar: "قد يزداد تأثيره مع مثبطات MAO ومضادات الاكتئاب ثلاثية الحلقات؛ استخدم بحذر مع المنبهات الودية للأدوية." },
      source: { en: "Resuscitation Council UK, AHA, and local emergency protocols.", ar: "مجلس الإنعاش البريطاني، جمعية القلب الأميركية، وبروتوكولات الطوارئ المحلية." },
      sourceUrl: { en: "https://www.resus.org.uk/library/algorithms", ar: "https://www.resus.org.uk/library/algorithms" },
      lastReviewed: { en: "2026-11-11", ar: "2026-11-11" },
    },
    {
      id: "amiodarone",
      name: { en: "Amiodarone", ar: "الأميودارون" },
      category: { en: "Cardiac", ar: "قلب" },
      summary: { en: "Used for refractory ventricular arrhythmias and emergency cardiac support.", ar: "يُستخدم لاضطرابات نظم القلب البطيني المقاومة ودعم القلب الطارئ." },
      note: { en: "Requires close monitoring because of its serious adverse-effect profile.", ar: "يتطلب مراقبة قريبة بسبب ملف الآثار الجانبية الخطير." },
      scientificName: { en: "Amiodarone", ar: "أميودارون" },
      tradeName: { en: "Cordarone, Pacerone", ar: "كوردارون، باكروزون" },
      indications: { en: "Pulseless ventricular tachycardia, ventricular fibrillation, and unstable wide-complex tachycardia when standard measures are inadequate.", ar: "الكتابة البطينية عديمة النبض، الرجفان البطيني، وتسارع القمة الواسع غير المستقر عندما تكون الإجراءات القياسية غير كافية." },
      dosageRouteAge: { en: "Adult IV loading dose often 300 mg; repeat 150 mg if needed; then infusion according to protocol. Use with ECG and BP monitoring.", ar: "للبالغ: جرعة تحميل وريدية غالبًا 300 ملغ، مع تكرار 150 ملغ إذا لزم، ثم حقن مستمر حسب البروتوكول. مع مراقبة ECG وضغط الدم." },
      contraindicationsWarnings: { en: "Avoid or use with caution in severe bradycardia, AV block, thyroid disease, and long QT; monitor QT and QTc intervals.", ar: "تجنب أو استخدم بحذر في بطء القلب الشديد، انسداد AV، أمراض الغدة الدرقية، وطول QT؛ راقب فترات QT وQTc." },
      importantSideEffects: { en: "Hypotension, bradycardia, QT prolongation, thyroid dysfunction, pneumonitis, and liver toxicity.", ar: "انخفاض ضغط الدم، بطء القلب، إطالة QT، اضطرابات الغدة الدرقية، التهاب الرئة، وسمية الكبد." },
      relevantInteractions: { en: "May interact with digoxin, warfarin, beta-blockers, calcium-channel blockers, and QT-prolonging drugs.", ar: "قد يتداخل مع الديجوكسين، الوارفارين، حاصرات بيتا، حاصرات القنوات الكالسيومية، وأدوية إطالة QT." },
      source: { en: "Advanced cardiac life support algorithms and formulary guidance.", ar: "خوارزميات دعم الحياة القلبية المتقدم والإرشادات الدوائية." },
      sourceUrl: { en: "https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines", ar: "https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines" },
      lastReviewed: { en: "2026-11-11", ar: "2026-11-11" },
    },
    {
      id: "atropine",
      name: { en: "Atropine", ar: "أتروبين" },
      category: { en: "Emergency", ar: "طوارئ" },
      summary: { en: "Common in bradycardia and anticholinergic emergency support scenarios.", ar: "شائع في حالات بطء القلب ودعم الطوارئ المضاد للكولين." },
      note: { en: "Use under clear clinical protocol and ongoing observation.", ar: "استخدم وفق بروتوكول سريري واضح ومراقبة مستمرة." },
      scientificName: { en: "Atropine sulfate", ar: "كبريتات الأتروبين" },
      tradeName: { en: "Atropine", ar: "أتروبين" },
      indications: { en: "Symptomatic bradycardia, organophosphate toxicity, and certain poisoning scenarios when anticholinergic effects are needed.", ar: "بطء القلب المسبب للأعراض، تسمم الفوسفات العضوي، وبعض سيناريوهات التسمم عند الحاجة للتأثيرات المضادة للكولين." },
      dosageRouteAge: { en: "Adult IV/IO dose 0.5–1 mg, repeat every 3–5 minutes to a total of 3 mg; adjust to protocol and clinical response.", ar: "للبالغ: 0.5–1 ملغ وريدياً أو داخل العظم، مع تكرار كل 3–5 دقائق حتى إجمالي 3 ملغ؛ حسب البروتوكول والاستجابة السريرية." },
      contraindicationsWarnings: { en: "Caution in narrow-angle glaucoma, urinary retention, and tachyarrhythmias. Monitor for dry mouth, blurred vision, and delirium.", ar: "حذر في الزرق الزاوي الضيق، احتباس البول، والاضطرابات النظمية السريعة. راقب جفاف الفم، وضبابية الرؤية، والهذيان." },
      importantSideEffects: { en: "Tachycardia, mydriasis, dry mouth, urinary retention, delirium, and reduced bowel motility.", ar: "تسارع القلب، اتساع الحدقة، جفاف الفم، احتباس البول، الهذيان، وتقليل حركة الأمعاء." },
      relevantInteractions: { en: "May interact with anticholinergics and some antidepressants; monitor for additive antimuscarinic effects.", ar: "قد يتداخل مع مضادات الكولين وبعض مضادات الاكتئاب؛ راقب التأثيرات المضادة للمسكارين المضافة." },
      source: { en: "ACLS and toxicology emergency protocols.", ar: "بروتوكولات دعم الحياة القلبية المتقدم والسموم." },
      sourceUrl: { en: "https://www.nice.org.uk/guidance/conditions-and-diseases/poisoning", ar: "https://www.nice.org.uk/guidance/conditions-and-diseases/poisoning" },
      lastReviewed: { en: "2026-11-11", ar: "2026-11-11" },
    },
    {
      id: "glucose",
      name: { en: "Glucose", ar: "الجلوكوز" },
      category: { en: "Metabolic", ar: "استقلاب" },
      summary: { en: "Rapid support for severe hypoglycemia in acute care settings.", ar: "دعم سريع لنقص السكر الشديد في بيئات الرعاية الحادة." },
      note: { en: "Administer quickly when hypoglycemia is suspected and confirmed.", ar: "أعطه بسرعة عند الاشتباه في نقص السكر وتأكيده." },
      scientificName: { en: "Dextrose", ar: "دكستروز" },
      tradeName: { en: "D10W, D25W, D50W, oral glucose gel", ar: "D10W، D25W، D50W، جل الجلوكوز الفموي" },
      indications: { en: "Severe hypoglycemia, altered mental status with low glucose, and management of hypoglycemia in emergency care.", ar: "نقص السكر الشديد، التغير في حالة الوعي伴ًا بانخفاض السكر، وإدارة نقص السكر في الرعاية الطارئة." },
      dosageRouteAge: { en: "Adult: 10–25 g IV dextrose or oral glucose if able to swallow; pediatric dosing individualized by weight and protocol.", ar: "للبالغ: 10–25 غرام من الدكستروز وريدياً أو جلوكوز فموي إذا كان قادرًا على البلع؛ جرعة الأطفال تُحدد حسب الوزن والبروتوكول." },
      contraindicationsWarnings: { en: "Use carefully in hyperosmolar states and when glucose administration may worsen certain metabolic conditions. Monitor glucose after administration.", ar: "استخدم بحذر في الحالات فوق الأسموزية وحين قد يفاقم إعطاء الجلوكوز بعض الحالات الأيضية. راقب مستوى السكر بعد الإعطاء." },
      importantSideEffects: { en: "Hyperglycemia, phlebitis, and local tissue injury if extravasation occurs.", ar: "فرط سكر الدم، التهاب الوريد، وإصابة نسيجية موضعية إذا حدث تسرب خارج الوريد." },
      relevantInteractions: { en: "May affect insulin needs and glucose monitoring in diabetes; review concurrent therapies and medications causing hypoglycemia.", ar: "قد يؤثر على احتياج الأنسولين ومراقبة السكر في مرض السكري؛ راجع العلاجات المتزامنة والأدوية المسببة لنقص السكر." },
      source: { en: "Emergency hypoglycemia protocols, AHA, and local clinical pathways.", ar: "بروتوكولات نقص السكر الطارئ، AHA، والمسارات السريرية المحلية." },
      sourceUrl: { en: "https://www.nhs.uk/conditions/low-blood-sugar-hypoglycaemia/", ar: "https://www.nhs.uk/conditions/low-blood-sugar-hypoglycaemia/" },
      lastReviewed: { en: "2026-11-11", ar: "2026-11-11" },
    },
    {
      id: "naloxone",
      name: { en: "Naloxone", ar: "نالوكسون" },
      category: { en: "Emergency", ar: "طوارئ" },
      summary: { en: "A critical opioid antagonist for reversing respiratory depression in overdose.", ar: "مضاد أفيوني حاسم لعكس تثبيط الجهاز التنفسي في حالة الجرعة الزائدة." },
      note: { en: "Keep available in any setting where opioid overdose is possible.", ar: "احتفظ به متاحًا في أي مكان يمكن أن يحدث فيه فرط جرعة من الأفيونات." },
      scientificName: { en: "Naloxone hydrochloride", ar: "هيدروكلوريد النالوكسون" },
      tradeName: { en: "Narcan, Evizio", ar: "ناركان، إيفيزيو" },
      indications: { en: "Opioid overdose, respiratory depression, and reduced consciousness after opioid exposure.", ar: "فرط جرعة الأفيون، تثبيط التنفس، وانخفاض مستوى الوعي بعد التعرض للأفيون." },
      dosageRouteAge: { en: "Adult: 0.4–2 mg IV/IM/IN repeated every 2–3 minutes as needed. Higher or repeat doses may be required for long-acting opioids.", ar: "للبالغ: 0.4–2 ملغ داخل الوريد أو العضلة أو الأنف، مع تكرار كل 2–3 دقائق حسب الحاجة. قد تحتاج جرعات أعلى أو متكررة للأفيونيات طويلة المفعول." },
      contraindicationsWarnings: { en: "Use in known opioid dependence with caution because it may precipitate withdrawal. Monitor airway, breathing, and chest status.", ar: "استخدم بحذر في حالات الاعتماد على الأفيون مع إمكانية تحريض الانسحاب؛ راقب مجرى الهواء والتنفس والحالة الصدرية." },
      importantSideEffects: { en: "Acute withdrawal symptoms, agitation, vomiting, and transient hypertension or tachycardia.", ar: "أعراض الانسحاب الحاد، القلق، التقيؤ، وارتفاع الضغط أو تسارع القلب المؤقت." },
      relevantInteractions: { en: "No major pharmacokinetic interactions, but may reverse opioid effects in patients receiving opioids for pain management.", ar: "لا توجد تداخلات حركية حاسمة، لكن قد يزيل تأثير الأفيون في المرضى الذين يتلقون أوفيات لتسكين الألم." },
      source: { en: "Opioid overdose guidance, emergency medicine references, and local protocol.", ar: "إرشادات فرط جرعة الأفيون، مراجع طب الطوارئ، وبروتوكولات محلية." },
      sourceUrl: { en: "https://www.cdc.gov/stopoverdose/naloxone/index.html", ar: "https://www.cdc.gov/stopoverdose/naloxone/index.html" },
      lastReviewed: { en: "2026-11-11", ar: "2026-11-11" },
    },
    {
      id: "nitroglycerin",
      name: { en: "Nitroglycerin", ar: "نيتروجليسرين" },
      category: { en: "Cardiac", ar: "قلب" },
      summary: { en: "Used in acute coronary syndromes and chest pain management under monitoring.", ar: "يُستخدم في متلازمات الشريان التاجي الحادة وإدارة ألم الصدر تحت المراقبة." },
      note: { en: "Avoid in hypotension or right ventricular infarction without specialist advice.", ar: "تجنب في حالات انخفاض ضغط الدم أو احتشاء البطين الأيمن دون مشورة أخصائي." },
      scientificName: { en: "Glyceryl trinitrate", ar: "تراي نيتريت الغليسيريل" },
      tradeName: { en: "Nitrostat, GTN spray, IV nitroglycerin", ar: "نيتروستات، رذاذ GTN، نيتروجليسرين وريدياً" },
      indications: { en: "Angina, acute coronary syndrome, and hypertensive emergencies when appropriate under monitoring.", ar: "الذبحة، متلازمات الشريان التاجي الحادة، والطارئ المرتبط بارتفاع الضغط عند الاستعانة به تحت المراقبة." },
      dosageRouteAge: { en: "Sublingual 0.3–0.6 mg as needed, or infusion titrated to symptoms and blood pressure. Use only under monitored conditions.", ar: "تحت اللسان 0.3–0.6 ملغ حسب الحاجة، أو حقن متدرج حسب الأعراض وضغط الدم. يُستخدم فقط تحت ظروف مراقبة." },
      contraindicationsWarnings: { en: "Avoid with hypotension, marked bradycardia, right ventricular infarction, severe aortic stenosis, and recent PDE-5 inhibitor use.", ar: "تجنب مع انخفاض ضغط الدم، بطء القلب الشديد، احتشاء البطين الأيمن، تضيق الصمام الأبهري الحاد، واستخدام مثبطات PDE-5 حديثًا." },
      importantSideEffects: { en: "Headache, flushing, hypotension, dizziness, and reflex tachycardia.", ar: "صداع، احمرار، انخفاض ضغط الدم، دوخة، وتسارع قلبي منعكس." },
      relevantInteractions: { en: "Caution with phosphodiesterase-5 inhibitors, antihypertensives, and vasodilators.", ar: "حذر مع مثبطات الفوسفوديستريز-5، أدوية خفض الضغط، والموسعات الوعائية." },
      source: { en: "Acute coronary syndrome guidance and emergency chest pain pathways.", ar: "إرشادات متلازمة الشريان التاجي الحادة ومسارات ألم الصدر الطارئ." },
      sourceUrl: { en: "https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Acute-coronary-syndromes", ar: "https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Acute-coronary-syndromes" },
      lastReviewed: { en: "2026-11-11", ar: "2026-11-11" },
    },
    {
      id: "furosemide",
      name: { en: "Furosemide", ar: "فوروزمايد" },
      category: { en: "Metabolic", ar: "استقلاب" },
      summary: { en: "A loop diuretic commonly used for acute pulmonary edema and volume overload.", ar: "مدر حلقي يستخدم عادة لوذمة الرئة الحادة والاحتباس السائلي." },
      note: { en: "Monitor blood pressure and electrolytes when administered in emergency settings.", ar: "راقب ضغط الدم والشوارد عند إعطائه في ظروف الطوارئ." },
      scientificName: { en: "Furosemide", ar: "فوروزمايد" },
      tradeName: { en: "Lasix", ar: "لاسيكس" },
      indications: { en: "Acute pulmonary edema, hypervolemia, heart failure decompensation, and selected hypertensive emergencies.", ar: "وذمة الرئة الحادة، فرط حجم الدم، انفصال فشل القلب، وبعض حالات ارتفاع ضغط الدم الطارئ." },
      dosageRouteAge: { en: "Adult IV dose often 20–40 mg, titrated by response and renal status; adjustment is needed in renal impairment.", ar: "للبالغ: جرعة وريدية غالبًا 20–40 ملغ، مع تعديل حسب الاستجابة وحالة الكلى؛ يلزم التعديل في ضعف الكلى." },
      contraindicationsWarnings: { en: "Avoid or use cautiously in severe dehydration, electrolyte depletion, hypovolemia, and sulfonamide allergy with caution.", ar: "تجنب أو استخدم بحذر في الجفاف الشديد، نقص الشوارد، انخفاض حجم الدم، وحساسية السلفا مع الحذر." },
      importantSideEffects: { en: "Hypokalemia, hyponatremia, dehydration, dizziness, and hypotension.", ar: "انخفاض البوتاسيوم، انخفاض الصوديوم، الجفاف، الدوخة، وانخفاض ضغط الدم." },
      relevantInteractions: { en: "May interact with aminoglycosides, digoxin, antihypertensives, and lithium.", ar: "قد يتداخل مع الأمينوغلايكوزيد، الديجوكسين، أدوية خفض الضغط، والليثيوم." },
      source: { en: "Emergency heart failure and volume overload clinical guidance.", ar: "إرشادات الطوارئ في فشل القلب والاحتباس السائلي." },
      sourceUrl: { en: "https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Acute-heart-failure", ar: "https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Acute-heart-failure" },
      lastReviewed: { en: "2026-11-11", ar: "2026-11-11" },
    },
    {
      id: "salbutamol",
      name: { en: "Salbutamol", ar: "سالبوتامول" },
      category: { en: "Respiratory", ar: "تنفسي" },
      summary: { en: "A bronchodilator used for acute bronchospasm in asthma and COPD exacerbations.", ar: "موسّع قصبات يستخدم لتشنج القصبات الحاد في تفاقم الربو ومرض الانسداد الرئوي المزمن." },
      note: { en: "Deliver by nebulizer or inhaler, and reassess respiratory status often.", ar: "قدمه عن طريق جهاز الاستنشاق أو البخاخ وأعد تقييم الحالة التنفسية بشكل متكرر." },
      scientificName: { en: "Albuterol", ar: "ألبيوتيرول" },
      tradeName: { en: "Ventolin, ProAir, Salamol", ar: "فينتولين، بروير، سلامول" },
      indications: { en: "Acute bronchospasm, wheeze, and respiratory distress in asthma or COPD exacerbation.", ar: "تشنج القصبات الحاد، الصفير، وضيق التنفس في الربو أو تفاقم مرض الانسداد الرئوي المزمن." },
      dosageRouteAge: { en: "Adult inhaled dose often 2.5–5 mg nebulized or 2–4 puffs as prescribed; reassess after each dose.", ar: "للبالغ: جرعة الاستنشاق غالبًا 2.5–5 ملغ عبر البخاخ أو 2–4 رذاذات حسب الوصفة؛ أعد التقييم بعد كل جرعة." },
      contraindicationsWarnings: { en: "Use with caution in severe tachycardia, hypokalemia, and known sensitivity to beta-agonists; monitor tremor and heart rate.", ar: "استخدم بحذر في التسارع القلبي الشديد، انخفاض البوتاسيوم، والحساسية المعروفة إلى المنبهات الببتا؛ راقب الرعشة ومعدل ضربات القلب." },
      importantSideEffects: { en: "Tremor, palpitations, tachycardia, anxiety, and transient hypokalemia.", ar: "الرعشة، الخفقان، تسارع القلب، القلق، وانخفاض البوتاسيوم المؤقت." },
      relevantInteractions: { en: "May interact with other beta-agonists, digoxin, diuretics, and some antidepressants. Monitor for additive tachycardia.", ar: "قد يتداخل مع المنبهات بيتا الأخرى، الديجوكسين، مدرات البول، وبعض مضادات الاكتئاب. راقب تسارع القلب المضاف." },
      source: { en: "Asthma and COPD emergency pathways, NICE, and local respiratory guidance.", ar: "مسارات طوارئ الربو ومرض الانسداد الرئوي المزمن، NICE، والإرشادات التنفسية المحلية." },
      sourceUrl: { en: "https://www.nice.org.uk/guidance/ng80", ar: "https://www.nice.org.uk/guidance/ng80" },
      lastReviewed: { en: "2026-11-11", ar: "2026-11-11" },
    },
    {
      id: "magnesium-sulfate",
      name: { en: "Magnesium sulfate", ar: "كبريتات المغنيسيوم" },
      category: { en: "Emergency", ar: "طوارئ" },
      summary: { en: "Used for torsades de pointes, severe asthma, and eclampsia-related emergencies when indicated.", ar: "يُستخدم في حالات توردات د بوانتيس، الربو الحاد الشديد، والطوارئ المرتبطة بتسمم الحمل عند وجود دلالة." },
      note: { en: "Requires close monitoring of respiratory rate, reflexes, and magnesium levels.", ar: "يتطلب مراقبة قريبة لمعدل التنفس، الارتجاع، ومستوى المغنيسيوم." },
      scientificName: { en: "Magnesium sulfate", ar: "كبريتات المغنيسيوم" },
      tradeName: { en: "MgSO4", ar: "MgSO4" },
      indications: { en: "Torsades de pointes, severe life-threatening asthma, eclampsia, and selected tocolytic settings.", ar: "توردات د بوانتيس، الربو الحاد المهدد للحياة، تسمم الحمل (الصرع)، وبعض حالات تثبيط المخاض المختارة." },
      dosageRouteAge: { en: "Dose and route depend on indication and patient condition; IV administration should follow protocol and monitoring.", ar: "تعتمد الجرعة وطريقة الإعطاء على الدلالة وحالة المريض؛ يجب إعطاء الحقن الوريدي وفق البروتوكول والمراقبة." },
      contraindicationsWarnings: { en: "Avoid or use cautiously in myasthenia gravis, significant renal impairment, and severe respiratory depression.", ar: "تجنب أو استخدم بحذر في الوهن العضلي الوبيل، ضعف الكلى الشديد، واضطراب التنفس الشديد." },
      importantSideEffects: { en: "Flushing, hypotension, hyporeflexia, respiratory depression, and cardiac conduction changes.", ar: "احمرار الوجه، انخفاض ضغط الدم، انخفاض الارتجاع، تثبيط التنفس، وتغيرات في توصيل القلب." },
      relevantInteractions: { en: "May potentiate neuromuscular blockers and interact with calcium-channel blockers causing hypotension.", ar: "قد يضاعف تأثير المثبطات العصبية العضلية ويتداخل مع حاصرات القنوات الكالسيوم مسببًا انخفاض ضغط الدم." },
      source: { en: "Clinical emergency guidance for arrhythmia, severe asthma, and preeclampsia/eclampsia.", ar: "الإرشادات السريرية للطوارئ في اضطراب النظم، الربو الشديد، وارتفاع ضغط الدم الحملي/تسمم الحمل." },
      sourceUrl: { en: "https://www.nice.org.uk/guidance/ng133", ar: "https://www.nice.org.uk/guidance/ng133" },
      lastReviewed: { en: "2026-11-11", ar: "2026-11-11" },
    },
    {
      id: "calcium-gluconate",
      name: { en: "Calcium gluconate", ar: "غلوكونات الكالسيوم" },
      category: { en: "Emergency", ar: "طوارئ" },
      summary: { en: "Used in severe hyperkalemia, calcium-channel blocker toxicity, and symptomatic hypocalcemia.", ar: "يُستخدم في فرط البوتاسيوم الشديد، تسمم حاصرات القنوات الكالسيوم، ونقص الكالسيوم المصحوب بأعراض." },
      note: { en: "It stabilizes the myocardium, but it does not remove excess potassium by itself.", ar: "يُثبت عضلة القلب، لكنه لا يزيل البوتاسيوم الزائد بمفرده." },
      scientificName: { en: "Calcium gluconate", ar: "غلوكونات الكالسيوم" },
      tradeName: { en: "Calcium gluconate", ar: "غلوكونات الكالسيوم" },
      indications: { en: "Hyperkalemia with ECG changes, calcium antagonist overdose, and severe symptomatic hypocalcemia.", ar: "فرط البوتاسيوم مع تغييرات في تخطيط القلب، فرط جرعة حاصرات القنوات الكالسيوم، ونقص الكالسيوم الحاد المصحوب بأعراض." },
      dosageRouteAge: { en: "Dose varies by urgency, route, and patient factors; emergency use should follow local protocol and ECG monitoring.", ar: "تختلف الجرعة حسب درجة الاستعجال وطريقة الإعطاء وعوامل المريض؛ يجب اتباع البروتوكول المحلي ومراقبة تخطيط القلب." },
      contraindicationsWarnings: { en: "Use with caution in digoxin toxicity and severe renal impairment; monitor for extravasation and arrhythmias.", ar: "استخدم بحذر في تسمم الديجوكسين واعتلال الكلى الشديد؛ راقب التسرب خارج الوريد والاضطرابات النظمية." },
      importantSideEffects: { en: "Bradycardia, tissue irritation, hypercalcemia, and possible arrhythmia if infused too quickly.", ar: "بطء القلب، تهيج النسيج، فرط كالسيوم، واحتمال اضطراب النظم عند الإعطاء السريع." },
      relevantInteractions: { en: "May interact with digoxin and digitalis-like preparations; verify compatibility with other IV medications.", ar: "قد يتداخل مع الديجوكسين والمستحضرات المشابهة للديجيتال؛ تحقق من التوافق مع الأدوية الوريدية الأخرى." },
      source: { en: "Emergency hyperkalemia, toxicology, and critical care guidance.", ar: "إرشادات الطوارئ في فرط البوتاسيوم، السموم، والعناية الحرجة." },
      sourceUrl: { en: "https://www.ncbi.nlm.nih.gov/books/NBK21206/", ar: "https://www.ncbi.nlm.nih.gov/books/NBK21206/" },
      lastReviewed: { en: "2026-11-11", ar: "2026-11-11" },
    },
    {
      id: "dexamethasone",
      name: { en: "Dexamethasone", ar: "ديكساميثازون" },
      category: { en: "Emergency", ar: "طوارئ" },
      summary: { en: "Used as an anti-inflammatory adjunct in croup, severe asthma, and selected allergic emergencies.", ar: "يُستخدم كمكمل مضاد للالتهاب في الكرووب، الربو الحاد الشديد، وبعض الطوارئ التحسسية المختارة." },
      note: { en: "It is not a substitute for definitive airway management or emergency resuscitation.", ar: "لا يحل محل إدارة مجرى الهواء الحاسم أو الإنعاش الطارئ." },
      scientificName: { en: "Dexamethasone", ar: "ديكساميثازون" },
      tradeName: { en: "Decadron", ar: "ديكادريون" },
      indications: { en: "Croup, acute severe asthma, and selected inflammatory or allergic emergencies under clinician guidance.", ar: "الكرووب، الربو الحاد الشديد، وبعض الطوارئ الالتهابية أو التحسسية تحت توجيه الطبيب." },
      dosageRouteAge: { en: "Standard oral or IV dosing varies with age, body weight, and clinical scenario; use local policy.", ar: "تتغير الجرعة القياسية الفموية أو الوريدية حسب العمر والوزن والحالة السريرية؛ استخدم سياسة المؤسسة." },
      contraindicationsWarnings: { en: "Use with caution in active infection, uncontrolled diabetes, and long-term steroid use; monitor for hyperglycemia.", ar: "استخدم بحذر في العدوى النشطة، السكري غير المنضبط، واستعمال الستيرويدات طويل المدى؛ راقب ارتفاع السكر." },
      importantSideEffects: { en: "Hyperglycemia, mood change, fluid retention, and increased risk of infection.", ar: "ارتفاع السكر، تغيرات المزاج، احتباس السوائل، وزيادة خطر العدوى." },
      relevantInteractions: { en: "May interact with antidiabetic agents, NSAIDs, and other immunosuppressive therapies.", ar: "قد يتداخل مع أدوية السكر، مضادات الالتهاب غير الستيروئيدية، والعلاجات المثبطة للمناعة." },
      source: { en: "Paediatric and emergency care pathways for croup and severe asthma.", ar: "مسارات العناية الطفولية والطوارئ للكرووب والربو الحاد الشديد." },
      sourceUrl: { en: "https://www.nice.org.uk/guidance/ng18", ar: "https://www.nice.org.uk/guidance/ng18" },
      lastReviewed: { en: "2026-11-11", ar: "2026-11-11" },
    },
    {
      id: "midazolam",
      name: { en: "Midazolam", ar: "ميدازولام" },
      category: { en: "Emergency", ar: "طوارئ" },
      summary: { en: "Used for acute seizures, severe agitation, and procedural sedation in emergency settings.", ar: "يُستخدم في النوبات الحادة، التهيج الشديد، والتخدير الإجرائي في بيئات الطوارئ." },
      note: { en: "It can cause respiratory depression and sedation; monitor airway and oxygenation.", ar: "قد يسبب تثبيط التنفس والنعاس؛ راقب مجرى الهواء والأكسجين." },
      scientificName: { en: "Midazolam", ar: "ميدازولام" },
      tradeName: { en: "Versed", ar: "فيرسيد" },
      indications: { en: "Status epilepticus, prolonged seizure activity, severe agitation, and selected procedural sedation.", ar: "حالة الصرع، النشاط التشنجي المطول، التهيج الشديد، والتخدير الإجرائي المختار." },
      dosageRouteAge: { en: "Dose varies by age, route, and seizure status; emergency administration must follow local protocol and airway monitoring.", ar: "تختلف الجرعة حسب العمر وطريق الإعطاء وحالة النوبة؛ يجب إعطاء الإعطاء الطارئ وفق البروتوكول المحلي ومراقبة مجرى الهواء." },
      contraindicationsWarnings: { en: "Avoid or use cautiously in respiratory failure, CNS depression, and alcohol intoxication; monitor blood pressure and oxygenation.", ar: "تجنب أو استخدم بحذر في فشل التنفس، تثبيط الجهاز العصبي المركزي، والتسمم بالكحول؛ راقب ضغط الدم والأكسجين." },
      importantSideEffects: { en: "Sedation, respiratory depression, hypotension, paradoxical agitation, and amnesia.", ar: "النعاس، تثبيط التنفس، انخفاض ضغط الدم، التهيج المتناقض، والنسيان." },
      relevantInteractions: { en: "May potentiate opioids, alcohol, and other CNS depressants.", ar: "قد يضاعف تأثير الأفيونيات والكحول والأدوية المثبطة للجهاز العصبي المركزي." },
      source: { en: "Seizure and emergency sedation guidance from clinical algorithms and critical care pathways.", ar: "إرشادات النوبة والتخدير الطارئ من الخوارزميات السريرية ومسارات العناية الحرجة." },
      sourceUrl: { en: "https://www.nice.org.uk/guidance/ng217", ar: "https://www.nice.org.uk/guidance/ng217" },
      lastReviewed: { en: "2026-11-11", ar: "2026-11-11" },
    },
    {
      id: "aspirin",
      name: { en: "Aspirin", ar: "أسبرين" },
      category: { en: "Cardiac", ar: "قلب" },
      summary: { en: "Used in suspected acute coronary syndrome when clinically appropriate and without contraindication.", ar: "يُستخدم في حالات الاشتباه في متلازمة الشريان التاجي الحادة عند المناسبة السريرية وعدم وجود موانع." },
      note: { en: "It may be used in selected emergency chest-pain pathways only after clinician assessment.", ar: "قد يُستخدم في مسارات ألم الصدر الطارئ المختارة فقط بعد تقييم الطبيب." },
      scientificName: { en: "Acetylsalicylic acid", ar: "حمض الأسيتيل الساليسيليك" },
      tradeName: { en: "Aspirin", ar: "أسبرين" },
      indications: { en: "Suspected myocardial infarction and selected acute coronary syndrome pathways.", ar: "الاشتباك في احتشاء عضلة القلب وبعض مسارات متلازمة الشريان التاجي الحادة." },
      dosageRouteAge: { en: "Emergency dosing is typically low-dose and route-specific according to protocol and risk assessment.", ar: "تكون الجرعة الطارئة عادةً منخفضة وتحدد حسب الطريق وبروتوكول التقييم للمخاطر." },
      contraindicationsWarnings: { en: "Avoid in active bleeding, bleeding disorders, aspirin allergy, or when contraindications are present; monitor for GI bleeding.", ar: "تجنب في النزيف النشط، اضطرابات النزف، حساسية الأسبرين، أو وجود موانع؛ راقب النزيف المعدي المعوي." },
      importantSideEffects: { en: "Gastrointestinal irritation, bleeding, tinnitus, and bronchospasm in aspirin-sensitive patients.", ar: "تهيج المعدة والأمعاء، النزيف، طنين الأذن، وتشنج القصبات في المرضى الحساسين للأسبرين." },
      relevantInteractions: { en: "May interact with anticoagulants, NSAIDs, and other antiplatelet agents.", ar: "قد يتداخل مع مضادات التخثر، مضادات الالتهاب غير الستيروئيدية، والعوامل المضادة للصفائح الدموية." },
      source: { en: "Cardiac chest pain and acute coronary syndrome protocols.", ar: "بروتوكولات ألم الصدر القلبي ومتلازمة الشريان التاجي الحادة." },
      sourceUrl: { en: "https://www.nice.org.uk/guidance/ng185", ar: "https://www.nice.org.uk/guidance/ng185" },
      lastReviewed: { en: "2026-11-11", ar: "2026-11-11" },
    },
    {
      id: "dopamine",
      name: { en: "Dopamine", ar: "دوبامين" },
      category: { en: "Cardiac", ar: "قلب" },
      summary: { en: "Used in shock and hypotension where vasopressor support is required under invasive monitoring.", ar: "يُستخدم في الصدمة وانخفاض ضغط الدم عندما يلزم دعم الأوعية الدموية تحت مراقبة غازية." },
      note: { en: "Requires careful infusion titration and monitoring of perfusion, rhythm, and blood pressure.", ar: "يتطلب تعديلًا دقيقًا للحقن ومراقبة التروية، الإيقاع، وضغط الدم." },
      scientificName: { en: "Dopamine hydrochloride", ar: "هيدروكلوريد الدوبامين" },
      tradeName: { en: "Dopamine", ar: "دوبامين" },
      indications: { en: "Septic shock, cardiogenic shock, and selected hypotensive states requiring vasoactive support.", ar: "صدمة إنتانية، صدمة قلبية، وحالات انخفاض ضغط الدم المختارة التي تحتاج دعمًا وعائيًا." },
      dosageRouteAge: { en: "Infusion dosing is individualized and titrated to blood pressure, perfusion, and rhythm; IV administration only.", ar: "تُحدد جرعة التسريب فرديًا وتعدل حسب ضغط الدم والتروية والإيقاع؛ إعطاء وريدي فقط." },
      contraindicationsWarnings: { en: "Use cautiously in tachyarrhythmias, ventricular fibrillation, and pheochromocytoma; monitor rhythm and tissue perfusion.", ar: "استخدم بحذر في الاضطرابات النظمية السريعة، الرجفان البطيني، وسرطان الغدة الكظرية؛ راقب الإيقاع والتروية النسيجية." },
      importantSideEffects: { en: "Tachycardia, arrhythmias, vasoconstriction, and ischemia if excessive doses are used.", ar: "تسارع القلب، اضطرابات النظم، تضيق الأوعية، ونقص التروية عند جرعات مفرطة." },
      relevantInteractions: { en: "May interact with sympathomimetics, MAO inhibitors, and some antihypertensives.", ar: "قد يتداخل مع المنبهات الودية، مثبطات MAO، وبعض أدوية خفض الضغط." },
      source: { en: "Shock and vasopressor guidance in emergency and critical care pathways.", ar: "إرشادات الصدمة والمُقَوِيّات الوعائية في الطوارئ والعناية الحرجة." },
      sourceUrl: { en: "https://www.nice.org.uk/guidance/ng51", ar: "https://www.nice.org.uk/guidance/ng51" },
      lastReviewed: { en: "2026-11-11", ar: "2026-11-11" },
    },
    {
      id: "dobutamine",
      name: { en: "Dobutamine", ar: "دوبوتامين" },
      category: { en: "Cardiac", ar: "قلب" },
      summary: { en: "Used in cardiogenic shock and acute heart failure when increased cardiac contractility is needed.", ar: "يُستخدم في صدمة قلبية وفشل القلب الحاد عندما يحتاج القلب إلى زيادة القوة الانقباضية." },
      note: { en: "Monitoring is essential because it can increase heart rate and cause arrhythmias.", ar: "المراقبة ضرورية لأنّه قد يرفع معدل ضربات القلب ويُسبب اضطرابات النظم." },
      scientificName: { en: "Dobutamine", ar: "دوبوتامين" },
      tradeName: { en: "Dobutamine", ar: "دوبوتامين" },
      indications: { en: "Cardiogenic shock, acute decompensated heart failure, and low cardiac output states.", ar: "صدمة قلبية، فشل القلب الحاد المتدهور، وحالات مخرجات القلب المنخفضة." },
      dosageRouteAge: { en: "Infusion should be titrated to cardiac output, blood pressure, and rhythm under intensive monitoring.", ar: "يُعدّل التسريب حسب مخرجات القلب وضغط الدم والإيقاع تحت مراقبة مكثفة." },
      contraindicationsWarnings: { en: "Use cautiously in ventricular arrhythmias, aortic stenosis, and marked hypovolemia.", ar: "استخدم بحذر في اضطرابات النظم البطينية، تضيق الأорта، وانخفاض حجم الدم الشديد." },
      importantSideEffects: { en: "Tachycardia, arrhythmias, hypertension, and hypotension depending on dose and status.", ar: "تسارع القلب، اضطرابات النظم، ارتفاع ضغط الدم، وانخفاضه حسب الجرعة والحالة." },
      relevantInteractions: { en: "May interact with beta-blockers, MAO inhibitors, and vasopressors.", ar: "قد يتداخل مع حاصرات بيتا، مثبطات MAO، والمؤثرات الوعائية." },
      source: { en: "Critical care shock and cardiac output management algorithms.", ar: "خوارزميات العناية الحرجة في الصدمة وإدارة مخرجات القلب." },
      sourceUrl: { en: "https://www.resus.org.uk/library/algorithms", ar: "https://www.resus.org.uk/library/algorithms" },
      lastReviewed: { en: "2026-11-11", ar: "2026-11-11" },
    },
    {
      id: "labetalol",
      name: { en: "Labetalol", ar: "لابيتالول" },
      category: { en: "Cardiac", ar: "قلب" },
      summary: { en: "Used for hypertensive emergencies, including severe hypertension with end-organ risk.", ar: "يُستخدم في الطوارئ المرتبطة بارتفاع الضغط الشديد، خاصة مع خطر على الأعضاء." },
      note: { en: "A rapid but controlled antihypertensive should be used with close blood-pressure monitoring.", ar: "يُستخدم خافض ضغط سريع ومراقب مع مراقبة دقيقة لضغط الدم." },
      scientificName: { en: "Labetalol", ar: "لابيتالول" },
      tradeName: { en: "Trandate", ar: "ترانديت" },
      indications: { en: "Severe hypertension, hypertensive urgency with organ involvement, and selected emergency scenarios.", ar: "ارتفاع ضغط الدم الشديد، الحالات الطارئة المصحوبة بأعضاء معرضة للخطر، وبعض السيناريوهات الطارئة المختارة." },
      dosageRouteAge: { en: "IV dosing is titrated to blood pressure and symptoms, with continuous monitoring.", ar: "تُعدّل جرعة الحقن الوريدي حسب ضغط الدم والأعراض مع مراقبة مستمرة." },
      contraindicationsWarnings: { en: "Avoid in asthma, severe bradycardia, heart block, and certain shock states; monitor heart rate and glucose.", ar: "تجنب في الربو، بطء القلب الشديد، انسداد القلب، وبعض حالات الصدمة؛ راقب معدل القلب والسكر." },
      importantSideEffects: { en: "Bradycardia, hypotension, dizziness, and fatigue.", ar: "بطء القلب، انخفاض ضغط الدم، دوخة، وتعب." },
      relevantInteractions: { en: "May interact with other antihypertensives, beta-blockers, and calcium channel blockers.", ar: "قد يتداخل مع خفضات الضغط الأخرى، حاصرات بيتا، وحاصرات القنوات الكالسيوم." },
      source: { en: "Hypertensive emergency guidance and acute blood pressure management pathways.", ar: "إرشادات الطوارئ المرتبطة بارتفاع الضغط وإدارة ضغط الدم الحاد." },
      sourceUrl: { en: "https://www.nice.org.uk/guidance/ng136", ar: "https://www.nice.org.uk/guidance/ng136" },
      lastReviewed: { en: "2026-11-11", ar: "2026-11-11" },
    },
    {
      id: "hydrocortisone",
      name: { en: "Hydrocortisone", ar: "هيدروكورتيزون" },
      category: { en: "Emergency", ar: "طوارئ" },
      summary: { en: "Used in adrenal insufficiency, severe allergic reactions, and selected inflammatory emergencies.", ar: "يُستخدم في قصور الغدة الكظرية، ردود الفعل التحسسية الشديدة، وبعض الطوارئ الالتهابية." },
      note: { en: "It is a supportive therapy and should be used with protocol-driven assessment of the underlying cause.", ar: "هو علاج داعم ويستخدم ضمن تقييم بروتوكولي لأسباب الحالة الأساسية." },
      scientificName: { en: "Hydrocortisone", ar: "هيدروكورتيزون" },
      tradeName: { en: "Hydrocortone, Solu-Cortef", ar: "هيدروكورتون، سوليو-كورتيف" },
      indications: { en: "Adrenal crisis, anaphylaxis support, and severe inflammatory disease requiring corticosteroid therapy.", ar: "أزمة الكظر، دعم فرط التحسس، وأمراض الالتهاب الشديدة التي تتطلب علاجًا بالكورتيكوستيرويدات." },
      dosageRouteAge: { en: "Dose depends on indication, severity, and age; IV dosing is used in acute emergencies.", ar: "تعتمد الجرعة على الدلالة وشدة الحالة والعمر؛ تُستخدم جرعات الوريد في الطوارئ الحادة." },
      contraindicationsWarnings: { en: "Use cautiously in active infection and diabetes; monitor glucose, blood pressure, and signs of infection.", ar: "استخدم بحذر في العدوى النشطة والسكري؛ راقب السكر وضغط الدم وأعراض العدوى." },
      importantSideEffects: { en: "Hyperglycemia, fluid retention, mood disturbance, and immune suppression.", ar: "ارتفاع السكر، احتباس السوائل، تغير المزاج، وقمع المناعة." },
      relevantInteractions: { en: "May interact with anticoagulants, antidiabetics, and certain vaccines.", ar: "قد يتداخل مع مضادات التخثر، أدوية السكري، وبعض اللقاحات." },
      source: { en: "Adrenal crisis and emergency corticosteroid guidance.", ar: "إرشادات أزمة الكظر وعلاج الكورتيكوستيرويدات في الطوارئ." },
      sourceUrl: { en: "https://www.nice.org.uk/guidance/qs122", ar: "https://www.nice.org.uk/guidance/qs122" },
      lastReviewed: { en: "2026-11-11", ar: "2026-11-11" },
    },
    {
      id: "tranexamic-acid",
      name: { en: "Tranexamic acid", ar: "حمض تراكساميك" },
      category: { en: "Emergency", ar: "طوارئ" },
      summary: { en: "Used to reduce bleeding in major trauma, postpartum hemorrhage, and selected hemorrhagic emergencies.", ar: "يُستخدم لتقليل النزيف في الإصابات الكبرى، النزيف بعد الولادة، وبعض حالات النزيف الطارئة." },
      note: { en: "Not every bleeding scenario is suitable; administration depends on the cause and timing of the bleed.", ar: "ليس كل حالة نزيف مناسبة؛ يعتمد الإعطاء على سبب النزيف ووقته." },
      scientificName: { en: "Tranexamic acid", ar: "حمض تراكساميك" },
      tradeName: { en: "TXA", ar: "TXA" },
      indications: { en: "Major trauma, postpartum hemorrhage, and selected life-threatening hemorrhage protocols.", ar: "الإصابات الكبرى، النزيف بعد الولادة، وبروتوكولات النزيف المهدد للحياة المختارة." },
      dosageRouteAge: { en: "Dose and route depend on protocol, location of bleeding, and patient factors; emergency use requires clinician oversight.", ar: "تعتمد الجرعة والطريق على البروتوكول وموقع النزيف وعوامل المريض؛ يتطلب الاستخدام الطارئ إشراف الطبيب." },
      contraindicationsWarnings: { en: "Avoid in active intravascular clotting and certain thromboembolic conditions; use with caution in renal impairment.", ar: "تجنب في التجلط داخل الأوعية وبعض حالات التخثر، واستخدم بحذر في ضعف الكلى." },
      importantSideEffects: { en: "Thromboembolism, visual disturbance, and rare severe allergic reactions.", ar: "تجلط الأوعية الدموية، اضطراب الرؤية، وردود فعل تحسسية شديدة نادرة." },
      relevantInteractions: { en: "May interact with anticoagulants and fibrinolytic agents; review concurrent therapy.", ar: "قد يتداخل مع مضادات التخثر والعوامل المذيبة للتخثر؛ راجع العلاجات المتزامنة." },
      source: { en: "Major hemorrhage and trauma transfusion pathways.", ar: "مسارات نزيف كبير ومراحل نقل الدم في الإصابات." },
      sourceUrl: { en: "https://www.traumainfo.org.uk/guidelines/major-haemorrhage-guideline/", ar: "https://www.traumainfo.org.uk/guidelines/major-haemorrhage-guideline/" },
      lastReviewed: { en: "2026-11-11", ar: "2026-11-11" },
    },
    {
      id: "adenosine",
      name: { en: "Adenosine", ar: "أدنوزين" },
      category: { en: "Cardiac", ar: "قلب" },
      summary: { en: "Used for regular narrow-complex supraventricular tachycardia and selected rhythm disturbances.", ar: "يُستخدم في تسارع القلب فوق البطيني المنتظم الضيق وتحولات نظم مختارة." },
      note: { en: "It is a short-acting AV nodal blocker and should be given via rapid push with saline flush.", ar: "هو حاصر قصير المفعول لعقدة AV ويُعطى بسرعة مع شطف ساليني." },
      scientificName: { en: "Adenosine", ar: "أدنوزين" },
      tradeName: { en: "Adenocor, Adenoscan", ar: "أدينوكور، أدينوسكان" },
      indications: { en: "Regular narrow-complex SVT, paroxysmal supraventricular tachycardia, and certain rhythm conversion scenarios.", ar: "تسارع القلب فوق البطيني المنتظم الضيق، وتسارع القلب فوق البطيني المتقطع، وبعض سيناريوهات تحويل النظم." },
      dosageRouteAge: { en: "Rapid IV bolus 6 mg, then 12 mg if needed; escalate according to protocol and clinical response.", ar: "جرعة رذاذة وريدية سريعة 6 ملغ ثم 12 ملغ إذا لزم، مع زيادة حسب البروتوكول والاستجابة السريرية." },
      contraindicationsWarnings: { en: "Use with caution in asthma, severe bronchospasm, and certain conduction abnormalities; monitor transient bradycardia and flushing.", ar: "استخدم بحذر في الربو، التشنج القصبي الشديد، وبعض اضطرابات التوصيل؛ راقب بطء القلب المؤقت واحمرار الوجه." },
      importantSideEffects: { en: "Brief flushing, chest discomfort, transient AV block, and severe bradycardia.", ar: "احمرار مؤقت، عدم الراحة الصدرية، انسداد AV مؤقت، وبطء القلب الشديد." },
      relevantInteractions: { en: "May interact with dipyridamole, carbamazepine, and methylxanthines such as caffeine and theophylline.", ar: "قد يتداخل مع الدايبيريدامول، الكاربامازيبين، والميثيلكسنتينات مثل الكافيين والثيوفيلين." },
      source: { en: "Cardiac arrhythmia algorithms and emergency rhythm-management guidance.", ar: "خوارزميات اضطراب النظم القلبية وإرشادات إدارة النظم الطارئة." },
      sourceUrl: { en: "https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines", ar: "https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines" },
      lastReviewed: { en: "2026-11-11", ar: "2026-11-11" },
    },
    {
      id: "phenylephrine",
      name: { en: "Phenylephrine", ar: "فينيليفرين" },
      category: { en: "Cardiac", ar: "قلب" },
      summary: { en: "Used for vasopressor support in selected shock states and severe hypotension when alpha-agonist action is needed.", ar: "يُستخدم للدعم الوعائي في حالات الصدمة المختارة وانخفاض ضغط الدم الشديد عندما يلزم تأثير منشّط ألفا." },
      note: { en: "It is a pure alpha-agonist and may reduce heart rate while raising blood pressure.", ar: "هو منشّط ألفا نقي وقد يُقلل معدل القلب مع رفع ضغط الدم." },
      scientificName: { en: "Phenylephrine", ar: "فينيليفرين" },
      tradeName: { en: "Phenylephrine", ar: "فينيليفرين" },
      indications: { en: "Severe hypotension, vasodilatory shock, and selected anesthesia-related hypotensive episodes.", ar: "انخفاض ضغط الدم الشديد، صدمة توسعية، وبعض نوبات انخفاض الضغط المرتبطة بالتخدير." },
      dosageRouteAge: { en: "IV dosing is titrated to blood pressure and perfusion under continuous monitoring.", ar: "تُعدل جرعة الحقن الوريدي حسب ضغط الدم والتروية مع مراقبة مستمرة." },
      contraindicationsWarnings: { en: "Avoid or use cautiously in severe hypertension, bradycardia, ventricular tachycardia, and narrow-angle glaucoma.", ar: "تجنب أو استخدم بحذر في ارتفاع الضغط الشديد، بطء القلب، تسارع القلب البطيني، والزرق الزاوي الضيق." },
      importantSideEffects: { en: "Reflex bradycardia, hypertension, headache, and reduced tissue perfusion if overused.", ar: "بطء قلبي منعكس، ارتفاع ضغط الدم، صداع، وتقليل التروية النسجية عند الإفراط في الاستخدام." },
      relevantInteractions: { en: "May interact with MAO inhibitors, tricyclics, and other vasopressors.", ar: "قد يتداخل مع مثبطات MAO، مضادات الاكتئاب ثلاثية الحلقات، والأدوية الوعائية الأخرى." },
      source: { en: "Shock management protocols and vasopressor guidance in acute critical care.", ar: "بروتوكولات إدارة الصدمة والإرشادات الوعائية في العناية الحرجة الحادة." },
      sourceUrl: { en: "https://www.nice.org.uk/guidance/ng51", ar: "https://www.nice.org.uk/guidance/ng51" },
      lastReviewed: { en: "2026-11-11", ar: "2026-11-11" },
    },
    {
      id: "norepinephrine",
      name: { en: "Norepinephrine", ar: "نورإبينفرين" },
      category: { en: "Cardiac", ar: "قلب" },
      summary: { en: "A first-line vasopressor for septic shock and distributive shock with hypotension.", ar: "مُقوٍ وعائي أولي في صدمة الإنتان والصدمة التوزيعية مع انخفاض ضغط الدم." },
      note: { en: "This drug is titrated to maintain adequate perfusion while avoiding excessive vasoconstriction.", ar: "يُعدل هذا الدواء للحفاظ على التروية المناسبة مع تجنب التضيق الوعائي المفرط." },
      scientificName: { en: "Norepinephrine", ar: "نورإبينفرين" },
      tradeName: { en: "Noradrenaline", ar: "نورادرينالين" },
      indications: { en: "Septic shock, distributive shock, and selected vasodilatory hypotensive states.", ar: "صدمة الإنتان، الصدمة التوزيعية، وبعض حالات انخفاض ضغط الدم التوسعي المختارة." },
      dosageRouteAge: { en: "Continuous IV infusion titrated to mean arterial pressure and perfusion endpoints; monitoring is essential.", ar: "تسريب وريدي مستمر يُعدّل حسب ضغط الشريان المتوسط ومعايير التروية؛ المراقبة ضرورية." },
      contraindicationsWarnings: { en: "Use cautiously in severe peripheral ischemia, arrhythmias, and marked hypovolemia; monitor tissue perfusion and rhythm.", ar: "استخدم بحذر في نقص التروية الطرفية الشديد، الاضطرابات النظمية، وانخفاض حجم الدم الشديد؛ راقب التروية النسيجية والإيقاع." },
      importantSideEffects: { en: "Tachycardia, arrhythmias, ischemia, hypertension, and extravasation injury.", ar: "تسارع القلب، اضطرابات النظم، نقص التروية، ارتفاع ضغط الدم، وإصابة التسرب خارج الوريد." },
      relevantInteractions: { en: "May interact with MAO inhibitors, tricyclic antidepressants, and other vasopressors.", ar: "قد يتداخل مع مثبطات MAO، مضادات الاكتئاب ثلاثية الحلقات، والأدوية الوعائية الأخرى." },
      source: { en: "Sepsis and vasopressor guidance from emergency and critical care policy.", ar: "إرشادات الإنتان والمقوّيات الوعائية من سياسات الطوارئ والعناية الحرجة." },
      sourceUrl: { en: "https://www.survivingsepsis.org/guidelines/", ar: "https://www.survivingsepsis.org/guidelines/" },
      lastReviewed: { en: "2026-11-11", ar: "2026-11-11" },
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
    getDrugCount() {
      return drugs.length;
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
    getInteractionCount() {
      return interactions.length;
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
    getEmergencyDrugCount() {
      return emergencyDrugs.length;
    },
    calculateBmiBmr(heightCm, weightKg, age, sex) {
      const bmi = weightKg / ((heightCm / 100) * (heightCm / 100));
      const bmr = sex === "female" ? 10 * weightKg + 6.25 * heightCm - 5 * age - 161 : 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
      let bmiLabel = { en: "Normal", ar: "طبيعي" };
      if (bmi < 18.5) bmiLabel = { en: "Underweight", ar: "أقل من الوزن الطبيعي" };
      else if (bmi < 25) bmiLabel = { en: "Normal", ar: "طبيعي" };
      else if (bmi < 30) bmiLabel = { en: "Overweight", ar: "زيادة وزن" };
      else bmiLabel = { en: "Obese", ar: "سمنة" };
      let dietAdvice = {
        en: "Maintain a balanced plate with whole grains, lean protein, and plenty of vegetables.",
        ar: "حافظ على طبق متوازن يحتوي على الحبوب الكاملة والبروتين الخفيف والكثير من الخضار.",
      };

      if (bmi < 18.5) {
        dietAdvice = {
          en: "Add nutrient-dense protein and healthy fats to support gradual weight gain.",
          ar: "أضف البروتين الغني والمغذيات والدهون الصحية لدعم زيادة الوزن التدريجية.",
        };
      } else if (bmi < 25) {
        dietAdvice = {
          en: "Keep portions steady, focus on colorful vegetables, and stay hydrated.",
          ar: "حافظ على كميات معتدلة، ركز على الخضار الملونة، وابقَ رطبًا.",
        };
      } else if (bmi < 30) {
        dietAdvice = {
          en: "Choose lean proteins, reduce refined carbs, and increase fiber-rich foods.",
          ar: "اختر البروتينات الخفيفة، قلل الكربوهيدرات المكررة، وزد الأطعمة الغنية بالألياف.",
        };
      } else {
        dietAdvice = {
          en: "Aim for lower-calorie, nutrient-rich meals and monitor portion sizes closely.",
          ar: "استهدف وجبات منخفضة السعرات وغنية بالمغذيات وراقب حجم الحصص عن كثب.",
        };
      }

      return { bmi: bmi.toFixed(1), bmr: bmr.toFixed(0), bmiLabel, dietAdvice };
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
