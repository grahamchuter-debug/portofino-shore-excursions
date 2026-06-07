import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { CruisePortDayPlanner } from "@/components/cruise-port-day-planner";
import { featuredTour } from "@/lib/featured-tour";
import {
  featuredTourFacts,
  featuredTourGroupSizeLine,
  featuredTourGuideMeetAdvice,
  featuredTourMeetingPointLine,
} from "@/lib/featured-tour-facts";
import { buildPageMetadata } from "@/lib/site-metadata";
import { meetingPointPath } from "@/lib/site-paths";
import { coreGuideLinks } from "@/lib/related-links";
import { siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Portofino Shore Excursions | Small Group Santa Margherita, Camogli & Portofino",
  description:
    `Compare Portofino shore excursions for cruise passengers. Our top pick: the ${featuredTour.fullName} (${featuredTourFacts.durationLabel.toLowerCase()}) with return-to-ship timing.`,
  path: "/portofino-shore-excursions",
  ogImage: siteImages.santaMargherita,
  ogImageAlt:
    "Santa Margherita Ligure on the small-group Portofino shore excursion for cruise passengers",
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const relatedLinks = [
  { label: featuredTour.cardName, href: featuredTour.path },
  ...coreGuideLinks.slice(0, 5),
  { label: "Best shore excursions", href: "/best-portofino-shore-excursions" },
  { label: "Is Portofino worth visiting?", href: "/is-portofino-worth-visiting" },
] as const;

const faqs = [
  {
    question: "What is the best Portofino shore excursion for cruise passengers?",
    answer: `The ${featuredTour.fullName} is our top recommendation. It covers Santa Margherita Ligure, Camogli, and Portofino village in ${featuredTourFacts.durationLabel.toLowerCase()} with a local guide and return-to-ship timing.`,
  },
  {
    question: "Should cruise passengers book Portofino excursions in advance?",
    answer:
      "Yes, especially on days when multiple ships anchor in the Tigullio Gulf. Small-group tours have limited capacity, and booking ahead secures your meeting point and departure time.",
  },
  {
    question: "How long do Portofino shore excursions take?",
    answer:
      "The small-group Santa Margherita, Camogli and Portofino tour runs approximately four hours. The Camogli and Portofino coast tour runs approximately five to six hours. The coastal walk runs three to four hours. All durations exclude tender transfer time to and from the ship.",
  },
  {
    question: "Do Portofino tours guarantee return to the cruise ship?",
    answer:
      "Ship-sponsored excursions include a ship guarantee. Independent and third-party tours do not — you are responsible for meeting your vessel's all aboard time. Always build a 45-minute buffer for the return tender queue.",
  },
] as const;

export default function PortofinoShoreExcursionsPage() {
  return (
    <ContentPage
      title="Portofino Shore Excursions"
      lead={`Small-group Portofino shore excursions for cruise ship guests — starting with our recommended ${featuredTour.fullName}.`}
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      relatedLinks={relatedLinks}
      faqs={faqs}
      ctaTitle={`Book the ${featuredTour.cardName} tour`}
      ctaText="Three Italian Riviera highlights in one cruise day — send your cruise details and we will confirm availability."
      ctaHref={featuredTour.bookingPath}
      ctaLabel="Check Availability"
    >
      <section>
        <h2>Our recommended tour: Small Group Santa Margherita, Camogli &amp; Portofino</h2>
        <p>
          This is the excursion we recommend most for cruise passengers calling
          at Portofino. You tender into the village, meet at{" "}
          {featuredTourFacts.meetingPoint.landmark} on Piazza della Libertà,
          and visit three Riviera highlights in one port day — Santa Margherita
          Ligure, Camogli, and Portofino village — with coordinated transport
          and return-to-ship timing built in.
        </p>
        <ul>
          <li>Three Riviera destinations in one cruise day</li>
          <li>{featuredTourGroupSizeLine} · {featuredTourFacts.vehicle.largerGroupsNote}</li>
          <li>{featuredTourFacts.durationLabel} tour time (excluding tender transfers)</li>
          <li>Best for 5+ usable hours ashore after tender time is counted</li>
          <li>Meet at {featuredTourMeetingPointLine} — {featuredTourGuideMeetAdvice}</li>
          <li>
            <Link href={featuredTour.path}>View full tour details</Link>
          </li>
        </ul>
      </section>

      <section>
        <h2>Why Portofino is ideal for cruise shore excursions</h2>
        <p>
          Portofino is one of the most photographed villages on the Mediterranean,
          yet reaching nearby Riviera towns as a cruise passenger requires careful
          planning. Ships anchor offshore and tender into Portofino village — the
          iconic harbour and piazzetta are right where you step ashore.
        </p>
        <p>
          Before booking, read our{" "}
          <Link href="/portofino-tender-information">tender information</Link>{" "}
          guide and check{" "}
          <Link href={meetingPointPath}>meeting point guide</Link>.
        </p>
      </section>

      <CruisePortDayPlanner />

      <section>
        <h2>Camogli &amp; Portofino coast tour</h2>
        <p>
          For passengers with longer port calls who want depth beyond the
          Portofino postcard, this intimate tour visits Camogli — a working
          fishing village with colourful harbourfront houses — before continuing
          to Portofino.
        </p>
        <ul>
          <li>Coastal alternative, maximum 12 guests</li>
          <li>Typical duration: five to six hours</li>
          <li>Best for port calls of eight hours or more</li>
          <li>
            <Link href="/excursions/camogli-portofino-coast">
              View full tour details
            </Link>
          </li>
        </ul>
      </section>

      <section>
        <h2>Portofino coastal walk</h2>
        <p>
          A compact, active option for moderate port calls. Your guide leads a
          walk along the Portofino headland with sea views, followed by free
          time in the village.
        </p>
        <ul>
          <li>Best for shorter port calls</li>
          <li>Typical duration: three to four hours</li>
          <li>Moderate fitness — some uphill sections on uneven paths</li>
          <li>
            <Link href="/excursions/portofino-coastal-walk">
              View full tour details
            </Link>
          </li>
        </ul>
      </section>

      <section>
        <h2>Why many cruise passengers choose a small-group excursion</h2>
        <p>
          Independent travel from the tender pier requires navigating local
          buses with infrequent schedules and return timing on your own. On a
          port day where every minute counts, a small-group tour with a local
          guide removes that stress. Compare options on our{" "}
          <Link href="/best-portofino-shore-excursions">
            best shore excursions
          </Link>{" "}
          page, or use the{" "}
          <Link href="/cruise-planner">cruise planner</Link> to match tours to
          your ship&apos;s schedule.
        </p>
      </section>
    </ContentPage>
  );
}
