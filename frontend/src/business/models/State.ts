export type Column<T> = {
  field: keyof T;
  isNumeric: boolean;
  showInput: boolean;
  queryString: string;
  display: boolean;
};

interface UITable<T, U> {
  columns: Record<keyof T, Column<T>>;
  filter: U;
  sort: {
    property: keyof Partial<T>;
    sortDirection: keyof typeof SortDirection;
  };
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

export const SortDirection = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;
