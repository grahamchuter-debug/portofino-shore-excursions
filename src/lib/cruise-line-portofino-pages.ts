import { featuredTour } from "@/lib/featured-tour";
import { featuredTourFacts } from "@/lib/featured-tour-facts";
import { meetingPointPath } from "@/lib/site-paths";
import { buildCruiseShipSummaries } from "@/lib/portofino-cruise-ships";
import type { CruiseShipSummary } from "@/lib/cruise-ship-types";
import { getCruiseShipPath } from "@/lib/cruise-ship-utils";

export type CruiseLinePortofinoPage = {
  slug: string;
  path: string;
  cruiseLineName: string;
  /** Matches `cruiseLine` values in schedule CSV data */
  cruiseLineMatches: readonly string[];
  h1: string;
  title: string;
  description: string;
  intro: string;
  tenderIntro: string;
  whyTenderDifferent: string;
  faqs: readonly { question: string; answer: string }[];
};

const cruisePlannerPath = "/cruise-planner";
const tenderInfoPath = "/portofino-tender-information";
const shipSchedulesPath = "/ship-schedules";

function shipsForLine(
  matches: readonly string[],
  ships: CruiseShipSummary[],
): CruiseShipSummary[] {
  const matchSet = new Set(matches);
  return ships.filter((ship) => matchSet.has(ship.cruiseLine));
}

