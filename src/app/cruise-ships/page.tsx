import Link from "next/link";

import { CruiseShipsHubCards } from "@/components/cruise-ships-hub-cards";
import { JsonLd } from "@/components/json-ld";
import { ShipScheduleShell } from "@/components/ship-schedule-shell";
import { buildCruiseShipsHubMetadata } from "@/lib/cruise-ship-page";
import {
  buildCruiseShipSummaries,
  cruiseShipsHub,
} from "@/lib/portofino-cruise-ships";
import { siteConfig } from "@/lib/site-config";
import { buildWebPageSchema } from "@/lib/site-schema";

export const metadata = buildCruiseShipsHubMetadata();

export default function CruiseShipsHubPage() {
  const ships = buildCruiseShipSummaries();
  const totalCalls = ships.reduce((total, ship) => total + ship.callCount, 0);

  return (
    <>
      <JsonLd
        data={[
          buildWebPageSchema({
            path: cruiseShipsHub.path,
            title: `${cruiseShipsHub.title} | ${siteConfig.name}`,
            description: cruiseShipsHub.description,
          }),
        ]}
      />
      <ShipScheduleShell
        title="Portofino Cruise Ships"
        lead="Browse cruise ships that visit Portofino on the Italian Riviera. Each ship page includes port call history, tender planning advice, and shore excursion recommendations for cruise passengers."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Cruise Ships" },
        ]}
        ctaTitle="Find shore excursions for your Portofino port day"
        ctaLabel="View shore excursions"
      >
        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-3xl space-y-4 text-gray-700">
            <p className="text-base leading-7 sm:text-lg">
              Portofino is a tender port on the Italian Riviera. The ships below
              appear in our published Portofino cruise schedules — currently{" "}
              {ships.length} vessels and {totalCalls} known port calls across
              2026 and 2027.
            </p>
            <p className="text-base leading-7 sm:text-lg">
              Select your ship for a passenger planning guide covering tender
              logistics, time in port, recommended excursions, and links to
              monthly timetables.
            </p>
          </div>

          <div className="mt-10">
            <CruiseShipsHubCards ships={ships} />
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/portofino-shore-excursions"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              View Portofino shore excursions
            </Link>
            <Link
              href="/ship-schedules"
              className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:border-gray-400"
            >
              View ship schedules
            </Link>
          </div>

          <p className="mt-8 text-sm leading-6 text-gray-500">
            Schedules are updated as new port calls are confirmed. For month-by-month
            timetables, visit the{" "}
            <Link
              href="/ship-schedules"
              className="font-medium text-blue-700 underline underline-offset-2"
            >
              Portofino ship schedule hub
            </Link>
            .
          </p>
        </section>
      </ShipScheduleShell>
    </>
  );
}
