import { useEffect, useState } from "react";
import {
  Heart,
  Menu,
  Moon,
  Search,
  ShoppingBag,
  Sun,
  User,
} from "lucide-react";

import { useShop } from "./ShopProvider";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "New In", href: "#new-in" },
  { label: "Women", href: "#collection" },
  { label: "Men", href: "#collection" },
  { label: "Accessories", href: "#collection" },
  { label: "Collections", href: "#collection" },
];

export function Navbar() {
  const {
    count,
    setCartOpen,
    setSearchOpen,
    setMenuOpen,
    wishlist,
  } = useShop();

  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("arshi-nagar-theme");
    const shouldUseDark =
      savedTheme === "dark" ||
      (!savedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setDarkMode(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("arshi-nagar-theme", next ? "dark" : "light");
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-all duration-500",
        scrolled
          ? "border-border/70 bg-ivory/95 backdrop-blur-md"
          : "border-transparent bg-ivory",
      )}
    >
      <nav
        aria-label="Main"
        className={cn(
          "mx-auto flex max-w-[1500px] items-center justify-between px-5 transition-all duration-500 lg:px-10",
          scrolled ? "h-16" : "h-20 lg:h-24",
        )}
      >
        <div className="flex flex-1 items-center gap-2 lg:hidden">
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className="grid h-10 w-10 place-items-center text-charcoal transition-colors hover:text-forest"
          >
            <Menu className="h-5 w-5" strokeWidth={1.3} />
          </button>
        </div>

        <a
          href="#top"
          aria-label="Arshi Nagar home"
          className="mr-auto font-display text-[1.65rem] font-medium tracking-[0.08em] text-forest dark:text-ivory lg:w-[240px] lg:flex-none lg:text-[1.65rem]"
        >
          <div className="lg:-translate-x-35">
          <span className="text-forest dark:text-forest">Arshi</span>
          <span className="ml-[0.22em] text-charcoal dark:text-gold">
            Nagar
          </span>
        </div>
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="link-underline label-caps text-[0.7rem] text-charcoal/80 transition-colors hover:text-forest"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-1 items-center justify-end gap-1 sm:gap-2">
          <button
            type="button"
            aria-label="Search"
            onClick={() => setSearchOpen(true)}
            className="grid h-10 w-10 place-items-center text-charcoal transition-colors hover:text-forest"
          >
            <Search className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.3} />
          </button>

          <button
            type="button"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            onClick={toggleTheme}
            className="grid h-10 w-10 place-items-center text-charcoal transition-colors hover:text-forest"
          >
            {darkMode ? (
              <Sun className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.3} />
            ) : (
              <Moon className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.3} />
            )}
          </button>

          <button
            type="button"
            aria-label="Account"
            className="hidden h-10 w-10 place-items-center text-charcoal transition-colors hover:text-forest sm:grid"
          >
            <User className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.3} />
          </button>

          <button
            type="button"
            aria-label={`Wishlist, ${wishlist.length} items`}
            className="relative hidden h-10 w-10 place-items-center text-charcoal transition-colors hover:text-forest sm:grid"
          >
            <Heart className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.3} />
            {wishlist.length > 0 && (
              <span className="absolute right-1 top-1.5 h-1.5 w-1.5 rounded-full bg-gold" />
            )}
          </button>

          <button
            type="button"
            aria-label={`Shopping bag, ${count} items`}
            onClick={() => setCartOpen(true)}
            className="relative grid h-10 w-10 place-items-center text-charcoal transition-colors hover:text-forest"
          >
            <ShoppingBag className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.3} />
            <span className="absolute -right-0.5 top-1 grid h-[18px] min-w-[18px] place-items-center rounded-full bg-forest px-1 text-[0.6rem] font-medium text-ivory">
              {count}
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}
