"use client";

import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  Star,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Trophy,
  Plane,
  CalendarCheck,
  ArrowRight,
  Smartphone,
  Clock4,
} from "lucide-react";
import { AppStoreBadge, GooglePlayBadge } from "./AppStoreBadges";

const AUTO_ADVANCE_MS = 7000;
const QATAR_DRAW_ISO = "2026-12-31T23:59:59+01:00";

const GREETINGS = [
  { word: "Sannu", lang: "Hausa" },
  { word: "Báwo ni", lang: "Yoruba" },
  { word: "Kedu", lang: "Igbo" },
  { word: "How far", lang: "Pidgin" },
];

function RotatingGreeting() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(
      () => setI((x) => (x + 1) % GREETINGS.length),
      3000,
    );
    return () => clearInterval(t);
  }, []);
  const g = GREETINGS[i];
  return (
    <p
      className="h-5 mb-4 text-sm text-charcoal/60"
      aria-live="polite"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={g.word}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.35 }}
          className="inline-flex items-center gap-2"
        >
          <span className="font-display font-semibold text-charcoal">
            {g.word}
          </span>
          <span className="text-[11px] uppercase tracking-wider text-charcoal/40">
            · {g.lang}
          </span>
        </motion.span>
      </AnimatePresence>
    </p>
  );
}

function useCountdown(targetISO: string) {
  const target = new Date(targetISO).getTime();
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  if (now === null) return null;
  const ms = Math.max(0, target - now);
  return {
    days: Math.floor(ms / 86_400_000),
    hours: Math.floor((ms % 86_400_000) / 3_600_000),
    minutes: Math.floor((ms % 3_600_000) / 60_000),
    seconds: Math.floor((ms % 60_000) / 1000),
  };
}

function MainSlideVisual() {
  return (
    <div className="relative h-[320px] sm:h-[420px] lg:h-[520px]">
      <div
        aria-hidden="true"
        className="absolute right-0 top-6 bottom-6 w-[88%] rounded-l-[40px] bg-gradient-to-br from-brand via-teal-soft to-teal shadow-glow"
      />
      <motion.div
        className="absolute inset-0"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
      >
        <Image
          src="/brand/hero-car.png"
          alt="wer2 GO ride"
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-contain object-center"
        />
      </motion.div>

      <div className="absolute -bottom-3 sm:bottom-4 left-2 sm:left-6 lg:-left-4 rounded-2xl bg-white px-4 py-3 ring-1 ring-charcoal/10">
        <p className="text-[10px] uppercase tracking-wider text-charcoal/55">
          Fare locked
        </p>
        <p className="mt-0.5 font-display font-semibold text-charcoal">
          ₦2,450{" "}
          <span className="text-charcoal/50 text-xs font-normal">
            to airport
          </span>
        </p>
      </div>

      <div className="hidden sm:block absolute top-6 right-4 lg:right-6 rounded-2xl bg-white px-4 py-3 ring-1 ring-charcoal/10">
        <p className="text-[10px] uppercase tracking-wider text-charcoal/55">
          Driver arriving
        </p>
        <p className="mt-0.5 font-display font-semibold text-charcoal">
          3 min · Adamu O.
        </p>
      </div>
    </div>
  );
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <span className="inline-flex flex-col items-center px-1.5">
      <span className="font-display font-extrabold text-charcoal text-2xl tabular-nums leading-none">
        {String(value).padStart(2, "0")}
      </span>
      <span className="mt-1 text-[9px] uppercase tracking-wider text-charcoal/55 font-semibold">
        {label}
      </span>
    </span>
  );
}

