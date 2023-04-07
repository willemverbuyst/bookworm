/* eslint-disable @typescript-eslint/no-shadow */
import { derived } from "overmind";
import { State } from "../models/State";

export const state: State = {
  auth: {
    isSignedIn: false,
    token: "",
  },
  apiResponse: { message: "", status: undefined },
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

  reviewsApi: null,
  reviewsOverview: derived(({ reviewsApi }: State) => {
    if (!reviewsApi?.data.length) {
      return null;
    }
    return reviewsApi.data;
  }),
  user: null,
};
