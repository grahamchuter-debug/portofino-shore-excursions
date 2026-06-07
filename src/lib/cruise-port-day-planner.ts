import { featuredTour } from "@/lib/featured-tour";
import {
  featuredTourFacts,
  featuredTourGroupSizeLine,
  featuredTourMeetingPointLine,
} from "@/lib/featured-tour-facts";

/** Minutes after ship arrival before passengers are realistically ashore in Portofino. */
export const TENDER_ASHORE_DELAY_MINUTES = 30;

/** Be at the tender pier this many minutes before published departure. */
export const TENDER_PIER_RETURN_BUFFER_MINUTES = 60;

export const PLANNER_DISCLAIMER =
  "Estimates assume Portofino tender operations. Actual timing may vary by cruise line, ship size, weather, and local tender queues." as const;

export type PlannerFitBand = "short" | "good" | "excellent";

export type PlannerExcursionLink = {
  label: string;
  href?: string;
};

export type PortofinoPlannerResult = {
  scheduledPortMinutes: number;
  scheduledPortLabel: string;
  tenderPlanningMinutes: number;
  usableAshoreMinutes: number;
  usableAshoreLabel: string;
  ashoreFromLabel: string;
  recommendedTenderPierReturn: string;
  departureLabel: string;
  confidenceScore: number;
  confidenceLabel: string;
  band: PlannerFitBand;
  recommendationCardTitle: string;
  fitMessage: string;
  mainTourWhyItFits: string | null;
  recommendMainTour: boolean;
  mainTourStrength: "none" | "good" | "strong";
  mainTourBenefits: readonly string[] | null;
  shortStaySuggestions: readonly string[] | null;
  excursions: readonly PlannerExcursionLink[];
  dayPlan: readonly string[];
};

export type PortofinoPlannerError = {
  error: string;
};

export const portofinoPortDayPlannerConfig = {
  portName: "Portofino",
  heading: "Portofino Cruise Day Planner",
  subtitle:
    "Enter your ship arrival and departure times. We calculate tender delays and return-to-ship margins — then recommend excursions that fit your schedule.",
} as const;

export const plannerMainTourBenefits = [
  `${featuredTourFacts.durationHours}-hour duration`,
  "Tender-port friendly",
  "Shared small-group experience",
  featuredTourGroupSizeLine,
  "Visits three Riviera destinations",
] as const;

export const plannerShortStaySuggestions = [
  "Portofino harbour and piazzetta",
  "Castello Brown",
  "Shorter independent sightseeing near the tender pier",
] as const;

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

