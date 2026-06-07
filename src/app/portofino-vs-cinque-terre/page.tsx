import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { comparisonLinks, coreGuideLinks } from "@/lib/related-links";
import { siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Portofino vs Cinque Terre for Cruise Passengers",
  description:
    "Portofino vs Cinque Terre for cruise passengers: why Cinque Terre is not feasible on a Portofino port day, and what to do instead on the Italian Riviera.",
  path: "/portofino-vs-cinque-terre",
  ogImage: siteImages.cinqueTerre,
  ogImageAlt: "Cinque Terre",
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const relatedLinks = [
  ...comparisonLinks.filter((l) => l.href !== "/portofino-vs-cinque-terre"),
  ...coreGuideLinks,
] as const;

const faqs = [
  {
    question: "Can I visit Cinque Terre from a Portofino cruise port call?",
    answer:
      "Not realistically. Cinque Terre is approximately 50 km from Portofino. The train journey alone takes over an hour each way, leaving almost no time for village exploration before you must return for your tender.",
  },
  {
    question: "Why do cruise passengers confuse Portofino and Cinque Terre?",
    answer:
      "Both are iconic Ligurian destinations with colourful villages and coastal scenery. Cruise brochures often show both, but they are separate locations requiring separate port calls or full-day land trips.",
  },
  {
    question: "What is the best alternative to Cinque Terre on a Portofino port day?",
    answer:
      "Camogli offers colourful harbourfront houses and authentic fishing village atmosphere without the transport marathon. The Camogli and Portofino coast tour covers both in one manageable excursion.",
  },
  {
    question: "Which cruise ports serve Cinque Terre?",
    answer:
      "La Spezia and Livorno are the standard Cinque Terre cruise ports. If Cinque Terre is your priority, choose an itinerary calling at those ports rather than Portofino.",
  },
] as const;

export default function PortofinoVsCinqueTerrePage() {
  return (
    <ContentPage
      title="Portofino vs Cinque Terre"
      lead="Why Cinque Terre is not feasible on a Portofino port day — and what Riviera alternatives deliver similar magic without missing your ship."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      relatedLinks={relatedLinks}
      faqs={faqs}
    >
      <section>
        <h2>The key difference: distance and tender time</h2>
        <p>
          Portofino and Cinque Terre are both Ligurian coastal gems, but they
          are not neighbours. From Portofino, where you tender ashore,
          Cinque Terre is roughly 50 km away — a train journey of over an hour
          each way, plus village walks between the five towns.
        </p>
        <p>
          On a typical six to eight hour port call, subtract 40 minutes for
          tender transfers and you have at most six usable hours. Cinque Terre
          alone needs a full day. Attempting it from Portofino means spending
          your port day in transit.
        </p>
      </section>

      <section>
        <h2>What Portofino offers that Cinque Terre cannot</h2>
        <ul>
          <li>Immediate access from the tender landing — no long train rides</li>
          <li>Compact, photogenic village you can explore in half a day</li>
          <li>Santa Margherita Ligure and Camogli as bonus destinations</li>
          <li>Small-group excursions with reliable return timing</li>
        </ul>
      </section>

      <section>
        <h2>The Camogli alternative</h2>
        <p>
          If you want colourful harbourfront houses and village atmosphere
          without the Cinque Terre transport marathon,{" "}
          <Link href="/camogli-vs-portofino">Camogli</Link> is the answer. Our{" "}
          <Link href="/excursions/camogli-portofino-coast">
            Camogli & Portofino coast tour
          </Link>{" "}
          covers both villages in five to six hours — realistic on a standard
          port call.
        </p>
      </section>

      <section>
        <h2>Planning the right port for Cinque Terre</h2>
        <p>
          If Cinque Terre is on your bucket list, choose a cruise itinerary
          calling at La Spezia or Livorno. From Portofino, focus on what this
          tender port does best — Portofino village and nearby Riviera destinations such as Camogli. See our{" "}
          <Link href="/one-day-in-portofino">one day in Portofino</Link>{" "}
          itinerary for realistic planning.
        </p>
      </section>
    </ContentPage>
  );
}
