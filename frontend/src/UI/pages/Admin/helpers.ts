import { z } from "zod";

export const validationSchemaGenres = z.object({
  genres: z
    .object({
      name: z.string().min(1, { message: "Name of genre is required" }),
    })
    .array(),
});

export type FormFieldsGenres = z.infer<typeof validationSchemaGenres>;

export const defaultValuesGenres: FormFieldsGenres = {
  genres: [{ name: "" }],
};

export const validationSchemaLanguages = z.object({
  languages: z
    .object({
      nameOfLanguage: z
        .string()
        .min(1, { message: "Name of language is required" }),
    })
    .array(),
});

export type FormFieldsLanguages = z.infer<typeof validationSchemaLanguages>;

export const defaultValuesLanguages = {
  languages: [{ nameOfLanguage: "" }],
};
