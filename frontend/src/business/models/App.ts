import { NavItem } from "./NavItem";

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
  RENTALS: "/rentals",
  REVIEWS_NEW: "/reviews/new",
  REVIEWS: "/reviews",
  SIGNIN: "/signin",
  SIGNUP: "/signup",
  PAGE_NOT_FOUND: "*",
} as const;

type PageKeys = keyof typeof Page;

export interface AppState {
  isLoading: boolean;
  currentPage: (typeof Page)[PageKeys];
  publicNavItems: NavItem[];
  privateNavItems: NavItem[];
  colors: string[];
}
