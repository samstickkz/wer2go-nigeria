import { ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { HOMEPAGE_FAQS } from "@/lib/faqs";

export default function Faq() {
  return (
    <section id="faq" className="bg-white scroll-mt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-16">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-wider text-brand font-semibold">
              Questions
            </p>
            <h2 className="mt-3 font-display font-bold text-charcoal text-3xl sm:text-4xl">
              Frequently asked questions.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-charcoal/65 leading-relaxed">
              Everything riders ask us before their first trip with wer2 GO.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 divide-y divide-charcoal/10">
          {HOMEPAGE_FAQS.map((f) => (
            <details key={f.q} className="group py-4">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-display font-semibold text-charcoal list-none">
                {f.q}
                <ChevronRight className="h-5 w-5 flex-none text-brand-dark transition-transform group-open:rotate-90" />
              </summary>
              <p className="mt-3 text-charcoal/70 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
