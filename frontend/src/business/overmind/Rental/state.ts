/* eslint-disable @typescript-eslint/no-shadow */
import { derived } from "overmind";
import { RentalState } from "../../models/State";

export const state: RentalState = {
  rentalsApi: null,
  rentalsOverview: derived(({ rentalsApi }: RentalState) => {
    if (!rentalsApi?.data.length) {
      return null;
    }
    return rentalsApi.data;
  }),
  rentalStatsDuration: derived(({ rentalStatsDurationApi }: RentalState) => {
    if (!rentalStatsDurationApi?.data.length) {
      return null;
    }
    return rentalStatsDurationApi.data;
  }),
  rentalStatsDurationApi: null,
};
