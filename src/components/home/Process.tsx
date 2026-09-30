import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/services";

export function Process() {
  return (
    <Section className="overflow-hidden">
      <Reveal>
        <SectionHeading
          eyebrow="Process"
          title="A clear path from idea to running software."
        />
      </Reveal>
      <ol className="relative mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-8 right-0 left-0 hidden h-px bg-gradient-to-r from-transparent via-cyan-200/40 to-transparent lg:block"
        />
        {processSteps.map((item, index) => (
          <li key={item.step}>
            <Reveal delay={index * 0.04}>
              <article className="relative h-full rounded-2xl border border-white/10 bg-[#0c1424] p-4">
                <p className="font-display text-2xl font-semibold text-cyan-100">{item.step}</p>
                <h3 className="mt-3 text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