export const cruiseLinePortofinoPages: CruiseLinePortofinoPage[] = [
  {
    slug: "celebrity-cruises-portofino",
    path: "/cruise-lines/celebrity-cruises-portofino",
    cruiseLineName: "Celebrity Cruises",
    cruiseLineMatches: ["Celebrity Cruises", "Celebrity"],
    h1: "Celebrity Cruises Portofino Shore Excursions",
    title: "Celebrity Cruises Portofino Shore Excursions & Tender Guide",
    description:
      "Plan your Celebrity Cruises Portofino port day: tender logistics, meeting point directions, and the recommended small-group Santa Margherita, Camogli and Portofino shore excursion.",
    intro:
      "Celebrity Cruises ships calling at Portofino anchor in the Gulf of Tigullio and tender passengers into the village. Build tender time into your port day before booking a multi-village Riviera excursion.",
    tenderIntro:
      "Portofino is a tender port — there is no large-ship dock in the harbour. Celebrity passengers disembark by tender boat, then walk to shore excursion meeting points in the village.",
    whyTenderDifferent:
      "Unlike docked ports where you step straight onto a pier, Portofino requires tender boats in both directions. That means queuing, walking from the landing, and returning well before all aboard — especially on busy days when several ships share the Gulf anchorage.",
    faqs: [
      {
        question: "Do Celebrity ships dock in Portofino?",
        answer:
          "No. Celebrity Cruises vessels anchor offshore and use tender boats to reach Portofino village. Allow time for tender transfers when planning shore excursions.",
      },
      {
        question: "Which Celebrity shore excursion fits a Portofino call?",
        answer: `The ${featuredTour.fullName} is designed for tender-port timing — ${featuredTourFacts.durationLabel}, maximum ${featuredTourFacts.vehicle.maxGuestsPerVan} guests per van, visiting Santa Margherita Ligure, Camogli and Portofino.`,
      },
      {
        question: "Where do I meet my excursion after tendering?",
        answer: `Meet near FARMACIA on Piazza della Libertà — approximately 5 to 7 minutes walk from the tender pier. See our meeting point guide for walking directions.`,
      },
    ],
  },
  {
    slug: "princess-cruises-portofino",
    path: "/cruise-lines/princess-cruises-portofino",
    cruiseLineName: "Princess Cruises",
    cruiseLineMatches: ["Princess Cruises", "Princess"],
    h1: "Princess Cruises Portofino Shore Excursions",
    title: "Princess Cruises Portofino Shore Excursions & Tender Guide",
    description:
      "Plan your Princess Cruises Portofino port day: tender logistics, excursion timing, and the small-group Santa Margherita, Camogli and Portofino tour for cruise passengers.",
    intro:
      "Princess Cruises itineraries that include Portofino use tender operations into the village harbour. Plan your shore time around tender ashore, excursion meeting points, and return queues before all aboard.",
    tenderIntro:
      "Portofino is a tender port. Princess passengers reach the village by tender boat — not by walking off the ship onto a dock.",
    whyTenderDifferent:
      "Tender ports add queuing and walking time that docked ports do not. For Portofino, that means reaching your meeting point after disembarking and allowing margin to return to the tender pier before your ship's all-aboard time.",
    faqs: [
      {
        question: "Is Portofino a tender port for Princess Cruises?",
        answer:
          "Yes. Cruise ships anchor in the Gulf of Tigullio and transfer passengers to Portofino village by tender.",
      },
      {
        question: "How much time do I need for a Riviera excursion?",
        answer: `The recommended small-group tour runs ${featuredTourFacts.durationLabel}. Use our cruise planner with your ship's published arrival and departure times to see whether a multi-village tour fits your call.`,
      },
      {
        question: "Where is the excursion meeting point?",
        answer: `Near FARMACIA, Piazza della Libertà, 2 — about 5 to 7 minutes walk from the tender landing. Full directions are on our meeting point page.`,
      },
    ],
  },
  {
    slug: "viking-cruises-portofino",
    path: "/cruise-lines/viking-cruises-portofino",
    cruiseLineName: "Viking Cruises",
    cruiseLineMatches: ["Viking Ocean Cruises", "Viking Cruises", "Viking"],
    h1: "Viking Cruises Portofino Shore Excursions",
    title: "Viking Cruises Portofino Shore Excursions & Tender Guide",
    description:
      "Plan your Viking Cruises Portofino port day: tender operations, meeting point directions, and the small-group Santa Margherita, Camogli and Portofino shore excursion.",
    intro:
      "Viking Cruises calls at Portofino use the same Gulf anchorage and village tender landing as other cruise lines. Shore excursion timing should account for tender ashore and return queues.",
    tenderIntro:
      "Portofino is a tender port — Viking passengers reach the village by boat from the anchored ship.",
    whyTenderDifferent:
      "At docked ports you step directly onto land. At Portofino, every minute ashore starts after a tender transfer and a short walk to meeting points in the village — plan accordingly.",
    faqs: [
      {
        question: "How do Viking passengers get ashore in Portofino?",
        answer:
          "By tender boat from the ship to the Portofino village landing. There is no cruise pier in the harbour itself.",
      },
      {
        question: "What shore excursion do you recommend?",
        answer: `The ${featuredTour.fullName} — a shared small-group tour to Santa Margherita Ligure, Camogli and Portofino, designed around tender-port logistics.`,
      },
      {
        question: "How early should I take a tender for a booked excursion?",
        answer: featuredTourFacts.arrivalAdvice,
      },
    ],
  },
  {
    slug: "holland-america-portofino",
    path: "/cruise-lines/holland-america-portofino",
    cruiseLineName: "Holland America Line",
    cruiseLineMatches: ["Holland America Line", "Holland America"],
    h1: "Holland America Line Portofino Shore Excursions",
    title: "Holland America Portofino Shore Excursions & Tender Guide",
    description:
      "Plan your Holland America Line Portofino port day: tender information, meeting point walk from the pier, and the small-group Santa Margherita, Camogli and Portofino excursion.",
    intro:
      "Holland America Line ships calling at Portofino anchor offshore and tender into the village. Oosterdam and other HAL vessels in our published schedules typically allow a standard port day — check your call length before booking a multi-village tour.",
    tenderIntro:
      "Portofino is a tender port for Holland America Line. Passengers reach the village by tender boat, then walk to excursion meeting points near Piazza della Libertà.",
    whyTenderDifferent:
      "Tender operations mean your port day starts after queuing and the boat ride — not the moment the ship arrives. Build that into excursion timing and return planning.",
    faqs: [
      {
        question: "Does Holland America dock in Portofino?",
        answer:
          "No — ships anchor in the Gulf of Tigullio and use tenders. See our tender information guide for passenger planning tips.",
      },
      {
        question: "Which Holland America ships visit Portofino?",
        answer:
          "Check our Portofino ship schedules and Holland America ship pages below for published calls in our data.",
      },
      {
        question: "Where do shore excursions meet?",
        answer: `Near FARMACIA on Piazza della Libertà — approximately 300 metres from the tender pier. See the meeting point page for step-by-step walking directions.`,
      },
    ],
  },
  {
    slug: "cunard-portofino",
    path: "/cruise-lines/cunard-portofino",
    cruiseLineName: "Cunard",
    cruiseLineMatches: ["Cunard Line", "Cunard"],
    h1: "Cunard Portofino Shore Excursions",
    title: "Cunard Portofino Shore Excursions & Tender Guide",
    description:
      "Plan your Cunard Portofino port day: tender logistics, excursion meeting point, and the recommended small-group Santa Margherita, Camogli and Portofino shore excursion.",
    intro:
      "Cunard itineraries that call at Portofino use tender operations into the village harbour. Plan shore time around tender transfers, walking to your meeting point, and return queues before all aboard.",
    tenderIntro:
      "Portofino is a tender port — Cunard passengers reach the village by tender boat from the anchored ship.",
    whyTenderDifferent:
      "Unlike Southampton-style docked calls, Portofino requires tender boats and village walking time. Excursion meeting points are a few minutes from the tender landing, not at the ship's gangway.",
    faqs: [
      {
        question: "Is Portofino a tender port for Cunard?",
        answer:
          "Yes. Cruise ships anchor offshore and passengers tender into Portofino village.",
      },
      {
        question: "What is the recommended Portofino shore excursion?",
        answer: `${featuredTour.fullName} — ${featuredTourFacts.durationLabel}, shared small-group format, visiting Santa Margherita Ligure, Camogli and Portofino.`,
      },
      {
        question: "How do I find my guide after tendering?",
        answer: `Walk to FARMACIA on Piazza della Libertà (${featuredTourFacts.meetingPoint.walkFromTender}). Full directions and FAQs are on our meeting point page.`,
      },
    ],
  },
];

export function getCruiseLinePortofinoPage(
  slug: string,
): CruiseLinePortofinoPage | undefined {
  return cruiseLinePortofinoPages.find((page) => page.slug === slug);
}

export function getCruiseLinePageForShip(
  cruiseLine: string,
): CruiseLinePortofinoPage | undefined {
  return cruiseLinePortofinoPages.find((page) =>
    page.cruiseLineMatches.includes(cruiseLine),
  );
}

export function getCruiseLinePortofinoShips(
  page: CruiseLinePortofinoPage,
): CruiseShipSummary[] {
  return shipsForLine(page.cruiseLineMatches, buildCruiseShipSummaries());
}

export const cruiseLinePortofinoHubLinks = cruiseLinePortofinoPages.map(
  (page) => ({
    label: page.cruiseLineName,
    href: page.path,
  }),
);

export const cruiseLinePortofinoRelatedPaths = {
  cruisePlannerPath,
  tenderInfoPath,
  shipSchedulesPath,
  meetingPointPath,
  featuredTourPath: featuredTour.path,
  featuredTourBookingPath: featuredTour.bookingPath,
} as const;
