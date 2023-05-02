import { z } from "zod";
import { SelectOption } from "./SelectOption";

export const ApiResponseCountry = z.object({
  status: z.string(),
  result: z.number(),
  data: z
    .object({
      id: z.string(),
      name_of_country: z.string(),
    })
    .array(),
  total: z.number(),
  message: z.string(),
});

export type ApiResponseCountry = z.infer<typeof ApiResponseCountry>;

export interface CountryState {
  getAllApi: ApiResponseCountry | null;
  isLoading: boolean;
  selectOptions: SelectOption[];
}
