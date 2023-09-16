import { useAppState } from "../../business/overmind";
import {
  privateNavItems,
  publicNavItems,
} from "../../configuration/navigation";

export function useNavItems() {
  const { isSignedIn } = useAppState().auth;

  if (isSignedIn) {
    return [...privateNavItems, ...publicNavItems];
  }

  return publicNavItems;
}
