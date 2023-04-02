import { useAppState } from "../../business/overmind";
import { NavItem } from "../components/Navigation/types";

export const NAV_ITEMS: Array<NavItem> = [
  { label: "Home", href: "/home" },
  { label: "Books", href: "/books" },
  { label: "Bookworms", href: "/bookworms" },
  { label: "Authors", href: "/authors" },
  { label: "Reviews", href: "/reviews" },
  { label: "Rentals", href: "/rentals" },
];

export function useNavItems() {
  const { isSignedIn } = useAppState().auth;

  if (isSignedIn) {
    return NAV_ITEMS;
  }

  const navItmesWithoutReview = NAV_ITEMS.filter((i) => i.href !== "/reviews");

  return navItmesWithoutReview;
}
