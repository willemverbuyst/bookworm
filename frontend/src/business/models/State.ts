type Column<T> = {
  field: keyof T;
  isNumeric: boolean;
  showInput: boolean;
  queryString: string;
  display: boolean;
};

export type Columns<T> = Record<keyof T, Column<T>>;

export type Sort<T> = {
  property: keyof Partial<T>;
  sortDirection: keyof typeof SortDirection;
};

type UITable<T, U> = {
  columns: Columns<T>;
  filter: U;
  sort: Sort<T>;
  limit: number;
  noDataMessage: string;
  page: number;
  pagination: boolean;
  queryString: string;
  searchKeys: Array<keyof T>;
  showAll: boolean;
  title: string;
};

export type UI<T, U> = {
  table: UITable<T, U>;
};

export const SortDirection = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;
