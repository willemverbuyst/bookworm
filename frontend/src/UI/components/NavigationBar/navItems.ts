export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export const NAV_ITEMS: Array<NavItem> = [
  { label: "Home", href: "/home" },
  { label: "Books", href: "/books" },
  { label: "Authors", href: "/authors" },
  { label: "Reviews", href: "/reviews" },
];
