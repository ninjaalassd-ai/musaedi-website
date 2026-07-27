"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BrainCircuit, CheckCircle2, ShieldCheck, Stethoscope } from "lucide-react";
import { useSite } from "@/components/site-provider";
import { FeatureCard, SectionHeading } from "@/components/ui";
import { homeCopy } from "@/lib/content";

const faqs = [
  {
    question: { en: "Is Musaedi suitable for everyday clinical use?", ar: "هل مساعدي مناسب للاستخدام السريري اليومي؟" },
    answer: {
      en: "Yes. It is designed to support fast, reliable decisions while keeping the experience professional and calm.",
      ar: "نعم. تم تصميمه لدعم القرارات السريعة والموثوقة مع الحفاظ على تجربة احترافية وهادئة.",
    },
  },
  {
    question: { en: "Can the app support multiple languages?", ar: "هل يمكن للتطبيق دعم لغات متعددة؟" },
    answer: {
      en: "Absolutely. Musaedi offers a polished Arabic and English experience for a broader medical audience.",
      ar: "بالتأكيد. يقدم مساعدي تجربة مصقولة بالعربية والإنجليزية لجمهور طبي أوسع.",
    },
  },
];

export default function Home() {
  const { locale } = useSite();
  const t = (value: { en: string; ar: string }) => (locale === "ar" ? value.ar : value.en);

  return (
    <div className="space-y-10" dir={locale === "ar" ? "rtl" : "ltr"}>
      <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="rounded-[2rem] border border-blue-100 bg-white/80 p-8 shadow-[0_30px_90px_-35px_rgba(37,99,235,0.5)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/80 sm:p-10 lg:p-12">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 dark:border-blue-900/50 dark:bg-blue-950/50 dark:text-blue-200">
            <Stethoscope className="h-4 w-4" />
            {t(homeCopy.hero.eyebrow)}
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
            {t(homeCopy.hero.title)}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            {t(homeCopy.hero.description)}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/download" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-blue-700">
              {t(homeCopy.hero.primaryCta)} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/features" className="inline-flex items-center rounded-full border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-blue-400 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200">
              {t(homeCopy.hero.secondaryCta)}
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {homeCopy.stats.map((stat) => (
              <div key={stat.value} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 text-center dark:border-slate-800 dark:bg-slate-950/70">
                <p className="text-2xl font-semibold text-slate-900 dark:text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{t(stat.label)}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-[2rem] border border-white/60 p-4 shadow-2xl dark:border-slate-800">
          <Image
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80"
            alt="Medical app interface"
            width={900}
            height={1100}
            priority
            className="h-[520px] w-full rounded-[1.4rem] object-cover"
          />
        </div>
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-white/70 p-8 shadow-[0_20px_70px_-35px_rgba(15,23,42,0.35)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70 sm:p-10">
        <SectionHeading
          eyebrow={locale === "ar" ? "ميزات حاسمة" : "Essential features"}
          title={locale === "ar" ? "كل ما تحتاجه لتقديم رعاية موثوقة" : "Everything you need for trusted care"}
          description={locale === "ar" ? "من التداخلات الدوائية إلى الآلات الحاسبة السريرية، توفر مساعدي تجربة سلسة واحترافية." : "From drug interactions to bedside calculators, Musaedi delivers a seamless and professional experience."}
          locale={locale}
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {homeCopy.features.map((feature) => (
            <FeatureCard key={feature.title.en} title={t(feature.title)} description={t(feature.description)} locale={locale} href={feature.href} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="rounded-[2rem] border border-emerald-200 bg-emerald-50/90 p-8 shadow-lg dark:border-emerald-900/50 dark:bg-emerald-950/50">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-emerald-700 dark:bg-slate-900/70 dark:text-emerald-300">
            <ShieldCheck className="h-4 w-4" />
            {locale === "ar" ? "لماذا مساعدي؟" : "Why Musaedi?"}
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            {locale === "ar" ? "تصميم مميز للسرعة والوضوح" : "A premium design for speed and clarity"}
          </h2>
          <ul className="mt-6 space-y-3 text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />{locale === "ar" ? "محتوى طبي واضح ومخصص لتقليل الخطأ البشري." : "Clear medical content built to reduce human error."}</li>
            <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />{locale === "ar" ? "واجهة أنيقة تناسب الممارسة اليومية ومواقف الطوارئ." : "An elegant interface that works in daily practice and emergency moments."}</li>
            <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />{locale === "ar" ? "متوافق مع الهواتف الذكية واحتياجات السرعة والراحة." : "Optimized for mobile workflows, comfort, and speed."}</li>
          </ul>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 p-8 text-white shadow-2xl">
          <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-100">
            <BrainCircuit className="h-5 w-5" />
            {locale === "ar" ? "إحصائيات موثوقة" : "Reliable metrics"}
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              { value: "99.2%", label: locale === "ar" ? "دقة الحسابات" : "Calculation accuracy" },
              { value: "< 3s", label: locale === "ar" ? "وقت الاستجابة" : "Response time" },
              { value: "24/7", label: locale === "ar" ? "وصول سريع" : "Instant access" },
              { value: "100%", label: locale === "ar" ? "تحديثات موثوقة" : "Trusted updates" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
                <p className="text-3xl font-semibold">{item.value}</p>
                <p className="mt-2 text-sm text-blue-50/90">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-white/70 p-8 shadow-[0_20px_70px_-35px_rgba(15,23,42,0.35)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70 sm:p-10">
        <SectionHeading
          eyebrow={locale === "ar" ? "ملاحظات المستخدمين" : "User feedback"}
          title={locale === "ar" ? "موثوق به في الممارسة اليومية" : "Trusted in everyday practice"}
          description={locale === "ar" ? "أطباء وصيادلة يقدرون الراحة والوضوح المتأصل في تجربة مساعدي." : "Healthcare professionals value the calm, polished experience Musaedi brings to day-to-day workflows."}
          locale={locale}
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {homeCopy.testimonials.map((testimonial) => (
            <div key={testimonial.author.en} className="rounded-3xl border border-slate-200 bg-slate-50/80 p-6 dark:border-slate-800 dark:bg-slate-950/70">
              <p className="text-lg leading-8 text-slate-700 dark:text-slate-300">“{t(testimonial.quote)}”</p>
              <div className="mt-6">
                <p className="font-semibold text-slate-900 dark:text-white">{t(testimonial.author)}</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">{t(testimonial.role)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-white/70 p-8 shadow-[0_20px_70px_-35px_rgba(15,23,42,0.35)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70 sm:p-10">
        <SectionHeading
          eyebrow={locale === "ar" ? "الأسئلة الشائعة" : "FAQ"}
          title={locale === "ar" ? "أكثر الأسئلة شيوعًا" : "Common questions"}
          description={locale === "ar" ? "إجابات واضحة حول التصميم، الاستخدام، واللغات." : "Straightforward answers about design, usage, and language support."}
          locale={locale}
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {faqs.map((item) => (
            <div key={item.question.en} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6 dark:border-slate-800 dark:bg-slate-950/70">
              <h3 className="font-semibold text-slate-900 dark:text-white">{t(item.question)}</h3>
              <p className="mt-3 text-slate-600 dark:text-slate-300">{t(item.answer)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] border border-blue-200 bg-gradient-to-r from-blue-600 to-cyan-500 p-8 text-white shadow-2xl sm:p-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-100">{locale === "ar" ? "ابدأ الآن" : "Start now"}</p>
            <h2 className="mt-3 text-3xl font-semibold">{locale === "ar" ? "أنشئ تجربة طبية أكثر ثقة اليوم" : "Bring a more confident medical experience to your workflow today"}</h2>
          </div>
          <Link href="/download" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-blue-700 transition hover:-translate-y-1">
            {locale === "ar" ? "تنزيل التطبيق" : "Download the app"} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
