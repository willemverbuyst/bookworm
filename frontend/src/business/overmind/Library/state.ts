import { derived } from "overmind";
import { genericSearch, genericSort } from "../../functions";
import { LibraryState, SortDirection } from "../../models";

export const state: LibraryState = {
  isLoading: false,
  detailsApi: null,
  details: derived(({ detailsApi }: LibraryState) => {
    if (!detailsApi?.data) {
      return null;
    }
    return {
      id: detailsApi.data.id,
      "name of library": detailsApi.data.name_of_library,
      phone: detailsApi.data.phone,
      address: detailsApi.data.address,
      postalCode: detailsApi.data.postal_code,
      city: detailsApi.data.city,
      country: detailsApi.data.country,
    };
  }),
  getAllApi: null,
  overview: derived(
    ({
      getAllApi,
      ui: {
        table: { searchKeys, queryString, sort },
      },
    }: LibraryState) => {
      if (!getAllApi?.data.length) {
        return [];
      }
      return getAllApi.data
        .map((i) => ({
          id: i.id,
          "name of library": i.name_of_library,
          phone: i.phone,
          address: i.address,
          postalCode: i.postal_code,
          city: i.city,
          country: i.country,
        }))
        .filter((a) => genericSearch(a, searchKeys, queryString, false))
        .sort((a, b) =>
          genericSort(a, b, {
            property: sort.property,
            sortDirection: sort.sortDirection,
          })
        );
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
      columns: [
        { field: "name of library" },
        { field: "phone" },
        { field: "city" },
        { field: "country" },
      ],
      filter: null,
      sort: {
        property: "name of library",
        sortDirection: SortDirection.ASCENDING,
      },
      limit: 10,
      noDataMessage: "no libraries",
      page: 1,
      queryString: "",
      searchKeys: ["name of library"],
      showAll: false,
      title: "overview of libraries",
    },
  },
};
