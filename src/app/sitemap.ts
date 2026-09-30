import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-30");
  return [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "monthly", priority: 1 },
    { url: absoluteUrl("/services"), lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/products"), lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/contact"), lastModified, changeFrequency: "yearly", priority: 0.6 },
  ];
}
