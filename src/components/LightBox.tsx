import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion } from "motion/react";
import type { Shot } from "../types";
import { ArrowIcon, CloseIcon } from "./icons";

type Props = {
  shot: Shot;
  onClose: () => void;
  /** Opcionales: si no se pasan, no hay navegación */
  onPrev?: () => void;
  onNext?: () => void;
  counter?: string;
};

const navBtn =
  "absolute top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-black/40 text-white transition hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

export function Lightbox({ shot, onClose, onPrev, onNext, counter }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation(); // evita cerrar también el modal del proyecto
        onClose();
      } else if (e.key === "ArrowRight") onNext?.();
      else if (e.key === "ArrowLeft") onPrev?.();
    };
    document.addEventListener("keydown", onKey, true);
    return () => document.removeEventListener("keydown", onKey, true);
  }, [onClose, onPrev, onNext]);

  // Los eventos de React suben por el portal hasta el modal del proyecto,
  // por eso cada clic detiene la propagación.
  const stop = (fn?: () => void) => (e: React.MouseEvent) => {
    e.stopPropagation();
    fn?.();
  };

  return createPortal(
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={shot.alt}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={stop(onClose)}
      className="fixed inset-0 z-[60] grid cursor-zoom-out place-items-center bg-black/90 p-4 sm:p-8"
    >
      <button
        ref={closeRef}
        type="button"
        aria-label="Cerrar imagen"
        onClick={stop(onClose)}
        className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/30 text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <CloseIcon />
      </button>

      {onPrev && (
        <button
          type="button"
          aria-label="Imagen anterior"
          onClick={stop(onPrev)}
          className={`${navBtn} left-3 sm:left-6`}
        >
          <ArrowIcon className="rotate-180" />
        </button>
      )}
      {onNext && (
        <button
          type="button"
          aria-label="Imagen siguiente"
          onClick={stop(onNext)}
          className={`${navBtn} right-3 sm:right-6`}
        >
          <ArrowIcon />
        </button>
      )}

      <motion.img
        key={shot.src}
        src={shot.src}
        alt={shot.alt}
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.25 }}
        drag={onNext || onPrev ? "x" : false}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.25}
        onDragEnd={(_, info) => {
          if (info.offset.x < -80) onNext?.();
          else if (info.offset.x > 80) onPrev?.();
        }}
        onClick={stop()}
        className="max-h-full max-w-full cursor-default rounded-lg object-contain"
      />

      {counter && (
        <p className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 font-mono text-xs text-white">
          {counter}
        </p>
      )}
    </motion.div>,
    document.body,
  );
}
