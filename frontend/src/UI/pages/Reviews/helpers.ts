import { z } from "zod";

export type FormFields = {
  bookTitle: string;
  author: string;
  startDate: Date;
  endDate: Date;
  duration: number | string;
  description: string;
  rating: number;
};

export const validationSchema = z.object({
  bookTitle: z.string().min(1, { message: "Title of the book is required" }),
  author: z.string().min(1, { message: "Auhtor is required" }),
  startDate: z.date({
    required_error: "This field id required",
    invalid_type_error: "Start date must be a date",
  }),
  endDate: z.date({
    required_error: "This field is required",
    invalid_type_error: "End date must be a date",
  }),
  duration: z.number({ invalid_type_error: "Duration must be a number" }),
});

export const defaultValues = {
  bookTitle: "",
  author: "",
  startDate: new Date(),
  endDate: undefined,
  duration: "",
  description: "",
  rating: 0,
};
