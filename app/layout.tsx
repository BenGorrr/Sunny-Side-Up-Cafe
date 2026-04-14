import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sunnysideupcafe.my"),
  title: {
    default: "Sunny Side Up Cafe | Brunch & Coffee in Brickfields, Kuala Lumpur",
    template: "%s | Sunny Side Up Cafe",
  },
  description: "Sunny Side Up Cafe in Brickfields, Kuala Lumpur serves brunch, coffee, desserts, and casual reservations via WhatsApp.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Sunny Side Up Cafe",
    title: "Sunny Side Up Cafe | Brunch & Coffee in Brickfields, Kuala Lumpur",
    description: "Sunny Side Up Cafe in Brickfields, Kuala Lumpur serves brunch, coffee, desserts, and casual reservations via WhatsApp.",
    locale: "en_MY",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunny Side Up Cafe | Brunch & Coffee in Brickfields, Kuala Lumpur",
    description: "Sunny Side Up Cafe in Brickfields, Kuala Lumpur serves brunch, coffee, desserts, and casual reservations via WhatsApp.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${manrope.variable} bg-cream text-espresso antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
