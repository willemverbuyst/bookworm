export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export const NAV_ITEMS: Array<NavItem> = [
  { label: "Home", href: "#" },
  { label: "Books", href: "#" },
  { label: "Authors", href: "#" },
  { label: "Reviews", href: "#" },
];
