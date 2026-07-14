"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { profile } from "@/data/profile";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  const { locale, t } = useLocale();

  return (
    <Section id="about" title={t.sections.about}>
      <div className="max-w-3xl space-y-4">
        {profile.bio[locale].map((paragraph, i) => (
          <Reveal key={i} delay={i * 80}>
            <p className="text-muted leading-relaxed">{paragraph}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
