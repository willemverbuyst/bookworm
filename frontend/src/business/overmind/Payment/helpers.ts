import { PaymentData } from "../../models";

export const returnPaymentObject = (payment: PaymentData) => ({
  id: payment.id,
  amount: payment.payment_amount,
  date: payment.payment_date,
  title: payment.title,
  email: payment.user_email,
});
