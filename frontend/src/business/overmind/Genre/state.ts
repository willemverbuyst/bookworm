import { derived } from "overmind";
import { GenreState } from "../../models/Genre";

export const state: GenreState = {
  getAllApi: null,
  overview: derived(({ getAllApi }: GenreState) => {
    if (!getAllApi?.data.length) {
      return null;
    }
    return getAllApi.data;
  }),
};
