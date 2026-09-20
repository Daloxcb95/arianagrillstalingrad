import { createFileRoute } from "@tanstack/react-router";
import { Car, Clock, MapPin, Phone, Utensils } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { hours, restaurant } from "@/data/restaurant";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [{ title: "Réserver — Ariana Grill" }],
  }),
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const payload = {
      name: String(data.get("name") ?? ""),
      phone: String(data.get("phone") ?? ""),
      covers: String(data.get("covers") ?? ""),
      datetime: String(data.get("datetime") ?? ""),
      message: String(data.get("message") ?? ""),
      at: new Date().toISOString(),
    };
    const previous = JSON.parse(localStorage.getItem("ariana-reservations") ?? "[]") as unknown[];
    localStorage.setItem("ariana-reservations", JSON.stringify([payload, ...previous]));
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <main>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Contact</p>
        <h1 className="mt-3 font-display text-5xl italic text-fg sm:text-6xl">
          Une table au Pont de Pierre.
        </h1>
        <p className="mt-4 max-w-xl text-muted">
          Appelez pour réserver, passez sans attendre (souvent pas de file), ou commandez en
          livraison. Durée moyenne sur place : {restaurant.stay}.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <InfoCard
              icon={Phone}
              title="Téléphone"
              body={restaurant.phone}
              href={restaurant.phoneHref}
              action="Appeler maintenant"
            />
            <InfoCard
              icon={MapPin}
              title="Adresse"
              body={`${restaurant.fullAddress}. ${restaurant.landmark}.`}
              href={restaurant.mapsUrl}
              action="Ouvrir l’itinéraire"
            />
            <InfoCard
              icon={Car}
              title="Parking & accès"
              body="Parking gratuit et large. Accès personnes à mobilité réduite. À emporter possible."
            />
            <InfoCard
              icon={Utensils}
              title="Livraison"
              body="Commandez via Deliveroo (zone Arnouville / Garges)."
              href={restaurant.deliveroo}
              action="Ouvrir Deliveroo"
            />
            <div className="rounded-2xl border border-border bg-surface p-5">
              <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-subtle">
                <Clock className="size-3.5" /> Horaires
              </p>
              <ul className="mt-4 space-y-2">
                {hours.map((row) => (
                  <li key={row.day} className="flex justify-between text-sm">
                    <span className="text-muted">{row.day}</span>
                    <span className="tabular-nums text-fg">{row.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Carte Ariana Grill Garges-lès-Gonesse"
                src={restaurant.mapsEmbed}
                className="h-72 w-full sm:h-80"
                loading="lazy"
              />
            </div>

            <form
              onSubmit={onSubmit}
              className="mt-6 rounded-2xl border border-border bg-surface p-6"
            >
              <h2 className="font-display text-2xl italic text-fg">Demande de réservation</h2>
              <p className="mt-1 text-sm text-muted">
                On vous confirme par téléphone. Pour le soir et les groupes, mieux vaut appeler.
              </p>
              {sent ? (
                <p className="mt-6 rounded-lg bg-cream px-4 py-3 text-sm text-ink">
                  Demande enregistrée. Appelez-nous au {restaurant.phone} pour confirmer la table.
                </p>
              ) : null}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm">
                  <span className="text-muted">Nom</span>
                  <Input name="name" required autoComplete="name" />
                </label>
                <label className="grid gap-2 text-sm">
                  <span className="text-muted">Téléphone</span>
                  <Input name="phone" type="tel" required autoComplete="tel" />
                </label>
                <label className="grid gap-2 text-sm">
                  <span className="text-muted">Convives</span>
                  <Input name="covers" type="number" min={1} max={20} defaultValue={2} required />
                </label>
                <label className="grid gap-2 text-sm">
                  <span className="text-muted">Date et heure</span>
                  <Input name="datetime" type="datetime-local" required />
                </label>
              </div>
              <label className="mt-4 grid gap-2 text-sm">
                <span className="text-muted">Message (optionnel)</span>
                <Textarea name="message" />
              </label>
              <Button type="submit" className="mt-5">
                Envoyer la demande
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoCard({
  icon: Icon,
  title,
  body,
  href,
  action,
}: {
  icon: typeof MapPin;
  title: string;
  body: string;
  href?: string;
  action?: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-5">
      <div className="flex items-start gap-3">
        <Icon className="mt-0.5 size-4 shrink-0 text-accent" />
        <div>
          <p className="text-sm font-medium text-fg">{title}</p>
          <p className="mt-1 text-sm text-muted">{body}</p>
          {href && action ? (
            <a
              href={href}
              target={href.startsWith("tel:") ? undefined : "_blank"}
              rel={href.startsWith("tel:") ? undefined : "noreferrer"}
              className="mt-2 inline-block text-sm text-accent hover:underline"
            >
              {action}
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
