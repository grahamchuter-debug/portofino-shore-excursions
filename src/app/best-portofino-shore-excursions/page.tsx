import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { coreGuideLinks } from "@/lib/related-links";
import { siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Best Portofino Shore Excursions for Cruise Passengers",
  description:
    "The best Portofino shore excursions ranked for cruise passengers: small-group Riviera tours, coastal walks, and Camogli visits with return-to-ship timing advice.",
  path: "/best-portofino-shore-excursions",
  ogImage: siteImages.portofinoHarbour,
  ogImageAlt:
    "Portofino harbour with colourful boats, a highlight of the best Portofino shore excursions",
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const relatedLinks = [
  { label: "All shore excursions", href: "/portofino-shore-excursions" },
  ...coreGuideLinks,
] as const;

const faqs = [
  {
    question: "What is the best Portofino shore excursion for first-time visitors?",
    answer:
      "The Portofino and Santa Margherita Riviera tour is our top recommendation. It covers both villages in one port day with a local guide and coordinated transport from the Portofino harbour.",
  },
  {
    question: "Which excursion is best for a short port call?",
    answer:
      "The Portofino coastal walk at three to four hours is the most flexible option for port calls of five to six hours, once tender transfers are counted.",
  },
  {
    question: "Is a Camogli tour worth it on a Portofino port day?",
    answer:
      "Yes, if you have eight or more hours in port. Camogli offers an authentic fishing village experience that Portofino cannot match. The small-group format (max 12) keeps it personal.",
  },
  {
    question: "Should I book through the cruise line or independently?",
    answer:
      "Cruise line excursions include a ship guarantee but cost more and often use larger groups. Independent small-group tours offer better value and smaller groups, but you are responsible for return timing — build a 45-minute tender buffer.",
  },
] as const;

export default function BestPortofinoShoreExcursionsPage() {
  return (
    <ContentPage
      title="Best Portofino Shore Excursions"
      lead="Our ranked recommendations for cruise passengers — matched to port call length, fitness level, and what you want to see on the Italian Riviera."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      relatedLinks={relatedLinks}
      faqs={faqs}
      ctaTitle="Enquire about the best tour for your port day"
      ctaText="Tell us your ship's schedule and we will recommend the right small-group excursion."
    >
      <section>
        <h2>1. Portofino & Santa Margherita Riviera — Most Popular</h2>
        <p>
          The best all-round choice for first-time visitors. Covers both
          villages, includes transport from the tender pier, and runs four to
          five hours — ideal for standard port calls.
        </p>
        <p>
          <Link href="/excursions/portofino-santa-margherita-riviera">
            View tour details →
          </Link>
        </p>
      </section>

      <section>
        <h2>2. Camogli & Portofino Coast — Small Group Favourite</h2>
        <p>
          Best for passengers who want authentic Ligurian village life beyond
          the Portofino postcard. Maximum 12 guests, five to six hours, needs
          eight or more hours in port.
        </p>
        <p>
          <Link href="/excursions/camogli-portofino-coast">
            View tour details →
          </Link>
        </p>
      </section>

      <section>
        <h2>3. Portofino Coastal Walk — Best for First-Time Visitors</h2>
        <p>
          Best for moderate port calls and active passengers. Guided headland
          walk plus village free time in three to four hours. Works from five-hour
          port calls upward.
        </p>
        <p>
          <Link href="/excursions/portofino-coastal-walk">
            View tour details →
          </Link>
        </p>
      </section>

      <section>
        <h2>Why small-group beats independent travel</h2>
        <p>
          From the tender pier, reaching Portofino independently means
          navigating infrequent buses or negotiating water taxi fares — all while
          watching the clock. Small-group excursions with local guides handle
          transport, know the fastest return routes, and build schedule margins
          into the day. See our{" "}
          <Link href="/portofino-shore-excursions">excursions hub</Link> to
          compare all options.
        </p>
      </section>
    </ContentPage>
  );
}
