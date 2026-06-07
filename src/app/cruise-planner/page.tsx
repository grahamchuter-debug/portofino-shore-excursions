import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { CruisePortDayPlanner } from "@/components/cruise-port-day-planner";
import { buildPageMetadata } from "@/lib/site-metadata";
import { coreGuideLinks, excursionLinks } from "@/lib/related-links";
import { siteImages } from "@/lib/site-images";

const cruisePlannerHeroAlt = "Portofino harbour waterfront";

const pageMeta = {
  title: "Portofino Cruise Planner for Shore Excursions",
  description:
    "Interactive Portofino cruise planner: match shore excursions to your tender port times, calculate return-to-ship margins, and plan your Italian Riviera port day.",
  path: "/cruise-planner",
  ogImage: siteImages.portofinoPier,
  ogImageAlt: cruisePlannerHeroAlt,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const relatedLinks = [
  ...excursionLinks.map((l) => ({ label: l.label, href: l.href })),
  ...coreGuideLinks.filter((l) => l.href !== "/cruise-planner"),
] as const;

const faqs = [
  {
    question: "How does the Portofino cruise planner work?",
    answer:
      "Enter your ship's arrival and departure times. The planner calculates your actual hours in port, recommends suitable excursions, and shows safe return times accounting for tender transfers.",
  },
  {
    question: "Should I use published port times or all aboard time?",
    answer:
      "Use your ship's published arrival and departure for the planner. Then treat the recommended return time (45 minutes before departure) as your personal deadline for reaching the tender pier.",
  },
  {
    question: "Does the planner account for tender transfer time?",
    answer:
      "The planner's recommendations assume you subtract tender transfer time mentally. On port calls under five hours, it recommends staying close to the tender landing rather than distant excursions.",
  },
  {
    question: "What confidence score should I aim for?",
    answer:
      "A score of 9 or 10 means your port call comfortably fits multiple excursions. Scores below 6 mean you should choose one compact activity and stay near the tender pier.",
  },
] as const;

export default function CruisePlannerPage() {
  return (
    <ContentPage
      title="Portofino Cruise Planner"
      lead="Enter your ship's port times and see which shore excursions fit your schedule — with return-to-ship confidence scoring and tender-aware recommendations."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      relatedLinks={relatedLinks}
      faqs={faqs}
      ctaTitle="Ready to book your Portofino excursion?"
      ctaText="Use your planner results to choose the right small-group tour, then enquire to secure your place."
      ctaHref="/portofino-shore-excursions"
    >
      <section>
        <h2>Plan around your real port time</h2>
        <p>
          Tender passengers lose 30 to 40 minutes to boat transfers. This
          planner helps you see what is realistically achievable before you
          book. For tender logistics, read our{" "}
          <Link href="/portofino-tender-information">tender information</Link>{" "}
          guide first.
        </p>
      </section>

      <CruisePortDayPlanner />

      <section>
        <h2>After planning: next steps</h2>
        <ul>
          <li>
            Compare recommended excursions on our{" "}
            <Link href="/best-portofino-shore-excursions">
              best shore excursions
            </Link>{" "}
            page
          </li>
          <li>
            Confirm your{" "}
            <Link href="/portofino-meeting-points">meeting point</Link> after
            booking
          </li>
          <li>
            Read{" "}
            <Link href="/what-if-my-tender-is-late">
              what to do if your tender is late
            </Link>
          </li>
          <li>
            Review our{" "}
            <Link href="/one-day-in-portofino">one day in Portofino</Link>{" "}
            itinerary for sample day plans
          </li>
        </ul>
      </section>
    </ContentPage>
  );
}
