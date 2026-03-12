import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { DM_Sans, Cabin } from "next/font/google";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { AccessibilityWidget } from "@/components/accessibility-widget";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-dm-sans" });
const cabin = Cabin({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-cabin" });

export const metadata: Metadata = {
  title: {
    default: "GOLD Project Management — Fractional Delivery Leadership",
    template: "%s | GOLD Project Management",
  },
  description: "Embedded delivery leadership for PE-backed scale-ups. Published pricing. Proven results. No dependency.",
  robots: "noindex, nofollow",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${dmSans.variable} ${cabin.variable}`}>
      <body>
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
