import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Instagram } from "lucide-react";

import { Navbar } from "@/components/shop/Navbar";
import { AnnouncementBar } from "@/components/shop/AnnouncementBar";
import { ProductCard } from "@/components/shop/ProductCard";
import { Reveal } from "@/components/shop/Reveal";

import {
  bestSellers,
  newArrivals,
  signatureEdit,
} from "@/data/products";

import heroImage from "@/assets/banner.jpg";
import womenImage from "@/assets/cat-women.jpg";
import menImage from "@/assets/cat-men.jpg";
import accessoriesImage from "@/assets/cat-accessories.jpg";
import essentialsImage from "@/assets/cat-essentials.jpg";
import craftImage from "@/assets/craft.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

export default function Index() {
  return (
    <div
      id="top"
      className="min-h-screen bg-background text-foreground"
    >
      <AnnouncementBar />
      <Navbar />

      {/* =========================================================
    HERO
========================================================= */}

<section className="relative min-h-[calc(100vh-7rem)] overflow-hidden">

  {/* Full-width hero image */}
  <div className="absolute inset-0">

    <img
      src={heroImage}
      alt="Arshi Nagar contemporary fashion collection"
      className="h-full w-full object-cover object-center"
    />

    {/* Cinematic darkening */}
    <div className="absolute inset-0 bg-black/10" />

  </div>


  {/* =========================================================
      GREEN BLEND PANEL
  ========================================================= */}

  <div
    className="
      absolute inset-y-0 left-0 z-10
      w-[58%]
      bg-gradient-to-r
      from-forest
      via-forest/40
      via-[68%]
      to-forest/0
    "
  />


  {/* =========================================================
        HERO CONTENT
    ========================================================= */}

    <div className="relative z-20 flex min-h-[calc(100vh-7rem)] items-center px-8 py-20 sm:px-12 lg:px-16 xl:px-24">

      <Reveal>

        <div className="max-w-xl">

          {/* Arshi Nagar branding */}

          <div className="mb-8">

            <p
              className="
                font-display
                text-5xl
                leading-[0.82]
                tracking-[-0.04em]
                text-ivory
                sm:text-6xl
                lg:text-7xl
                xl:text-8xl
              "
            >
              ARSHI
            </p>

            <p
              className="
                ml-8
                font-display
                text-5xl
                leading-[0.82]
                tracking-[-0.04em]
                text-gold
                sm:text-6xl
                lg:text-7xl
                xl:text-8xl
              "
            >
              NAGAR
            </p>

          </div>


          {/* Main statement */}

          <h1
            className="
              font-display
              text-4xl
              leading-[0.95]
              tracking-[-0.025em]
              text-ivory
              sm:text-5xl
              lg:text-6xl
            "
          >
            Quietly
            <br />
            <em>bold.</em>
          </h1>


          {/* Description */}

          <p className="mt-7 max-w-md text-sm leading-7 text-ivory/70">
            Contemporary clothing shaped by timeless silhouettes,
            considered materials, and the quiet character of the Era.
          </p>


          {/* Buttons */}

          <div className="mt-9 flex flex-wrap gap-3">

            <a
              href="#new-in"
              className="
                inline-flex
                items-center
                gap-3
                bg-ivory
                px-6
                py-3
                label-caps
                text-[0.65rem]
                text-forest
                transition-transform
                duration-300
                hover:-translate-y-1
              "
            >
              Shop New In

              <ArrowRight className="h-3.5 w-3.5" />

            </a>


            <a
              href="#collections"
              className="
                inline-flex
                items-center
                gap-3
                border
                border-ivory/30
                px-6
                py-3
                label-caps
                text-[0.65rem]
                text-ivory
                transition-colors
                duration-300
                hover:border-gold
                hover:text-gold
              "
            >
              Explore Collection
            </a>

          </div>

        </div>

      </Reveal>

    </div>


    {/* =========================================================
        IMAGE EDITORIAL LABEL
    ========================================================= */}

    <div
      className="
        absolute
        bottom-7
        right-7
        z-20
        border
        border-ivory/30
        bg-forest/80
        px-5
        py-4
        backdrop-blur-sm
      "
    >

      <p className="label-caps text-[0.55rem] text-gold">
        Arshi Nagar Selection
      </p>

      <p className="mt-1 font-display text-lg text-ivory">
        Fresh. Timeless. Thoughtful.
      </p>

    </div>

  </section>
      {/* =========================================================
          INTRODUCTION
      ========================================================= */}

      <section className="mx-auto max-w-[1500px] px-6 py-24 sm:px-10 lg:px-16">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">

            <p className="label-caps text-[0.65rem] text-gold">
              The House of Arshi Nagar
            </p>

            <h2 className="mt-4 font-display text-5xl leading-none text-forest dark:text-gold sm:text-6xl">
              Made for the way
              <br />
              <em>you move.</em>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-muted-foreground">
              Arshi Nagar brings together modern silhouettes and a quiet
              sense of heritage. Every piece is designed to become part of
              your everyday wardrobe — not disappear after a season.
            </p>

          </div>
        </Reveal>
      </section>

      {/* =========================================================
          COLLECTIONS
      ========================================================= */}

      <section
        id="collections"
        className="px-6 pb-24 sm:px-10 lg:px-16"
      >
        <Reveal>
          <div className="mx-auto grid max-w-[1500px] gap-3 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                title: "Women",
                image: womenImage,
              },
              {
                title: "Men",
                image: menImage,
              },
              {
                title: "Accessories",
                image: accessoriesImage,
              },
              {
                title: "Essentials",
                image: essentialsImage,
              },
            ].map((collection, index) => (
              <a
                key={collection.title}
                href="#signature"
                className="group relative aspect-[0.78] overflow-hidden bg-cream"
              >
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 text-ivory">

                  <span className="label-caps text-[0.55rem] text-gold">
                    0{index + 1}
                  </span>

                  <h3 className="mt-1 font-display text-3xl">
                    {collection.title}
                  </h3>

                  <span className="mt-2 inline-flex items-center gap-2 label-caps text-[0.55rem]">
                    Discover
                    <ArrowRight className="h-3 w-3" />
                  </span>

                </div>
              </a>
            ))}

          </div>
        </Reveal>
      </section>

      {/* =========================================================
          SIGNATURE EDIT
      ========================================================= */}

      <section
        id="signature"
        className="bg-cream/40 px-6 py-24 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-[1500px]">

          <Reveal>
            <div className="mb-10 flex items-end justify-between gap-6">

              <div>
                <h6 className="mt-2 font-display text-1xl text-gold dark:text-forest-deep">
                Curted For You
              </h6>

                <h2 className="mt-2 font-display text-5xl text-forest dark:text-gold">
                  The Arshi Nagar Selection
                </h2>
              </div>

              <a
                href="#new-in"
                className="hidden items-center gap-2 label-caps text-[0.6rem] text-foreground/60 transition-colors hover:text-forest dark:hover:text-gold sm:flex"
              >
                View all
                <ArrowRight className="h-3.5 w-3.5" />
              </a>

            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {signatureEdit.map((product, index) => (
              <Reveal
                key={product.id}
                delay={index * 0.06}
              >
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================
          EDITORIAL / PHILOSOPHY
      ========================================================= */}

      <section className="grid lg:grid-cols-2">

        <div className="relative min-h-[500px] overflow-hidden">
          <img
            src={craftImage}
            alt="Arshi Nagar craftsmanship"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="flex items-center bg-forest px-8 py-20 text-ivory sm:px-12 lg:px-20">
          <Reveal>
            <div className="max-w-lg">

              <p className="label-caps text-[0.6rem] text-gold">
                The Arshi Nagar Philosophy
              </p>

              <h2 className="mt-5 font-display text-5xl leading-[0.95] sm:text-6xl">
                Better pieces.
                <br />
                Better <em>everyday.</em>
              </h2>

              <p className="mt-7 text-sm leading-7 text-ivory/70">
                We believe clothing should feel considered without feeling
                complicated. Clean lines, honest materials and details that
                reward a closer look.
              </p>

              <a
                href="#collections"
                className="mt-8 inline-flex items-center gap-3 label-caps text-[0.6rem] text-gold"
              >
                Discover Arshi Nagar
                <ArrowRight className="h-3.5 w-3.5" />
              </a>

            </div>
          </Reveal>
        </div>

      </section>

      {/* =========================================================
          BEST SELLERS
      ========================================================= */}

      <section className="px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1500px]">

          <Reveal>
            <div className="mb-10">

              <h6 className="mt-2 font-display text-1xl text-gold dark:text-forest-deep">
                Customer favourites
              </h6>

              <h2 className="mt-2 font-display text-5xl text-forest dark:text-gold">
                Most loved.
              </h2>

            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {bestSellers.map((product, index) => (
              <Reveal
                key={product.id}
                delay={index * 0.06}
              >
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================
          ARSHI NAGAR STANDARD
      ========================================================= */}

      <section className="bg-walnut px-6 py-20 text-ivory sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1200px]">

          <Reveal>
            <div className="text-center">

              <p className="label-caps text-[0.6rem] text-gold">
                The Arshi Nagar Standard
              </p>

              <h2 className="mt-3 font-display text-5xl">
                Why shop with us?
              </h2>

            </div>
          </Reveal>

          <div className="mt-12 grid gap-10 text-center md:grid-cols-3">

            <div>
              <p className="font-display text-2xl">
                Thoughtfully Selected
              </p>

              <p className="mt-3 text-sm leading-6 text-ivory/60">
                Pieces chosen with quality and everyday wear in mind.
              </p>
            </div>

            <div>
              <p className="font-display text-2xl">
                Reliable Delivery
              </p>

              <p className="mt-3 text-sm leading-6 text-ivory/60">
                Your pieces delivered carefully to your doorstep.
              </p>
            </div>

            <div>
              <p className="font-display text-2xl">
                Quality First
              </p>

              <p className="mt-3 text-sm leading-6 text-ivory/60">
                Honest products and a shopping experience you can trust.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          NEW ARRIVALS
      ========================================================= */}

      <section
        id="new-in"
        className="px-6 py-24 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-[1500px]">

          <Reveal>
            <div className="mb-10">

              <h6 className="mt-2 font-display text-1xl text-gold dark:text-forest-deep">
                Just In
              </h6>

              <h2 className="mt-2 font-display text-5xl text-forest dark:text-gold">
                New to Arshi Nagar.
              </h2>

            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {newArrivals.map((product, index) => (
              <Reveal
                key={product.id}
                delay={index * 0.06}
              >
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================
          NEWSLETTER
      ========================================================= */}

      <section className="border-t border-border px-6 py-24 sm:px-10 lg:px-16">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">

            <p className="label-caps text-[0.6rem] text-gold">
              Stay in the loop
            </p>

            <h2 className="mt-3 font-display text-5xl text-forest dark:text-gold">
              Good things are coming.
            </h2>

            <p className="mt-5 text-sm leading-6 text-muted-foreground">
              New products, seasonal edits and special offers — delivered
              occasionally, never excessively.
            </p>

            <form className="mx-auto mt-8 flex max-w-md border-b border-border">

              <input
                type="email"
                placeholder="Your email address"
                className="min-w-0 flex-1 bg-transparent px-0 py-3 text-sm outline-none placeholder:text-muted-foreground"
              />

              <button
                type="submit"
                className="label-caps px-2 text-[0.55rem] text-forest dark:text-gold"
              >
                Subscribe
              </button>

            </form>

          </div>
        </Reveal>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="bg-forest px-6 py-16 text-ivory sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1500px] gap-12 md:grid-cols-3">

          {/* Brand */}
          <div>

            <p className="font-display text-3xl tracking-[0.16em]">
              ARSHI NAGAR
            </p>

            <p className="mt-4 max-w-sm text-sm leading-6 text-ivory/60">
              Contemporary clothing with a quiet connection to heritage,
              craftsmanship and everyday life.
            </p>

            <p className="mt-8 text-xs text-ivory/40">
              © {new Date().getFullYear()} Arshi Nagar. All rights reserved.
            </p>

          </div>

          {/* Shop */}
          <div>

            <p className="label-caps text-[0.6rem] text-gold">
              Shop
            </p>

            <div className="mt-5 space-y-3 text-sm text-ivory/60">

              <a
                href="#new-in"
                className="block hover:text-ivory"
              >
                New Arrivals
              </a>

              <a
                href="#collections"
                className="block hover:text-ivory"
              >
                Collections
              </a>

              <a
                href="#signature"
                className="block hover:text-ivory"
              >
                Best Sellers
              </a>

            </div>

          </div>

          {/* Help */}
          <div>

            <p className="label-caps text-[0.6rem] text-gold">
              Help
            </p>

            <div className="mt-5 space-y-3 text-sm text-ivory/60">

              <a
                href="#"
                className="block hover:text-ivory"
              >
                Delivery
              </a>

              <a
                href="#"
                className="block hover:text-ivory"
              >
                Returns
              </a>

              <a
                href="#"
                className="block hover:text-ivory"
              >
                Contact
              </a>

            </div>

            <a
              href="#"
              aria-label="Instagram"
              className="mt-6 inline-flex text-ivory/60 transition-colors hover:text-gold"
            >
              <Instagram className="h-4 w-4" />
            </a>

          </div>

        </div>
      </footer>
    </div>
  );
}