/* eslint-disable no-param-reassign */
import { AxiosError } from "axios";
import { Context } from ".";
import { Review } from "../models/Review";

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

  state.apiResponse = { message: response.message, status: "success" };
  const token = response.token.access_token;
  localStorage.setItem("token", token);
  state.auth.token = token;
  state.auth.isSignedIn = true;
  state.user = response.data;
};

export const logOutUser = ({ state }: Context) => {
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
  state.apiResponse = { message: "", status: undefined };

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

export const getAuthors = async (
  { effects, state }: Context,
  { limit, page }: { limit: number; page: number }
) => {
  const authors = await effects.api.getAuthors({ limit, page });
  state.authorsApi = authors;
};

export const getBookworms = async (
  { effects, state }: Context,
  { limit, page }: { limit: number; page: number }
) => {
  const bookworms = await effects.api.getBookworms({ limit, page });
  state.bookwormApi = bookworms;
};

export const getBooks = async (
  { effects, state }: Context,
  {
    genre,
    language,
    limit,
    page,
  }: {
    genre: string | null;
    language: string | null;
    limit: number;
    page: number;
  }
) => {
  const books = await effects.api.getBooks({
    genre,
    language,
    limit,
    page,
  });
  state.booksApi = books;
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

export const getBookStatsGenre = async ({ effects, state }: Context) => {
  const genresStats = await effects.api.getBookStatsGenres();
  state.bookStatsGenreApi = genresStats;
};

export const getBookStatsLanguage = async ({ effects, state }: Context) => {
  const languagesStats = await effects.api.getBookStatsLanguages();
  state.bookStatsLanguageApi = languagesStats;
};

export const getBookStatsYearPublished = async ({
  effects,
  state,
}: Context) => {
  const yearPublishedStats = await effects.api.getBookStatsYearPublished();
  state.bookStatsYearPublishedApi = yearPublishedStats;
};

export const getBookWormById = async (
  { effects, state }: Context,
  { id }: { id: string }
) => {
  const user = await effects.api.getBookwormById(id);
  state.bookwormDetailsApi = user;
};

export const getRentals = async (
  { effects, state }: Context,
  { limit, page, filter }: { limit: number; page: number; filter: string }
) => {
  const rentals = await effects.api.getRentals({ limit, page, filter });
  state.rentalsApi = rentals;
};

export const getRentalStatsDuration = async ({ effects, state }: Context) => {
  const rentalStats = await effects.api.getRentalStatsDuration();
  state.rentalStatsDurationApi = rentalStats;
};

export const postReview = async (
  { state, effects }: Context,
  { author, bookTitle, review, rating }: Review
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
    state.apiResponse = { message: response.message, status: "success" };
  } else {
    state.apiResponse = { message: response.message, status: "error" };
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
      message: JSON.stringify(response.response?.data.detail),
      status: "error",
    };
  } else {
    state.apiResponse = {
      message: "something went very wrong",
      status: "error",
    };
  }
};
