import type { Metadata } from "next";
import Link from "next/link";

import { BookingReassurance } from "@/components/booking-reassurance";
import { ConversionCtaStrip } from "@/components/conversion-cta-strip";
import { FeaturedTourRecommendationBox } from "@/components/featured-tour-recommendation-box";
import {
  FeaturedTourComparisonSection,
  FeaturedTourPassengerQuestionsSection,
  FeaturedTourSampleItinerarySection,
  FeaturedTourTrustSection,
} from "@/components/homepage-conversion-sections";
import { WhyThisExcursionIsDifferentSection } from "@/components/why-this-excursion-is-different-section";
import { WhyWeCreatedThisTourSection } from "@/components/why-we-created-this-tour-section";
import { JsonLd } from "@/components/json-ld";
import { featuredTour } from "@/lib/featured-tour";
import { featuredTourFacts } from "@/lib/featured-tour-facts";
import { featuredTourPassengerQuestions, featuredTourRecommendedBullets, featuredTourTrustPoints } from "@/lib/featured-tour-content";
import { buildPageMetadata } from "@/lib/site-metadata";
import {
  buildFaqSchema,
  buildFeaturedTourTripSchema,
  buildItemListSchema,
  buildWebPageSchema,
} from "@/lib/site-schema";
import { siteImages, siteHeroAlt } from "@/lib/site-images";

const pageMeta = {
  title:
    "Portofino Shore Excursions | Small Group Santa Margherita, Camogli & Portofino Tours",
  description:
    `Small-group Portofino shore excursions for cruise passengers — ${featuredTourFacts.durationLabel.toLowerCase()} tour covering Santa Margherita, Camogli and Portofino. Tender guides and return-to-ship planning.`,
  path: "/",
} as const;

export const metadata: Metadata = buildPageMetadata({
  ...pageMeta,
  ogImage: siteImages.hero,
  ogImageAlt: siteHeroAlt,
  absoluteTitle: true,
});

const trustBadges = featuredTourTrustPoints.slice(0, 3);

const alternativeTours = [
  {
    name: "Camogli & Portofino Coast Tour",
    description:
      "Intimate small-group excursion to Camogli fishing village and the Portofino coastline — an alternative when you want coastal depth without the full three-village itinerary.",
    href: "/excursions/camogli-portofino-coast",
    image: siteImages.camogli,
    imageAlt: "Camogli fishing village on the Portofino coast shore excursion",
    badge: "Coastal alternative",
  },
  {
    name: "Portofino Coastal Walk",
    description:
      "Guided headland walk and village free time — ideal for shorter port calls when staying close to the tender pier.",
    href: "/excursions/portofino-coastal-walk",
    image: siteImages.coastalWalk,
    imageAlt: "Portofino lighthouse on the coastal headland walk shore excursion",
    badge: "Best for shorter port calls",
  },
] as const;

