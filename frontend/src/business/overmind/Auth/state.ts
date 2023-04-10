export interface AuthState {
  isSignedIn: boolean;
  token: string;
}

export const state: AuthState = {
  isSignedIn: false,
  token: "",
};
