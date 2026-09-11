import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  Search,
  X,
} from "lucide-react";

import {
  allProducts,
  formatBDT,
} from "@/data/products";

import { useShop } from "./ShopProvider";

const SUGGESTIONS = [
  "Shirts",
  "Trousers",
  "Jackets",
  "Accessories",
  "New Arrivals",
];

export function SearchOverlay() {
  const {
    searchOpen,
    setSearchOpen,
  } = useShop();

  const [query, setQuery] =
    useState("");

  useEffect(() => {
    const handleKey = (
      event: KeyboardEvent,
    ) => {
      if (event.key === "Escape") {
        setSearchOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleKey,
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKey,
      );
  }, [setSearchOpen]);

  const results = useMemo(() => {
    const normalized =
      query.trim().toLowerCase();

    if (!normalized) {
      return [];
    }

    return allProducts
      .filter(
        (product) =>
          product.name
            .toLowerCase()
            .includes(normalized) ||
          product.category
            .toLowerCase()
            .includes(normalized),
      )
      .slice(0, 5);
  }, [query]);

  return (
    <div
      className={`fixed inset-0 z-50 ${
        searchOpen
          ? ""
          : "pointer-events-none"
      }`}
      aria-hidden={!searchOpen}
    >
      <button
        type="button"
        tabIndex={searchOpen ? 0 : -1}
        aria-label="Close search"
        onClick={() =>
          setSearchOpen(false)
        }
        className={`absolute inset-0 bg-charcoal/55 transition-opacity duration-500 ${
          searchOpen
            ? "opacity-100"
            : "opacity-0"
        }`}
      />

      <div
        className={`absolute inset-x-0 top-0 bg-ivory transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          searchOpen
            ? "translate-y-0"
            : "-translate-y-full"
        }`}
      >
        <div className="mx-auto max-w-3xl px-5 py-10 lg:py-14">
          <div className="flex items-center justify-between">
            <p className="eyebrow text-muted-foreground">
              Search RAAZ
            </p>

            <button
              type="button"
              aria-label="Close search"
              onClick={() =>
                setSearchOpen(false)
              }
              className="grid h-9 w-9 place-items-center text-charcoal"
            >
              <X
                className="h-5 w-5"
                strokeWidth={1.3}
              />
            </button>
          </div>

          <div className="mt-6 flex items-center gap-3 border-b border-forest/25 pb-4">
            <Search
              className="h-5 w-5 text-forest"
              strokeWidth={1.3}
            />

            <label
              htmlFor="site-search"
              className="sr-only"
            >
              Search products
            </label>

            <input
              id="site-search"
              value={query}
              onChange={(event) =>
                setQuery(
                  event.target.value,
                )
              }
              placeholder="What are you looking for?"
              className="w-full bg-transparent font-display text-2xl text-forest outline-none placeholder:text-forest/40 lg:text-3xl"
              autoFocus={searchOpen}
            />
          </div>

          {results.length > 0 ? (
            <ul className="mt-7 space-y-4">
              {results.map((product) => (
                <li
                  key={product.id}
                  className="flex items-center gap-4"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-16 w-14 rounded-md object-cover"
                  />

                  <div>
                    <p className="text-sm text-charcoal">
                      {product.name}
                    </p>

                    <p className="eyebrow mt-1 text-muted-foreground">
                      {product.category}
                    </p>
                  </div>

                  <span className="ml-auto text-sm text-forest">
                    {formatBDT(
                      product.price,
                    )}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-7">
              <p className="eyebrow text-muted-foreground">
                Suggested
              </p>

              <ul className="mt-4 flex flex-wrap gap-2.5">
                {SUGGESTIONS.map(
                  (suggestion) => (
                    <li key={suggestion}>
                      <button
                        type="button"
                        onClick={() =>
                          setQuery(
                            suggestion,
                          )
                        }
                        className="label-caps rounded-md border border-border px-4 py-2.5 text-[0.7rem] text-charcoal/80 transition-colors hover:border-forest hover:text-forest"
                      >
                        {suggestion}
                      </button>
                    </li>
                  ),
                )}
              </ul>

              {query && (
                <p className="mt-6 text-sm text-muted-foreground">
                  No matches for “{query}”.
                  Try one of the suggestions
                  above.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}