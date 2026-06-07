import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { CruisePortDayPlanner } from "@/components/cruise-port-day-planner";
import { featuredTour } from "@/lib/featured-tour";
import { buildPageMetadata } from "@/lib/site-metadata";
import { coreGuideLinks, excursionLinks } from "@/lib/related-links";
import { siteImages } from "@/lib/site-images";

const cruisePlannerHeroAlt =
  "Portofino harbour waterfront for cruise passengers planning shore excursions";

const pageMeta = {
  title: "Portofino Cruise Planner for Shore Excursions",
  description:
    "Interactive Portofino cruise planner: enter ship times and see usable time ashore after tender delays, return-to-ship guidance, and small-group excursion recommendations.",
  path: "/cruise-planner",
  ogImage: siteImages.portofinoPier,
  ogImageAlt: cruisePlannerHeroAlt,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const relatedLinks = [
  { label: featuredTour.fullName, href: featuredTour.path },
  { label: "Check availability", href: featuredTour.bookingPath },
  { label: "Tender information", href: "/portofino-tender-information" },
  { label: "Meeting points", href: "/portofino-meeting-points" },
  {
    label: "What if my tender is late?",
    href: "/what-if-my-tender-is-late",
  },
  ...excursionLinks.map((l) => ({ label: l.label, href: l.href })),
  ...coreGuideLinks.filter((l) => l.href !== "/cruise-planner"),
] as const;

const faqs = [
  {
    question: "How does the Portofino cruise planner work?",
    answer:
      "Enter your ship's published arrival and departure times. The planner automatically deducts 30 minutes after arrival before you are realistically ashore, and a 60-minute return window before departure, then shows your usable time ashore, confidence score, and excursion recommendations.",
  },
  {
    question: "Does the planner account for tender transfer time?",
    answer:
      "Yes. Portofino is a tender port, so the planner builds in a 30-minute ashore delay after arrival and recommends being at the tender pier 60 minutes before departure. Actual tender queues may vary by cruise line, ship, and local conditions.",
  },
  {
    question: "Should I use published port times or all aboard time?",
    answer:
      "Use your ship's published arrival and departure times in the planner. Always confirm all aboard on your cruise app — that is your hard deadline, and the planner's return time is a cautious planning guide.",
  },
  {
    question: "When is the Small Group Santa Margherita, Camogli and Portofino tour recommended?",
    answer:
      "When the planner shows 5 or more usable hours ashore, the Small Group Santa Margherita, Camogli & Portofino Shore Excursion may be a good fit. With 7 or more usable hours, it is an excellent fit for the full excursion including Portofino, Santa Margherita Ligure and Camogli.",
  },
  {
    question: "What confidence score should I aim for?",
    answer:
      "A score of 9 or 10 means your port call comfortably fits the Small Group Santa Margherita, Camogli & Portofino Shore Excursion. Scores around 7 mean the tour may work if tendering is smooth — check availability. Lower scores mean staying in Portofino village is the safer choice.",
  },
] as const;

export default function CruisePlannerPage() {
  return (
    <ContentPage
      title="Portofino Cruise Planner"
      lead="Enter your ship's port times and see usable time ashore after tender delays — with clear excursion recommendations and return-to-ship guidance for Portofino."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      relatedLinks={relatedLinks}
      faqs={faqs}
      ctaTitle={`Check availability for the ${featuredTour.cardName} tour`}
      ctaText="If the planner shows a good fit, secure your place on the Santa Margherita, Camogli and Portofino excursion before port day."
      ctaHref={featuredTour.bookingPath}
      ctaLabel="Check availability"
    >
      <section>
        <h2>Plan around your real port time — tender included</h2>
        <p>
          You do not need to subtract tender time yourself. This planner
          calculates how long you are realistically ashore at Portofino, when to
          be back at the tender pier, and whether the{" "}
          <Link href={featuredTour.path}>{featuredTour.cardName}</Link> tour
          fits your schedule. For background, read our{" "}
          <Link href="/portofino-tender-information">tender information</Link>{" "}
          and{" "}
          <Link href="/portofino-meeting-points">meeting points</Link> guides.
        </p>
      </section>

      <CruisePortDayPlanner />

      <section>
        <h2>After planning: next steps</h2>
        <ul>
          <li>
            <Link href={featuredTour.path}>View the main Portofino excursion</Link>{" "}
            if the planner recommends it
          </li>
          <li>
            <Link href={featuredTour.bookingPath}>
              Check availability and send your cruise details
            </Link>
          </li>
          <li>
            Read{" "}
            <Link href="/what-if-my-tender-is-late">
              what to do if your tender is late
            </Link>
          </li>
          <li>
            Compare options on our{" "}
            <Link href="/best-portofino-shore-excursions">
              best shore excursions
            </Link>{" "}
            page
          </li>
          <li>
            Review our{" "}
            <Link href="/one-day-in-portofino">one day in Portofino</Link>{" "}
            itinerary for sample day plans
          </li>
        </ul>
      </section>
    </ContentPage>
  );
}
