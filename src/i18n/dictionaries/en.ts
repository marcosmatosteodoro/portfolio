export const en = {
  nav: {
    skills: "Skills",
    experience: "Experience",
    projects: "Projects",
    education: "Education",
    contact: "Contact",
  },
  hero: {
    greeting: "Hi, I'm",
    ctaProjects: "View projects",
    ctaContact: "Get in touch",
    downloadCv: "Download resume",
  },
  sections: {
    skills: "Skills",
    experience: "Experience",
    projects: "Projects",
    education: "Education & Certifications",
    contact: "Contact",
  },
  experience: {
    present: "Present",
    highlights: "Highlights",
  },
  education: {
    degree: "Degree",
    certifications: "Certifications",
    courses: "Relevant courses",
    languages: "Languages",
    issued: "Issued",
    credential: "Credential ID",
  },
  projects: {
    placeholder: "Selected projects are coming soon.",
    viewImages: "View images",
    gallery: {
      close: "Close",
      previous: "Previous image",
      next: "Next image",
      counter: "{current} of {total}",
    },
  },
  contact: {
    subtitle:
      "Open to remote full-time roles with US and international teams. The fastest way to reach me is email.",
    email: "Email",
    whatsapp: "WhatsApp",
    linkedin: "LinkedIn",
    github: "GitHub",
  },
  a11y: {
    toggleTheme: "Toggle light/dark theme",
    toggleLocale: "Switch language",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    backToTop: "Back to top",
  },
  footer: {
    builtWith: "Built with Next.js, TypeScript & Tailwind CSS.",
    rights: "All rights reserved.",
  },
};

/** Formato do dicionário — valores como `string` para permitir a tradução pt-BR. */
export type Dictionary = typeof en;
