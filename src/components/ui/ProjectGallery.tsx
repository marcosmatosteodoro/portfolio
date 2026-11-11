"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLocale } from "@/i18n/LocaleProvider";
import type { ProjectMedia } from "@/data/projects";

type Props = {
  projectName: string;
  media: ProjectMedia[];
};

/**
 * Botão "Ver imagens" + galeria em tela cheia (<dialog> nativo: foco preso,
 * Esc fecha). Setas do teclado e botões navegam; clicar fora da mídia fecha.
 */
export function ProjectGallery({ projectName, media }: Props) {
  const { locale, t } = useLocale();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const total = media.length;
  const go = useCallback((delta: number) => setIndex((i) => (i + delta + total) % total), [total]);

  // Abre/fecha o <dialog> conforme o estado e trava a rolagem da página.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, go]);

  if (total === 0) return null;

  const current = media[index];
  const caption = current.alt[locale];
  const counter = t.projects.gallery.counter
    .replace("{current}", String(index + 1))
    .replace("{total}", String(total));

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setIndex(0);
          setOpen(true);
        }}
        className="text-accent cursor-pointer hover:underline"
      >
        {t.projects.viewImages} ({total})
      </button>

      <dialog
        ref={dialogRef}
        aria-label={`${projectName} — ${t.projects.viewImages}`}
        onClose={() => setOpen(false)}
        onClick={(e) => {
          // Clique no fundo (fora da mídia e dos controles) fecha.
          if (e.target === e.currentTarget || (e.target as HTMLElement).dataset.backdrop) {
            setOpen(false);
          }
        }}
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-transparent p-0 text-white backdrop:bg-black/85"
      >
        {open && (
          <div className="flex h-full flex-col" data-backdrop="true">
            <header className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
              <p className="min-w-0 truncate text-sm">
                <span className="font-semibold">{projectName}</span>
                <span className="text-white/70"> · {counter}</span>
              </p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={t.projects.gallery.close}
                title={t.projects.gallery.close}
                className="inline-flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
              >
                <Icon path="M6 6l12 12M18 6L6 18" />
              </button>
            </header>

            <div
              className="relative flex min-h-0 flex-1 items-center justify-center px-14 sm:px-20"
              data-backdrop="true"
            >
              {current.type === "video" ? (
                <video
                  key={current.src}
                  src={current.src}
                  controls
                  className="max-h-full max-w-full rounded-md"
                  aria-label={caption}
                />
              ) : (
                <Image
                  key={current.src}
                  src={current.src}
                  width={current.width}
                  height={current.height}
                  alt={caption}
                  sizes="(max-width: 640px) 100vw, 90vw"
                  className="h-auto max-h-full w-auto max-w-full rounded-md object-contain shadow-2xl"
                />
              )}

              {total > 1 && (
                <>
                  <NavButton
                    side="left"
                    label={t.projects.gallery.previous}
                    onClick={() => go(-1)}
                  />
                  <NavButton side="right" label={t.projects.gallery.next} onClick={() => go(1)} />
                </>
              )}
            </div>

            <p className="px-4 py-4 text-center text-sm text-white/85 sm:px-6" aria-live="polite">
              {caption}
            </p>
          </div>
        )}
      </dialog>
    </>
  );
}

function NavButton({
  side,
  label,
  onClick,
}: {
  side: "left" | "right";
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className={`absolute top-1/2 inline-flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/10 hover:bg-white/20 ${
        side === "left" ? "left-2 sm:left-4" : "right-2 sm:right-4"
      }`}
    >
      <Icon path={side === "left" ? "M15 18l-6-6 6-6" : "M9 6l6 6-6 6"} />
    </button>
  );
}

function Icon({ path }: { path: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  );
}
