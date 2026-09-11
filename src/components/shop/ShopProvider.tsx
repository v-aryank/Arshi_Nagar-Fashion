import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { toast } from "sonner";

import type { Product } from "@/data/products";

export type CartLine = Product & {
  qty: number;
};

type ShopState = {
  cart: CartLine[];
  wishlist: string[];
  cartOpen: boolean;
  searchOpen: boolean;
  menuOpen: boolean;

  count: number;
  subtotal: number;

  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  setQty: (id: string, qty: number) => void;

  toggleWishlist: (product: Product) => void;

  setCartOpen: (value: boolean) => void;
  setSearchOpen: (value: boolean) => void;
  setMenuOpen: (value: boolean) => void;
};

const ShopContext = createContext<ShopState | null>(null);

export function ShopProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);

  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const addToCart = useCallback((product: Product) => {
    setCart((previous) => {
      const existing = previous.find(
        (line) => line.id === product.id,
      );

      if (existing) {
        return previous.map((line) =>
          line.id === product.id
            ? {
                ...line,
                qty: line.qty + 1,
              }
            : line,
        );
      }

      return [
        ...previous,
        {
          ...product,
          qty: 1,
        },
      ];
    });

    setCartOpen(true);

    toast(`${product.name} added to your bag.`);
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setCart((previous) =>
      previous.filter((line) => line.id !== id),
    );
  }, []);

  const setQty = useCallback(
    (id: string, qty: number) => {
      setCart((previous) => {
        if (qty <= 0) {
          return previous.filter(
            (line) => line.id !== id,
          );
        }

        return previous.map((line) =>
          line.id === id
            ? {
                ...line,
                qty,
              }
            : line,
        );
      });
    },
    [],
  );

  const toggleWishlist = useCallback(
    (product: Product) => {
      setWishlist((previous) => {
        const exists = previous.includes(product.id);

        toast(
          exists
            ? `${product.name} removed from wishlist.`
            : `${product.name} saved to wishlist.`,
        );

        return exists
          ? previous.filter(
              (id) => id !== product.id,
            )
          : [...previous, product.id];
      });
    },
    [],
  );

  const value = useMemo<ShopState>(
    () => ({
      cart,
      wishlist,

      cartOpen,
      searchOpen,
      menuOpen,

      count: cart.reduce(
        (total, line) => total + line.qty,
        0,
      ),

      subtotal: cart.reduce(
        (total, line) =>
          total + line.qty * line.price,
        0,
      ),

      addToCart,
      removeFromCart,
      setQty,
      toggleWishlist,

      setCartOpen,
      setSearchOpen,
      setMenuOpen,
    }),
    [
      cart,
      wishlist,
      cartOpen,
      searchOpen,
      menuOpen,
      addToCart,
      removeFromCart,
      setQty,
      toggleWishlist,
    ],
  );

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  const context = useContext(ShopContext);

  if (!context) {
    throw new Error(
      "useShop must be used inside ShopProvider",
    );
  }

  return context;
}