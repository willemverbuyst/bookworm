import { AdminState } from "../../models/Admin";

export const state: AdminState = {
  isLoading: false,
  menuItems: [
    { label: "Language", href: "/admin/language" },
    { label: "Genre", href: "/admin/genre" },
    { label: "Library", href: "/admin/library" },
  ],
};
