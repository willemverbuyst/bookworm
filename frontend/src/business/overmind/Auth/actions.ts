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
  state.auth.isLoading = true;
  actions.api.resetApiResponse();
  const response = await effects.auth.api.getUser(email, password);

  if (!response || response instanceof AxiosError) {
    actions.api.handleErrorResponse({ response });
  } else {
    state.api.response = {
      message: response.message,
      status: "success",
    };

    const token = response.token.access_token;
    localStorage.setItem("token", token);
    state.auth.token = token;
    state.auth.isSignedIn = true;
    state.auth.user = response.data;
  }

  state.auth.isLoading = false;
};

export const logOutUser = ({ state }: Context) => {
  state.auth.isLoading = true;
  // todo: send request to invalidate token
  localStorage.removeItem("token");
  state.auth.token = "";
  state.auth.isSignedIn = false;
  state.auth.user = null;
  state.api.response = { message: "", status: undefined };
  state.auth.isLoading = false;
};

export const getUserByToken = async (
  { actions, effects, state }: Context,
  { tokenFromLocalStorage }: { tokenFromLocalStorage: string }
) => {
  state.auth.isLoading = true;
  actions.api.resetApiResponse();
  const response = await effects.auth.api.getUserByToken(tokenFromLocalStorage);

  if (!response || response instanceof AxiosError) {
    actions.api.handleErrorResponse({ response });
    state.app.isLoading = false;
  } else {
    state.api.response = {
      message: response.message,
      status: "success",
    };

    const token = response.token.access_token;
    localStorage.setItem("token", token);
    state.auth.token = token;
    state.auth.isSignedIn = true;
    state.auth.user = response.data;
  }
  state.auth.isLoading = false;
};
