import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { buildPageMetadata } from "@/lib/site-metadata";
import {
  buildItemListSchema,
  buildWebPageSchema,
} from "@/lib/site-schema";
import { siteImages, siteHeroAlt } from "@/lib/site-images";

const pageMeta = {
  title:
    "Portofino Shore Excursions | Cruise Port Tours & Riviera Guides for Passengers",
  description:
    "Plan your Portofino cruise port day with small-group shore excursions, tender guides, and advice to return to your ship on time from Portofino village.",
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

const popularTours = [
  {
    name: "Portofino & Santa Margherita Riviera",
    description:
      "Small-group tour of both Riviera villages for cruise passengers tendering into Portofino.",
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
              <h1 className="mb-4 text-3xl font-bold sm:mb-6 sm:text-4xl md:text-6xl lg:text-7xl">
                Portofino Shore Excursions
              </h1>

              <p className="mx-auto mb-6 max-w-3xl text-base sm:mb-8 sm:text-xl md:text-2xl">
                Small-group Italian Riviera adventures designed for cruise
                passengers arriving by tender.
              </p>

              <a
                href="#tours"
                className="inline-block rounded-full bg-blue-600 px-6 py-3 text-base font-semibold transition hover:bg-blue-700 sm:px-8 sm:py-4 sm:text-lg"
              >
                View Excursions
              </a>

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

        <section id="about" className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
            Explore the Portofino Riviera Like a Local
          </h2>

          <p className="text-base leading-8 text-gray-700 sm:text-lg">
            Welcome to Portofino Shore Excursions, your specialist guide to the
            Italian Riviera for cruise passengers. Ships anchor offshore and
            tender into Portofino village — and every minute ashore counts. We
            help you plan small-group tours of Portofino, Santa Margherita
            Ligure, and Camogli with local guides who know the roads, the tender
            schedule, and how to get you back before all aboard.
          </p>
        </section>

        <section
          id="tours"
          className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-24"
        >
          <h2 className="mb-6 text-3xl font-bold sm:mb-8 sm:text-4xl">
            Popular Portofino Tours
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <article className="flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 shadow-sm">
              <img
                src={siteImages.santaMargherita}
                alt="Santa Margherita Ligure on the Italian Riviera, included on Portofino shore excursions"
                className="h-40 w-full object-cover"
              />

              <div className="flex flex-1 flex-col p-3.5 md:p-4">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-600">
                  Most Popular
                </p>
                <h3 className="mb-1.5 text-base font-semibold">
                  Portofino & Santa Margherita Riviera
                </h3>

                <p className="mb-3 flex-1 text-sm leading-5 text-gray-600">
                  Visit both Riviera villages on a small-group tour with local
                  guide and return-to-ship timing.
                </p>

                <Link
                  href="/excursions/portofino-santa-margherita-riviera"
                  className="w-fit rounded-full bg-gray-900 px-4 py-1.5 text-xs font-medium text-white transition hover:bg-black"
                >
                  View Tour
                </Link>
              </div>
            </article>

            <article className="flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 shadow-sm">
              <img
                src={siteImages.camogli}
                alt="Camogli"
                className="h-40 w-full object-cover"
              />

              <div className="flex flex-1 flex-col p-3.5 md:p-4">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-600">
                  Small Group Favourite
                </p>
                <h3 className="mb-1.5 text-base font-semibold">
                  Camogli & Portofino Coast
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
                alt="Portofino lighthouse on the coastal headland"
                className="h-40 w-full object-cover"
              />

              <div className="flex flex-1 flex-col p-3.5 md:p-4">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-600">
                  Best for First-Time Visitors
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
              href="/portofino-shore-excursions"
              className="inline-block rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 sm:text-base"
            >
              Enquire About Shore Excursions
            </Link>
          </div>
        </section>

        <section id="tips" className="border-t bg-gray-50">
          <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              Tender Port Day Tips
            </h2>
            <p className="text-base leading-8 text-gray-700 sm:text-lg">
              Cruise ships do not dock in Portofino village — they anchor
              Ships anchor offshore and tender passengers into Portofino village.
              Allow
              15 to 20 minutes each way for tender transfers, and be at the
              pier 45 minutes before all aboard. Read our{" "}
              <Link
                href="/portofino-tender-information"
                className="font-medium text-blue-700 underline"
              >
                tender information guide
              </Link>{" "}
              before port day.
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
