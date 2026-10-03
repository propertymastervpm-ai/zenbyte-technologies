import type { Metadata } from "next";
import { Geist, Outfit } from "next/font/google";
import { CursorGlow } from "@/components/motion/CursorGlow";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/ui/JsonLd";
import { organizationJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Zenbyte Technologies | Software Development & Technology Solutions",
    template: "%s",
  },
  description:
    "Zenbyte Technologies designs and builds custom software, SaaS products, web applications, and automation for modern businesses. Based in Bengaluru.",
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    title: "Zenbyte Technologies | Software Development & Technology Solutions",
    description:
      "Zenbyte Technologies designs and builds custom software, SaaS products, web applications, and automation for modern businesses. Based in Bengaluru.",
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenbyte Technologies | Software Development & Technology Solutions",
    description:
      "Custom software, SaaS products, web applications, and automation from Zenbyte Technologies, Bengaluru.",
  },
  other: {
    "facebook-domain-verification": "5x35ojxyo1bjn1v5xuas77e7ui8g49",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#070b14] text-slate-100">
        <JsonLd data={organizationJsonLd} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-slate-950"
        >
          Skip to content
        </a>
        <CursorGlow />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
