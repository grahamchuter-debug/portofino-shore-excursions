import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { comparisonLinks, coreGuideLinks } from "@/lib/related-links";
import { siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Camogli vs Portofino for Cruise Passengers",
  description:
    "Camogli vs Portofino for cruise passengers: authentic fishing village vs celebrity resort, and which to choose on a Portofino port day.",
  path: "/camogli-vs-portofino",
  ogImage: siteImages.camogli,
  ogImageAlt: "Camogli",
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const relatedLinks = [
  ...comparisonLinks.filter((l) => l.href !== "/camogli-vs-portofino"),
  ...coreGuideLinks,
] as const;

const faqs = [
  {
    question: "Is Camogli better than Portofino for cruise passengers?",
    answer:
      "It depends on what you want. Portofino is the iconic postcard; Camogli offers authentic fishing village life with fewer crowds. Many passengers prefer Camogli once they have seen both.",
  },
  {
    question: "How far is Camogli from the tender landing?",
    answer:
      "Camogli is approximately 15 km from Portofino along the coast — about 30 minutes by road. It is not walkable from the Portofino harbour.",
  },
  {
    question: "Can I visit Camogli and Portofino in one port day?",
    answer:
      "Yes, on port calls of eight hours or more. The Camogli and Portofino coast tour covers both villages in five to six hours with a local guide.",
  },
  {
    question: "Which is less crowded on port days?",
    answer:
      "Camogli is significantly less crowded than Portofino, which attracts celebrity tourism and cruise excursion groups. Camogli retains a working harbour and local atmosphere.",
  },
] as const;

export default function CamogliVsPortofinoPage() {
  return (
    <ContentPage
      title="Camogli vs Portofino"
      lead="Authentic fishing village or celebrity resort? How to choose between Camogli and Portofino on your Riviera port day."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      relatedLinks={relatedLinks}
      faqs={faqs}
    >
      <section>
        <h2>Two villages, two very different experiences</h2>
        <p>
          Both Camogli and Portofino sit on the Tigullio Gulf, yet they feel
          like different worlds. Portofino is a compact celebrity resort with
          designer boutiques and yacht-filled harbour. Camogli is a working
          fishing village where trattorias serve the morning catch and
          colourful houses line a genuine working waterfront.
        </p>
      </section>

      <section>
        <h2>Portofino: glamour and the famous piazzetta</h2>
        <ul>
          <li>World-famous harbour and piazzetta</li>
          <li>Upscale shopping and celebrity history</li>
          <li>Very compact — 30 minutes to walk the village</li>
          <li>Crowded when multiple cruise ships are in the Gulf</li>
          <li>Best for: first-time visitors wanting the iconic photo</li>
        </ul>
      </section>

      <section>
        <h2>Camogli: authentic Ligurian life</h2>
        <ul>
          <li>Colourful harbourfront houses and working fishing boats</li>
          <li>Waterfront trattorias with local seafood</li>
          <li>Less crowded, more relaxed pace</li>
          <li>Larger than Portofino — more to explore on foot</li>
          <li>Best for: passengers who want depth beyond the postcard</li>
        </ul>
      </section>

      <section>
        <h2>Our recommendation</h2>
        <p>
          First visit with six or more hours: do both on the{" "}
          <Link href="/excursions/camogli-portofino-coast">
            Camogli & Portofino coast tour
          </Link>
          . Returning visitors or those who dislike crowds: prioritise Camogli.
          Short port call: Portofino village only via the{" "}
          <Link href="/excursions/portofino-coastal-walk">coastal walk</Link>.
        </p>
      </section>
    </ContentPage>
  );
}
