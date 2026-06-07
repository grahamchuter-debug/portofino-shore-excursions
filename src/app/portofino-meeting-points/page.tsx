import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { featuredTour } from "@/lib/featured-tour";
import { buildPageMetadata } from "@/lib/site-metadata";
import { coreGuideLinks, tenderLinks } from "@/lib/related-links";
import { siteImages } from "@/lib/site-images";
import {
  portofinoTenderExplainer,
  portofinoTenderLanding,
  portofinoTenderPortAlt,
} from "@/lib/tender-port-copy";

const pageMeta = {
  title: "Portofino Meeting Points for Cruise Shore Excursions",
  description:
    "Where to meet Portofino shore excursions after tendering ashore: Portofino village harbour meeting points, guide pickup locations, and what to do if you cannot find your group.",
  path: "/portofino-meeting-points",
  ogImage: siteImages.portofinoCruisePort,
  ogImageAlt: portofinoTenderPortAlt,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const relatedLinks = [
  ...tenderLinks.filter((l) => l.href !== "/portofino-meeting-points"),
  { label: "Shore excursions", href: "/portofino-shore-excursions" },
  ...coreGuideLinks.filter((l) => l.href !== "/portofino-meeting-points"),
] as const;

const faqs = [
  {
    question: "Where do Portofino shore excursions meet cruise passengers?",
    answer:
      "Most small-group tours meet passengers near the Portofino harbour and tender landing area, close to the piazzetta. Your booking confirmation includes the exact meeting point and guide contact details.",
  },
  {
    question: "How do I find my guide after tendering ashore?",
    answer:
      "After disembarking the tender in Portofino village, walk toward the harbour and piazzetta. Guides typically hold a sign with the tour company name or your booking reference. Allow a few minutes to reach the meeting point from the landing.",
  },
  {
    question: "What if my tender arrives after the meeting time?",
    answer:
      "Contact your guide immediately using the number on your confirmation. Small-group operators understand tender delays and may wait briefly, but cannot hold indefinitely when ship schedules are tight.",
  },
  {
    question: "Is the meeting point the same for all excursions?",
    answer:
      "Most operators use the same general area near the Portofino harbour, but exact locations vary. Always check your booking confirmation rather than assuming a previous tour's meeting point.",
  },
] as const;

export default function PortofinoMeetingPointsPage() {
  return (
    <ContentPage
      title="Portofino Meeting Points"
      lead="Where to meet your shore excursion guide after tendering ashore in Portofino village — and what to do if you are delayed."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      relatedLinks={relatedLinks}
      faqs={faqs}
    >
      <section>
        <h2>Where tenders land</h2>
        <p>{portofinoTenderExplainer}</p>
        <p>
          {portofinoTenderLanding}. Read our{" "}
          <Link href="/portofino-tender-information">tender information</Link>{" "}
          guide for the full transfer process before port day.
        </p>
      </section>

      <section>
        <h2>Standard excursion meeting points</h2>
        <p>
          Small-group shore excursion guides meet passengers near the Portofino
          harbour and piazzetta, close to where tender boats arrive. Common
          landmarks include:
        </p>
        <ul>
          <li>The piazzetta facing the harbour</li>
          <li>The harbourfront near the main marina</li>
          <li>Café fronts around the waterfront — guides often wait near identifiable landmarks</li>
        </ul>
        <p>
          Your booking confirmation provides the exact meeting point with a
          map reference or landmark description. Save your guide&apos;s phone
          number before leaving the ship.
        </p>
      </section>

      <section>
        <h2>Meeting points by excursion type</h2>
        <ul>
          <li>
            <strong>{featuredTour.cardName}:</strong> Portofino
            harbour, near tender landing — transport to Santa Margherita and
            Camogli included
          </li>
          <li>
            <strong>Camogli & Portofino Coast:</strong> Portofino harbour —
            transport to Camogli and return included
          </li>
          <li>
            <strong>Portofino Coastal Walk:</strong> Meet near the harbour, then
            walk the headland trail with your guide
          </li>
        </ul>
        <p>
          See individual tour pages for full details:{" "}
          <Link href={featuredTour.path}>
            Small group Riviera tour
          </Link>
          ,{" "}
          <Link href="/excursions/camogli-portofino-coast">Camogli tour</Link>
          ,{" "}
          <Link href="/excursions/portofino-coastal-walk">coastal walk</Link>.
        </p>
      </section>

      <section>
        <h2>If you cannot find your guide</h2>
        <ol>
          <li>Call the number on your booking confirmation immediately</li>
          <li>Stay near the harbour and piazzetta — do not wander far from the village centre</li>
          <li>Check whether your tender was delayed — see{" "}
            <Link href="/what-if-my-tender-is-late">what if my tender is late</Link>
          </li>
          <li>Note your ship&apos;s all aboard time and plan accordingly</li>
        </ol>
      </section>
    </ContentPage>
  );
}
