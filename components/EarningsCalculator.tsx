"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Wallet,
  Clock4,
  CalendarRange,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { Reveal } from "./Reveal";

import { DRIVER_URL } from "@/lib/site";
const RIDES_PER_HOUR = 2;
const COMMISSION_DRIVER_KEEPS = 0.9;

const formatNaira = (n: number) =>
  "₦" + Math.round(n).toLocaleString("en-NG");

function Slider({
  label,
  value,
  min,
  max,
  step,
  suffix,
  Icon,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  suffix: string;
  Icon: typeof Clock4;
  onChange: (v: number) => void;
}) {
  return (
    <div className="rounded-2xl bg-white p-5 ring-1 ring-charcoal/[0.06]">
      <div className="flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-2 text-sm font-medium text-charcoal">
          <Icon className="h-4 w-4 text-brand" aria-hidden="true" />
          {label}
        </span>
        <span className="font-display font-bold text-charcoal text-lg tabular-nums">
          {value}
          <span className="text-sm font-normal text-charcoal/55 ml-1">
            {suffix}
          </span>
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={label}
        className="mt-4 w-full accent-brand"
      />
      <div className="mt-1 flex justify-between text-[10px] text-charcoal/45 font-medium">
        <span>
          {min}
          {suffix}
        </span>
        <span>
          {max}
          {suffix}
        </span>
      </div>
    </div>
  );
}

export default function EarningsCalculator() {
  const [hours, setHours] = useState(8);
  const [days, setDays] = useState(5);
  const [avgFare, setAvgFare] = useState(1500);

  const { weekly, monthly, annual, rides } = useMemo(() => {
    const ridesPerWeek = hours * RIDES_PER_HOUR * days;
    const weeklyGross = ridesPerWeek * avgFare;
    const weeklyNet = weeklyGross * COMMISSION_DRIVER_KEEPS;
    return {
      rides: ridesPerWeek,
      weekly: weeklyNet,
      monthly: weeklyNet * 4.33,
      annual: weeklyNet * 52,
    };
  }, [hours, days, avgFare]);

  return (
    <section id="earnings" className="bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-16">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-wider text-brand font-semibold">
              Earnings calculator
            </p>
            <h2 className="mt-3 font-display font-bold text-charcoal text-3xl sm:text-4xl lg:text-5xl">
              See what you&apos;d take home as a wer2 GO driver.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-charcoal/65 leading-relaxed">
              Drag the sliders to match your week. We assume ~2 rides per
              active hour and the standard 10% commission.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <Reveal className="lg:col-span-5">
            <div className="space-y-3">
              <Slider
                label="Hours per day"
                Icon={Clock4}
                value={hours}
                min={1}
                max={14}
                step={1}
                suffix="h"
                onChange={setHours}
              />
              <Slider
                label="Days per week"
                Icon={CalendarRange}
                value={days}
                min={1}
                max={7}
                step={1}
                suffix="d"
                onChange={setDays}
              />
              <Slider
                label="Average fare per ride"
                Icon={Wallet}
                value={avgFare}
                min={500}
                max={4000}
                step={100}
                suffix="₦"
                onChange={setAvgFare}
              />
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.1}>
            <div className="rounded-3xl bg-charcoal text-white p-6 sm:p-8 lg:p-10 h-full relative overflow-hidden">
              <span
                aria-hidden="true"
                className="pointer-events-none select-none absolute -bottom-12 -right-6 font-display font-extrabold text-white/[0.05] text-[200px] sm:text-[280px] leading-none tracking-tighter"
              >
                ₦
              </span>

              <div className="relative">
                <p className="text-[10px] uppercase tracking-wider text-highlight font-semibold">
                  Take-home — every week
                </p>
                <motion.p
                  key={weekly}
                  initial={{ opacity: 0.5, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="mt-2 font-display font-bold text-white text-[44px] sm:text-[64px] lg:text-[72px] leading-none tabular-nums"
                >
                  {formatNaira(weekly)}
                </motion.p>
                <p className="mt-2 text-sm text-white/65">
                  After the wer2 GO 10% commission ·{" "}
                  <span className="text-white/85 font-medium">
                    ~{rides} rides
                  </span>{" "}
                  per week
                </p>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white/8 ring-1 ring-white/10 p-4">
                    <p className="text-[10px] uppercase tracking-wider text-white/55 font-semibold">
                      Per month
                    </p>
                    <p className="mt-1 font-display font-semibold text-white text-xl tabular-nums">
                      {formatNaira(monthly)}
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white/8 ring-1 ring-white/10 p-4">
                    <p className="text-[10px] uppercase tracking-wider text-white/55 font-semibold">
                      Per year
                    </p>
                    <p className="mt-1 font-display font-semibold text-white text-xl tabular-nums">
                      {formatNaira(annual)}
                    </p>
                  </div>
                </div>

                <div className="mt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <p className="text-xs text-white/55 inline-flex items-center gap-2">
                    <TrendingUp
                      className="h-3.5 w-3.5 text-brand"
                      aria-hidden="true"
                    />
                    Weekly Tuesday payouts, straight to your bank.
                  </p>
                  <a
                    href={DRIVER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-charcoal hover:bg-brand-dark transition-colors active:scale-[0.98]"
                  >
                    Apply to drive
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <p className="mt-6 text-center text-[11px] text-charcoal/45">
            Estimates only — real earnings depend on city, hours of day,
            cancellations and fuel costs.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
