import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { featuredTour } from "@/lib/featured-tour";
import {
  featuredTourFacts,
  featuredTourGroupSizeLine,
  featuredTourGuideMeetAdvice,
  featuredTourMeetingInstructions,
  featuredTourMeetingPointLine,
} from "@/lib/featured-tour-facts";
import { buildPageMetadata } from "@/lib/site-metadata";
import { coreGuideLinks, tenderLinks } from "@/lib/related-links";
import { siteImages } from "@/lib/site-images";
import {
  portofinoTenderExplainer,
  portofinoTenderLanding,
  portofinoTenderPortAlt,
} from "@/lib/tender-port-copy";

const pageMeta = {
  title: "Portofino Meeting Points for Cruise Shore Excursions",
  description:
    "Where to meet the Small Group Santa Margherita, Camogli and Portofino shore excursion after tendering ashore — Farmacia on Piazza della Libertà and walking directions from the pier.",
  path: "/portofino-meeting-points",
  ogImage: siteImages.portofinoCruisePort,
  ogImageAlt: portofinoTenderPortAlt,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const relatedLinks = [
  { label: featuredTour.fullName, href: featuredTour.path },
  { label: "Book this tour", href: featuredTour.bookingPath },
  ...tenderLinks.filter((l) => l.href !== "/portofino-meeting-points"),
  { label: "Shore excursions", href: "/portofino-shore-excursions" },
  ...coreGuideLinks.filter((l) => l.href !== "/portofino-meeting-points"),
] as const;

const faqs = [
  {
    question: `Where does the ${featuredTour.cardName} tour meet?`,
    answer: featuredTourMeetingInstructions,
  },
  {
    question: "How do I find my guide after tendering ashore?",
    answer: `After disembarking at the Portofino tender pier, walk to ${featuredTourMeetingPointLine} — ${featuredTourFacts.meetingPoint.walkFromTender}. ${featuredTourGuideMeetAdvice} ${featuredTourFacts.arrivalAdvice}`,
  },
  {
    question: "What if my tender arrives after the meeting time?",
    answer:
      "Contact your guide immediately using the number on your confirmation. Operators understand tender delays and may wait briefly, but cannot hold indefinitely when ship schedules are tight.",
  },
  {
    question: "Is the meeting point the same for all Portofino excursions?",
    answer: `The main small-group Riviera tour meets at ${featuredTourMeetingPointLine}. Other excursions may use different locations — always check your booking confirmation.`,
  },
] as const;

export default function PortofinoMeetingPointsPage() {
  return (
    <ContentPage
      title="Portofino Meeting Points"
      lead="Where to meet your shore excursion after tendering ashore in Portofino village — walking directions from the pier, guide identification, and arrival timing."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      relatedLinks={relatedLinks}
      faqs={faqs}
      ctaTitle={`Book the ${featuredTour.cardName} tour`}
      ctaText="Meeting point and departure time are confirmed after we check your ship schedule."
      ctaHref={featuredTour.bookingPath}
      ctaLabel="Check Availability"
    >
      <section>
        <h2>Portofino is a tender port</h2>
        <p>{portofinoTenderExplainer}</p>
        <p>
          {portofinoTenderLanding}. Read our{" "}
          <Link href="/portofino-tender-information">tender information</Link>{" "}
          guide before port day.
        </p>
      </section>

      <section>
        <h2>
          Meeting point: {featuredTourFacts.meetingPoint.landmark}
        </h2>
        <p>
          The{" "}
          <Link href={featuredTour.path}>{featuredTour.fullName}</Link> meets
          at:
        </p>
        <address className="not-italic rounded-xl border border-blue-100 bg-blue-50/60 p-5 text-base leading-7 text-gray-800">
          <strong>{featuredTourFacts.meetingPoint.landmark}</strong>
          <br />
          {featuredTourFacts.meetingPoint.streetAddress}
          <br />
          {featuredTourFacts.meetingPoint.locality}
        </address>
        <ul className="mt-4 space-y-2">
          <li>
            <strong>From the tender pier:</strong>{" "}
            {featuredTourFacts.meetingPoint.walkFromTender}
          </li>
          <li>
            <strong>Guide identification:</strong> {featuredTourGuideMeetAdvice}
          </li>
          <li>
            <strong>Arrival timing:</strong> {featuredTourFacts.arrivalAdvice}
          </li>
          <li>
            <strong>Vehicle:</strong> {featuredTourFacts.vehicle.label} (
            {featuredTourGroupSizeLine}. {featuredTourFacts.vehicle.largerGroupsNote}.)
          </li>
        </ul>
      </section>

      <section>
        <h2>Step-by-step after you tender ashore</h2>
        <ol className="list-decimal space-y-3 pl-5 leading-7">
          <li>Disembark the tender at the Portofino village landing</li>
          <li>
            Walk to {featuredTourMeetingPointLine} (
            {featuredTourFacts.meetingPoint.walkFromTender})
          </li>
          <li>
            {featuredTourGuideMeetAdvice}
          </li>
          <li>
            {featuredTourFacts.arrivalAdvice}
          </li>
          <li>Save your guide&apos;s phone number before leaving the ship</li>
        </ol>
      </section>

      <section>
        <h2>Other excursion meeting points</h2>
        <ul>
          <li>
            <strong>{featuredTour.cardName}:</strong>{" "}
            {featuredTourMeetingPointLine} — see details above
          </li>
          <li>
            <strong>Camogli & Portofino Coast:</strong> Confirm on your booking
            — typically near Portofino harbour
          </li>
          <li>
            <strong>Portofino Coastal Walk:</strong> Confirm on your booking —
            typically near the harbour area
          </li>
        </ul>
      </section>

      <section>
        <h2>If you cannot find your guide</h2>
        <ol>
          <li>Call the number on your booking confirmation immediately</li>
          <li>
            Stay near {featuredTourFacts.meetingPoint.landmark} on Piazza della
            Libertà — do not wander far
          </li>
          <li>
            Check whether your tender was delayed — see{" "}
            <Link href="/what-if-my-tender-is-late">
              what if my tender is late
            </Link>
          </li>
          <li>Note your ship&apos;s all aboard time and plan accordingly</li>
        </ol>
      </section>
    </ContentPage>
  );
}
