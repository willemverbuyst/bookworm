import { derived } from "overmind";
import { LanguageState } from "../../models";

export const state: LanguageState = {
  getAllApi: null,
  selectOptions: derived(({ getAllApi }: LanguageState) => {
    if (!getAllApi?.data.length) {
      return null;
    }
    return getAllApi.data.map((i) => ({
      display: i.language,
      value: i.id,
    }));
  }),
};
