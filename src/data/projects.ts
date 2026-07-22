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
  {
    name: "Diário de Classe",
    description: {
      "pt-BR":
        "Sistema full-stack de gestão para escola de idiomas: gera a grade de aulas a partir do contrato do aluno e acompanha presença, faltas e reposições em dashboard e relatórios.",
      en: "Full-stack management system for a language school: generates the class schedule from each student's contract and tracks attendance, absences and make-up classes via dashboard and reports.",
    },
    longDescription: {
      "pt-BR":
        "Sistema full-stack de gestão para escola de idiomas (BLS Idiomas). Gerencia alunos, professores, contratos e a agenda de aulas — a partir do contrato (dias da semana, horários, período e idioma) gera automaticamente toda a grade de aulas e acompanha o status de cada uma (agendada, concluída, cancelada, falta, reposição), consolidando tudo em dashboard e relatórios. Autenticação JWT (access + refresh) implementada com o módulo crypto nativo, controle de acesso por permissão (admin/professor), internacionalização PT/EN e importação de alunos via Excel/CSV. Arquitetura em monorepo com backend e frontend independentes (dois deploys separados).",
      en: "Full-stack management system for a language school (BLS Idiomas). It handles students, teachers, contracts and the class schedule — from each contract (weekdays, times, period and language) it automatically generates the whole class grid and tracks each class status (scheduled, completed, cancelled, absence, make-up), consolidating everything into a dashboard and reports. JWT auth (access + refresh) built with the native crypto module, role-based access control (admin/teacher), PT/EN internationalization and student import via Excel/CSV. Monorepo architecture with independent backend and frontend (two separate deploys).",
    },
    stack: [
      "Node.js",
      "Express 5",
      "Prisma ORM 6",
      "JWT (crypto/HMAC)",
      "Next.js 16",
      "React 19",
      "Redux Toolkit",
      "Tailwind CSS 4",
      "PWA",
      "PostgreSQL",
      "Jest",
      "Docker",
    ],
    liveUrl: "https://diario-de-classe-frontend.vercel.app/",
    // repoUrl: adicionar quando o repositório for público.
    // media: adicionar imagens/vídeos em /public/projects/diario-de-classe/ (na ordem desejada).
    media: [],
  },
];
