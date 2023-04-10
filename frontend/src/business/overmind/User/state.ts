import { User } from "../../models/User";

export interface UserState {
  user: User | null;
}

export const state: UserState = {
  user: null,
};
