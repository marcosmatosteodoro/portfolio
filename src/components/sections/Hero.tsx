"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { profile } from "@/data/profile";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  const { locale, t } = useLocale();

  return (
    <section id="top" className="mx-auto max-w-5xl px-4 pt-32 pb-16 sm:px-6 sm:pt-40">
      <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:justify-between">
        <div className="max-w-2xl text-center md:text-left">
          <Reveal>
            <p className="text-muted mb-3 font-mono text-sm">{t.hero.greeting}</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{profile.shortName}</h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-accent mt-2 text-lg font-semibold sm:text-xl">
              {profile.role[locale]}
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p className="text-muted mt-5 text-base leading-relaxed">{profile.tagline[locale]}</p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
              <a
                href="#projects"
                className="bg-accent text-accent-foreground hover:bg-accent-hover rounded-md px-5 py-2.5 text-sm font-semibold transition-colors"
              >
                {t.hero.ctaProjects}
              </a>
              <a
                href="#contact"
                className="border-card-border hover:border-accent hover:text-accent rounded-md border px-5 py-2.5 text-sm font-semibold transition-colors"
              >
                {t.hero.ctaContact}
              </a>
              <a
                href={profile.cv[locale]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground px-2 py-2.5 text-sm font-semibold underline-offset-4 transition-colors hover:underline"
              >
                {t.hero.downloadCv}
              </a>
            </div>
          </Reveal>
        </div>

        {/* Avatar placeholder (troca por foto depois) */}
        <Reveal delay={120}>
          <div className="from-accent/30 to-accent/5 border-card-border flex h-40 w-40 shrink-0 items-center justify-center rounded-full border bg-gradient-to-br sm:h-48 sm:w-48">
            <span className="text-accent font-mono text-5xl font-bold">{profile.initials}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
