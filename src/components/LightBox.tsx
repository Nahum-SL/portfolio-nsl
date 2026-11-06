import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import type { Shot } from "../types";
import { CloseIcon } from "./icons";

type Props = { shot: Shot; onClose: () => void };

export function Lightbox({ shot, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation(); // evita que también se cierre el modal del proyecto
        onClose();
      }
    };
    document.addEventListener("keydown", onKey, true); // captura
    closeRef.current?.focus();
    return () => document.removeEventListener("keydown", onKey, true);
  }, [onClose]);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={shot.alt}
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
      className="fixed inset-0 z-60 grid cursor-zoom-out place-items-center bg-black/90 p-4 sm:p-8"
    >
      <button
        ref={closeRef}
        type="button"
        aria-label="Cerrar imagen"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-white/30 text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <CloseIcon />
      </button>
      <img
        src={shot.src}
        alt={shot.alt}
        className="max-h-full max-w-full rounded-lg object-contain"
      />
    </div>,
    document.body,
  );
}
