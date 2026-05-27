import { Smartphone, QrCode } from "lucide-react";
import { AppStoreBadge, GooglePlayBadge } from "./AppStoreBadges";
import { Reveal } from "./Reveal";

export default function FindCities() {
  return (
    <section id="download" className="bg-teal-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-16">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-wider text-highlight font-semibold">
                Get the app
              </p>
              <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl lg:text-5xl">
                Download wer2 GO.
              </h2>
              <p className="mt-4 max-w-xl text-base text-white/75 leading-relaxed">
                Free on iOS and Android. Sign up with your Nigerian phone
                number, verify with NIN, and you&apos;re ready to ride
                anywhere from Lagos to Maiduguri.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <AppStoreBadge />
                <GooglePlayBadge />
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 sm:p-8 flex items-center gap-5">
                <div className="flex-none rounded-2xl bg-white p-3">
                  <div className="h-24 w-24 rounded-lg bg-white text-charcoal flex items-center justify-center">
                    <QrCode className="h-20 w-20" aria-hidden="true" />
                  </div>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/55 font-semibold">
                    Scan to install
                  </p>
                  <p className="mt-2 font-display font-semibold text-lg">
                    Point your camera here.
                  </p>
                  <p className="mt-1 text-sm text-white/65 leading-relaxed">
                    Auto-routes you to App Store or Google Play.
                  </p>
                </div>
              </div>

              <p className="mt-4 text-xs text-white/55 flex items-center gap-2">
                <Smartphone className="h-3.5 w-3.5" aria-hidden="true" />
                Sample placeholder — final design follows your sample.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
