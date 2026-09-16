import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import { Analytics } from "@vercel/analytics/react";

import appCss from "../style.css?url";
import { ShopProvider } from "@/components/shop/ShopProvider";
import { MobileMenu } from "@/components/shop/MobileMenu";
import { SearchOverlay } from "@/components/shop/SearchOverlay";
import { CartDrawer } from "@/components/shop/CartDrawer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ivory px-4">
      <div className="text-center">
        <p className="eyebrow text-muted-foreground">ARSHI NAGAR</p>

        <h1 className="mt-4 font-display text-7xl text-forest">
          404
        </h1>

        <p className="mt-4 text-muted-foreground">
          This page doesn't exist.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex bg-forest px-6 py-3 text-sm uppercase tracking-[0.15em] text-ivory"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error(error);

  return (
    <div className="flex min-h-screen items-center justify-center bg-ivory px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow text-muted-foreground">ARSHI NAGAR</p>

        <h1 className="mt-4 font-display text-4xl text-forest">
          Something went wrong
        </h1>

        <p className="mt-4 text-sm text-muted-foreground">
          Please refresh the page and try again.
        </p>

        <button
          onClick={reset}
          className="mt-8 bg-forest px-6 py-3 text-sm uppercase tracking-[0.15em] text-ivory"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}

export const Route =
  createRootRouteWithContext<{ queryClient: QueryClient }>()({
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
         title: "ARSHI NAGAR — Contemporary Fashion",
        },
        {
          name: "description",
          content:
            "ARSHI NAGAR — contemporary clothing shaped by timeless silhouettes, considered materials, and the quiet character of the Era.",
        },
        {
          property: "og:title",
          content: "ARSHI NAGAR — Contemporary Fashion",
        },
        {
          property: "og:description",
          content:
            "Contemporary clothing shaped by timeless silhouettes, considered materials, and the quiet character of the Era.",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
      ],
      links: [
        {
          rel: "stylesheet",
          href: appCss,
        },
        {
          rel: "icon",
          href: "/favicon.ico",
          type: "image/x-icon",
        },
      ],
    }),

    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
  });

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ShopProvider>
        <Outlet />

        <MobileMenu />
        <SearchOverlay />
        <CartDrawer />
      </ShopProvider>
      <Analytics />
    </QueryClientProvider>
  );
}