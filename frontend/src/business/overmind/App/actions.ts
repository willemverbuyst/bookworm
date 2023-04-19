/* eslint-disable no-param-reassign */
import { AxiosError } from "axios";
import { Context } from "..";
import { Page } from "../../models";

export const onInitializeOvermind = async ({
  actions,
  effects,
  state,
}: Context) => {
  effects.app.router.initialize({
    "/home": actions.app.showHomePage,
    "/authors": actions.author.showAuthorsPage,
    "/books": actions.app.showBooksPage,
    "/signin": actions.app.showSignInPage,
    "/signup": actions.app.showSignUpPage,
  });
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

export const showHomePage = ({ state }: Context) => {
  state.app.currentPage = Page.HOME;
};

export const showBooksPage = ({ state }: Context) => {
  state.app.currentPage = Page.BOOKS;
};

export const showSignInPage = ({ state }: Context) => {
  state.app.currentPage = Page.SIGNIN;
};

export const showSignUpPage = ({ state }: Context) => {
  state.app.currentPage = Page.SIGNUP;
};
