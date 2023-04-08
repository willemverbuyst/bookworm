/* eslint-disable no-param-reassign */
import { AxiosError } from "axios";
import { Context } from "..";

export const onInitializeOvermind = async ({
  actions,
  effects,
  state,
}: Context) => {
  const tokenFromLocalStorage = localStorage.getItem("token");
  if (!tokenFromLocalStorage) {
    return;
  }
  actions.api.resetApiResponse();

  const response = await effects.user.api.getUserByToken(tokenFromLocalStorage);

  if (!response || response instanceof AxiosError) {
    actions.api.handleErrorResponse({ response });
    return;
  }

  state.api.response = { message: response.message, status: "success" };
  const token = response.token.access_token;
  localStorage.setItem("token", token);
  state.auth.token = token;
  state.auth.isSignedIn = true;
  state.user.user = response.data;
};