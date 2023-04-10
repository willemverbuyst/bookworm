import { derived } from "overmind";
import { Bookworm } from "../../models/Bookworm";
import { BaseState } from "../../models/State";
import { UserApi } from "../../models/User";

export interface BookwormState extends BaseState<Bookworm> {
  bookwormDetailsApi: Omit<UserApi, "token"> | null;
  ui: {
    table: {
      columns: Array<{ field: keyof Bookworm; isNumeric?: boolean }>;
      filter: boolean;
      limit: number;
      page: number;
      queryString: string;
      showAll: boolean;
    };
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
  ui: {
    table: {
      columns: [
        { field: "first_name" },
        { field: "last_name" },
        { field: "email" },
        { field: "phone" },
        { field: "library_name" },
      ],
      filter: true,
      limit: 15,
      page: 1,
      queryString: "",
      showAll: false,
    },
  },
};
