import type { Metadata } from "next";
import { absoluteUrl, site } from "@/lib/site";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
};

export function pageMetadata({ title, description, path }: PageMetaInput): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  email: site.email,
  telephone: site.phoneTel,
  description: site.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.streetAddress,
    addressLocality: site.locality,
    addressRegion: site.region,
    addressCountry: site.postalCountry,
  },
  areaServed: {
    "@type": "Country",
    name: site.countryName,
  },
  vatID: site.gstin,
  brand: {
    "@type": "Brand",
    name: site.product.name,
    url: site.product.url,
  },
  makesOffer: {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: "Software development and technology services",
      provider: {
        "@type": "Organization",
        name: site.name,
      },
    },
  },
};

export const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: site.product.name,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: site.product.url,
  description:
    "Virtual Property Master helps property owners and managers track rent, manage tenants, send reminders, organise documents, and see payment status.",
  provider: {
    "@type": "Organization",
    name: site.name,
    url: site.url,
  },
  offers: {
    "@type": "Offer",
    url: site.product.url,
    availability: "https://schema.org/InStock",
  },
};
