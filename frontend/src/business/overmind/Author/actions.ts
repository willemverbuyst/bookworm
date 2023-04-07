/* eslint-disable no-param-reassign */
import { Context } from "..";

export const getAuthors = async (
  { effects, state }: Context,
  { limit, page }: { limit: number; page: number }
) => {
  const authors = await effects.author.api.getAuthors({ limit, page });
  state.author.authorsApi = authors;
};

export const getAuthorStatsPage = async ({ effects, state }: Context) => {
  const pagesStats = await effects.author.api.getAuthorStatsPages();
  state.author.authorStatsPageApi = pagesStats;
};
