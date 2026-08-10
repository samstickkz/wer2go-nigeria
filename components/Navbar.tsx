"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Smartphone, ExternalLink, Menu, X } from "lucide-react";
import { APPS_URL } from "@/lib/site";
import { CITY_SLUGS } from "@/lib/cities";

// Home/How/Why sections only exist on "/" — "/#id" still same-document-scrolls
// when already there, and correctly navigates+scrolls from every other page.
// FAQ has its own id="faq" on "/", "/drive" and every city page, so it stays
// a same-page anchor there; only pages without that section need "/#faq".
const PAGES_WITH_FAQ_SECTION = ["/", "/drive", ...CITY_SLUGS.map((s) => `/${s}`)];

const languages = [
  { code: "EN", label: "English" },
  { code: "HA", label: "Hausa" },
  { code: "IG", label: "Igbo" },
  { code: "YO", label: "Yoruba" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const faqHref = PAGES_WITH_FAQ_SECTION.includes(pathname) ? "#faq" : "/#faq";

  const links = [
    { href: "/#home", label: "Home", external: false },
    { href: "/#how", label: "How it works", external: false },
    { href: "/#why", label: "Why wer2 GO", external: false },
    { href: "/drive", label: "Drive", external: false },
    { href: faqHref, label: "FAQ", external: false },
    { href: "#contact", label: "Contact", external: false },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<(typeof languages)[number]["code"]>("EN");
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Don't let the page scroll behind the open mobile menu.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

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
            href={APPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-4 sm:px-5 py-3 text-sm font-semibold text-charcoal hover:bg-brand-dark transition-colors active:scale-[0.98]"
          >
            <Smartphone className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Download app</span>
            <span className="sm:hidden">App</span>
          </a>

          {/* Mobile/tablet menu toggle — the link list is lg-only. */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full text-white/90 hover:bg-white/10 transition-colors"
          >
            {menuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden border-t border-white/10 bg-teal max-h-[calc(100dvh-5rem)] overflow-y-auto"
        >
          <ul className="px-4 sm:px-6 py-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  {...(l.external && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  className="flex items-center gap-2 py-4 text-base font-medium text-white/90 hover:text-brand border-b border-white/10 last:border-b-0 transition-colors"
                >
                  {l.label}
                  {l.external && (
                    <ExternalLink
                      className="h-3.5 w-3.5 text-white/45"
                      aria-hidden="true"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="px-4 sm:px-6 pb-5 pt-1">
            <p className="text-[11px] uppercase tracking-wider text-white/45 mb-2">
              Language
            </p>
            <div className="flex flex-wrap gap-2">
              {languages.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  onClick={() => setLang(l.code)}
                  aria-pressed={lang === l.code}
                  className={`rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-wider transition-colors ${
                    lang === l.code
                      ? "bg-brand text-charcoal"
                      : "bg-white/10 text-white/80 hover:bg-white/20"
                  }`}
                >
                  {l.code}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
