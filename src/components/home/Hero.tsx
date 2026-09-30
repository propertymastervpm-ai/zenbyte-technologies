import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const signals = ["Custom Software", "SaaS Products", "Automation", "Web Applications", "Enterprise Solutions"];

const layers = [
  { label: "Experience", value: "Web and product interfaces" },
  { label: "Application", value: "Custom software and SaaS" },
  { label: "Integration", value: "APIs and workflow automation" },
  { label: "Delivery", value: "Cloud-ready operations" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
      <div className="tech-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <Container className="relative grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.24em] text-cyan-200/90 uppercase">
            Zenbyte Technologies
          </p>
          <h1 className="mt-4 max-w-xl font-display text-[2.35rem] leading-[1.08] font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Engineering Software for the Future.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
            We design, build and scale intelligent software products and digital solutions for
            modern businesses.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {signals.map((item) => (
              <li
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-200 sm:text-sm"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/services">Explore Our Services</Button>
            <Button href="/products" variant="secondary">
              Discover Virtual Property Master
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative rounded-3xl border border-white/10 bg-slate-950/70 p-4 shadow-[0_30px_80px_-40px_rgba(56,189,248,0.55)] backdrop-blur-xl sm:p-6">
            <div className="mb-5 flex items-center justify-between gap-3">
              <p className="text-sm font-medium text-slate-200">System view</p>
              <p className="rounded-full border border-emerald-300/25 bg-emerald-300/10 px-2.5 py-1 text-xs text-emerald-100">
                Product engineering
              </p>
            </div>
            <div className="space-y-3">
              {layers.map((layer, index) => (
                <div
                  key={layer.label}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-3 sm:px-4"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-cyan-200/10 font-display text-xs text-cyan-100">
                    0{index + 1}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-white">{layer.label}</p>
                    <p className="truncate text-xs text-slate-400 sm:text-sm">{layer.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 grid gap-2 sm:grid-cols-3">
              {["SaaS", "APIs", "Automation"].map((node) => (
                <p
                  key={node}
                  className="rounded-xl border border-white/10 bg-[#10182a] px-3 py-2 text-center text-xs font-medium tracking-wide text-slate-300 uppercase"
                >
                  {node}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
