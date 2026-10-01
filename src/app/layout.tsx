import type { Metadata, Viewport } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${inter.variable} dark antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/20 selection:text-primary">
        {children}
      </body>
    </html>
  );
}
