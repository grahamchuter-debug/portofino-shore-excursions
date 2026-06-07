import type { ExcursionData } from "@/lib/excursion-types";
import { featuredTour } from "@/lib/featured-tour";
import {
  featuredTourFacts,
  featuredTourGroupSizeLine,
  featuredTourGuideMeetAdvice,
  featuredTourMeetingInstructions,
  featuredTourMeetingPointLine,
} from "@/lib/featured-tour-facts";
import { portGuidePath } from "@/lib/site-paths";
import { siteImages } from "@/lib/site-images";

export const smallGroupSantaMargheritaCamogliPortofinoExcursion: ExcursionData = {
  slug: featuredTour.slug,
  path: featuredTour.path,
  title: featuredTour.cardName,
  headline: `${featuredTour.fullName} for Cruise Passengers`,
  lead: "Explore three Italian Riviera highlights in one cruise day — Santa Margherita Ligure, Camogli, and Portofino village — on a small-group shore excursion designed around tender port times and return-to-ship reassurance.",
  metaTitle:
    "Small Group Santa Margherita, Camogli & Portofino Shore Excursion",
  metaDescription:
    "Book the small-group Santa Margherita, Camogli and Portofino shore excursion for cruise passengers tendering into Portofino. Three Riviera villages, local guide, and return-to-ship timing.",
  heroImage: siteImages.santaMargherita,
  heroImageAlt:
    "Santa Margherita Ligure on the Italian Riviera, included on the small-group Portofino shore excursion",
  heroBadge: "⭐ Most Popular Cruise Excursion",
  summary: {
    duration: featuredTourFacts.durationLabel,
    meetingPoint: featuredTourMeetingPointLine,
    returnReassurance:
      "Timed for typical port calls with buffer before all aboard",
    bestFor:
      "Cruise passengers who want Portofino, Santa Margherita and Camogli in one port day",
  },
  snapshotCards: [
    { label: "Tender transfer", value: "Approx. 15 to 20 minutes each way" },
    { label: "Fitness level", value: "Easy — mostly walking on paved surfaces" },
    { label: "Vehicle", value: featuredTourFacts.vehicle.label },
    { label: "Group size", value: `${featuredTourGroupSizeLine} · ${featuredTourFacts.vehicle.largerGroupsNote}` },
    { label: "Port call suitability", value: "Best for 5+ usable hours ashore after tender time" },
  ],
  gallery: [
    {
      src: siteImages.santaMargherita,
      alt: "Santa Margherita Ligure harbour on the small-group Portofino shore excursion",
    },
    {
      src: siteImages.camogli,
      alt: "Camogli fishing village colourful harbourfront on the Riviera shore excursion",
    },
    {
      src: siteImages.portofinoHarbour,
      alt: "Portofino harbour with colourful boats and waterfront cafés",
    },
    {
      src: siteImages.portofinoVillage,
      alt: "Portofino village piazzetta with pastel buildings and harbour views",
    },
    {
      src: siteImages.camogliHarbour,
      alt: "Camogli waterfront with fishing boats on the Italian Riviera",
    },
    {
      src: siteImages.portofinoHarbourAerial,
      alt: "Aerial view of Portofino harbour with yachts and colourful waterfront buildings on the Italian Riviera",
    },
  ],
  highlights: [
    "Three Riviera destinations in one cruise day — Portofino, Santa Margherita Ligure and Camogli",
    `${featuredTourGroupSizeLine} in an ${featuredTourFacts.vehicle.label} — ${featuredTourFacts.vehicle.largerGroupsNote.toLowerCase()}`,
    "Local English-speaking guide who knows the coastal roads and port schedules",
    "Free time in Portofino's famous piazzetta and harbour",
    "Scenic drive along the Tigullio Gulf with photo stops",
    "Return-to-ship timing built around your cruise schedule",
  ],
  description: [
    `This is our most recommended shore excursion for cruise passengers calling at Portofino — a ${featuredTourFacts.durationLabel} shared small-group day. Ships anchor offshore and tender into the village; the tour is planned around that reality, with a meeting point at ${featuredTourFacts.meetingPoint.landmark} and enough margin to get you back before all aboard.`,
    "Your local guide leads a small group along the Riviera coast to Santa Margherita Ligure, where you explore the elegant promenade and working harbour. From there, continue to Camogli — a colourful fishing village with waterfront trattorias and a more authentic Ligurian atmosphere than the celebrity resort crowds in Portofino.",
    "The day finishes in Portofino village itself, with free time in the piazzetta and harbour to photograph the iconic harbour, enjoy gelato, or relax at a waterfront café before returning to the tender pier.",
  ],
  whyCruisePassengers: [
    "Covers three famous Riviera villages without navigating local buses or ferries on a tight schedule",
    featuredTourMeetingInstructions,
    `${featuredTourFacts.arrivalAdvice} Portofino is a ${featuredTourFacts.portType.toLowerCase()}.`,
    "Your guide monitors traffic on the coastal road and adjusts the pace if queues at the tender pier are building",
    "Independent travel to Camogli from the tender landing involves multiple connections with unreliable timetables — a guided tour removes that risk",
  ],
  itinerary: [
    {
      title: `Meet at ${featuredTourFacts.meetingPoint.landmark}`,
      description: `${featuredTourMeetingInstructions} ${featuredTourFacts.arrivalAdvice}`,
    },
    {
      title: "Scenic coastal drive along the Tigullio Gulf",
      description:
        "Travel by small vehicle along the Riviera road with views of the Ligurian coastline. Your guide shares local context as you head toward Santa Margherita Ligure.",
    },
    {
      title: "Santa Margherita Ligure",
      description:
        "Explore the elegant seafront promenade and harbour. Enjoy free time to stroll, take photos, or grab an espresso before continuing along the coast.",
    },
    {
      title: "Camogli fishing village",
      description:
        "Discover one of Liguria's most authentic harbour towns — colourful waterfront houses, working fishing boats, and relaxed village streets away from the Portofino crowds.",
    },
    {
      title: "Portofino village free time",
      description:
        "Return to Portofino for free time in the piazzetta and harbour. This is your chance for the classic Portofino photos before heading back to the tender pier.",
    },
    {
      title: "Return to the tender pier",
      description:
        "Your guide ensures the group reaches the Portofino harbour with time to queue for the return tender. Be at the pier well before all aboard — typically 45 minutes ahead on busy days.",
    },
  ],
  bestForDetails: [
    "First-time visitors who want the classic Italian Riviera experience in one port day",
    "Passengers with five or more usable hours ashore once tender transfers are counted",
    "Travellers who prefer small groups over large coach tours",
    "Anyone who wants Portofino plus nearby villages without transport stress",
    "Not ideal for very short port calls under five usable hours — consider the Portofino coastal walk instead",
  ],
  included: [
    "Small-group guided tour with limited spaces",
    "Local English-speaking guide",
    "Coastal transport between Santa Margherita, Camogli, and Portofino",
    "Free time in Portofino village",
    "Return-to-ship timing coordination",
  ],
  notIncluded: [
    "Tender boat between ship and shore (provided by your cruise line)",
    "Food, drinks, and personal shopping",
    "Gratuities for your guide",
    "Travel insurance or personal expenses",
  ],
  timingAdvice: [
    "Check your cruise app for tender departure times, all aboard, and final departure before booking. Treat all aboard as your hard deadline.",
    "Allow 45 minutes before all aboard to queue for the return tender, clear any security, and board without stress.",
    `${featuredTourFacts.arrivalAdvice} Disembark on an early tender on busy port days.`,
    "Compare your hours in port using our cruise planner to confirm this tour fits your schedule comfortably.",
  ],
  faqs: [
    {
      question: "Where does this excursion meet cruise passengers?",
      answer: featuredTourMeetingInstructions,
    },
    {
      question: "How long is the Santa Margherita, Camogli and Portofino tour?",
      answer: `The tour runs approximately ${featuredTourFacts.durationHours} hours including transport and village stops. Duration may vary slightly depending on traffic and your ship's port times.`,
    },
    {
      question: "Will I get back to my cruise ship on time?",
      answer:
        "This excursion is designed for typical Portofino port calls with a buffer before all aboard. Only your cruise line confirms the final deadline — monitor your ship's app throughout the day.",
    },
    {
      question: "Can I do this tour if my port call is only six hours?",
      answer:
        "Six hours scheduled in port may work once tender time is counted — the tour itself is four hours. Use our cruise planner with your arrival and departure times to confirm you have enough usable time ashore.",
    },
    {
      question: "How do I find my guide?",
      answer: `${featuredTourMeetingPointLine}. ${featuredTourFacts.meetingPoint.walkFromTender}. ${featuredTourGuideMeetAdvice}`,
    },
    {
      question: "Why book a small-group tour instead of going independently?",
      answer:
        "Independent travel requires navigating tender boats, local buses, and return timing on your own. A small-group tour with a local guide handles transport, knows the fastest routes, and builds return-to-ship margins into the itinerary.",
    },
    {
      question: "Does this tour visit all three villages?",
      answer:
        "Yes — Santa Margherita Ligure, Camogli, and Portofino village are all included. Portofino is where you tender ashore and where the tour ends, giving you free time in the famous harbour and piazzetta.",
    },
  ],
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Shore Excursions", href: "/portofino-shore-excursions" },
    { label: featuredTour.cardName },
  ],
  relatedLinks: [
    { label: "Book this tour", href: featuredTour.bookingPath },
    { label: "Port guide", href: portGuidePath },
    { label: "Tender information", href: "/portofino-tender-information" },
    { label: "Meeting points", href: "/portofino-meeting-points" },
    { label: "One day in Portofino", href: "/one-day-in-portofino" },
    { label: "Cruise planner", href: "/cruise-planner" },
  ],
  bookingHref: featuredTour.bookingPath,
  bookingLabel: "Book now",
  ctaTitle: "Ready to explore the Portofino Riviera?",
  ctaText:
    "Secure your place on this small-group tour before port day. Three Riviera villages, local guides, tender-friendly timing, and return-to-ship reassurance.",
};

