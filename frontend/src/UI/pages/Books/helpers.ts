import { z } from "zod";

export type FormFields = {
  genre: string;
  language: string;
};

export const validationSchema = z.object({
  genre: z.string().min(1, { message: "Book is required" }),
  language: z.string().min(1, { message: "Author is required" }),
});

export const defaultValues = {
  genre: "",
  language: "",
};
