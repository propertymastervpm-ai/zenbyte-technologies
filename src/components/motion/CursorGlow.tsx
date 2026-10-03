"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { useFinePointer } from "@/components/motion/useFinePointer";

export function CursorGlow() {
  const fine = useFinePointer();
  const reduce = useReducedMotion();
  const [active, setActive] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 280, damping: 28 });
  const sy = useSpring(y, { stiffness: 280, damping: 28 });

  useEffect(() => {
    if (!fine || reduce) return;

    const move = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };
    const over = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      setActive(Boolean(target.closest("a, button")));
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", over);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
    };
  }, [fine, reduce, x, y]);

  if (!fine || reduce) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[70] hidden rounded-full border border-cyan-200/50 mix-blend-screen md:block"
      style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
      animate={{ width: active ? 36 : 12, height: active ? 36 : 12, opacity: active ? 0.9 : 0.55 }}
      transition={{ duration: 0.25 }}
    />
  );
}
