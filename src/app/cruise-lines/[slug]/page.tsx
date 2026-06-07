import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { FeaturedTourRecommendationBox } from "@/components/featured-tour-recommendation-box";
import { JsonLd } from "@/components/json-ld";
import { ShipScheduleBreadcrumbs } from "@/components/ship-schedule-breadcrumbs";
import { featuredTour } from "@/lib/featured-tour";
import { featuredTourFacts, featuredTourGroupSizeLine } from "@/lib/featured-tour-facts";
import {
  cruiseLinePortofinoPages,
  cruiseLinePortofinoRelatedPaths,
  getCruiseLinePortofinoPage,
  getCruiseLinePortofinoShips,
} from "@/lib/cruise-line-portofino-pages";
import { getCruiseShipPath } from "@/lib/cruise-ship-utils";
import { buildPageMetadata } from "@/lib/site-metadata";
import { buildBreadcrumbSchema, buildFaqSchema, buildWebPageSchema } from "@/lib/site-schema";
import { siteConfig } from "@/lib/site-config";
import { siteImages } from "@/lib/site-images";
import {
  portofinoTenderExplainer,
  portofinoTenderPortAlt,
} from "@/lib/tender-port-copy";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return cruiseLinePortofinoPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getCruiseLinePortofinoPage(slug);

  if (!page) {
    return {};
  }

  return buildPageMetadata({
    title: page.title,
    description: page.description,
    path: page.path,
    ogImage: siteImages.portofinoCruisePort,
    ogImageAlt: portofinoTenderPortAlt,
  });
}

