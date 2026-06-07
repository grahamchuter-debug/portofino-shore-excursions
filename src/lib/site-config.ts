import { siteHeroAlt, siteImages } from "@/lib/site-images";

export const siteConfig = {
  name: "Portofino Shore Excursions",
  url: "https://portofinoshoreexcursions.com",
  locale: "en_GB",
  defaultDescription:
    "Independent Portofino cruise port guides and small-group shore excursions for passengers arriving by tender to Portofino village and the Italian Riviera.",
  defaultOgImage: siteImages.hero,
  defaultOgImageAlt: siteHeroAlt,
  copyrightEntity: "Portofino Shore Excursions",
  excursionsHubPath: "/portofino-shore-excursions",
  excursionsHubLabel: "Portofino shore excursions",
} as const;
