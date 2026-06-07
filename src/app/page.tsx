import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { featuredTour } from "@/lib/featured-tour";
import { buildPageMetadata } from "@/lib/site-metadata";
import {
  buildItemListSchema,
  buildWebPageSchema,
} from "@/lib/site-schema";
import { siteImages, siteHeroAlt } from "@/lib/site-images";

const pageMeta = {
  title:
    "Portofino Shore Excursions | Small Group Santa Margherita, Camogli & Portofino Tours",
  description:
    "Small-group Portofino shore excursions for cruise passengers — explore Santa Margherita, Camogli and Portofino in one Riviera tour. Tender guides and return-to-ship planning.",
  path: "/",
} as const;

export const metadata: Metadata = buildPageMetadata({
  ...pageMeta,
  ogImage: siteImages.hero,
  ogImageAlt: siteHeroAlt,
  absoluteTitle: true,
});

const trustBadges = [
  "Return to ship on time",
  "Tender port specialists",
  "Small-group experiences",
] as const;

const recommendedBadges = [
  "Most Popular Cruise Excursion",
  "Small Group Favourite",
] as const;

const recommendedBullets = [
  "Three Riviera villages in one cruise day",
  "Portofino, Santa Margherita Ligure and Camogli",
  "Designed for cruise passengers arriving by tender",
  "Approx. 5 to 6 hours",
  "Limited spaces",
  "Return-to-ship friendly timing",
] as const;

