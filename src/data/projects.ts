import type { Localized } from "./profile";

export type Project = {
  name: string;
  description: Localized;
  stack: string[];
  /** URL do repositório (opcional). */
  repoUrl?: string;
  /** URL do deploy/demo (opcional). */
  liveUrl?: string;
  /** Caminho da imagem em /public (opcional). */
  image?: string;
};

/**
 * Placeholder — a seção de Projetos será preenchida por último.
 * Basta adicionar objetos `Project` aqui que a seção passa a renderizá-los.
 */
export const projects: Project[] = [];
