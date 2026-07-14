"use client";

import Image from "next/image";
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
          <Reveal delay={400}>
            <dl className="mt-10 flex justify-center gap-8 md:justify-start">
              {profile.stats.map((stat) => (
                <div key={stat.label.en} className="text-center md:text-left">
                  <dt className="text-accent text-2xl font-bold sm:text-3xl">{stat.value}</dt>
                  <dd className="text-muted mt-1 text-xs sm:text-sm">{stat.label[locale]}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Foto de perfil */}
        <Reveal delay={120}>
          <Image
            src={profile.photo}
            alt={profile.shortName}
            width={400}
            height={400}
            priority
            className="border-card-border ring-accent/20 h-40 w-40 shrink-0 rounded-full border object-cover ring-4 sm:h-48 sm:w-48"
          />
        </Reveal>
      </div>
    </section>
  );
}
