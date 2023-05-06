export type Column<T> = Array<{ field: keyof T; isNumeric?: boolean }>;

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
