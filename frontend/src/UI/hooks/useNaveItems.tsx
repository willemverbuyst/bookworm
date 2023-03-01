import { useAppState } from "../../business/overmind";
import { NavItem } from "../components/Navigation/navItems";

export const NAV_ITEMS: Array<NavItem> = [
  { label: "Home", href: "/home" },
  { label: "Books", href: "/books" },
  { label: "Authors", href: "/authors" },
  { label: "Reviews", href: "/reviews" },
];

export function useNavItems() {
  const { isSignedIn } = useAppState();

  if (isSignedIn) {
    return NAV_ITEMS;
  }

  const navItmesWithoutReview = NAV_ITEMS.filter((i) => i.href !== "/reviews");

  return navItmesWithoutReview;
}
