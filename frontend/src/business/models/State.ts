export type Column<T> = Array<{ field: keyof T; isNumeric?: boolean }>;

interface UITable<T, U, V> {
  columns: Column<T>;
  filter: U;
  sort: V;
  limit: number;
  noDataMessage: string;
  page: number;
  queryString: string;
  searchKeys: Array<keyof T>;
  showAll: boolean;
  title: string;
}

export interface UI<T, U, V> {
  table: UITable<T, U, V>;
}
