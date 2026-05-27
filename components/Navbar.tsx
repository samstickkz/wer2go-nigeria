"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Smartphone, ExternalLink } from "lucide-react";

const links = [
  { href: "#home", label: "Home", external: false },
  { href: "#how", label: "How it works", external: false },
  { href: "#rides", label: "Rides", external: false },
  { href: "#why", label: "Why wer2 GO", external: false },
  {
    href: "https://driver.gower2.com",
    label: "Drive",
    external: true,
  },
  { href: "#contact", label: "Contact", external: false },
];

const languages = [
  { code: "EN", label: "English" },
  { code: "HA", label: "Hausa" },
  { code: "IG", label: "Igbo" },
  { code: "YO", label: "Yoruba" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<(typeof languages)[number]["code"]>("EN");
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-teal text-white transition-all ${
        scrolled ? "border-b border-white/10 shadow-[0_8px_24px_-16px_rgba(0,0,0,0.4)]" : ""
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-20 flex items-center justify-between"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-3"
          aria-label="wer2 GO home"
        >
          <span className="inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl ring-1 ring-white/15">
            <Image
              src="/brand/wer2-mark.webp"
              alt="wer2 GO"
              width={88}
              height={88}
              priority
              className="h-11 w-11 object-cover"
            />
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                {...(l.external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                className="inline-flex items-center gap-1 text-sm font-medium text-white/80 hover:text-brand transition-colors"
              >
                {l.label}
                {l.external && (
                  <ExternalLink
                    className="h-3 w-3 text-white/45"
                    aria-hidden="true"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative hidden sm:block">
            <button
              type="button"
              onClick={() => setLangOpen((v) => !v)}
              onBlur={() => setTimeout(() => setLangOpen(false), 120)}
              aria-haspopup="listbox"
              aria-expanded={langOpen}
              className="inline-flex items-center gap-1 rounded-full bg-white/0 hover:bg-white/10 px-3 py-2 text-xs font-medium uppercase tracking-wider text-white/80 hover:text-white transition-colors"
            >
              {lang}
              <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
            {langOpen && (
              <ul
                role="listbox"
                className="absolute right-0 top-full mt-2 w-36 rounded-2xl bg-white p-1.5 ring-1 ring-charcoal/10 shadow-lift"
              >
                {languages.map((l) => (
                  <li key={l.code}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={lang === l.code}
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => {
                        setLang(l.code);
                        setLangOpen(false);
                      }}
                      className={`w-full flex items-center justify-between rounded-xl px-3 py-2 text-sm text-left transition-colors ${
                        lang === l.code
                          ? "bg-brand/10 text-brand"
                          : "text-charcoal hover:bg-cream"
                      }`}
                    >
                      <span className="font-medium tracking-wider uppercase text-xs">
                        {l.code}
                      </span>
                      <span className="text-xs text-charcoal/60">
                        {l.label}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <a
            href="#download"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-4 sm:px-5 py-2.5 text-sm font-semibold text-charcoal hover:bg-brand-dark transition-colors active:scale-[0.98]"
          >
            <Smartphone className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Download app</span>
            <span className="sm:hidden">App</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
