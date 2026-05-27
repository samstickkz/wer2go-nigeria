import Image from "next/image";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Reveal } from "./Reveal";

type Post = {
  date: string;
  title: string;
  href: string;
  image: string;
  imageAlt: string;
};

const posts: Post[] = [
  {
    date: "May 22, 2026",
    title: "Why wer2 GO took the long road into Kano before Lagos",
    href: "#blog/kano-before-lagos",
    image: "/brand/ng-aso-rock.jpg",
    imageAlt: "Aso Rock, Abuja",
  },
  {
    date: "May 14, 2026",
    title: "Inside the locked-fare engine — how we killed peak-hour surge",
    href: "#blog/locked-fare",
    image: "/brand/ng-lekki-bridge.jpg",
    imageAlt: "Lekki-Ikoyi Link Bridge, Lagos",
  },
  {
    date: "April 30, 2026",
    title: "How a 10% commission changes a driver's month in Port Harcourt",
    href: "#blog/driver-economics",
    image: "/brand/ng-port-harcourt.jpg",
    imageAlt: "Port Harcourt skyline",
  },
];

export default function BlogPosts() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-18 lg:py-20">
        <Reveal>
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-wider text-brand font-semibold">
                From the wer2 GO blog
              </p>
              <h2 className="mt-3 font-display font-bold text-charcoal text-3xl sm:text-4xl lg:text-5xl">
                Stories from the road.
              </h2>
            </div>
            <a
              href="#blog"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand-dark transition-colors"
            >
              All stories
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <article className="group rounded-3xl overflow-hidden bg-cream flex flex-col h-full">
                <div className="relative aspect-[5/3] w-full overflow-hidden bg-teal-deep">
                  <Image
                    src={p.image}
                    alt={p.imageAlt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute bottom-2 right-2 rounded-full bg-charcoal/65 backdrop-blur px-2 py-0.5 text-[10px] uppercase tracking-wider font-medium text-white">
                    {p.imageAlt}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="inline-flex items-center gap-2 text-xs text-charcoal/55">
                    <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                    {p.date}
                  </p>
                  <h3 className="mt-3 font-display font-semibold text-charcoal text-lg leading-snug flex-1">
                    {p.title}
                  </h3>
                  <a
                    href={p.href}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand-dark transition-colors"
                  >
                    Read more
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
