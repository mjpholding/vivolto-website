import type { MetadataRoute } from "next";

const SITE_URL = "https://www.vivolto.de";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/impressum`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/datenschutz`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/agb`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
