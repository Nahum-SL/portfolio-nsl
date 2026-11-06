import { useEffect, useState } from "react";

export function TypedCode({ text = "</>" }: { text?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Sin animación si el usuario prefiere menos movimiento
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(text.length);
      return;
    }
    if (count >= text.length) return;
    const id = setTimeout(() => setCount((c) => c + 1), 350);
    return () => clearTimeout(id);
  }, [count, text]);

  return (
    <span aria-hidden="true" className="ml-3 font-mono font-medium text-accent">
      {text.slice(0, count)}
      <span className="caret ml-1 inline-block h-[0.8em] w-[0.08em] translate-y-[0.05em] bg-accent" />
    </span>
  );
}
