import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://musaedi.app";

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/features`, lastModified: new Date() },
    { url: `${baseUrl}/medical-calculators`, lastModified: new Date() },
    { url: `${baseUrl}/drug-interaction`, lastModified: new Date() },
    { url: `${baseUrl}/drug-interaction-checker`, lastModified: new Date() },
    { url: `${baseUrl}/drug-information`, lastModified: new Date() },
    { url: `${baseUrl}/bmi-bmr`, lastModified: new Date() },
    { url: `${baseUrl}/iv-fluid-calculator`, lastModified: new Date() },
    { url: `${baseUrl}/emergency-drugs`, lastModified: new Date() },
    { url: `${baseUrl}/download`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    { url: `${baseUrl}/faq`, lastModified: new Date() },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date() },
    { url: `${baseUrl}/terms-of-service`, lastModified: new Date() },
  ];
}
