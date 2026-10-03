"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/data/services";

function StepCard({ item }: { item: (typeof processSteps)[number] }) {
  return (
    <article className="relative h-full rounded-2xl border border-white/10 bg-[#0c1424] p-4">
      <p className="font-display text-2xl font-semibold text-cyan-100">{item.step}</p>
      <h3 className="mt-3 text-base font-semibold text-white">{item.title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
    </article>
  );
}

export function ProcessTrack() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-62%"]);

  const list = (
    <ol className="grid gap-4 sm:grid-cols-2">
      {processSteps.map((item, index) => (
        <li key={item.step}>
          <Reveal delay={index * 0.04}>
            <StepCard item={item} />
          </Reveal>
        </li>
      ))}
    </ol>
  );

  if (reduce) return list;

  return (
    <>
      <div className="lg:hidden">{list}</div>
      <div ref={ref} className="relative hidden h-[165vh] lg:block">
        <div className="sticky top-28 overflow-hidden">
          <motion.ol style={{ x }} className="flex w-max gap-4 pr-8">
            {processSteps.map((item) => (
              <li key={item.step} className="w-72 shrink-0">
                <StepCard item={item} />
              </li>
            ))}
          </motion.ol>
        </div>
      </div>
    </>
  );
}
