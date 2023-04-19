export type NavItem = {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
};

export interface AppState {
  isLoading: boolean;
  currentPage: string;
  adminMenuItems: NavItem[];
  publicNavItems: NavItem[];
  privateNavItems: NavItem[];
  colors: string[];
}

export const Page = {
  BOOKS: "books",
  AUTHORS: "authors",
  HOME: "home",
  ADMIN: "admin",
  BOOKWORMS: "bookworms",
  RENTALS: "rentals",
  REVIEWS: "reviews",
  SIGNIN: "signin",
  SIGNUP: "signup",
} as const;
