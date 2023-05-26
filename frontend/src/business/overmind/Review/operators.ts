/* eslint-disable no-param-reassign */
import { AxiosError } from "axios";
import { Context } from "..";
import { Page } from "../../models";

export const setReviewsPage =
  () =>
  ({ state }: Context) => {
    state.app.currentPage = Page.REVIEWS;
  };

export const setAddReviewPage =
  () =>
  ({ state }: Context) => {
    state.app.currentPage = Page.REVIEWS_NEW;
  };

export const getReviews =
  () =>
  async ({ actions, effects, state }: Context) => {
    const limit = 3;
    const page = 1;
    state.review.isLoading = true;
    actions.api.resetApiResponse();
    const response = await effects.review.api.getReviews({ limit, page });

    if (!response || response instanceof AxiosError) {
      actions.api.handleErrorResponse({ response });
    } else {
      state.review.getAllApi = response;
    }

    state.review.isLoading = false;
  };

export const postReview =
  () =>
  async (
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
    state.review.isLoading = true;
    const { token } = state.auth;
    const response = await effects.review.api.postReview(
      author,
      bookTitle,
      review,
      rating,
      token
    );
    if (response.status === "success") {
      state.api.response = {
        message: response.message,
        status: "success",
      };
    } else {
      state.api.response = {
        statusText: "Bad request",
        message: response.message,
        status: "error",
      };
    }
    state.review.isLoading = false;
  };

export const getAuthors =
  () =>
  async (
    { actions, effects, state }: Context,
    { inputValue }: { inputValue: string }
  ) => {
    state.review.isLoading = true;
    const response = await effects.review.api.getAuthors(inputValue);

    if (!response || response instanceof AxiosError) {
      actions.api.handleErrorResponse({ response });
      state.review.isLoading = false;
      return [];
    }

    state.review.authorsForReviewApi = response;

    state.review.isLoading = false;
    return response.data.map((i) => ({ value: i.id, label: i.name_of_author }));
  };

export const getBooksForAuthor =
  () =>
  async (
    { actions, effects, state }: Context,
    { authorId }: { authorId: string }
  ) => {
    if (!authorId) return;

    state.review.isLoading = true;
    const response = await effects.review.api.getBooksForAuthor(authorId);

    if (!response || response instanceof AxiosError) {
      actions.api.handleErrorResponse({ response });
      state.review.isLoading = false;
    }

    state.review.booksByAuthorForReviewApi = response;

    state.review.isLoading = false;
  };
