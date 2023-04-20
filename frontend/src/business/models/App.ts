import { NavItem } from "./NavItem";

export interface AppState {
  isLoading: boolean;
  currentPage: string;
  publicNavItems: NavItem[];
  privateNavItems: NavItem[];
  colors: string[];
}

export const Page = {
  BOOKS: "books",
  AUTHORS: "authors",
  HOME: "home",
  ADMIN: "admin",
  ADMIN_GENRE: "admin/genre",
  ADMIN_LANGUAGE: "admin/language",
  ADMIN_LIBRARY: "admin/library",
  BOOKWORMS: "bookworms",
  RENTALS: "rentals",
  REVIEWS_NEW: "reviews/new",
  REVIEWS: "reviews",
  SIGNIN: "signin",
  SIGNUP: "signup",
} as const;