const popularTours = [
  {
    name: featuredTour.cardName,
    description:
      "Three Riviera villages in one cruise day — Portofino, Santa Margherita Ligure and Camogli on a small-group shore excursion.",
  },
  {
    name: "Camogli & Portofino Coast",
    description:
      "Intimate small-group excursion to Camogli fishing village and the Portofino coastline.",
  },
  {
    name: "Portofino Coastal Walk",
    description:
      "Guided headland walk and village free time — ideal for first-time visitors on moderate port calls.",
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
          buildItemListSchema(popularTours),
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

              <p className="mx-auto mb-6 max-w-3xl text-base sm:mb-8 sm:text-xl md:text-2xl">
                Explore three Italian Riviera highlights in one cruise day with
                a small-group excursion designed for cruise passengers arriving
                in Portofino.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  href={featuredTour.path}
                  className="inline-block rounded-full bg-blue-600 px-6 py-3 text-base font-semibold transition hover:bg-blue-700 sm:px-8 sm:py-4 sm:text-lg"
                >
                  View Small Group Tour
                </Link>
                <Link
                  href="/portofino-port-guide"
                  className="inline-block rounded-full border border-white/30 bg-white/10 px-6 py-3 text-base font-semibold backdrop-blur-sm transition hover:bg-white/20 sm:px-8 sm:py-4 sm:text-lg"
                >
                  View Cruise Port Guide
                </Link>
                <Link
                  href={featuredTour.bookingPath}
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
                  <ul className="mb-4 flex flex-wrap gap-2">
                    {recommendedBadges.map((badge) => (
                      <li
                        key={badge}
                        className="rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white"
                      >
                        {badge}
                      </li>
                    ))}
                  </ul>
                  <h3 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
                    {featuredTour.fullName}
                  </h3>
                  <ul className="mb-6 flex-1 space-y-2 text-sm leading-6 text-gray-700 sm:text-base">
                    {recommendedBullets.map((bullet) => (
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
                      View Small Group Tour
                    </Link>
                    <Link
                      href={featuredTour.bookingPath}
                      className="rounded-full border border-blue-600 bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50 sm:text-base"
                    >
                      Check Availability
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
            Explore the Portofino Riviera Like a Local
          </h2>

          <p className="text-base leading-8 text-gray-700 sm:text-lg">
            Welcome to Portofino Shore Excursions, your specialist guide to the
            Italian Riviera for cruise passengers. Ships anchor offshore and
            tender into Portofino village — and every minute ashore counts. Our{" "}
            <Link
              href={featuredTour.path}
              className="font-medium text-blue-700 underline"
            >
              small-group Santa Margherita, Camogli and Portofino tour
            </Link>{" "}
            is the best way to see three Riviera highlights in one port day,
            with local guides who know the roads, the tender schedule, and how
            to get you back before all aboard.
          </p>
        </section>

        <section
          id="tours"
          className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-24"
        >
          <h2 className="mb-6 text-3xl font-bold sm:mb-8 sm:text-4xl">
            Popular Portofino Tours
          </h2>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <article className="flex h-full flex-col overflow-hidden rounded-xl border-2 border-blue-600 shadow-lg ring-2 ring-blue-100 lg:order-first">
              <img
                src={siteImages.santaMargherita}
                alt="Small Group Santa Margherita, Camogli and Portofino shore excursion on the Italian Riviera"
                className="h-44 w-full object-cover"
              />

              <div className="flex flex-1 flex-col bg-blue-50/50 p-4 md:p-5">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-600">
                  Most Popular · Recommended
                </p>
                <h3 className="mb-1.5 text-base font-bold text-gray-900 md:text-lg">
                  {featuredTour.cardName}
                </h3>

                <p className="mb-3 flex-1 text-sm leading-5 text-gray-600">
                  Three Riviera villages in one port day — Santa Margherita,
                  Camogli and Portofino with return-to-ship timing built in.
                </p>

                <div className="flex flex-wrap gap-2">
                  <Link
                    href={featuredTour.path}
                    className="rounded-full bg-blue-600 px-5 py-2 text-xs font-semibold text-white transition hover:bg-blue-700 md:text-sm"
                  >
                    View Small Group Tour
                  </Link>
                  <Link
                    href={featuredTour.bookingPath}
                    className="rounded-full border border-blue-600 bg-white px-5 py-2 text-xs font-semibold text-blue-700 transition hover:bg-blue-50 md:text-sm"
                  >
                    Check Availability
                  </Link>
                </div>
              </div>
            </article>

            <article className="flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 shadow-sm">
              <img
                src={siteImages.camogli}
                alt="Camogli fishing village on the Portofino coast shore excursion"
                className="h-40 w-full object-cover"
              />

              <div className="flex flex-1 flex-col p-3.5 md:p-4">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-600">
                  Coastal alternative
                </p>
                <h3 className="mb-1.5 text-base font-semibold">
                  Camogli &amp; Portofino Coast
                </h3>

                <p className="mb-3 flex-1 text-sm leading-5 text-gray-600">
                  Discover authentic Camogli and the Portofino coastline on an
                  intimate small-group excursion.
                </p>

                <Link
                  href="/excursions/camogli-portofino-coast"
                  className="w-fit rounded-full bg-gray-900 px-4 py-1.5 text-xs font-medium text-white transition hover:bg-black"
                >
                  View Tour
                </Link>
              </div>
            </article>

            <article className="flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 shadow-sm">
              <img
                src={siteImages.coastalWalk}
                alt="Portofino lighthouse on the coastal headland walk shore excursion"
                className="h-40 w-full object-cover"
              />

              <div className="flex flex-1 flex-col p-3.5 md:p-4">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-600">
                  Best for shorter port calls
                </p>
                <h3 className="mb-1.5 text-base font-semibold">
                  Portofino Coastal Walk
                </h3>

                <p className="mb-3 flex-1 text-sm leading-5 text-gray-600">
                  Guided headland walk and village free time — compact duration
                  for moderate port calls.
                </p>

                <Link
                  href="/excursions/portofino-coastal-walk"
                  className="w-fit rounded-full bg-gray-900 px-4 py-1.5 text-xs font-medium text-white transition hover:bg-black"
                >
                  View Tour
                </Link>
              </div>
            </article>
          </div>

          <div className="mt-8 text-center">
            <Link
              href={featuredTour.path}
              className="mr-3 inline-block rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 sm:text-base"
            >
              View Small Group Tour
            </Link>
            <Link
              href={featuredTour.bookingPath}
              className="inline-block rounded-full border border-blue-600 px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50 sm:text-base"
            >
              Check Availability
            </Link>
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
            <ul className="flex flex-wrap gap-3">
              <li>
                <Link
                  href={featuredTour.bookingPath}
                  className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-800 transition hover:border-blue-300"
                >
                  Book small group tour
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
