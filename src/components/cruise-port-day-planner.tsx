"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import {
  calculatePortMinutes,
  formatPortDuration,
  getConfidenceTone,
  getReturnGuidance,
  getTierForPortMinutes,
  portofinoPortDayPlannerConfig,
  type CruisePortDayPlannerConfig,
} from "@/lib/cruise-port-day-planner";

type CruisePortDayPlannerProps = {
  config?: CruisePortDayPlannerConfig;
};

function ResultCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-white/80 bg-white/90 p-4 shadow-sm backdrop-blur-sm sm:p-5">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-900/70">
        {title}
      </h3>
      <div className="mt-3">{children}</div>
    </div>
  );
}

export function CruisePortDayPlanner({
  config = portofinoPortDayPlannerConfig,
}: CruisePortDayPlannerProps) {
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");

  const result = useMemo(() => {
    if (!arrival || !departure) {
      return null;
    }

    const totalMinutes = calculatePortMinutes(arrival, departure);

    if (totalMinutes === null) {
      return { error: "Enter valid arrival and departure times." as const };
    }

    const tier = getTierForPortMinutes(totalMinutes, config.tiers);
    const returnGuidance = getReturnGuidance(departure);
    const confidenceTone = getConfidenceTone(tier.confidenceScore);

    return {
      totalMinutes,
      durationLabel: formatPortDuration(totalMinutes),
      tier,
      returnGuidance,
      confidenceTone,
    };
  }, [arrival, config.tiers, departure]);

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
          {config.heading}
        </h2>
        <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
          {config.subtitle}
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-gray-700">Arrival time</span>
          <input
            type="time"
            value={arrival}
            onChange={(event) => setArrival(event.target.value)}
            className="mt-1.5 w-full rounded-xl border border-sky-200 bg-white px-3 py-2.5 text-base text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-gray-700">
            Departure time
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
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <ResultCard title="Time in port">
                  <p className="text-3xl font-bold text-gray-900">
                    {result.durationLabel}
                  </p>
                  <p className="mt-1 text-sm text-gray-600">{result.tier.label}</p>
                </ResultCard>

                <ResultCard title="Cruise confidence score">
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-sm font-bold ${result.confidenceTone.badge}`}
                    >
                      {result.tier.confidenceScore}/10
                    </span>
                    <span className="text-lg font-semibold text-gray-900">
                      {result.tier.confidenceLabel}
                    </span>
                  </div>
                  <div
                    className="mt-3 h-2 overflow-hidden rounded-full bg-gray-200"
                    role="presentation"
                  >
                    <div
                      className={`h-full rounded-full transition-all ${result.confidenceTone.bar}`}
                      style={{
                        width: `${result.tier.confidenceScore * 10}%`,
                      }}
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-700">
                    {result.tier.confidenceMessage}
                  </p>
                </ResultCard>
              </div>

              <ResultCard title="Safe return guidance">
                <dl className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wide text-gray-500">
                      Ship departs
                    </dt>
                    <dd className="mt-1 text-lg font-semibold text-gray-900">
                      {result.returnGuidance.departureLabel}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wide text-gray-500">
                      Recommended return to port
                    </dt>
                    <dd className="mt-1 text-lg font-semibold text-blue-800">
                      {result.returnGuidance.recommendedReturn ?? "Not set"}
                    </dd>
                    <dd className="text-xs text-gray-500">45 min before departure</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wide text-gray-500">
                      Latest comfortable return
                    </dt>
                    <dd className="mt-1 text-lg font-semibold text-gray-900">
                      {result.returnGuidance.latestComfortableReturn ?? "Not set"}
                    </dd>
                    <dd className="text-xs text-gray-500">30 min before departure</dd>
                  </div>
                </dl>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {config.returnBufferNote}
                </p>
              </ResultCard>

              <ResultCard title="Recommended excursions">
                <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {result.tier.excursions.map((excursion) => (
                    <li key={excursion.label}>
                      {excursion.href ? (
                        <Link
                          href={excursion.href}
                          className="block rounded-lg border border-sky-100 bg-sky-50/70 px-3 py-2.5 text-sm font-medium text-blue-800 transition hover:border-blue-200 hover:bg-sky-100"
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

              <ResultCard title={`Suggested ${config.portName} day plan`}>
                <ol className="space-y-2">
                  {result.tier.dayPlan.map((step, index) => (
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
            </>
          )}
        </div>
      ) : (
        <p className="mt-6 rounded-xl border border-dashed border-sky-200 bg-white/60 px-4 py-3 text-sm text-gray-600">
          Add your ship&apos;s arrival and departure times to see your confidence
          score, return guidance, and excursion recommendations.
        </p>
      )}
    </section>
  );
}
