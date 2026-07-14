import type { Locale } from "@/i18n/detectLocale";

/** Texto que muda conforme o idioma ativo. */
export type Localized = Record<Locale, string>;

export const profile = {
  name: "Marcos Paulo Matos Teodoro",
  shortName: "Marcos Teodoro",
  initials: "MT",
  /** Foto de perfil em /public. */
  photo: "/profile.jpeg",

  role: {
    "pt-BR": "Engenheiro de Software Full-Stack Sênior",
    en: "Senior Full-Stack Software Engineer",
  } satisfies Localized,

  tagline: {
    "pt-BR":
      "Construo aplicações web escaláveis com Node.js, TypeScript, React e cloud. Filosofia “less is more”: soluções simples, sustentáveis e bem estruturadas.",
    en: "I build scalable web applications with Node.js, TypeScript, React and cloud. “Less is more” philosophy: simple, maintainable and well-structured solutions.",
  } satisfies Localized,

  location: {
    "pt-BR": "Remoto · Brasil",
    en: "Remote · Brazil",
  } satisfies Localized,

  /** Estatísticas exibidas no Hero. */
  stats: [
    {
      value: "4+",
      label: { "pt-BR": "anos de experiência", en: "years of experience" },
    },
    {
      value: "4",
      label: { "pt-BR": "empresas", en: "companies" },
    },
    {
      value: "40+",
      label: { "pt-BR": "tecnologias", en: "technologies" },
    },
  ] satisfies { value: string; label: Localized }[],

  /** Bio em parágrafos (usada na seção Sobre). */
  bio: {
    "pt-BR": [
      "Engenheiro de Software Full-Stack Sênior com mais de 4 anos de experiência projetando e construindo aplicações web escaláveis com Node.js, TypeScript, React, Python, PostgreSQL e tecnologias cloud.",
      "Experiência em integrações de IA (LLMs), APIs REST, sistemas distribuídos, autenticação, gateways de pagamento e pipelines de CI/CD. Já atuei como líder técnico, coordenando times de front-end, back-end, mobile e QA sem abrir mão do trabalho hands-on.",
      "Apaixonado por arquitetura de software, clean code e performance. Busco oportunidades remotas com times internacionais onde eu possa construir software de alto impacto.",
    ],
    en: [
      "Senior Full-Stack Software Engineer with 4+ years of experience designing and building scalable web applications using Node.js, TypeScript, React, Python, PostgreSQL and cloud technologies.",
      "Experienced in AI integrations (LLMs), REST APIs, distributed systems, authentication, payment gateways and CI/CD pipelines. I've worked as a technical lead, coordinating front-end, back-end, mobile and QA teams while staying hands-on.",
      "Passionate about software architecture, clean code and performance. Seeking remote opportunities with international teams where I can build high-impact software.",
    ],
  } satisfies Record<Locale, string[]>,

  contacts: {
    email: "marcosmatosteodoro@gmail.com",
    /** Número exibido ao usuário. */
    phoneDisplay: "+55 71 99262-1121",
    /** Número só com dígitos (formato exigido pelo link do WhatsApp). */
    whatsapp: "5571992621121",
    linkedin: "https://www.linkedin.com/in/marcosmatosteodoro/",
    github: "https://github.com/marcosmatosteodoro",
  },

  /** Caminhos dos CVs em PDF (placeholders — substituir depois). */
  cv: {
    "pt-BR": "/cv/marcos-teodoro-pt.pdf",
    en: "/cv/marcos-teodoro-en.pdf",
  } satisfies Localized,
} as const;

/** Monta o link do WhatsApp a partir do número em dígitos. */
export function whatsappUrl(): string {
  return `https://wa.me/${profile.contacts.whatsapp}`;
}
