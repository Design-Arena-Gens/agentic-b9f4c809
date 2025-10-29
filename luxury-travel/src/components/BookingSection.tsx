import type { BookingOption } from "@/data/travel";

type BookingSectionProps = {
  options: BookingOption[];
};

export function BookingSection({ options }: BookingSectionProps) {
  return (
    <section
      id="booking"
      className="relative mt-24 rounded-[3rem] border border-white/10 bg-gradient-to-br from-luxury-ink/85 via-luxury-night/80 to-luxury-ink/75 p-10 shadow-[0_45px_110px_-45px_rgba(0,0,0,0.7)] backdrop-blur-xl sm:p-14"
      aria-labelledby="booking-heading"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-luxury-gold/85">
            Booking Suite
          </p>
          <h2 id="booking-heading" className="mt-2 text-3xl font-semibold sm:text-4xl">
            Seamless concierge booking with transparent value
          </h2>
        </div>
        <p className="max-w-xl text-sm text-white/70">
          Browse a sampling of limited availability journeys curated with our exclusive affiliate partners. Pricing reflects double occupancy and includes signature amenities negotiated on your behalf.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {options.map((option) => (
          <article
            key={option.name}
            className="group flex h-full flex-col justify-between gap-6 rounded-[2.5rem] border border-white/10 bg-white/5 p-8 text-white shadow-lg shadow-black/40 transition duration-300 hover:-translate-y-2 hover:shadow-[0_40px_95px_-45px_rgba(3,10,28,0.85)]"
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-white">{option.name}</h3>
                <span className="rounded-full border border-luxury-gold/70 bg-white/10 px-4 py-1 text-[10px] uppercase tracking-[0.35em] text-luxury-gold">
                  {option.duration}
                </span>
              </div>
              <p className="text-sm uppercase tracking-[0.35em] text-luxury-gold/80">
                {option.destination}
              </p>
              <p className="text-sm text-white/70">{option.description}</p>
            </div>

            <div className="space-y-5">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">Includes</p>
                <ul className="mt-3 space-y-2 text-sm text-white/75">
                  {option.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span aria-hidden="true" className="mt-1 h-1.5 w-1.5 rounded-full bg-luxury-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-between border-t border-white/10 pt-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/60">From</p>
                  <p className="text-lg font-semibold text-luxury-gold">{option.price}</p>
                </div>
                <p className="text-xs text-white/60">{option.availability}</p>
              </div>
              <a
                href={option.affiliateUrl}
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex items-center justify-center rounded-full border border-luxury-gold/70 bg-gradient-to-r from-luxury-gold/80 via-luxury-gold to-luxury-gold/80 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-luxury-night shadow-lg shadow-black/30 transition hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luxury-gold/70"
              >
                Reserve via Affiliate Partner
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
