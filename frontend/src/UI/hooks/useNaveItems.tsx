import { useAppState } from "../../business/overmind";
import { NavItem } from "../components/Navigation/types";

export const NAV_ITEMS: Array<NavItem> = [
  { label: "Books", href: "/books" },
  { label: "Authors", href: "/authors" },
];

export const PRIVATE_NAV_ITEMS: Array<NavItem> = [
  { label: "Home", href: "/home" },
  { label: "Bookworms", href: "/bookworms" },
  { label: "Rentals", href: "/rentals" },
  { label: "Reviews", href: "/reviews" },
];

export function useNavItems() {
  const { isSignedIn } = useAppState().auth;

  if (isSignedIn) {
    return [...PRIVATE_NAV_ITEMS, ...NAV_ITEMS];
  }

  return NAV_ITEMS;
}
