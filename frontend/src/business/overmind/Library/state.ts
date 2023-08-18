import { derived } from "overmind";
import { LibraryState, SortDirection } from "../../models";
import { searchByBar, searchByColumn, sortByProperty } from "../helpers";
import { returnLibraryObject } from "./helpers";

export const state: LibraryState = {
  isLoading: false,
  detailsApi: null,
  details: derived(({ detailsApi }: LibraryState) => {
    if (!detailsApi?.data) {
      return null;
    }
    return returnLibraryObject(detailsApi.data);
  }),
  getAllApi: null,
  overview: derived(
    ({
      getAllApi,
      ui: {
        table: { columns, searchKeys, queryString, sort },
      },
    }: LibraryState) => {
      if (!getAllApi?.data.length) {
        return [];
      }
      return getAllApi.data
        .map(returnLibraryObject)
        .filter(searchByBar(searchKeys, queryString))
        .sort(sortByProperty(sort))
        .filter(searchByColumn(columns));
    }
  ),
  selectOptions: derived(({ getAllApi }: LibraryState) => {
    if (!getAllApi?.data.length) {
      return [];
    }
    return getAllApi.data.map((i) => ({
      display: i.name_of_library,
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
        address: {
          display: false,
          field: "address",
          showInput: false,
          queryString: "",
          isNumeric: false,
        },
        postalCode: {
          display: false,
          field: "postalCode",
          showInput: false,
          queryString: "",
          isNumeric: false,
        },
        "name of library": {
          display: true,
          field: "name of library",
          showInput: false,
          queryString: "",
          isNumeric: false,
        },
        phone: {
          display: true,
          field: "phone",
          showInput: false,
          queryString: "",
          isNumeric: false,
        },
        city: {
          display: true,
          field: "city",
          showInput: false,
          queryString: "",
          isNumeric: false,
        },
        country: {
          display: true,
          field: "country",
          showInput: false,
          queryString: "",
          isNumeric: false,
        },
      },
      filter: null,
      sort: {
        property: "name of library",
        sortDirection: SortDirection.ASCENDING,
      },
      limit: 10,
      noDataMessage: "no libraries",
      page: 1,
      pagination: false,
      queryString: "",
      searchKeys: ["name of library"],
      showAll: false,
      title: "overview of libraries",
    },
  },
};
