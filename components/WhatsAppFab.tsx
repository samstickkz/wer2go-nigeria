"use client";

import { motion } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/97431531600";
const DISPLAY_NUMBER = "+974 3153 1600";

export default function WhatsAppFab() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with wer2 GO on WhatsApp at ${DISPLAY_NUMBER}`}
      title={`Chat on WhatsApp · ${DISPLAY_NUMBER}`}
      initial={{ opacity: 0, scale: 0.6, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 220, damping: 18 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 group flex items-center gap-3"
    >
      <span className="hidden sm:flex flex-col rounded-2xl bg-white px-4 py-2.5 ring-1 ring-charcoal/10 leading-tight">
        <span className="text-[10px] uppercase tracking-wider text-charcoal/55 font-semibold">
          Chat on WhatsApp
        </span>
        <span className="text-sm font-semibold text-charcoal">
          {DISPLAY_NUMBER}
        </span>
      </span>

      <span className="relative flex h-14 w-14 sm:h-14 sm:w-14 items-center justify-center">
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-50 animate-ping"
        />
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_24px_-8px_rgba(37,211,102,0.55)]">
          <svg
            viewBox="0 0 32 32"
            className="h-7 w-7"
            aria-hidden="true"
            fill="currentColor"
          >
            <path d="M19.11 17.21c-.28-.14-1.66-.82-1.92-.91-.26-.1-.45-.14-.64.14-.19.28-.73.91-.9 1.1-.17.19-.33.21-.61.07-.28-.14-1.18-.43-2.25-1.39-.83-.74-1.39-1.65-1.56-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.64-1.55-.88-2.12-.23-.55-.46-.48-.64-.49-.16 0-.35-.02-.54-.02-.19 0-.49.07-.75.35-.26.28-.99.96-.99 2.36s1.02 2.74 1.16 2.93c.14.19 2 3.06 4.85 4.29.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.66-.68 1.9-1.34.23-.66.23-1.22.16-1.34-.06-.13-.25-.21-.53-.35Zm-5.07 6.76h-.01a9.93 9.93 0 0 1-5.06-1.39l-.36-.22-3.75.99 1-3.66-.24-.38a9.96 9.96 0 0 1-1.52-5.29c0-5.5 4.48-9.98 9.99-9.98 2.67 0 5.17 1.04 7.06 2.93a9.92 9.92 0 0 1 2.92 7.06c0 5.5-4.48 9.94-9.93 9.94Zm8.46-18.39A11.81 11.81 0 0 0 14.03 2C7.46 2 2.12 7.34 2.12 13.91c0 2.1.55 4.16 1.6 5.97L2 26.5l6.78-1.78a11.86 11.86 0 0 0 5.25 1.34h.01c6.57 0 11.91-5.34 11.91-11.91 0-3.18-1.24-6.17-3.48-8.42Z" />
          </svg>
        </span>
      </span>
    </motion.a>
  );
}
