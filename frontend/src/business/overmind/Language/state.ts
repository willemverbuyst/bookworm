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
      "name of language": i.name_of_language,
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
      columns: [{ field: "name of language" }],
      filter: null,
      limit: 10,
      noDataMessage: "no languages",
      page: 1,
      queryString: "",
      searchKeys: ["name of language"],
      showAll: false,
      title: "overview of languages",
    },
  },
};
