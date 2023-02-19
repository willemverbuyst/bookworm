import { z } from "zod";

export type FormFields = {
  description: string | null;
  startDate: Date;
  endDate: Date;
  duration: number | string;
  country: string;
  city: string;
};

export const validationSchema = z.object({
  description: z.string().min(1, { message: "Description is required" }),
  startDate: z.date({
    required_error: "This field id required",
    invalid_type_error: "Start date must be a date",
  }),
  endDate: z.date({
    required_error: "This field is required",
    invalid_type_error: "End date must be a date",
  }),
  duration: z.number({ invalid_type_error: "Duration must be a number" }),
  country: z.string(),
  city: z.string(),
});

export const defaultValues = {
  description: "",
  duration: "",
  country: "",
  startDate: new Date(),
  endDate: undefined,
};
