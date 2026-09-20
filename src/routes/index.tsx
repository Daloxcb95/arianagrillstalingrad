import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, MapPin, Phone, Star, Accessibility, Car } from "lucide-react";
import { useEffect, useState } from "react";
import { StarRating } from "@/components/star-rating";
import { Button } from "@/components/ui/button";
import {
  formatPrice,
  isOpenNow,
  menu,
  restaurant,
  reviews,
  todaysHours,
} from "@/data/restaurant";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [{ title: "Ariana Grill — Grillades afghanes à Garges-lès-Gonesse" }],
  }),
});

function Home() {
  const featured = menu.filter((item) => item.featured);
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    setOpen(isOpenNow());
  }, []);

  return (
    <main>
      <section className="relative min-h-svh overflow-hidden">
        <img
          src="/images/hero.jpg"
          alt="Platter de grillades afghanes, riz et naan"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto flex min-h-svh max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-cream/80">
            <span className="rounded-full border border-cream/20 bg-ink/40 px-3 py-1">
              {restaurant.place}
            </span>
            {open !== null ? (
              <span className="rounded-full border border-cream/20 bg-ink/40 px-3 py-1">
                {open ? `Ouvert · ${todaysHours().time}` : "Fermé · ouvre à 11h"}
              </span>
            ) : null}
          </div>
          <h1 className="mt-5 max-w-3xl font-display text-5xl italic text-cream sm:text-7xl">
            Le feu, les épices, la table.
          </h1>
          <p className="mt-5 max-w-xl text-base text-cream/80 sm:text-lg">
            Restaurant afghan au Pont de Pierre. Kebabs au charbon, karhai, qabli palaw —
            {restaurant.rating.toString().replace(".", ",")}
            /5 sur {restaurant.reviewCount} avis Google.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/menu">
                Voir la carte
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="cream">
              <a href={restaurant.phoneHref}>Réserver · {restaurant.phone}</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px sm:grid-cols-4">
          {[
            {
              icon: Star,
              label: `${restaurant.rating.toString().replace(".", ",")} / 5`,
              hint: `${restaurant.reviewCount} avis Google`,
            },
            {
              icon: Clock,
              label: "11h – 23h30",
              hint: "Lun–mar jusqu’à 23h",
            },
            {
              icon: MapPin,
              label: restaurant.city,
              hint: restaurant.landmark,
            },
            {
              icon: Phone,
              label: restaurant.phone,
              hint: `${restaurant.priceRange} / personne`,
            },
          ].map((item) => (
            <div key={item.label} className="flex gap-3 bg-surface px-5 py-6 sm:px-6">
              <item.icon className="mt-0.5 size-4 shrink-0 text-accent" />
              <div>
                <p className="font-medium text-fg">{item.label}</p>
                <p className="text-sm text-muted">{item.hint}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">La table</p>
            <h2 className="mt-3 font-display text-4xl italic text-fg sm:text-5xl">
              Ce que l’on vient chercher.
            </h2>
          </div>
          <Button asChild variant="outline">
            <Link to="/menu">Toute la carte</Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {featured.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-2xl border border-border bg-surface"
            >
              {item.image ? (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-500 ease-[var(--ease-smooth-out)] group-hover:scale-105"
                  />
                </div>
              ) : null}
              <div className="flex items-start justify-between gap-4 p-5">
                <div>
                  <h3 className="font-display text-2xl text-fg">{item.name}</h3>
                  <p className="mt-2 text-sm text-muted">{item.description}</p>
                </div>
                {item.price != null ? (
                  <p className="shrink-0 font-medium tabular-nums text-accent">
                    {formatPrice(item.price)}
                  </p>
                ) : (
                  <p className="shrink-0 text-xs text-subtle">À la carte</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-cream text-ink">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-28">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/images/grill.jpg"
              alt="Kebabs sur le charbon"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">La maison</p>
            <h2 className="mt-3 font-display text-4xl italic sm:text-5xl">
              Aryana, le nom ancien de l’Afghanistan.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink/75">
              Ariana Grill est un restaurant traditionnel installé au centre commercial du Pont
              de Pierre depuis 2014. On y vient pour le charbon, les épices, et le temps de
              s’asseoir — {restaurant.stay} en moyenne, parking gratuit, accès PMR.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/75">
              Kebabs, karhai, qabli palaw, naan maison. En fin de repas, le thé se verse souvent
              sans le demander. Sur place ou à emporter — et en livraison via Deliveroo.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-ink/70">
              <span className="inline-flex items-center gap-2">
                <Car className="size-4 text-accent" /> Parking gratuit
              </span>
              <span className="inline-flex items-center gap-2">
                <Accessibility className="size-4 text-accent" /> Accès PMR
              </span>
            </div>
            <Button asChild className="mt-8">
              <Link to="/contact">Venir / réserver</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Les avis</p>
            <h2 className="mt-3 font-display text-4xl italic text-fg sm:text-5xl">
              {restaurant.rating.toString().replace(".", ",")} sur 5 — {restaurant.reviewCount}{" "}
              avis.
            </h2>
          </div>
          <Button asChild variant="outline">
            <Link to="/avis">Lire les avis</Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <blockquote
              key={review.name + review.date}
              className="flex flex-col rounded-2xl border border-border bg-surface p-6"
            >
              <StarRating value={review.rating} />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-fg">“{review.text}”</p>
              <footer className="mt-6">
                <p className="text-sm font-medium text-fg">{review.name}</p>
                <p className="text-xs text-subtle">Google · {review.date}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img
          src="/images/interior.jpg"
          alt="Salle du restaurant le soir"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="scrim absolute inset-0" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-24 sm:px-6 sm:py-32">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-cream/70">
            {restaurant.fullAddress}
          </p>
          <h2 className="max-w-xl font-display text-4xl italic text-cream sm:text-5xl">
            Une table au Pont de Pierre, ouverte jusqu’à tard.
          </h2>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href={restaurant.phoneHref}>Appeler</a>
            </Button>
            <Button asChild size="lg" variant="cream">
              <a href={restaurant.mapsUrl} target="_blank" rel="noreferrer">
                Itinéraire
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
