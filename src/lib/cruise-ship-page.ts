import type { Metadata } from "next";

import type { CruiseShipProfile } from "@/lib/cruise-ship-types";
import { featuredTour } from "@/lib/featured-tour";
import { portGuidePath } from "@/lib/site-paths";
import { portofinoTenderExplainer } from "@/lib/tender-port-copy";
import { cruiseShipsHub } from "@/lib/portofino-cruise-ships";
import { buildPageMetadata } from "@/lib/site-metadata";
import { portofinoCruisePortAlt, siteImages } from "@/lib/site-images";

export function buildCruiseShipsHubMetadata(): Metadata {
  return buildPageMetadata({
    title: cruiseShipsHub.title,
    description: cruiseShipsHub.description,
    path: cruiseShipsHub.path,
    ogImage: siteImages.portofinoCruisePort,
    ogImageAlt: portofinoCruisePortAlt,
  });
}

export function buildCruiseShipMetadata(ship: CruiseShipProfile): Metadata {
  const title = `${ship.name} in Portofino`;
  const description = `Planning guide for ${ship.name} passengers visiting Portofino: ${ship.callCount} known port call${ship.callCount === 1 ? "" : "s"}, tender advice, shore excursions, and return-to-ship timing for ${ship.cruiseLine}.`;

  return buildPageMetadata({
    title,
    description,
    path: `/cruise-ships/${ship.slug}`,
    ogImage: siteImages.portofinoCruisePort,
    ogImageAlt: `${ship.name} cruise ship at Portofino`,
  });
}

export function getCruiseShipLead(ship: CruiseShipProfile): string {
  return `Cruise planning guide for passengers visiting Portofino aboard ${ship.name}.`;
}

export function getCruiseShipFaqs(ship: CruiseShipProfile) {
  return [
    {
      question: `Does ${ship.name} tender at Portofino?`,
      answer: `${portofinoTenderExplainer} Allow extra time for queuing on busy days.`,
    },
    {
      question: `How long is ${ship.name} usually in Portofino?`,
      answer: `Based on published schedules, ${ship.name} typically spends ${ship.typicalVisitLength.toLowerCase()} in port when call times are confirmed. Always verify arrival and departure times with your cruise line before booking an excursion.`,
    },
    {
      question: `What shore excursions suit ${ship.name} passengers?`,
      answer: `The ${featuredTour.fullName} works well when your port call is seven hours or longer once tender time is counted. See tour details for full information.`,
    },
    {
      question: `When should ${ship.name} passengers return to the tender pier?`,
      answer:
        "Be at the tender landing at least 45 minutes before all aboard. Build in 15 to 20 minutes each way for the tender transfer, plus queue time when multiple ships are in the Gulf.",
    },
  ] as const;
}

export const cruiseShipRelatedLinks = [
  { label: featuredTour.cardName, href: featuredTour.path },
  { label: "Shore excursions", href: "/portofino-shore-excursions" },
  { label: "Port guide", href: portGuidePath },
  { label: "Ship schedules", href: "/ship-schedules" },
  { label: "Tender information", href: "/portofino-tender-information" },
  { label: "One day in Portofino", href: "/one-day-in-portofino" },
  { label: "Portofino vs Cinque Terre", href: "/portofino-vs-cinque-terre" },
  {
    label: "Portofino vs Santa Margherita",
    href: "/portofino-vs-santa-margherita",
  },
] as const;

export const cruiseShipExcursionRecommendations = [
  {
    title: featuredTour.fullName,
    description:
      "Our top recommendation — Santa Margherita Ligure, Camogli, and Portofino village in one small-group shore excursion with coordinated transport from the harbour.",
    href: featuredTour.path,
    bestFor: "7+ hour calls",
    featured: true,
  },
  {
    title: "Camogli & Portofino coast tour",
    description:
      "Ideal when you want authentic fishing village atmosphere plus Portofino village time on longer port days.",
    href: "/excursions/camogli-portofino-coast",
    bestFor: "8+ hour calls",
  },
  {
    title: "Portofino coastal walk",
    description:
      "Compact guided walk on the Portofino headland with village free time.",
    href: "/excursions/portofino-coastal-walk",
    bestFor: "5+ hour calls",
  },
  {
    title: "Independent Portofino harbour walk",
    description:
      "Explore the piazzetta, harbourfront cafés, and boutique streets at your own pace after tendering ashore.",
    href: "/one-day-in-portofino",
    bestFor: "Short to standard calls",
  },
] as const;

export function getVisitLengthAdvice(
  category: CruiseShipProfile["visitLengthCategory"],
) {
  return {
    short: {
      title: "Short call under 6 hours",
      items: [
        "Prioritise tender transfer time — you may have only three to four usable hours ashore.",
        "Stay in Portofino village — explore the piazzetta and harbour near the tender landing.",
        "A compact coastal walk or independent harbour stroll is safer than a multi-stop Riviera tour.",
        "Skip Camogli and Cinque Terre — both need more time than a short call allows.",
      ],
    },
    standard: {
      title: "Standard call 6–9 hours",
      items: [
        "Enough time for the small-group Santa Margherita, Camogli and Portofino tour with return margin.",
        "Book an excursion that meets near the tender pier rather than relying on local buses.",
        "Allow 45 minutes before all aboard at the tender landing, plus queue time.",
        "Camogli is possible on the longer end of this range with a guided tour.",
      ],
    },
    long: {
      title: "Long call 9+ hours",
      items: [
        "Best window for the Camogli and Portofino coast tour or a relaxed multi-village Riviera day.",
        "You can combine village time, coastal scenery, and lunch without rushing.",
        "Still build in tender queue time — long port days attract more passengers ashore.",
        "Use the cruise planner to confirm your personal return deadline.",
      ],
    },
    mixed: {
      title: "Mixed call lengths",
      items: [
        "This ship's published calls vary in length — check your specific sailing before booking.",
        "Compare your arrival and departure times against excursion durations on our cruise planner.",
        "Shorter calls favour Portofino village or a coastal walk; longer calls open up Camogli and combined Riviera tours.",
        "When times are listed as TBC, wait for final confirmation from your cruise line before committing.",
      ],
    },
  }[category];
}
