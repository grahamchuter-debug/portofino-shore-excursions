import { siteConfig } from "@/lib/site-config";
import { featuredTour } from "@/lib/featured-tour";
import { featuredTourFacts } from "@/lib/featured-tour-facts";

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.defaultDescription,
    areaServed: {
      "@type": "Place",
      name: "Portofino, Liguria, Italy",
    },
  };
}

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.defaultDescription,
    areaServed: {
      "@type": "Place",
      name: "Portofino, Liguria, Italy",
    },
    knowsAbout: [
      "Portofino shore excursions",
      "Portofino village tender port",
      "Italian Riviera cruise port planning",
    ],
  };
}

export function buildTouristAttractionSchema({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name,
    description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Portofino",
      addressRegion: "Liguria",
      addressCountry: "IT",
    },
    touristType: "Cruise passengers",
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.defaultDescription,
    inLanguage: "en-GB",
  };
}

export function buildWebPageSchema({
  path,
  title,
  description,
}: {
  path: string;
  title: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: `${siteConfig.url}${path}`,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function buildFaqSchema(
  faqs: readonly { question: string; answer: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(
  items: readonly { label: string; href?: string }[],
  currentPath?: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => {
      const isLast = index === items.length - 1;
      const itemUrl = item.href
        ? `${siteConfig.url}${item.href}`
        : isLast && currentPath
          ? `${siteConfig.url}${currentPath}`
          : undefined;

      return {
        "@type": "ListItem",
        position: index + 1,
        name: item.label,
        ...(itemUrl ? { item: itemUrl } : {}),
      };
    }),
  };
}

export function buildItemListSchema(
  items: readonly { name: string; description: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Popular Portofino shore excursions for cruise passengers",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      description: item.description,
    })),
  };
}

export function buildFeaturedTourTripSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: featuredTour.fullName,
    description: featuredTourFacts.uniqueSellingPoint,
    url: `${siteConfig.url}${featuredTour.path}`,
    duration: featuredTourFacts.durationIso,
    touristType: "Cruise passengers",
    itinerary: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Santa Margherita Ligure",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Camogli",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Portofino",
        },
      ],
    },
    provider: {
      "@type": "TravelAgency",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}
