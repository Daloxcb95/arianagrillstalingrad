import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  categories,
  formatPrice,
  menu,
  restaurant,
  type MenuCategory,
} from "@/data/restaurant";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/menu")({
  component: MenuPage,
  head: () => ({
    meta: [{ title: "La carte — Ariana Grill" }],
  }),
});

function MenuPage() {
  const [active, setActive] = useState<MenuCategory | "all">("all");
  const items = useMemo(
    () => (active === "all" ? menu : menu.filter((item) => item.category === active)),
    [active],
  );

  return (
    <main>
      <section className="relative overflow-hidden border-b border-border">
        <img src="/images/palaw.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="scrim absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Carte</p>
          <h1 className="mt-3 max-w-2xl font-display text-5xl italic text-fg sm:text-6xl">
            Grillades, karhai, palaw.
          </h1>
          <p className="mt-5 max-w-lg text-muted">
            Les assiettes grillades à {formatPrice(18.5)} sont celles de la carte livraison.
            Karhai, palaw et naans se confirment à table — comptez {restaurant.priceRange} par
            personne.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="flex gap-2 overflow-x-auto pb-2">
          <FilterChip active={active === "all"} onClick={() => setActive("all")}>
            Toute la carte
          </FilterChip>
          {categories.map((cat) => (
            <FilterChip
              key={cat.id}
              active={active === cat.id}
              onClick={() => setActive(cat.id)}
            >
              {cat.label}
            </FilterChip>
          ))}
        </div>

        {(active === "all" ? categories : categories.filter((c) => c.id === active)).map(
          (cat) => {
            const catItems = items.filter((item) => item.category === cat.id);
            if (catItems.length === 0) return null;
            return (
              <div key={cat.id} className="mt-14">
                <h2 className="font-display text-3xl italic text-fg">{cat.label}</h2>
                <p className="mt-1 text-sm text-muted">{cat.blurb}</p>
                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  {catItems.map((item) => (
                    <article
                      key={item.id}
                      className="overflow-hidden rounded-2xl border border-border bg-surface"
                    >
                      {item.image ? (
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      ) : null}
                      <div className="flex items-start justify-between gap-4 p-5">
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="font-display text-xl text-fg">{item.name}</h3>
                            {item.badge ? (
                              <Badge className="border-accent/30 bg-accent/10 text-accent">
                                {item.badge}
                              </Badge>
                            ) : null}
                          </div>
                          <p className="mt-2 text-sm text-muted">{item.description}</p>
                        </div>
                        <p className="shrink-0 font-medium tabular-nums text-accent">
                          {item.price != null ? formatPrice(item.price) : "À table"}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            );
          },
        )}
      </section>
    </main>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "shrink-0 rounded-full border px-4 py-2 text-sm transition-colors duration-150",
        active
          ? "border-accent bg-accent text-accent-fg"
          : "border-border bg-surface text-muted hover:text-fg",
      )}
    >
      {children}
    </button>
  );
}
