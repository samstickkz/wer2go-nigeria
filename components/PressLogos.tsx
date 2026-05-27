import { Reveal } from "./Reveal";

const outlets = [
  "TechCabal",
  "Nairametrics",
  "Stears",
  "Disrupt Africa",
  "BusinessDay",
  "Premium Times",
];

export default function PressLogos() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-12">
        <Reveal>
          <p className="text-center text-[11px] uppercase tracking-wider text-charcoal/45 font-semibold">
            As featured in
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {outlets.map((o) => (
              <span
                key={o}
                className="font-display font-semibold text-base sm:text-lg text-charcoal/35 hover:text-charcoal/65 transition-colors"
              >
                {o}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
