"use client";

import { useLocale } from "@/i18n/LocaleProvider";

export function LocaleToggle() {
  const { locale, toggleLocale, t } = useLocale();
  const label = locale === "pt-BR" ? "PT" : "EN";

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={t.a11y.toggleLocale}
      title={t.a11y.toggleLocale}
      className="border-card-border text-foreground hover:border-accent hover:text-accent inline-flex h-9 min-w-9 items-center justify-center rounded-md border px-2 text-sm font-semibold transition-colors"
    >
      {label}
    </button>
  );
}
