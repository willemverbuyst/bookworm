/* eslint-disable no-param-reassign */
import { AxiosError } from "axios";
import { Context } from "..";

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
    state.api.response = {
      statusText: JSON.stringify(response.response.statusText),
      message: JSON.stringify(response.response?.data.detail),
      status: "error",
    };
  } else {
    state.api.response = {
      statusText: "Bad request",
      message: "something went very wrong",
      status: "error",
    };
  }
};

export const resetApiResponse = ({ state }: Context) => {
  state.api.response = { statusText: "", message: "", status: undefined };
};
