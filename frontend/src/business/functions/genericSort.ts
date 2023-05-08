export function genericSort<T>(
  a: T,
  b: T,
  propertyType: { property: keyof T; isDescending: boolean }
): number {
  const { property, isDescending } = propertyType;
  const result = (): number => {
    if (a[property] > b[property]) {
      return 1;
    }

    if (a[property] < b[property]) {
      return -1;
    }

    return 0;
  };
  return isDescending ? result() * -1 : result();
}
