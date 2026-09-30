import { VpmLogo } from "@/components/brand/VpmLogo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";
import { vpmAudience, vpmBenefits, vpmProblems } from "@/data/vpm";

export function VPMHero() {
  return (
    <section className="pt-28 pb-8 sm:pt-32 lg:pt-36">
      <Container>
        <p className="text-xs font-semibold tracking-[0.22em] text-cyan-200/90 uppercase">Our Products</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight font-semibold tracking-tight text-white sm:text-5xl">
          Software products created to solve real operational problems.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
          Zenbyte Technologies develops software it owns and operates. The flagship product is
          Virtual Property Master, a web application for residential rental operations in India.
        </p>

        <div className="mt-10 overflow-hidden rounded-[2rem] border border-cyan-200/15 bg-[radial-gradient(circle_at_top_right,rgba(167,139,250,0.18),transparent_28%),linear-gradient(180deg,#121a2d,#080d18)]">
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:p-12">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-cyan-100 uppercase">
                Flagship Product
              </p>
              <VpmLogo className="mt-4" heightClass="h-12 sm:h-14" />
              <h2 className="sr-only">{site.product.name}</h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                Virtual Property Master helps property owners and managers run rental operations
                from one dashboard: tenant records, rent tracking, reminders, documents, and
                payment visibility.
              </p>
              <p className="mt-4 text-sm leading-6 text-slate-400">
                The public product describes a path from adding properties and tenants to automated
                reminders and tracked payments, aimed at landlords who currently rely on
                spreadsheets, chat, and manual follow-up.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button href={site.product.url} external>
                  Visit Virtual Property Master
                </Button>
                <Button href="/contact" variant="secondary">
                  Talk to Zenbyte
                </Button>
              </div>
            </div>
            <div className="grid gap-4">
              <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <h3 className="text-sm font-semibold tracking-wide text-white uppercase">Who it is for</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  {vpmAudience.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
              <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <h3 className="text-sm font-semibold tracking-wide text-white uppercase">What it changes</h3>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                  {vpmBenefits.slice(0, 3).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function VPMProblems() {
  return (
    <section className="py-12 sm:py-16" aria-labelledby="vpm-problems">
      <Container>
        <h2 id="vpm-problems" className="font-display text-2xl font-semibold text-white sm:text-3xl">
          The operational problems it addresses
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {vpmProblems.map((problem) => (
            <article key={problem.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <h3 className="font-display text-lg font-semibold text-white">{problem.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{problem.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
