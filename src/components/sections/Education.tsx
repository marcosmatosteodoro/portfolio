"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { certifications, courses, degree, languages } from "@/data/education";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Education() {
  const { locale, t } = useLocale();

  return (
    <Section id="education" title={t.sections.education}>
      <div className="grid gap-6 md:grid-cols-2">
        {/* Graduação */}
        <Reveal>
          <div className="border-card-border bg-card h-full rounded-lg border p-5">
            <h3 className="text-accent mb-3 text-sm font-semibold tracking-wide uppercase">
              {t.education.degree}
            </h3>
            <p className="font-semibold">{degree.title[locale]}</p>
            <p className="text-muted text-sm">{degree.institution}</p>
            <p className="text-muted font-mono text-xs">{degree.period}</p>
            <p className="text-muted mt-3 text-sm leading-relaxed">{degree.details[locale]}</p>
          </div>
        </Reveal>

        {/* Certificações */}
        <Reveal delay={80}>
          <div className="border-card-border bg-card h-full rounded-lg border p-5">
            <h3 className="text-accent mb-3 text-sm font-semibold tracking-wide uppercase">
              {t.education.certifications}
            </h3>
            <ul className="space-y-3">
              {certifications.map((cert) => (
                <li key={cert.name}>
                  <p className="font-semibold">{cert.name}</p>
                  <p className="text-muted text-sm">{cert.issuer}</p>
                  <p className="text-muted text-xs">
                    {t.education.issued} {cert.issued[locale]}
                    {cert.credentialId && ` · ${t.education.credential}: ${cert.credentialId}`}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Cursos */}
        <Reveal delay={160}>
          <div className="border-card-border bg-card h-full rounded-lg border p-5">
            <h3 className="text-accent mb-3 text-sm font-semibold tracking-wide uppercase">
              {t.education.courses}
            </h3>
            <ul className="text-muted list-disc space-y-1.5 pl-5 text-sm">
              {courses.map((course) => (
                <li key={course.en}>{course[locale]}</li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Idiomas */}
        <Reveal delay={240}>
          <div className="border-card-border bg-card h-full rounded-lg border p-5">
            <h3 className="text-accent mb-3 text-sm font-semibold tracking-wide uppercase">
              {t.education.languages}
            </h3>
            <ul className="space-y-2">
              {languages.map((lang) => (
                <li key={lang.name.en} className="flex items-baseline justify-between">
                  <span className="font-medium">{lang.name[locale]}</span>
                  <span className="text-muted text-sm">{lang.level[locale]}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
