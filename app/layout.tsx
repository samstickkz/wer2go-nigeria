import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const interBody = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "wer2 GO — Drivers keep more. Riders stay safer.",
  description:
    "10% commission for drivers — the lowest in Nigeria. Verified drivers, in-app SOS and no surge gouging for riders. Now live across Nigeria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interBody.variable} ${display.variable} font-sans bg-white text-charcoal antialiased`}
      >
        {children}
        {/* Replio AI support widget — "wer2 GO" tenant. Replies 24/7 in the
            visitor's own language (English, Pidgin, Yoruba, Igbo, Hausa). */}
        <Script
          src="https://replio.live/widget.js"
          data-replio="j5Kgypem3NXbRZJc"
          data-country="NG"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
