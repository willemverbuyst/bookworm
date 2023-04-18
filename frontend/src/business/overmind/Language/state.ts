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
  selectOptions: derived(({ getAllApi }: LanguageState) => {
    if (!getAllApi?.data.length) {
      return null;
    }
    return getAllApi.data.map((i) => ({
      display: i.language,
      value: i.id,
    }));
  }),
  ui: {
    table: {
      columns: [{ field: "language" }],
      filter: null,
      limit: 10,
      noDataMessage: "no languages",
      page: 1,
      queryString: "",
      searchKeys: ["language"],
      showAll: false,
      title: "overview of languages",
    },
  },
};
