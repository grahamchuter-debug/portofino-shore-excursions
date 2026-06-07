import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { comparisonLinks, coreGuideLinks, tenderLinks } from "@/lib/related-links";
import { siteHeroAlt, siteImages } from "@/lib/site-images";
import { featuredTourMeetingInstructions } from "@/lib/featured-tour-facts";
import { portGuidePath } from "@/lib/site-paths";
import { portofinoTenderExplainer } from "@/lib/tender-port-copy";

const pageMeta = {
  title: "Portofino Shore Excursions FAQ",
  description:
    "Frequently asked questions about Portofino cruise port visits: tender operations, shore excursions, meeting points, return-to-ship timing, and Italian Riviera planning.",
  path: "/faq",
  ogImage: siteImages.hero,
  ogImageAlt: siteHeroAlt,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const relatedLinks = [
  ...coreGuideLinks.filter((l) => l.href !== "/faq"),
  ...comparisonLinks,
] as const;

const faqs = [
  {
    question: "Do cruise ships dock in Portofino village?",
    answer: `${portofinoTenderExplainer} See our tender information guide for full details.`,
  },
  {
    question: "How long does the tender transfer take?",
    answer:
      "Allow 15 to 20 minutes each way for the tender boat, plus queuing time on busy days. Build 30 to 40 minutes total into your port day planning for both directions.",
  },
  {
    question: "What are the best Portofino shore excursions?",
    answer:
      "For first-time visitors, the Small Group Santa Margherita, Camogli and Portofino tour is most popular. Active passengers on shorter calls prefer the coastal walk. Longer port calls suit the Camogli and Portofino coast tour.",
  },
  {
    question: "Can I visit Cinque Terre from Portofino?",
    answer:
      "Not on a standard port call. Cinque Terre is 50 km away and requires over an hour by train each way. Choose a cruise itinerary calling at La Spezia or Livorno instead.",
  },
  {
    question: "Where do shore excursions meet after tendering?",
    answer: featuredTourMeetingInstructions,
  },
  {
    question: "How early should I return to the tender pier?",
    answer:
      "Be at the pier 45 minutes before all aboard. Return queues can take 20 to 30 minutes when multiple ships anchor in the Gulf on the same day.",
  },
  {
    question: "What if my tender is delayed?",
    answer:
      "Contact your excursion guide immediately. Small-group operators may wait briefly but cannot hold indefinitely. See our dedicated guide on what to do if your tender is late.",
  },
  {
    question: "Why book a small-group excursion instead of going independently?",
    answer:
      "Independent travel from the tender pier requires navigating infrequent buses or water taxis while watching the clock. Small-group tours with local guides handle transport and build return-to-ship margins into the itinerary.",
  },
  {
    question: "Is Portofino worth visiting on a cruise?",
    answer:
      "Yes, with realistic planning. You tender into Portofino village itself. The harbour and piazzetta are compact but beautiful. A half-day is enough for most visitors.",
  },
  {
    question: "How much can I see in one port day?",
    answer:
      "A six-hour scheduled call often gives enough usable time for the four-hour small-group Riviera tour once tender delays are counted. An eight-hour call allows more margin. Use our cruise planner to match activities to your schedule.",
  },
] as const;

export default function FaqPage() {
  return (
    <ContentPage
      title="Portofino Shore Excursions FAQ"
      lead="Answers to the most common questions from cruise passengers visiting Portofino by tender — excursions, logistics, timing, and planning."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      relatedLinks={relatedLinks}
      faqs={faqs}
      ctaTitle="Still have questions?"
      ctaText="Browse our shore excursions or read the port guide for detailed planning advice."
      ctaHref="/portofino-shore-excursions"
    >
      <section>
        <h2>Quick links by topic</h2>
        <h3>Tender and port logistics</h3>
        <ul>
          {tenderLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
          <li>
            <Link href={portGuidePath}>Port guide</Link>
          </li>
        </ul>

        <h3>Excursions and planning</h3>
        <ul>
          <li>
            <Link href="/portofino-shore-excursions">All shore excursions</Link>
          </li>
          <li>
            <Link href="/best-portofino-shore-excursions">
              Best shore excursions
            </Link>
          </li>
          <li>
            <Link href="/cruise-planner">Cruise planner</Link>
          </li>
          <li>
            <Link href="/ship-schedules">Ship schedules</Link>
          </li>
          <li>
            <Link href="/one-day-in-portofino">One day in Portofino</Link>
          </li>
        </ul>

        <h3>Comparisons</h3>
        <ul>
          {comparisonLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </section>
    </ContentPage>
  );
}
