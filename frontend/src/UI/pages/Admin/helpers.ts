import { z } from "zod";

export const validationSchemaGenre = z.object({
  genre: z.string().min(1, { message: "Name of lanugage is required" }),
});

export type FormFieldsGenre = z.infer<typeof validationSchemaGenre>;

export const defaultValuesGenre: FormFieldsGenre = {
  genre: "",
};

export const validationSchemaLanguage = z.object({
  language: z.string().min(1, { message: "Name of lanugage is required" }),
});

export type FormFieldsLanguage = z.infer<typeof validationSchemaLanguage>;

export const defaultValuesLanguage: FormFieldsLanguage = {
  language: "",
};
