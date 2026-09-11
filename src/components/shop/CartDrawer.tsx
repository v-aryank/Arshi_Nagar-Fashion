import {
  Minus,
  Plus,
  X,
} from "lucide-react";

import {
  formatBDT,
} from "@/data/products";

import { useShop } from "./ShopProvider";

export function CartDrawer() {
  const {
    cartOpen,
    setCartOpen,
    cart,
    setQty,
    removeFromCart,
    subtotal,
  } = useShop();

  return (
    <div
      className={`fixed inset-0 z-50 ${
        cartOpen
          ? ""
          : "pointer-events-none"
      }`}
      aria-hidden={!cartOpen}
    >
      <button
        type="button"
        tabIndex={cartOpen ? 0 : -1}
        aria-label="Close bag"
        onClick={() =>
          setCartOpen(false)
        }
        className={`absolute inset-0 bg-charcoal/55 transition-opacity duration-500 ${
          cartOpen
            ? "opacity-100"
            : "opacity-0"
        }`}
      />

      <aside
        aria-label="Shopping bag"
        className={`absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-ivory transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          cartOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <h2 className="label-caps text-charcoal">
            Your Bag
          </h2>

          <button
            type="button"
            aria-label="Close bag"
            onClick={() =>
              setCartOpen(false)
            }
            className="grid h-9 w-9 place-items-center text-charcoal"
          >
            <X
              className="h-5 w-5"
              strokeWidth={1.3}
            />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {cart.length === 0 ? (
            <div className="py-10 text-center">
              <p className="font-display text-3xl text-forest">
                Your bag is empty.
              </p>

              <p className="mt-3 text-sm text-muted-foreground">
                Explore the Signature Edit
                to begin.
              </p>
            </div>
          ) : (
            <ul className="space-y-6">
              {cart.map((line) => (
                <li
                  key={line.id}
                  className="flex gap-4"
                >
                  <img
                    src={line.image}
                    alt={line.name}
                    loading="lazy"
                    className="h-28 w-24 rounded-md object-cover"
                  />

                  <div className="flex flex-1 flex-col">
                    <p className="text-sm text-charcoal">
                      {line.name}
                    </p>

                    <p className="eyebrow mt-1 text-muted-foreground">
                      {line.category}
                    </p>

                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center border border-border">
                        <button
                          type="button"
                          aria-label={`Decrease quantity of ${line.name}`}
                          onClick={() =>
                            setQty(
                              line.id,
                              line.qty - 1,
                            )
                          }
                          className="grid h-8 w-8 place-items-center text-charcoal"
                        >
                          <Minus
                            className="h-3.5 w-3.5"
                            strokeWidth={1.4}
                          />
                        </button>

                        <span className="w-8 text-center text-sm">
                          {line.qty}
                        </span>

                        <button
                          type="button"
                          aria-label={`Increase quantity of ${line.name}`}
                          onClick={() =>
                            setQty(
                              line.id,
                              line.qty + 1,
                            )
                          }
                          className="grid h-8 w-8 place-items-center text-charcoal"
                        >
                          <Plus
                            className="h-3.5 w-3.5"
                            strokeWidth={1.4}
                          />
                        </button>
                      </div>

                      <span className="text-sm text-forest">
                        {formatBDT(
                          line.price *
                            line.qty,
                        )}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        removeFromCart(line.id)
                      }
                      className="mt-2 self-start text-xs text-muted-foreground underline underline-offset-4 hover:text-walnut"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-border px-6 py-6">
          <div className="flex items-center justify-between">
            <span className="label-caps text-muted-foreground">
              Subtotal
            </span>

            <span className="font-display text-2xl text-forest">
              {formatBDT(subtotal)}
            </span>
          </div>

          <p className="mt-2 text-xs text-muted-foreground">
            Shipping and taxes calculated at
            checkout.
          </p>

          <div className="mt-5 grid gap-3">
            <button
              type="button"
              className="label-caps rounded-md bg-forest px-5 py-3.5 text-ivory transition-colors hover:bg-walnut"
            >
              Checkout
            </button>

            <button
              type="button"
              className="label-caps rounded-md border border-forest/30 px-5 py-3.5 text-forest transition-colors hover:border-forest"
            >
              View Cart
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}