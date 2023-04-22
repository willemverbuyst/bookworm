import { AppState } from "../../models";

export const state: AppState = {
  isLoading: false,
  currentPage: "/",
  publicNavItems: [
    { label: "Authors", href: "/authors" },
    { label: "Books", href: "/books" },
  ],
  privateNavItems: [
    { label: "Home", href: "/home" },
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
  ],
  colors: ["#ef476fff", "#ffd166ff", "#06d6a0ff", "#118ab2ff", "#073b4cff"],
};
