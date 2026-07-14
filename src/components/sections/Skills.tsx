"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { skillGroups } from "@/data/skills";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Skills() {
  const { locale, t } = useLocale();

  return (
    <Section id="skills" title={t.sections.skills}>
      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.category.en} delay={i * 60}>
            <div className="border-card-border bg-card h-full rounded-lg border p-5">
              <h3 className="text-accent mb-3 text-sm font-semibold tracking-wide uppercase">
                {group.category[locale]}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-card-border text-foreground/90 rounded-full border px-3 py-1 text-xs font-medium"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
