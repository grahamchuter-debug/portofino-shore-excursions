import { featuredTour } from "@/lib/featured-tour";
import {
  featuredTourFacts,
  featuredTourGroupSizeLine,
  featuredTourGuideMeetAdvice,
  featuredTourMeetingInstructions,
  featuredTourMeetingPointLine,
} from "@/lib/featured-tour-facts";

export const featuredTourTrustPoints = [
  "Built for cruise passengers",
  "Tender-port aware",
  "Small group",
  "Local knowledge",
  "Designed around realistic time in port",
  "Return-to-ship planning",
] as const;

export const featuredTourComparisonRows = [
  {
    label: "See more in one cruise day",
    portofinoOnly: "Portofino village only — compact and crowded on busy days",
    independent:
      "Possible with buses, but connections are infrequent and eat into your time",
    tour: `${featuredTourFacts.durationLabel} — Santa Margherita, Camogli and Portofino in one coordinated excursion`,
  },
  {
    label: "Less planning stress",
    portofinoOnly: "Simple, but you may wonder what you missed along the coast",
    independent:
      "High — tender queues, bus timetables, and return timing are on you",
    tour: "Guide and driver handle routes, pacing, and port-day logistics",
  },
  {
    label: "Local guide and driver support",
    portofinoOnly: "No",
    independent: "No",
    tour: "Yes — English-speaking local guide throughout",
  },
  {
    label: "Better for tender-port timings",
    portofinoOnly: "Works for a short village visit only",
    independent: "Risky when connections slip or return queues build",
    tour: `Meet at ${featuredTourFacts.meetingPoint.landmark} — ${featuredTourFacts.meetingPoint.walkFromTender}`,
  },
  {
    label: "Camogli — often missed by cruise passengers",
    portofinoOnly: "Not reachable on foot from the tender landing",
    independent: "Often skipped because transport is unreliable on a tight schedule",
    tour: "Included — authentic fishing village away from the Portofino crowds",
  },
  {
    label: "Return-to-ship planning",
    portofinoOnly: "You watch the clock yourself",
    independent: "You watch the clock and manage every connection",
    tour: "Return timing coordinated with typical all-aboard schedules",
  },
] as const;

export const featuredTourSampleItineraryDisclaimer =
  `Example itinerary for the ${featuredTourFacts.durationLabel.toLowerCase()} tour only. Actual timings may vary by ship schedule, tender operations, traffic, and local conditions.` as const;

export const featuredTourSampleItinerary = [
  {
    title: "Meet at Farmacia, Portofino",
    description: `After tendering ashore, walk to ${featuredTourMeetingPointLine} (${featuredTourFacts.meetingPoint.walkFromTender}). ${featuredTourGuideMeetAdvice} ${featuredTourFacts.arrivalAdvice}`,
  },
  {
    title: "Santa Margherita Ligure",
    description:
      "Explore the elegant promenade and working harbour — a relaxed contrast to Portofino's celebrity-resort atmosphere.",
  },
  {
    title: "Camogli",
    description:
      "Visit the colourful fishing village that many cruise passengers never reach when they stay in Portofino only.",
  },
  {
    title: "Scenic coastal time",
    description:
      "Drive along the Tigullio Gulf with views of the Ligurian coastline. Photo stops when traffic and timing allow.",
  },
  {
    title: "Return to Portofino",
    description:
      "Head back to Portofino village with your guide monitoring the schedule throughout the day.",
  },
  {
    title: "Free time if schedule allows",
    description:
      "Enjoy the piazzetta and harbour before returning to the tender pier well before all aboard.",
  },
] as const;

export const featuredTourPassengerQuestions = [
  {
    question: "What tender should I take for a 9:30am tour?",
    answer:
      `Take the earliest tender that gets you ashore in time to reach ${featuredTourMeetingPointLine} — usually the first or second departure after your ship clears passengers. Allow time for the tender boat and the ${featuredTourFacts.meetingPoint.walkFromTender}. ${featuredTourFacts.arrivalAdvice}`,
  },
  {
    question: "What if I arrive early and cannot see the guide?",
    answer:
      `Head to ${featuredTourMeetingPointLine}. ${featuredTourGuideMeetAdvice} Call the number on your booking confirmation if you cannot see your guide. Do not wander far from the meeting area.`,
  },
  {
    question: "What if my tender is delayed?",
    answer:
      "Contact your excursion provider immediately with your ship name and revised arrival time. If the delay is short, the group may wait briefly; if tenders are running significantly late, the operator may adjust the itinerary or offer alternatives. See our guide on what to do if your tender is late for immediate steps.",
  },
  {
    question: "Is Portofino a tender port?",
    answer:
      "Yes. Cruise ships anchor offshore and transfer passengers into Portofino village by tender boat. There is no large-ship dock in the harbour itself. Build 30 to 40 minutes into your port day for tender transfers in both directions, plus return-queue time before all aboard.",
  },
  {
    question:
      "Is this tour suitable if we want to see more than just Portofino?",
    answer:
      "Yes — that is exactly what this tour is designed for. You visit Santa Margherita Ligure and Camogli as well as Portofino village, with coordinated transport so you do not lose time navigating local buses on a tight cruise schedule.",
  },
] as const;

export const featuredTourWhyDifferent = {
  heading: "Why this tour is different",
  paragraphs: [
    "Most Portofino excursions are private tours designed for one family or group.",
    "This is one of the only shared small-group shore excursions available in Portofino.",
    `With a maximum of ${featuredTourFacts.vehicle.maxGuestsPerVan} guests per van, cruise passengers can visit Portofino, Santa Margherita Ligure and Camogli without the cost of a private tour.`,
    "The itinerary is designed specifically around cruise ship schedules and tender operations.",
  ],
} as const;

export const featuredTourRecommendedBullets = [
  "Most Popular Cruise Excursion",
  featuredTourGroupSizeLine,
  "Shared small-group experience",
  "Portofino",
  "Santa Margherita Ligure",
  "Camogli",
  "Tender-port friendly",
  "Return-to-ship planning",
  "Limited spaces",
] as const;

export const featuredTourWhyCreated = {
  heading: "Why we created this tour",
  paragraphs: [
    "Most cruise passengers only see Portofino harbour — and it is stunning. But the best Riviera day combines Portofino with Santa Margherita Ligure and Camogli: three very different coastal villages within a short drive of the tender landing.",
    "We built this itinerary specifically around cruise passengers and Portofino tender operations. That means a fixed meeting point at Farmacia on Piazza della Libertà, realistic pacing for tender ashore and return queues, and enough margin to get you back before all aboard.",
    "If your call is shorter, we will tell you honestly. Portofino village on foot may be the smarter choice. When you have five to seven usable hours ashore, check availability and tender timing. With seven or more, this small-group tour is the best use of your port day.",
  ],
} as const;

export const bookingReassurancePoints = [
  "We check your ship arrival and departure time before confirming",
  "Meeting point at Farmacia, Piazza della Libertà — sent after confirmation",
  "Tender timing is considered in our recommendation",
  "Return-to-ship planning is built into the itinerary",
] as const;

export const featuredTourRecommendationCopy = {
  label: "Our recommended Portofino shore excursion",
  title: featuredTour.fullName,
  description: featuredTourFacts.uniqueSellingPoint,
  tourLinkLabel: "View Tour",
  availabilityLinkLabel: "Check Availability",
} as const;