export default async function CruiseLinePortofinoPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getCruiseLinePortofinoPage(slug);

  if (!page) {
    notFound();
  }

  const ships = getCruiseLinePortofinoShips(page);
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Cruise Ships", href: "/cruise-ships" },
    { label: page.cruiseLineName },
  ] as const;

  const schema = [
    buildWebPageSchema({
      path: page.path,
      title: page.title,
      description: page.description,
    }),
    buildBreadcrumbSchema(breadcrumbs, page.path),
    buildFaqSchema(page.faqs),
  ];

  return (
    <>
      <JsonLd data={schema} />
      <main className="min-h-screen bg-white text-gray-900">
        <ShipScheduleBreadcrumbs items={breadcrumbs} />

        <section
          role="img"
          aria-label={`${page.cruiseLineName} Portofino tender port`}
          className="relative bg-cover bg-center"
          style={{ backgroundImage: `url('${siteImages.portofinoCruisePort}')` }}
        >
          <div className="bg-black/55">
            <div className="mx-auto max-w-6xl px-4 py-16 text-white sm:px-6 sm:py-20">
              <h1 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
                {page.h1}
              </h1>
              <p className="max-w-3xl text-base leading-7 text-white/90 sm:text-lg">
                {page.intro}
              </p>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
          <section className="space-y-4 text-base leading-7 text-gray-700">
            <h2 className="text-2xl font-bold text-gray-900">
              Portofino tender information for {page.cruiseLineName} passengers
            </h2>
            <p>{page.tenderIntro}</p>
            <p>{portofinoTenderExplainer}</p>
            <p>
              Read our full{" "}
              <Link
                href={cruiseLinePortofinoRelatedPaths.tenderInfoPath}
                className="font-medium text-blue-700 underline underline-offset-2"
              >
                Portofino tender information
              </Link>{" "}
              guide and{" "}
              <Link
                href={cruiseLinePortofinoRelatedPaths.meetingPointPath}
                className="font-medium text-blue-700 underline underline-offset-2"
              >
                meeting point directions
              </Link>{" "}
              before port day.
            </p>
          </section>

          <section className="mt-12 space-y-4 text-base leading-7 text-gray-700">
            <h2 className="text-2xl font-bold text-gray-900">
              Why Portofino is different from docked ports
            </h2>
            <p>{page.whyTenderDifferent}</p>
            <p>
              Use the{" "}
              <Link
                href={cruiseLinePortofinoRelatedPaths.cruisePlannerPath}
                className="font-medium text-blue-700 underline underline-offset-2"
              >
                cruise planner
              </Link>{" "}
              with your ship&apos;s arrival and departure times to see how much
              usable time you have ashore.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900">
              Recommended excursion: {featuredTour.cardName}
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-700">
              {featuredTourFacts.uniqueSellingPoint} {featuredTourFacts.durationLabel},{" "}
              {featuredTourGroupSizeLine}, designed around tender-port timing.
            </p>
            <FeaturedTourRecommendationBox className="mt-6" />
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={cruiseLinePortofinoRelatedPaths.featuredTourPath}
                className="rounded-full bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800"
              >
                View Small Group Tour
              </Link>
              <Link
                href={cruiseLinePortofinoRelatedPaths.featuredTourBookingPath}
                className="rounded-full border-2 border-gray-900 bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50"
              >
                Check Availability
              </Link>
            </div>
          </section>

          {ships.length > 0 ? (
            <section className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900">
                {page.cruiseLineName} ships in our Portofino schedules
              </h2>
              <p className="mt-4 text-base leading-7 text-gray-700">
                Select your ship for port call history, tender planning advice,
                and excursion recommendations.
              </p>
              <ul className="mt-4 space-y-2">
                {ships.map((ship) => (
                  <li key={ship.slug}>
                    <Link
                      href={getCruiseShipPath(ship.slug)}
                      className="font-medium text-blue-700 underline underline-offset-2"
                    >
                      {ship.name}
                    </Link>
                    <span className="text-sm text-gray-600">
                      {" "}
                      — {ship.callCount} published call
                      {ship.callCount === 1 ? "" : "s"}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ) : (
            <section className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900">
                {page.cruiseLineName} ship schedules
              </h2>
              <p className="mt-4 text-base leading-7 text-gray-700">
                When {page.cruiseLineName} publishes Portofino calls, they appear
                in our ship schedules. Browse the{" "}
                <Link
                  href={cruiseLinePortofinoRelatedPaths.shipSchedulesPath}
                  className="font-medium text-blue-700 underline underline-offset-2"
                >
                  Portofino ship schedule hub
                </Link>{" "}
                and{" "}
                <Link
                  href="/cruise-ships"
                  className="font-medium text-blue-700 underline underline-offset-2"
                >
                  cruise ships directory
                </Link>{" "}
                for current data.
              </p>
            </section>
          )}

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900">Planning links</h2>
            <ul className="mt-4 space-y-2 text-base leading-7 text-gray-700">
              <li>
                <Link
                  href={cruiseLinePortofinoRelatedPaths.shipSchedulesPath}
                  className="font-medium text-blue-700 underline underline-offset-2"
                >
                  Portofino ship schedules
                </Link>
              </li>
              <li>
                <Link
                  href={cruiseLinePortofinoRelatedPaths.tenderInfoPath}
                  className="font-medium text-blue-700 underline underline-offset-2"
                >
                  Tender information
                </Link>
              </li>
              <li>
                <Link
                  href={cruiseLinePortofinoRelatedPaths.meetingPointPath}
                  className="font-medium text-blue-700 underline underline-offset-2"
                >
                  Meeting point directions
                </Link>
              </li>
              <li>
                <Link
                  href={cruiseLinePortofinoRelatedPaths.cruisePlannerPath}
                  className="font-medium text-blue-700 underline underline-offset-2"
                >
                  Cruise planner
                </Link>
              </li>
              <li>
                <Link
                  href={siteConfig.excursionsHubPath}
                  className="font-medium text-blue-700 underline underline-offset-2"
                >
                  All Portofino shore excursions
                </Link>
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900">FAQ</h2>
            <dl className="mt-6 space-y-6">
              {page.faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-700">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </main>
    </>
  );
}
