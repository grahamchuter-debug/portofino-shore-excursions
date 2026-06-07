import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { featuredTour } from "@/lib/featured-tour";
import { buildPageMetadata } from "@/lib/site-metadata";
import { comparisonLinks, coreGuideLinks } from "@/lib/related-links";
import { siteImages } from "@/lib/site-images";
import { portofinoTenderExplainer } from "@/lib/tender-port-copy";

const pageMeta = {
  title: "Portofino vs Santa Margherita Ligure for Cruise Passengers",
  description:
    "Portofino vs Santa Margherita Ligure: what each Riviera town offers cruise passengers tendering into Portofino, and how to choose on a short port day.",
  path: "/portofino-vs-santa-margherita",
  ogImage: siteImages.santaMargherita,
  ogImageAlt: "Santa Margherita Ligure waterfront",
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const relatedLinks = [
  ...comparisonLinks.filter((l) => l.href !== "/portofino-vs-santa-margherita"),
  ...coreGuideLinks,
] as const;

const faqs = [
  {
    question: "Do cruise ships tender into Portofino or Santa Margherita?",
    answer: portofinoTenderExplainer,
  },
  {
    question: "Is Santa Margherita worth visiting on its own?",
    answer:
      "Yes. Santa Margherita has an elegant promenade, working harbour, and relaxed atmosphere about 5 km along the coast from Portofino. It is a rewarding add-on on longer port calls.",
  },
  {
    question: "Can I visit both in one port day?",
      answer: `Yes, on port calls of seven hours or more. The ${featuredTour.fullName} covers Santa Margherita, Camogli, and Portofino with coordinated transport from the Portofino harbour.`,
  },
  {
    question: "Which is better for a first visit?",
    answer:
      "Start in Portofino, where you tender ashore — the iconic piazzetta and harbour are right at the landing. Add Santa Margherita if you have time for a second village on the same port day.",
  },
] as const;

export default function PortofinoVsSantaMargheritaPage() {
  return (
    <ContentPage
      title="Portofino vs Santa Margherita Ligure"
      lead="Two Riviera towns, one port day — what each offers when you tender into Portofino and how to choose when your time is limited."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      relatedLinks={relatedLinks}
      faqs={faqs}
    >
      <section>
        <h2>Two towns, one port call</h2>
        <p>
          Cruise itineraries list Portofino, and that is where you tender
          ashore — into the village harbour itself. Santa Margherita Ligure is a
          separate town approximately 5 km along the coast, often combined with
          Portofino on longer port days. Many passengers explore Portofino
          first, then add Santa Margherita if time allows.
        </p>
      </section>

      <section>
        <h2>Portofino: where you tender ashore</h2>
        <ul>
          <li>Iconic piazzetta and yacht-filled harbour at the tender landing</li>
          <li>Celebrity resort atmosphere — designer boutiques and upscale cafés</li>
          <li>Compact — you can walk the village in 30 minutes</li>
          <li>Crowded on busy port days</li>
          <li>Coastal walks and Castello Brown viewpoints nearby</li>
        </ul>
      </section>

      <section>
        <h2>Santa Margherita Ligure: the nearby Riviera town</h2>
        <ul>
          <li>Elegant seafront promenade and working harbour</li>
          <li>More relaxed, less crowded than Portofino</li>
          <li>About 5 km along the coast — reach by excursion transport or local bus</li>
          <li>Good restaurants and cafés along the waterfront</li>
          <li>Gateway to Camogli and wider Tigullio Gulf excursions</li>
        </ul>
      </section>

      <section>
        <h2>How to choose on a short port day</h2>
        <p>
          Under five usable hours ashore: focus on Portofino village. Walk the
          piazzetta, explore the harbour, and enjoy a waterfront lunch without
          needing extra transport.
        </p>
        <p>
          Seven or more hours: combine all three on the{" "}
          <Link href={featuredTour.path}>{featuredTour.cardName}</Link> tour.
          Your guide handles transport and return timing.
        </p>
      </section>
    </ContentPage>
  );
}
