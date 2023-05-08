export function genericSearch<T>(
  object: T,
  properties: Array<keyof T>,
  query: string,
  shouldBeCaseSensitive = false
) {
  if (query === "") {
    return true;
  }

  return properties.some((property) => {
    const value = object[property];

    if (typeof value === "string" || typeof value === "number") {
      if (shouldBeCaseSensitive) {
        return value.toString().includes(query);
      }
      return value.toString().toLowerCase().includes(query.toLowerCase());
    }
    return false;
  });
}
