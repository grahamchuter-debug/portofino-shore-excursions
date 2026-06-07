export type PlannerExcursionLink = {
  label: string;
  href?: string;
};

export type PortTimeTier = {
  minHours: number;
  maxHours: number | null;
  label: string;
  confidenceScore: number;
  confidenceLabel: string;
  confidenceMessage: string;
  excursions: readonly PlannerExcursionLink[];
  dayPlan: readonly string[];
};

export type CruisePortDayPlannerConfig = {
  portName: string;
  heading: string;
  subtitle: string;
  returnBufferNote: string;
  tiers: readonly PortTimeTier[];
};

export const portofinoPortDayPlannerConfig: CruisePortDayPlannerConfig = {
  portName: "Portofino",
  heading: "Portofino Cruise Smart Planner",
  subtitle:
    "Plan your shore excursions around your actual tender time in port, including transfer to and from the ship.",
  returnBufferNote:
    "Always confirm your cruise line's official all aboard time. Tender passengers should allow extra margin for the return boat queue.",
  tiers: [
    {
      minHours: 0,
      maxHours: 4,
      label: "Under 4 hours",
      confidenceScore: 3,
      confidenceLabel: "Limited Port Call",
      confidenceMessage:
        "Tender transfers eat into your day. Stay in Portofino village — avoid longer coastal tours.",
      excursions: [
        { label: "Portofino village stroll" },
        { label: "Santa Margherita waterfront walk" },
        {
          label: "Portofino Coastal Walk",
          href: "/excursions/portofino-coastal-walk",
        },
      ],
      dayPlan: [
        "Disembark the tender promptly and note your meeting point for the return boat",
        "Stay in Portofino village — walkable from the tender landing",
        "Skip Camogli or combined Riviera tours; not enough margin after tender transfers",
        "Be at the tender pier 45 minutes before all aboard",
      ],
    },
    {
      minHours: 4,
      maxHours: 6,
      label: "4 to 6 hours",
      confidenceScore: 6,
      confidenceLabel: "Moderate Port Call",
      confidenceMessage:
        "Enough time for one focused small-group excursion with sensible return-to-ship buffer after tender transfers.",
      excursions: [
        {
          label: "Portofino Coastal Walk",
          href: "/excursions/portofino-coastal-walk",
        },
        {
          label: "Portofino & Santa Margherita Riviera",
          href: "/excursions/portofino-santa-margherita-riviera",
        },
      ],
      dayPlan: [
        "Tender ashore and head straight to your excursion meeting point",
        "Morning: one main tour — coastal walk or Riviera highlights",
        "Allow 45 minutes before all aboard for the return tender queue",
        "Do not attempt Cinque Terre on a short port call",
      ],
    },
    {
      minHours: 6,
      maxHours: 10,
      label: "6 to 10 hours",
      confidenceScore: 9,
      confidenceLabel: "Excellent Port Call",
      confidenceMessage:
        "Plenty of time for the best Portofino shore excursions with comfortable return-to-ship margins.",
      excursions: [
        {
          label: "Portofino & Santa Margherita Riviera",
          href: "/excursions/portofino-santa-margherita-riviera",
        },
        {
          label: "Camogli & Portofino Coast",
          href: "/excursions/camogli-portofino-coast",
        },
        {
          label: "Portofino Coastal Walk",
          href: "/excursions/portofino-coastal-walk",
        },
      ],
      dayPlan: [
        "Tender ashore early to beat queues on busy days",
        "Morning: Riviera highlights or Camogli coastal tour",
        "Midday: free time in Portofino village or Santa Margherita",
        "Return to tender pier by your recommended return time",
      ],
    },
    {
      minHours: 10,
      maxHours: null,
      label: "10+ hours",
      confidenceScore: 10,
      confidenceLabel: "Full Day on the Riviera",
      confidenceMessage:
        "Ideal for combining a small-group excursion with relaxed village time and a calm return to ship.",
      excursions: [
        {
          label: "Camogli & Portofino Coast",
          href: "/excursions/camogli-portofino-coast",
        },
        {
          label: "Portofino & Santa Margherita Riviera",
          href: "/excursions/portofino-santa-margherita-riviera",
        },
        {
          label: "Portofino Coastal Walk",
          href: "/excursions/portofino-coastal-walk",
        },
      ],
      dayPlan: [
        "Tender ashore and confirm your return boat meeting point",
        "Morning: Camogli & Portofino coast tour or Riviera highlights",
        "Midday: lunch in Portofino or Santa Margherita",
        "Afternoon: coastal walk or relaxed village exploration",
        "Keep the final hour free near the tender pier",
      ],
    },
  ],
};

