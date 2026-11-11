import type { Locale } from "@/i18n/detectLocale";
import type { Localized } from "./profile";

export type Experience = {
  company: string;
  role: Localized;
  period: Localized;
  location: Localized;
  highlights: Record<Locale, string[]>;
};

/**
 * Experiências da mais recente para a mais antiga.
 * Bullets no padrão de currículo americano: verbo de ação + o que foi feito + resultado.
 * Fonte dos fatos: CV em /public/cv e planejamento/conteudo.md — não inventar números.
 */
export const experiences: Experience[] = [
  {
    company: "Auto Avaliar (via Tech For TI)",
    role: {
      "pt-BR": "Desenvolvedor Full-Stack Sênior",
      en: "Senior Full-Stack Developer",
    },
    period: {
      "pt-BR": "Set 2025 – atual",
      en: "Sep 2025 – Present",
    },
    location: { "pt-BR": "Remoto · Brasil", en: "Remote · Brazil" },
    highlights: {
      "pt-BR": [
        "Construo e mantenho sistemas críticos da principal plataforma B2B do mercado automotivo brasileiro, que conecta lojistas e empresas do setor na negociação de veículos, atuando com várias squads em ambiente de alta escala.",
        "Entrego funcionalidades full-stack com Node.js, TypeScript, React e PHP, incluindo APIs e integrações com serviços internos e externos.",
        "Mantenho os sistemas legados em PHP estáveis enquanto os melhoro aos poucos, garantindo a continuidade do negócio.",
        "Participo das decisões técnicas e da melhoria contínua da qualidade do código, com foco em segurança, performance e escalabilidade.",
      ],
      en: [
        "Build and maintain business-critical systems for Brazil's leading B2B automotive platform, which connects dealerships and industry players in vehicle trading, working across multiple squads in a high-scale environment.",
        "Ship full-stack features with Node.js, TypeScript, React and PHP, including APIs and integrations with internal and external services.",
        "Keep legacy PHP systems stable while improving them incrementally, protecting business continuity.",
        "Contribute to technical decisions and continuous code-quality improvements, with a strong focus on security, performance and scalability.",
      ],
    },
  },
  {
    company: "MetaOriginal",
    role: {
      "pt-BR": "Desenvolvedor Full-Stack & Tech Lead",
      en: "Full-Stack Developer & Tech Lead",
    },
    period: {
      "pt-BR": "Nov 2022 – Set 2025",
      en: "Nov 2022 – Sep 2025",
    },
    location: {
      "pt-BR": "Remoto · Miami, EUA (empresa americana)",
      en: "Remote · Miami, FL (US company)",
    },
    highlights: {
      "pt-BR": [
        "Promovido a Tech Lead em um ano; liderei os times de front-end, back-end, mobile, QA e integração 3D e fui responsável pelo ciclo completo, da arquitetura ao deploy.",
        "Construí uma plataforma de reuniões em tempo real (estilo Google Meet) com streaming 3D em 4K usando Node.js, TypeScript, React e Next.js, integrando OAuth, PubNub (chat e vídeo) e Dolby (áudio premium).",
        "Reduzi o custo de manutenção do app mobile ao substituir o app em Flutter por um app em WebView (Ruby + React).",
        "Redesenhei o front-end principal (Ruby, Hotwire Turbo, Stimulus), melhorando usabilidade e performance sem reescrever a stack, com testes em Jest para evitar regressões.",
        "Construí um sistema multiplataforma para corretores de imóveis: API em Ruby (RSpec), app mobile em Flutter, app desktop em Electron (React/TypeScript) e Firebase para sincronização em tempo real.",
        "Defini os padrões de engenharia do time: testes unitários e de integração em 100% dos projetos, pipelines de CI/CD no GitHub com GitFlow, code review e guias de código para React, TypeScript e Ruby.",
      ],
      en: [
        "Promoted to Tech Lead within a year; led the front-end, back-end, mobile, QA and 3D integration teams and owned the full cycle, from architecture to deployment.",
        "Built a real-time meeting platform (Google Meet style) with 4K 3D streaming using Node.js, TypeScript, React and Next.js, integrating OAuth, PubNub (chat and video) and Dolby (premium audio).",
        "Cut mobile maintenance costs by replacing the Flutter app with a WebView-based app (Ruby + React).",
        "Redesigned the main front-end (Ruby, Hotwire Turbo, Stimulus) for better usability and performance without a stack rewrite, adding Jest tests to prevent regressions.",
        "Built a multi-platform system for real estate agents: a Ruby API (RSpec), a Flutter mobile app, an Electron desktop app (React/TypeScript) and Firebase for real-time sync.",
        "Set the team's engineering standards: unit and integration tests on 100% of projects, CI/CD pipelines on GitHub with GitFlow, code reviews and coding guidelines for React, TypeScript and Ruby.",
      ],
    },
  },
  {
    company: "EWIGE",
    role: {
      "pt-BR": "Desenvolvedor Full-Stack (PHP)",
      en: "Full-Stack Developer (PHP)",
    },
    period: {
      "pt-BR": "Fev 2022 – Set 2023",
      en: "Feb 2022 – Sep 2023",
    },
    location: { "pt-BR": "Remoto · Brasil", en: "Remote · Brazil" },
    highlights: {
      "pt-BR": [
        "Desenvolvi e dei suporte a plataformas de ensino a distância em Moodle (PHP) para instituições como Universidade Metodista, FGV e Polícia Militar de São Paulo (PM-SP).",
        "Construí APIs e interfaces modernas em um projeto Laravel + React/Next.js e um sistema de cadastro para aviação em PHP puro.",
        "Criei pipelines automatizados de ETL, procedures e views para relatórios na escala de terabytes em MySQL, SQL Server, PostgreSQL e MariaDB.",
        "Implementei autenticação por reconhecimento facial com Azure Cognitive Services (captura em JavaScript e integração em PHP via API).",
      ],
      en: [
        "Developed and supported Moodle (PHP) e-learning platforms for institutions such as Universidade Metodista, FGV and the São Paulo Military Police (PM-SP).",
        "Built APIs and modern interfaces in a Laravel + React/Next.js project, plus an aviation registration system in plain PHP.",
        "Built automated ETL pipelines, stored procedures and views for terabyte-scale reports across MySQL, SQL Server, PostgreSQL and MariaDB.",
        "Implemented facial-recognition authentication with Azure Cognitive Services (JavaScript image capture and PHP integration via API).",
      ],
    },
  },
  {
    company: "Polisystem",
    role: {
      "pt-BR": "Estagiário de Suporte Técnico",
      en: "Technical Support Intern",
    },
    period: {
      "pt-BR": "Dez 2021 – Fev 2022",
      en: "Dec 2021 – Feb 2022",
    },
    location: { "pt-BR": "Salvador, BA", en: "Salvador, Brazil" },
    highlights: {
      "pt-BR": [
        "Dei suporte especializado a um sistema corporativo em .NET, analisando e resolvendo problemas em produção.",
        "Concluí um treinamento intensivo de desenvolvimento em .NET para migrar para a engenharia de software.",
      ],
      en: [
        "Provided specialized support for a corporate .NET system, analyzing and resolving production issues.",
        "Completed intensive .NET development training to move into software engineering.",
      ],
    },
  },
];
