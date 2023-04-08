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
  rentalStatsDuration: derived(({ rentalStatsDurationApi }: RentalState) => {
    if (!rentalStatsDurationApi?.data.length) {
      return null;
    }
    return rentalStatsDurationApi.data;
  }),
  rentalStatsDurationApi: null,
};
