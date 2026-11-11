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

  /** Frase de abertura do Hero: quem sou + o que entrego + com o quê (substitui a antiga seção Sobre). */
  tagline: {
    "pt-BR":
      "Ex-Tech Lead que entrega produtos web e com IA de ponta a ponta — do banco de dados à interface — com Node.js, TypeScript, React e PostgreSQL. Prefiro o simples: arquitetura limpa, testes automatizados e código fácil de mudar.",
    en: "Former Tech Lead who ships web and AI-powered products end to end — from database to UI — with Node.js, TypeScript, React and PostgreSQL. I keep things simple: clean architecture, automated tests and code that's easy to change.",
  } satisfies Localized,

  /** Recrutador de fora filtra por fuso: o Brasil (UTC−3) cobre o horário comercial dos EUA. */
  location: {
    "pt-BR": "Remoto · Brasil (UTC−3) · horário compatível com os EUA",
    en: "Remote · Brazil (UTC−3) · overlaps with US business hours",
  } satisfies Localized,

  /** Estatísticas exibidas no Hero — só fatos do CV, sem número inventado. */
  stats: [
    {
      value: "4+",
      label: { "pt-BR": "anos em software de produção", en: "years shipping production software" },
    },
    {
      value: "5",
      label: { "pt-BR": "times liderados como Tech Lead", en: "teams led as Tech Lead" },
    },
    {
      value: "~3",
      label: {
        "pt-BR": "anos remoto em empresa americana",
        en: "years remote at a US company",
      },
    },
  ] satisfies { value: string; label: Localized }[],

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
