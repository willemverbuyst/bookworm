import { AuthState } from "../../models";

export const state: AuthState = {
  isLoading: false,
  isSignedIn: false,
  token: "",
  user: null,
};
