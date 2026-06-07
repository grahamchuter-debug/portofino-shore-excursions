import Link from "next/link";

import {
  CruiseShipCallCards,
  CruiseShipSnapshot,
} from "@/components/cruise-ship-call-cards";
import { JsonLd } from "@/components/json-ld";
import { ShipScheduleShell } from "@/components/ship-schedule-shell";
import type { CruiseShipProfile } from "@/lib/cruise-ship-types";
import {
  cruiseShipExcursionRecommendations,
  cruiseShipRelatedLinks,
  getCruiseShipFaqs,
  getCruiseShipLead,
  getVisitLengthAdvice,
} from "@/lib/cruise-ship-page";
import { siteConfig } from "@/lib/site-config";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildWebPageSchema,
} from "@/lib/site-schema";

type CruiseShipDetailPageProps = {
  ship: CruiseShipProfile;
};

export function CruiseShipDetailPage({ ship }: CruiseShipDetailPageProps) {
  const faqs = getCruiseShipFaqs(ship);
  const visitAdvice = getVisitLengthAdvice(ship.visitLengthCategory);
  const title = `${ship.name} in Portofino`;
  const lead = getCruiseShipLead(ship);
  const pagePath = `/cruise-ships/${ship.slug}`;
  const pageDescription = `Planning guide for ${ship.name} passengers visiting Portofino, with tender advice, port call schedule, and shore excursion recommendations.`;

  return (
    <>
      <JsonLd
        data={[
          buildWebPageSchema({
            path: pagePath,
            title: `${title} | ${siteConfig.name}`,
            description: pageDescription,
          }),
          buildBreadcrumbSchema(
            [
              { label: "Home", href: "/" },
              { label: "Cruise Ships", href: "/cruise-ships" },
              { label: ship.name },
            ],
            pagePath,
          ),
          buildFaqSchema(faqs),
        ]}
      />
      <ShipScheduleShell
        title={title}
        lead={lead}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Cruise Ships", href: "/cruise-ships" },
          { label: ship.name },
        ]}
        ctaTitle={`Plan your ${ship.name} Portofino port day`}
        ctaLabel="View shore excursions"
      >
        <CruiseShipSnapshot typicalVisitLength={ship.typicalVisitLength} />

        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-3xl space-y-4 text-gray-700">
            <h2 className="text-2xl font-bold text-gray-900">
              {ship.name} Portofino schedule
            </h2>
            <p className="leading-7">
                {ship.name} ({ship.cruiseLine}) has {ship.callCount} known
                Portofino port call{ship.callCount === 1 ? "" : "s"} in our
                published schedules. Passengers tender into Portofino village
                from the anchored ship — use these timings to judge how much time you
              have ashore and whether a guided excursion or independent visit
              makes more sense.
            </p>
          </div>

          <div className="mt-8">
            <CruiseShipCallCards calls={ship.calls} shipName={ship.name} />
          </div>
        </section>

        <section className="border-t bg-white">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
            <div className="mx-auto max-w-3xl space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Best excursions for {ship.name} passengers
              </h2>
              <p className="leading-7 text-gray-700">
                These Portofino options suit tender passengers who need reliable
                return-to-ship timing. Match the excursion duration to your
                published call length before booking.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
              {cruiseShipExcursionRecommendations.map((excursion) => (
                <article
                  key={excursion.href}
                  className="flex h-full flex-col rounded-xl border border-gray-200 bg-gray-50 p-5 shadow-sm"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                    {excursion.bestFor}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-gray-900">
                    {excursion.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-gray-700">
                    {excursion.description}
                  </p>
                  <Link
                    href={excursion.href}
                    className="mt-4 text-sm font-medium text-blue-700 underline underline-offset-2"
                  >
                    View details →
                  </Link>
                </article>
              ))}
            </div>

            <p className="mx-auto mt-8 max-w-3xl text-sm leading-6 text-gray-600">
              Private Italian Riviera excursions can be arranged on longer port
              calls when you want a fully customised itinerary. Contact your
              excursion provider with your ship&apos;s arrival and departure
              times.
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="space-y-10 text-gray-700 [&_a]:font-medium [&_a]:text-blue-700 [&_a]:underline [&_a]:underline-offset-2 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_li]:leading-7 [&_p]:leading-7 [&_section]:space-y-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
            <section>
              <h2>Tender information for {ship.name}</h2>
              <p>
                Portofino is normally a tender port. {ship.name} will anchor
                offshore and transfer passengers by tender boat into Portofino
                village, near the harbour.
              </p>
              <p>
                Early tenders can be busy, especially when several ships are in
                the Gulf on the same day. Do not plan an excursion to start
                immediately at published arrival time; allow time to queue,
                transfer, and reach the meeting point.
              </p>
              <p>
                Read our full{" "}
                <Link href="/portofino-tender-information">
                  Portofino tender guide
                </Link>{" "}
                for queuing advice and return-to-ship margins.
              </p>
            </section>

            <section>
              <h2>{visitAdvice.title}</h2>
              <ul>
                {visitAdvice.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                Use the{" "}
                <Link href="/cruise-planner">Portofino cruise planner</Link> with
                your ship&apos;s times to see which excursions fit comfortably.
              </p>
            </section>

            <section>
              <h2>Meeting point and arrival advice</h2>
              <p>
                Guides normally arrive shortly before tour departure, not at
                the moment your ship&apos;s published arrival time begins.
                Passengers who tender ashore very early may not see the guide
                immediately — this is normal.
              </p>
              <ul>
                <li>Allow time for tender queues after your ship clears passengers.</li>
                <li>
                  Keep your excursion supplier contact details handy in case of
                  tender delays.
                </li>
                <li>
                  Meeting points are usually near the Portofino harbour and
                  piazzetta — see our{" "}
                  <Link href="/portofino-meeting-points">
                    meeting points guide
                  </Link>
                  .
                </li>
                <li>
                  If your tender is late, read{" "}
                  <Link href="/what-if-my-tender-is-late">
                    what to do if your tender is delayed
                  </Link>
                  .
                </li>
              </ul>
            </section>
          </div>
        </article>

        <section className="border-t bg-gray-50">
          <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              Frequently asked questions
            </h2>
            <dl className="space-y-6">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm"
                >
                  <dt className="font-semibold text-gray-900">{faq.question}</dt>
                  <dd className="mt-2 leading-7 text-gray-700">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="border-t bg-white">
          <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
            <h2 className="mb-4 text-xl font-bold text-gray-900">
              Related Portofino planning guides
            </h2>
            <ul className="flex flex-wrap gap-3">
              {cruiseShipRelatedLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-800 transition hover:border-gray-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </ShipScheduleShell>
    </>
  );
}
