import { string, z } from "zod";
import { SelectOption } from "./SelectOption";
import { UI } from "./State";

export const ApiResponseLibrary = z.object({
  status: z.string(),
  result: z.number(),
  data: z
    .object({
      id: z.string(),
      name_of_library: z.string(),
      phone: z.string(),
      address: string(),
      postal_code: string(),
      city: string(),
      country: string(),
    })
    .array(),
  total: z.number(),
  message: z.string(),
});

export type ApiResponseLibrary = z.infer<typeof ApiResponseLibrary>;

export interface Library {
  id: string;
  "name of library": string;
  phone: string;
  address: string;
  postalCode: string;
  city: string;
  country: string;
}

export interface LibraryState {
  getAllApi: ApiResponseLibrary | null;
  isLoading: boolean;
  overview: Library[];
  selectOptions: SelectOption[];
  ui: UI<Library, null>;
}
