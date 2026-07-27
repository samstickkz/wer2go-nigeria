import Image from "next/image";
import { LifeBuoy, ShieldCheck, BadgeCheck, LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";

type Feature = {
  Icon: LucideIcon;
  title: string;
  body: string;
};

const features: Feature[] = [
  {
    Icon: LifeBuoy,
    title: "Always-on support",
    body: "Real humans on call 24/7 in English, Hausa, Igbo and Yoruba.",
  },
  {
    Icon: ShieldCheck,
    title: "NIN and BVN verified",
    body: "Every driver vetted and onboarded in person before their first ride.",
  },
  {
    Icon: BadgeCheck,
    title: "Upfront fare estimates",
    body: "See an estimated fare before you book, so you know what to expect — no surprises at the end of the trip.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="bg-brand-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-16">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-wider text-brand font-semibold">
              Why wer2 GO
            </p>
            <h2 className="mt-3 font-display font-bold text-charcoal text-3xl sm:text-4xl lg:text-5xl">
              Built for the Nigerian commute.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-charcoal/65 leading-relaxed">
              Same guarantee on every ride, from a quick run across town to the
              late-night airport drop.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <Reveal className="lg:col-span-7" delay={0.05}>
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl">
              <Image
                src="/brand/car-xl.jpg"
                alt="wer2 GO premium ride"
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/30 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                <div className="rounded-2xl bg-white/95 backdrop-blur px-4 py-2.5">
                  <p className="text-[11px] sm:text-[10px] uppercase tracking-wider text-charcoal/55">
                    Driver
                  </p>
                  <p className="font-display font-semibold text-charcoal text-sm">
                    Adamu O. · 4.9 ★
                  </p>
                </div>
                <div className="hidden sm:block rounded-2xl bg-white/95 backdrop-blur px-4 py-2.5">
                  <p className="text-[11px] sm:text-[10px] uppercase tracking-wider text-charcoal/55">
                    Vehicle
                  </p>
                  <p className="font-display font-semibold text-charcoal text-sm">
                    Audi RS · ABJ-247-PK
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <ul className="lg:col-span-5 space-y-5">
            {features.map(({ Icon, title, body }, i) => (
              <Reveal key={title} delay={0.1 + i * 0.08}>
                <li className="flex items-start gap-4 rounded-2xl bg-white p-5 ring-1 ring-charcoal/[0.06]">
                  <span className="flex-none inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10">
                    <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-charcoal">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm text-charcoal/65 leading-relaxed">
                      {body}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
