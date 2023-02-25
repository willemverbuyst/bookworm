import { z } from "zod";

export type FormFields = {
  bookTitle: string;
  author: string;
};

export const validationSchema = z.object({
  bookTitle: z
    .string()
    .email()
    .min(1, { message: "Title of the book is required" }),
  author: z.string().min(1, { message: "Auhtor is required" }),
});

export const defaultValues = {
  bookTitle: "",
  author: "",
};
