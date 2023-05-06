import { derived } from "overmind";
import { RootState } from "..";
import { compare, getColorIndex } from "../../functions";
import { BookwormState } from "../../models";

export const state: BookwormState = {
  isLoading: false,
  getAllApi: null,
  bookwormDetailsApi: null,
  overview: derived(({ getAllApi }: BookwormState) => {
    if (!getAllApi?.data.length) {
      return [];
    }
    return getAllApi.data.map((i) => ({
      id: i.id,
      "first name": i.first_name,
      "last name": i.last_name,
      email: i.email,
      phone: i.phone,
      userIsActive: i.user_is_active,
      library: i.library,
    }));
  }),
  statsLibrary: derived(
    ({ statsLibraryApi }: BookwormState, rootState: RootState) => {
      if (!statsLibraryApi?.data.length) {
        return [];
      }

      return [...statsLibraryApi.data]
        .sort(compare("user_is_active"))
        .sort(compare("id"))
        .map((d, index) => ({
          id: d.id,
          userIsActive: d.user_is_active,
          library: d.library,
          numberOfBookwormsPerLibrary: d.number_of_bookworms_per_library,
          color: rootState.app.colors[getColorIndex(index)],
        }));
    }
  ),
  statsLibraryApi: null,
  ui: {
    table: {
      columns: [
        { field: "first name" },
        { field: "last name" },
        { field: "email" },
        { field: "phone" },
        { field: "library" },
      ],
      filter: {
        active: true,
      },
      limit: 15,
      noDataMessage: "no bookworms",
      page: 1,
      queryString: "",
      searchKeys: ["first name", "last name", "email"],
      showAll: false,
      title: "overview of bookworms",
    },
  },
};
