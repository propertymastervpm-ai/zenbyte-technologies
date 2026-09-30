import { GlowCard } from "@/components/ui/GlowCard";
import { Container } from "@/components/ui/Container";
import { vpmBenefits, vpmFeatures, vpmNotes } from "@/data/vpm";

export function VPMFeatures() {
  return (
    <section className="py-8 sm:py-12" aria-labelledby="vpm-capabilities">
      <Container>
        <div className="max-w-3xl">
          <h2 id="vpm-capabilities" className="font-display text-2xl font-semibold text-white sm:text-3xl">
            Core capabilities
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base">
            These capabilities are taken from the public Virtual Property Master website. They
            describe what the product currently presents to landlords and property managers.
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {vpmFeatures.map((feature) => (
            <GlowCard key={feature.title} className="hover:translate-y-0 sm:hover:-translate-y-1">
              <h3 className="font-display text-lg font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{feature.text}</p>
            </GlowCard>
          ))}
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <article className="rounded-2xl border border-white/10 p-6">
            <h3 className="font-display text-xl font-semibold text-white">Product benefits</h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
              {vpmBenefits.map((benefit) => (
                <li key={benefit} className="flex gap-2">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-200" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="font-display text-xl font-semibold text-white">Published product notes</h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
              {vpmNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </article>
        </div>
      </Container>
    </section>
  );
}
