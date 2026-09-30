import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export function CTA({
  title = "Have an idea? Let's turn it into software.",
  primaryHref = "/contact",
  primaryLabel = "Start a Conversation",
}: {
  title?: string;
  primaryHref?: string;
  primaryLabel?: string;
}) {
  return (
    <section className="pb-16 sm:pb-20 lg:pb-24">
      <Container>
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(125,211,252,0.14),rgba(167,139,250,0.08)_42%,rgba(7,11,20,0.2))] px-6 py-10 sm:px-10 sm:py-14">
          <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
            Tell us about the workflow, product, or system you want to build. We will respond from{" "}
            <a className="text-white underline decoration-cyan-200/50 underline-offset-4" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            .
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={primaryHref}>{primaryLabel}</Button>
            <Button href={`mailto:${site.email}`} variant="secondary">
              Email Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
