import { derived } from "overmind";
import { LanguageState } from "../../models";

export const state: LanguageState = {
  isLoading: false,
  getAllApi: null,
  overview: derived(({ getAllApi }: LanguageState) => {
    if (!getAllApi?.data?.length) {
      return [];
    }
    return getAllApi.data.map((i) => ({
      id: i.id,
      nameOfLanguage: i.name_of_language,
    }));
  }),
  selectOptions: derived(({ getAllApi }: LanguageState) => {
    if (!getAllApi?.data?.length) {
      return [];
    }
    return getAllApi.data.map((i) => ({
      display: i.name_of_language,
      value: i.id,
    }));
  }),
  ui: {
    table: {
      columns: [{ field: "nameOfLanguage" }],
      filter: null,
      limit: 10,
      noDataMessage: "no languages",
      page: 1,
      queryString: "",
      searchKeys: ["nameOfLanguage"],
      showAll: false,
      title: "overview of languages",
    },
  },
};
