/* eslint-disable no-param-reassign */
import { AxiosError } from "axios";
import { Context } from "..";
import { Page } from "../../models";

export const showSignInPage = ({ state }: Context) => {
  state.app.currentPage = Page.SIGNIN;
};

export const showSignUpPage = ({ actions, state }: Context) => {
  actions.country.getCountries();
  actions.library.getLibraries();
  state.app.currentPage = Page.SIGNUP;
};

interface SignInCredentials {
  email: string;
  password: string;
}

export const signInUser = async (
  { actions, effects, state }: Context,
  { email, password }: SignInCredentials
) => {
  state.app.isLoading = true;
  state.api.response = { message: "", status: undefined };
  const response = await effects.auth.api.getUser(email, password);

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
  state.auth.user = response.data;
  state.app.isLoading = false;
};

export const logOutUser = ({ state }: Context) => {
  state.app.isLoading = true;
  // todo: send request to invalidate token
  localStorage.removeItem("token");
  state.auth.token = "";
  state.auth.isSignedIn = false;
  state.auth.user = null;
  state.api.response = { message: "", status: undefined };
  state.app.isLoading = false;
};
