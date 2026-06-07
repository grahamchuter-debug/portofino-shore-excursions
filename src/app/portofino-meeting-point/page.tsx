import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { OperatorPhoto } from "@/components/operator-photo";
import { featuredTour } from "@/lib/featured-tour";
import {
  featuredTourFacts,
  featuredTourGroupSizeLine,
} from "@/lib/featured-tour-facts";
import {
  meetingPointFaqs,
  meetingPointGuideSign,
  meetingPointVerifiedDescription,
  meetingPointWalkingDirections,
  meetingPointWalkSummary,
} from "@/lib/meeting-point-content";
import { operatorImageSlots } from "@/lib/operator-images";
import { coreGuideLinks, tenderLinks } from "@/lib/related-links";
import { buildPageMetadata } from "@/lib/site-metadata";
import { meetingPointPath } from "@/lib/site-paths";
import {
  portofinoTenderExplainer,
  portofinoTenderLanding,
} from "@/lib/tender-port-copy";

const pageMeta = {
  title: "Portofino Shore Excursion Meeting Point",
  description:
    "Where to meet your Portofino shore excursion guide after tendering ashore — FARMACIA on Piazza della Libertà, walking directions from the tender pier, and PAPILLON SERVICE sign identification.",
  path: meetingPointPath,
  ogImage: operatorImageSlots.meetingPointFarmacia.src,
  ogImageAlt: operatorImageSlots.meetingPointFarmacia.alt,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const relatedLinks = [
  { label: featuredTour.fullName, href: featuredTour.path },
  { label: "Check Availability", href: featuredTour.bookingPath },
  ...tenderLinks.filter((l) => l.href !== meetingPointPath),
  { label: "Shore excursions", href: "/portofino-shore-excursions" },
  ...coreGuideLinks.filter((l) => l.href !== meetingPointPath),
] as const;

export default function PortofinoMeetingPointPage() {
  return (
    <ContentPage
      title="Portofino Shore Excursion Meeting Point"
      lead="Where to meet your guide after tendering ashore — walking directions from the pier, sign identification, tender timing, and arrival advice for the Small Group Santa Margherita, Camogli and Portofino tour."
      heroImage={operatorImageSlots.meetingPointFarmacia.src}
      heroImageAlt={operatorImageSlots.meetingPointFarmacia.alt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      relatedLinks={relatedLinks}
      faqs={meetingPointFaqs}
      ctaTitle={`Book the ${featuredTour.cardName} tour`}
      ctaText="Meeting point and departure time are confirmed after we check your ship schedule."
      ctaHref={featuredTour.bookingPath}
      ctaLabel="Check Availability"
      belowHero={
        <div className="mx-auto flex max-w-6xl flex-wrap gap-3 px-4 pb-8 sm:px-6">
          <Link
            href={featuredTour.path}
            className="rounded-full bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800"
          >
            View Small Group Tour
          </Link>
          <Link
            href={featuredTour.bookingPath}
            className="rounded-full border-2 border-gray-900 bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50"
          >
            Check Availability
          </Link>
        </div>
      }
    >
      <section>
        <h2>Where to meet your guide</h2>
        <p>{meetingPointVerifiedDescription}</p>
        <address className="not-italic rounded-xl border border-blue-100 bg-blue-50/60 p-5 text-base leading-7 text-gray-800">
          <strong>FARMACIA</strong>
          <br />
          {featuredTourFacts.meetingPoint.streetAddress}
          <br />
          {featuredTourFacts.meetingPoint.locality}
        </address>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <OperatorPhoto
            slot={operatorImageSlots.meetingPointFarmacia}
            className="overflow-hidden rounded-xl border border-gray-200"
            caption="Meeting point near FARMACIA on Piazza della Libertà"
          />
          <OperatorPhoto
            slot={operatorImageSlots.tenderPierWalk}
            className="overflow-hidden rounded-xl border border-gray-200"
            caption="Pedestrian route from the tender pier to the meeting point"
          />
        </div>
      </section>

      <section>
        <h2>Walking directions from the tender pier</h2>
        <p>{meetingPointWalkingDirections}</p>
        <p>
          Portofino is a tender port — read our{" "}
          <Link href="/portofino-tender-information">tender information</Link>{" "}
          guide before port day. {portofinoTenderExplainer}
        </p>
      </section>

      <section>
        <h2>How long the walk takes</h2>
        <p>
          The walk from the tender pier to FARMACIA is {meetingPointWalkSummary}.
          Most guests complete it in about 5 to 7 minutes on the flat,
          pedestrian-only route through the village.
        </p>
      </section>

      <section>
        <h2>What sign to look for</h2>
        <p>
          Your local representative waits near the front of FARMACIA, holding a
          sign that reads <strong>{meetingPointGuideSign}</strong>.{" "}
          {featuredTourFacts.arrivalAdvice}
        </p>
      </section>

      <section>
        <h2>Which tender should I take?</h2>
        <p>
          {featuredTourFacts.arrivalAdvice} Take one of the earliest available
          tenders where appropriate so you have time to walk to FARMACIA and
          meet your guide before the scheduled tour departure. {portofinoTenderLanding}
        </p>
        <p>
          If your tender is delayed, see{" "}
          <Link href="/what-if-my-tender-is-late">
            what to do if your tender is late
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>What if I arrive early?</h2>
        <p>
          Head to FARMACIA on Piazza della Libertà and wait near the front of
          the building. {featuredTourFacts.arrivalAdvice} If you cannot see your
          guide, call the number on your booking confirmation — do not wander
          far from the meeting area.
        </p>
      </section>

      <section>
        <h2>What if my tender is delayed?</h2>
        <p>
          Contact your guide immediately using the number on your booking
          confirmation. Tender delays happen in Portofino — operators may wait
          briefly but cannot hold indefinitely when ship schedules are tight.
        </p>
      </section>

      <section>
        <h2>Tour logistics at a glance</h2>
        <ul>
          <li>
            <strong>Tour:</strong>{" "}
            <Link href={featuredTour.path}>{featuredTour.fullName}</Link>
          </li>
          <li>
            <strong>Duration:</strong> {featuredTourFacts.durationLabel}
          </li>
          <li>
            <strong>Vehicle:</strong> {featuredTourFacts.vehicle.label} (
            {featuredTourGroupSizeLine}. {featuredTourFacts.vehicle.largerGroupsNote}.)
          </li>
          <li>
            <strong>Format:</strong> Shared small-group shore excursion
          </li>
        </ul>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          <OperatorPhoto
            slot={operatorImageSlots.santaMargheritaWaterfront}
            className="overflow-hidden rounded-xl border border-gray-200"
          />
          <OperatorPhoto
            slot={operatorImageSlots.camogliFishingVillage}
            className="overflow-hidden rounded-xl border border-gray-200"
          />
          <OperatorPhoto
            slot={operatorImageSlots.smallGroupVan}
            className="overflow-hidden rounded-xl border border-gray-200"
          />
        </div>
      </section>

      <section>
        <h2>Meeting point FAQ</h2>
        <p>
          Common questions about finding your guide after tendering ashore. For
          general Portofino cruise planning, see our{" "}
          <Link href="/faq">FAQ</Link> or use the{" "}
          <Link href="/cruise-planner">cruise planner</Link>.
        </p>
      </section>
    </ContentPage>
  );
}
