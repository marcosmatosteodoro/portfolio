import type { Locale } from "@/i18n/detectLocale";
import type { Localized } from "./profile";

export type Experience = {
  company: string;
  role: Localized;
  period: Localized;
  location: Localized;
  highlights: Record<Locale, string[]>;
};

/** Experiências da mais recente para a mais antiga. */
export const experiences: Experience[] = [
  {
    company: "Tech For TI · Auto Avaliar",
    role: {
      "pt-BR": "Desenvolvedor Full Stack Sênior",
      en: "Senior Full Stack Developer",
    },
    period: {
      "pt-BR": "Set/2025 — Atual",
      en: "Sep/2025 — Present",
    },
    location: { "pt-BR": "Remoto", en: "Remote" },
    highlights: {
      "pt-BR": [
        "Alocado no cliente Auto Avaliar, plataforma B2B líder no mercado automotivo brasileiro, em ambiente de alta escala com múltiplos times.",
        "Desenvolvimento fullstack com Node.js, TypeScript, React e PHP.",
        "Manutenção de sistemas legados em PHP, garantindo estabilidade e continuidade do negócio.",
        "Aplicação de princípios de engenharia de software (SOLID, DRY e Design Patterns).",
        "Forte foco em segurança, performance e escalabilidade; participação ativa em decisões técnicas.",
      ],
      en: [
        "Allocated to the client Auto Avaliar, a leading B2B platform in Brazil's automotive market, in a high-scale, multi-team environment.",
        "Fullstack development using Node.js, TypeScript, React and PHP.",
        "Maintenance of legacy PHP systems, ensuring stability and business continuity.",
        "Application of software engineering principles (SOLID, DRY and Design Patterns).",
        "Strong focus on security, performance and scalability; active participation in technical decisions.",
      ],
    },
  },
  {
    company: "MetaOriginal",
    role: {
      "pt-BR": "Desenvolvedor Full Stack & Tech Lead",
      en: "Full Stack Developer & Technical Lead",
    },
    period: {
      "pt-BR": "Nov/2022 — Set/2025",
      en: "Nov/2022 — Sep/2025",
    },
    location: { "pt-BR": "Remoto (Miami, EUA)", en: "Remote (Miami, USA)" },
    highlights: {
      "pt-BR": [
        "Promovido a Tech Lead em 1 ano, liderando times de front-end, back-end, mobile, QA e integração 3D.",
        "Redesign completo do front-end principal (Ruby + Hotwire Turbo + Stimulus) sem trocar a stack legada.",
        "Plataforma de reunião em tempo real (estilo Google Meet) com streaming 3D 4K — Node.js, TypeScript, React, Next.js, OAuth, PubNub e Dolby.",
        "Sistema para corretores: back-end Ruby (RSpec) + Flutter (mobile) + Electron (desktop React/TS) + Firebase.",
        "Cultura de testes: unit/integração em 100% dos projetos (Jest, RSpec, E2E). CI/CD no GitHub com GitFlow (Digital Ocean + Linode).",
      ],
      en: [
        "Promoted to Tech Lead in 1 year, leading front-end, back-end, mobile, QA and 3D integration teams.",
        "Complete redesign of the main front-end (Ruby + Hotwire Turbo + Stimulus) without changing the legacy stack.",
        "Real-time meeting platform (Google Meet style) with 4K 3D streaming — Node.js, TypeScript, React, Next.js, OAuth, PubNub and Dolby.",
        "Real estate agents system: Ruby back-end (RSpec) + Flutter (mobile) + Electron (desktop React/TS) + Firebase.",
        "Testing culture: unit/integration in 100% of projects (Jest, RSpec, E2E). CI/CD on GitHub with GitFlow (Digital Ocean + Linode).",
      ],
    },
  },
  {
    company: "EWIGE",
    role: {
      "pt-BR": "Desenvolvedor Web Full Stack PHP",
      en: "PHP Full Stack Web Developer",
    },
    period: {
      "pt-BR": "Fev/2022 — Set/2023",
      en: "Feb/2022 — Sep/2023",
    },
    location: { "pt-BR": "Remoto", en: "Remote" },
    highlights: {
      "pt-BR": [
        "Plataformas EAD em Moodle (PHP) para instituições como Universidade Metodista, FGV e PM-SP.",
        "Projeto Laravel + React/Next.js: construção de APIs e interfaces modernas; sistema de aviação em PHP puro.",
        "Gestão de bancos MySQL, SQL Server, PostgreSQL e MariaDB; pipelines de ETL e relatórios de grande volume (TB+).",
        "Reconhecimento facial via Azure Cognitive Services (JavaScript + PHP + API). Versionamento com Git e Docker.",
      ],
      en: [
        "Moodle (PHP) distance-learning platforms for institutions such as Universidade Metodista, FGV and PM-SP.",
        "Laravel + React/Next.js project: building modern APIs and interfaces; aviation system in pure PHP.",
        "Management of MySQL, SQL Server, PostgreSQL and MariaDB databases; ETL pipelines and large-volume (TB+) reports.",
        "Facial recognition via Azure Cognitive Services (JavaScript + PHP + API). Version control with Git and Docker.",
      ],
    },
  },
  {
    company: "Polisystem",
    role: {
      "pt-BR": "Suporte Técnico (Estágio)",
      en: "Technical Support (Internship)",
    },
    period: {
      "pt-BR": "Dez/2021 — Fev/2022",
      en: "Dec/2021 — Feb/2022",
    },
    location: { "pt-BR": "Salvador, BA", en: "Salvador, Brazil" },
    highlights: {
      "pt-BR": [
        "Suporte técnico especializado para sistema corporativo em .NET.",
        "Análise e resolução de problemas em produção.",
        "Treinamento intensivo em .NET para transição para a área de programação.",
      ],
      en: [
        "Specialized technical support for a corporate .NET system.",
        "Analysis and resolution of production issues.",
        "Intensive .NET training for transition into development.",
      ],
    },
  },
];
