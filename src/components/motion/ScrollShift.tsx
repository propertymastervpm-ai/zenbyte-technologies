"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

export function ScrollShift({
  children,
  className,
  fromX = 0,
  toX = -36,
  fromScale = 0.94,
  toScale = 1,
}: {
  children: ReactNode;
  className?: string;
  fromX?: number;
  toX?: number;
  fromScale?: number;
  toScale?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 0.45, 1], [fromX, 0, toX]);
  const scale = useTransform(scrollYProgress, [0, 0.45, 1], [fromScale, toScale, 0.98]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.72, 1, 1, 0.88]);

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div ref={ref} className={className} style={{ x, scale, opacity }}>
      {children}
    </motion.div>
  );
}
