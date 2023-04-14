import { derived } from "overmind";
import { RootState } from "..";
import { compare } from "../../functions/compare";
import { getColorIndex } from "../../functions/getColorIndex";
import { ApiResponse } from "../../models/Api";
import { Bookworm, BookwormStatsLibrary } from "../../models/Bookworm";
import { BaseState, UITable } from "../../models/State";
import { UserApi } from "../../models/User";

export interface BookwormState extends BaseState<Bookworm> {
  bookwormDetailsApi: Omit<UserApi, "token"> | null;
  statsLibrary: Array<{
    userIsActive: string;
    libraryName: string;
    numberOfBookworms: number;
    color: string;
  }> | null;
  statsLibraryApi: ApiResponse<Array<BookwormStatsLibrary>> | null;
  ui: {
    table: UITable<
      Bookworm,
      {
        active: boolean;
      }
    >;
  };
}

export const state: BookwormState = {
  getAllApi: null,
  bookwormDetailsApi: null,
  overview: derived(({ getAllApi }: BookwormState) => {
    if (!getAllApi?.data.length) {
      return null;
    }
    return getAllApi.data;
  }),
  statsLibrary: derived(
    ({ statsLibraryApi }: BookwormState, rootState: RootState) => {
      if (!statsLibraryApi?.data.length) {
        return null;
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
