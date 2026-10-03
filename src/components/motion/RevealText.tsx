"use client";

import { motion, useReducedMotion } from "framer-motion";

export function RevealText({ text }: { text: string }) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  if (reduce) {
    return text;
  }

  return (
    <motion.span
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { staggerChildren: 0.055 } } }}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="inline-block"
          variants={{
            hidden: { y: 14, opacity: 0.15 },
            show: { y: 0, opacity: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          {word}
          {index < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </motion.span>
  );
}
