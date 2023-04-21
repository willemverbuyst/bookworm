import { User } from "./User";

export interface AuthState {
  isLoading: boolean;
  isSignedIn: boolean;
  token: string;
  user: User | null;
}
