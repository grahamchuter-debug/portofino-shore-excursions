import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site-config";
import {
  buildLocalBusinessSchema,
  buildOrganizationSchema,
  buildTouristAttractionSchema,
  buildWebSiteSchema,
} from "@/lib/site-schema";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:
      "Portofino Shore Excursions | Small Group Santa Margherita, Camogli & Portofino Tours",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.defaultDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Portofino Shore Excursions | Small Group Santa Margherita, Camogli & Portofino Tours",
    description: siteConfig.defaultDescription,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: siteConfig.defaultOgImage,
        alt: siteConfig.defaultOgImageAlt,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Portofino Shore Excursions | Small Group Santa Margherita, Camogli & Portofino Tours",
    description: siteConfig.defaultDescription,
    images: [siteConfig.defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <JsonLd
          data={[
            buildOrganizationSchema(),
            buildLocalBusinessSchema(),
            buildWebSiteSchema(),
            buildTouristAttractionSchema({
              name: "Portofino",
              description:
                "Portofino is a picturesque fishing village and celebrity resort on the Italian Riviera, a popular tender port for cruise passengers visiting the Ligurian coast.",
            }),
          ]}
        />
        <SiteHeader />
        <div className="flex flex-1 flex-col">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
