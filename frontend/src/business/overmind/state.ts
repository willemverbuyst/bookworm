/* eslint-disable @typescript-eslint/no-shadow */
import { derived } from "overmind";
import { State } from "../models/State";

export const state: State = {
  auth: {
    isSignedIn: false,
    token: "",
  },
  apiResponse: { message: "", status: undefined },
  bookwormApi: null,
  bookwormDetailsApi: null,
  bookwormOverview: derived(({ bookwormApi }: State) => {
    if (!bookwormApi?.data.length) {
      return null;
    }
    return bookwormApi.data;
  }),
  genresApi: null,
  genresOverview: derived(({ genresApi }: State) => {
    if (!genresApi?.data.length) {
      return null;
    }
    return genresApi.data;
  }),
  languagesApi: null,
  languagesOverview: derived(({ languagesApi }: State) => {
    if (!languagesApi?.data.length) {
      return null;
    }
    return languagesApi.data;
  }),
  rentalsApi: null,
  rentalsOverview: derived(({ rentalsApi }: State) => {
    if (!rentalsApi?.data.length) {
      return null;
    }
    return rentalsApi.data;
  }),
  rentalStatsDuration: derived(({ rentalStatsDurationApi }: State) => {
    if (!rentalStatsDurationApi?.data.length) {
      return null;
    }
    return rentalStatsDurationApi.data;
  }),
  rentalStatsDurationApi: null,
  reviewsApi: null,
  reviewsOverview: derived(({ reviewsApi }: State) => {
    if (!reviewsApi?.data.length) {
      return null;
    }
    return reviewsApi.data;
  }),
  user: null,
};
