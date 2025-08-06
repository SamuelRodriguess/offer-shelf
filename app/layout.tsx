import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from '@vercel/speed-insights/next';

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Offer Shelf",
  description: "Offer Shelf app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={montserrat.className}>
      <body>{children}</body>
        <SpeedInsights />
    </html>
  );
}
