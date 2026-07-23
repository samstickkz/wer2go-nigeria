"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Wallet,
  CalendarCheck,
  ShieldCheck,
  ArrowRight,
  QrCode,
  Smartphone,
  LucideIcon,
} from "lucide-react";
import { Reveal } from "./Reveal";

const DRIVER_URL = "https://driver.gower2.com";

type Perk = { Icon: LucideIcon; title: string; body: string };

const perks: Perk[] = [
  {
    Icon: Wallet,
    title: "10% commission",
    body: "Lowest in Nigeria. 90% stays in your account.",
  },
  {
    Icon: CalendarCheck,
    title: "Weekly payouts",
    body: "Settled every Tuesday — no chasing, no delays.",
  },
  {
    Icon: ShieldCheck,
    title: "NIN + BVN onboarding",
    body: "Full verification in one visit to a wer2 GO hub.",
  },
];

type Platform = "ios" | "android" | "desktop";

function usePlatform(): Platform | null {
  const [platform, setPlatform] = useState<Platform | null>(null);
  useEffect(() => {
    const ua = navigator.userAgent || "";
    if (/iPhone|iPad|iPod/i.test(ua)) setPlatform("ios");
    else if (/android/i.test(ua)) setPlatform("android");
    else setPlatform("desktop");
  }, []);
  return platform;
}

export default function DriveWithUs() {
  const platform = usePlatform();
  const isMobile = platform === "ios" || platform === "android";

  return (
    <section id="drive" className="relative overflow-hidden bg-charcoal text-white">
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute -bottom-12 -left-4 font-display font-extrabold text-white/[0.08] text-[200px] sm:text-[300px] lg:text-[360px] leading-none tracking-tighter"
      >
        DRIVE
      </span>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-18 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <Reveal className="lg:col-span-7">
            <p className="text-xs uppercase tracking-wider text-brand font-semibold">
              Drive with wer2 GO
            </p>
            <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-[1.04]">
              Drive your own hours. Keep more of every fare.
            </h2>
            <p className="mt-4 max-w-xl text-base sm:text-lg text-white/85 leading-relaxed">
              10% commission and weekly payouts, with earnings you can track
              from day one. Whether you drive in Surulere, Wuse or Sabon Gari —
              wer2 GO is built for you.
            </p>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {perks.map((p) => (
                <li
                  key={p.title}
                  className="rounded-2xl bg-white/12 backdrop-blur p-4 ring-1 ring-white/15"
                >
                  <p.Icon className="h-5 w-5 text-white" aria-hidden="true" />
                  <h3 className="mt-3 font-display font-semibold text-white text-sm">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-xs text-white/75 leading-relaxed">
                    {p.body}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={DRIVER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-charcoal hover:bg-brand-dark transition-colors"
              >
                Become a driver
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </motion.a>
            </div>

            <p className="mt-5 text-xs text-white/70 flex items-center gap-2">
              {platform === null ? (
                <>
                  <Smartphone className="h-3.5 w-3.5" aria-hidden="true" />
                  Apply in 5 minutes — works on iOS, Android and desktop.
                </>
              ) : isMobile ? (
                <>
                  <Smartphone className="h-3.5 w-3.5" aria-hidden="true" />
                  Tap to apply right now on your{" "}
                  {platform === "ios" ? "iPhone" : "Android"}.
                </>
              ) : (
                <>
                  <QrCode className="h-3.5 w-3.5" aria-hidden="true" />
                  Or scan the QR with your phone to apply on the go.
                </>
              )}
            </p>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.1}>
            <div className="relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl ring-1 ring-white/15">
                <Image
                  src="/brand/car-comfort.jpg"
                  alt="A wer2 GO driver finishing a shift"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />

                <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-3 py-1.5 text-[11px] uppercase tracking-wider text-white">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-highlight opacity-70" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-highlight" />
                  </span>
                  This week
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="rounded-2xl bg-white/95 backdrop-blur p-4 text-charcoal">
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-charcoal/55 font-semibold">
                          Adamu O. · 4.9★
                        </p>
                        <p className="mt-1 font-display font-bold text-2xl">
                          ₦187,400
                        </p>
                        <p className="text-xs text-charcoal/60">
                          earned this week · 47 rides
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] uppercase tracking-wider text-charcoal/55 font-semibold">
                          Paid
                        </p>
                        <p className="mt-1 font-display font-semibold text-sm">
                          Tue 9:14 AM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {!isMobile && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: 0.4, type: "spring", stiffness: 200, damping: 18 }}
                  className="hidden lg:flex absolute top-4 right-4 flex-col items-center rounded-2xl bg-white/95 backdrop-blur p-2.5 text-charcoal ring-1 ring-charcoal/10"
                >
                  <div className="h-16 w-16 rounded-lg bg-cream flex items-center justify-center">
                    <QrCode
                      className="h-12 w-12 text-charcoal"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mt-1.5 text-[9px] uppercase tracking-wider text-charcoal/55 font-semibold">
                    Scan to apply
                  </p>
                  <p className="text-[10px] font-display font-semibold text-charcoal">
                    driver.gower2.com
                  </p>
                </motion.div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
