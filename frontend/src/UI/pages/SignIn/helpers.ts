import { z } from "zod";

export type FormFields = {
  email: string;
  password: string;
};

export const validationSchema = z.object({
  email: z.string().email().min(1, { message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export const defaultValues = {
  email: "",
  password: "",
};
