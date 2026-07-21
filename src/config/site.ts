import type { LocalizedValue, Locale } from "@/src/types/i18n";

export const navItems: Array<{ href: string; label: LocalizedValue }> = [
  { href: "/", label: { en: "Home", ar: "الرئيسية" } },
  { href: "/features", label: { en: "Features", ar: "الميزات" } },
  { href: "/medical-calculators", label: { en: "Medical Calculators", ar: "الآلات الحاسبة الطبية" } },
  { href: "/drug-interaction", label: { en: "Drug Interaction Checker", ar: "فحص التداخلات الدوائية" } },
  { href: "/drug-information", label: { en: "Drug Information", ar: "معلومات الأدوية" } },
  { href: "/download", label: { en: "Download App", ar: "تنزيل التطبيق" } },
  { href: "/become-a-supporter", label: { en: "Become a Supporter", ar: "كن داعمًا" } },
  { href: "/about", label: { en: "Our Mission", ar: "رسالتنا" } },
  { href: "/contact", label: { en: "Contact", ar: "تواصل معنا" } },
];

export function translateLabel(label: LocalizedValue, locale: Locale) {
  return locale === "ar" ? label.ar : label.en;
}
