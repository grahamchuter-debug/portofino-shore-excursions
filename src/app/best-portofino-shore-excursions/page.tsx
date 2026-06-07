import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { featuredTour } from "@/lib/featured-tour";
import { buildPageMetadata } from "@/lib/site-metadata";
import { coreGuideLinks } from "@/lib/related-links";
import { siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Best Portofino Shore Excursions for Cruise Passengers",
  description:
    "The best Portofino shore excursions ranked for cruise passengers — starting with the small-group Santa Margherita, Camogli and Portofino tour.",
  path: "/best-portofino-shore-excursions",
  ogImage: siteImages.portofinoHarbour,
  ogImageAlt:
    "Portofino harbour with colourful boats, a highlight of the best Portofino shore excursions",
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const relatedLinks = [
  { label: featuredTour.cardName, href: featuredTour.path },
  { label: "All shore excursions", href: "/portofino-shore-excursions" },
  ...coreGuideLinks,
] as const;

const faqs = [
  {
    question: "What is the best Portofino shore excursion for first-time visitors?",
    answer: `The ${featuredTour.fullName} is our top recommendation. It covers Santa Margherita Ligure, Camogli, and Portofino village in one port day with a local guide and coordinated transport from the Portofino harbour.`,
  },
  {
    question: "Which excursion is best for a short port call?",
    answer:
      "The Portofino coastal walk at three to four hours is the most flexible option for port calls of five to six hours, once tender transfers are counted.",
  },
  {
    question: "Is a Camogli tour worth it on a Portofino port day?",
    answer:
      "Yes — the small-group Santa Margherita, Camogli and Portofino tour includes Camogli alongside the other Riviera highlights. For Camogli only, the dedicated coast tour suits eight-hour port calls.",
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
      ctaTitle="Book the #1 ranked Riviera tour"
      ctaText="Small-group Santa Margherita, Camogli and Portofino — three villages, one cruise day."
      ctaHref={featuredTour.bookingPath}
      ctaLabel="Book now"
    >
      <section>
        <h2>
          1. {featuredTour.cardName} — Most Popular
        </h2>
        <p>
          The best all-round choice for first-time visitors. Covers Santa
          Margherita Ligure, Camogli, and Portofino village in one port day
          with transport from the tender pier — ideal for standard and long port
          calls.
        </p>
        <p>
          <Link href={featuredTour.path}>View tour details →</Link>
        </p>
      </section>

      <section>
        <h2>2. Camogli &amp; Portofino Coast — Coastal Alternative</h2>
        <p>
          Best for passengers who want a dedicated Camogli focus beyond the
          three-village tour. Maximum 12 guests, five to six hours, needs eight
          or more hours in port.
        </p>
        <p>
          <Link href="/excursions/camogli-portofino-coast">
            View tour details →
          </Link>
        </p>
      </section>

      <section>
        <h2>3. Portofino Coastal Walk — Best for Shorter Port Calls</h2>
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
          From the tender pier, reaching Camogli or Santa Margherita
          independently means navigating infrequent buses while watching the
          clock. Small-group excursions with local guides handle transport,
          know the fastest return routes, and build schedule margins into the
          day. See our{" "}
          <Link href="/portofino-shore-excursions">excursions hub</Link> to
          compare all options.
        </p>
      </section>
    </ContentPage>
  );
}
