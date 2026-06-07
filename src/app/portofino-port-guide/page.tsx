import type { Metadata } from "next";
import Link from "next/link";

import { legacyPortGuidePath, portGuidePath } from "@/lib/site-paths";
import { buildPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Redirecting to Portofino Cruise Port Guide",
    description:
      "The Portofino port guide has moved to our updated cruise port guide for tender passengers.",
    path: legacyPortGuidePath,
  }),
  robots: { index: false, follow: true },
  alternates: { canonical: portGuidePath },
};

export default function LegacyPortGuideRedirectPage() {
  return (
    <main className="mx-auto max-w-xl px-4 py-20 text-center">
      <h1 className="mb-4 text-2xl font-bold text-gray-900">Page moved</h1>
      <p className="mb-6 text-gray-700">
        Our Portofino cruise port guide has moved to a new URL with updated
        tender and excursion planning advice.
      </p>
      <Link
        href={portGuidePath}
        className="inline-block rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
      >
        View Portofino Cruise Port Guide
      </Link>
    </main>
  );
}
