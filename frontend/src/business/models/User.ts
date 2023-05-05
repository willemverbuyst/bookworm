import { z } from "zod";

const User = z.object({
  address: z.string(),
  birth_date: z.string(),
  city: z.string(),
  country: z.string(),
  email: z.string(),
  first_name: z.string(),
  id: z.number(),
  last_name: z.string(),
  name_of_library: z.string(),
  place_of_birth: z.string(),
  phone: z.string(),
  postal_code: z.string(),
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
