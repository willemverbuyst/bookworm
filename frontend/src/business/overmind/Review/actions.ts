/* eslint-disable no-param-reassign */
import { AxiosError } from "axios";
import { Context } from "..";

export const getReviews = async (
  { actions, effects, state }: Context,
  { limit, page }: { limit: number; page: number }
) => {
  actions.review.resetApiResponse();
  const response = await effects.review.api.getReviews({ limit, page });

  if (!response || response instanceof AxiosError) {
    actions.review.handleErrorResponse({ response });
    return;
  }

  state.review.reviewsApi = response;
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
  const response = await effects.review.api.postReview(
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
