import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { navItems } from "@/data/navigation";
import { services } from "@/data/services";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#060910]">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
            Zenbyte Technologies designs and builds software products, web applications, and
            technology services for businesses that need reliable digital systems.
          </p>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-sm font-semibold text-white">Navigation</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-sm font-semibold text-white">Services</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            {services.slice(0, 6).map((service) => (
              <li key={service.title}>
                <Link href="/services" className="hover:text-white">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-sm font-semibold text-white">Contact</h2>
          <address className="mt-4 space-y-3 text-sm leading-6 text-slate-400 not-italic">
            {site.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            <a className="mt-2 block text-slate-200 hover:text-white" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <a className="block text-slate-200 hover:text-white" href={`tel:${site.phoneTel}`}>
              {site.phoneDisplay}
            </a>
            <span className="block">GSTIN: {site.gstin}</span>
          </address>
        </div>
      </Container>

      <Container className="flex flex-col gap-3 border-t border-white/10 py-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {site.name}. All rights reserved.
        </p>
        <p>
          Product:{" "}
          <a
            href={site.product.url}
            className="text-slate-300 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            {site.product.name}
          </a>
        </p>
      </Container>
    </footer>
  );
}
