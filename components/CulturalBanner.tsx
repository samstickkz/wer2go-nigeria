"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { APPS_URL } from "@/lib/site";

type Moment = {
  from: string;
  to: string;
  emoji: string;
  greeting: string;
  message: string;
  cta?: { label: string; href: string };
};

const moments: Moment[] = [
  {
    from: "2026-03-19",
    to: "2026-03-22",
    emoji: "🌙",
    greeting: "Eid Mubarak",
    message: "₦500 off every ride this Eid weekend with code EID500.",
    cta: { label: "Open the app", href: APPS_URL },
  },
  {
    from: "2026-05-25",
    to: "2026-05-30",
    emoji: "🌙",
    greeting: "Sallah Mubarak",
    message:
      "₦500 off every ride this Sallah weekend in Kano, Abuja and Lagos with code SALLAH.",
    cta: { label: "Open the app", href: APPS_URL },
  },
  {
    from: "2026-05-27",
    to: "2026-05-27",
    emoji: "🎉",
    greeting: "Happy Children's Day",
    message:
      "Free school-run rides under ₦1,000 today across all four cities.",
  },
  {
    from: "2026-09-30",
    to: "2026-10-02",
    emoji: "🇳🇬",
    greeting: "Happy Independence Day",
    message: "Riding free for 66 lucky Naija customers this 1st October.",
    cta: { label: "How to enter", href: "#promo" },
  },
  {
    from: "2026-12-24",
    to: "2026-12-26",
    emoji: "🎄",
    greeting: "Merry Christmas from wer2 GO",
    message:
      "Door-to-door festive rides — upfront fare estimates, no Christmas Day surge.",
  },
];

function pickMoment(now: Date): Moment | null {
  const today = now.toISOString().slice(0, 10);
  return moments.find((m) => m.from <= today && today <= m.to) ?? null;
}

export default function CulturalBanner() {
  const [moment, setMoment] = useState<Moment | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    setMoment(pickMoment(new Date()));
    setDismissed(
      typeof window !== "undefined" &&
        sessionStorage.getItem("wer2go-cultural-dismissed") === "1",
    );
  }, []);

  if (!moment || dismissed) return null;

  return (
    <div className="bg-teal text-white text-sm">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-2.5 flex items-center justify-center gap-3 text-center">
        <span aria-hidden="true">{moment.emoji}</span>
        <p className="leading-snug">
          <span className="font-semibold">{moment.greeting}</span>{" "}
          <span className="text-white/75 hidden sm:inline">
            — {moment.message}
          </span>
          {moment.cta && (
            <a
              href={moment.cta.href}
              {...(moment.cta.href.startsWith("http") && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
              className="ml-2 underline underline-offset-2 decoration-brand decoration-2 hover:text-brand transition-colors"
            >
              {moment.cta.label}
            </a>
          )}
        </p>
        <button
          type="button"
          aria-label="Dismiss banner"
          onClick={() => {
            setDismissed(true);
            try {
              sessionStorage.setItem("wer2go-cultural-dismissed", "1");
            } catch {}
          }}
          className="absolute right-3 sm:right-6 inline-flex h-6 w-6 items-center justify-center rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="h-3.5 w-3.5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
