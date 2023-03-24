/* eslint-disable no-param-reassign */
import { Context } from ".";
import { Review } from "../models/ReviewApi";

interface SignInCredentials {
  email: string;
  password: string;
}

export const signInUser = async (
  { effects, state }: Context,
  { email, password }: SignInCredentials
) => {
  state.apiResponse = { message: "", status: undefined };
  const response = await effects.api.getUser(email, password);
  if (response.status === "success") {
    state.apiResponse = { message: response.message, status: "success" };
    const token = response.token.access_token;
    localStorage.setItem("token", token);
    state.auth.token = token;
    state.auth.isSignedIn = true;
    state.user = response.data;
  } else {
    state.apiResponse = { message: response.message, status: "error" };
  }
};

export const logOutUser = ({ state }: Context) => {
  localStorage.removeItem("token");
  state.auth.token = "";
  state.auth.isSignedIn = false;
  state.user = null;
  state.apiResponse = { message: "", status: undefined };
};

export const onInitializeOvermind = async ({ effects, state }: Context) => {
  const tokenFromLocalStorage = localStorage.getItem("token");
  if (!tokenFromLocalStorage) {
    return;
  }
  state.apiResponse = { message: "", status: undefined };
  const response = await effects.api.getUserByToken(tokenFromLocalStorage);
  if (response.status === "success") {
    state.apiResponse = { message: response.message, status: "success" };
    const token = response.token.access_token;
    localStorage.setItem("token", token);
    state.auth.token = token;
    state.auth.isSignedIn = true;
    state.user = response.data;
  } else {
    state.apiResponse = { message: response.message, status: "error" };
  }
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
