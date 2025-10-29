import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elysian Escapes | Bespoke Luxury Journeys",
  description:
    "Discover curated high-end travel experiences, exclusive offers, and bespoke itineraries from the world's most enchanting destinations.",
  keywords: [
    "luxury travel",
    "bespoke journeys",
    "five-star hotels",
    "exclusive vacations",
    "travel concierge",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${playfair.variable} bg-luxury-night text-luxury-ivory antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