/** @deprecated Use smallGroupSantaMargheritaCamogliPortofinoExcursion — kept for legacy imports */
export const portofinoSantaMargheritaExcursion =
  smallGroupSantaMargheritaCamogliPortofinoExcursion;

export const camogliPortofinoCoastExcursion: ExcursionData = {
  slug: "camogli-portofino-coast",
  path: "/excursions/camogli-portofino-coast",
  title: "Camogli & Portofino Coast Tour",
  headline: "Camogli & Portofino Coast Tour for Cruise Passengers",
  lead: "Discover the fishing village of Camogli and the Portofino coastline on an intimate small-group excursion — local knowledge, scenic views, and reliable return-to-ship timing for tender passengers.",
  metaTitle: "Camogli & Portofino Coast Shore Excursion",
  metaDescription:
    "Small-group Camogli and Portofino coast shore excursion for cruise passengers. Explore authentic Ligurian fishing villages with local guide and return-to-ship timing.",
  heroImage: siteImages.camogli,
  heroImageAlt: "Camogli",
  heroBadge: "⭐ Small Group Favourite",
  summary: {
    duration: "Approx. 5 to 6 hours",
    meetingPoint: "Portofino harbour, near tender landing",
    returnReassurance:
      "Coordinated return with 45-minute tender queue buffer",
    bestFor:
      "Travellers who want authentic village life beyond the Portofino postcard",
  },
  snapshotCards: [
    { label: "Tender transfer", value: "Approx. 15 to 20 minutes each way" },
    { label: "Fitness level", value: "Easy" },
    { label: "Group size", value: "Small group, max 12 guests" },
    { label: "Port call suitability", value: "Best for 8+ hour visits" },
  ],
  gallery: [
    {
      src: siteImages.camogli,
      alt: "Camogli",
    },
    {
      src: siteImages.camogliHarbour,
      alt: "Camogli",
    },
    {
      src: siteImages.portofinoCoast,
      alt: "Portofino lighthouse on the Mediterranean coast",
    },
    {
      src: siteImages.ligurianCoast,
      alt: "Portofino tour view",
    },
    {
      src: siteImages.portofinoHarbour,
      alt: "Portofino harbour",
    },
    {
      src: siteImages.rivieraCoast,
      alt: "Aerial view of Portofino harbour on the Italian Riviera",
    },
  ],
  highlights: [
    "Explore Camogli, one of Liguria's most authentic fishing villages",
    "Smaller group size (max 12) for a more personal experience",
    "Scenic coastal drive with photo stops above the Tigullio Gulf",
    "Free time in Portofino village at the end of the tour",
    "Local guide who knows the roads, traffic patterns, and return routes",
    "Designed for tender passengers with built-in schedule margins",
  ],
  description: [
    "Camogli is the Riviera village that cruise passengers often miss — and that is exactly why this small-group tour exists. While most visitors crowd into Portofino's piazzetta, Camogli offers colourful harbourfront houses, working fishing boats, and waterfront trattorias without the celebrity-resort atmosphere.",
    "Your local guide collects the group near the Portofino tender landing and drives along the coastal road to Camogli. You explore the harbour, learn about Ligurian fishing traditions, and enjoy free time for lunch or a stroll along the promenade before continuing through the Riviera.",
    "This tour suits passengers with longer port calls who want depth rather than a quick photo stop. The smaller group size means your guide can adapt the pace, answer questions about local life, and adjust timing if traffic slows the coastal road.",
    "Independent travel to Camogli from the tender pier involves multiple bus connections with unreliable timetables. On a port day where every minute counts, a small-group excursion with coordinated transport is the safer choice for return-to-ship reliability.",
  ],
  included: [
    "Small-group guided tour (max 12 guests)",
    "Local English-speaking guide",
    "Coastal transport: Santa Margherita, Camogli, and Portofino",
    "Free time in Camogli and Portofino",
    "Return-to-ship timing coordination",
  ],
  notIncluded: [
    "Tender boat between ship and shore",
    "Food, drinks, and personal purchases",
    "Gratuities for your guide",
    "Travel insurance or personal expenses",
  ],
  timingAdvice: [
    "This tour needs at least eight hours in port once tender transfers are counted. Use our cruise planner to verify your schedule before booking.",
    "Build a 45-minute buffer before all aboard for the return tender queue. On busy days with multiple ships in the Gulf, queues can stretch to 30 minutes or more.",
    "If your ship arrives late due to tender delays, contact your excursion operator immediately. See our guide on what to do if your tender is late.",
    "Coastal road traffic can slow the return journey on summer weekends. Your guide monitors timing throughout the day.",
  ],
  faqs: [
    {
      question: "How is Camogli different from Portofino?",
      answer:
        "Camogli is a working fishing village with a relaxed, local atmosphere. Portofino is a smaller, more exclusive resort village. Both are beautiful, but Camogli offers a more authentic glimpse of Ligurian daily life.",
    },
    {
      question: "Is this tour suitable for a six-hour port call?",
      answer:
        "Six hours is possible but tight. We recommend eight or more hours in port for this tour, which includes Camogli, the coastal drive, and free time in Portofino.",
    },
    {
      question: "Why is the group size smaller on this tour?",
      answer:
        "Camogli's narrow streets and harbourfront are best explored in a small group. A maximum of 12 guests keeps the experience personal and allows your guide to manage timing more precisely.",
    },
    {
      question: "Where do we meet after tendering ashore?",
      answer:
        "Your guide meets you near the tender landing in Portofino village. Full meeting point details are provided on your booking confirmation.",
    },
    {
      question: "What happens if traffic delays our return?",
      answer:
        "Your guide monitors the schedule throughout the day and chooses the fastest return route. Small-group operators prioritise getting guests back to the tender pier on time.",
    },
  ],
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Shore Excursions", href: "/portofino-shore-excursions" },
    { label: "Camogli & Portofino Coast" },
  ],
  relatedLinks: [
    { label: "Camogli vs Portofino", href: "/camogli-vs-portofino" },
    { label: "Meeting points", href: "/portofino-meeting-points" },
    { label: "One day in Portofino", href: "/one-day-in-portofino" },
    { label: "Cruise planner", href: "/cruise-planner" },
  ],
  bookingHref: "/portofino-shore-excursions",
  bookingLabel: "Enquire about this tour",
  ctaTitle: "Ready to discover Camogli and the Portofino coast?",
  ctaText:
    "Book this intimate small-group tour with local guides who know the Riviera roads and your ship's schedule.",
};

