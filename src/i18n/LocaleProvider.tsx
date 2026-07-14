"use client";

import { useEffect, useSyncExternalStore } from "react";
import { STORAGE_KEYS, writeStorage } from "@/lib/storage";
import { DEFAULT_LOCALE, type Locale, detectLocale } from "./detectLocale";
import { en, type Dictionary } from "./dictionaries/en";
import { pt } from "./dictionaries/pt";

const DICTIONARIES: Record<Locale, Dictionary> = {
  en,
  "pt-BR": pt,
};

/** Store externo do idioma (mesmo padrão do tema). */
let currentLocale: Locale | null = null;
const listeners = new Set<() => void>();

function getSnapshot(): Locale {
  if (currentLocale === null) currentLocale = detectLocale();
  return currentLocale;
}

function getServerSnapshot(): Locale {
  return DEFAULT_LOCALE;
}

function subscribe(callback: () => void): () => void {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function setLocaleInternal(next: Locale): void {
  currentLocale = next;
  writeStorage(STORAGE_KEYS.locale, next);
  listeners.forEach((listener) => listener());
}

/** Mantém o atributo lang do <html> sincronizado (SEO/acessibilidade). */
export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return <>{children}</>;
}

export function useLocale() {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return {
    locale,
    t: DICTIONARIES[locale],
    setLocale: setLocaleInternal,
    toggleLocale: () => setLocaleInternal(locale === "pt-BR" ? "en" : "pt-BR"),
  };
}
