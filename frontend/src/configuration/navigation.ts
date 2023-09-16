import { NavItem } from "../business/models";

export const Page = {
  WELCOME: "/",
  BOOKS: "/books",
  AUTHORS: "/authors",
  HOME: "/myhome",
  ADMIN: "/admin",
  ADMIN_GENRE: "/admin/genre",
  ADMIN_LANGUAGE: "/admin/language",
  ADMIN_LIBRARY: "/admin/library",
  BOOKWORMS: "/bookworms",
  PAYMENTS: "/payments",
  RENTALS: "/rentals",
  REVIEWS_NEW: "/reviews/new",
  REVIEWS: "/reviews",
  SIGNIN: "/signin",
  SIGNUP: "/signup",
  PAGE_NOT_FOUND: "*",
} as const;

export const publicNavItems: NavItem[] = [
  { label: "Authors", href: "/authors" },
  { label: "Books", href: "/books" },
];

export const privateNavItems: NavItem[] = [
  { label: "Home", href: "/myhome" },
  { label: "Admin", href: "/admin" },
  { label: "Bookworms", href: "/bookworms" },
  { label: "Rentals", href: "/rentals" },
  {
    label: "Reviews",
    children: [
      {
        label: "Add review",
        subLabel: "Add a review for a book your read",
        href: "/reviews/new",
      },
      {
        label: "Reviews",
        subLabel: "Have a look at existing reviews",
        href: "/reviews",
      },
    ],
  },
  { label: "Payments", href: "./payments" },
];

export const menuItems: NavItem[] = [
  { label: "Language", href: "/admin/language" },
  { label: "Genre", href: "/admin/genre" },
  { label: "Library", href: "/admin/library" },
];
