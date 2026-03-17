import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { DM_Sans, Cabin } from "next/font/google";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { AccessibilityWidget } from "@/components/accessibility-widget";
import { OrganizationSchema } from "@/components/schema-org";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-dm-sans" });
const cabin = Cabin({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-cabin" });

const siteUrl = "https://aaronoriginate.github.io/gold-pm-poc";

export const metadata: Metadata = {
  title: {
    default: "GOLD Project Management — Fractional Delivery Leadership",
    template: "%s | GOLD Project Management",
  },
  description: "Fractional delivery leadership and PMO support for PE-backed and Series A-C companies. We install delivery infrastructure, prove it works, and leave. Published pricing from £5,000.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    siteName: "Gold Project Management",
    title: "Gold Project Management — Fractional Delivery Leadership",
    description: "Fractional delivery leadership and PMO support for PE-backed and Series A-C companies. Clarity, control, and portfolio visibility without slowing you down.",
    url: siteUrl,
    images: [{ url: `${siteUrl}/images/unsplash/hero/hero-01-gold-geometric-shapes.jpg`, width: 1200, height: 630, alt: "Gold Project Management — Fractional Delivery Leadership" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gold Project Management — Fractional Delivery Leadership",
    description: "Fractional delivery leadership and PMO support for PE-backed and Series A-C companies.",
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${dmSans.variable} ${cabin.variable}`}>
      <body>
        <OrganizationSchema />
        <ThemeProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
          <AccessibilityWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
