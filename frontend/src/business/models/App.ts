export type NavItem = {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
};

export interface AppState {
  isLoading: boolean;
  adminMenuItems: NavItem[];
  publicNavItems: NavItem[];
  privateNavItems: NavItem[];
  colors: string[];
}
