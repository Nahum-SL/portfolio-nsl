import { motion } from "motion/react";
import { tech, type TechId } from "../../types/tech";

type Props = { id: TechId; withName?: boolean };

export function TechIcon({ id, withName = false }: Props) {
  const { name, icon, mono } = tech[id];

  return (
    <motion.span
      title={name}
      whileHover={{ y: -4, scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 18 }}
      className="inline-flex min-w-14 flex-col items-center gap-2 text-center cursor-pointer"
    >
      {icon ? (
        <img
          src={icon}
          alt={name}
          loading="lazy"
          className={`h-10 w-10 object-contain ${mono ? "tech-mono" : ""}`}
        />
      ) : (
        <span className="grid h-10 place-items-center font-mono text-xs font-medium uppercase text-muted">
          {name}
        </span>
      )}
      {withName && <span className="text-xs text-muted">{name}</span>}
    </motion.span>
  );
}
