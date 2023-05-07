import { apiGetWithZod } from "../../../api";
import { ApiResponsePayment } from "../../models/Payment";

export const api = {
  getPayments: async () => apiGetWithZod("payments", ApiResponsePayment),
};
