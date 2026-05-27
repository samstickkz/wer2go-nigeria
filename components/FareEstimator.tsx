"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calculator,
  CarFront,
  Snowflake,
  Briefcase,
  Crown,
  MapPin,
  ArrowRight,
  Smartphone,
} from "lucide-react";
import { Reveal } from "./Reveal";

type Route = {
  id: string;
  city: string;
  from: string;
  to: string;
  km: number;
  popular?: boolean;
};

const routes: Route[] = [
  {
    id: "lekki-mma",
    city: "Lagos",
    from: "Lekki Phase 1",
    to: "Murtala Muhammed Airport",
    km: 28,
    popular: true,
  },
  {
    id: "vi-lekki",
    city: "Lagos",
    from: "Victoria Island",
    to: "Lekki Phase 1",
    km: 12,
  },
  {
    id: "maitama-nnia",
    city: "Abuja",
    from: "Maitama",
    to: "Nnamdi Azikiwe Airport",
    km: 35,
    popular: true,
  },
  {
    id: "wuse-jabi",
    city: "Abuja",
    from: "Wuse II",
    to: "Jabi Lake Mall",
    km: 8,
  },
  {
    id: "gra-ph-airport",
    city: "Port Harcourt",
    from: "GRA",
    to: "PH International Airport",
    km: 25,
    popular: true,
  },
  {
    id: "bompai-kano",
    city: "Kano",
    from: "Bompai",
    to: "Aminu Kano Airport",
    km: 22,
  },
];

type RideType = {
  id: string;
  label: string;
  icon: typeof CarFront;
  basePrice: number;
  perKm: number;
  badge?: string;
};

const rideTypes: RideType[] = [
  {
    id: "standard",
    label: "Standard",
    icon: CarFront,
    basePrice: 800,
    perKm: 220,
    badge: "Popular",
  },
  {
    id: "comfort",
    label: "Comfort",
    icon: Snowflake,
    basePrice: 1200,
    perKm: 280,
  },
  { id: "xl", label: "wer2 XL", icon: Briefcase, basePrice: 1800, perKm: 340 },
  {
    id: "premium",
    label: "Premium",
    icon: Crown,
    basePrice: 2400,
    perKm: 420,
  },
];

const formatNaira = (n: number) => {
  const rounded = Math.round(n / 50) * 50;
  return "₦" + rounded.toLocaleString("en-NG");
};

export default function FareEstimator() {
  const [routeId, setRouteId] = useState(routes[0].id);
  const route = routes.find((r) => r.id === routeId) ?? routes[0];

  const cheapest = rideTypes[0];
  const cheapestFare = Math.max(
    cheapest.basePrice,
    cheapest.perKm * route.km,
  );

  return (
    <section id="estimator" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-18 lg:py-20">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-wider text-brand font-semibold">
              Fare estimator
            </p>
            <h2 className="mt-3 font-display font-bold text-charcoal text-3xl sm:text-4xl lg:text-5xl">
              See the locked fare. Before you ride.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-charcoal/65 leading-relaxed">
              Same fare at 8 AM or 11 PM, rain or shine. Pick a popular Naija
              run and see what each ride class costs.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <div className="rounded-3xl bg-cream p-5 sm:p-6">
              <p className="text-[11px] uppercase tracking-wider text-charcoal/55 font-semibold">
                Popular routes
              </p>
              <ul className="mt-4 space-y-2">
                {routes.map((r) => {
                  const isActive = r.id === routeId;
                  return (
                    <li key={r.id}>
                      <button
                        type="button"
                        onClick={() => setRouteId(r.id)}
                        className={`w-full text-left rounded-2xl p-4 transition-all flex items-start gap-3 ${
                          isActive
                            ? "bg-white ring-2 ring-brand shadow-[0_8px_24px_-12px_rgba(106,206,234,0.55)]"
                            : "bg-white/60 hover:bg-white ring-1 ring-charcoal/[0.06]"
                        }`}
                        aria-pressed={isActive}
                      >
                        <span
                          className={`flex-none mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-lg ${
                            isActive
                              ? "bg-brand text-charcoal"
                              : "bg-cream text-charcoal/60"
                          }`}
                        >
                          <MapPin className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span className="flex-1 min-w-0">
                          <span className="flex items-center gap-2">
                            <span className="text-[10px] uppercase tracking-wider text-charcoal/55 font-semibold">
                              {r.city}
                            </span>
                            {r.popular && (
                              <span className="rounded-full bg-highlight/70 px-1.5 py-0 text-[9px] uppercase tracking-wider font-semibold text-charcoal">
                                Popular
                              </span>
                            )}
                          </span>
                          <span className="mt-0.5 block font-display font-semibold text-sm text-charcoal leading-snug">
                            {r.from}{" "}
                            <span className="text-charcoal/35">→</span>{" "}
                            {r.to}
                          </span>
                          <span className="mt-0.5 block text-[11px] text-charcoal/55">
                            {r.km} km
                          </span>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.1}>
            <div className="rounded-3xl bg-charcoal text-white p-6 sm:p-8 lg:p-10 h-full">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-highlight font-semibold">
                    Estimated fare · {route.city}
                  </p>
                  <p className="mt-2 font-display font-semibold text-lg sm:text-xl text-white leading-snug">
                    {route.from}{" "}
                    <span className="text-white/35">→</span> {route.to}
                  </p>
                  <p className="mt-1 text-xs text-white/55">
                    {route.km} km · ride locked at booking
                  </p>
                </div>
                <Calculator
                  className="h-6 w-6 text-white/35 shrink-0"
                  aria-hidden="true"
                />
              </div>

              <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <AnimatePresence mode="popLayout">
                  {rideTypes.map((rt) => {
                    const fare = Math.max(rt.basePrice, rt.perKm * route.km);
                    return (
                      <motion.div
                        key={`${rt.id}-${route.id}`}
                        layout
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                        className="rounded-2xl bg-white/8 backdrop-blur p-4 ring-1 ring-white/10"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <rt.icon
                              className="h-4 w-4 text-brand"
                              aria-hidden="true"
                            />
                            <span className="font-display font-semibold text-sm text-white">
                              {rt.label}
                            </span>
                          </div>
                          {rt.badge && (
                            <span className="rounded-full bg-brand/20 px-2 py-0.5 text-[9px] uppercase tracking-wider text-brand font-semibold">
                              {rt.badge}
                            </span>
                          )}
                        </div>
                        <p className="mt-3 font-display font-bold text-white text-2xl">
                          {formatNaira(fare)}
                        </p>
                        <p className="mt-1 text-[10px] uppercase tracking-wider text-white/45 font-semibold">
                          {rt.perKm} ₦/km · base {formatNaira(rt.basePrice)}
                        </p>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>

              <div className="mt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <p className="text-xs text-white/55">
                  Cheapest ride from {formatNaira(cheapestFare)} · No surge,
                  ever.
                </p>
                <a
                  href="#download"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-charcoal hover:bg-brand-dark transition-colors active:scale-[0.98]"
                >
                  <Smartphone className="h-4 w-4" aria-hidden="true" />
                  Book in the app
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
