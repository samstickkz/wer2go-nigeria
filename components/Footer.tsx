"use client";

import Image from "next/image";
import {
  Instagram,
  Facebook,
  Users,
  MessageCircle,
  Mail,
  MapPin,
  Phone,
  ChevronRight,
  Send,
} from "lucide-react";
import { Reveal } from "./Reveal";

const payments = [
  "Paystack",
  "Flutterwave",
  "Verve",
  "Mastercard",
  "Visa",
  "Bank Transfer",
];

const infoLinks = [
  { label: "Download the app", href: "#download", external: false },
  {
    label: "Become a driver",
    href: "https://driver.gower2.com",
    external: true,
  },
  {
    label: "Fleet partners",
    href: "https://driver.gower2.com#fleet",
    external: true,
  },
  { label: "Press & news", href: "#press", external: false },
  { label: "Privacy policy", href: "#privacy", external: false },
];

const socials = [
  {
    Icon: Send,
    label: "Telegram · wer2 GO Nigeria",
    href: "https://t.me/wer2go_nigeria",
  },
  {
    Icon: Instagram,
    label: "Instagram · @wer2ride",
    href: "https://www.instagram.com/wer2ride/",
  },
  {
    Icon: Facebook,
    label: "Facebook page",
    href: "https://www.facebook.com/wer2ride/",
  },
  {
    Icon: Users,
    label: "Facebook community group",
    href: "https://www.facebook.com/groups/1406387844374770/",
  },
  {
    Icon: MessageCircle,
    label: "WhatsApp · +974 3153 1600",
    href: "https://wa.me/97431531600",
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <Reveal>
          <div className="border-y border-charcoal/10 py-6">
            <p className="text-center text-[11px] uppercase tracking-wider text-charcoal/45 font-semibold">
              Pay your way · Accepted in the wer2 GO app
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
              {payments.map((p) => (
                <span
                  key={p}
                  className="font-display font-semibold text-base text-charcoal/40 hover:text-charcoal/70 transition-colors"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 py-14 sm:py-16">
          <Reveal className="lg:col-span-4">
            <span className="inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl ring-1 ring-charcoal/10">
              <Image
                src="/brand/wer2-mark.webp"
                alt="wer2 GO"
                width={96}
                height={96}
                className="h-12 w-12 object-cover"
              />
            </span>
            <p className="mt-5 text-sm text-charcoal/65 leading-relaxed max-w-xs">
              wer2 GO is the ride-hailing app born in Doha and built for
              Nigeria. NIN-verified drivers, locked fares and an in-app SOS on
              every trip — across every state.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-charcoal ring-1 ring-charcoal/10">
              🇳🇬 Proudly serving Naija
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={0.05}>
            <h3 className="font-display font-semibold text-charcoal">
              Contact info
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-charcoal/70">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-brand" aria-hidden="true" />
                <span>
                  Plot 1107, Adetokunbo Ademola Crescent,
                  <br />
                  Wuse II, Abuja
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-brand" aria-hidden="true" />
                <span>
                  +234 700 000 0000
                  <br />
                  +974 4000 0000
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-brand" aria-hidden="true" />
                <a href="mailto:hello@wer2go.ng" className="hover:text-brand">
                  hello@wer2go.ng
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal className="lg:col-span-2" delay={0.1}>
            <h3 className="font-display font-semibold text-charcoal">
              Information
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {infoLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    {...(l.external && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    className="inline-flex items-center gap-1 text-charcoal/70 hover:text-brand transition-colors"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={0.15}>
            <h3 className="font-display font-semibold text-charcoal">
              Subscribe to our newsletter
            </h3>
            <p className="mt-3 text-sm text-charcoal/65">
              Driver economics, new city launches, and the occasional Hausa
              lesson — once a month.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 flex items-center gap-2 rounded-full bg-white p-1.5 ring-1 ring-charcoal/10"
            >
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-transparent px-4 py-2 text-sm text-charcoal placeholder:text-charcoal/45 focus:outline-none"
                aria-label="Email address"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="inline-flex items-center gap-1.5 rounded-full bg-charcoal px-4 py-2 text-sm font-medium text-white hover:bg-teal-soft transition-colors active:scale-[0.97]"
              >
                <Send className="h-3.5 w-3.5" aria-hidden="true" />
                Submit
              </button>
            </form>

            <ul className="mt-6 flex items-center gap-3">
              {socials.map(({ Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-charcoal/20 text-charcoal hover:bg-brand hover:text-white hover:border-brand transition-colors"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="border-t border-charcoal/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-charcoal/55">
            © 2026 wer2 GO. Operating in Doha, Qatar. Driven across Nigeria.
          </p>
          <ul className="flex items-center gap-3 text-[11px] uppercase tracking-wider text-charcoal/55">
            {["EN", "HA", "IG", "YO"].map((l, i, arr) => (
              <li key={l} className="flex items-center gap-3">
                <button
                  type="button"
                  className="hover:text-charcoal transition-colors"
                  aria-label={`Switch language to ${l}`}
                >
                  {l}
                </button>
                {i < arr.length - 1 && (
                  <span className="text-charcoal/30">·</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
