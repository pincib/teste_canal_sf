import { MetadataRoute } from "next";
import { commercialProperties } from "@/data/properties";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Property detail pages
  const propertyEntries: MetadataRoute.Sitemap = commercialProperties.map((p) => ({
    url: `${baseUrl}/imoveis/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Homepage
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    ...propertyEntries,
  ];
}
