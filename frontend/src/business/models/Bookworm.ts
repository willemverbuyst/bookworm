import { ApiResponse, BaseState, UITable } from "./State";
import { UserApi } from "./User";

export interface Bookworm {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  user_is_active: boolean;
  library_name: string;
}

export interface BookwormStatsLibrary {
  id: string;
  library_name: string;
  user_active: boolean;
  number_of_bookworms_per_library: number;
}

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
