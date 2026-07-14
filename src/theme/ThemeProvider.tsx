"use client";

import { useSyncExternalStore } from "react";
import { STORAGE_KEYS, readStorage, writeStorage } from "@/lib/storage";

export type Theme = "light" | "dark";

/**
 * Store externo do tema, lido via useSyncExternalStore.
 * Isso mantém a UI em sincronia com o localStorage/DOM sem precisar de
 * setState em efeito (evita a regra set-state-in-effect) e é seguro no SSR.
 */
let currentTheme: Theme | null = null;
const listeners = new Set<() => void>();

/** Resolve o tema inicial: localStorage → preferência do sistema → "dark". */
function resolveInitialTheme(): Theme {
  const stored = readStorage(STORAGE_KEYS.theme);
  if (stored === "light" || stored === "dark") return stored;
  if (typeof window !== "undefined" && window.matchMedia) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return "dark";
}

/** Aplica/remove a classe `dark` no <html> e atualiza o color-scheme. */
function applyTheme(theme: Theme): void {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
}

function getSnapshot(): Theme {
  if (currentTheme === null) currentTheme = resolveInitialTheme();
  return currentTheme;
}

function getServerSnapshot(): Theme {
  return "dark";
}

function subscribe(callback: () => void): () => void {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function setTheme(next: Theme): void {
  currentTheme = next;
  applyTheme(next);
  writeStorage(STORAGE_KEYS.theme, next);
  listeners.forEach((listener) => listener());
}

/** Passthrough — mantido para estruturar a árvore de providers. */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return {
    theme,
    setTheme,
    toggleTheme: () => setTheme(theme === "dark" ? "light" : "dark"),
  };
}
