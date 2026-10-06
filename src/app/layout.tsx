import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Pinciara Imóveis Exclusivos | Locação Comercial em São Francisco, Niterói",
    template: "%s | Pinciara Imóveis Exclusivos",
  },
  description: siteConfig.description,
  keywords: [
    "imóveis comerciais São Francisco",
    "locação comercial Niterói",
    "Avenida Presidente Roosevelt",
    "loja comercial Niterói",
    "ponto comercial franquias",
    "Pinciara Imóveis",
    "Luiz Pinciara",
  ],
  authors: [{ name: siteConfig.broker.name }],
  openGraph: {
    title: "Pinciara Imóveis Exclusivos | Ponto Comercial Nobre em São Francisco",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: `+${siteConfig.contact.phoneRaw}`,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.headquarters.address}, ${siteConfig.headquarters.complement}`,
      addressLocality: siteConfig.headquarters.city,
      addressRegion: siteConfig.headquarters.state,
      postalCode: siteConfig.headquarters.zip,
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -22.9152072,
      longitude: -43.0827966,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "19:00",
      },
    ],
    sameAs: [
      siteConfig.links.googleMaps,
      siteConfig.links.instagram,
      siteConfig.links.facebook,
      siteConfig.links.linkedin,
      siteConfig.links.youtube,
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} dark antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/20 selection:text-primary">
        {children}
      </body>
    </html>
  );
}
