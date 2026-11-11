"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { projects } from "@/data/projects";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectGallery } from "@/components/ui/ProjectGallery";

export function Projects() {
  const { locale, t } = useLocale();

  return (
    <Section id="projects" title={t.sections.projects}>
      {projects.length === 0 ? (
        <Reveal>
          <div className="border-card-border text-muted rounded-lg border border-dashed p-8 text-center text-sm">
            {t.projects.placeholder}
          </div>
        </Reveal>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 60}>
              <article className="border-card-border bg-card flex h-full flex-col rounded-lg border p-5">
                <h3 className="text-lg font-semibold">{project.name}</h3>
                <p className="text-muted mt-2 flex-1 text-sm leading-relaxed">
                  {project.description[locale]}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="border-card-border rounded-full border px-2.5 py-0.5 text-xs"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                {project.media && project.media.length > 0 && (
                  <div className="mt-4 flex gap-4 text-sm font-medium">
                    <ProjectGallery projectName={project.name} media={project.media} />
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      )}
    </Section>
  );
}
