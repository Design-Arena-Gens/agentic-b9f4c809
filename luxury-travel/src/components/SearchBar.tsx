"use client";

import { useCallback, useMemo, useState } from "react";
import type { SearchSuggestion } from "@/data/travel";

type SearchBarProps = {
  suggestions: SearchSuggestion[];
};

export function SearchBar({ suggestions }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isFocused, setIsFocused] = useState(false);

  const filtered = useMemo(() => {
    if (!query.trim()) return suggestions.slice(0, 6);
    const q = query.toLowerCase();
    return suggestions
      .filter((item) => item.label.toLowerCase().includes(q))
      .slice(0, 6);
  }, [query, suggestions]);

  const selectSuggestion = useCallback((item: SearchSuggestion) => {
    setQuery(item.label);
    setActiveIndex(-1);
    setIsFocused(false);
    window.location.href = item.href;
  }, []);

  return (
    <div className="w-full max-w-3xl">
      <label className="sr-only" htmlFor="travel-search">
        Search destinations, travel styles, and curated collections
      </label>
      <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/15 shadow-[0_25px_60px_-25px_rgba(0,0,0,0.7)] backdrop-blur-xl">
        <div className="flex items-center gap-4 px-6 py-4">
          <span aria-hidden="true" className="text-xl text-luxury-gold">
            ✈︎
          </span>
          <input
            id="travel-search"
            type="search"
            autoComplete="off"
            placeholder="Search for destinations, travel styles, or exclusive offers"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setActiveIndex(-1);
            }}
            onKeyDown={(event) => {
              if (event.key === "ArrowDown") {
                event.preventDefault();
                setActiveIndex((prev) =>
                  prev < filtered.length - 1 ? prev + 1 : filtered.length - 1,
                );
              }
              if (event.key === "ArrowUp") {
                event.preventDefault();
                setActiveIndex((prev) => (prev > 0 ? prev - 1 : 0));
              }
              if (event.key === "Enter" && activeIndex >= 0) {
                event.preventDefault();
                const item = filtered[activeIndex];
                if (item) {
                  selectSuggestion(item);
                }
              }
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => {
              // Delay blur to let click events on suggestions register
              setTimeout(() => setIsFocused(false), 100);
            }}
            className="w-full border-none bg-transparent text-base text-white placeholder:text-white/60 focus:outline-none"
            aria-autocomplete="list"
            aria-expanded={isFocused && filtered.length > 0}
            aria-controls="search-suggestions"
            role="combobox"
          />
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-luxury-gold/60 bg-gradient-to-r from-luxury-gold/80 to-luxury-gold px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-luxury-night transition-colors hover:from-luxury-gold hover:to-luxury-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luxury-gold/60"
            onClick={() => {
              if (filtered[0]) {
                selectSuggestion(filtered[0]);
              }
            }}
          >
            Inspire Me
          </button>
        </div>

        {isFocused && filtered.length > 0 && (
          <ul
            id="search-suggestions"
            role="listbox"
            className="border-t border-white/15 bg-luxury-ink/90 py-2"
          >
            {filtered.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <li key={item.label} role="option" aria-selected={isActive}>
                  <button
                    type="button"
                    onMouseDown={(event) => {
                      event.preventDefault();
                      selectSuggestion(item);
                    }}
                    onMouseEnter={() => setActiveIndex(index)}
                    className={`flex w-full items-center justify-between gap-4 px-6 py-3 text-left transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luxury-gold/60 ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-transparent text-white/80 hover:bg-white/10"
                    }`}
                  >
                    <div>
                      <p className="text-sm font-semibold">{item.label}</p>
                      <p className="text-xs text-white/60">{item.category}</p>
                    </div>
                    <span className="text-xs uppercase tracking-[0.35em] text-luxury-gold">
                      Explore
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
