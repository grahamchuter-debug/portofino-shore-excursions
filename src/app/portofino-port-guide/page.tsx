import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { JsonLd } from "@/components/json-ld";
import { featuredTour } from "@/lib/featured-tour";
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
  title: "Portofino Cruise Port Guide for Shore Excursions",
  description:
    "Portofino cruise port guide: tender arrival in the village harbour, how long to allow ashore, best shore excursions to Santa Margherita and Camogli, and return-to-ship planning.",
  path: "/portofino-port-guide",
  ogImage: siteImages.portofinoCruisePort,
  ogImageAlt: portofinoTenderPortAlt,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const relatedLinks = [
  { label: featuredTour.cardName, href: featuredTour.path },
  ...tenderLinks,
  ...coreGuideLinks.filter((l) => l.href !== "/portofino-port-guide"),
] as const;

const faqs = [
  {
    question: "Where do cruise passengers arrive in Portofino?",
    answer: `${portofinoTenderLanding} Allow 15 to 20 minutes each way for the tender boat, plus queuing time on busy port days.`,
  },
  {
    question: "How long should I allow to get ashore?",
    answer:
      "Plan on losing 30 to 40 minutes of your published port time to tender transfers in both directions. On days when multiple ships anchor in the Gulf, morning departure queues can add another 15 to 20 minutes.",
  },
  {
    question: "What is the best shore excursion from Portofino?",
    answer: `The ${featuredTour.fullName} covers Santa Margherita Ligure, Camogli, and Portofino village in one port day — ideal for passengers with seven or more hours ashore.`,
  },
  {
    question: "How early should I return to the tender pier?",
    answer:
      "Be at the Portofino harbour tender landing at least 45 minutes before all aboard. Return queues can stretch to 30 minutes when several ships share tender operations.",
  },
  {
    question: "Can I visit Santa Margherita and Camogli on my own?",
    answer:
      "Yes, but local buses are infrequent and timetables do not always align with cruise schedules. A small-group excursion with coordinated transport is the safer choice for return-to-ship timing.",
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
        title="Portofino Cruise Port Guide"
        lead="How tender arrivals work, where you step ashore, how much time you really have, and how to plan shore excursions to Santa Margherita, Camogli, and Portofino village."
        heroImage={pageMeta.ogImage}
        heroImageAlt={pageMeta.ogImageAlt}
        pagePath={pageMeta.path}
        pageDescription={pageMeta.description}
        relatedLinks={relatedLinks}
        faqs={faqs}
        ctaTitle="Book the small-group Riviera tour"
        ctaText="Send your cruise details and we will confirm availability for Santa Margherita, Camogli and Portofino in one port day."
        ctaHref={featuredTour.bookingPath}
        ctaLabel="Book now"
      >
        <section>
          <h2>Tender arrival: how cruise ships reach Portofino</h2>
          <p>{portofinoTenderExplainer}</p>
          <p>
            {portofinoTenderLanding}. Confirm your tender departure time on the
            ship&apos;s app the night before arrival. For step-by-step tender
            advice, read our{" "}
            <Link href="/portofino-tender-information">
              Portofino tender information
            </Link>{" "}
            guide.
          </p>
        </section>

        <section>
          <h2>Where passengers arrive and what to expect</h2>
          <p>
            Tender boats land in Portofino village, near the harbour and
            piazzetta. From the landing area you can walk to waterfront cafés,
            boutique streets, and the famous harbour within minutes. Restrooms
            and WiFi are available at nearby cafés and restaurants.
          </p>
          <p>
            Shore excursion operators meet passengers near the harbour. See our{" "}
            <Link href="/portofino-meeting-points">meeting points guide</Link>{" "}
            for where to find your guide after tendering ashore.
          </p>
        </section>

        <section>
          <h2>How long to allow to get ashore</h2>
          <p>
            Subtract tender time from your published port hours before planning
            activities. A six-hour call typically gives four usable hours
            ashore; an eight-hour call gives about six hours. Use our{" "}
            <Link href="/cruise-planner">cruise planner</Link> to calculate
            your real schedule.
          </p>
          <ul>
            <li>
              <strong>Tender each way:</strong> allow 15 to 20 minutes plus
              queuing
            </li>
            <li>
              <strong>Return buffer:</strong> be at the pier 45 minutes before
              all aboard
            </li>
            <li>
              <strong>Busy days:</strong> multiple ships in the Gulf mean longer
              tender queues
            </li>
          </ul>
        </section>

        <section>
          <h2>Best things to do from Portofino</h2>
          <p>
            Portofino village itself is compact and photogenic — ideal for a
            harbour stroll, coastal walk, or waterfront lunch. For a fuller
            Riviera experience, combine Portofino with nearby villages on a
            guided tour rather than relying on local buses.
          </p>
          <p>
            Our top recommendation is the{" "}
            <Link href={featuredTour.path}>{featuredTour.fullName}</Link>,
            which covers Santa Margherita Ligure, Camogli, and Portofino in one
            port day. For shorter calls, the{" "}
            <Link href="/excursions/portofino-coastal-walk">
              Portofino coastal walk
            </Link>{" "}
            is a compact alternative.
          </p>
        </section>

        <section>
          <h2>Why add Santa Margherita and Camogli</h2>
          <p>
            Santa Margherita Ligure offers an elegant promenade and relaxed
            harbour about 5 km along the coast — a rewarding contrast to
            Portofino&apos;s celebrity-resort atmosphere. Camogli, further
            along the Riviera, is a working fishing village with colourful
            harbourfront houses and authentic Ligurian life.
          </p>
          <p>
            Visiting all three independently from the tender pier means
            navigating infrequent buses on a tight schedule. The{" "}
            <Link href={featuredTour.path}>{featuredTour.cardName}</Link>{" "}
            handles transport and return timing. Compare destinations on our{" "}
            <Link href="/portofino-vs-santa-margherita">
              Portofino vs Santa Margherita
            </Link>{" "}
            and{" "}
            <Link href="/camogli-vs-portofino">Camogli vs Portofino</Link>{" "}
            guides.
          </p>
        </section>

        <section>
          <h2>Meeting points and shore excursion pickup</h2>
          <p>
            Small-group tours meet near the Portofino harbour tender landing.
            Arrive promptly after disembarking — guides cannot wait indefinitely
            when ship schedules are tight. Full meeting point details are on
            your booking confirmation.
          </p>
        </section>

        <section>
          <h2>Return-to-ship planning</h2>
          <p>
            The return tender is where most passengers feel time pressure. Be at
            the harbour landing 45 minutes before all aboard, not at all aboard
            time. If tenders are delayed, see{" "}
            <Link href="/what-if-my-tender-is-late">
              what to do if your tender is late
            </Link>
            .
          </p>
          <p>
            For a realistic port-day plan, see our{" "}
            <Link href="/one-day-in-portofino">one day in Portofino</Link>{" "}
            itinerary and check{" "}
            <Link href="/ship-schedules">ship schedules</Link> for your arrival
            month.
          </p>
        </section>
      </ContentPage>
    </>
  );
}
