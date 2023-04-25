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
    return getAllApi.data;
  }),
  statsLibrary: derived(
    ({ statsLibraryApi }: BookwormState, rootState: RootState) => {
      if (!statsLibraryApi?.data.length) {
        return [];
      }

      return [...statsLibraryApi.data]
        .sort(compare("user_active"))
        .sort(compare("id"))
        .map((d, index) => ({
          userIsActive: `${d.user_active}`,
          libraryName: `${d.library_name}`,
          numberOfBookworms: d.number_of_bookworms_per_library,
          color: rootState.app.colors[getColorIndex(index)],
        }));
    }
  ),
  statsLibraryApi: null,
  ui: {
    table: {
      columns: [
        { field: "first_name" },
        { field: "last_name" },
        { field: "email" },
        { field: "phone" },
        { field: "library_name" },
      ],
      filter: {
        active: true,
      },
      limit: 15,
      noDataMessage: "no bookworms",
      page: 1,
      queryString: "",
      searchKeys: ["first_name", "last_name", "email"],
      showAll: false,
      title: "overview of bookworms",
    },
  },
};
