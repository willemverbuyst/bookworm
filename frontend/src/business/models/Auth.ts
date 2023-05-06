import { z } from "zod";
import { User } from "./User";

export const ApiResponseUser = z.object({
  status: z.string(),
  data: User,
  token: z.object({ access_token: z.string() }),
  message: z.string(),
});

export type ApiResponseUser = z.infer<typeof ApiResponseUser>;

export interface AuthState {
  isLoading: boolean;
  isSignedIn: boolean;
  token: string;
  user: User | null;
}
