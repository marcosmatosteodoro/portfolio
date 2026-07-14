"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { profile, whatsappUrl } from "@/data/profile";

export function Footer() {
  const { t } = useLocale();
  const year = 2026;

  const links = [
    { label: "LinkedIn", href: profile.contacts.linkedin },
    { label: "GitHub", href: profile.contacts.github },
    { label: t.contact.email, href: `mailto:${profile.contacts.email}` },
    { label: t.contact.whatsapp, href: whatsappUrl() },
  ];

  return (
    <footer className="border-card-border border-t">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 py-8 sm:px-6 md:flex-row md:justify-between">
        <p className="text-muted text-sm">
          © {year} {profile.shortName}. {t.footer.rights}
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-4">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent text-sm transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-muted/70 pb-6 text-center text-xs">{t.footer.builtWith}</p>
    </footer>
  );
}
