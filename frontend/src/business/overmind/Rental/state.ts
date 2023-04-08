import { derived } from "overmind";
import { RentalState } from "../../models/State";

export const state: RentalState = {
  getAllApiResponse: null,
  overview: derived(({ getAllApiResponse }: RentalState) => {
    if (!getAllApiResponse?.data.length) {
      return null;
    }
    return getAllApiResponse.data;
  }),
  statsDuration: derived(({ statsDurationApi }: RentalState) => {
    if (!statsDurationApi?.data.length) {
      return null;
    }
    return statsDurationApi.data;
  }),
  statsDurationApi: null,
};