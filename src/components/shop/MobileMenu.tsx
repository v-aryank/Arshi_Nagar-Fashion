import { X } from "lucide-react";

import { useShop } from "./ShopProvider";

const LINKS = [
  { label: "New In", href: "#new-in" },
  { label: "Women", href: "#collection" },
  { label: "Men", href: "#collection" },
  { label: "Accessories", href: "#collection" },
  { label: "Collections", href: "#collection" },
];

export function MobileMenu() {
  const {
    menuOpen,
    setMenuOpen,
  } = useShop();

  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden ${
        menuOpen
          ? ""
          : "pointer-events-none"
      }`}
      aria-hidden={!menuOpen}
    >
      <button
        type="button"
        tabIndex={menuOpen ? 0 : -1}
        aria-label="Close menu"
        onClick={() => setMenuOpen(false)}
        className={`absolute inset-0 bg-charcoal/50 transition-opacity duration-500 ${
          menuOpen
            ? "opacity-100"
            : "opacity-0"
        }`}
      />

      <div
        className={`absolute inset-y-0 left-0 flex w-[86%] max-w-sm flex-col bg-ivory transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          menuOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <span className="font-display text-xl tracking-[0.35em] text-forest">
            ARSHI NAGAR
          </span>

          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="grid h-9 w-9 place-items-center text-charcoal"
          >
            <X
              className="h-5 w-5"
              strokeWidth={1.3}
            />
          </button>
        </div>

        <nav
          aria-label="Mobile"
          className="flex-1 px-6 py-8"
        >
          <ul className="space-y-6">
            {LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() =>
                    setMenuOpen(false)
                  }
                  className="font-display text-3xl text-forest"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-border px-6 py-6">
          <p className="eyebrow text-muted-foreground">
            Crafted for those who move differently.
          </p>
        </div>
      </div>
    </div>
  );
}