import { portGuidePath } from "@/lib/site-paths";

export const siteNavLinks = [
  { label: "Excursions", href: "/portofino-shore-excursions" },
  { label: "Port Guide", href: portGuidePath },
  { label: "Tender Info", href: "/portofino-tender-information" },
  { label: "Cruise Planner", href: "/cruise-planner" },
  { label: "Ship Schedules", href: "/ship-schedules" },
  { label: "Cruise Ships", href: "/cruise-ships" },
  { label: "FAQ", href: "/faq" },
] as const;
