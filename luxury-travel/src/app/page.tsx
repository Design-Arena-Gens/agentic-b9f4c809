import { BookingSection } from "@/components/BookingSection";
import { HeroCarousel } from "@/components/HeroCarousel";
import { Navigation } from "@/components/Navigation";
import { ParallaxShowcase } from "@/components/ParallaxShowcase";
import { StickyFooter } from "@/components/StickyFooter";
import { Testimonials } from "@/components/Testimonials";
import { TravelCollections } from "@/components/TravelCollections";
import {
  bookingOptions,
  curatedCollections,
  destinations,
  exclusiveOffers,
  guestStories,
  heroSlides,
  searchIndex,
  travelStyles,
} from "@/data/travel";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[120rem] flex-col gap-10 px-4 pb-32 pt-8 sm:px-8 lg:px-12">
      <Navigation
        destinations={destinations}
        travelStyles={travelStyles}
        exclusiveOffers={exclusiveOffers}
      />

      <main className="flex flex-col gap-24">
        <HeroCarousel slides={heroSlides} suggestions={searchIndex} />
        <TravelCollections collections={curatedCollections} />
        <ParallaxShowcase />
        <BookingSection options={bookingOptions} />
        <Testimonials testimonials={guestStories} />
      </main>

      <StickyFooter />
    </div>
  );
}
