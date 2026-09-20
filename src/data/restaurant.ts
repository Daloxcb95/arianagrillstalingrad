export const restaurant = {
  name: "Ariana Grill",
  tagline: "Grillades afghanes",
  place: "Centre commercial du Pont de Pierre",
  city: "Garges-lès-Gonesse",
  address: "Av. de Stalingrad",
  landmark: "En face de Brico Dépôt",
  postal: "95140",
  fullAddress:
    "Centre Commercial du Pont de Pierre, Av. de Stalingrad, 95140 Garges-lès-Gonesse",
  phone: "06 86 94 54 56",
  phoneHref: "tel:+33686945456",
  rating: 4.4,
  reviewCount: 631,
  priceRange: "10 – 20 €",
  stay: "45 min à 1 h 30",
  deliveroo:
    "https://deliveroo.fr/fr/menu/paris/arnouville/ariana-grill-avenue-de-stalingrad",
  mapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Ariana%20Grill%20Centre%20Commercial%20Du%20Pont%20De%20Pierre%20Avenue%20de%20Stalingrad%2095140%20Garges-l%C3%A8s-Gonesse",
  mapsEmbed:
    "https://maps.google.com/maps?q=Ariana%20Grill%20Avenue%20de%20Stalingrad%2095140%20Garges-l%C3%A8s-Gonesse&hl=fr&z=16&output=embed",
} as const;

export const hours = [
  { day: "Lundi", time: "11:00 – 23:00", closeMinutes: 23 * 60 },
  { day: "Mardi", time: "11:00 – 23:00", closeMinutes: 23 * 60 },
  { day: "Mercredi", time: "11:00 – 23:30", closeMinutes: 23 * 60 + 30 },
  { day: "Jeudi", time: "11:00 – 23:30", closeMinutes: 23 * 60 + 30 },
  { day: "Vendredi", time: "11:00 – 23:30", closeMinutes: 23 * 60 + 30 },
  { day: "Samedi", time: "11:00 – 23:30", closeMinutes: 23 * 60 + 30 },
  { day: "Dimanche", time: "11:00 – 23:30", closeMinutes: 23 * 60 + 30 },
] as const;

export type MenuCategory = "grillades" | "specialites" | "pains" | "boissons";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price?: number;
  category: MenuCategory;
  image?: string;
  featured?: boolean;
  badge?: string;
};

export const menu: MenuItem[] = [
  {
    id: "kebab",
    name: "Assiette kebab",
    description:
      "Viande de veau et de dinde grillée au charbon, assiette généreuse. Un classique de la maison.",
    price: 18.5,
    category: "grillades",
    image: "/images/grill.jpg",
    featured: true,
    badge: "Signature",
  },
  {
    id: "poulet",
    name: "Assiette poulet",
    description: "Poulet mariné au curry, grillé, servi en assiette.",
    price: 18.5,
    category: "grillades",
    image: "/images/tikka.jpg",
    featured: true,
  },
  {
    id: "brochettes",
    name: "Brochettes de poulet",
    description: "Poulet grillé en brochettes, mariné, cuit sur le charbon.",
    price: 18.5,
    category: "grillades",
    image: "/images/hero.jpg",
  },
  {
    id: "mix",
    name: "Platter BBQ",
    description:
      "Assortiment de grillades afghanes à partager : kebabs, tikka, tomates grillées, riz et naan.",
    category: "grillades",
    image: "/images/hero.jpg",
    featured: true,
    badge: "À partager",
  },
  {
    id: "tikka",
    name: "Chicken tikka",
    description:
      "Blancs de poulet marinés aux épices, grillés à la perfection — souvent cité dans les avis.",
    category: "grillades",
    image: "/images/tikka.jpg",
  },
  {
    id: "palaw",
    name: "Qabli palaw",
    description:
      "Le riz de fête afghan : carottes glacées, raisins secs, amandes, et viande mijotée.",
    category: "specialites",
    image: "/images/palaw.jpg",
    featured: true,
    badge: "Incontournable",
  },
  {
    id: "karhai",
    name: "Karhai",
    description:
      "Viande mijotée au wok dans une sauce tomate, gingembre, piment — le plat que l’on revient chercher.",
    category: "specialites",
    image: "/images/karhai.jpg",
    featured: true,
  },
  {
    id: "naan",
    name: "Naan maison",
    description: "Pain cuit au four, nature ou au fromage, à partager dès l’arrivée.",
    category: "pains",
    image: "/images/naan.jpg",
  },
  {
    id: "riz",
    name: "Riz parfumé",
    description: "Riz long grain, beurre et épices douces.",
    category: "pains",
  },
  {
    id: "lassi",
    name: "Lassi à la mangue",
    description: "Yaourt battu, mangue, glace pilée — le classique sucré-frais.",
    category: "boissons",
  },
  {
    id: "the",
    name: "Thé afghan",
    description: "Souvent offert en fin de repas, comme à la maison.",
    category: "boissons",
  },
];

export const categories: { id: MenuCategory; label: string; blurb: string }[] = [
  {
    id: "grillades",
    label: "Grillades",
    blurb: "Assiettes au charbon — kebab, poulet, brochettes et platters.",
  },
  {
    id: "specialites",
    label: "Spécialités afghanes",
    blurb: "Karhai, qabli palaw : la table des fêtes.",
  },
  {
    id: "pains",
    label: "Pains & riz",
    blurb: "Naans maison et riz parfumé.",
  },
  {
    id: "boissons",
    label: "Boissons",
    blurb: "Lassi, thé, softs.",
  },
];

export type Review = {
  name: string;
  date: string;
  visit?: string;
  text: string;
  rating: number;
};

export const reviews: Review[] = [
  {
    name: "Daniyal Malik",
    date: "il y a 3 semaines",
    visit: "Visité en août",
    rating: 5,
    text: "Une adresse à ne pas manquer si vous êtes près de Paris. Situé à environ 30 kilomètres de la capitale, ce restaurant est l’endroit parfait pour échapper à l’agitation — cuisine généreuse, accueil soigné.",
  },
  {
    name: "Hakim",
    date: "il y a 10 mois",
    visit: "Visité en octobre 2025",
    rating: 5,
    text: "Un excellent restaurant afghan, très bien desservi. Les grillades et l’accueil valent le détour.",
  },
  {
    name: "Avis Google",
    date: "dîner",
    rating: 5,
    text: "Les viandes grillées étaient parfaitement cuites — juteuses, savoureuses, très bien assaisonnées. Le chicken tikka remarquable, les ribs tendres et fumées. Tout servi bien chaud. Je reviendrai sans hésiter.",
  },
];

export function formatPrice(value: number) {
  return value.toLocaleString("fr-FR", {
    style: "currency",
    currency: "EUR",
  });
}

export function isOpenNow(date = new Date()) {
  const day = date.getDay();
  const minutes = date.getHours() * 60 + date.getMinutes();
  const open = 11 * 60;
  const close = day === 1 || day === 2 ? 23 * 60 : 23 * 60 + 30;
  return minutes >= open && minutes < close;
}

export function todaysHours(date = new Date()) {
  const map = [6, 0, 1, 2, 3, 4, 5] as const;
  return hours[map[date.getDay()]];
}
