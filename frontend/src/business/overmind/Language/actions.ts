/* eslint-disable no-param-reassign */
import { Context } from "..";

export const getLanguages = async ({ effects, state }: Context) => {
  state.app.isLoading = true;
  const languages = await effects.language.api.getLanguages();
  state.language.languagesApi = languages;
  state.app.isLoading = false;
};
