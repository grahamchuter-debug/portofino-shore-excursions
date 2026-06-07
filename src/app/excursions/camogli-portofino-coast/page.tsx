import type { Metadata } from "next";

import { ExcursionDetailPage } from "@/components/excursion-detail-page";
import { camogliPortofinoCoastExcursion } from "@/lib/excursions/portofino-excursions";
import { buildPageMetadata } from "@/lib/site-metadata";

const excursion = camogliPortofinoCoastExcursion;

export const metadata: Metadata = buildPageMetadata({
  title: excursion.metaTitle,
  description: excursion.metaDescription,
  path: excursion.path,
  ogImage: excursion.heroImage,
  ogImageAlt: excursion.heroImageAlt,
});

export default function CamogliPortofinoCoastPage() {
  return <ExcursionDetailPage excursion={excursion} />;
}
