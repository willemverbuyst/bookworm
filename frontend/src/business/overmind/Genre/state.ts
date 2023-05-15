import { derived } from "overmind";
import { genericSearch, genericSort } from "../../functions";
import { GenreState, SortDirection } from "../../models";

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
        .map((i) => ({ id: i.id, "name of genre": i.name_of_genre }))
        .slice((page - 1) * limit, limit * page)
        .filter((a) => genericSearch(a, searchKeys, queryString, false))
        .sort((a, b) =>
          genericSort(a, b, {
            property: sort.property,
            sortDirection: sort.sortDirection,
          })
        )
        .filter((i) =>
          Object.values(columns)
            .filter((c) => c.display)
            .every((c) => genericSearch(i, [c.field], c.queryString, false))
        );
    }
  ),
  selectOptions: derived(({ getAllApi }: GenreState) => {
    if (!getAllApi?.data?.length) {
      return [];
    }
    return getAllApi.data.map((i) => ({
      display: i.name_of_genre,
      value: i.id,
    }));
  }),
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
