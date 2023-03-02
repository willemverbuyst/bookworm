import { z } from "zod";

export type FormFieldsSignIn = {
  email: string;
  password: string;
};

export type FormfieldsSignUp = {
  email: string;
  password: string;
  userName: string;
};

export const validationSchemaSignIn = z.object({
  email: z.string().email().min(1, { message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export const validationSchemaSignUp = z.object({
  email: z.string().email().min(1, { message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
  userName: z.string().min(1, { message: "UserName is required" }),
});

export const defaultValuesSignIn = {
  email: "",
  password: "",
};

export const defaultValuesSignUp = {
  email: "",
  password: "",
  userName: "",
};
