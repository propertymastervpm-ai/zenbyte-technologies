import { Container } from "@/components/ui/Container";
import { trustPoints } from "@/data/services";

export function TrustStrip() {
  return (
    <section aria-label="What we build" className="border-y border-white/10 bg-white/[0.02]">
      <Container className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3 py-5 sm:gap-x-0 sm:py-6">
        {trustPoints.map((point, index) => (
          <p key={point} className="flex items-center text-sm font-medium text-slate-300">
            {index > 0 ? (
              <span aria-hidden="true" className="mx-3 hidden h-1 w-1 rounded-full bg-cyan-200/70 sm:inline-block" />
            ) : null}
            <span className="rounded-full border border-white/10 px-3 py-1 sm:rounded-none sm:border-0 sm:px-0 sm:py-0">
              {point}
            </span>
          </p>
        ))}
      </Container>
    </section>
  );
}
