import { createFileRoute } from "@tanstack/react-router";
import { StarRating } from "@/components/star-rating";
import { restaurant, reviews } from "@/data/restaurant";

export const Route = createFileRoute("/avis")({
  component: AvisPage,
  head: () => ({
    meta: [{ title: "Avis — Ariana Grill" }],
  }),
});

function AvisPage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Google</p>
        <h1 className="mt-3 font-display text-5xl italic text-fg sm:text-6xl">
          {restaurant.rating.toString().replace(".", ",")} / 5
        </h1>
        <p className="mt-4 max-w-xl text-muted">
          {restaurant.reviewCount} avis. Les clients parlent des grillades, du karhai, du palaw,
          et de l’accueil — y compris des voyageurs venus de loin pour une table afghane au
          Pont de Pierre.
        </p>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <blockquote
              key={review.name + review.date}
              className="flex flex-col rounded-2xl border border-border bg-surface p-6"
            >
              <StarRating value={review.rating} />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-fg">“{review.text}”</p>
              <footer className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-medium text-fg">{review.name}</p>
                <p className="text-xs text-subtle">
                  Avis Google · {review.date}
                  {review.visit ? ` · ${review.visit}` : ""}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>
    </main>
  );
}
