import { AppState } from "../../models";

export const state: AppState = {
  isLoading: false,
  adminMenuItems: [
    { label: "Language", href: "language" },
    { label: "Genre", href: "genre" },
    { label: "Library", href: "library" },
  ],
  publicNavItems: [
    { label: "Books", href: "/books" },
    { label: "Authors", href: "/authors" },
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
  colors: ["#ef476fff", "#ffd166ff", "#06d6a0ff", "#118ab2ff", "#073b4cff"],
};
