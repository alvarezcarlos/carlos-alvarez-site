import { en } from "./en";
import { es } from "./es";

export type Locale = "en" | "es";
export const defaultLocale: Locale = "en";
export const locales: Locale[] = ["en", "es"];

// Spanish speaking countries ISO codes
export const esCountries = [
  "AR",
  "BO",
  "CL",
  "CO",
  "CR",
  "CU",
  "DO",
  "EC",
  "SV",
  "GQ",
  "GT",
  "HN",
  "MX",
  "NI",
  "PA",
  "PY",
  "PE",
  "PR",
  "ES",
  "UY",
  "VE",
];

export type Dictionary = typeof en;

const dictionaries: Record<Locale, Dictionary> = {
  en,
  es,
};

export const getDictionary = (locale: string): Dictionary => {
  return dictionaries[locale as Locale] ?? dictionaries.en;
};
