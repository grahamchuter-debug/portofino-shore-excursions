"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { featuredTour } from "@/lib/featured-tour";
import {
  calculatePortofinoPlannerResult,
  getConfidenceTone,
  PLANNER_DISCLAIMER,
  portofinoPortDayPlannerConfig,
  TENDER_ASHORE_DELAY_MINUTES,
  TENDER_PIER_RETURN_BUFFER_MINUTES,
} from "@/lib/cruise-port-day-planner";

const plannerBadges = [
  "Tender-aware",
  "Return-to-ship planning",
  "Small-group recommendation",
] as const;

function ResultCard({
  title,
  children,
  highlight = false,
}: {
  title: string;
  children: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-4 shadow-sm sm:p-5 ${
        highlight
          ? "border-blue-300 bg-white ring-2 ring-blue-100"
          : "border-white/80 bg-white/90 backdrop-blur-sm"
      }`}
    >
      <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-900/70">
        {title}
      </h3>
      <div className="mt-3">{children}</div>
    </div>
  );
}

export function CruisePortDayPlanner() {
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");

  const result = useMemo(() => {
    if (!arrival || !departure) {
      return null;
    }
    return calculatePortofinoPlannerResult(arrival, departure);
  }, [arrival, departure]);

  const hasValidResult = result && !("error" in result);

  return (
    <section
      aria-labelledby="port-day-planner-heading"
      className="overflow-hidden rounded-2xl border border-sky-200 bg-gradient-to-br from-sky-50 via-blue-50 to-slate-50 p-5 shadow-sm sm:p-6 lg:p-8"
    >
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
          Cruise planning tool
        </p>
        <h2
          id="port-day-planner-heading"
          className="!mt-2 text-2xl font-bold text-gray-900 sm:text-3xl"
        >
          {portofinoPortDayPlannerConfig.heading}
        </h2>
        <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
          {portofinoPortDayPlannerConfig.subtitle}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {plannerBadges.map((badge) => (
            <li
              key={badge}
              className="rounded-full border border-blue-200 bg-white/80 px-3 py-1 text-xs font-medium text-blue-800"
            >
              {badge}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-gray-700">
            Ship arrival time
          </span>
          <input
            type="time"
            value={arrival}
            onChange={(event) => setArrival(event.target.value)}
            className="mt-1.5 w-full rounded-xl border border-sky-200 bg-white px-3 py-2.5 text-base text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-gray-700">
            Ship departure time
          </span>
          <input
            type="time"
            value={departure}
            onChange={(event) => setDeparture(event.target.value)}
            className="mt-1.5 w-full rounded-xl border border-sky-200 bg-white px-3 py-2.5 text-base text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </label>
      </div>

      {result ? (
        <div className="mt-6 space-y-4">
          {"error" in result ? (
            <div className="rounded-xl border border-red-200 bg-white/90 p-4 text-sm text-red-700">
              {result.error}
            </div>
          ) : (
            <>
              <div
                className={`rounded-2xl border-2 p-5 sm:p-6 ${
                  result.recommendMainTour
                    ? "border-blue-500 bg-white shadow-md"
                    : "border-amber-300 bg-white shadow-md"
                }`}
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                  Your Portofino port day result
                </p>
                <p
                  className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                    result.recommendMainTour
                      ? "bg-blue-600 text-white"
                      : "bg-amber-100 text-amber-900"
                  }`}
                >
                  {result.fitBadge}
                </p>
                <h3 className="mt-3 text-xl font-bold text-gray-900 sm:text-2xl">
                  {result.fitHeadline}
                </h3>
                <p className="mt-3 text-base leading-7 text-gray-700">
                  {result.fitMessage}
                </p>

                <div
                  className={`mt-5 rounded-xl border p-4 sm:p-5 ${
                    result.recommendMainTour
                      ? "border-blue-200 bg-blue-50/70"
                      : "border-amber-200 bg-amber-50/60"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                    {result.recommendationTitle}
                  </p>

                  {result.recommendMainTour ? (
                    <>
                      <h4 className="mt-2 text-lg font-bold text-gray-900">
                        {featuredTour.fullName}
                      </h4>
                      {result.mainTourWhyItFits ? (
                        <p className="mt-2 text-sm leading-6 text-gray-700 sm:text-base">
                          {result.mainTourWhyItFits}
                        </p>
                      ) : null}
                      <div className="mt-4 flex flex-wrap gap-3">
                        <Link
                          href={featuredTour.path}
                          className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                        >
                          View Small Group Tour
                        </Link>
                        <Link
                          href={featuredTour.bookingPath}
                          className="rounded-full border border-blue-600 bg-white px-5 py-2.5 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
                        >
                          Check Availability
                        </Link>
                      </div>
                    </>
                  ) : (
                    <>
                      <h4 className="mt-2 text-lg font-bold text-gray-900">
                        Stay in Portofino village
                      </h4>
                      {result.recommendationSummary ? (
                        <p className="mt-2 text-sm leading-6 text-gray-700 sm:text-base">
                          {result.recommendationSummary}
                        </p>
                      ) : null}
                      <div className="mt-4 flex flex-wrap gap-3">
                        <Link
                          href="/excursions/portofino-coastal-walk"
                          className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                        >
                          View Coastal Walk
                        </Link>
                        <Link
                          href="/one-day-in-portofino"
                          className="rounded-full border border-blue-600 bg-white px-5 py-2.5 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
                        >
                          One Day in Portofino
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <ResultCard title="Scheduled port time">
                  <p className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    {result.scheduledPortLabel}
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Arrival to departure
                  </p>
                </ResultCard>

                <ResultCard title="Tender planning time">
                  <p className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    {result.tenderPlanningMinutes} min
                  </p>
                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    {TENDER_ASHORE_DELAY_MINUTES} min ashore delay +{" "}
                    {TENDER_PIER_RETURN_BUFFER_MINUTES} min return window
                  </p>
                </ResultCard>

                <ResultCard title="Usable time ashore" highlight>
                  <p className="text-2xl font-bold text-blue-800 sm:text-3xl">
                    {result.usableAshoreLabel}
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    After tender delays are deducted
                  </p>
                </ResultCard>

                <ResultCard title="Port day rating">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-sm font-bold ${getConfidenceTone(result.confidenceScore).badge}`}
                    >
                      {result.confidenceScore}/10
                    </span>
                    <span className="text-sm font-semibold text-gray-900">
                      {result.confidenceLabel}
                    </span>
                  </div>
                  <div
                    className="mt-3 h-2 overflow-hidden rounded-full bg-gray-200"
                    role="presentation"
                  >
                    <div
                      className={`h-full rounded-full transition-all ${getConfidenceTone(result.confidenceScore).bar}`}
                      style={{ width: `${result.confidenceScore * 10}%` }}
                    />
                  </div>
                </ResultCard>
              </div>

              <ResultCard title="Return-to-ship timing">
                <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wide text-gray-500">
                      Realistically ashore from
                    </dt>
                    <dd className="mt-1 text-lg font-semibold text-gray-900">
                      {result.ashoreFromLabel}
                    </dd>
                    <dd className="text-xs text-gray-500">
                      {TENDER_ASHORE_DELAY_MINUTES} min after arrival
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wide text-gray-500">
                      Be at tender pier by
                    </dt>
                    <dd className="mt-1 text-lg font-semibold text-blue-800">
                      {result.recommendedTenderPierReturn}
                    </dd>
                    <dd className="text-xs text-gray-500">
                      {TENDER_PIER_RETURN_BUFFER_MINUTES} min before departure
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wide text-gray-500">
                      Ship departs
                    </dt>
                    <dd className="mt-1 text-lg font-semibold text-gray-900">
                      {result.departureLabel}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wide text-gray-500">
                      Port type
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-gray-800">
                      Tender port — passengers land in Portofino village
                    </dd>
                  </div>
                </dl>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {PLANNER_DISCLAIMER}
                </p>
              </ResultCard>

              <ResultCard title="Also worth considering">
                <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {result.excursions.map((excursion) => (
                    <li key={excursion.label}>
                      {excursion.href ? (
                        <Link
                          href={excursion.href}
                          className={`block rounded-lg border px-3 py-2.5 text-sm font-medium transition ${
                            excursion.href === featuredTour.path
                              ? "border-blue-300 bg-blue-50 text-blue-900 hover:border-blue-400 hover:bg-blue-100"
                              : "border-sky-100 bg-sky-50/70 text-blue-800 hover:border-blue-200 hover:bg-sky-100"
                          }`}
                        >
                          {excursion.label}
                        </Link>
                      ) : (
                        <span className="block rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-700">
                          {excursion.label}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </ResultCard>

              <ResultCard title="Suggested Portofino day plan">
                <ol className="list-none space-y-2 pl-0">
                  {result.dayPlan.map((step, index) => (
                    <li
                      key={step}
                      className="flex gap-3 text-sm leading-6 text-gray-700 sm:text-base"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-800">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </ResultCard>

              <div className="rounded-xl border border-gray-200 bg-white/80 p-4 text-sm leading-6 text-gray-600">
                <p className="font-medium text-gray-900">Helpful guides</p>
                <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
                  <li>
                    <Link
                      href="/portofino-tender-information"
                      className="font-medium text-blue-700 underline"
                    >
                      Tender information
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/portofino-meeting-points"
                      className="font-medium text-blue-700 underline"
                    >
                      Meeting points
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/what-if-my-tender-is-late"
                      className="font-medium text-blue-700 underline"
                    >
                      What if my tender is late?
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={featuredTour.path}
                      className="font-medium text-blue-700 underline"
                    >
                      Main Portofino excursion
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={featuredTour.bookingPath}
                      className="font-medium text-blue-700 underline"
                    >
                      Check availability
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      ) : (
        <p className="mt-6 rounded-xl border border-dashed border-sky-200 bg-white/60 px-4 py-3 text-sm text-gray-600">
          Enter your ship&apos;s arrival and departure times to see usable time
          ashore, return-to-ship guidance, and excursion recommendations — with
          tender delays calculated for you.
        </p>
      )}

      {hasValidResult ? null : (
        <p className="mt-3 text-xs leading-5 text-gray-500">
          Portofino is a tender port. This planner automatically allows{" "}
          {TENDER_ASHORE_DELAY_MINUTES} minutes after arrival before you are
          ashore, and recommends reaching the tender pier{" "}
          {TENDER_PIER_RETURN_BUFFER_MINUTES} minutes before departure.
        </p>
      )}
    </section>
  );
}
