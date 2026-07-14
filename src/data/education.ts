import type { Locale } from "@/i18n/detectLocale";
import type { Localized } from "./profile";

export type Degree = {
  institution: string;
  title: Localized;
  period: string;
  details: Localized;
};

export type Certification = {
  name: string;
  issuer: string;
  issued: Localized;
  credentialId?: string;
};

export const degree: Degree = {
  institution: "UNOPAR — Universidade Norte do Paraná",
  title: {
    "pt-BR": "Bacharelado em Engenharia de Software",
    en: "Bachelor's in Software Engineering",
  },
  period: "2023 — 2027",
  details: {
    "pt-BR":
      "Arquitetura de Software, Engenharia de Requisitos, Modelagem UML, Banco de Dados, Estruturas de Dados, Algoritmos, Testes de Software, Segurança da Informação e DevOps básico.",
    en: "Software Architecture, Requirements Engineering, UML Modeling, Databases, Data Structures, Algorithms, Software Testing, Information Security and Basic DevOps.",
  },
};

export const certifications: Certification[] = [
  {
    name: "Scrum Fundamentals Certified (SFC)",
    issuer: "SCRUMstudy",
    issued: { "pt-BR": "Mar/2025", en: "Mar/2025" },
    credentialId: "1073019",
  },
];

/** Cursos relevantes (nomes localizados). */
export const courses: Localized[] = [
  { "pt-BR": "SOLID — Princípios de OOP (Udemy)", en: "SOLID — OOP Principles (Udemy)" },
  { "pt-BR": "Design Patterns — GoF (Udemy)", en: "Design Patterns — GoF (Udemy)" },
  {
    "pt-BR": "Testes unitários e TDD com PHP e PHPUnit (Udemy)",
    en: "Unit Testing and TDD with PHP and PHPUnit (Udemy)",
  },
  { "pt-BR": "Scrum básico (Udemy)", en: "Basic Scrum (Udemy)" },
  { "pt-BR": "SQL Completo (Udemy)", en: "Complete SQL (Udemy)" },
];

export type Language = { name: Localized; level: Localized };

export const languages: Language[] = [
  {
    name: { "pt-BR": "Português", en: "Portuguese" },
    level: { "pt-BR": "Nativo", en: "Native" },
  },
  {
    name: { "pt-BR": "Inglês", en: "English" },
    level: { "pt-BR": "Intermediário (B2)", en: "Intermediate (B2)" },
  },
];

export type { Locale };
