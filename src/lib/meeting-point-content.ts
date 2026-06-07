import { featuredTourFacts } from "@/lib/featured-tour-facts";

/** Guide sign shown at the Farmacia meeting point — detailed on this page and booking confirmations. */
export const meetingPointGuideSign = "PAPILLON SERVICE" as const;

export const meetingPointVerifiedDescription =
  `Your tour departs near the front of the building labelled FARMACIA, located in the small piazza approximately 5 to 7 minutes from the cruise ship tender pier. The address is ${featuredTourFacts.meetingPoint.streetAddress}, ${featuredTourFacts.meetingPoint.locality}. The local representative will be waiting near the front of the FARMACIA, holding a sign that reads ${meetingPointGuideSign}.` as const;

export const meetingPointWalkingDirections =
  "Upon arrival at the tender pier, walk away from the water along the pedestrian-only stone-paved street. Starting from Molo Traghetti, turn right onto Molo Umberto I. Cross Piazza Martiri dell'Olivetta and continue straight along Via Roma until you reach Piazza della Libertà. The FARMACIA is at the far north end of the piazza on the left-hand side. The walk is mostly flat and straightforward, approximately 300 metres / 985 feet, and usually takes about 5 to 7 minutes." as const;

export const meetingPointWalkSummary =
  `${featuredTourFacts.meetingPoint.walkFromTender} (approximately 300 metres / 985 feet)` as const;

export const meetingPointFaqs = [
  {
    question: "Where exactly do I meet my guide?",
    answer: meetingPointVerifiedDescription,
  },
  {
    question: "How long is the walk from the tender pier?",
    answer: `${meetingPointWalkSummary}. ${meetingPointWalkingDirections}`,
  },
  {
    question: "What sign should I look for?",
    answer: `Look for your local representative near the front of FARMACIA on Piazza della Libertà, holding a sign that reads ${meetingPointGuideSign}.`,
  },
  {
    question: "Which tender should I take?",
    answer: `${featuredTourFacts.arrivalAdvice} Take one of the earliest available tenders where appropriate so you have time to walk to Farmacia and meet your guide before the scheduled tour departure.`,
  },
  {
    question: "What if I arrive early?",
    answer: `Head to ${featuredTourFacts.meetingPoint.streetAddress}, ${featuredTourFacts.meetingPoint.locality} and wait near the front of FARMACIA. ${featuredTourFacts.arrivalAdvice} If you cannot see your guide, call the number on your booking confirmation.`,
  },
  {
    question: "What if my tender is delayed?",
    answer:
      "Contact your guide immediately using the number on your booking confirmation. Tender delays happen in Portofino — operators may wait briefly but cannot hold indefinitely when ship schedules are tight.",
  },
] as const;
