import Image from "next/image";
import type { TravelCollection } from "@/data/travel";

type TravelCollectionsProps = {
  collections: TravelCollection[];
};

export function TravelCollections({ collections }: TravelCollectionsProps) {
  return (
    <section
      id="collections"
      className="relative mt-24 flex flex-col gap-10 rounded-[3rem] border border-white/10 bg-gradient-to-br from-luxury-ink/80 via-luxury-night/85 to-luxury-ink/70 p-10 shadow-[0_40px_100px_-45px_rgba(0,0,0,0.65)] backdrop-blur-xl sm:p-14"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-luxury-gold/85">
            Curated Collections
          </p>
          <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
            Journeys designed for your signature story
          </h2>
        </div>
        <p className="max-w-xl text-sm text-white/70">
          Each collection is an invitation—crafted with our global partners, concierge network, and on-the-ground tastemakers to reveal the world&apos;s most coveted experiences.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {collections.map((collection) => (
          <article
            key={collection.title}
            className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-lg shadow-black/40 transition duration-500 hover:-translate-y-2 hover:shadow-[0_35px_90px_-35px_rgba(3,10,28,0.85)]"
          >
            <div className="relative h-60 w-full overflow-hidden">
              <Image
                src={collection.image}
                alt={collection.alt}
                fill
                sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute left-5 top-5 inline-flex items-center rounded-full border border-white/30 bg-black/50 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/80">
                {collection.tag}
              </span>
              <span className="absolute inset-0 bg-gradient-to-t from-luxury-night/70 via-transparent to-transparent" aria-hidden="true" />
            </div>

            <div className="flex flex-1 flex-col gap-4 p-6">
              <h3 className="text-xl font-semibold text-white">
                {collection.title}
              </h3>
              <p className="text-sm text-white/70">{collection.description}</p>
              <div className="mt-auto flex items-center justify-between">
                <a
                  href={collection.href}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-luxury-gold transition hover:text-white"
                >
                  Explore
                  <span aria-hidden="true" className="text-sm">
                    →
                  </span>
                </a>
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-white/50">
                  <span className="h-1 w-1 rounded-full bg-luxury-gold/70" />
                  <span>Concierge Exclusive</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
