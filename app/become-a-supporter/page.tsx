"use client";

import { ArrowRight, Coffee, HeartHandshake, ShieldCheck, Sparkles, SquareArrowOutUpRight } from "lucide-react";
import { useSite } from "@/components/site-provider";
import { PageLayout } from "@/components/ui";

const supportOptions = [
  {
    name: "PayPal",
    tagline: { en: "Fast and familiar for one-time support.", ar: "سريع ومألوف لدعم لمرة واحدة." },
    href: "https://www.paypal.com/donate",
    accent: "from-[#0070ba] to-[#0f6dbd]",
  },
  {
    name: "Buy Me a Coffee",
    tagline: { en: "A simple way to say thank you with a coffee.", ar: "طريقة بسيطة لقول شكراً مع فنجان قهوة." },
    href: "https://www.buymeacoffee.com/",
    accent: "from-[#ffdd00] to-[#f59e0b]",
  },
  {
    name: "Ko-fi",
    tagline: { en: "Support the project with flexible monthly or one-off gifts.", ar: "ادعم المشروع بهدايا مرنة شهرية أو لمرة واحدة." },
    href: "https://ko-fi.com/",
    accent: "from-[#13C296] to-[#0f766e]",
  },
  {
    name: "GitHub Sponsors",
    tagline: { en: "Back the work directly and help it grow sustainably.", ar: "ادعم العمل مباشرة وساعده على النمو بشكل مستدام." },
    href: "https://github.com/sponsors",
    accent: "from-[#111827] to-[#374151]",
  },
];

const faqs = [
  {
    question: { en: "Is support really optional?", ar: "هل الدعم اختياري حقًا؟" },
    answer: {
      en: "Yes. Every feature, guide, and calculator on Musaedi remains freely available, and supporting the project never affects access to the content.",
      ar: "نعم. تبقى جميع الميزات والإرشادات والحاسبات على مساعدي متاحة مجانًا، ودعم المشروع لا يؤثر على الوصول إلى المحتوى.",
    },
  },
  {
    question: { en: "How will my support be used?", ar: "كيف سيتم استخدام دعمي؟" },
    answer: {
      en: "Support helps sustain ongoing improvements, better content, and continued maintenance of the medical experience.",
      ar: "يساعد الدعم على استدامة التحسينات المستمرة والمحتوى الأفضل والصيانة المستمرة لتجربة الرعاية الطبية.",
    },
  },
  {
    question: { en: "Is it secure to donate through these platforms?", ar: "هل من الآمن التبرع عبر هذه المنصات؟" },
    answer: {
      en: "Yes. All listed platforms use secure payment processing and direct links are opened only in a new tab for your safety.",
      ar: "نعم. جميع المنصات المدرجة تستخدم معالجة دفع آمنة ويتم فتح الروابط مباشرة في علامة تبويب جديدة لحمايتك.",
    },
  },
];

