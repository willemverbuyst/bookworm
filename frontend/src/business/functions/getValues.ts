type Values<T> = {
  [K in keyof T]: T[K];
}[keyof T][];

export const getValues = <T extends object>(obj: T) =>
  Object.values(obj) as Values<T>;