export function addMinutesToTime(
  time: string,
  addMinutes: number,
): string | null {
  const totalMinutes = parseTimeToMinutes(time);
  if (totalMinutes === null) {
    return null;
  }

  const result = (totalMinutes + addMinutes) % (24 * 60);
  const hours = Math.floor(result / 60);
  const minutes = result % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
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

function getUsableTimeBand(usableHours: number): PlannerFitBand {
  if (usableHours < 5) {
    return "short";
  }
  if (usableHours < 7) {
    return "good";
  }
  return "excellent";
}

function getBandDetails(usableHours: number, band: PlannerFitBand) {
  if (band === "short") {
    return {
      confidenceScore: usableHours < 3 ? 3 : 4,
      confidenceLabel: "Tight schedule",
      recommendationCardTitle: "Stay Close to Portofino",
      fitMessage:
        "With under five hours ashore after tender time, stay near the tender pier. Portofino village, the harbour, and a shorter walk are the best use of your day.",
      mainTourWhyItFits: null,
      recommendMainTour: false,
      mainTourStrength: "none" as const,
      mainTourBenefits: null,
      shortStaySuggestions: plannerShortStaySuggestions,
      excursions: [
        { label: "Portofino village and piazzetta" },
        { label: "Harbour viewpoints and waterfront cafés" },
        { label: "Castello Brown or lighthouse walk" },
        {
          label: "Portofino Coastal Walk",
          href: "/excursions/portofino-coastal-walk",
        },
      ],
      dayPlan: [
        "Take an early tender after the ship clears passengers ashore",
        "Explore Portofino village on foot from the tender landing",
        "Optional short headland walk if energy and timing allow",
        "Return to the tender pier by your recommended time",
      ],
    };
  }

  if (band === "good") {
    return {
      confidenceScore: 7,
      confidenceLabel: "Workable schedule",
      recommendationCardTitle: "Good Fit",
      fitMessage:
        `The ${featuredTour.fullName} may work on this schedule, depending on tender timing and how quickly you reach the meeting point at Farmacia. We recommend checking availability before you book.`,
      mainTourWhyItFits:
        `Your usable time ashore may allow this ${featuredTourFacts.durationLabel.toLowerCase()} tour if tendering is smooth and you arrive at ${featuredTourMeetingPointLine} on time.`,
      recommendMainTour: true,
      mainTourStrength: "good" as const,
      mainTourBenefits: plannerMainTourBenefits,
      shortStaySuggestions: null,
      excursions: [
        {
          label: featuredTour.cardName,
          href: featuredTour.path,
        },
        {
          label: "Portofino Coastal Walk",
          href: "/excursions/portofino-coastal-walk",
        },
      ],
      dayPlan: [
        `Tender ashore as early as practical and walk to ${featuredTourMeetingPointLine}`,
        `Book the ${featuredTour.cardName} if availability is confirmed`,
        "Allow margin for tender queues on the return journey",
        "Be at the tender pier by your recommended return time",
      ],
    };
  }

  return {
    confidenceScore: usableHours >= 9 ? 10 : 9,
    confidenceLabel: "Comfortable schedule",
    recommendationCardTitle: "Excellent Fit",
    fitMessage:
      `Your schedule comfortably suits the ${featuredTour.fullName} — ${featuredTourFacts.durationLabel.toLowerCase()} covering Portofino, Santa Margherita Ligure and Camogli, with return-to-ship planning built in.`,
    mainTourWhyItFits:
      "This is our top recommendation for cruise passengers who want three Riviera villages in one port day — with an 8-seat van, Farmacia meeting point, and return timing planned around tender operations.",
    recommendMainTour: true,
    mainTourStrength: "strong" as const,
    mainTourBenefits: plannerMainTourBenefits,
    shortStaySuggestions: null,
    excursions: [
      {
        label: featuredTour.cardName,
        href: featuredTour.path,
      },
      {
        label: "Camogli & Portofino Coast",
        href: "/excursions/camogli-portofino-coast",
      },
    ],
    dayPlan: [
      "Tender ashore early on busy port days",
      `Morning: ${featuredTour.cardName}`,
      "Free time in Portofino piazzetta if the schedule allows",
      "Return to the tender pier well before your recommended time",
    ],
  };
}

export function calculatePortofinoPlannerResult(
  arrival: string,
  departure: string,
): PortofinoPlannerResult | PortofinoPlannerError {
  const scheduledPortMinutes = calculatePortMinutes(arrival, departure);

  if (scheduledPortMinutes === null) {
    return { error: "Enter valid arrival and departure times." };
  }

  const tenderPlanningMinutes =
    TENDER_ASHORE_DELAY_MINUTES + TENDER_PIER_RETURN_BUFFER_MINUTES;

  if (scheduledPortMinutes <= tenderPlanningMinutes) {
    return {
      error:
        "Your port call is too short once tender ashore and return margins are included. Confirm times with your cruise line.",
    };
  }

  const usableAshoreMinutes = scheduledPortMinutes - tenderPlanningMinutes;
  const usableHours = usableAshoreMinutes / 60;
  const band = getUsableTimeBand(usableHours);
  const bandDetails = getBandDetails(usableHours, band);

  const ashoreFromLabel =
    addMinutesToTime(arrival, TENDER_ASHORE_DELAY_MINUTES) ?? "—";
  const recommendedTenderPierReturn =
    subtractMinutesFromTime(departure, TENDER_PIER_RETURN_BUFFER_MINUTES) ?? "—";

  return {
    scheduledPortMinutes,
    scheduledPortLabel: formatPortDuration(scheduledPortMinutes),
    tenderPlanningMinutes,
    usableAshoreMinutes,
    usableAshoreLabel: formatPortDuration(usableAshoreMinutes),
    ashoreFromLabel: formatTimeLabel(ashoreFromLabel),
    recommendedTenderPierReturn: formatTimeLabel(recommendedTenderPierReturn),
    departureLabel: formatTimeLabel(departure),
    confidenceScore: bandDetails.confidenceScore,
    confidenceLabel: bandDetails.confidenceLabel,
    band,
    recommendationCardTitle: bandDetails.recommendationCardTitle,
    fitMessage: bandDetails.fitMessage,
    mainTourWhyItFits: bandDetails.mainTourWhyItFits,
    recommendMainTour: bandDetails.recommendMainTour,
    mainTourStrength: bandDetails.mainTourStrength,
    mainTourBenefits: bandDetails.mainTourBenefits,
    shortStaySuggestions: bandDetails.shortStaySuggestions,
    excursions: bandDetails.excursions,
    dayPlan: bandDetails.dayPlan,
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

/** @deprecated Use calculatePortofinoPlannerResult */
export function getReturnGuidance(departure: string) {
  return {
    departureLabel: formatTimeLabel(departure),
    recommendedReturn: subtractMinutesFromTime(
      departure,
      TENDER_PIER_RETURN_BUFFER_MINUTES,
    ),
    latestComfortableReturn: subtractMinutesFromTime(
      departure,
      TENDER_PIER_RETURN_BUFFER_MINUTES - 15,
    ),
  };
}
