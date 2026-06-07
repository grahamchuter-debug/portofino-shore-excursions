import type { Metadata } from "next";
import Link from "next/link";

import { featuredTour } from "@/lib/featured-tour";
import { buildPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Redirecting to Small Group Shore Excursion",
    description:
      "This tour page has moved to the Small Group Santa Margherita, Camogli & Portofino shore excursion.",
    path: featuredTour.legacyPath,
  }),
  robots: { index: false, follow: true },
  alternates: { canonical: featuredTour.path },
};

export default function LegacyExcursionRedirectPage() {
  return (
    <main className="mx-auto max-w-xl px-4 py-20 text-center">
      <h1 className="mb-4 text-2xl font-bold text-gray-900">Page moved</h1>
      <p className="mb-6 text-gray-700">
        Our main Riviera tour is now the{" "}
        <strong>{featuredTour.fullName}</strong>.
      </p>
      <Link
        href={featuredTour.path}
        className="inline-block rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
      >
        View {featuredTour.cardName}
      </Link>
    </main>
  );
}
