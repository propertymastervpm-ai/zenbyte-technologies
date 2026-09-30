import { GlowCard } from "@/components/ui/GlowCard";
import { ServiceIconMark } from "@/components/ui/ServiceIconMark";
import type { Service } from "@/data/services";

export function ServiceDetail({ service, index }: { service: Service; index: number }) {
  return (
    <article className="grid gap-6 border-t border-white/10 py-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12 lg:py-14">
      <div>
        <p className="text-xs font-semibold tracking-[0.2em] text-cyan-200/80">
          {String(index + 1).padStart(2, "0")}
        </p>
        <div className="mt-4">
          <ServiceIconMark name={service.icon} />
        </div>
        <h2 className="mt-5 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          {service.title}
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base">{service.problem}</p>
      </div>
      <GlowCard className="hover:translate-y-0">
        <h3 className="text-sm font-semibold tracking-wide text-white uppercase">What we deliver</h3>
        <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
          {service.deliver.map((item) => (
            <li key={item} className="flex gap-2">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-200" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <h3 className="mt-6 text-sm font-semibold tracking-wide text-white uppercase">Capabilities</h3>
        <ul className="mt-3 flex flex-wrap gap-2">
          {service.capabilities.map((item) => (
            <li
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-200"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm leading-6 text-slate-200">
          <span className="font-semibold text-white">Outcome. </span>
          {service.outcome}
        </p>
      </GlowCard>
    </article>
  );
}
