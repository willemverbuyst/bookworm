import { apiGetWithZod } from "../../../api";
import { ApiResponsePayment } from "../../models/Payment";

export const api = {
  getPayments: async ({ amount }: { amount: number }) =>
    apiGetWithZod(`payments?amount=${amount}`, ApiResponsePayment),
};
