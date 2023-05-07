import { z } from "zod";

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
  paymentAmount: number;
  paymentDate: string;
  title: string;
  email: string;
}

export interface PaymentState {
  getAllApi: ApiResponsePayment | null;
  isLoading: boolean;
  overview: Payment[];
}
