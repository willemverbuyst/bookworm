import { derived } from "overmind";
import { GenreState } from "../../models";

export const state: GenreState = {
  isLoading: false,
  getAllApi: null,
  overview: derived(({ getAllApi, ui }: GenreState) => {
    if (!getAllApi?.data.length) {
      return [];
    }
    const { page, limit } = ui.table;
    return getAllApi.data
      .map((i) => ({ id: i.id, name: i.genre }))
      .slice((page - 1) * limit, limit * page);
  }),
  selectOptions: derived(({ getAllApi }: GenreState) => {
    if (!getAllApi?.data.length) {
      return [];
    }
    return getAllApi.data.map((i) => ({
      display: i.genre,
      value: i.id,
    }));
  }),
  ui: {
    table: {
      columns: [{ field: "name" }],
      filter: null,
      limit: 10,
      noDataMessage: "no genres",
      page: 1,
      queryString: "",
      searchKeys: ["name"],
      showAll: false,
      title: "overview of genres",
    },
  },
};
