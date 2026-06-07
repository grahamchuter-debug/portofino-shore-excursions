/** Operational facts for the featured Portofino shore excursion — single source of truth. */
export const featuredTourFacts = {
  durationHours: 4,
  durationLabel: "Approx. 4 hours",
  vehicle: {
    label: "8-seat van",
    maxGuestsPerVan: 8,
    largerGroupsNote: "Larger groups may be split across multiple vans",
  },
  portType: "Tender port",
  meetingPoint: {
    landmark: "Farmacia",
    streetAddress: "Piazza della Libertà, 2",
    locality: "16034 Portofino GE, Italy",
    walkFromTender:
      "5–7 minute walk from the tender pier (approximately 300 metres)",
  },
  arrivalAdvice:
    "Aim to arrive 10 minutes before departure and use an early tender where appropriate.",
  uniqueSellingPoint:
    "The only shared small-group shore excursion from Portofino visiting Portofino, Santa Margherita Ligure and Camogli in a single cruise day.",
} as const;

export const featuredTourMeetingPointLine =
  `${featuredTourFacts.meetingPoint.landmark}, ${featuredTourFacts.meetingPoint.streetAddress}, ${featuredTourFacts.meetingPoint.locality}` as const;

/** Public website copy — guide identification is sent on the booking confirmation only. */
export const featuredTourGuideMeetAdvice =
  "Look for your guide at the meeting point. Sign and contact details are on your booking confirmation." as const;

export const featuredTourMeetingInstructions =
  `Meet at ${featuredTourMeetingPointLine}. ${featuredTourFacts.meetingPoint.walkFromTender}. ${featuredTourGuideMeetAdvice}` as const;

export const featuredTourGroupSizeLine =
  `Maximum ${featuredTourFacts.vehicle.maxGuestsPerVan} guests per ${featuredTourFacts.vehicle.label.toLowerCase()}` as const;
