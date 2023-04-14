import { Column } from "./Table";

export interface UI {
  table: {
    limit: number;
    page: number;
    queryString: string;
    showAll: boolean;
  };
}

export interface ApiResponse<T> {
  status: string;
  data: T;
  message: string;
  result?: number;
  total?: number;
}

export interface BaseState<T> {
  getAllApi: ApiResponse<Array<T>> | null;
  overview: Array<T> | null;
}

export interface UITable<T, U> {
  columns: Column<T>;
  filter: U;
  limit: number;
  noDataMessage: string;
  page: number;
  queryString: string;
  searchKeys: Array<keyof T>;
  showAll: boolean;
  title: string;
}
