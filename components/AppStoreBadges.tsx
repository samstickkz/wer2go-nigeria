import { APPS_URL } from "@/lib/site";

type BadgeProps = { href?: string };

const ext = (href: string) =>
  href.startsWith("http")
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

export function AppStoreBadge({ href = APPS_URL }: BadgeProps) {
  return (
    <a
      href={href}
      {...ext(href)}
      aria-label="Download on the App Store"
      className="group flex flex-1 sm:flex-none items-center justify-center sm:justify-start gap-2 sm:gap-3 rounded-2xl bg-charcoal px-3 sm:px-4 py-2.5 text-white hover:bg-teal-deep transition-colors active:scale-[0.98]"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6 sm:h-7 sm:w-7 shrink-0"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M17.05 12.62a4.85 4.85 0 0 1 2.42-4.07 4.94 4.94 0 0 0-3.9-2.1c-1.65-.17-3.23.97-4.07.97-.85 0-2.14-.95-3.52-.93A5.18 5.18 0 0 0 3.6 9.16C1.74 12.4 3.12 17.18 4.9 19.8c.88 1.28 1.92 2.72 3.29 2.67 1.32-.05 1.82-.85 3.42-.85 1.6 0 2.05.85 3.45.83 1.43-.02 2.33-1.3 3.21-2.6a11.5 11.5 0 0 0 1.46-3 4.7 4.7 0 0 1-2.68-4.23ZM14.5 4.77A4.78 4.78 0 0 0 15.6 1.4a4.86 4.86 0 0 0-3.14 1.62 4.55 4.55 0 0 0-1.13 3.25 4.02 4.02 0 0 0 3.17-1.5Z" />
      </svg>
      <span className="flex flex-col leading-tight text-left">
        <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-white/70 whitespace-nowrap">
          Download on the
        </span>
        <span className="text-sm sm:text-base font-semibold whitespace-nowrap">App Store</span>
      </span>
    </a>
  );
}

export function GooglePlayBadge({ href = APPS_URL }: BadgeProps) {
  return (
    <a
      href={href}
      {...ext(href)}
      aria-label="Get it on Google Play"
      className="group flex flex-1 sm:flex-none items-center justify-center sm:justify-start gap-2 sm:gap-3 rounded-2xl bg-charcoal px-3 sm:px-4 py-2.5 text-white hover:bg-teal-deep transition-colors active:scale-[0.98]"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6 sm:h-7 sm:w-7 shrink-0"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="gp1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#00d2ff" />
            <stop offset="1" stopColor="#3a7bd5" />
          </linearGradient>
          <linearGradient id="gp2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffd54a" />
            <stop offset="1" stopColor="#ff9100" />
          </linearGradient>
          <linearGradient id="gp3" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ff5252" />
            <stop offset="1" stopColor="#d50000" />
          </linearGradient>
          <linearGradient id="gp4" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#43e97b" />
            <stop offset="1" stopColor="#138a36" />
          </linearGradient>
        </defs>
        <path d="M3.6 1.8 13.9 12 3.6 22.2A1.85 1.85 0 0 1 3 20.85V3.15c0-.55.23-1.04.6-1.35Z" fill="url(#gp1)" />
        <path d="M17.8 8 14 11.78 4.8 2.5l13 5.5Z" fill="url(#gp4)" />
        <path d="M17.8 16 4.8 21.5 14 12.22 17.8 16Z" fill="url(#gp3)" />
        <path d="m20.9 13.34-3.1 1.31L14 12l3.8-2.65 3.1 1.31a1.5 1.5 0 0 1 0 2.68Z" fill="url(#gp2)" />
      </svg>
      <span className="flex flex-col leading-tight text-left">
        <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-white/70 whitespace-nowrap">
          Get it on
        </span>
        <span className="text-sm sm:text-base font-semibold whitespace-nowrap">Google Play</span>
      </span>
    </a>
  );
}
