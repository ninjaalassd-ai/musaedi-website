"use client";

import Link from "next/link";
import { ArrowRight, BadgeCheck, Compass, HeartPulse, ShieldCheck, Sparkles, Stethoscope, Target, TrendingUp } from "lucide-react";
import { useSite } from "@/components/site-provider";

const values = [
  {
    icon: ShieldCheck,
    title: { en: "Reliability", ar: "الاعتمادية" },
    description: {
      en: "Every tool is designed to feel dependable and professional in the moment that matters.",
      ar: "تم تصميم كل أداة لتبدو موثوقة ومهنية في اللحظة التي تهم.",
    },
  },
  {
    icon: Sparkles,
    title: { en: "Clarity", ar: "الوضوح" },
    description: {
      en: "We simplify complex medical information so decisions feel calm, clear, and confident.",
      ar: "نُبسط المعلومات الطبية المعقدة حتى تبدو القرارات هادئة وواضحة وثقة.",
    },
  },
  {
    icon: HeartPulse,
    title: { en: "Care", ar: "الرعاية" },
    description: {
      en: "The experience is built with empathy for clinicians, students, and patients alike.",
      ar: "تم بناء التجربة مع التعاطف مع الأطباء والطلاب والمرضى على حد سواء.",
    },
  },
];

const roadmap = [
  {
    year: { en: "2026", ar: "2026" },
    title: { en: "Smarter clinical tools", ar: "أدوات سريرية أكثر ذكاءً" },
    description: {
      en: "Expand the platform with richer guidance and deeper support for everyday medical work.",
      ar: "توسيع المنصة مع دعم أعمق وإرشادات أغنى للعمل الطبي اليومي.",
    },
  },
  {
    year: { en: "2027", ar: "2027" },
    title: { en: "Personalized care journeys", ar: "رحلات رعاية شخصية" },
    description: {
      en: "Create adaptive experiences that respond to clinical context and user needs.",
      ar: "إنشاء تجارب متكيفة تستجيب للسياق السريري واحتياجات المستخدم.",
    },
  },
  {
    year: { en: "2028+", ar: "2028+" },
    title: { en: "A trusted global medical companion", ar: "مرافق طبي موثوق عالميًا" },
    description: {
      en: "Grow into a platform that supports modern care with confidence, privacy, and elegance.",
      ar: "النمو لتصبح منصة تدعم الرعاية الحديثة بثقة وخصوصية وأناقة.",
    },
  },
];

