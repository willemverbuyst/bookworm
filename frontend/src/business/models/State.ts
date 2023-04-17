import { Column } from "./Table";

interface UITable<T, U> {
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

export interface UI<T, U> {
  table: UITable<T, U>;
}

export interface ApiResponse<T> {
  status: string;
  data: T;
  message: string;
  result?: number;
  total?: number;
}

export interface BaseState<T> {
  getAllApi: ApiResponse<T[]> | null;
  overview: T[] | null;
}

export interface BaseStateSelect<T> {
  getAllApi: ApiResponse<T[]> | null;
  selectOptions: { display: string; value: string }[] | null;
}
