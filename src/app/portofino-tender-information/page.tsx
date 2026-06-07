import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { featuredTour } from "@/lib/featured-tour";
import { featuredTourFacts } from "@/lib/featured-tour-facts";
import { buildPageMetadata } from "@/lib/site-metadata";
import { coreGuideLinks, tenderLinks } from "@/lib/related-links";
import { siteImages } from "@/lib/site-images";
import {
  portofinoTenderExplainer,
  portofinoTenderLanding,
  portofinoTenderPortAlt,
} from "@/lib/tender-port-copy";

const pageMeta = {
  title: "Portofino Tender Information for Cruise Passengers",
  description:
    "How cruise ship tender operations work at Portofino: ships anchor offshore and tender passengers into the village harbour, with transfer times, queuing, and return-to-ship advice.",
  path: "/portofino-tender-information",
  ogImage: siteImages.portofinoCruisePort,
  ogImageAlt: portofinoTenderPortAlt,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const relatedLinks = [
  ...tenderLinks.filter((l) => l.href !== "/portofino-tender-information"),
  ...coreGuideLinks.filter((l) => l.href !== "/portofino-tender-information"),
] as const;

const faqs = [
  {
    question: "Do cruise ships dock or tender at Portofino?",
    answer: portofinoTenderExplainer,
  },
  {
    question: "How long does the tender boat take?",
    answer:
      "The tender ride between ship and shore typically takes 10 to 15 minutes. Allow 15 to 20 minutes each way including boarding and disembarkation, plus queuing time on busy days.",
  },
  {
    question: "Where do tender boats land?",
    answer: `${portofinoTenderLanding}. Your cruise line will confirm the exact landing point on the morning of arrival.`,
  },
  {
    question: "How early should I queue for the return tender?",
    answer:
      "Be at the tender pier in Portofino 45 minutes before all aboard. On days when multiple ships anchor in the Tigullio Gulf, return queues can take 20 to 30 minutes.",
  },
  {
    question: "What happens if tender operations are delayed?",
    answer:
      "Weather, sea conditions, or high passenger volume can delay tenders. Contact your excursion operator immediately if you are ashore and your ship's schedule changes. See our guide on what to do if your tender is late.",
  },
] as const;

export default function PortofinoTenderInformationPage() {
  return (
    <ContentPage
      title="Portofino Tender Information"
      lead="How cruise ship tender operations work at this port — where you land in Portofino village, how long transfers take, and what to expect on port day."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      relatedLinks={relatedLinks}
      faqs={faqs}
    >
      <section>
        <h2>Why Portofino is always a tender port</h2>
        <p>{portofinoTenderExplainer}</p>
        <p>
          This is normal and well-established — but tender transfers add 30 to
          40 minutes to your port day compared with a docked port. Build that
          margin into your excursion planning.
        </p>
      </section>

      <section>
        <h2>The tender process step by step</h2>
        <ol>
          <li>
            <strong>Collect your tender ticket</strong> — most cruise lines
            require tickets for the first departures. Check your ship&apos;s app
            for the ticket distribution point and times.
          </li>
          <li>
            <strong>Queue at the gangway</strong> — early departures have the
            longest queues. If you have a booked excursion, aim for the first
            available tender after meeting your guide&apos;s start time.
          </li>
          <li>
            <strong>Ride the tender into Portofino</strong> — typically 10 to 15
            minutes from ship to shore, with views of the Riviera coastline and
            the colourful harbour as you approach.
          </li>
          <li>
            <strong>Disembark at the landing</strong> — you arrive in Portofino
            village, near the harbour. See our{" "}
            <Link href="/portofino-meeting-points">meeting points guide</Link>{" "}
            for where excursions meet.
          </li>
        </ol>
      </section>

      <section>
        <h2>Return tender: the critical timing</h2>
        <p>
          The return journey is where most cruise passengers feel stress.
          Multiple ships in the Gulf mean shared tender operations and longer
          queues. Be at the Portofino tender pier 45 minutes before all aboard
          — not at all aboard time.
        </p>
        <p>
          If your tender is running late, read{" "}
          <Link href="/what-if-my-tender-is-late">
            what to do if your tender is late
          </Link>{" "}
          for immediate steps.
        </p>
      </section>

      <section>
        <h2>How tender time affects excursion choice</h2>
        <p>
          Subtract 30 to 40 minutes from your published port time before
          choosing activities. Use our{" "}
          <Link href="/cruise-planner">cruise planner</Link> to see which
          excursions fit your actual schedule. On port calls under six hours,
          stay in Portofino village or take the compact{" "}
          <Link href="/excursions/portofino-coastal-walk">coastal walk</Link>.
          With five or more usable hours ashore, the{" "}
          <Link href={featuredTour.path}>{featuredTour.cardName}</Link> tour
          covers Santa Margherita, Camogli, and Portofino in{" "}
          {featuredTourFacts.durationLabel.toLowerCase()}.
        </p>
      </section>
    </ContentPage>
  );
}
