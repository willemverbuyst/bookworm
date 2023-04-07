/* eslint-disable no-param-reassign */
import { Context } from "..";

export const getBookworms = async (
  { effects, state }: Context,
  { limit, page }: { limit: number; page: number }
) => {
  const bookworms = await effects.bookworm.api.getBookworms({ limit, page });
  state.bookworm.bookwormApi = bookworms;
};

export const getBookWormById = async (
  { effects, state }: Context,
  { id }: { id: string }
) => {
  const user = await effects.bookworm.api.getBookwormById(id);
  state.bookworm.bookwormDetailsApi = user;
};
