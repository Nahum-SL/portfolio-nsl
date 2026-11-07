
import { useEffect, useState } from "react";

export function TypedCode({ text = "</>" }: { text?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Respetar la preferencia de movimiento reducido
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(text.length);
      return;
    }

    let id: ReturnType<typeof setTimeout>;

    if (count < text.length) {
      // Escribir carácter por carácter
      id = setTimeout(() => {
        setCount((c) => c + 1);
      }, 350);
    } else {
      // Esperar 6 segundos y reiniciar
      id = setTimeout(() => {
        setCount(0);
      }, 6000);
    }

    return () => clearTimeout(id);
  }, [count, text]);

  return (
    <span aria-hidden="true" className="ml-3 font-mono font-medium text-accent">
      {text.slice(0, count)}
      <span className="caret ml-1 inline-block h-[0.8em] w-[0.08em] translate-y-[0.05em] bg-accent" />
    </span>
  );
}
