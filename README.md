# Portfólio — Marcos Teodoro

Site de portfólio bilíngue (pt-BR / en) voltado para recrutadores. Sem banco de
dados: todo o conteúdo é estático e tipado em `src/data/`.

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** (dark mode por classe)
- **ESLint + Prettier**, **Husky + lint-staged** (pre-commit)

## Recursos

- **Tema claro/escuro** — inicia pela preferência do navegador; escolha salva no `localStorage`; script anti-FOUC evita flash de tema.
- **Idioma pt-BR / en** — detecta pelo idioma do navegador (contém `pt` → pt-BR, senão en); escolha salva no `localStorage`.
- **Responsivo** e com **animações** de entrada (respeitando `prefers-reduced-motion`).

## Scripts

```bash
npm run dev           # ambiente de desenvolvimento
npm run build         # build de produção
npm run start         # serve o build
npm run lint          # ESLint
npm run format        # Prettier (escreve)
npm run format:check  # Prettier (checa)
```

## Onde editar o conteúdo

- `src/data/profile.ts` — nome, cargo, bio, contatos, caminhos do CV
- `src/data/experiences.ts` — experiências profissionais
- `src/data/skills.ts` — skills por categoria
- `src/data/education.ts` — formação, certificações, cursos, idiomas
- `src/data/projects.ts` — projetos (placeholder; adicionar objetos `Project`)
- `src/i18n/dictionaries/{en,pt}.ts` — textos de interface

### CVs

Substitua os placeholders em `public/cv/marcos-teodoro-pt.pdf` e
`public/cv/marcos-teodoro-en.pdf` pelos PDFs reais.

## Deploy (Vercel)

1. Suba o repositório para o GitHub.
2. Em [vercel.com/new](https://vercel.com/new), importe o repositório.
3. A Vercel detecta o Next.js automaticamente — basta confirmar. Cada `push` na
   branch principal dispara um novo deploy.
