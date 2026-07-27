"use client";

import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";

type Testimonial = {
  name: string;
  role: string;
  rating: number;
  body: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Chiamaka N.",
    role: "Daily commuter · Lekki, Lagos",
    rating: 5,
    body: "Clear fare estimate from Ikate to Victoria Island, even at 7 PM go-slow. I'm never going back to surge pricing.",
  },
  {
    name: "Tunde O.",
    role: "Driver · Trans-Amadi, Port Harcourt",
    rating: 5,
    body: "Switched over from a competitor last quarter. Cashing out is quick whenever I ask, and requests keep coming across GRA and Mile 1.",
  },
  {
    name: "Aisha B.",
    role: "Frequent flyer · Maitama, Abuja",
    rating: 5,
    body: "I book my airport runs the night before. Driver shows up early every single time and the fare never changes between booking and the gate.",
  },
];

function Avatar({ name }: { name: string }) {
  const palettes = [
    { bg: "0F2238", fg: "6ACEEA" },
    { bg: "06101F", fg: "6ACEEA" },
    { bg: "6ACEEA", fg: "0F1B2E" },
  ];
  const hash = Array.from(name).reduce((a, c) => a + c.charCodeAt(0), 0);
  const { bg, fg } = palettes[hash % palettes.length];
  const url = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    name,
  )}&background=${bg}&color=${fg}&size=160&font-size=0.42&bold=true`;
  return (
    <Image
      src={url}
      alt=""
      width={48}
      height={48}
      className="h-12 w-12 rounded-full object-cover"
      unoptimized
    />
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <article className="rounded-3xl bg-white p-6 sm:p-7 flex flex-col h-full shadow-lift">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <Avatar name={t.name} />
          <div>
            <p className="font-display font-semibold text-charcoal text-sm">
              {t.name}
            </p>
            <div
              className="mt-1 flex items-center gap-0.5"
              aria-label={`Rated ${t.rating} of 5`}
            >
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star
                  key={idx}
                  className={`h-3.5 w-3.5 ${
                    idx < t.rating
                      ? "text-amber-400 fill-amber-400"
                      : "text-charcoal/20"
                  }`}
                  aria-hidden="true"
                />
              ))}
              <span className="ml-1 text-[11px] font-medium text-charcoal/60">
                {t.rating}.0
              </span>
            </div>
          </div>
        </div>
        <Quote className="h-7 w-7 text-charcoal/15" aria-hidden="true" />
      </div>
      <p className="mt-5 text-sm text-charcoal/75 leading-relaxed flex-1">
        {t.body}
      </p>
      <p className="mt-4 text-xs uppercase tracking-wider text-charcoal/50">
        {t.role}
      </p>
    </article>
  );
}

function MobileCarousel() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % total), 5000);
    return () => clearInterval(t);
  }, [total]);

  return (
    <div>
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={testimonials[index].name}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <TestimonialCard t={testimonials[index]} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div
        className="mt-5 flex items-center justify-center gap-2"
        role="tablist"
        aria-label="Testimonials"
      >
        {testimonials.map((t, i) => {
          const isActive = i === index;
          return (
            <button
              key={t.name}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Show testimonial ${i + 1}: ${t.name}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                isActive
                  ? "w-8 bg-brand"
                  : "w-2 bg-white/30 hover:bg-white/50"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-teal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-18 lg:py-20">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-wider text-brand font-semibold">
              From the road
            </p>
            <h2 className="mt-3 font-display font-bold text-white text-3xl sm:text-4xl lg:text-5xl">
              What riders and drivers say.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-white/65 leading-relaxed">
              Real stories from every corner of Nigeria — Lagos to Abuja, Port
              Harcourt to Kano.
            </p>
          </div>
        </Reveal>

        {/* Desktop: 3-column grid */}
        <div className="mt-12 hidden md:grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <TestimonialCard t={t} />
            </Reveal>
          ))}
        </div>

        {/* Mobile: auto-sliding carousel */}
        <Reveal className="mt-12 md:hidden">
          <MobileCarousel />
        </Reveal>
      </div>
    </section>
  );
}
