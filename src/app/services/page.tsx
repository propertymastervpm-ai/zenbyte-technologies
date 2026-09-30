import { CTA } from "@/components/home/CTA";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { Container } from "@/components/ui/Container";
import { engineeringApproach, services } from "@/data/services";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Software Development Services | Zenbyte Technologies",
  description:
    "Software development services from Zenbyte Technologies: custom software, web applications, SaaS products, enterprise systems, integrations, and automation.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-28 pb-8 sm:pt-32 lg:pt-36">
        <div className="tech-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
        <Container className="relative">
          <p className="text-xs font-semibold tracking-[0.22em] text-cyan-200/90 uppercase">Services</p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl leading-tight font-semibold tracking-tight text-white sm:text-5xl">
            Software Engineering That Moves Businesses Forward.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
            Zenbyte Technologies provides end-to-end software development and technology services,
            helping businesses transform ideas and workflows into reliable digital products.
          </p>
        </Container>
      </section>

      <section>
        <Container>
          {services.map((service, index) => (
            <ServiceDetail key={service.title} service={service} index={index} />
          ))}
        </Container>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="engineering-approach">
        <Container>
          <h2 id="engineering-approach" className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Our Engineering Approach
          </h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {engineeringApproach.map((item, index) => (
              <li key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="font-display text-sm text-cyan-100">0{index + 1}</p>
                <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{item.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <CTA title="Discuss Your Project" primaryLabel="Discuss Your Project" />
    </>
  );
}
