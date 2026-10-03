import { HeroScene } from "@/components/home/HeroScene";
import { RevealText } from "@/components/motion/RevealText";
import { ScrollShift } from "@/components/motion/ScrollShift";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const signals = ["Custom Software", "SaaS Products", "Automation", "Web Applications", "Enterprise Solutions"];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
      <div className="tech-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="ambient-field pointer-events-none absolute inset-0" aria-hidden="true" />
      <Container className="relative grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.24em] text-cyan-200/90 uppercase">
            Zenbyte Technologies
          </p>
          <h1 className="mt-4 max-w-xl font-display text-[2.35rem] leading-[1.08] font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            <RevealText text="Engineering Software for the Future." />
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

        <ScrollShift fromX={28} toX={-48} fromScale={0.9} toScale={1.03}>
          <HeroScene />
        </ScrollShift>
      </Container>
    </section>
  );
}
