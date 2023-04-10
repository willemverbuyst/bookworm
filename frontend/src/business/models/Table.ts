export type Column<T> = Array<{ field: keyof T; isNumeric?: boolean }>;