export const RECOMMENDED_RETURN_BUFFER_MINUTES = 45;
export const LATEST_COMFORTABLE_RETURN_BUFFER_MINUTES = 30;

export function parseTimeToMinutes(time: string): number | null {
  const match = /^(\d{1,2}):(\d{2})$/.exec(time.trim());

  if (!match) {
    return null;
  }

  const hours = Number(match[1]);
  const minutes = Number(match[2]);

  if (hours > 23 || minutes > 59) {
    return null;
  }

  return hours * 60 + minutes;
}

export function formatTimeLabel(time: string): string {
  const minutes = parseTimeToMinutes(time);
  if (minutes === null) {
    return time;
  }

  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;
}

export function subtractMinutesFromTime(
  time: string,
  subtractMinutes: number,
): string | null {
  const totalMinutes = parseTimeToMinutes(time);
  if (totalMinutes === null) {
    return null;
  }

  let result = totalMinutes - subtractMinutes;
  if (result < 0) {
    result += 24 * 60;
  }

  const hours = Math.floor(result / 60) % 24;
  const minutes = result % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

export function calculatePortMinutes(
  arrival: string,
  departure: string,
): number | null {
  const arrivalMinutes = parseTimeToMinutes(arrival);
  const departureMinutes = parseTimeToMinutes(departure);

  if (arrivalMinutes === null || departureMinutes === null) {
    return null;
  }

  let diff = departureMinutes - arrivalMinutes;

  if (diff <= 0) {
    diff += 24 * 60;
  }

  return diff;
}

export function formatPortDuration(totalMinutes: number): string {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (hours === 0) {
    return `${minutes} minute${minutes === 1 ? "" : "s"}`;
  }

  if (minutes === 0) {
    return `${hours} hour${hours === 1 ? "" : "s"}`;
  }

  return `${hours} hour${hours === 1 ? "" : "s"} ${minutes} minute${minutes === 1 ? "" : "s"}`;
}

export function getTierForPortMinutes(
  totalMinutes: number,
  tiers: readonly PortTimeTier[],
): PortTimeTier {
  const hours = totalMinutes / 60;

  return (
    tiers.find((tier) => {
      const meetsMinimum = hours >= tier.minHours;
      const belowMaximum = tier.maxHours === null || hours < tier.maxHours;
      return meetsMinimum && belowMaximum;
    }) ?? tiers[tiers.length - 1]
  );
}

export function getReturnGuidance(departure: string) {
  return {
    departureLabel: formatTimeLabel(departure),
    recommendedReturn: subtractMinutesFromTime(
      departure,
      RECOMMENDED_RETURN_BUFFER_MINUTES,
    ),
    latestComfortableReturn: subtractMinutesFromTime(
      departure,
      LATEST_COMFORTABLE_RETURN_BUFFER_MINUTES,
    ),
  };
}

export function getConfidenceTone(score: number): {
  badge: string;
  bar: string;
} {
  if (score >= 9) {
    return { badge: "bg-emerald-100 text-emerald-800", bar: "bg-emerald-500" };
  }
  if (score >= 6) {
    return { badge: "bg-amber-100 text-amber-800", bar: "bg-amber-500" };
  }
  return { badge: "bg-orange-100 text-orange-800", bar: "bg-orange-500" };
}
