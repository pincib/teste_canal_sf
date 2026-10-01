import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { commercialProperties } from "@/data/properties";
import { PropertyDetailView } from "@/components/property/property-detail-view";
import { siteConfig } from "@/config/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return commercialProperties.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = commercialProperties.find((p) => p.slug === slug);

  if (!property) {
    return {
      title: "Imóvel não encontrado",
    };
  }

  return {
    title: `${property.title} | ${siteConfig.name}`,
    description: property.shortDescription,
    openGraph: {
      title: `${property.title} | ${siteConfig.name}`,
      description: property.shortDescription,
      images: [
        {
          url: property.images[0]?.src || "/images/logo-pinciara.svg",
          width: 1200,
          height: 630,
          alt: property.title,
        },
      ],
    },
  };
}

export default async function PropertyPage({ params }: PageProps) {
  const { slug } = await params;
  const property = commercialProperties.find((p) => p.slug === slug);

  if (!property) {
    notFound();
  }

  return <PropertyDetailView property={property} />;
}
