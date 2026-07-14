"use client";

import { useEffect, useState } from "react";
import { useLocale } from "@/i18n/LocaleProvider";

export function BackToTop() {
  const { t } = useLocale();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={t.a11y.backToTop}
      title={t.a11y.backToTop}
      className={`bg-accent text-accent-foreground hover:bg-accent-hover fixed right-5 bottom-5 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full shadow-lg transition-all ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
}
