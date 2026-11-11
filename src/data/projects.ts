import type { Localized } from "./profile";

/** Uma mídia do projeto (exibida na ordem do array `media`). */
export type ProjectMedia = {
  type: "image" | "video";
  /** Caminho em /public. Ex.: "/projects/life-manager/01-dashboard.png". */
  src: string;
  /** Dimensões originais em px (usadas para reservar espaço e otimizar a imagem). */
  width: number;
  height: number;
  /** Legenda / texto alternativo (bilíngue). */
  alt: Localized;
};

export type Project = {
  name: string;
  /** Descrição curta, usada no card. */
  description: Localized;
  /** Descrição completa, para uma visão de detalhe futura (opcional). */
  longDescription?: Localized;
  stack: string[];
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
        "Painel pessoal full-stack para organizar saúde, estudos, finanças, cães, hábitos e busca de emprego — com recursos de IA.",
      en: "A full-stack personal dashboard to organize health, studies, finances, dogs, habits and job hunting — powered by AI.",
    },
    longDescription: {
      "pt-BR":
        "Aplicação web (PWA) full-stack de gestão pessoal que reúne, num só lugar: controle de peso e IMC; estudo de inglês com correção de textos por IA e flashcards (com imagens) em 3 modos de estudo; finanças com gastos (foto do comprovante pela câmera, parcelas e análise por IA), gastos fixos e dívidas com controle de pagamentos; cuidado com os cães (passeios com locais, peso e painel); afazeres recorrentes, backlog e registro de problemas com gravação de áudio, prioridade e categorias; diário, diário de gratidão, pomodoro, cronômetro e conversores; e acompanhamento de candidaturas a vagas, com buscador de vagas remotas, conselheiro por IA e feedback do seu progresso. Inclui gestão de usuários com perfil de administrador, editor de tema com pré-visualização e limite de requisições nos endpoints de IA.",
      en: "A full-stack personal management web app (PWA) that brings together: weight & BMI tracking; English study with AI-powered text correction and flashcards (with images) in 3 study modes; finances with expenses (receipt photo from the camera, installments and AI analysis), fixed expenses and debts with payment tracking; dog care (walks with locations, weight and a dashboard); recurring to-dos, a backlog and a problem log with audio recording, priorities and categories; journaling, a gratitude journal, pomodoro, stopwatch and converters; and job-application tracking, with a remote-job search engine, an AI advisor and AI-generated feedback on your progress. It also has user management with an admin role, a theme editor with live preview, and rate limiting on the AI endpoints.",
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
      "Vercel Blob",
      "Jest",
    ],
    // Prints tirados de um ambiente local com dados fictícios (nenhum dado pessoal).
    media: [
      {
        type: "image",
        src: "/projects/life-manager/01-pagina-inicial.png",
        width: 1440,
        height: 900,
        alt: {
          "pt-BR": "Página inicial com visão geral e pendências do dia",
          en: "Home page with an overview and today's tasks",
        },
      },
      {
        type: "image",
        src: "/projects/life-manager/02-pagina-inicial-tema-escuro.png",
        width: 1440,
        height: 900,
        alt: { "pt-BR": "Página inicial no tema escuro", en: "Home page in dark theme" },
      },
      {
        type: "image",
        src: "/projects/life-manager/03-artigos-correcao-por-ia.png",
        width: 1440,
        height: 900,
        alt: {
          "pt-BR": "Artigos de inglês com o resumo corrigido pela IA e nota",
          en: "English articles with the AI-corrected summary and score",
        },
      },
      {
        type: "image",
        src: "/projects/life-manager/04-flashcards-combinacao.png",
        width: 1440,
        height: 900,
        alt: {
          "pt-BR": "Flashcards no modo Combinação (jogo de pares)",
          en: "Flashcards in Match mode (pairs game)",
        },
      },
      {
        type: "image",
        src: "/projects/life-manager/05-peso-e-imc.png",
        width: 1440,
        height: 900,
        alt: {
          "pt-BR": "Controle de peso com IMC e faixa saudável",
          en: "Weight tracking with BMI and healthy range",
        },
      },
      {
        type: "image",
        src: "/projects/life-manager/06-gastos.png",
        width: 1440,
        height: 900,
        alt: {
          "pt-BR": "Gastos do mês por categoria",
          en: "Monthly expenses by category",
        },
      },
      {
        type: "image",
        src: "/projects/life-manager/07-painel-dos-caes.png",
        width: 1440,
        height: 900,
        alt: {
          "pt-BR": "Painel dos cães com passeios e peso",
          en: "Dogs dashboard with walks and weight",
        },
      },
      {
        type: "image",
        src: "/projects/life-manager/08-candidaturas.png",
        width: 1440,
        height: 900,
        alt: {
          "pt-BR": "Candidaturas a vagas com status",
          en: "Job applications with status",
        },
      },
      {
        type: "image",
        src: "/projects/life-manager/09-problemas.png",
        width: 1440,
        height: 900,
        alt: {
          "pt-BR": "Problemas a resolver com prioridade e categoria",
          en: "Problems to solve with priority and category",
        },
      },
    ],
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
    media: [
      {
        type: "image",
        src: "/projects/diario-de-classe/01-login.png",
        width: 1440,
        height: 900,
        alt: { "pt-BR": "Tela de login", en: "Login screen" },
      },
      {
        type: "image",
        src: "/projects/diario-de-classe/02-painel.png",
        width: 1440,
        height: 900,
        alt: {
          "pt-BR": "Painel com totais e filtros de aulas",
          en: "Dashboard with totals and class filters",
        },
      },
      {
        type: "image",
        src: "/projects/diario-de-classe/03-alunos.png",
        width: 1440,
        height: 900,
        alt: { "pt-BR": "Lista de alunos", en: "Student list" },
      },
      {
        type: "image",
        src: "/projects/diario-de-classe/04-aulas.png",
        width: 1440,
        height: 900,
        alt: { "pt-BR": "Lista de aulas com filtros", en: "Class list with filters" },
      },
      {
        type: "image",
        src: "/projects/diario-de-classe/05-contratos.png",
        width: 1440,
        height: 900,
        alt: { "pt-BR": "Lista de contratos com filtros", en: "Contract list with filters" },
      },
      {
        type: "image",
        src: "/projects/diario-de-classe/06-professores.png",
        width: 1440,
        height: 900,
        alt: {
          "pt-BR": "Lista de professores com permissões",
          en: "Teacher list with permissions",
        },
      },
    ],
  },
  {
    name: "Mnemônicos",
    description: {
      "pt-BR":
        "Ferramenta full-stack de produção de material mnemônico para concursos: transforma texto de lei em Tiras mnemônicas e exporta PDFs com protocolo de revisão espaçada, prontos para venda em marketplace.",
      en: "Full-stack tool for producing mnemonic study material for public-service exams: turns legal text into mnemonic strips and exports PDFs with a spaced-repetition protocol, ready to sell on marketplaces.",
    },
    longDescription: {
      "pt-BR":
        "Projeto Material Mnemônico de Alta Retenção para Concursos, cujo objetivo é converter reconhecimento (achar familiar) em evocação (lembrar sem a dica). Editores registram o trecho exato de uma lei, súmula ou ato com disciplina, tema, fonte normativa e a classe do radar de prova (o quanto o assunto cai), quebram a regra em partes, montam a Tira mnemônica, completam o reforço e exportam o PDF com o protocolo de revisão espaçada impresso (R0, R24, R3, R7, R14 e R30). Cada material tem versões que o administrador aprova, e os PDFs prontos ficam num acervo e são reunidos em pacotes exportados para venda em marketplace. Controle de acesso por papel (editor vê só o que criou; administrador vê tudo e cuida das contas), biblioteca visual e tema claro/escuro. Duas aplicações independentes, cada uma com repositório e deploy próprios na Vercel: front em Next.js consumindo a API por RTK Query e API REST em Express + Prisma.",
      en: "A high-retention mnemonic study material project for public-service exams, whose goal is to turn recognition (finding something familiar) into recall (remembering it without the cue). Editors register the exact excerpt of a law, precedent or act with subject, topic, legal source and an exam-radar class (how often it shows up), break the rule into parts, build the mnemonic strip, complete the reinforcement and export a PDF with a printed spaced-repetition protocol (R0, R24, R3, R7, R14 and R30). Each material has versions approved by an admin, and finished PDFs go into a library and are bundled into packages exported for sale on marketplaces. Role-based access (editors see only their own content; admins see everything and manage accounts), a visual library and light/dark theme. Two independent apps, each with its own repository and Vercel deploy: a Next.js front end consuming the API through RTK Query and an Express + Prisma REST API.",
    },
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Redux Toolkit (RTK Query)",
      "Tailwind CSS 4",
      "PWA",
      "Node.js 22",
      "Express 5",
      "Prisma 7",
      "PostgreSQL",
      "Zod",
      "Jest",
    ],
    media: [
      {
        type: "image",
        src: "/projects/mnemonicos/01-pagina-inicial.png",
        width: 1440,
        height: 900,
        alt: {
          "pt-BR": "Página inicial com as técnicas do acervo",
          en: "Home page with the library's techniques",
        },
      },
      {
        type: "image",
        src: "/projects/mnemonicos/02-painel.png",
        width: 1440,
        height: 900,
        alt: {
          "pt-BR": "Painel estratégico com tempo por etapa e conclusão por módulo",
          en: "Strategic dashboard with time per stage and completion by module",
        },
      },
      {
        type: "image",
        src: "/projects/mnemonicos/03-conteudos.png",
        width: 1440,
        height: 900,
        alt: { "pt-BR": "Lista de conteúdos brutos", en: "Raw content list" },
      },
      {
        type: "image",
        src: "/projects/mnemonicos/04-detalhe-do-conteudo.png",
        width: 1440,
        height: 900,
        alt: {
          "pt-BR": "Detalhe do conteúdo com fonte normativa e exportações",
          en: "Content detail with legal source and exports",
        },
      },
      {
        type: "image",
        src: "/projects/mnemonicos/05-quebra-da-regra.png",
        width: 1440,
        height: 900,
        alt: {
          "pt-BR": "Quebra da regra em conceito, ação, objeto, condição e exceção",
          en: "Rule breakdown into concept, action, object, condition and exception",
        },
      },
    ],
  },
  {
    name: "Carnes & Cia",
    description: {
      "pt-BR":
        "PWA de previsão de vendas para um açougue: mostra as vendas do mês, prevê os próximos 12 meses a partir do histórico e tem um chat com IA que responde sobre os números.",
      en: "Sales-forecasting PWA for a butcher shop: shows the month's sales, forecasts the next 12 months from historical data and includes an AI chat that answers questions about the numbers.",
    },
    longDescription: {
      "pt-BR":
        "Aplicativo (PWA para celular) feito para o açougue Carnes & Cia. A tela inicial mostra o vendido no mês até ontem comparado ao mesmo período do ano anterior, a previsão do mês atual e do próximo e os cortes que mais venderam. A tela de previsão permite escolher mês, produto e medida (R$ ou kg) e exibe o mesmo mês nos anos anteriores, a previsão com faixa provável e os próximos 12 meses. O modelo de previsão é feito de funções puras testadas: usa o mesmo mês dos últimos 5 anos, corrige cada ano pelo crescimento recente (limitado a ±30%) e faz uma média ponderada que dá mais peso ao ano mais recente. No chat com o Claude, os números vêm sempre do banco por ferramentas (tool use), e o modelo só interpreta. Segurança: senhas com Argon2id, bloqueio após tentativas de login erradas, sessão em cookie httpOnly assinado, autorização conferida no servidor em toda página e rota, SQL parametrizado, entradas validadas com Zod e limite diário de mensagens no chat.",
      en: "A mobile PWA built for the Carnes & Cia butcher shop. The home screen shows month-to-date sales compared with the same period last year, the forecast for the current and next month, and the best-selling cuts. The forecast screen lets the user pick a month, product and unit (BRL or kg) and shows the same month in previous years, the forecast with a likely range, and the next 12 months. The forecasting model is built from tested pure functions: it takes the same month over the last 5 years, adjusts each year by recent growth (capped at ±30%) and computes a weighted average that favors the most recent year. In the Claude-powered chat, numbers always come from the database through tools (tool use), and the model only interprets them. Security: Argon2id password hashing, lockout after failed login attempts, signed httpOnly session cookie, server-side authorization on every page and route, parameterized SQL, Zod-validated inputs and a daily chat message limit.",
    },
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "PWA",
      "Prisma 7",
      "PostgreSQL",
      "Claude API (tool use)",
      "Recharts",
      "Argon2",
      "Zod",
      "Vitest",
    ],
    media: [
      {
        type: "image",
        src: "/projects/carnes-e-cia/01-inicio.png",
        width: 390,
        height: 844,
        alt: {
          "pt-BR": "Início: vendas do mês, previsão e mais vendidos",
          en: "Home: month's sales, forecast and best sellers",
        },
      },
      {
        type: "image",
        src: "/projects/carnes-e-cia/02-previsao-do-mes.png",
        width: 390,
        height: 844,
        alt: {
          "pt-BR": "Previsão do mês comparada aos anos anteriores",
          en: "Monthly forecast compared with previous years",
        },
      },
      {
        type: "image",
        src: "/projects/carnes-e-cia/03-proximos-12-meses.png",
        width: 390,
        height: 844,
        alt: { "pt-BR": "Previsão dos próximos 12 meses", en: "Forecast for the next 12 months" },
      },
    ],
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
    // Sem mídia: aplicação descontinuada e código proprietário do cliente.
    media: [],
  },
  {
    name: "Argos",
    description: {
      "pt-BR":
        "Assistente pessoal com memória de longo prazo, construído como servidor MCP: guarda o que importa sobre a casa, os equipamentos, os cães e a rotina — e cobra o que precisa ser feito. Em desenvolvimento.",
      en: "A personal assistant with long-term memory, built as an MCP server: it keeps track of what matters about the home, equipment, dogs and routine — and reminds you of what needs to be done. In development.",
    },
    longDescription: {
      "pt-BR":
        "Servidor MCP (Model Context Protocol) em TypeScript que dá memória de longo prazo a um assistente de IA. Não tem front-end nem API HTTP: um cliente MCP conversa com ele por stdio, e os dados ficam num SQLite local. As ferramentas cobrem fatos datados com origem e validade (lembrar, buscar e esquecer), entidades do mundo real (equipamentos, cães, veículos) e compromissos com dois modos de recorrência, que podem ser concluídos (inclusive de forma retroativa) ou adiados, além de uma fila de avisos para um loop proativo que entrega cada lembrete sem repetir. Hoje o cliente é o Claude Code; a próxima etapa liga um agente com Telegram e voz para o assistente puxar a conversa sozinho. Privacidade em primeiro lugar: tudo roda na máquina local, o banco nunca é versionado e backup que sai da máquina vai cifrado.",
      en: "A TypeScript MCP (Model Context Protocol) server that gives an AI assistant long-term memory. There is no front end or HTTP API: an MCP client talks to it over stdio, and data lives in a local SQLite database. Its tools cover dated facts with source and validity (remember, search and forget), real-world entities (equipment, dogs, vehicles) and commitments with two recurrence modes that can be completed (even retroactively) or postponed, plus a notification queue for a proactive loop that delivers each reminder without repeating it. Today the client is Claude Code; the next step connects an agent with Telegram and voice so the assistant can start the conversation on its own. Privacy first: everything runs on the local machine, the database is never committed and any backup that leaves the machine is encrypted.",
    },
    stack: ["TypeScript", "Node.js", "MCP SDK", "SQLite", "Zod", "Claude"],
    // Sem mídia: servidor MCP sem interface própria, roda localmente.
    media: [],
  },
];
