import type { CruiseShipProfile } from "@/lib/cruise-ship-types";

export type CruiseShipPageNotes = {
  /** Replaces the generic schedule intro paragraph */
  scheduleIntro?: string;
  /** Additional cruise-line context shown after the schedule section */
  cruiseLineContext?: string;
  /** Ship-specific tender advice */
  tenderNote?: string;
};

const celebrityLines = new Set([
  "Celebrity Cruises",
  "Celebrity",
]);

const regentLines = new Set([
  "Regent Seven Seas",
  "Regent",
]);

const silverseaLines = new Set(["Silversea"]);

/** Ship-specific copy keyed by slug — keeps pages from reading identically */
export const cruiseShipPageNotes: Record<string, CruiseShipPageNotes> = {
  "celebrity-ascent": {
    scheduleIntro:
      "Celebrity Ascent typically spends a full day in the Gulf of Tigullio when Portofino is on the itinerary — published calls in our schedules often run from early morning to early evening, giving ample time for a Riviera excursion after tendering ashore.",
    cruiseLineContext:
      "Celebrity Cruises uses standard Gulf anchorage and village tender landings. Ascent is a larger ship, so morning tender queues can be busy — take an early boat if you have booked a harbour meeting time.",
    tenderNote:
      "Celebrity passengers should watch the cruise app for tender ticket distribution the evening before. Ascent carries many guests ashore on popular Riviera days.",
  },
  "silver-nova": {
    scheduleIntro:
      "Silver Nova is a Silversea expedition-style luxury ship with fewer guests than mainstream vessels — Portofino calls in our schedules often allow 11 hours or more in port, which is an excellent window for the full Santa Margherita, Camogli and Portofino tour.",
    cruiseLineContext:
      "Silversea tenders are usually efficient given the smaller passenger count, but Portofino village still gets crowded when multiple ships anchor in the Gulf on the same day.",
    tenderNote:
      "Silver Nova passengers often disembark quickly compared with mega-ships, but still allow time to reach the harbour meeting point — not the moment the anchor drops.",
  },
  "seven-seas-prestige": {
    scheduleIntro:
      "Seven Seas Prestige brings Regent Seven Seas' all-inclusive luxury experience to the Italian Riviera. Published Portofino calls in our data typically allow a standard to long day ashore — enough for a coordinated small-group tour when tendering is smooth.",
    cruiseLineContext:
      "Regent Seven Seas ships anchor offshore like other mainstream vessels. Prestige passengers benefit from smaller guest numbers than the largest cruise ships, but return queues still build on busy mornings.",
  },
  "seven-seas-mariner": {
    scheduleIntro:
      "Seven Seas Mariner calls at Portofino on select Mediterranean itineraries. When arrival and departure times are confirmed, Mariner usually allows a comfortable window for village time or a guided Riviera tour.",
    cruiseLineContext:
      "Regent passengers should confirm all-aboard on the ship app — it may differ slightly from published port departure time.",
  },
  "seven-seas-navigator": {
    scheduleIntro:
      "Seven Seas Navigator is one of Regent's classic luxury ships calling at Portofino on Mediterranean sailings. Check your specific call length below before booking a multi-village excursion.",
    cruiseLineContext:
      "Navigator's guest count is moderate by industry standards. Tender operations still depend on Gulf conditions and how many ships share the anchorage that day.",
  },
};

export function getCruiseShipPageNotes(
  ship: CruiseShipProfile,
): CruiseShipPageNotes {
  const specific = cruiseShipPageNotes[ship.slug];

  if (specific) {
    return specific;
  }

  if (celebrityLines.has(ship.cruiseLine)) {
    return {
      cruiseLineContext: `${ship.name} anchors in the Gulf of Tigullio and tenders into Portofino village. Celebrity ships carry large guest counts — early tenders help on days when several vessels share the anchorage.`,
      tenderNote:
        "Check the Celebrity app for tender tickets and all-aboard times the night before your Portofino call.",
    };
  }

  if (regentLines.has(ship.cruiseLine)) {
    return {
      cruiseLineContext: `${ship.name} offers Regent Seven Seas' luxury Mediterranean experience. Smaller guest numbers than the largest ships, but Portofino tender queues still apply when the Gulf is busy.`,
      tenderNote:
        "Regent passengers should treat the ship's all-aboard announcement as the hard deadline, not the published port departure time alone.",
    };
  }

  if (silverseaLines.has(ship.cruiseLine)) {
    return {
      cruiseLineContext: `${ship.name} is a Silversea luxury ship with fewer guests than mainstream vessels — tender operations are often quicker, but village crowds on peak days still affect timing.`,
      tenderNote:
        "Silversea guests should still allow margin for the return tender queue, especially when multiple ships are in port.",
    };
  }

  if (ship.cruiseLine === "Oceania Cruises" || ship.cruiseLine.includes("Oceania")) {
    return {
      cruiseLineContext: `${ship.name} (Oceania Cruises) calls at Portofino on select Mediterranean itineraries. Oceania ships are mid-size — tender queues vary with how many vessels share the Gulf that day.`,
    };
  }

  if (ship.cruiseLine === "Seabourn") {
    return {
      cruiseLineContext: `${ship.name} is a Seabourn luxury ship with a relatively small guest count. Tender transfers are often efficient, but plan return margins for busy Riviera mornings.`,
    };
  }

  return {
    cruiseLineContext: `${ship.name} (${ship.cruiseLine}) anchors offshore and tenders into Portofino village like other cruise ships calling at this port. Guest count and tender operations vary — use your specific call times below to plan ashore.`,
  };
}

export function getCruiseShipScheduleIntro(ship: CruiseShipProfile): string {
  const notes = getCruiseShipPageNotes(ship);

  if (notes.scheduleIntro) {
    return notes.scheduleIntro;
  }

  return `${ship.name} (${ship.cruiseLine}) has ${ship.callCount} known Portofino port call${ship.callCount === 1 ? "" : "s"} in our published schedules. Passengers tender into Portofino village from the anchored ship — use these timings to judge how much time you have ashore and whether a guided excursion or independent visit makes more sense.`;
}
