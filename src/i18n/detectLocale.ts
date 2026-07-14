import { STORAGE_KEYS, readStorage } from "@/lib/storage";

export const LOCALES = ["pt-BR", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

function isLocale(value: string | null): value is Locale {
  return value === "pt-BR" || value === "en";
}

/**
 * Detecta o locale inicial:
 *   1. valor salvo no localStorage (escolha explícita do usuário);
 *   2. idioma do navegador — contém "pt" → pt-BR, senão → en.
 */
export function detectLocale(): Locale {
  const stored = readStorage(STORAGE_KEYS.locale);
  if (isLocale(stored)) return stored;

  if (typeof navigator !== "undefined") {
    const langs = navigator.languages?.length ? navigator.languages : [navigator.language];
    const prefersPt = langs.some((lang) => lang?.toLowerCase().startsWith("pt"));
    return prefersPt ? "pt-BR" : "en";
  }

  return DEFAULT_LOCALE;
}
