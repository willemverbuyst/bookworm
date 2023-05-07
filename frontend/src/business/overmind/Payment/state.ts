import { derived } from "overmind";
import { PaymentState } from "../../models/Payment";

export const state: PaymentState = {
  isLoading: false,
  getAllApi: null,
  overview: derived(({ getAllApi }: PaymentState) => {
    if (!getAllApi?.data?.length) {
      return [];
    }
    return getAllApi.data.map((i) => ({
      id: i.id,
      paymentAmount: i.payment_amount,
      paymentDate: i.payment_date,
      title: i.title.toUpperCase(),
      email: i.user_email,
    }));
  }),
};
