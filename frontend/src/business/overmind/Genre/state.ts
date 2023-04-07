/* eslint-disable @typescript-eslint/no-shadow */
import { derived } from "overmind";
import { GenreState } from "../../models/State";

export const state: GenreState = {
  genresApi: null,
  genresOverview: derived(({ genresApi }: GenreState) => {
    if (!genresApi?.data.length) {
      return null;
    }
    return genresApi.data;
  }),
};
