import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SiteProvider } from "@/components/site-provider";
import { SiteShell } from "@/components/site-shell";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadataBase = new URL("https://musaedi.app");

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "Musaedi | Premium medical app for modern care",
    template: "%s | Musaedi",
  },
  description:
    "Musaedi is a premium medical app experience for dosage guidance, drug interaction awareness, calculators, and trusted clinical support.",
  keywords: [
    "medical app",
    "drug interaction checker",
    "BMI calculator",
    "IV fluid calculator",
    "Musaedi",
    "Karar Medical Apps",
  ],
  authors: [{ name: "Karar Medical Apps" }],
  openGraph: {
    title: "Musaedi | Premium medical app for modern care",
    description:
      "Modern medical intelligence for clinicians, pharmacists, and healthcare teams.",
    url: metadataBase,
    siteName: "Musaedi",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Musaedi premium medical app",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Musaedi | Premium medical app for modern care",
    description:
      "Modern medical intelligence for clinicians, pharmacists, and healthcare teams.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: metadataBase,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || "",
  },
  other: process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { "google-site-verification": process.env.NEXT_PUBLIC_GSC_VERIFICATION }
    : {},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--background)] text-[var(--foreground)]">
        <SiteProvider>
          <SiteShell>{children}</SiteShell>
        </SiteProvider>

        <SpeedInsights />
        <GoogleAnalytics gaId="G-T0R65JTWOY" />
      </body>
    </html>
  );
}