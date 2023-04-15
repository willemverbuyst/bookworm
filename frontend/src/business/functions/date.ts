export const calculateDays = (date1: Date, date2: Date) => {
  const difference = date1.getTime() - date2.getTime();
  const totalDays = Math.ceil(difference / (1000 * 3600 * 24));

  return totalDays + 1;
};

export const WEEKDAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;
