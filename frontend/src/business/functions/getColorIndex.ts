export function getColorIndex(index: number) {
  switch (true) {
    case index === 0:
    case index === 1:
      return 0;
    case index % 2 === 0:
      return index - 1;
    default:
      return index - 2;
  }
}
