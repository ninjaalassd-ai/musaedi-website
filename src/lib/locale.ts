import type { Locale, LocalizedValue } from "@/src/types/i18n";

export function getLocalizedText(value: LocalizedValue, locale: Locale) {
  return locale === "ar" ? value.ar : value.en;
}
