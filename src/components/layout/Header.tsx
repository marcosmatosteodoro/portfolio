"use client";

import { useState } from "react";
import { useLocale } from "@/i18n/LocaleProvider";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LocaleToggle } from "@/components/ui/LocaleToggle";

const NAV_ITEMS = [
  { id: "about", key: "about" },
  { id: "skills", key: "skills" },
  { id: "experience", key: "experience" },
  { id: "projects", key: "projects" },
  { id: "education", key: "education" },
  { id: "contact", key: "contact" },
] as const;

export function Header() {
  const { t } = useLocale();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-card-border bg-background/80 fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="text-accent font-mono text-lg font-bold tracking-tight">
          MT<span className="text-foreground">.</span>
        </a>

        {/* Navegação desktop */}
        <ul className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="text-muted hover:text-foreground text-sm font-medium transition-colors"
              >
                {t.nav[item.key]}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LocaleToggle />
          <ThemeToggle />
          {/* Botão do menu mobile */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="border-card-border text-foreground hover:border-accent hover:text-accent inline-flex h-9 w-9 items-center justify-center rounded-md border transition-colors md:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      {open && (
        <div id="mobile-menu" className="border-card-border border-t md:hidden">
          <ul className="mx-auto flex max-w-5xl flex-col px-4 py-2 sm:px-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="text-muted hover:text-foreground block py-2 text-sm font-medium transition-colors"
                >
                  {t.nav[item.key]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
