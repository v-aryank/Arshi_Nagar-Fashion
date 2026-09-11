import { Heart } from "lucide-react";

import { formatBDT, type Product } from "@/data/products";
import { useShop } from "./ShopProvider";
import { cn } from "@/lib/utils";

export function ProductCard({
  product,
  dark = false,
}: {
  product: Product;
  dark?: boolean;
}) {
  const {
    addToCart,
    toggleWishlist,
    wishlist,
  } = useShop();

  const saved = wishlist.includes(product.id);

  const discount = product.oldPrice
    ? Math.round(
        ((product.oldPrice - product.price) / product.oldPrice) * 100,
      )
    : 0;

  return (
    <article className="group min-w-0">
      <div
        className={cn(
          "relative overflow-hidden rounded-lg",
          dark ? "bg-forest-deep" : "bg-cream",
        )}
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            width={800}
            height={1000}
            className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
          />

          {product.hoverImage && (
            <img
              src={product.hoverImage}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
            />
          )}
        </div>

        <div className="pointer-events-none absolute left-3 top-3 flex flex-col gap-2">
          {product.badge && (
            <span className="label-caps bg-forest px-2.5 py-1 text-[0.625rem] text-ivory">
              {product.badge}
            </span>
          )}

          {discount > 0 && (
            <span className="label-caps border border-gold/70 bg-ivory/90 px-2.5 py-1 text-[0.625rem] text-walnut">
              -{discount}%
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={() => toggleWishlist(product)}
          aria-pressed={saved}
          aria-label={
            saved
              ? `Remove ${product.name} from wishlist`
              : `Save ${product.name} to wishlist`
          }
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-ivory/85 text-charcoal transition-colors hover:bg-ivory"
        >
          <Heart
            className={cn(
              "h-4 w-4",
              saved && "fill-current text-walnut",
            )}
            strokeWidth={1.4}
          />
        </button>

        <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 focus-within:translate-y-0 focus-within:opacity-100">
          <button
            type="button"
            onClick={() => addToCart(product)}
            className="label-caps w-full rounded-md bg-forest px-4 py-3 text-ivory transition-colors hover:bg-walnut"
          >
            Add to Bag
          </button>
        </div>
      </div>

      <div className="pt-4">
        <p
          className={cn(
            "eyebrow",
            dark ? "text-beige/70" : "text-muted-foreground",
          )}
        >
          {product.category}
        </p>

        <h3
          className={cn(
            "mt-1.5 font-sans text-[0.95rem] font-medium tracking-tight",
            dark ? "text-ivory" : "text-charcoal",
          )}
        >
          {product.name}
        </h3>

        <p className="mt-1.5 flex items-baseline gap-2">
          <span
            className={cn(
              "text-[0.95rem]",
              dark ? "text-ivory" : "text-forest",
            )}
          >
            {formatBDT(product.price)}
          </span>

          {product.oldPrice && (
            <span
              className={cn(
                "text-xs line-through",
                dark
                  ? "text-beige/60"
                  : "text-muted-foreground",
              )}
            >
              {formatBDT(product.oldPrice)}
            </span>
          )}
        </p>
      </div>
    </article>
  );
}