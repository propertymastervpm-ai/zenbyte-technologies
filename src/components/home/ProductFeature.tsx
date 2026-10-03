import { Building2, BellRing, FileStack, IndianRupee } from "lucide-react";
import { VpmLogo } from "@/components/brand/VpmLogo";
import { ScrollShift } from "@/components/motion/ScrollShift";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

const highlights = [
  { icon: IndianRupee, label: "Rent tracking" },
  { icon: BellRing, label: "WhatsApp and SMS reminders" },
  { icon: FileStack, label: "Tenant and document records" },
  { icon: Building2, label: "Multiple properties" },
];

const units = [
  { unit: "101", status: "Rent received", tone: "text-emerald-200" },
  { unit: "102", status: "KYC verified", tone: "text-cyan-100" },
  { unit: "201", status: "Rent pending", tone: "text-amber-100" },
  { unit: "203", status: "Available", tone: "text-slate-200" },
];

export function ProductFeature() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="overflow-hidden rounded-[2rem] border border-cyan-200/15 bg-[radial-gradient(circle_at_top_left,rgba(125,211,252,0.16),transparent_32%),linear-gradient(180deg,#10182a,#070b14)]">
          <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:p-12">
            <Reveal>
              <p className="text-xs font-semibold tracking-[0.22em] text-cyan-200 uppercase">
                Flagship Product
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {site.product.tagline}
              </h2>
              <VpmLogo className="mt-5" heightClass="h-11 sm:h-12" />
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
                Virtual Property Master is a Zenbyte Technologies product. It helps property owners
                and managers simplify rental operations, from tenant management and rent tracking to
                reminders, documents, and payment visibility.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {highlights.map((item) => (
                  <li key={item.label} className="flex items-center gap-3 text-sm text-slate-200">
                    <item.icon aria-hidden="true" className="h-4 w-4 shrink-0 text-cyan-200" />
                    {item.label}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/products">Explore Virtual Property Master</Button>
                <Button href={site.product.url} variant="secondary" external>
                  Visit Product Website
                </Button>
              </div>
            </Reveal>

            <ScrollShift className="[perspective:900px]" fromX={40} toX={-20} fromScale={0.9}>
              <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5 backdrop-blur">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-medium text-white">Owner view</p>
                  <p className="text-xs text-slate-400">Illustrative</p>
                </div>
                <ul className="mt-4 space-y-2">
                  {units.map((unit) => (
                    <li
                      key={unit.unit}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3"
                    >
                      <span className="text-sm text-slate-300">Unit {unit.unit}</span>
                      <span className={`text-sm font-medium ${unit.tone}`}>{unit.status}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs leading-5 text-slate-400">
                  The live product tracks rent received, pending rent, KYC status, and availability
                  across units. This panel shows the kind of view, not live customer data.
                </p>
              </div>
            </ScrollShift>
          </div>
        </div>
      </Container>
    </section>
  );
}
