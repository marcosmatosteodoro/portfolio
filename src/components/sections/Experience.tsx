"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { experiences } from "@/data/experiences";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  const { locale, t } = useLocale();

  return (
    <Section id="experience" title={t.sections.experience}>
      <ol className="border-card-border relative space-y-8 border-l pl-6">
        {experiences.map((exp, i) => (
          <Reveal key={exp.company} delay={i * 80}>
            <li className="relative">
              {/* marcador na timeline */}
              <span className="bg-accent absolute top-1.5 -left-[1.65rem] h-3 w-3 rounded-full ring-4 ring-[var(--background)]" />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold">{exp.role[locale]}</h3>
                <span className="text-muted font-mono text-xs">{exp.period[locale]}</span>
              </div>
              <p className="text-accent text-sm font-medium">
                {exp.company}
                <span className="text-muted"> · {exp.location[locale]}</span>
              </p>
              <ul className="text-muted mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed">
                {exp.highlights[locale].map((h, j) => (
                  <li key={j}>{h}</li>
                ))}
              </ul>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
