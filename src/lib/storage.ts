/**
 * Acesso seguro ao localStorage.
 *
 * Todo acesso passa por try/catch (fail secure): se o localStorage estiver
 * indisponível (SSR, modo privado, storage desabilitado), retornamos o default
 * em vez de quebrar a aplicação.
 */

export const STORAGE_KEYS = {
  theme: "portfolio:theme",
  locale: "portfolio:locale",
} as const;

/** Lê uma chave do localStorage; devolve `fallback` se indisponível ou vazia. */
export function readStorage(key: string, fallback: string | null = null): string | null {
  if (typeof window === "undefined") return fallback;
  try {
    return window.localStorage.getItem(key) ?? fallback;
  } catch {
    return fallback;
  }
}

/** Grava uma chave no localStorage; silencia falhas (não deve quebrar a UI). */
export function writeStorage(key: string, value: string): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // storage indisponível — segue sem persistir
  }
}
