import { derived } from "overmind";
import { Genre } from "../../models/Genre";
import { BaseState } from "../../models/State";

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