export const portofinoCoastalWalkExcursion: ExcursionData = {
  slug: "portofino-coastal-walk",
  path: "/excursions/portofino-coastal-walk",
  title: "Portofino Coastal Walk",
  headline: "Portofino Coastal Walk for Cruise Passengers",
  lead: "Walk the famous Portofino headland on a guided coastal trail — panoramic Ligurian views, village free time, and a compact duration suited to moderate port calls and tender passengers.",
  metaTitle: "Portofino Coastal Walk Shore Excursion",
  metaDescription:
    "Guided Portofino coastal walk shore excursion for cruise passengers. Scenic headland trail, village free time, tender-friendly duration, and return-to-ship reassurance.",
  heroImage: siteImages.coastalWalk,
  heroImageAlt: "Portofino lighthouse on the coastal headland",
  heroBadge: "⭐ Best for first-time visitors",
  summary: {
    duration: "Approx. 3 to 4 hours",
    meetingPoint: "Portofino village, near the harbour",
    returnReassurance:
      "Compact duration with buffer for tender return queue",
    bestFor:
      "Active passengers wanting scenery and village time on a shorter port call",
  },
  snapshotCards: [
    { label: "Walk distance", value: "Approx. 3 km round trip" },
    { label: "Fitness level", value: "Moderate — some uphill sections" },
    { label: "Group size", value: "Small group, max 14 guests" },
    { label: "Port call suitability", value: "Works from 5 hour visits upward" },
  ],
  gallery: [
    {
      src: siteImages.coastalWalk,
      alt: "Portofino lighthouse on the coastal walking route",
    },
    {
      src: siteImages.portofinoCoast,
      alt: "Portofino lighthouse on the Mediterranean coast",
    },
    {
      src: siteImages.portofinoVillage,
      alt: "Portofino village",
    },
    {
      src: siteImages.portofinoHarbour,
      alt: "Portofino harbour with yachts and fishing boats from the waterfront",
    },
    {
      src: siteImages.ligurianCoast,
      alt: "Ligurian coastal scenery visible from the Portofino walking trail",
    },
    {
      src: siteImages.rivieraCoast,
      alt: "Panoramic Riviera coastline near Portofino village",
    },
  ],
  highlights: [
    "Guided walk along the Portofino headland with sea views",
    "Compact duration suited to shorter port calls",
    "Free time in Portofino village after the walk",
    "Local guide who knows the trail conditions and best viewpoints",
    "Meeting point in Portofino village — reach by tender plus local transfer",
    "Ideal introduction for first-time visitors to the Riviera",
  ],
  description: [
    "The Portofino coastal walk is the best introduction for first-time visitors who want scenery and village atmosphere without committing to a full-day tour. Your guide leads a small group along the headland trail above the village, stopping at viewpoints over the Ligurian Sea and the Tigullio Gulf.",
    "After the walk, you have free time in Portofino's piazzetta and harbour — time for photos, a gelato, or simply watching the boats. The compact duration means this excursion works even on moderate port calls, as long as you account for tender transfer time.",
    "This tour is popular with passengers who prefer active exploration over coach travel. The trail includes some uphill sections on uneven paths, so comfortable walking shoes are essential. Your guide sets a steady pace suited to the group and monitors the time throughout.",
    "Reaching Portofino independently from the tender pier requires a bus or water taxi with limited schedules. A guided walk with coordinated arrival removes the navigation stress and ensures you know exactly when to head back for the return tender.",
  ],
  included: [
    "Guided coastal walk with local English-speaking guide",
    "Small-group format (max 14 guests)",
    "Transfer from Portofino harbour to the coastal walk trailhead",
    "Free time in Portofino village after the walk",
    "Return-to-ship timing guidance",
  ],
  notIncluded: [
    "Tender boat between ship and shore",
    "Food, drinks, and personal purchases",
    "Gratuities for your guide",
    "Travel insurance or personal expenses",
  ],
  timingAdvice: [
    "This is the most flexible excursion for shorter port calls — it typically runs three to four hours including transfer. Allow 45 minutes before all aboard for the return tender.",
    "Wear sturdy walking shoes. The coastal path has uneven surfaces and some uphill sections.",
    "If your port call is under five hours total, consider staying in Portofino village instead. Use our cruise planner to check.",
    "Morning departures are best — the trail is quieter and you have more margin before all aboard.",
  ],
  faqs: [
    {
      question: "How difficult is the Portofino coastal walk?",
      answer:
        "The walk is moderate difficulty with some uphill sections on uneven paths. It covers approximately three kilometres round trip. Comfortable walking shoes are essential. It is not suitable for guests with significant mobility limitations.",
    },
    {
      question: "Can I do this walk on a five-hour port call?",
      answer:
        "Yes, with careful timing. The walk itself takes three to four hours including village free time and transfer. You need to account for tender transfers on both ends. Use our cruise planner to confirm.",
    },
    {
      question: "Where does the walk start?",
      answer:
        "Your guide meets the group in Portofino village near the harbour, close to the tender landing.",
    },
    {
      question: "Is this tour good for first-time visitors?",
      answer:
        "Yes — it combines the iconic Portofino village experience with active exploration of the headland. It is our recommended starting point for passengers new to the Italian Riviera.",
    },
    {
      question: "What should I bring on the coastal walk?",
      answer:
        "Wear comfortable walking shoes, bring water, sun protection, and a light jacket. The trail is exposed and can be windy even on warm days.",
    },
  ],
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Shore Excursions", href: "/portofino-shore-excursions" },
    { label: "Portofino Coastal Walk" },
  ],
  relatedLinks: [
    { label: "Best shore excursions", href: "/best-portofino-shore-excursions" },
    { label: "One day in Portofino", href: "/one-day-in-portofino" },
    { label: "Tender information", href: "/portofino-tender-information" },
    { label: "Cruise planner", href: "/cruise-planner" },
  ],
  bookingHref: "/portofino-shore-excursions",
  bookingLabel: "Enquire about this tour",
  ctaTitle: "Ready to walk the Portofino coast?",
  ctaText:
    "Book this compact guided walk — ideal for first-time visitors who want scenery, village time, and reliable return-to-ship timing.",
};
