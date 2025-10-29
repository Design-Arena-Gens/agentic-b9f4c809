const showcaseImage =
  "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=1920&q=80";

export function ParallaxShowcase() {
  return (
    <section
      id="parallax"
      className="relative mt-24 overflow-hidden rounded-[3rem] border border-white/10 bg-luxury-ink/80 shadow-[0_45px_110px_-45px_rgba(0,0,0,0.7)]"
      aria-labelledby="parallax-heading"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[2500ms] ease-out lg:bg-fixed"
        style={{ backgroundImage: `url(${showcaseImage})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-luxury-night/85 via-black/70 to-luxury-ink/80" aria-hidden="true" />

      <div className="relative z-10 flex flex-col gap-10 px-8 py-20 sm:px-14 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-luxury-gold/80">
            Insider Access
          </p>
          <h2 id="parallax-heading" className="text-3xl font-semibold sm:text-4xl">
            Unlock private worlds after the velvet ropes close
          </h2>
          <p className="text-sm text-white/75 sm:text-base">
            From Dior ateliers to Maori cultural guardians and Michelin guest chef residencies, we orchestrate every detail with partners who open doors that remain closed to the world at large. Our travel architects craft immersive storylines long before departure.
          </p>
        </div>
        <div className="flex flex-col gap-5 rounded-[2.5rem] border border-white/15 bg-white/5 p-8 text-white/80 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.7)] backdrop-blur-xl sm:max-w-sm">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-luxury-gold/90">
              Signature Privileges
            </p>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span aria-hidden="true" className="mt-1 h-1.5 w-1.5 rounded-full bg-luxury-gold" />
                Multi-continent itineraries curated by former hotel GMs and cultural historians.
              </li>
              <li className="flex items-start gap-3">
                <span aria-hidden="true" className="mt-1 h-1.5 w-1.5 rounded-full bg-luxury-gold" />
                On-call experience stylists for wardrobe, wellness, and culinary personalization.
              </li>
              <li className="flex items-start gap-3">
                <span aria-hidden="true" className="mt-1 h-1.5 w-1.5 rounded-full bg-luxury-gold" />
                Transparent pricing with exclusive affiliate partnerships and added-value amenities.
              </li>
            </ul>
          </div>
          <a
            href="#booking"
            className="inline-flex items-center justify-center rounded-full border border-luxury-gold/70 bg-gradient-to-r from-luxury-gold/80 to-luxury-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-luxury-night shadow-lg shadow-black/30 transition hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luxury-gold/70"
          >
            Consult an Atelier Curator
          </a>
        </div>
      </div>
    </section>
  );
}
