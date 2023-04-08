/* eslint-disable no-param-reassign */
import { Context } from "..";

export const getBookworms = async (
  { effects, state }: Context,
  { limit, page }: { limit: number; page: number }
) => {
  state.app.isLoading = true;
  const bookworms = await effects.bookworm.api.getBookworms({ limit, page });
  state.bookworm.bookwormApi = bookworms;
  state.app.isLoading = false;
};

export const getBookWormById = async (
  { effects, state }: Context,
  { id }: { id: string }
) => {
  state.app.isLoading = true;
  const user = await effects.bookworm.api.getBookwormById(id);
  state.bookworm.bookwormDetailsApi = user;
  state.app.isLoading = false;
};
