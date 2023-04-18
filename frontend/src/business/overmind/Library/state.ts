import { derived } from "overmind";
import { LibraryState } from "../../models";

export const state: LibraryState = {
  getAllApi: null,
  overview: derived(({ getAllApi }: LibraryState) => {
    if (!getAllApi?.data.length) {
      return null;
    }
    return getAllApi.data.map((i) => ({
      id: i.id,
      name: i.library,
      phone: i.phone,
      address: i.address,
      postalCode: i.postal_code,
      city: i.city,
      country: i.country,
    }));
  }),
  selectOptions: derived(({ getAllApi }: LibraryState) => {
    if (!getAllApi?.data.length) {
      return null;
    }
    return getAllApi.data.map((i) => ({
      display: i.library,
      value: i.id,
    }));
  }),
  ui: {
    table: {
      columns: [
        { field: "name" },
        { field: "phone" },
        { field: "address" },
        { field: "postalCode" },
        { field: "city" },
        { field: "country" },
      ],
      filter: null,
      limit: 10,
      noDataMessage: "no libraries",
      page: 1,
      queryString: "",
      searchKeys: ["name"],
      showAll: false,
      title: "overview of libraries",
    },
  },
};
