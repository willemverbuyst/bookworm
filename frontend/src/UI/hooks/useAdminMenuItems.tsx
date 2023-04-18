import { useAppState } from "../../business/overmind";

export function useAdminMenuItems() {
  const { isSignedIn } = useAppState().auth;
  const { adminMenuItems } = useAppState().app;

  if (isSignedIn) {
    return adminMenuItems;
  }

  return [];
}
