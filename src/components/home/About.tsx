import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/SectionHeading";

const positions = [
  {
    title: "Software product creators",
    text: "We design and develop products that a business can offer, operate, and improve. Virtual Property Master is our flagship product.",
  },
  {
    title: "Technology service providers",
    text: "We also build custom software for organisations that need a system shaped around their own workflow.",
  },
];

export function About() {
  return (
    <Section>
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="Who we are"
            title="Technology Built Around Business."
            description="Zenbyte Technologies builds software applications, digital products, and scalable technology solutions. We work as product creators and as an engineering partner for businesses that need software they can rely on."
          />
        </Reveal>
        <div className="grid gap-4">
          {positions.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="font-display text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
