import { isWithinInterval, parseISO, subDays } from "date-fns";

export function filterByExpenceDate(expenceData, period) {
  let interval;

  switch (period) {
    case "today":
      interval = { start: subDays(new Date(), 1), end: new Date() };
      break;
    case "week":
      interval = { start: subDays(new Date(), 7), end: new Date() };
      break;
    case "month":
      interval = { start: subDays(new Date(), 30), end: new Date() };
      break;
    case "year":
      interval = { start: subDays(new Date(), 365), end: new Date() };
      break;
    default:
      interval = { start: new Date(), end: new Date() };
  }

  const filteredExpenceData = expenceData.filter((item) => {
    const entryDate = parseISO(item.entry_date);
    return isWithinInterval(entryDate, interval);
  });

  const expenceBalance = filteredExpenceData.reduce(
    (accum, cur) =>
      accum +
      Number(cur?.cafe_restaurant || 0) +
      Number(cur?.groceries_shopping || 0) +
      Number(cur?.health || 0) +
      Number(cur.other || 0) +
      Number(cur.transportation || 0) +
      Number(cur.utilities || 0),
    0
  );

  return { filteredExpenceData, expenceBalance };
}
