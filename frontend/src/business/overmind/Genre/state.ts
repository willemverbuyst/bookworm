import { derived } from "overmind";
import { BaseState } from "../../models/State";

export interface Genre {
  id: string;
  genre: string;
}

export type GenreState = BaseState<Genre>;

export const state: GenreState = {
  getAllApi: null,
  overview: derived(({ getAllApi }: GenreState) => {
    if (!getAllApi?.data.length) {
      return null;
    }
    return getAllApi.data;
  }),
};
