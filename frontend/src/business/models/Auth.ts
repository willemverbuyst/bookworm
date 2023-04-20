import { User } from "./User";

export interface AuthState {
  isSignedIn: boolean;
  token: string;
  user: User | null;
}
