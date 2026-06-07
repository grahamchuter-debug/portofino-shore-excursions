import { siteHeroAlt, siteImages } from "@/lib/site-images";

export const siteConfig = {
  name: "Portofino Shore Excursions",
  url: "https://portofinoshoreexcursions.com",
  locale: "en_GB",
  defaultDescription:
    "Small-group Portofino shore excursions for cruise passengers — approx. 4-hour Santa Margherita, Camogli and Portofino tour, plus tender guides and port planning.",
  defaultOgImage: siteImages.hero,
  defaultOgImageAlt: siteHeroAlt,
  copyrightEntity: "Portofino Shore Excursions",
  excursionsHubPath: "/portofino-shore-excursions",
  excursionsHubLabel: "Portofino shore excursions",
  bookingEmail: "bookings@portofinoshoreexcursions.com",
} as const;
