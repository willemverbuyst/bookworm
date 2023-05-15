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
        table: { columns, searchKeys, queryString, sort },
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
        )
        .filter((i) =>
          Object.values(columns)
            .filter((c) => c.display)
            .every((c) => genericSearch(i, [c.field], c.queryString, false))
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
