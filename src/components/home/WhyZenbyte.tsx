import { GlowCard } from "@/components/ui/GlowCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/SectionHeading";
import { whyZenbyte } from "@/data/services";

export function WhyZenbyte() {
  return (
    <Section>
      <Reveal>
        <SectionHeading
          eyebrow="Why Zenbyte"
          title="Engineering with a product point of view."
          description="We are set up to create software products and to deliver technology services with the same discipline."
        />
      </Reveal>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {whyZenbyte.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.05}>
            <GlowCard>
              <p className="font-display text-sm tracking-[0.18em] text-cyan-200/80">
                0{index + 1}
              </p>
              <h3 className="mt-3 font-display text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.text}</p>
            </GlowCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
