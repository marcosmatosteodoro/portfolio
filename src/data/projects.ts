import type { Localized } from "./profile";

/** Uma mídia do projeto (exibida na ordem do array `media`). */
export type ProjectMedia = {
  type: "image" | "video";
  /** Caminho em /public. Ex.: "/projects/life-manager/01-dashboard.png". */
  src: string;
  /** Legenda / texto alternativo (opcional, bilíngue). */
  alt?: Localized;
};

export type Project = {
  name: string;
  /** Descrição curta, usada no card. */
  description: Localized;
  /** Descrição completa, para uma visão de detalhe futura (opcional). */
  longDescription?: Localized;
  stack: string[];
  /** URL do repositório (opcional). */
  repoUrl?: string;
  /** URL do deploy/demo (opcional). */
  liveUrl?: string;
  /**
   * Mídias (imagens/vídeos) exibidas na ordem deste array.
   * Coloque os arquivos em /public/projects/<slug>/ e referencie aqui.
   * Deixe vazio enquanto não houver mídia a exibir.
   */
  media?: ProjectMedia[];
};

export const projects: Project[] = [
  {
    name: "Life Manager",
    description: {
      "pt-BR":
        "Painel pessoal full-stack para organizar saúde, estudos, hábitos e busca de emprego — com recursos de IA.",
      en: "A full-stack personal dashboard to organize health, studies, habits and job hunting — powered by AI.",
    },
    longDescription: {
      "pt-BR":
        "Aplicação web (PWA) full-stack de gestão pessoal que reúne, num só lugar, controle de peso e IMC, estudo de inglês com correção de textos por IA, flashcards com 3 modos de estudo, afazeres recorrentes, diário, conversores e acompanhamento de candidaturas a vagas — incluindo um buscador de vagas remotas e feedback do seu progresso gerado por IA.",
      en: "A full-stack personal management web app (PWA) that brings together weight & BMI tracking, English study with AI-powered text correction, flashcards with 3 study modes, recurring to-dos, journaling, converters, and job-application tracking — including a remote-job search engine and AI-generated feedback on your progress.",
    },
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Zustand",
      "Tailwind CSS 4",
      "PWA",
      "NestJS 11",
      "TypeORM",
      "PostgreSQL 16",
      "JWT",
      "OpenAI",
      "Jest",
    ],
    liveUrl: "https://life-manager-app-six.vercel.app",
    // repoUrl: adicionar quando o repositório for público.
    // media: adicionar imagens/vídeos em /public/projects/life-manager/ (na ordem desejada).
    media: [],
  },
];
