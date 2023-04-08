import { derived } from "overmind";
import { LanguageState } from "../../models/State";

export const state: LanguageState = {
  getAllApiResponse: null,
  overview: derived(({ getAllApiResponse }: LanguageState) => {
    if (!getAllApiResponse?.data.length) {
      return null;
    }
    return getAllApiResponse.data;
  }),
};
