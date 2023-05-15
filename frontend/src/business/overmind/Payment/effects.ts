import { apiGetWithZod } from "../../../api";
import { ApiResponsePayment } from "../../models";

export const api = {
  getPayments: async ({ amount }: { amount: number }) =>
    apiGetWithZod(`payments?amount=${amount}`, ApiResponsePayment),
};
