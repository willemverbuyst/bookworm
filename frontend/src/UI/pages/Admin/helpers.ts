import { z } from "zod";

export const validationSchemaLanguage = z.object({
  language: z.string().min(1, { message: "Name of lanugage is required" }),
});

export type FormFieldsLanugage = z.infer<typeof validationSchemaLanguage>;

export const defaultValuesLanguage: FormFieldsLanugage = {
  language: "",
};
