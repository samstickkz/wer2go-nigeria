"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Snowflake, Briefcase, Crown, Car, CarFront, Smartphone } from "lucide-react";
import { useState } from "react";
import { Reveal } from "./Reveal";

type Category = {
  id: string;
  label: string;
  Icon: typeof Car;
};

const categories: Category[] = [
  { id: "all", label: "All rides", Icon: Car },
  { id: "standard", label: "Standard", Icon: CarFront },
  { id: "comfort", label: "Comfort", Icon: Snowflake },
  { id: "xl", label: "wer2 XL", Icon: Briefcase },
  { id: "premium", label: "Premium", Icon: Crown },
];

type Ride = {
  badge: "Popular" | "New" | "Premium";
  name: string;
  tagline: string;
  image: string;
  seats: string;
  pace: string;
  rate: string;
  from: string;
};

const rides: Ride[] = [
  {
    badge: "Popular",
    name: "Standard",
    tagline: "The everyday wer2 GO.",
    image: "/brand/hero-car.png",
    seats: "4 seats",
    pace: "Air-con",
    rate: "₦220/km",
    from: "from ₦800",
  },
  {
    badge: "New",
    name: "Comfort",
    tagline: "Newer cars. Extra legroom.",
    image: "/brand/car-comfort.jpg",
    seats: "4 seats",
    pace: "Tinted",
    rate: "₦280/km",
    from: "from ₦1,200",
  },
  {
    badge: "Premium",
    name: "wer2 XL",
    tagline: "Six seats for the airport run.",
    image: "/brand/car-xl.jpg",
    seats: "6 seats",
    pace: "Spacious",
    rate: "₦340/km",
    from: "from ₦1,800",
  },
];

export default function TopRides() {
  const [active, setActive] = useState("all");
  return (
    <section id="rides" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-18 lg:py-20">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-wider text-brand font-semibold">
              Pick your ride
            </p>
            <h2 className="mt-3 font-display font-bold text-charcoal text-3xl sm:text-4xl lg:text-5xl">
              A ride for every trip.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-charcoal/65 leading-relaxed">
              From the school run in Lekki to the airport drop in Abuja —
              pick Standard, Comfort, wer2 XL or step up to Premium.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map(({ id, label, Icon }) => {
              const isActive = active === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setActive(id)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-all active:scale-[0.97] ${
                    isActive
                      ? "bg-brand text-charcoal shadow-[0_8px_20px_-10px_rgba(106,206,234,0.7)]"
                      : "bg-cream text-charcoal hover:bg-cream/70"
                  }`}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {rides.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 220, damping: 22 }}
                className="group relative rounded-3xl bg-cream overflow-hidden flex flex-col h-full"
              >
                <span className="absolute top-5 left-5 z-10 inline-flex rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-charcoal ring-1 ring-charcoal/5">
                  {r.badge}
                </span>
                <div className="relative h-48 sm:h-52 w-full bg-cream">
                  <Image
                    src={r.image}
                    alt={r.name}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display font-semibold text-charcoal text-xl">
                    {r.name}
                  </h3>
                  <p className="mt-1 text-sm text-charcoal/65">{r.tagline}</p>
                  <ul className="mt-4 flex items-center gap-4 text-xs text-charcoal/65">
                    <li className="inline-flex items-center gap-1">
                      <Users className="h-3.5 w-3.5" aria-hidden="true" />
                      {r.seats}
                    </li>
                    <li className="inline-flex items-center gap-1">
                      <Snowflake className="h-3.5 w-3.5" aria-hidden="true" />
                      {r.pace}
                    </li>
                    <li className="inline-flex items-center gap-1 font-medium text-brand">
                      {r.rate}
                    </li>
                  </ul>
                  <div className="mt-6 flex items-end justify-between gap-3">
                    <p className="font-display font-semibold text-charcoal text-lg leading-tight">
                      Starting{" "}
                      <span className="text-brand">{r.from}</span>
                    </p>
                    <a
                      href="#download"
                      className="inline-flex items-center gap-1.5 rounded-full bg-charcoal px-4 py-2 text-xs font-medium text-white hover:bg-teal-deep transition-colors active:scale-[0.97]"
                    >
                      <Smartphone className="h-3.5 w-3.5" aria-hidden="true" />
                      Get app
                    </a>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-8 text-center text-xs text-charcoal/55">
            Bookings happen in the wer2 GO app — there&apos;s no checkout on
            this site.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