function QatarSlideVisual() {
  const c = useCountdown(QATAR_DRAW_ISO);
  return (
    <div className="relative h-[320px] sm:h-[420px] lg:h-[520px]">
      <div className="relative h-full w-full overflow-hidden rounded-3xl ring-1 ring-charcoal/[0.06]">
        <Image
          src="/brand/qa-pearl-marina.jpg"
          alt="The Pearl Marina, Doha at dusk"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent" />

        <div className="absolute top-5 left-5 flex items-center gap-2 rounded-full bg-white/95 backdrop-blur px-3 py-1.5 text-[11px] font-semibold text-charcoal">
          <Trophy
            className="h-3.5 w-3.5 text-brand"
            aria-hidden="true"
          />
          Sponsored by wer2 GO
        </div>

        <div className="absolute top-5 right-5 rounded-full bg-white/15 backdrop-blur px-3 py-1.5 text-[11px] font-semibold text-white uppercase tracking-wider">
          DOH ✈ Doha
        </div>

        <div className="absolute bottom-5 left-5 right-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="rounded-2xl bg-white/95 backdrop-blur p-4">
            <p className="text-[10px] uppercase tracking-wider text-charcoal/55 font-semibold flex items-center gap-1.5">
              <Clock4 className="h-3 w-3 text-brand" aria-hidden="true" />
              Next draw closes in
            </p>
            {c ? (
              <div className="mt-2 flex items-baseline -mx-1">
                <CountdownUnit value={c.days} label="d" />
                <span className="text-charcoal/30 font-display font-bold text-lg">
                  :
                </span>
                <CountdownUnit value={c.hours} label="h" />
                <span className="text-charcoal/30 font-display font-bold text-lg">
                  :
                </span>
                <CountdownUnit value={c.minutes} label="m" />
                <span className="text-charcoal/30 font-display font-bold text-lg">
                  :
                </span>
                <CountdownUnit value={c.seconds} label="s" />
              </div>
            ) : (
              <p className="mt-1 font-display font-bold text-charcoal text-lg leading-tight">
                31 Dec 2026
              </p>
            )}
            <p className="mt-1 text-[10px] text-charcoal/55">
              draws twice a year
            </p>
          </div>
          <div className="hidden sm:block rounded-2xl bg-white/95 backdrop-blur p-4">
            <p className="text-[10px] uppercase tracking-wider text-charcoal/55 font-semibold">
              Last winner
            </p>
            <p className="mt-1 font-display font-bold text-charcoal text-lg leading-tight">
              Chinedu O.
            </p>
            <p className="text-[11px] text-charcoal/60">
              Driver · Port Harcourt
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

type SlideData = {
  id: string;
  watermark: string;
  ariaLabel: string;
  pillBg: string;
  pillIcon?: ReactNode;
  pillLabel: string;
  title: ReactNode;
  body: ReactNode;
  primaryCta?: ReactNode;
  trust?: ReactNode;
  visual: ReactNode;
};

const slides: SlideData[] = [
  {
    id: "main",
    watermark: "WER2",
    ariaLabel: "Tap, ride and arrive anywhere in Nigeria",
    pillBg: "bg-white ring-1 ring-charcoal/10",
    pillIcon: (
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
      </span>
    ),
    pillLabel: "Live across Nigeria",
    title: (
      <>
        Tap. Ride. Arrive.
        <br />
        <span className="text-brand">Anywhere in Naija.</span>
      </>
    ),
    body: "wer2 GO is the ride-hailing app built for Nigeria — NIN-verified drivers, transparent fares with no peak-hour surge, and an in-app SOS on every trip. Available now on iOS and Android.",
    primaryCta: (
      <div className="flex flex-wrap items-center gap-3">
        <AppStoreBadge />
        <GooglePlayBadge />
      </div>
    ),
    trust: (
      <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
        <div className="flex items-center gap-2">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4 text-amber-400 fill-amber-400"
                aria-hidden="true"
              />
            ))}
          </div>
          <span className="text-sm text-charcoal/70">
            <span className="font-semibold text-charcoal">4.8</span>{" "}
            <span className="text-charcoal/55">from 12k+ riders</span>
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm text-charcoal/70">
          <ShieldCheck className="h-4 w-4 text-brand" aria-hidden="true" />
          NIN-verified drivers
        </div>
      </div>
    ),
    visual: <MainSlideVisual />,
  },
  {
    id: "qatar",
    watermark: "QATAR",
    ariaLabel: "Promo: win a sponsored flight to Doha every six months",
    pillBg: "bg-brand text-charcoal",
    pillIcon: <Plane className="h-3.5 w-3.5" aria-hidden="true" />,
    pillLabel: "Promo · Every 6 months",
    title: (
      <>
        Ride. Qualify.
        <br />
        <span className="text-brand">Fly to Qatar.</span>
      </>
    ),
    body: (
      <>
        Hit{" "}
        <span className="font-semibold text-charcoal">20 rides</span> in any
        month and you&apos;re in the draw. Every six months, one lucky wer2 GO
        user — rider or driver — takes off to Doha on us.
      </>
    ),
    primaryCta: (
      <div className="flex flex-wrap items-center gap-3">
        <a
          href="#promo"
          className="inline-flex items-center gap-2 rounded-full bg-charcoal px-6 py-3 text-sm font-semibold text-white hover:bg-teal-deep transition-colors active:scale-[0.98]"
        >
          See the rules
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
        <a
          href="#download"
          className="inline-flex items-center gap-2 rounded-full bg-white ring-1 ring-charcoal/15 px-6 py-3 text-sm font-medium text-charcoal hover:bg-cream transition-colors active:scale-[0.98]"
        >
          <Smartphone className="h-4 w-4" aria-hidden="true" />
          Download the app
        </a>
      </div>
    ),
    trust: (
      <div className="flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-charcoal/70">
        <div className="flex items-center gap-2">
          <CalendarCheck className="h-4 w-4 text-brand" aria-hidden="true" />
          Next draw: 31 December 2026
        </div>
        <div className="flex items-center gap-2">
          <Trophy className="h-4 w-4 text-brand" aria-hidden="true" />
          1 rider or driver every cycle
        </div>
      </div>
    ),
    visual: <QatarSlideVisual />,
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const total = slides.length;

  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const watermarkY = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const watermarkScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const visualY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  const go = useCallback(
    (target: number) => {
      const normalised = ((target % total) + total) % total;
      setDirection(target > index ? 1 : -1);
      setIndex(normalised);
    },
    [index, total],
  );

  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(next, AUTO_ADVANCE_MS);
    return () => clearTimeout(t);
  }, [index, paused, next]);

  const current = slides[index];

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative overflow-hidden bg-cream"
      aria-roledescription="carousel"
      aria-label="wer2 GO highlights"
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setPaused(false);
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={`wm-${current.id}`}
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          style={{ y: watermarkY, scale: watermarkScale }}
          className="pointer-events-none select-none absolute -top-4 right-0 origin-top-right font-display font-bold text-charcoal/[0.04] text-[260px] sm:text-[360px] lg:text-[440px] leading-none tracking-tighter"
        >
          {current.watermark}
        </motion.span>
      </AnimatePresence>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-10 sm:pt-14 lg:pt-20 pb-12 sm:pb-16 lg:pb-20">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={current.id}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 48 : -48 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -48 : 48 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${total}: ${current.ariaLabel}`}
          >
            <div className="lg:col-span-6">
              <RotatingGreeting />

              <span
                className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium ${current.pillBg}`}
              >
                {current.pillIcon}
                {current.pillLabel}
              </span>

              <h1 className="mt-6 font-display font-bold text-charcoal leading-[1.02] tracking-tight text-4xl sm:text-5xl lg:text-[64px]">
                {current.title}
              </h1>

              <p className="mt-5 max-w-xl text-base sm:text-lg text-charcoal/65 leading-relaxed">
                {current.body}
              </p>

              {current.primaryCta && (
                <div className="mt-8">{current.primaryCta}</div>
              )}

              {current.trust && <div className="mt-8">{current.trust}</div>}
            </div>

            <motion.div
              className="lg:col-span-6 relative"
              style={{ y: visualY }}
            >
              {current.visual}
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-charcoal ring-1 ring-charcoal/10 hover:bg-cream hover:ring-charcoal/20 transition-colors active:scale-[0.96]"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>

          <div
            className="flex items-center gap-2"
            role="tablist"
            aria-label="Hero slides"
          >
            {slides.map((s, i) => {
              const isActive = i === index;
              return (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Show slide ${i + 1}: ${s.ariaLabel}`}
                  onClick={() => go(i)}
                  className={`relative overflow-hidden h-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? "w-12 bg-charcoal/15"
                      : "w-2.5 bg-charcoal/20 hover:bg-charcoal/35"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      key={`pb-${index}-${paused}`}
                      aria-hidden="true"
                      initial={{ width: "0%" }}
                      animate={{ width: paused ? "100%" : "100%" }}
                      transition={{
                        duration: paused ? 0 : AUTO_ADVANCE_MS / 1000,
                        ease: "linear",
                      }}
                      className="absolute inset-y-0 left-0 bg-brand rounded-full"
                      style={paused ? { width: "100%", opacity: 0.5 } : undefined}
                    />
                  )}
                </button>
              );
            })}
            <span className="ml-3 text-xs text-charcoal/55 tabular-nums">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-charcoal ring-1 ring-charcoal/10 hover:bg-cream hover:ring-charcoal/20 transition-colors active:scale-[0.96]"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
