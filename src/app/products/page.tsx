import { CTA } from "@/components/home/CTA";
import { VPMFeatures } from "@/components/products/VPMFeatures";
import { VPMHero, VPMProblems } from "@/components/products/VPMHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { pageMetadata, productJsonLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Products | Virtual Property Master | Zenbyte Technologies",
  description:
    "Virtual Property Master, a Zenbyte Technologies product, helps property owners track rent, manage tenants, send reminders, and organise documents.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <JsonLd data={productJsonLd} />
      <VPMHero />
      <VPMProblems />
      <VPMFeatures />
      <CTA
        title="Want this kind of product for your own operation?"
        primaryLabel="Talk to Zenbyte"
      />
    </>
  );
}
