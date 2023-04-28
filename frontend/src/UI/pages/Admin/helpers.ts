import { z } from "zod";

export const validationSchemaGenre = z.object({
  genre: z.string().min(1, { message: "Name of lanugage is required" }),
});

export type FormFieldsGenre = z.infer<typeof validationSchemaGenre>;

export const defaultValuesGenre: FormFieldsGenre = {
  genre: "",
};

export const validationSchemaLanguages = z.object({
  languages: z
    .object({
      name: z.string().min(1, { message: "Name of language is required" }),
    })
    .array(),
});

export type FormFieldsLanguages = z.infer<typeof validationSchemaLanguages>;

export const defaultValuesLanguages = {
  languages: [{ name: "" }],
};
