export interface ToursType {
  id: string;
  img: string;
  title: string;
  price: string;
  limit: string;
}

export const TOURS: ToursType[] = [
  {
    id: "1",
    img: "/images/ultimateTravel/amirsoy.jpg",
    title: "Individual Cultural Tour",
    price: "$499",
    limit: "6 Days / 5 nights",
  },
  {
    id: "2",
    img: "/images/imagesCarusel/Carusel3.jpeg",
    title: "Uzbekistan City Tour",
    price: "$499",
    limit: "6 Days / 5 nights",
  },
  {
    id: "3",
    img: "/images/ultimateTravel/toshkentMountain.webp",
    title: "Tashkent Mountain Tour: Amirsoy",
    price: "$499",
    limit: "1 Day for 1/4 people",
  },
  {
    id: "4",
    img: "/images/ultimateTravel/Tajik.jpg",
    title: "Tajikistan, Seven lakes",
    price: "$499",
    limit: "1 Day for 1/4 people",
  },
];
