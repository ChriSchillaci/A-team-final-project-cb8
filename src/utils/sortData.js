export const sortData = (data, prop) =>
  data?.toSorted((a, b) => b[prop] - a[prop]);
