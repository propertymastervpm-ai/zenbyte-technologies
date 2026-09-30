"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useRef, type PointerEvent } from "react";

const layers = [
  { label: "Experience", value: "Web and product interfaces", shift: "sm:mr-8" },
  { label: "Application", value: "Custom software and SaaS", shift: "sm:ml-12" },
  { label: "Integration", value: "APIs and workflow automation", shift: "sm:mr-3" },
];

export function HeroScene() {
  const reduce = useReducedMotion();
  const bounds = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [7, -7]), { stiffness: 90, damping: 22 });
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-9, 9]), { stiffness: 90, damping: 22 });

  function onMove(event: PointerEvent<HTMLDivElement>) {
    if (reduce || event.pointerType !== "mouse") return;
    const rect = bounds.current?.getBoundingClientRect();
    if (!rect) return;
    px.set((event.clientX - rect.left) / rect.width - 0.5);
    py.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function onLeave() {
    px.set(0);
    py.set(0);
  }

  return (
    <div
      ref={bounds}
      className="relative mx-auto h-[28rem] w-full max-w-xl [perspective:1400px] sm:h-[32rem]"
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-10 top-10 h-64 rounded-full bg-cyan-300/10 blur-3xl"
      />
      <motion.div
        className="relative h-full [transform-style:preserve-3d]"
        style={reduce ? undefined : { rotateX, rotateY }}
        animate={reduce ? undefined : { y: [0, -8, 0] }}
        transition={reduce ? undefined : { duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          aria-hidden="true"
          className="absolute top-2 left-1/2 h-40 w-40 -translate-x-1/2 rounded-[2rem] border border-cyan-200/20 bg-gradient-to-br from-cyan-200/10 via-transparent to-violet-300/10 shadow-[0_40px_80px_-40px_rgba(125,211,252,0.8)] [transform:translateZ(-40px)_rotateX(18deg)_rotateZ(-8deg)]"
        />
        <div className="absolute top-6 left-1/2 grid h-32 w-32 -translate-x-1/2 place-items-center rounded-[1.6rem] border border-white/15 bg-slate-950/80 shadow-[0_30px_70px_-36px_rgba(125,211,252,0.9)] backdrop-blur-xl [transform:translateZ(36px)] sm:h-36 sm:w-36">
          <svg viewBox="0 0 64 64" className="h-20 w-20" aria-hidden="true">
            <path fill="#7DD3FC" d="M15 15H49V22L29 38H49V49H15V42L35 26H15V15Z" />
          </svg>
          <p className="sr-only">Abstract Zenbyte mark representing a software system.</p>
        </div>
        <ul className="absolute inset-x-0 top-40 space-y-3 sm:top-44">
          {layers.map((layer, index) => (
            <li
              key={layer.label}
              className={`mx-auto flex w-[min(100%,20rem)] items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/75 px-3 py-3 shadow-[0_18px_40px_-28px_rgba(0,0,0,0.8)] backdrop-blur-md sm:px-4 ${layer.shift}`}
              style={{ transform: `translateZ(${28 + index * 18}px)` }}
            >
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-cyan-200/10 font-display text-xs text-cyan-100">
                0{index + 1}
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-medium text-white">{layer.label}</span>
                <span className="block truncate text-xs text-slate-400 sm:text-sm">{layer.value}</span>
              </span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
