import { derived } from "overmind";
import { GenreState } from "../../models";

export const state: GenreState = {
  getAllApi: null,
  overview: derived(({ getAllApi }: GenreState) => {
    if (!getAllApi?.data.length) {
      return null;
    }
    return getAllApi.data;
  }),
  selectOptions: derived(({ getAllApi }: GenreState) => {
    if (!getAllApi?.data.length) {
      return null;
    }
    return getAllApi.data.map((i) => ({
      display: i.genre,
      value: i.id,
    }));
  }),
  ui: {
    table: {
      columns: [{ field: "genre" }],
      filter: null,
      limit: 10,
      noDataMessage: "no genres",
      page: 1,
      queryString: "",
      searchKeys: ["genre"],
      showAll: false,
      title: "overview of genres",
    },
  },
};
