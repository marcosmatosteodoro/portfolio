import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
};

/** Wrapper padrão de seção: âncora, título animado e espaçamento consistente. */
export function Section({ id, title, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`mx-auto max-w-5xl scroll-mt-20 px-4 py-16 sm:px-6 ${className}`}>
      <Reveal>
        <h2 className="mb-8 text-2xl font-bold tracking-tight sm:text-3xl">
          <span className="text-accent">#</span> {title}
        </h2>
      </Reveal>
      {children}
    </section>
  );
}
