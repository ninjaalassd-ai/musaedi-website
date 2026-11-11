import type { LocalizedValue } from "@/src/types/i18n";

export const homeCopy = {
  hero: {
    eyebrow: { en: "Trusted by modern clinicians", ar: "موثوق به من قبل الأطباء المعاصرين" },
    title: { en: "Medical intelligence, designed for faster decisions.", ar: "ذكاء طبي مصمم لاتخاذ قرارات أسرع." },
    description: {
      en: "Musaedi brings safe dosing guidance, drug interaction awareness, and trusted clinical calculators into one premium mobile experience.",
      ar: "يجمع مساعدي بين توجيهات الجرعات الآمنة والوعي بالتداخلات الدوائية والحاسبات السريرية الموثوقة في تجربة جوال متميزة.",
    },
    primaryCta: { en: "Download the app", ar: "تنزيل التطبيق" },
    secondaryCta: { en: "Explore features", ar: "استكشف الميزات" },
  },
  stats: [
    { value: "< 3s", label: { en: "Response time", ar: "وقت الاستجابة" } },
    { value: "24/7", label: { en: "Instant access", ar: "وصول فوري" } },
    { value: "100%", label: { en: "Trusted updates", ar: "تحديثات موثوقة" } },
  ],
  features: [
    {
      title: { en: "Drug Interaction Checker", ar: "فحص التداخلات الدوائية" },
      description: {
        en: "Review medication conflicts with clarity and confidence.",
        ar: "راجع تعارضات الأدوية بوضوح وثقة.",
      },
      href: "/drug-interaction",
    },
    {
      title: { en: "New Medical Services", ar: "خدمات طبية جديدة" },
      description: {
        en: "Coming soon — more clinical tools and specialty references on the way.",
        ar: "قريبًا — المزيد من الأدوات السريرية والمراجع التخصصية في الطريق.",
      },
      href: "/download",
    },
    {
      title: { en: "Drug Information", ar: "معلومات الأدوية" },
      description: {
        en: "Access medication reference details with clarity and speed.",
        ar: "الوصول إلى تفاصيل مرجعية للأدوية بوضوح وسرعة.",
      },
      href: "/drug-information",
    },
    {
      title: { en: "BMI Calculator", ar: "حاسبة BMI" },
      description: {
        en: "Support patient assessment with fast, accurate calculations.",
        ar: "ادعم تقييم المريض بحسابات سريعة ودقيقة.",
      },
      href: "/bmi-calculator",
    },
    {
      title: { en: "IV Fluid Calculator", ar: "حاسبة السوائل الوريدية" },
      description: {
        en: "Make fluid planning easier with intuitive calculators.",
        ar: "اجعل تخطيط السوائل أسهل باستخدام الآلات الحاسبة البديهية.",
      },
      href: "/iv-fluid-calculator",
    },
    {
      title: { en: "Emergency Drugs", ar: "أدوية الطوارئ" },
      description: {
        en: "Quickly review essential emergency medicines.",
        ar: "راجع الأدوية الطارئة الأساسية بسرعة.",
      },
      href: "/emergency-drugs",
    },
  ],
  testimonials: [
    {
      quote: {
        en: "The experience feels premium, polished, and genuinely useful in daily practice.",
        ar: "التجربة تبدو متميزة ومصقولة ومفيدة حقًا في الممارسة اليومية.",
      },
      author: { en: "Dr. Lina Haddad", ar: "الدكتورة لينا حداد" },
      role: { en: "Clinical Pharmacist", ar: "صيدلاني سريري" },
    },
    {
      quote: {
        en: "It helps me spot medication risks before they become patient problems.",
        ar: "يساعدني في اكتشاف مخاطر الأدوية قبل أن تصبح مشاكل للمريض.",
      },
      author: { en: "Dr. Omar Yassin", ar: "الدكتور عمر ياسين" },
      role: { en: "Emergency Physician", ar: "طبيب طوارئ" },
    },
  ],
};

