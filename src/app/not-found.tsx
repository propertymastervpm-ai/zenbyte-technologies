import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Page Not Found | Zenbyte Technologies",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="pt-32 pb-24">
      <Container className="max-w-xl">
        <p className="text-xs font-semibold tracking-[0.22em] text-cyan-200 uppercase">404</p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-white">This page is not available.</h1>
        <p className="mt-4 text-slate-300">The address may be incorrect, or the page may have moved.</p>
        <div className="mt-8">
          <Button href="/">Back to Home</Button>
        </div>
      </Container>
    </section>
  );
}
