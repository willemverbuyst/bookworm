/* eslint-disable no-param-reassign */
import { Context } from ".";
import { Review } from "../models/ReviewApi";

interface LoginCredentials {
  email: string;
  password: string;
}

export const loginUser = async (
  { effects, state }: Context,
  { email, password }: LoginCredentials
) => {
  state.apiResponse = { message: "", status: undefined };
  const response = await effects.api.getUser(email, password);
  if (response.status === "success") {
    state.apiResponse = { message: response.message, status: "success" };
    const token = response.token.access_token;
    localStorage.setItem("token", token);
    state.token = token;
    state.isLoggedIn = true;
    state.user = response.data;
  } else {
    state.apiResponse = { message: response.message, status: "error" };
  }
};

export const logoutUser = ({ state }: Context) => {
  localStorage.removeItem("token");
  state.token = "";
  state.isLoggedIn = false;
  state.user = null;
  state.apiResponse = { message: "", status: undefined };
};

export const onInitializeOvermind = async ({ state }: Context) => {
  const token = localStorage.getItem("token");
  if (token) {
    state.token = token;
    state.isLoggedIn = true;
  }
};

export const getAllAuthors = async ({ effects, state }: Context) => {
  const allAuthors = await effects.api.getAllAuthors();
  state.authorsApi = allAuthors;
};

export const getAllBooks = async ({ effects, state }: Context) => {
  const allBooks = await effects.api.getAllBooks();
  state.booksApi = allBooks;
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
