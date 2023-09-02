import { derived } from "overmind";
import { RootState } from "..";
import { GenreState, SortDirection } from "../../models";
import { searchByBar, searchByColumn, sortByProperty } from "../helpers";

export const state: GenreState = {
  isLoading: false,
  getAllApi: null,
  overview: derived(
    ({
      getAllApi,
      ui: {
        table: { columns, limit, page, searchKeys, queryString, sort },
      },
    }: GenreState) => {
      if (!getAllApi?.data?.length) {
        return [];
      }

      return getAllApi.data
        .slice((page - 1) * limit, limit * page)
        .map((i) => ({ id: i.id, "name of genre": i.name_of_genre }))
        .filter(searchByBar(searchKeys, queryString))
        .sort(sortByProperty(sort))
        .filter(searchByColumn(columns));
    }
  ),
  selectOptions: derived(({ apiData }: GenreState) => {
    if (!apiData) {
      return [];
    }

    return Object.keys(apiData);
  }),
  apiData: null,
  showTableRows: derived(
    (_: GenreState, rootState: RootState) =>
      !!(rootState.genre.apiData && Object.keys(rootState.genre.apiData).length)
  ),
  ui: {
    table: {
      columns: {
        id: {
          display: false,
          field: "id",
          showInput: false,
          queryString: "",
          isNumeric: false,
        },
        "name of genre": {
          display: true,
          field: "name of genre",
          showInput: false,
          queryString: "",
          isNumeric: false,
        },
      },
      filter: null,
      sort: {
        property: "name of genre",
        sortDirection: SortDirection.ASCENDING,
      },
      limit: 10,
      noDataMessage: "no genres",
      page: 1,
      pagination: derived((table: GenreState["ui"]["table"]) => {
        return !table.queryString;
      }),
      queryString: "",
      searchKeys: ["name of genre"],
      showAll: false,
      title: "overview of genres",
    },
  },
};
