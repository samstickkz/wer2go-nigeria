import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { CITIES } from "@/lib/cities";
import { Reveal } from "./Reveal";

export default function CitiesServed() {
  return (
    <section id="cities" className="bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-16">
        <Reveal>
          <p className="text-xs uppercase tracking-wider text-brand-dark font-semibold">
            Live in {CITIES.length} Nigerian cities
          </p>
          <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-charcoal">
            Cities we serve.
          </h2>
          <p className="mt-4 max-w-xl text-charcoal/65 leading-relaxed">
            From the Lagos go-slow to the calm of Uyo — book a wer2 GO ride in
            your city, with verified drivers and upfront fare estimates.
          </p>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CITIES.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.06}>
              <Link
                href={`/${c.slug}`}
                className="group flex items-center justify-between gap-4 rounded-2xl bg-white p-5 ring-1 ring-charcoal/10 hover:ring-brand transition-all hover:-translate-y-0.5"
              >
                <span>
                  <span className="flex items-center gap-2 font-display font-semibold text-charcoal">
                    <MapPin
                      className="h-4 w-4 text-brand-dark"
                      aria-hidden="true"
                    />
                    {c.name}
                  </span>
                  <span className="mt-1 block text-sm text-charcoal/55">
                    {c.state}
                  </span>
                </span>
                <ArrowRight
                  className="h-5 w-5 flex-none text-charcoal/30 group-hover:text-brand-dark group-hover:translate-x-0.5 transition-all"
                  aria-hidden="true"
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
