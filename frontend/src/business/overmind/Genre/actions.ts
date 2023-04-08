/* eslint-disable no-param-reassign */
import { Context } from "..";

export const getGenres = async ({ effects, state }: Context) => {
  state.app.isLoading = true;
  const genres = await effects.genre.api.getGenres();
  state.genre.genresApi = genres;
  state.app.isLoading = false;
};
