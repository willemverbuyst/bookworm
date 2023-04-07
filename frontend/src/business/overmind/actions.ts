/* eslint-disable no-param-reassign */
import { AxiosError } from "axios";
import { Context } from ".";

interface SignInCredentials {
  email: string;
  password: string;
}

export const signInUser = async (
  { actions, effects, state }: Context,
  { email, password }: SignInCredentials
) => {
  state.apiResponse = { message: "", status: undefined };
  const response = await effects.api.getUser(email, password);

  if (!response || response instanceof AxiosError) {
    actions.handleErrorResponse({ response });
    return;
  }

  state.apiResponse = {
    message: response.message,
    status: "success",
  };
  const token = response.token.access_token;
  localStorage.setItem("token", token);
  state.auth.token = token;
  state.auth.isSignedIn = true;
  state.user = response.data;
};

export const logOutUser = ({ state }: Context) => {
  // todo: send request to invalidate token
  localStorage.removeItem("token");
  state.auth.token = "";
  state.auth.isSignedIn = false;
  state.user = null;
  state.apiResponse = { message: "", status: undefined };
};

export const onInitializeOvermind = async ({
  actions,
  effects,
  state,
}: Context) => {
  const tokenFromLocalStorage = localStorage.getItem("token");
  if (!tokenFromLocalStorage) {
    return;
  }
  actions.resetApiResponse();

  const response = await effects.api.getUserByToken(tokenFromLocalStorage);

  if (!response || response instanceof AxiosError) {
    actions.handleErrorResponse({ response });
    return;
  }

  state.apiResponse = { message: response.message, status: "success" };
  const token = response.token.access_token;
  localStorage.setItem("token", token);
  state.auth.token = token;
  state.auth.isSignedIn = true;
  state.user = response.data;
};

export const getGenres = async ({ effects, state }: Context) => {
  const genres = await effects.api.getGenres();
  state.genresApi = genres;
};

export const getLanguages = async ({ effects, state }: Context) => {
  const languages = await effects.api.getLanguages();
  state.languagesApi = languages;
};

export const getAuthorStatsPage = async ({ effects, state }: Context) => {
  const pagesStats = await effects.api.getAuthorStatsPages();
  state.authorStatsPageApi = pagesStats;
};

export const getReviews = async (
  { actions, effects, state }: Context,
  { limit, page }: { limit: number; page: number }
) => {
  actions.resetApiResponse();
  const response = await effects.api.getReviews({ limit, page });

  if (!response || response instanceof AxiosError) {
    actions.handleErrorResponse({ response });
    return;
  }

  state.reviewsApi = response;
};

export const postReview = async (
  { state, effects }: Context,
  {
    author,
    bookTitle,
    review,
    rating,
  }: {
    author: string;
    bookTitle: string;
    review: string;
    rating: number | null;
  }
) => {
  const { token } = state.auth;
  const response = await effects.api.postReview(
    author,
    bookTitle,
    review,
    rating,
    token
  );
  if (response.status === "success") {
    state.apiResponse = {
      message: response.message,
      status: "success",
    };
  } else {
    state.apiResponse = {
      statusText: "Bad request",
      message: response.message,
      status: "error",
    };
  }
};

export const handleErrorResponse = (
  { state }: Context,
  { response }: { response: unknown }
) => {
  if (
    response &&
    response instanceof AxiosError &&
    response.response &&
    "data" in response.response &&
    typeof response.response.data === "object" &&
    response.response.data != null &&
    "detail" in response.response.data
  ) {
    state.apiResponse = {
      statusText: JSON.stringify(response.response.statusText),
      message: JSON.stringify(response.response?.data.detail),
      status: "error",
    };
  } else {
    state.apiResponse = {
      statusText: "Bad request",
      message: "something went very wrong",
      status: "error",
    };
  }
};

export const resetApiResponse = ({ state }: Context) => {
  state.apiResponse = { statusText: "", message: "", status: undefined };
};