export default function Home() {
  return (
    <>
      <JsonLd
        data={[
          buildWebPageSchema({
            path: pageMeta.path,
            title: pageMeta.title,
            description: pageMeta.description,
          }),
          buildItemListSchema([
            {
              name: featuredTour.fullName,
              description:
                `${featuredTourFacts.durationLabel} small-group shore excursion — Portofino, Santa Margherita Ligure and Camogli in one cruise day.`,
            },
            ...alternativeTours.map((t) => ({
              name: t.name,
              description: t.description,
            })),
          ]),
          buildFeaturedTourTripSchema(),
          buildFaqSchema([...featuredTourPassengerQuestions]),
        ]}
      />
      <main className="min-h-screen bg-white text-gray-900">
        <section
          role="img"
          aria-label={siteHeroAlt}
          className="relative bg-cover bg-center"
          style={{ backgroundImage: `url('${siteImages.hero}')` }}
        >
          <div className="bg-black/50">
            <div className="mx-auto max-w-6xl px-4 py-20 text-center text-white sm:px-6 sm:py-28 md:py-32">
              <h1 className="mb-4 text-3xl font-bold sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
                Small Group Portofino, Santa Margherita &amp; Camogli Shore
                Excursions
              </h1>

              <p className="mx-auto mb-6 max-w-3xl text-base font-medium leading-relaxed sm:mb-8 sm:text-xl md:text-2xl">
                {featuredTourFacts.uniqueSellingPoint}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  href={featuredTour.path}
                  className="inline-block rounded-full bg-blue-600 px-6 py-3 text-base font-semibold transition hover:bg-blue-700 sm:px-8 sm:py-4 sm:text-lg"
                >
                  View Small Group Tour
                </Link>
                <Link
                  href={featuredTour.path}
                  className="inline-block rounded-full border border-white/30 bg-white/10 px-6 py-3 text-base font-semibold backdrop-blur-sm transition hover:bg-white/20 sm:px-8 sm:py-4 sm:text-lg"
                >
                  Check Availability
                </Link>
              </div>

              <ul className="mx-auto mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-2 sm:mt-8 sm:gap-3">
                {trustBadges.map((badge) => (
                  <li
                    key={badge}
                    className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm sm:px-4 sm:text-sm"
                  >
                    {badge}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          id="recommended-tour"
          className="border-b bg-gradient-to-b from-blue-50 to-white"
        >
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Recommended Portofino Shore Excursion
            </h2>
            <div className="overflow-hidden rounded-2xl border-2 border-blue-600 bg-white shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <img
                  src={siteImages.santaMargherita}
                  alt="Small Group Santa Margherita, Camogli and Portofino shore excursion on the Italian Riviera"
                  className="h-56 w-full object-cover lg:h-full lg:min-h-[360px]"
                />
                <div className="flex flex-col p-6 sm:p-8">
                  <p className="mb-4 inline-flex w-fit rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                    Most Popular Cruise Excursion
                  </p>
                  <h3 className="mb-3 text-2xl font-bold text-gray-900 sm:text-3xl">
                    {featuredTour.fullName}
                  </h3>
                  <ul className="mb-6 flex-1 space-y-2 text-sm leading-6 text-gray-700 sm:text-base">
                    {featuredTourRecommendedBullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600"
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={featuredTour.path}
                      className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 sm:text-base"
                    >
                      View Tour
                    </Link>
                    <Link
                      href={featuredTour.bookingPath}
                      className="rounded-full border border-blue-600 bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50 sm:text-base"
                    >
                      Check Availability
                    </Link>
                  </div>
                  <BookingReassurance className="mt-6" compact />
                </div>
              </div>
            </div>
          </div>
        </section>

        <WhyThisExcursionIsDifferentSection showCta />

        <WhyWeCreatedThisTourSection variant="muted" showCta={false} />

        <section className="border-y border-blue-100 bg-blue-50/40">
          <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
            <FeaturedTourRecommendationBox />
          </div>
        </section>

        <FeaturedTourTrustSection />

        <FeaturedTourComparisonSection />

        <FeaturedTourSampleItinerarySection />

        <section className="border-b bg-white py-10">
          <ConversionCtaStrip className="mx-auto max-w-6xl px-4 sm:px-6" />
        </section>

        <section id="about" className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
            The only shared small-group Riviera tour from Portofino
          </h2>

          <p className="text-base leading-8 text-gray-700 sm:text-lg">
            {featuredTourFacts.uniqueSellingPoint} Ships anchor offshore and
            tender into Portofino village — every minute ashore counts. Book the{" "}
            <Link
              href={featuredTour.path}
              className="font-medium text-blue-700 underline"
            >
              {featuredTour.cardName}
            </Link>{" "}
            tour for tender-aware timing, an 8-seat van, and return-to-ship
            planning built around your cruise schedule.
          </p>

          <FeaturedTourRecommendationBox className="mt-8" />
        </section>

        <section
          id="tours"
          className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-24"
        >
          <h2 className="mb-2 text-3xl font-bold sm:mb-3 sm:text-4xl">
            Portofino shore excursions
          </h2>
          <p className="mb-8 max-w-3xl text-base leading-7 text-gray-600">
            Start with our recommended small-group tour — other options below
            suit different port times or preferences.
          </p>

          <article className="mb-10 overflow-hidden rounded-2xl border-2 border-blue-600 bg-white shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <img
                src={siteImages.santaMargherita}
                alt="Small Group Santa Margherita, Camogli and Portofino shore excursion on the Italian Riviera"
                className="h-56 w-full object-cover lg:h-full lg:min-h-[280px]"
              />
              <div className="flex flex-col p-6 sm:p-8">
                <p className="mb-3 inline-flex w-fit rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                  Most Popular Cruise Excursion
                </p>
                <h3 className="mb-3 text-2xl font-bold text-gray-900">
                  {featuredTour.fullName}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-6 text-gray-700 sm:text-base">
                  {featuredTourFacts.uniqueSellingPoint}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={featuredTour.path}
                    className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    View Tour
                  </Link>
                  <Link
                    href={featuredTour.bookingPath}
                    className="rounded-full border border-blue-600 px-5 py-2.5 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
                  >
                    Check Availability
                  </Link>
                </div>
              </div>
            </div>
          </article>

          <h3 className="mb-4 text-lg font-semibold text-gray-500">
            Other Portofino excursions
          </h3>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {alternativeTours.map((tour) => (
              <article
                key={tour.href}
                className="flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-gray-50/80 shadow-sm"
              >
                <img
                  src={tour.image}
                  alt={tour.imageAlt}
                  className="h-36 w-full object-cover opacity-90"
                />

                <div className="flex flex-1 flex-col p-4">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
                    {tour.badge}
                  </p>
                  <h3 className="mb-2 text-base font-semibold text-gray-800">
                    {tour.name}
                  </h3>

                  <p className="mb-4 flex-1 text-sm leading-5 text-gray-600">
                    {tour.description}
                  </p>

                  <Link
                    href={tour.href}
                    className="w-fit rounded-full border border-gray-300 bg-white px-4 py-1.5 text-xs font-medium text-gray-700 transition hover:border-gray-400"
                  >
                    View Tour
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <FeaturedTourPassengerQuestionsSection />

        <section className="border-t bg-gray-900 py-12">
          <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
            <h2 className="mb-2 text-2xl font-bold text-white sm:text-3xl">
              Ready to book your Portofino port day?
            </h2>
            <p className="mx-auto mb-6 max-w-2xl text-base text-white/80">
              See three Riviera villages in one cruise day — with tender-aware
              timing and return-to-ship planning built in.
            </p>
            <ConversionCtaStrip variant="dark" />
          </div>
        </section>

        <section id="tips" className="border-t bg-gray-50">
          <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              Tender Port Day Tips
            </h2>
            <p className="text-base leading-8 text-gray-700 sm:text-lg">
              Cruise ships do not dock in Portofino village. They anchor
              offshore and tender passengers into the harbour, so it is
              important to allow enough time to get ashore and return before
              all aboard. Allow 15 to 20 minutes each way for tender transfers.
              Read our{" "}
              <Link
                href="/portofino-tender-information"
                className="font-medium text-blue-700 underline"
              >
                tender information guide
              </Link>{" "}
              before port day, and see our{" "}
              <Link
                href={featuredTour.path}
                className="font-medium text-blue-700 underline"
              >
                {featuredTour.cardName}
              </Link>{" "}
              for the best way to combine Santa Margherita, Camogli and
              Portofino.
            </p>

            <FeaturedTourRecommendationBox className="mt-8" />
          </div>
        </section>

        <section className="border-t bg-white">
          <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              Plan your port day before you arrive
            </h2>
            <p className="mb-6 text-base leading-8 text-gray-700 sm:text-lg">
              Match excursions to your arrival and departure times so you can
              enjoy the Riviera and still return before all aboard.
            </p>

            <FeaturedTourRecommendationBox className="mb-8" />
            <ul className="flex flex-wrap gap-3">
              <li>
                <Link
                  href={featuredTour.bookingPath}
                  className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-800 transition hover:border-blue-300"
                >
                  Check availability
                </Link>
              </li>
              <li>
                <Link
                  href={featuredTour.path}
                  className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-800 transition hover:border-blue-300"
                >
                  View main excursion
                </Link>
              </li>
              <li>
                <Link
                  href="/cruise-planner"
                  className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-800 transition hover:border-gray-300"
                >
                  Plan your Portofino cruise day
                </Link>
              </li>
              <li>
                <Link
                  href="/ship-schedules"
                  className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-800 transition hover:border-gray-300"
                >
                  Ship schedules
                </Link>
              </li>
              <li>
                <Link
                  href="/cruise-planner"
                  className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-800 transition hover:border-gray-300"
                >
                  Cruise planner
                </Link>
              </li>
              <li>
                <Link
                  href="/one-day-in-portofino"
                  className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-800 transition hover:border-gray-300"
                >
                  One day in Portofino
                </Link>
              </li>
              <li>
                <Link
                  href="/portofino-meeting-points"
                  className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-800 transition hover:border-gray-300"
                >
                  Meeting points
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
