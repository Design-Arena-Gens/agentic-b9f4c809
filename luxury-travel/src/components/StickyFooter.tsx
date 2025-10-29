export function StickyFooter() {
  return (
    <footer className="sticky bottom-0 z-30 mt-24 flex flex-col gap-6 border-t border-white/10 bg-gradient-to-r from-luxury-ink/85 via-luxury-night/80 to-luxury-ink/85 px-6 py-6 shadow-[0_-25px_80px_-40px_rgba(0,0,0,0.8)] backdrop-blur-2xl sm:px-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-luxury-gold/80">
            Stay in the circle
          </p>
          <p className="text-sm text-white/70">
            Receive quarterly intelligence on emerging destinations, private previews, and invitation-only offers.
          </p>
        </div>

        <form
          className="flex w-full flex-col gap-3 text-sm sm:flex-row sm:items-center sm:gap-4 lg:max-w-xl"
          action="#"
          method="post"
          noValidate
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="Enter your email for bespoke updates"
            className="w-full rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/60 focus:border-luxury-gold/70 focus:outline-none focus:ring-2 focus:ring-luxury-gold/60"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full border border-luxury-gold/70 bg-gradient-to-r from-luxury-gold/80 via-luxury-gold to-luxury-gold/80 px-5 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-luxury-night shadow-lg shadow-black/30 transition hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luxury-gold/70"
          >
            Subscribe
          </button>
        </form>
      </div>

      <div className="flex flex-col gap-4 border-t border-white/10 pt-4 text-xs uppercase tracking-[0.35em] text-white/50 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} Elysian Escapes. Crafted by global travel artisans.
        </p>
        <nav aria-label="Social media" className="flex items-center gap-4 text-white/70">
          <a href="https://www.instagram.com" className="transition hover:text-luxury-gold" aria-label="Visit our Instagram">
            Instagram
          </a>
          <a href="https://www.pinterest.com" className="transition hover:text-luxury-gold" aria-label="Visit our Pinterest">
            Pinterest
          </a>
          <a href="https://www.linkedin.com" className="transition hover:text-luxury-gold" aria-label="Visit our LinkedIn">
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
}
