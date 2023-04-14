export function groupBy<T, K extends keyof T>(
  xs: Array<T>,
  key: K
): { [key: string]: Array<T> } {
  return xs.reduce((rv: { [key: string]: Array<T> }, x: T) => {
    const keyValue = x[key];
    if (typeof keyValue === "string" || typeof keyValue === "number") {
      // eslint-disable-next-line no-param-reassign
      (rv[keyValue] = rv[keyValue] || []).push(x);
    }

    return rv;
  }, {});
}
