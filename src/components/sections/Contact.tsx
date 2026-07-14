"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { profile, whatsappUrl } from "@/data/profile";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  const { t } = useLocale();

  const links = [
    {
      label: t.contact.email,
      value: profile.contacts.email,
      href: `mailto:${profile.contacts.email}`,
    },
    {
      label: t.contact.whatsapp,
      value: profile.contacts.phoneDisplay,
      href: whatsappUrl(),
    },
    {
      label: t.contact.linkedin,
      value: "in/marcosmatosteodoro",
      href: profile.contacts.linkedin,
    },
    {
      label: t.contact.github,
      value: "marcosmatosteodoro",
      href: profile.contacts.github,
    },
  ];

  return (
    <Section id="contact" title={t.sections.contact}>
      <Reveal>
        <p className="text-muted mb-8 max-w-2xl">{t.contact.subtitle}</p>
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2">
        {links.map((link, i) => (
          <Reveal key={link.label} delay={i * 60}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="border-card-border bg-card hover:border-accent group flex items-center justify-between rounded-lg border p-5 transition-colors"
            >
              <span>
                <span className="text-muted block text-xs tracking-wide uppercase">
                  {link.label}
                </span>
                <span className="group-hover:text-accent font-medium transition-colors">
                  {link.value}
                </span>
              </span>
              <span
                className="text-muted group-hover:text-accent transition-colors"
                aria-hidden="true"
              >
                →
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
