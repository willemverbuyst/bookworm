export type NavItem = {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
};

export interface AppState {
  isLoading: boolean;
  publicNavItems: Array<NavItem>;
  privateNavItems: Array<NavItem>;
  colors: Array<string>;
}