export default function BecomeSupporterPage() {
  const { locale } = useSite();
  const isArabic = locale === "ar";

  return (
    <PageLayout
      locale={locale}
      eyebrow={isArabic ? "دعم اختياري ومتميز" : "Optional, premium support"}
      title={isArabic ? "كن داعمًا لمساعدي وادعم رحلة الرعاية الطبية الرقمية" : "Become a supporter of Musaedi and strengthen the medical experience"}
      description={isArabic ? "إذا وجدت هذه الأدوات مفيدة، فالدعم اختياري بالكامل ويُقدّر كثيرًا. يساعدك على البقاء مع مشروع نضيف له الثقة والاحترافية من يوم لآخر." : "If you find these tools valuable, support is completely optional and deeply appreciated. It helps sustain a project built with trust, clarity, and professionalism."}
      primaryAction={{ href: "/contact", label: isArabic ? "تواصل معنا" : "Contact us" }}
      secondaryAction={{ href: "/features", label: isArabic ? "استعرض الميزات" : "Explore features" }}
    >
      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-slate-200/80 bg-white/85 p-8 shadow-xl shadow-blue-100/60 backdrop-blur dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-none">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-300">
            <HeartHandshake className="h-4 w-4" />
            {isArabic ? "دعم اختياري بالكامل" : "Completely optional support"}
          </div>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            {isArabic ? "مساهمتك تعزز جودة المساعدة الطبية التي نوفرها" : "Your contribution helps keep this medical support experience growing"}
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
            {isArabic ? "إذا وجدت هذا المشروع مفيدًا في العمل أو الدراسة أو الرعاية اليومية، فالمشاركة الرمزية أو الدفعة الصغيرة تُظهر التقدير وتساعد على تحسين التجربة أكثر." : "If this project has helped you at work, in study, or in daily care, even a small gesture shows appreciation and helps us keep improving the experience."}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700 dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-300">
              <ShieldCheck className="h-4 w-4" />
              {isArabic ? "روابط آمنة" : "Secure links"}
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-2 text-sm font-medium text-violet-700 dark:border-violet-900/60 dark:bg-violet-950/40 dark:text-violet-300">
              <Sparkles className="h-4 w-4" />
              {isArabic ? "تصميم حديث" : "Modern experience"}
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200/80 bg-gradient-to-br from-blue-600 via-cyan-600 to-sky-500 p-8 text-white shadow-2xl shadow-blue-200/70 dark:border-slate-800">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-100">
            {isArabic ? "رسالة تقدير" : "A professional thank you"}
          </p>
          <h3 className="mt-4 text-2xl font-semibold">
            {isArabic ? "شكرًا على أن تكون جزءًا من هذه الرحلة" : "Thank you for being part of this journey"}
          </h3>
          <p className="mt-4 text-base leading-8 text-blue-50/90">
            {isArabic ? "كل دعم يُظهر أن الجهد المبذول في التصميم والموثوقية والوضوح يُقدّر من قبل من يثقون بهذه الأدوات الطبية." : "Every contribution shows that the care put into design, reliability, and clarity is valued by those who trust these medical tools."}
          </p>
          <div className="mt-6 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
            <p className="text-sm font-medium text-blue-100">
              {isArabic ? "مهمتنا تبقى مرنة، واضحة، ومصممة للثقة." : "Our mission stays flexible, clear, and designed for trust."}
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-slate-200/80 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/80">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-300">
              {isArabic ? "الخيارات" : "Support options"}
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              {isArabic ? "اختر المنصة التي تناسبك" : "Choose the platform that feels right for you"}
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">
            {isArabic ? "يمكنك اختيار أي منصة تفضلها؛ جميعها مناسبة لدعم المشروع بشكل بسيط ومريح." : "You can choose whichever platform you prefer; all of them make it easy to support the project in a simple, comfortable way."}
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {supportOptions.map((option) => (
            <a
              key={option.name}
              href={option.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950/70"
            >
              <div className={`inline-flex rounded-full bg-gradient-to-r ${option.accent} px-3 py-1 text-sm font-semibold text-white`}>
                {option.name}
              </div>
              <p className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{option.name}</p>
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{isArabic ? option.tagline.ar : option.tagline.en}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition group-hover:gap-3 dark:text-blue-300">
                {isArabic ? "الانتقال إلى الدعم" : "Open support page"}
                <SquareArrowOutUpRight className="h-4 w-4" />
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2rem] border border-slate-200/80 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/80">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-blue-100 p-3 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
              <Coffee className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-300">
                {isArabic ? "لماذا يدعم الناس؟" : "Why supporters matter"}
              </p>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                {isArabic ? "لأن الرعاية الطبية الرقمية تستحق الاستمرار" : "Because thoughtful medical tools deserve to keep growing"}
              </h2>
            </div>
          </div>
          <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
            {isArabic ? "إن كان لديك شعور بأن هذه المنصة تسهل العمل أو التعليم أو اتخاذ القرار، فالدعم يعكس هذا التقدير ويعطي المشروع دفعة دائمة نحو التحسين." : "If this platform makes work, education, or decision-making easier, support reflects that appreciation and gives the project a steady push toward betterment."}
          </p>
        </div>

        <div className="rounded-[2rem] border border-slate-200/80 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-8 text-white shadow-lg dark:border-slate-800">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">
            {isArabic ? "الأسئلة الشائعة" : "Frequently asked questions"}
          </p>
          <div className="mt-6 space-y-3">
            {faqs.map((faq) => (
              <details key={faq.question.en} className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <summary className="cursor-pointer list-none text-sm font-semibold text-white">
                  {isArabic ? faq.question.ar : faq.question.en}
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {isArabic ? faq.answer.ar : faq.answer.en}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-emerald-200/70 bg-emerald-50/80 p-8 shadow-lg dark:border-emerald-900/50 dark:bg-emerald-950/30">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700 dark:text-emerald-300">
              {isArabic ? "شكرًا لك" : "Thank you"}
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              {isArabic ? "كل خطوة صغيرة تساهم في بناء تجربة طبية أفضل" : "Every small step helps build a better medical experience"}
            </h2>
          </div>
          <a
            href="https://www.paypal.com/donate"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
          >
            {isArabic ? "ابدأ بالدعم الآن" : "Support now"}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