export const featuresContent = {
  hero: {
    eyebrow: { en: "Everything in one place", ar: "كل شيء في مكان واحد" },
    title: { en: "Purpose-built tools for confident care", ar: "أدوات مصممة لتقديم رعاية واثقة" },
    description: {
      en: "From quick dosage support to in-depth medication information, Musaedi keeps essential workflows close at hand.",
      ar: "من دعم الجرعات السريع إلى معلومات الأدوية المتعمقة، يبقي مساعدي سير العمل الأساسية قريبة من متناول اليد.",
    },
  },
  cards: [
    { title: { en: "Drug Information", ar: "معلومات الأدوية" }, description: { en: "Reliable guidance that helps clinicians move with confidence.", ar: "إرشادات موثوقة تساعد الأطباء على التحرك بثقة." }, href: "/drug-information" },
    { title: { en: "Drug Interaction", ar: "التداخلات الدوائية" }, description: { en: "Identify medicine conflicts before they affect outcomes.", ar: "تحديد تعارضات الأدوية قبل أن تؤثر على النتائج." }, href: "/drug-interaction" },
    { title: { en: "New Medical Services", ar: "خدمات طبية جديدة" }, description: { en: "Coming soon — more clinical tools and specialty references on the way.", ar: "قريبًا — المزيد من الأدوات السريرية والمراجع التخصصية في الطريق." }, href: "/download" },
    { title: { en: "BMI Calculator", ar: "حاسبة BMI" }, description: { en: "Make BMI and BMR planning feel effortless.", ar: "اجعل تخطيط BMI وBMR يبدو سهلاً." }, href: "/bmi-calculator" },
    { title: { en: "IV Fluid Calculator", ar: "حاسبة السوائل الوريدية" }, description: { en: "Streamline fluid planning with a focused calculator experience.", ar: "بسط تخطيط السوائل من خلال تجربة حاسبة مركزة." }, href: "/iv-fluid-calculator" },
    { title: { en: "Emergency Drugs", ar: "أدوية الطوارئ" }, description: { en: "Review essential emergency medications in one place.", ar: "راجع الأدوية الطارئة الأساسية في مكان واحد." }, href: "/emergency-drugs" },
  ],
};

export const calculatorsContent = {
  hero: {
    eyebrow: { en: "Precision tools", ar: "أدوات دقة" },
    title: { en: "Clinical calculators that feel effortless", ar: "حاسبات سريرية تبدو سهلة" },
    description: {
      en: "Built for healthcare teams who need reliable calculations without friction.",
      ar: "مبنية لفرق الرعاية الصحية التي تحتاج إلى حسابات موثوقة دون عناء.",
    },
  },
  cards: [
    { title: { en: "BMI & BMR Calculator", ar: "حاسبة BMI و BMR" }, href: "/bmi-calculator", description: { en: "Support patient screening with fast, trusted metrics.", ar: "ادعم فحص المريض بمقاييس سريعة وموثوقة." } },
    { title: { en: "IV Fluid Calculator", ar: "حاسبة السوائل الوريدية" }, href: "/iv-fluid-calculator", description: { en: "Simplify infusion planning and fluid balance review.", ar: "تبسيط تخطيط التسريب ومراجعة توازن السوائل." } },
  ],
};

export const policyContent = {
  hero: {
    eyebrow: { en: "Protection first", ar: "الحماية أولاً" },
    title: { en: "Privacy Policy", ar: "سياسة الخصوصية" },
    description: {
      en: "We are committed to protecting your information and keeping our app transparent.",
      ar: "نحن ملتزمون بحماية معلوماتك وإبقاء التطبيق شفافاً.",
    },
  },
};

export const footerLinks = [
  { href: "/privacy-policy", label: { en: "Privacy Policy", ar: "سياسة الخصوصية" } },
  { href: "/terms-of-service", label: { en: "Terms of Service", ar: "شروط الاستخدام" } },
  { href: "/about", label: { en: "Our Mission", ar: "رسالتنا" } },
  { href: "/become-a-supporter", label: { en: "Become a Supporter", ar: "كن داعمًا" } },
];

export type ContentKey = keyof typeof homeCopy;

export function getLocalizedText(value: LocalizedValue, locale: "en" | "ar") {
  return locale === "ar" ? value.ar : value.en;
}
