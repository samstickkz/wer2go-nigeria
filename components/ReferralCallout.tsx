"use client";

import { motion } from "framer-motion";
import { Gift, ArrowRight, Copy, Check } from "lucide-react";
import { useState } from "react";
import { Reveal } from "./Reveal";

const SAMPLE_CODE = "NAIJA1000";

export default function ReferralCallout() {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    if (typeof navigator === "undefined") return;
    navigator.clipboard
      ?.writeText(SAMPLE_CODE)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      })
      .catch(() => {});
  };

  return (
    <section className="bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-12">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-brand text-white p-8 sm:p-10 lg:p-12">
            <span
              aria-hidden="true"
              className="pointer-events-none select-none absolute -bottom-10 -right-4 font-display font-extrabold text-white/[0.10] text-[160px] sm:text-[220px] lg:text-[260px] leading-none tracking-tighter"
            >
              ₦1000
            </span>

            <div className="relative flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
              <div className="lg:flex-1">
                <p className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-3 py-1.5 text-[11px] uppercase tracking-wider font-semibold">
                  <Gift className="h-3.5 w-3.5" aria-hidden="true" />
                  Refer & ride
                </p>
                <h3 className="mt-4 font-display font-bold text-2xl sm:text-3xl lg:text-[40px] leading-[1.05]">
                  Invite a friend. <br className="hidden sm:block" />
                  You both get ₦1,000{" "}
                  <span className="underline underline-offset-4 decoration-white/40 decoration-2">
                    instantly
                  </span>
                  .
                </h3>
                <p className="mt-3 max-w-md text-sm sm:text-base text-white/85">
                  Share your code in the wer2 GO app. The moment they sign up,
                  ₦1,000 lands in your wallet{" "}
                  <span className="font-semibold text-white">and</span> ₦1,000
                  lands in theirs — no first-ride wait, no minimum spend.
                </p>
                <ul className="mt-5 grid grid-cols-2 gap-2 max-w-md">
                  <li className="rounded-xl bg-white/12 backdrop-blur px-3 py-2 ring-1 ring-white/15">
                    <p className="text-[10px] uppercase tracking-wider text-white/65 font-semibold">
                      You get
                    </p>
                    <p className="font-display font-bold text-white text-xl">
                      ₦1,000
                    </p>
                  </li>
                  <li className="rounded-xl bg-white/12 backdrop-blur px-3 py-2 ring-1 ring-white/15">
                    <p className="text-[10px] uppercase tracking-wider text-white/65 font-semibold">
                      They get
                    </p>
                    <p className="font-display font-bold text-white text-xl">
                      ₦1,000
                    </p>
                  </li>
                </ul>
              </div>

              <div className="lg:w-[360px] shrink-0">
                <div className="rounded-2xl bg-white/12 backdrop-blur ring-1 ring-white/20 p-4 sm:p-5">
                  <p className="text-[10px] uppercase tracking-wider text-white/65 font-semibold">
                    Your sample code
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <code className="flex-1 rounded-xl bg-white/15 px-4 py-3 font-display font-bold text-xl tracking-wider">
                      {SAMPLE_CODE}
                    </code>
                    <motion.button
                      type="button"
                      onClick={copyCode}
                      whileTap={{ scale: 0.92 }}
                      aria-label={
                        copied ? "Code copied" : "Copy sample referral code"
                      }
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${
                        copied
                          ? "bg-nigeriaGreen text-white"
                          : "bg-charcoal text-white hover:bg-teal-deep"
                      }`}
                      style={
                        copied
                          ? { background: "#73CC00", color: "#fff" }
                          : undefined
                      }
                    >
                      {copied ? (
                        <Check className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <Copy className="h-5 w-5" aria-hidden="true" />
                      )}
                    </motion.button>
                  </div>
                  <a
                    href="#download"
                    className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-charcoal px-4 py-3 text-sm font-semibold text-white hover:bg-teal-deep transition-colors active:scale-[0.98]"
                  >
                    Get your real code in the app
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
