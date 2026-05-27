import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { Reveal } from "./Reveal";

type Testimonial = {
  name: string;
  role: string;
  rating: number;
  body: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Chiamaka N.",
    role: "Daily commuter · Lekki, Lagos",
    rating: 5,
    body: "Locked fare from Ikate to Victoria Island, even at 7 PM go-slow. I&apos;m never going back to surge pricing.",
  },
  {
    name: "Tunde O.",
    role: "Fleet partner · Trans-Amadi, Port Harcourt",
    rating: 5,
    body: "Moved two cars over from a competitor last quarter. Weekly payouts hit on time and dispatch keeps drivers busy across GRA and Mile 1.",
  },
  {
    name: "Aisha B.",
    role: "Frequent flyer · Maitama, Abuja",
    rating: 5,
    body: "I book my airport runs the night before. Driver shows up early every single time and the fare never changes between booking and the gate.",
  },
];

function Avatar({ name }: { name: string }) {
  const url = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    name,
  )}&background=F2683C&color=fff&size=160&font-size=0.42&bold=true`;
  return (
    <Image
      src={url}
      alt=""
      width={48}
      height={48}
      className="h-12 w-12 rounded-full object-cover"
      unoptimized
    />
  );
}

export default function Testimonials() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-18 lg:py-20">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-wider text-brand font-semibold">
              From the road
            </p>
            <h2 className="mt-3 font-display font-bold text-charcoal text-3xl sm:text-4xl lg:text-5xl">
              What riders and drivers say.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-charcoal/65 leading-relaxed">
              Real stories from every corner of Nigeria — Lagos to Abuja, Port
              Harcourt to Kano.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <article className="rounded-3xl bg-cream p-6 sm:p-7 flex flex-col h-full">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Avatar name={t.name} />
                    <div>
                      <p className="font-display font-semibold text-charcoal text-sm">
                        {t.name}
                      </p>
                      <div
                        className="mt-1 flex items-center gap-0.5"
                        aria-label={`Rated ${t.rating} of 5`}
                      >
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <Star
                            key={idx}
                            className={`h-3.5 w-3.5 ${
                              idx < t.rating
                                ? "text-highlight fill-highlight"
                                : "text-charcoal/20"
                            }`}
                            aria-hidden="true"
                          />
                        ))}
                        <span className="ml-1 text-[11px] font-medium text-charcoal/60">
                          {t.rating}.0
                        </span>
                      </div>
                    </div>
                  </div>
                  <Quote
                    className="h-7 w-7 text-charcoal/15"
                    aria-hidden="true"
                  />
                </div>
                <p
                  className="mt-5 text-sm text-charcoal/75 leading-relaxed flex-1"
                  dangerouslySetInnerHTML={{ __html: t.body }}
                />
                <p className="mt-4 text-xs uppercase tracking-wider text-charcoal/50">
                  {t.role}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
