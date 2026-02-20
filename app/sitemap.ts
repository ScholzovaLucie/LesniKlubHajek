import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.lesniklubhajek.cz";
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: `${baseUrl}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/o-nas`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/lide`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/cenik`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/fotogalerie`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/kontakt`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/aktuality`, lastModified, changeFrequency: "weekly", priority: 0.8 },
  ];
}
