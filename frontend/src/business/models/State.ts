import { ApiResponse } from "./Api";

export interface UI {
  table: {
    limit: number;
    page: number;
    queryString: string;
    showAll: boolean;
  };
}

export interface BaseState<T> {
  getAllApi: ApiResponse<Array<T>> | null;
  overview: Array<T> | null;
}
