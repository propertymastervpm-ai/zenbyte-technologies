import { Button } from "@/components/ui/Button";
import { GlowCard } from "@/components/ui/GlowCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceIconMark } from "@/components/ui/ServiceIconMark";
import { homeServices } from "@/data/services";

export function ServicesPreview() {
  return (
    <Section className="bg-white/[0.015]">
      <Reveal>
        <SectionHeading
          eyebrow="Services"
          title="Software, built for how the work actually runs."
          description="From a focused web application to a product you can offer as a service, we engineer the system around the operation."
        />
      </Reveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {homeServices.map((service, index) => (
          <Reveal key={service.title} delay={index * 0.04}>
            <GlowCard>
              <ServiceIconMark name={service.icon} />
              <h3 className="mt-5 font-display text-lg font-semibold text-white">{service.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{service.summary}</p>
            </GlowCard>
          </Reveal>
        ))}
      </div>
      <div className="mt-10">
        <Button href="/services" variant="secondary">
          Explore All Services
        </Button>
      </div>
    </Section>
  );
}
