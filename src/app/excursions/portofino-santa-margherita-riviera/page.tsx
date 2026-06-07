import type { Metadata } from "next";

import { ExcursionDetailPage } from "@/components/excursion-detail-page";
import { portofinoSantaMargheritaExcursion } from "@/lib/excursions/portofino-excursions";
import { buildPageMetadata } from "@/lib/site-metadata";

const excursion = portofinoSantaMargheritaExcursion;

export const metadata: Metadata = buildPageMetadata({
  title: excursion.metaTitle,
  description: excursion.metaDescription,
  path: excursion.path,
  ogImage: excursion.heroImage,
  ogImageAlt: excursion.heroImageAlt,
});

export default function PortofinoSantaMargheritaPage() {
  return <ExcursionDetailPage excursion={excursion} />;
}
