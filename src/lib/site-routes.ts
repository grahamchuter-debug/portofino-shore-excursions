import { featuredTour } from "@/lib/featured-tour";
import { portGuidePath } from "@/lib/site-paths";
import {
  buildCruiseShipSummaries,
  cruiseShipsHub,
} from "@/lib/portofino-cruise-ships";
import { shipScheduleHub, shipScheduleMonths, shipScheduleYearHubs } from "@/lib/ship-schedule-months";

const cruiseShipRoutes = buildCruiseShipSummaries().map((ship) => ({
  path: `/cruise-ships/${ship.slug}`,
  priority: 0.75,
  changeFrequency: "weekly" as const,
}));

export const siteRoutes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  {
    path: "/portofino-shore-excursions",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: featuredTour.bookingPath,
    priority: 0.95,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/small-group-santa-margherita-camogli-portofino",
    priority: 0.95,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/portofino-santa-margherita-riviera",
    priority: 0.5,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/excursions/camogli-portofino-coast",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/portofino-coastal-walk",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: portGuidePath,
    priority: 0.85,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/one-day-in-portofino",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/best-portofino-shore-excursions",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/is-portofino-worth-visiting",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/portofino-tender-information",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/portofino-meeting-points",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/what-if-my-tender-is-late",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/portofino-vs-cinque-terre",
    priority: 0.7,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/portofino-vs-santa-margherita",
    priority: 0.7,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/camogli-vs-portofino",
    priority: 0.7,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/cruise-planner",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  { path: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
  {
    path: shipScheduleHub.path,
    priority: 0.8,
    changeFrequency: "weekly" as const,
  },
  ...shipScheduleYearHubs.map((yearHub) => ({
    path: yearHub.path,
    priority: 0.8,
    changeFrequency: "weekly" as const,
  })),
  ...shipScheduleMonths.map((month) => ({
    path: `/ship-schedules/${month.slug}`,
    priority: 0.8,
    changeFrequency: "weekly" as const,
  })),
  {
    path: cruiseShipsHub.path,
    priority: 0.8,
    changeFrequency: "weekly" as const,
  },
  ...cruiseShipRoutes,
] as const;
