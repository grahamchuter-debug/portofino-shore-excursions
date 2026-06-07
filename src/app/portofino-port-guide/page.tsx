import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { JsonLd } from "@/components/json-ld";
import { buildPageMetadata } from "@/lib/site-metadata";
import { buildTouristAttractionSchema } from "@/lib/site-schema";
import { coreGuideLinks, tenderLinks } from "@/lib/related-links";
import { siteImages } from "@/lib/site-images";
import {
  portofinoTenderExplainer,
  portofinoTenderLanding,
  portofinoTenderPortAlt,
} from "@/lib/tender-port-copy";

const pageMeta = {
  title: "Portofino Cruise Port Guide",
  description:
    "Portofino cruise port guide for passengers: tender operations into the village harbour, walking distances, facilities, and tips to return before all aboard.",
  path: "/portofino-port-guide",
  ogImage: siteImages.portofinoCruisePort,
  ogImageAlt: portofinoTenderPortAlt,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const relatedLinks = [
  ...tenderLinks,
  ...coreGuideLinks.filter((l) => l.href !== "/portofino-port-guide"),
] as const;

const faqs = [
  {
    question: "Where do cruise ships dock for Portofino?",
    answer: portofinoTenderExplainer,
  },
  {
    question: "How long does the tender transfer take?",
    answer:
      "Allow 15 to 20 minutes each way for the tender boat between your ship and Portofino village, plus queuing time on busy days. Build this into your port day planning.",
  },
  {
    question: "Are there restrooms and WiFi near the tender landing?",
    answer:
      "Yes. Portofino village has cafés, restaurants, and public facilities near the harbour and piazzetta, a short walk from the tender landing area.",
  },
  {
    question: "How early should cruise passengers return to the tender pier?",
    answer:
      "Be at the tender pier in Portofino at least 45 minutes before all aboard. Return queues can stretch to 30 minutes when multiple ships anchor in the Gulf on the same day.",
  },
] as const;

export default function PortofinoPortGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          buildTouristAttractionSchema({
            name: "Portofino Cruise Port (Tender Landing)",
            description:
              "Cruise passengers visiting Portofino anchor offshore and tender ashore into the village harbour on the Italian Riviera.",
          }),
        ]}
      />
      <ContentPage
        title="Portofino Port Guide for Cruise Passengers"
        lead="Everything you need to navigate the Portofino tender port: landing in the village harbour, what to see on foot, nearby Riviera destinations, and how to reach shore excursions without losing precious port time."
        heroImage={pageMeta.ogImage}
        heroImageAlt={pageMeta.ogImageAlt}
        pagePath={pageMeta.path}
        pageDescription={pageMeta.description}
        relatedLinks={relatedLinks}
        faqs={faqs}
      >
        <section>
          <h2>Where cruise ships anchor for Portofino</h2>
          <p>{portofinoTenderExplainer}</p>
          <p>
            {portofinoTenderLanding}. Confirm your tender departure time on the
            ship&apos;s app the night before arrival. Read our{" "}
            <Link href="/portofino-tender-information">
              tender information guide
            </Link>{" "}
            for a full explanation of how tender operations work at this port.
          </p>
        </section>

        <section>
          <h2>Exploring Portofino from the tender landing</h2>
          <p>
            Once ashore, Portofino village is compact and walkable. The famous
            piazzetta, harbourfront cafés, and boutique streets are all within
            easy reach of the tender landing. For a longer day, small-group
            excursions can take you along the coast to Santa Margherita Ligure
            or Camogli with coordinated transport.
          </p>
          <p>
            This is why many cruise passengers choose a{" "}
            <Link href="/portofino-shore-excursions">small-group excursion</Link>{" "}
            when they want to combine multiple Riviera villages in one port day.
            Your guide handles the logistics while you enjoy the scenery.
          </p>
        </section>

        <section>
          <h2>Nearby: Santa Margherita Ligure and Camogli</h2>
          <p>
            Santa Margherita Ligure sits approximately 5 km along the coast from
            Portofino, with its own elegant promenade and relaxed atmosphere.
            Camogli is further along the Riviera and suits longer port calls.
            See our{" "}
            <Link href="/portofino-vs-santa-margherita">comparison guide</Link>{" "}
            and{" "}
            <Link href="/camogli-vs-portofino">Camogli vs Portofino guide</Link>{" "}
            if you are choosing between destinations.
          </p>
        </section>

        <section>
          <h2>Meeting shore excursions at the port</h2>
          <p>
            Small-group tour operators meet passengers near the Portofino harbour
            and tender landing area. Exact meeting points vary by operator — see
            our dedicated{" "}
            <Link href="/portofino-meeting-points">meeting points guide</Link>{" "}
            for details. Arrive at the meeting point promptly after tendering
            ashore; your guide cannot wait indefinitely when ship schedules are
            tight.
          </p>
        </section>

        <section>
          <h2>How much can you see in one port day?</h2>
          <p>
            Realistically, a six-hour port call gives you about four hours of
            usable time once tender transfers are counted. That is enough for
            Portofino village and a coastal walk, or a combined Riviera tour
            taking in Santa Margherita and Camogli. Cinque Terre is not
            feasible on a standard port call from here. See our{" "}
            <Link href="/one-day-in-portofino">one day in Portofino</Link>{" "}
            itinerary for realistic planning.
          </p>
        </section>
      </ContentPage>
    </>
  );
}
