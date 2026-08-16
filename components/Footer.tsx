"use client";

import Image from "next/image";
import {
  Instagram,
  Facebook,
  Users,
  MessageCircle,
  Mail,
  MapPin,
  ChevronRight,
  Send,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { APPS_URL, CONTACT_EMAIL, CITIES_PHRASE } from "@/lib/site";
import { CITIES } from "@/lib/cities";

const infoLinks = [
  { label: "Download the app", href: APPS_URL, external: true },
  // Internal /drive, not the driver.gower2.com download — the page is what
  // ranks for driver-intent queries, and it carries the app links itself.
  {
    label: "Drive with wer2 GO",
    href: "/drive",
    external: false,
  },
  { label: "Privacy policy", href: "/privacy-policy", external: false },
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
              Nigeria. NIN-verified drivers, upfront fare estimates and an
              in-app SOS on every trip — live in {CITIES_PHRASE}.
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
                <Mail className="h-4 w-4 mt-0.5 text-brand" aria-hidden="true" />
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-block py-2.5 hover:text-brand"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal className="lg:col-span-2" delay={0.1}>
            <h3 className="font-display font-semibold text-charcoal">
              Information
            </h3>
            <ul className="mt-4 space-y-0.5 text-sm">
              {infoLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    {...(l.external && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    className="inline-flex min-h-11 items-center gap-1 py-3 text-charcoal/70 hover:text-brand transition-colors"
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
              Follow us
            </h3>

            <ul className="mt-5 flex items-center gap-3">
              {socials.map(({ Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/20 text-charcoal hover:bg-brand hover:text-white hover:border-brand transition-colors"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Sitewide link to every city page — /drive and /privacy-policy would
            otherwise be dead ends, with the city pages reachable only from the
            homepage and from each other. */}
        <div className="border-t border-charcoal/10 py-8">
          <h3 className="text-xs uppercase tracking-wider text-charcoal/55">
            Cities we serve
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {CITIES.map((c) => (
              <li key={c.slug}>
                <a
                  href={`/${c.slug}`}
                  className="inline-flex min-h-11 items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm text-charcoal/75 ring-1 ring-charcoal/10 hover:text-brand hover:ring-brand/40 transition-colors"
                >
                  <MapPin className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                  Ride in {c.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-charcoal/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-charcoal/55">
            © 2026 wer2 GO. Operating in Doha, Qatar. On the road in Nigeria.
          </p>
          <ul className="flex items-center gap-3 text-[11px] uppercase tracking-wider text-charcoal/55">
            {["EN", "HA", "IG", "YO"].map((l, i, arr) => (
              <li key={l} className="flex items-center gap-3">
                <button
                  type="button"
                  className="inline-flex min-h-11 min-w-11 items-center justify-center px-2 hover:text-charcoal transition-colors"
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
