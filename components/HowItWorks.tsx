"use client";

import { MapPin, Clock4, Car, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

type Step = {
  Icon: LucideIcon;
  title: string;
  body: string;
  accent?: boolean;
};

const steps: Step[] = [
  {
    Icon: MapPin,
    title: "Drop your pin",
    body: "Open the app and pick a pickup spot — works on small streets in Surulere, Bompai or Asokoro alike.",
  },
  {
    Icon: Clock4,
    title: "See the locked fare",
    body: "Same price at 8 AM or 11 PM. No peak-hour surge, no haggling, no guesswork.",
    accent: true,
  },
  {
    Icon: Car,
    title: "Driver pulls up",
    body: "Verified through NIN and BVN. You see the driver, plate and rating before they arrive.",
  },
];

/**
 * Grid icon centres land at ~16%, 50%, 84% of the row width
 * (3 equal columns, 80px icon centred in each).
 * Connector 1 fills the gap from ~19% → ~47%, connector 2 from ~53% → ~81%.
 */
function StepConnectors() {
  return (
    <>
      <svg
        className="hidden md:block absolute top-9 left-0 w-full h-14 pointer-events-none"
        viewBox="0 0 100 14"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.path
          d="M 19 7 C 28 0, 38 14, 47 7"
          fill="none"
          stroke="#0F1B2E"
          strokeOpacity="0.35"
          strokeWidth="1.5"
          strokeDasharray="5 7"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        />
        <motion.path
          d="M 53 7 C 62 14, 72 0, 81 7"
          fill="none"
          stroke="#0F1B2E"
          strokeOpacity="0.35"
          strokeWidth="1.5"
          strokeDasharray="5 7"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
        />
      </svg>

      <div className="hidden md:block absolute top-9 left-0 w-full h-14 pointer-events-none">
        <motion.div
          className="absolute h-3 w-3 rounded-full bg-brand"
          style={{
            top: "50%",
            marginTop: "-6px",
            marginLeft: "-6px",
            boxShadow: "0 0 0 5px rgba(106,206,234,0.30)",
          }}
          initial={{ left: "19%", y: 0, opacity: 0 }}
          animate={{
            left: ["19%", "23%", "43%", "47%"],
            y: [0, -10, -10, 0],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 1.6,
            delay: 1.6,
            repeat: Infinity,
            repeatDelay: 1.8,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute h-3 w-3 rounded-full bg-brand"
          style={{
            top: "50%",
            marginTop: "-6px",
            marginLeft: "-6px",
            boxShadow: "0 0 0 5px rgba(106,206,234,0.30)",
          }}
          initial={{ left: "53%", y: 0, opacity: 0 }}
          animate={{
            left: ["53%", "57%", "77%", "81%"],
            y: [0, 10, 10, 0],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 1.6,
            delay: 3.6,
            repeat: Infinity,
            repeatDelay: 1.8,
            ease: "easeInOut",
          }}
        />
      </div>
    </>
  );
}

export default function HowItWorks() {
  return (
    <section id="how" className="hidden md:block bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-18 lg:py-20">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-wider text-brand font-semibold">
              Three taps. One ride.
            </p>
            <h2 className="mt-3 font-display font-bold text-charcoal text-3xl sm:text-4xl lg:text-5xl">
              How wer2 GO works.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-charcoal/65 leading-relaxed">
              From phone in hand to driver at the kerb in under five minutes —
              from Maitama to Surulere to Sabon Gari.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 relative">
          <StepConnectors />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 relative">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.12}>
                <div className="relative text-center">
                  <div className="mx-auto relative w-20">
                    <motion.div
                      whileHover={{ y: -4, scale: 1.04 }}
                      transition={{ type: "spring", stiffness: 220, damping: 18 }}
                      className={`mx-auto inline-flex h-20 w-20 items-center justify-center rounded-2xl ${
                        s.accent
                          ? "bg-brand text-charcoal ring-4 ring-brand/25"
                          : "bg-white text-charcoal ring-1 ring-charcoal/10"
                      }`}
                    >
                      <s.Icon className="h-8 w-8" aria-hidden="true" />
                    </motion.div>
                  </div>
                  <h3 className="mt-6 font-display font-semibold text-charcoal text-lg">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-xs mx-auto text-sm text-charcoal/65 leading-relaxed">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
