import { useAppState } from "../../business/overmind";

export function useNavItems() {
  const { isSignedIn } = useAppState().auth;
  const { publicNavItems, privateNavItems } = useAppState().app;

  if (isSignedIn) {
    return [...privateNavItems, ...publicNavItems];
  }

  return publicNavItems;
}
