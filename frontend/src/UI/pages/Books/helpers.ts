import { z } from "zod";

export type FormFields = {
  genre: string;
  language: string;
};

export const validationSchema = z.object({
  genre: z.string(),
  language: z.string(),
});

export const defaultValues = {
  genre: "",
  language: "",
};
