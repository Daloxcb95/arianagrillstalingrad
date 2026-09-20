import { Link } from "@tanstack/react-router";
import { restaurant } from "@/data/restaurant";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-3xl italic text-fg">{restaurant.name}</p>
          <p className="mt-2 max-w-xs text-sm text-muted">
            Cuisine afghane et grillades au charbon, au centre commercial du Pont de Pierre.
          </p>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-subtle">Venir</p>
          <p className="mt-3 text-sm text-fg">{restaurant.fullAddress}</p>
          <p className="mt-1 text-sm text-muted">{restaurant.landmark}</p>
          <a href={restaurant.phoneHref} className="mt-3 inline-block text-sm text-fg hover:text-accent">
            {restaurant.phone}
          </a>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-subtle">Explorer</p>
          <Link to="/menu" className="text-fg hover:text-accent">
            La carte
          </Link>
          <Link to="/avis" className="text-fg hover:text-accent">
            Avis
          </Link>
          <Link to="/contact" className="text-fg hover:text-accent">
            Réserver
          </Link>
          <a
            href={restaurant.deliveroo}
            target="_blank"
            rel="noreferrer"
            className="text-fg hover:text-accent"
          >
            Livraison Deliveroo
          </a>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-5 text-xs text-subtle sm:flex-row sm:justify-between sm:px-6">
          <span>
            © {new Date().getFullYear()} {restaurant.name}
          </span>
          <span>Restaurant afghan · Garges-lès-Gonesse</span>
        </div>
      </div>
    </footer>
  );
}
