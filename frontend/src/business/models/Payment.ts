import { z } from "zod";
import { UI } from "./State";

export const ApiResponsePayment = z.object({
  status: z.string(),
  result: z.number(),
  data: z
    .object({
      id: z.string(),
      payment_amount: z.number(),
      payment_date: z.string(),
      title: z.string(),
      user_email: z.string(),
    })
    .array(),
  total: z.number(),
  message: z.string(),
});

export type ApiResponsePayment = z.infer<typeof ApiResponsePayment>;

export interface Payment {
  id: string;
  amount: number;
  date: string;
  title: string;
  email: string;
}

interface Filter {
  amount: number;
}

export interface PaymentState {
  getAllApi: ApiResponsePayment | null;
  isLoading: boolean;
  overview: Payment[];
  ui: UI<Payment, Filter>;
}
