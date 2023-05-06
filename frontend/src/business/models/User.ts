import { z } from "zod";

export const User = z.object({
  id: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  birth_date: z.string(),
  place_of_birth: z.string(),
  email: z.string(),
  phone: z.string(),
  address: z.string(),
  postal_code: z.string(),
  city: z.string(),
  country: z.string(),
  library: z.string(),
});

export const ApiResponseUser = z.object({
  status: z.string(),
  data: User,
  token: z.object({ access_token: z.string() }),
  message: z.string(),
});

export type User = z.infer<typeof User>;
export type ApiResponseUser = z.infer<typeof ApiResponseUser>;

export interface UserState {
  user: User | null;
}
