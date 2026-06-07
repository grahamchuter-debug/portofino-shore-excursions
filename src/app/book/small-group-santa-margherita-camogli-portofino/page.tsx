import type { Metadata } from "next";
import Link from "next/link";

import { BookingEnquiryForm } from "@/components/booking-enquiry-form";
import { BookingReassurance } from "@/components/booking-reassurance";
import { WhyThisExcursionIsDifferentSection } from "@/components/why-this-excursion-is-different-section";
import { WhyThisTourBooksEarlySection } from "@/components/why-this-tour-books-early-section";
import { JsonLd } from "@/components/json-ld";
import { ShipScheduleBreadcrumbs } from "@/components/ship-schedule-breadcrumbs";
import { featuredTour } from "@/lib/featured-tour";
import { featuredTourFacts, featuredTourGroupSizeLine, featuredTourGuideMeetAdvice, featuredTourMeetingPointLine } from "@/lib/featured-tour-facts";
import { buildPageMetadata } from "@/lib/site-metadata";
import { meetingPointPath } from "@/lib/site-paths";
import { buildFeaturedTourTripSchema, buildWebPageSchema } from "@/lib/site-schema";
import { siteConfig } from "@/lib/site-config";
import { siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Book Small Group Santa Margherita, Camogli & Portofino Tour",
  description:
    `Book the small-group Santa Margherita, Camogli and Portofino shore excursion directly. ${featuredTourFacts.durationLabel}, three Riviera villages — send your cruise details and we will confirm availability and meeting point.`,
  path: featuredTour.bookingPath,
  ogImage: siteImages.santaMargherita,
  ogImageAlt:
    "Book the small-group Portofino shore excursion to Santa Margherita, Camogli and Portofino",
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

export default function BookFeaturedTourPage() {
  return (
    <>
      <JsonLd
        data={[
          buildWebPageSchema({
            path: pageMeta.path,
            title: pageMeta.title,
            description: pageMeta.description,
          }),
          buildFeaturedTourTripSchema(),
        ]}
      />
      <main className="min-h-screen bg-white text-gray-900">
        <ShipScheduleBreadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Shore Excursions", href: siteConfig.excursionsHubPath },
            { label: featuredTour.cardName, href: featuredTour.path },
            { label: "Book" },
          ]}
        />

        <section
          role="img"
          aria-label={pageMeta.ogImageAlt}
          className="relative bg-cover bg-center"
          style={{ backgroundImage: `url('${pageMeta.ogImage}')` }}
        >
          <div className="bg-black/55">
            <div className="mx-auto max-w-6xl px-4 py-16 text-white sm:px-6 sm:py-20">
              <h1 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
                Book {featuredTour.cardName}
              </h1>
              <p className="max-w-3xl text-base leading-7 text-white/90 sm:text-lg">
                Send your cruise details and we will confirm availability,
                meeting point at {featuredTourFacts.meetingPoint.landmark},{" "}
                {featuredTourFacts.meetingPoint.streetAddress}, and
                return-to-ship timing for your port day.
              </p>
              <p className="mt-5 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm sm:text-sm">
                {featuredTourFacts.durationLabel} · {featuredTourFacts.vehicle.label} · Meet at {featuredTourFacts.meetingPoint.landmark}
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="mb-8 rounded-xl border border-gray-200 bg-gray-50 p-5">
            <h2 className="text-lg font-semibold text-gray-900">
              {featuredTour.fullName}
            </h2>
            <ul className="mt-3 space-y-1 text-sm leading-6 text-gray-700">
              <li>Portofino, Santa Margherita Ligure and Camogli in one day</li>
              <li>{featuredTourFacts.durationLabel} · {featuredTourFacts.portType}</li>
              <li>{featuredTourGroupSizeLine} · {featuredTourFacts.vehicle.largerGroupsNote}</li>
              <li>Meet at {featuredTourMeetingPointLine}</li>
              <li>{featuredTourGuideMeetAdvice}</li>
            </ul>
            <Link
              href={featuredTour.path}
              className="mt-4 inline-block text-sm font-medium text-blue-700 underline underline-offset-2"
            >
              View full tour details
            </Link>
          </div>

          <WhyThisExcursionIsDifferentSection
            className="mb-8 !border-0 !bg-transparent"
            showCta={false}
          />

          <WhyThisTourBooksEarlySection
            className="mb-8 !border-0 !bg-transparent"
            variant="bordered"
            showCta
          />

          <p className="mb-8 text-sm leading-6 text-gray-600">
            After booking, see our{" "}
            <Link
              href={meetingPointPath}
              className="font-medium text-blue-700 underline underline-offset-2"
            >
              meeting point guide
            </Link>{" "}
            for walking directions from the tender pier.
          </p>

          <BookingReassurance className="mb-8" />

          <BookingEnquiryForm tourName={featuredTour.fullName} />

          <p className="mt-8 text-center text-sm text-gray-600">
            Prefer email only? Contact{" "}
            <a
              href={`mailto:${siteConfig.bookingEmail}`}
              className="font-medium text-blue-700 underline"
            >
              {siteConfig.bookingEmail}
            </a>
          </p>
        </section>
      </main>
    </>
  );
}
