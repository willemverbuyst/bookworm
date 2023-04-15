import { derived } from "overmind";
import { LanguageState } from "../../models";

export const state: LanguageState = {
  getAllApi: null,
  overview: derived(({ getAllApi }: LanguageState) => {
    if (!getAllApi?.data.length) {
      return null;
    }
    return getAllApi.data;
  }),
};
