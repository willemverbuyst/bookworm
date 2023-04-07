/* eslint-disable @typescript-eslint/no-shadow */
import { derived } from "overmind";
import { LanguageState } from "../../models/State";

export const state: LanguageState = {
  languagesApi: null,
  languagesOverview: derived(({ languagesApi }: LanguageState) => {
    if (!languagesApi?.data.length) {
      return null;
    }
    return languagesApi.data;
  }),
};
