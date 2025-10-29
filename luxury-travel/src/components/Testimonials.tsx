import type { Testimonial } from "@/data/travel";

type TestimonialsProps = {
  testimonials: Testimonial[];
};

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1" aria-label={`${rating} out of 5 star rating`}>
    {Array.from({ length: 5 }).map((_, index) => (
      <span
        key={index}
        aria-hidden="true"
        className={`text-lg ${index < rating ? "text-luxury-gold" : "text-white/20"}`}
      >
        ★
      </span>
    ))}
  </div>
);

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section
      id="testimonials"
      className="relative mt-24 rounded-[3rem] border border-white/10 bg-gradient-to-br from-luxury-ink/80 via-luxury-night/75 to-luxury-ink/70 p-10 shadow-[0_40px_105px_-45px_rgba(0,0,0,0.7)] backdrop-blur-xl sm:p-14"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-luxury-gold/85">
            Guest Narratives
          </p>
          <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
            Endorsements from our discerning travellers
          </h2>
        </div>
        <p className="max-w-xl text-sm text-white/70">
          Every itinerary is thoughtfully documented, measured, and refined through first-hand feedback. Explore stories from leaders, creatives, and families who entrusted us with milestone journeys.
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.guest}
            className="group flex h-full flex-col justify-between gap-6 rounded-[2.5rem] border border-white/10 bg-white/5 p-8 text-white shadow-lg shadow-black/40 transition duration-300 hover:-translate-y-2 hover:shadow-[0_38px_90px_-45px_rgba(3,10,28,0.85)]"
          >
            <blockquote className="space-y-4 text-sm text-white/75">
              <StarRating rating={testimonial.rating} />
              <p className="text-base text-white/90">“{testimonial.quote}”</p>
            </blockquote>
            <figcaption className="border-t border-white/10 pt-5 text-sm text-white/70">
              <p className="font-semibold text-white">{testimonial.guest}</p>
              <p>{testimonial.title}</p>
              <p className="text-xs uppercase tracking-[0.35em] text-luxury-gold/80">
                {testimonial.location}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