export default function AboutPage() {
  const { locale } = useSite();
  const isArabic = locale === "ar";

  return (
    <div className="space-y-8" dir={isArabic ? "rtl" : "ltr"}>
      <section className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/85 shadow-[0_30px_80px_-24px_rgba(37,99,235,0.28)] backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
        <div className="grid gap-10 p-8 lg:grid-cols-[1.05fr_0.95fr] lg:p-12">
          <div className="flex flex-col justify-center">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-300">
              <Stethoscope className="h-4 w-4" />
              {isArabic ? "رسالتنا الطبية" : "Our medical mission"}
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
              {isArabic ? "نحو تجربة طبية أكثر ثقة ووضوحًا" : "Toward a more trusted and clearer medical experience"}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              {isArabic ? "في مساعدي، نهدف إلى جمع المعرفة الطبية والسهولة والاحتراف في تجربة رقمية متميزة تساعد على اتخاذ القرار بثقة أكبر." : "At Musaedi, we aim to bring medical knowledge, ease, and professionalism into one premium digital experience that supports better decisions with confidence."}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/download" className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-700">
                {isArabic ? "تنزيل التطبيق" : "Download the app"}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition duration-300 hover:border-blue-400 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200">
                {isArabic ? "تواصل معنا" : "Contact us"}
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-600 via-cyan-500 to-sky-400 p-8 text-white shadow-2xl dark:border-slate-800">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.25),_transparent_45%)]" />
            <div className="relative flex h-full flex-col justify-between gap-6">
              <div className="flex items-center justify-between">
                <div className="rounded-full border border-white/30 bg-white/15 px-3 py-1 text-sm font-semibold backdrop-blur">
                  {isArabic ? "تجربة رقمية متميزة" : "Premium digital care"}
                </div>
                <div className="rounded-2xl bg-white/15 p-3 backdrop-blur">
                  <HeartPulse className="h-6 w-6" />
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-white/20 bg-white/10 p-5 backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-white/20 p-3">
                    <Target className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-100">
                      {isArabic ? "هدفنا" : "Our focus"}
                    </p>
                    <p className="text-lg font-medium">
                      {isArabic ? "تقديم أدوات طبية سريعة، آمنة، ومريحة" : "Fast, safe, and comfortable medical tools"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/20 bg-slate-950/20 p-4">
                  <p className="text-sm font-semibold text-blue-100">{isArabic ? "السرعة" : "Speed"}</p>
                  <p className="mt-1 text-lg font-semibold">{isArabic ? "إجابة واضحة خلال ثوانٍ" : "Clear answers in seconds"}</p>
                </div>
                <div className="rounded-2xl border border-white/20 bg-slate-950/20 p-4">
                  <p className="text-sm font-semibold text-blue-100">{isArabic ? "الخصوصية" : "Privacy"}</p>
                  <p className="mt-1 text-lg font-semibold">{isArabic ? "تجربة آمنة ومريحة" : "A safe and respectful experience"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-slate-200/80 bg-white/80 p-8 shadow-lg transition duration-300 hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900/80">
          <div className="inline-flex rounded-2xl bg-blue-100 p-3 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
            <Compass className="h-5 w-5" />
          </div>
          <h2 className="mt-6 text-2xl font-semibold text-slate-900 dark:text-white">
            {isArabic ? "مهمتنا" : "Mission"}
          </h2>
          <div className="mt-4 space-y-4 text-base leading-8 text-slate-600 dark:text-slate-300">
            <p>
              {isArabic
                ? "في مساعدي، مهمتنا هي تمكين المتخصصين في الرعاية الصحية، وطلاب التمريض، وطلاب الطب، والأطباء من الوصول إلى أدوات طبية موثوقة وسهلة الاستخدام وعملية."
                : "At Musaedi, our mission is to empower healthcare professionals, nursing students, medical students, and clinicians with reliable, accessible, and practical medical tools."}
            </p>
            <p>
              {isArabic
                ? "نؤمن بأن المعلومات الطبية الدقيقة يجب أن تكون متاحة متى احتجت إليها. وهدفنا هو تبسيط اتخاذ القرار السريري من خلال التكنولوجيا الحديثة ودعم التعلم وسلامة المرضى والممارسة القائمة على الأدلة."
                : "We believe that accurate medical information should be available whenever it is needed. Our goal is to simplify clinical decision-making through modern technology while supporting learning, patient safety, and evidence-based practice."}
            </p>
            <p>
              {isArabic
                ? "ويستمر مساعدي في التطور مع أدوات جديدة مثل الحاسبات ومعلومات الأدوية وفحوص التداخلات والمرجعيات الطارئة وغيرها من الموارد الطبية المصممة لمساعدة المتخصصين في الرعاية الصحية في عملهم اليومي."
                : "Musaedi is continuously evolving with new calculators, drug information, interaction checking, emergency references, and other medical resources designed to assist healthcare professionals in their daily work."}
            </p>
            <p>
              {isArabic
                ? "ونحن ملتزمون بالجودة والابتكار والتحسين المستمر لبناء واحدة من أكثر المنصات الطبية ثقة للمهنيين في الرعاية الصحية حول العالم."
                : "We are committed to quality, innovation, and continuous improvement to build one of the most trusted medical platforms for healthcare professionals worldwide."}
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200/80 bg-white/80 p-8 shadow-lg transition duration-300 hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900/80">
          <div className="inline-flex rounded-2xl bg-emerald-100 p-3 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
            <TrendingUp className="h-5 w-5" />
          </div>
          <h2 className="mt-6 text-2xl font-semibold text-slate-900 dark:text-white">
            {isArabic ? "رؤيتنا" : "Vision"}
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
            {isArabic ? "نطمح إلى أن يصبح مساعدي مرجعًا طبيًا رقميًا يعتمد عليه في كل خطوة من خطوات الرعاية الحديثة." : "We envision Musaedi becoming a go-to digital medical reference for every step of modern care."}
          </p>
        </div>
      </section>

      <section className="rounded-[2rem] border border-slate-200/80 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/80">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-300">
            {isArabic ? "القيم الأساسية" : "Core values"}
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            {isArabic ? "قيم تُبنى عليها كل تجربة" : "Values that shape every experience"}
          </h2>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div key={value.title.en} className="rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-950/70">
                <div className="inline-flex rounded-2xl bg-white p-3 text-blue-700 shadow-sm dark:bg-slate-900 dark:text-blue-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">{isArabic ? value.title.ar : value.title.en}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{isArabic ? value.description.ar : value.description.en}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2rem] border border-slate-200/80 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-8 text-white shadow-xl">
          <div className="inline-flex rounded-2xl bg-white/10 p-3 backdrop-blur">
            <BadgeCheck className="h-5 w-5" />
          </div>
          <h2 className="mt-6 text-2xl font-semibold">
            {isArabic ? "لماذا مساعدي؟" : "Why Musaedi?"}
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-300">
            {isArabic ? "لأننا نجمع بين البساطة والاحترافية والذكاء الطبي في مكان واحد، لتوفير تجربة تساعدك على التحرك بثقة دون تعقيد." : "Because we bring simplicity, professionalism, and medical intelligence together in one place to support confident movement without unnecessary complexity."}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/15 bg-white/10 px-3 py-2 text-sm font-medium">{isArabic ? "محتوى موثوق" : "Reliable content"}</span>
            <span className="rounded-full border border-white/15 bg-white/10 px-3 py-2 text-sm font-medium">{isArabic ? "تصميم فاخر" : "Premium design"}</span>
            <span className="rounded-full border border-white/15 bg-white/10 px-3 py-2 text-sm font-medium">{isArabic ? "تجربة سهلة" : "Easy experience"}</span>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200/80 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/80">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-300">
            {isArabic ? "خارطة الطريق" : "Roadmap"}
          </p>
          <div className="mt-6 space-y-4">
            {roadmap.map((item, index) => (
              <div key={item.title.en} className="flex gap-4 rounded-[1.25rem] border border-slate-200 bg-slate-50/70 p-4 dark:border-slate-800 dark:bg-slate-950/70">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <div>
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-300">{isArabic ? item.year.ar : item.year.en}</p>
                  <h3 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">{isArabic ? item.title.ar : item.title.en}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{isArabic ? item.description.ar : item.description.en}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-emerald-200/70 bg-emerald-50/80 p-8 shadow-lg dark:border-emerald-900/50 dark:bg-emerald-950/30">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700 dark:text-emerald-300">
              {isArabic ? "ابدأ الآن" : "Start now"}
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              {isArabic ? "اكتشف التطبيق وتعرّف على الأدوات الطبية المتاحة" : "Discover the app and explore the medical tools available"}
            </h2>
          </div>
          <Link href="/download" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100">
            {isArabic ? "تنزيل التطبيق" : "Download the app"}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
