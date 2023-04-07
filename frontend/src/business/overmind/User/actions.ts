/* eslint-disable no-param-reassign */
import { AxiosError } from "axios";
import { Context } from "..";

interface SignInCredentials {
  email: string;
  password: string;
}

export const signInUser = async (
  { actions, effects, state }: Context,
  { email, password }: SignInCredentials
) => {
  state.api.response = { message: "", status: undefined };
  const response = await effects.user.api.getUser(email, password);

  if (!response || response instanceof AxiosError) {
    actions.api.handleErrorResponse({ response });
    return;
  }

  state.api.response = {
    message: response.message,
    status: "success",
  };
  const token = response.token.access_token;
  localStorage.setItem("token", token);
  state.auth.token = token;
  state.auth.isSignedIn = true;
  state.user.user = response.data;
};

export const logOutUser = ({ state }: Context) => {
  // todo: send request to invalidate token
  localStorage.removeItem("token");
  state.auth.token = "";
  state.auth.isSignedIn = false;
  state.user.user = null;
  state.api.response = { message: "", status: undefined };
};
