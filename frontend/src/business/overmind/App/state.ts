import { NavItem } from "../../models/App";

export interface AppState {
  isLoading: boolean;
  publicNavItems: Array<NavItem>;
  privateNavItems: Array<NavItem>;
}

export const state: AppState = {
  isLoading: false,
  publicNavItems: [
    { label: "Books", href: "/books" },
    { label: "Authors", href: "/authors" },
  ],
  privateNavItems: [
    { label: "Home", href: "/home" },
    { label: "Bookworms", href: "/bookworms" },
    { label: "Rentals", href: "/rentals" },
    {
      label: "Reviews",
      children: [
        {
          label: "Add review",
          subLabel: "Add a review for a book your read",
          href: "/reviews/add",
        },
        {
          label: "Reviews",
          subLabel: "Have a look at existing reviews",
          href: "/reviews",
        },
      ],
    },
  ],
};
