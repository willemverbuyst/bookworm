import { derived } from "overmind";
import { GenreState } from "../../models/State";

export const state: GenreState = {
  getAllApiResponse: null,
  overview: derived(({ getAllApiResponse }: GenreState) => {
    if (!getAllApiResponse?.data.length) {
      return null;
    }
    return getAllApiResponse.data;
  }),
};
