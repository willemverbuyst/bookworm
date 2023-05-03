import { derived } from "overmind";
import { LibraryState } from "../../models";

export const state: LibraryState = {
  isLoading: false,
  getAllApi: null,
  overview: derived(({ getAllApi }: LibraryState) => {
    if (!getAllApi?.data.length) {
      return [];
    }
    return getAllApi.data.map((i) => ({
      id: i.id,
      "name of library": i.name_of_library,
      phone: i.phone,
      address: i.address,
      postalCode: i.postal_code,
      city: i.city,
      country: i.country,
    }));
  }),
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
