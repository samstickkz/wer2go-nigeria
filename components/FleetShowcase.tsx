"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const tiles = [
  { src: "/brand/hero-car.png", alt: "Standard" },
  { src: "/brand/car-comfort.jpg", alt: "Comfort" },
  { src: "/brand/car-xl.jpg", alt: "wer2 XL" },
  { src: "/brand/car-premium.jpg", alt: "Premium" },
];

export default function FleetShowcase() {
  return (
    <section className="bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-16">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-wider text-brand font-semibold">
              The fleet
            </p>
            <h2 className="mt-3 font-display font-bold text-charcoal text-3xl sm:text-4xl lg:text-5xl">
              Built for every kind of ride.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-charcoal/65 leading-relaxed">
              From a quick keke replacement across town to a full-comfort
              airport drop — wer2 GO scales with the trip.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className="mt-8 font-display font-extrabold text-center leading-[0.85] tracking-tighter select-none"
            style={{
              backgroundImage:
                "linear-gradient(110deg, #0F2238 0%, #1A3454 35%, #6ACEEA 70%, #0F2238 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              fontSize: "clamp(72px, 14vw, 180px)",
            }}
          >
            WER2 GO FLEET
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {tiles.map((t, i) => (
            <Reveal key={t.src} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 220, damping: 22 }}
                className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white ring-1 ring-charcoal/[0.06]"
              >
                <Image
                  src={t.src}
                  alt={t.alt}
                  fill
                  sizes="(min-width: 768px) 22vw, 45vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-teal-deep/85 via-teal-deep/30 to-transparent p-3">
                  <p className="text-white text-xs font-medium">{t.alt}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
