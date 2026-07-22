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
  {
    name: "3D Real Estate Immersion",
    description: {
      "pt-BR":
        "Plataforma de imersão 3D para compra e venda de imóveis (MetaOriginal): orquestra web, mobile, um servidor 3D em tempo real (WebSocket + WebRTC) e apps de apresentação — white-label por cliente. Atuei como Tech Lead.",
      en: "3D immersion platform for real estate buying & selling (MetaOriginal): orchestrates web, mobile, a real-time 3D server (WebSocket + WebRTC) and presentation apps — white-labeled per client. I worked as Tech Lead.",
    },
    longDescription: {
      "pt-BR":
        "Plataforma de imersão 3D para compra e venda de imóveis desenvolvida na MetaOriginal, onde atuei como Tech Lead. Não tinha nome fixo: cada cliente recebia um app white-label com a própria marca. Era uma orquestração de várias aplicações em simultâneo: (1) Web — dashboard em Ruby on Rails (HTML, SCSS, jQuery, Bootstrap, PostgreSQL) que concentrava toda a regra de negócio (sessões, clientes, valores de imóveis, configurações 3D personalizadas) com permissões por papel (corretor, administrador, super-administrador) e envio de e-mails; (2) Mobile — app em Flutter para o corretor apresentar a experiência 3D, conectando-se ao back-end e ao 3D separadamente; (3) Servidor 3D — serviço WebSocket em Node.js que ligava/desligava o 3D, selecionava a cena e as configurações, autenticava com o back-end e estabelecia a conexão WebRTC; (4) Apresentação — app Electron (React + TypeScript) exclusivo para o CEO apresentar a experiência, comunicando-se com o WebSocket e exibindo o 3D com configurações de apresentação; (5) Landing page — página em PHP + WordPress para o cliente rever, de forma interativa e personalizada, as fotos da sua imersão 3D junto de mensagens do corretor. Infra na Digital Ocean (armazenamento de fotos/vídeos, CDN e servidores) com CI/CD robusto no GitHub. A aplicação foi descontinuada.",
      en: "3D immersion platform for real estate buying & selling built at MetaOriginal, where I worked as Tech Lead. It had no fixed name: each client got a white-label app under their own brand. It was an orchestration of several apps running together: (1) Web — a Ruby on Rails dashboard (HTML, SCSS, jQuery, Bootstrap, PostgreSQL) holding all business rules (sessions, clients, property values, custom 3D settings) with role-based permissions (broker, admin, super-admin) and email sending; (2) Mobile — a Flutter app for brokers to present the 3D experience, connecting to the back-end and the 3D separately; (3) 3D server — a Node.js WebSocket service that turned the 3D on/off, selected the scene and settings, authenticated with the back-end and established the WebRTC connection; (4) Presentation — a dedicated Electron app (React + TypeScript) for the CEO to present the experience, talking to the WebSocket and rendering the 3D with presentation settings; (5) Landing page — a PHP + WordPress page where the client could interactively review the photos from their 3D immersion along with the broker's messages. Infrastructure on Digital Ocean (photo/video storage, CDN and servers) with strong CI/CD on GitHub. The application has been discontinued.",
    },
    stack: [
      "Ruby on Rails",
      "PostgreSQL",
      "Node.js",
      "WebSocket",
      "WebRTC",
      "Flutter",
      "Electron",
      "React",
      "TypeScript",
      "PHP / WordPress",
      "Digital Ocean",
      "CI/CD",
    ],
    // Sem liveUrl/repoUrl: aplicação descontinuada e código proprietário do cliente.
    // media: adicionar imagens/vídeos em /public/projects/3d-real-estate-immersion/ (na ordem desejada).
    media: [],
  },
];
