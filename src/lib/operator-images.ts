import { siteImages } from "@/lib/site-images";

/** Operator photo slots — preferred filenames for future assets; fallbacks avoid broken images until files are added. */
export const operatorImageSlots = {
  meetingPointFarmacia: {
    preferredPath: "/images/portofino-meeting-point-farmacia.jpg",
    src: siteImages.portofinoCruisePort,
    alt: "FARMACIA meeting point for Portofino shore excursion guests",
  },
  tenderPierWalk: {
    preferredPath: "/images/portofino-tender-pier-walk.jpg",
    src: siteImages.portofinoPier,
    alt: "Walking route from Portofino tender pier to FARMACIA meeting point",
  },
  santaMargheritaWaterfront: {
    preferredPath: "/images/santa-margherita-ligure-waterfront.jpg",
    src: siteImages.santaMargherita,
    alt: "Santa Margherita Ligure waterfront on a Portofino shore excursion",
  },
  camogliFishingVillage: {
    preferredPath: "/images/camogli-fishing-village.jpg",
    src: siteImages.camogli,
    alt: "Camogli fishing village visited from Portofino cruise port",
  },
  smallGroupVan: {
    preferredPath: "/images/portofino-small-group-van.jpg",
    src: siteImages.portofinoHarbour,
    alt: "Small-group shore excursion van for Portofino, Santa Margherita and Camogli",
  },
} as const;

export type OperatorImageSlot = (typeof operatorImageSlots)[keyof typeof operatorImageSlots];
