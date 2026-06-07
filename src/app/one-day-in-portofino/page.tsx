import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { featuredTour } from "@/lib/featured-tour";
import { buildPageMetadata } from "@/lib/site-metadata";
import { coreGuideLinks, excursionLinks } from "@/lib/related-links";
import { siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "One Day in Portofino for Cruise Passengers",
  description:
    "Realistic one-day Portofino itinerary for cruise passengers: tender transfers, what to see in 4 to 8 hours, and shore excursion options for Santa Margherita and Camogli.",
  path: "/one-day-in-portofino",
  ogImage: siteImages.portofinoVillage,
  ogImageAlt:
    "Portofino village piazzetta with pastel buildings and harbour views for cruise passengers",
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const relatedLinks = [
  { label: "Cruise planner", href: "/cruise-planner" },
  ...excursionLinks.map((l) => ({ label: l.label, href: l.href })),
  ...coreGuideLinks.filter((l) => l.href !== "/one-day-in-portofino"),
] as const;

const faqs = [
  {
    question: "How much time do cruise passengers actually have in Portofino?",
    answer:
      "Subtract 30 to 40 minutes for tender transfers (both directions) from your published port time. A six-hour call gives roughly four hours ashore; an eight-hour call gives about six hours.",
  },
  {
    question: "Can I visit Cinque Terre on a Portofino port day?",
    answer:
      "Not realistically. Cinque Terre is 50 km away and requires train connections with unreliable timetables. You would spend most of your port day in transit. See our Portofino vs Cinque Terre comparison.",
  },
  {
    question: "What is the best one-day plan for first-time visitors?",
      answer: `Tender ashore and take the ${featuredTour.cardName} — our top recommendation for standard port calls. Return to the pier 45 minutes before all aboard.`,
  },
  {
    question: "Is it worth visiting Santa Margherita on a Portofino port day?",
    answer:
      "On longer port calls, yes — as an excursion from Portofino. Santa Margherita is a nearby Riviera village, not a separate cruise port. A guided tour combines both without transport stress.",
  },
] as const;

export default function OneDayInPortofinoPage() {
  return (
    <ContentPage
      title="One Day in Portofino"
      lead="A realistic itinerary for cruise passengers arriving by tender — what you can actually see in 4 to 8 hours on the Italian Riviera without missing your ship."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      relatedLinks={relatedLinks}
      faqs={faqs}
    >
      <section>
        <h2>Start with your real port time</h2>
        <p>
          Your cruise itinerary shows hours in port, but tender passengers lose
          30 to 40 minutes to boat transfers. Use our{" "}
          <Link href="/cruise-planner">cruise planner</Link> to calculate your
          actual usable time before choosing activities.
        </p>
      </section>

      <section>
        <h2>4 to 5 hours ashore (6-hour port call)</h2>
        <p>Stick to one focused activity:</p>
        <ul>
          <li>
            <strong>Option A:</strong>{" "}
            <Link href="/excursions/portofino-coastal-walk">
              Portofino coastal walk
            </Link>{" "}
            — guided headland trail and village free time
          </li>
          <li>
            <strong>Option B:</strong> Stay in Portofino village — explore the
            piazzetta and harbour near the tender landing
          </li>
          <li>
            <strong>Skip:</strong> Camogli, Cinque Terre, and any tour over
            four hours
          </li>
        </ul>
      </section>

      <section>
        <h2>6 to 8 hours ashore (8 to 10-hour port call)</h2>
        <p>This is the sweet spot for Portofino shore excursions:</p>
        <ul>
          <li>
            <strong>Morning:</strong>{" "}
            <Link href={featuredTour.path}>
              {featuredTour.cardName}
            </Link>
          </li>
          <li>
            <strong>Alternative:</strong>{" "}
            <Link href="/excursions/camogli-portofino-coast">
              Camogli & Portofino coast tour
            </Link>{" "}
            for a more authentic village experience
          </li>
          <li>
            <strong>Afternoon:</strong> Free time near the tender pier or a
            relaxed stroll through Santa Margherita
          </li>
        </ul>
      </section>

      <section>
        <h2>10+ hours ashore</h2>
        <p>
          You can combine a morning excursion with relaxed afternoon time. Do
          not attempt Cinque Terre — the train journey and village walks need a
          full day on their own. Instead, enjoy a second visit to Portofino or
          explore Camogli at a slower pace.
        </p>
      </section>

      <section>
        <h2>Return-to-ship timing</h2>
        <p>
          Be at the tender pier in Portofino 45 minutes before all
          aboard. On busy days with multiple ships in the Gulf, return queues
          can take 20 to 30 minutes. Read{" "}
          <Link href="/what-if-my-tender-is-late">
            what to do if your tender is late
          </Link>{" "}
          for contingency planning.
        </p>
      </section>
    </ContentPage>
  );
}
