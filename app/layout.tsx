import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const interBody = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const interDisplay = Inter({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "wer2 GO — Drivers keep more. Riders stay safer.",
  description:
    "10% commission for drivers — the lowest in Nigeria. Verified drivers, in-app SOS and no surge gouging for riders. Now live in Uyo, Port Harcourt, Abuja and Kano.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interBody.variable} ${interDisplay.variable} font-sans bg-white text-charcoal antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
