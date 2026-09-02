import { CITIES, joinWithAnd } from "./site";

/**
 * Optional link rendered after an answer on the homepage (see Faq.tsx). Kept
 * separate from `a` so the FAQPage JSON-LD `Answer.text` in app/page.tsx stays
 * plain text — schema.org answers shouldn't carry markup.
 */
export type Faq = {
  q: string;
  a: string;
  link?: { href: string; label: string };
};

/**
 * Homepage FAQ — ride-hailing search queries are heavily question-shaped
 * ("is the fare fixed", "is wer2 GO safe"), and the homepage had no FAQ
 * section or FAQPage schema at all. Keep every answer verifiable against
 * the product: no locked/guaranteed fares, no payout-cadence promises.
 */
export const HOMEPAGE_FAQS: Faq[] = [
  {
    // Search Console shows a cluster of cost-shaped queries ("how much is a
    // ride", "ride fee", "ride rates") that the homepage never answered — the
    // per-city cost answers live in lib/cities.ts, but nothing on / used that
    // wording. No figures here: fares are distance-based estimates, not a
    // price list we can publish.
    q: "How much does a wer2 GO ride cost in Nigeria?",
    a: "There is no flat rate. Your fare is worked out from the real road distance between your pickup and your drop-off, so a short trip across town costs less than a run out to the airport. The app shows you the estimated fare for your exact trip before you confirm the booking, so you can check the price first.",
  },
  {
    q: "Is the fare I see before booking final?",
    a: "You'll see an estimated fare before you book, based on the real road distance for your trip. It's an estimate rather than a fixed amount, so it can vary slightly with the exact route or traffic — but there's no surge pricing and no surprise add-ons.",
  },
  {
    q: "How do I know my wer2 GO driver is safe?",
    a: "Every driver is verified with NIN and BVN and onboarded in person at a wer2 GO hub before their first ride. You see your driver's name, photo, plate number and rating before they arrive, and every trip has an in-app SOS button.",
  },
  {
    q: "Which cities is wer2 GO available in?",
    a: `wer2 GO is live in ${joinWithAnd(CITIES)}, with more Nigerian cities being added over time. Each city has its own page with local routes, airport pickup info and FAQs.`,
  },
  {
    q: "Does wer2 GO have a women-only ride option?",
    a: "Yes — Sannu is our women-only ride option, matching a woman rider with a woman driver. It's currently available in Kano, with plans to bring it to more cities.",
    link: { href: "/kano", label: "See wer2 GO in Kano" },
  },
  {
    q: "How do I become a wer2 GO driver?",
    a: "Download the wer2 GO driver app and verify your NIN and BVN at a wer2 GO hub. wer2 GO charges a 10% commission — one of the lowest in Nigeria — so you keep 90% of every fare, with earnings you can track from your first ride and payouts on request.",
    link: { href: "/drive", label: "See how driving works" },
  },
  {
    q: "How do I contact wer2 GO support?",
    a: "Support is available 24/7 in English, Hausa, Igbo and Yoruba inside the app. You can also reach us at contact@gower2.com.",
  },
];
