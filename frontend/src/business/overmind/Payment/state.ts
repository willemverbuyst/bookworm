import { derived } from "overmind";
import { genericSearch } from "../../functions";
import { genericSort } from "../../functions/genericSort";
import { PaymentState } from "../../models/Payment";

export const state: PaymentState = {
  isLoading: false,
  getAllApi: null,
  overview: derived(({ getAllApi, searchKeys, queryString }: PaymentState) => {
    if (!getAllApi?.data?.length) {
      return [];
    }
    return getAllApi.data
      .map((i) => ({
        id: i.id,
        paymentAmount: i.payment_amount,
        paymentDate: i.payment_date,
        title: i.title.toUpperCase(),
        email: i.user_email,
      }))
      .filter((a) => genericSearch(a, searchKeys, queryString, false))
      .sort((a, b) =>
        genericSort(a, b, { property: "title", isDescending: false })
      );
  }),
  queryString: "",
  searchKeys: ["email", "title", "paymentAmount", "paymentDate"],
};
