import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { CruisePortDayPlanner } from "@/components/cruise-port-day-planner";
import { buildPageMetadata } from "@/lib/site-metadata";
import { coreGuideLinks } from "@/lib/related-links";
import { siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Portofino Shore Excursions for Cruise Passengers",
  description:
    "Compare Portofino shore excursions for cruise ships: Riviera tours, coastal walks, and Camogli village visits with return-to-ship timing for tender passengers.",
  path: "/portofino-shore-excursions",
  ogImage: siteImages.santaMargherita,
  ogImageAlt:
    "Portofino harbour where cruise passengers tender ashore for shore excursions",
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const relatedLinks = [
  ...coreGuideLinks.slice(0, 5),
  { label: "Best shore excursions", href: "/best-portofino-shore-excursions" },
  { label: "Is Portofino worth visiting?", href: "/is-portofino-worth-visiting" },
] as const;

const faqs = [
  {
    question: "Should cruise passengers book Portofino excursions in advance?",
    answer:
      "Yes, especially on days when multiple ships anchor in the Tigullio Gulf. Small-group tours have limited capacity, and booking ahead secures your meeting point and departure time without last-minute stress.",
  },
  {
    question: "How long do Portofino shore excursions take?",
    answer:
      "The coastal walk runs three to four hours. The Portofino and Santa Margherita Riviera tour takes four to five hours. The Camogli and Portofino coast tour needs five to six hours. All durations include transfer time from the tender pier.",
  },
  {
    question: "Can I explore Portofino independently as a cruise passenger?",
    answer:
      "Yes, but tender transfers and local bus timetables eat into your day when visiting Santa Margherita or Camogli independently. Many passengers prefer a small-group tour for reliable transport and return-to-ship timing.",
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
      lead="Small-group Riviera tours for cruise ship guests, planned with enough buffer time to return to your tender before all aboard."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      relatedLinks={relatedLinks}
      faqs={faqs}
      ctaTitle="Enquire about Portofino shore excursions"
      ctaText="Tell us your ship's port times and we will recommend the best small-group tour for your schedule."
      ctaHref="/portofino-shore-excursions"
    >
      <section>
        <h2>Why Portofino is ideal for cruise shore excursions</h2>
        <p>
          Portofino is one of the most photographed villages on the Mediterranean,
          yet reaching nearby Riviera towns as a cruise passenger requires careful
          planning. Ships anchor offshore and tender into Portofino village — the
          iconic harbour and piazzetta are right where you step ashore.
        </p>
        <p>
          Small-group shore excursions solve the logistics for visiting Santa
          Margherita Ligure, Camogli, and the wider coast. Your guide meets you
          at the Portofino harbour, handles transport along the coastal road, and
          builds return-to-ship margins into the itinerary. Before booking, read
          our{" "}
          <Link href="/portofino-tender-information">tender information</Link>{" "}
          guide and check{" "}
          <Link href="/portofino-meeting-points">meeting points</Link>.
        </p>
      </section>

      <CruisePortDayPlanner />

      <section>
        <h2>Portofino & Santa Margherita Riviera tour</h2>
        <p>
          Our most popular excursion covers Portofino and Santa Margherita in
          one port day. You tender into Portofino village, meet your guide at the
          harbour, and travel along the coast to Santa Margherita Ligure with
          free time in Portofino's piazzetta and harbour.
        </p>
        <ul>
          <li>Best for first-time visitors who want the classic Riviera experience</li>
          <li>Typical duration: four to five hours including transfer</li>
          <li>Small group, maximum 16 guests</li>
          <li>
            <Link href="/excursions/portofino-santa-margherita-riviera">
              View full tour details
            </Link>
          </li>
        </ul>
      </section>

      <section>
        <h2>Camogli & Portofino coast tour</h2>
        <p>
          For passengers with longer port calls who want depth beyond the
          Portofino postcard, this intimate tour visits Camogli — a working
          fishing village with colourful harbourfront houses — before continuing
          to Portofino.
        </p>
        <ul>
          <li>Small group favourite, maximum 12 guests</li>
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
          <li>Best for first-time visitors on shorter port calls</li>
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
          buses with infrequent schedules, water taxis with variable pricing,
          and return timing on your own. On a port day where every minute
          counts, a small-group tour with a local guide removes that stress.
          Your guide knows the fastest routes, monitors traffic, and coordinates
          return timing so you can focus on enjoying the Riviera.
        </p>
        <p>
          Compare your options on our{" "}
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
