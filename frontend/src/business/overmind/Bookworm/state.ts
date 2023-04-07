/* eslint-disable @typescript-eslint/no-shadow */
import { derived } from "overmind";
import { BookwormState } from "../../models/State";

export const state: BookwormState = {
  bookwormApi: null,
  bookwormDetailsApi: null,
  bookwormOverview: derived(({ bookwormApi }: BookwormState) => {
    if (!bookwormApi?.data.length) {
      return null;
    }
    return bookwormApi.data;
  }),
};
