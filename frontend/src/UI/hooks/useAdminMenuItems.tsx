import { useAppState } from "../../business/overmind";

export function useAdminMenuItems() {
  const { isSignedIn } = useAppState().auth;
  const { menuItems } = useAppState().admin;

  if (isSignedIn) {
    return menuItems;
  }

  return [];
}
