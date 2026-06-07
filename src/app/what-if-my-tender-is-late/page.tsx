import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { coreGuideLinks, tenderLinks } from "@/lib/related-links";
import { portofinoCruisePortAlt, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "What If My Tender Is Late? Portofino Cruise Passenger Guide",
  description:
    "What to do if your tender is late at Portofino: missed excursions, contacting your guide, return-to-ship priorities, and contingency planning for cruise passengers.",
  path: "/what-if-my-tender-is-late",
  ogImage: siteImages.portofinoCruisePort,
  ogImageAlt: portofinoCruisePortAlt,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const relatedLinks = [
  ...tenderLinks.filter((l) => l.href !== "/what-if-my-tender-is-late"),
  ...coreGuideLinks,
] as const;

const faqs = [
  {
    question: "What causes tender delays at Portofino?",
    answer:
      "Sea conditions, high passenger volume when multiple ships anchor in the Gulf, tender boat maintenance, and staggered departure schedules all cause delays. Delays of 20 to 45 minutes are not uncommon on busy days.",
  },
  {
    question: "Will my shore excursion wait if my tender is late?",
    answer:
      "Small-group operators may wait briefly for delayed passengers, but cannot hold indefinitely. Contact your guide immediately by phone if you know your tender is delayed.",
  },
  {
    question: "Should I skip my excursion if the tender is very late?",
    answer:
      "If the delay eats into more than half your excursion time, consider exploring Portofino village independently instead. Contact your operator about cancellation or partial refund policies.",
  },
  {
    question: "What if the return tender queue is long?",
    answer:
      "Join the queue immediately — do not wait until all aboard time. If the queue is not moving, alert ship staff at the pier or contact the ship directly. This is separate from arrival delays but equally critical.",
  },
] as const;

export default function WhatIfMyTenderIsLatePage() {
  return (
    <ContentPage
      title="What If My Tender Is Late?"
      lead="Practical steps for cruise passengers when tender operations delay your arrival or return — how to protect your excursion and your ship."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      relatedLinks={relatedLinks}
      faqs={faqs}
    >
      <section>
        <h2>Tender delays are common — plan for them</h2>
        <p>
          At Portofino, tender delays are a normal part of port day — not an
          exception. When two or three ships anchor in the Tigullio Gulf
          simultaneously, hundreds of passengers compete for the same tender
          boats. Build delay contingency into your planning from the start.
        </p>
      </section>

      <section>
        <h2>If your arrival tender is delayed</h2>
        <ol>
          <li>
            <strong>Contact your excursion guide immediately</strong> — use the
            phone number on your booking confirmation
          </li>
          <li>
            <strong>Do not leave the tender queue</strong> — you cannot control
            the delay, but you can control whether you board the next available
            boat
          </li>
          <li>
            <strong>Assess whether the excursion still makes sense</strong> — if
            you have lost more than an hour, consider exploring Portofino village
            on foot near the harbour instead
          </li>
          <li>
            <strong>Check your all aboard time</strong> — a late arrival
            reduces your margin for the return tender too
          </li>
        </ol>
      </section>

      <section>
        <h2>If you miss your excursion entirely</h2>
        <p>
          Portofino village is worth exploring independently. Walk the piazzetta,
          visit the harbour, and enjoy a waterfront lunch. You can still reach
          Santa Margherita or Camogli on a guided tour if time allows — but
          check your schedule carefully. See our{" "}
          <Link href="/one-day-in-portofino">one day in Portofino</Link> guide
          for backup plans.
        </p>
      </section>

      <section>
        <h2>If the return tender queue is long</h2>
        <p>
          This is the most critical scenario. Be at the pier 45 minutes before
          all aboard — not when all aboard starts. If the queue is not moving:
        </p>
        <ul>
          <li>Stay in the queue — leaving and rejoining rarely helps</li>
          <li>Alert pier staff or security if all aboard time is approaching</li>
          <li>Contact the ship if you believe you will miss all aboard</li>
          <li>Keep your passport and cabin key accessible</li>
        </ul>
      </section>

      <section>
        <h2>How to reduce tender delay risk</h2>
        <ul>
          <li>Take an early tender — first boats have shorter queues</li>
          <li>Book excursions with flexible meeting times where possible</li>
          <li>Choose compact tours on days when multiple ships are scheduled</li>
          <li>Use our{" "}
            <Link href="/cruise-planner">cruise planner</Link> to avoid
            over-scheduling short port calls
          </li>
        </ul>
      </section>
    </ContentPage>
  );
}
