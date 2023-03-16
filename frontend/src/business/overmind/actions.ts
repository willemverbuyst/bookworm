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
    state.token = token;
    state.isSignedIn = true;
    state.user = response.data;
  } else {
    state.apiResponse = { message: response.message, status: "error" };
  }
};

export const logOutUser = ({ state }: Context) => {
  localStorage.removeItem("token");
  state.token = "";
  state.isSignedIn = false;
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
    state.token = token;
    state.isSignedIn = true;
    state.user = response.data;
  } else {
    state.apiResponse = { message: response.message, status: "error" };
  }
};

export const getAllAuthors = async ({ effects, state }: Context) => {
  const allAuthors = await effects.api.getAllAuthors();
  state.authorsApi = allAuthors;
};

export const getAllBooks = async (
  { effects, state }: Context,
  { genre, language }: { genre: string; language: string }
) => {
  const allBooks = await effects.api.getAllBooks({ genre, language });
  state.booksApi = allBooks;
};

export const getAllGenres = async ({ effects, state }: Context) => {
  const allGenres = await effects.api.getAllGenres();
  state.genresApi = allGenres;
};

export const getAllLanguages = async ({ effects, state }: Context) => {
  const allLanguages = await effects.api.getAllLanguages();
  state.languagesApi = allLanguages;
};

export const getAuthorStatsPage = async ({ effects, state }: Context) => {
  const pagesStats = await effects.api.getStatsAuthorPages();
  state.authorStatsPageApi = pagesStats;
};

export const getBookStatsGenre = async ({ effects, state }: Context) => {
  const genresStats = await effects.api.getStatsBooksGenres();
  state.bookStatsGenreApi = genresStats;
};

export const getBookStatsLanguage = async ({ effects, state }: Context) => {
  const languagesStats = await effects.api.getStatsBooksLanguages();
  state.bookStatsLanguageApi = languagesStats;
};

export const postReview = async (
  { state, effects }: Context,
  { author, bookTitle, review, rating }: Review
) => {
  const { token } = state;
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
