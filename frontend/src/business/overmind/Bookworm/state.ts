import { derived } from "overmind";
import { ApiResponse } from "../../models/Api";
import { Bookworm, BookwormStatsLibrary } from "../../models/Bookworm";
import { BaseState, UITable } from "../../models/State";
import { UserApi } from "../../models/User";

export interface BookwormState extends BaseState<Bookworm> {
  bookwormDetailsApi: Omit<UserApi, "token"> | null;
  statsLibrary: Array<BookwormStatsLibrary> | null;
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
  statsLibrary: derived(({ statsLibraryApi }: BookwormState) => {
    if (!statsLibraryApi?.data.length) {
      return null;
    }
    return statsLibraryApi.data;
  }),
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
      page: 1,
      queryString: "",
      showAll: false,
    },
  },
};
