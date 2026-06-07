import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { featuredTour } from "@/lib/featured-tour";
import { buildPageMetadata } from "@/lib/site-metadata";
import { comparisonLinks, coreGuideLinks } from "@/lib/related-links";
import { siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Is Portofino Worth Visiting on a Cruise?",
  description:
    "Is Portofino worth visiting for cruise passengers? Honest guide to tender logistics, what you can see in one day, and when a small-group excursion makes sense.",
  path: "/is-portofino-worth-visiting",
  ogImage: siteImages.portofinoCoast,
  ogImageAlt: "Portofino lighthouse on the Italian Riviera coast",
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const relatedLinks = [
  { label: "Best shore excursions", href: "/best-portofino-shore-excursions" },
  ...comparisonLinks,
  ...coreGuideLinks.filter((l) => l.href !== "/is-portofino-worth-visiting"),
] as const;

const faqs = [
  {
    question: "Is Portofino worth visiting on a cruise?",
    answer:
      "Yes, for most passengers — but manage expectations. You tender directly into Portofino village. The harbour is beautiful but the village is compact. A half-day is enough for most visitors.",
  },
  {
    question: "Is Portofino overrated for cruise passengers?",
    answer:
      "Portofino is genuinely stunning, but the celebrity-resort atmosphere and crowds can disappoint passengers expecting an undiscovered village. Camogli and Santa Margherita offer more authentic alternatives.",
  },
  {
    question: "When is Portofino NOT worth visiting?",
    answer:
      "If your port call is under five hours total, or if tender operations are delayed. In those cases, explore Portofino village on foot near the harbour instead of booking a longer excursion.",
  },
  {
    question: "What makes Portofino special for cruise passengers?",
    answer:
      "The combination of pastel harbourfront, celebrity history, coastal scenery, and proximity to Santa Margherita and Camogli makes this one of the Mediterranean's most photogenic tender ports.",
  },
] as const;

export default function IsPortofinoWorthVisitingPage() {
  return (
    <ContentPage
      title="Is Portofino Worth Visiting?"
      lead="An honest assessment for cruise passengers — the beauty, the logistics, the crowds, and when a small-group excursion is worth the investment."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      relatedLinks={relatedLinks}
      faqs={faqs}
    >
      <section>
        <h2>The short answer: yes, with planning</h2>
        <p>
          Portofino delivers one of the Mediterranean&apos;s most iconic
          harbour views. For cruise passengers willing to navigate tender
          logistics and accept that the village itself is compact, it is a
          memorable port day. The key is matching your expectations to your
          actual time ashore.
        </p>
      </section>

      <section>
        <h2>What makes it worth the tender hassle</h2>
        <ul>
          <li>The piazzetta and harbour are genuinely beautiful</li>
          <li>You tender directly into Portofino village — the harbour is right at the landing</li>
          <li>Santa Margherita Ligure is a rewarding nearby village on longer port days — not a separate cruise port</li>
          <li>The coastal scenery between villages is spectacular</li>
          <li>Small-group tours make the logistics manageable</li>
        </ul>
      </section>

      <section>
        <h2>What can disappoint cruise passengers</h2>
        <ul>
          <li>Portofino village is small and crowded on busy port days</li>
          <li>Independent transport is unreliable and time-consuming</li>
          <li>Cinque Terre is not reachable on a standard port call</li>
        </ul>
      </section>

      <section>
        <h2>When to book a small-group excursion</h2>
        <p>
          If you have seven or more usable hours ashore and want to see the
          Riviera without transport stress, the{" "}
          <Link href={featuredTour.path}>{featuredTour.cardName}</Link> tour
          is the best investment. Your guide handles tender-to-village logistics
          and return timing. Compare options on our{" "}
          <Link href="/best-portofino-shore-excursions">
            best excursions
          </Link>{" "}
          page.
        </p>
      </section>

      <section>
        <h2>Alternatives worth considering</h2>
        <p>
          If Portofino&apos;s crowds concern you, consider{" "}
          <Link href="/camogli-vs-portofino">Camogli</Link> for authentic
          village life, or stay in{" "}
          <Link href="/portofino-vs-santa-margherita">
            Santa Margherita Ligure
          </Link>{" "}
          on shorter port calls.
        </p>
      </section>
    </ContentPage>
  );
}
