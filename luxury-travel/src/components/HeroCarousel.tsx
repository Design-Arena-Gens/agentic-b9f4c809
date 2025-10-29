"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import type { HeroSlide, SearchSuggestion } from "@/data/travel";
import { SearchBar } from "./SearchBar";

type HeroCarouselProps = {
  slides: HeroSlide[];
  suggestions: SearchSuggestion[];
};

const AUTOPLAY_INTERVAL = 9000;

export function HeroCarousel({ slides, suggestions }: HeroCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const slideCount = slides.length;

  useEffect(() => {
    if (isHovered || slideCount <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slideCount);
    }, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [slideCount, isHovered]);

  const activeSlide = useMemo(() => slides[activeIndex], [slides, activeIndex]);

  const goToSlide = (index: number) => {
    setActiveIndex((index + slideCount) % slideCount);
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-luxury-ink/60 shadow-[0_50px_120px_-30px_rgba(0,0,0,0.65)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            className={`absolute inset-0 transition-opacity duration-[1600ms] ease-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={index !== activeIndex}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-luxury-night/70 via-luxury-ink/65 to-black/55" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(214,178,94,0.35),transparent_55%)]" />
          </div>
        ))}
      </div>

      <div className="relative z-10 flex w-full max-w-6xl flex-col gap-10 px-6 py-20 text-luxury-ivory sm:px-12 lg:px-20">
        <p className="max-w-sm text-sm uppercase tracking-[0.4em] text-luxury-gold/90">
          Bespoke Luxury Travel Atelier
        </p>
        <div className="space-y-6" aria-live="polite">
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight drop-shadow-2xl sm:text-5xl lg:text-6xl">
            {activeSlide.title}
          </h1>
          <p className="max-w-2xl text-base text-white/80 sm:text-lg">
            {activeSlide.subtitle}
          </p>
        </div>

        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <a
            href="#booking"
            className="inline-flex items-center rounded-full border border-luxury-gold/70 bg-gradient-to-r from-luxury-gold via-luxury-gold to-luxury-gold px-8 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-luxury-night shadow-lg shadow-black/30 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luxury-gold/70"
          >
            {activeSlide.cta}
          </a>
          <p className="text-sm text-white/70">
            24/7 travel atelier concierge • Global insider access
          </p>
        </div>

        <SearchBar suggestions={suggestions} />

        <div className="flex items-center justify-between pt-6">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => goToSlide(activeIndex - 1)}
              aria-label="View previous hero destination"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/15 text-lg transition hover:border-luxury-gold/60 hover:text-luxury-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luxury-gold/60"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => goToSlide(activeIndex + 1)}
              aria-label="View next hero destination"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/15 text-lg transition hover:border-luxury-gold/60 hover:text-luxury-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luxury-gold/60"
            >
              ›
            </button>
          </div>

          <div className="flex items-center gap-3">
            {slides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-12 bg-luxury-gold"
                    : "w-4 bg-white/40 hover:bg-luxury-gold/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
