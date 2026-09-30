import { About } from "@/components/home/About";
import { CTA } from "@/components/home/CTA";
import { Hero } from "@/components/home/Hero";
import { Process } from "@/components/home/Process";
import { ProductFeature } from "@/components/home/ProductFeature";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { TrustStrip } from "@/components/home/TrustStrip";
import { WhyZenbyte } from "@/components/home/WhyZenbyte";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Zenbyte Technologies | Software Development & Technology Solutions",
  description:
    "Zenbyte Technologies designs and builds custom software, SaaS products, web applications, and automation for modern businesses. Based in Bengaluru.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <About />
      <ServicesPreview />
      <ProductFeature />
      <WhyZenbyte />
      <Process />
      <CTA />
    </>
  );
}
