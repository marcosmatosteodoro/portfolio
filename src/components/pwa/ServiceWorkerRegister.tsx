"use client";

import { useEffect } from "react";

/**
 * Registra o service worker (apenas em produção, para não atrapalhar o dev
 * com cache). Falhas são silenciosas — o site funciona sem o SW.
 */
export function ServiceWorkerRegister() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (!("serviceWorker" in navigator)) return;

    const register = () => {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        // registro falhou — segue sem PWA offline
      });
    };

    window.addEventListener("load", register);
    return () => window.removeEventListener("load", register);
  }, []);

  return null;
}
