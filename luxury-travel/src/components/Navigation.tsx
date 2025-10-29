"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { LinkDetail } from "@/data/travel";

type NavigationProps = {
  destinations: LinkDetail[];
  travelStyles: LinkDetail[];
  exclusiveOffers: LinkDetail[];
};

type MenuKey = "destinations" | "styles" | "offers";

const brandName = "Elysian Escapes";

const menuConfig: Record<MenuKey, { label: string; description: string }> = {
  destinations: {
    label: "Destinations",
    description: "Signature locales handpicked by our travel curators.",
  },
  styles: {
    label: "Travel Styles",
    description: "Tailor each voyage to your personal rhythm and passion.",
  },
  offers: {
    label: "Exclusive Offers",
    description: "Limited-time privileges in collaboration with our partners.",
  },
};

const MenuIcon = ({ isOpen }: { isOpen: boolean }) => (
  <span
    className={`ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/30 text-xs transition-transform duration-300 ${
      isOpen ? "rotate-180 bg-white/15" : "bg-white/10"
    }`}
    aria-hidden="true"
  >
    ▾
  </span>
);

export function Navigation({
  destinations,
  travelStyles,
  exclusiveOffers,
}: NavigationProps) {
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getMenuItems = (key: MenuKey) => {
    switch (key) {
      case "destinations":
        return destinations;
      case "styles":
        return travelStyles;
      case "offers":
        return exclusiveOffers;
      default:
        return [];
    }
  };

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-40 flex flex-col backdrop-blur-xl"
    >
      <div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-br from-luxury-night/85 via-luxury-ink/80 to-luxury-deep/75 px-6 py-4 sm:px-10">
        <div className="flex items-center gap-6">
          <Link href="#hero" className="group flex items-center gap-3" aria-label="Go to homepage">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-lg font-semibold text-luxury-gold shadow-lg shadow-black/30 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl">
              EE
            </span>
            <div className="flex flex-col">
              <span className="font-display text-lg font-semibold tracking-[0.2em] uppercase text-luxury-soft-ivory">
                {brandName}
              </span>
              <span className="text-xs uppercase tracking-[0.35em] text-white/60">
                Curated by Atelier Voyage
              </span>
            </div>
          </Link>
        </div>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {(Object.keys(menuConfig) as MenuKey[]).map((key) => {
            const menu = menuConfig[key];
            const isOpen = openMenu === key;
            const items = getMenuItems(key);

            return (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => setOpenMenu(key)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  type="button"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-luxury-soft-ivory transition hover:border-luxury-gold/80 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luxury-gold/70"
                  aria-haspopup="menu"
                  aria-expanded={isOpen}
                  onClick={() => setOpenMenu(isOpen ? null : key)}
                >
                  {menu.label}
                  <MenuIcon isOpen={isOpen} />
                </button>

                <div
                  className={`absolute left-1/2 mt-4 hidden w-[22rem] -translate-x-1/2 rounded-3xl border border-white/15 bg-luxury-ink/95 p-6 shadow-2xl shadow-black/50 backdrop-blur-xl transition-opacity duration-200 ${
                    isOpen ? "lg:block" : ""
                  }`}
                >
                  <p className="mb-4 text-xs uppercase tracking-[0.35em] text-luxury-gold/80">
                    {menu.description}
                  </p>
                  <ul className="flex flex-col gap-4" role="menu">
                    {items.map((item) => (
                      <li key={item.name} role="none">
                        <Link
                          href={item.href}
                          role="menuitem"
                          className="group flex items-start gap-3 rounded-2xl border border-transparent px-3 py-2 transition duration-200 hover:border-luxury-gold/60 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luxury-gold/70"
                          onClick={() => setOpenMenu(null)}
                        >
                          <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-luxury-gold/80" aria-hidden="true" />
                          <span className="flex flex-col">
                            <span className="text-sm font-semibold text-white">
                              {item.name}
                            </span>
                            <span className="text-xs text-white/70">
                              {item.description}
                            </span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="#booking"
            className="rounded-full border border-luxury-gold/70 bg-gradient-to-r from-luxury-gold/80 via-luxury-gold to-luxury-gold/80 px-6 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-luxury-night shadow-lg shadow-black/40 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-luxury-night focus-visible:ring-luxury-gold"
          >
            Plan a Journey
          </a>
        </div>

        <button
          type="button"
          aria-label="Open navigation menu"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:border-luxury-gold/70 hover:text-luxury-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luxury-gold/70 lg:hidden"
          onClick={() => setOpenMenu(openMenu ? null : "destinations")}
        >
          <span className="text-xl">≡</span>
        </button>
      </div>

      <div
        className={`border-b border-white/10 bg-luxury-ink/85 px-6 py-6 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          openMenu ? "max-h-[600px] opacity-100" : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        {(Object.keys(menuConfig) as MenuKey[]).map((key) => {
          const menu = menuConfig[key];
          const items = getMenuItems(key);
          return (
            <div key={key} className="mb-6 last:mb-0">
              <p className="text-sm font-semibold text-white">{menu.label}</p>
              <p className="text-xs text-white/60">{menu.description}</p>
              <ul className="mt-3 space-y-3">
                {items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="block rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-sm text-white/90 transition hover:border-luxury-gold/60 hover:text-white"
                      onClick={() => setOpenMenu(null)}
                    >
                      <span className="block font-semibold">{item.name}</span>
                      <span className="text-xs text-white/60">{item.description}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
        <a
          href="#booking"
          className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-luxury-gold/70 bg-gradient-to-r from-luxury-gold/90 via-luxury-gold to-luxury-gold/80 px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-luxury-night shadow-lg shadow-black/40"
        >
          Plan a Journey
        </a>
      </div>
    </header>
  );
}
