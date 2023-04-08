/* eslint-disable no-param-reassign */
import { Context } from "..";

export const getAuthors = async (
  { effects, state }: Context,
  { limit, page }: { limit: number; page: number }
) => {
  state.app.isLoading = true;
  const authors = await effects.author.api.getAuthors({ limit, page });
  state.author.authorsApi = authors;
  state.app.isLoading = false;
};

export const getAuthorStatsPage = async ({ effects, state }: Context) => {
  state.app.isLoading = true;
  const pagesStats = await effects.author.api.getAuthorStatsPages();
  state.author.authorStatsPageApi = pagesStats;
  state.app.isLoading = false;
};
