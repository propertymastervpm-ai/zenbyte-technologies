import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact Zenbyte Technologies | Bengaluru",
  description:
    "Contact Zenbyte Technologies in Bengaluru for software development and Virtual Property Master. Email uday@zenbytetechnologies.com or call +91 9008494100.",
  path: "/contact",
});

const cards = [
  {
    title: "Email",
    icon: Mail,
    href: `mailto:${site.email}`,
    lines: [site.email],
  },
  {
    title: "Phone",
    icon: Phone,
    href: `tel:${site.phoneTel}`,
    lines: [site.phoneDisplay],
  },
];

export default function ContactPage() {
  return (
    <section className="pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36">
      <Container>
        <p className="text-xs font-semibold tracking-[0.22em] text-cyan-200/90 uppercase">Contact</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight font-semibold tracking-tight text-white sm:text-5xl">
          Let&apos;s Build Something Valuable.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
          Share the product or workflow you want to build. We reply from Bengaluru.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-200/30"
            >
              <card.icon aria-hidden="true" className="h-5 w-5 text-cyan-200" />
              <h2 className="mt-4 text-sm font-semibold tracking-wide text-white uppercase">{card.title}</h2>
              {card.lines.map((line) => (
                <p key={line} className="mt-2 text-sm break-all text-slate-300">
                  {line}
                </p>
              ))}
            </a>
          ))}
          <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:col-span-2 xl:col-span-1">
            <MapPin aria-hidden="true" className="h-5 w-5 text-cyan-200" />
            <h2 className="mt-4 text-sm font-semibold tracking-wide text-white uppercase">Office</h2>
            <address className="mt-2 text-sm leading-6 text-slate-300 not-italic">
              {site.contactAddressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </article>
          <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h2 className="text-sm font-semibold tracking-wide text-white uppercase">GSTIN</h2>
            <p className="mt-4 font-display text-lg text-slate-100">{site.gstin}</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Registered details for Zenbyte Technologies, Bengaluru.
            </p>
          </article>
        </div>

        <div className="mt-10 max-w-3xl">
          <h2 className="font-display text-2xl font-semibold text-white">Send an enquiry</h2>
          <div className="mt-5">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
