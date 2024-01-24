import { isWithinInterval, parseISO, subDays } from "date-fns";

export function filterByDate(period, data, expenceData) {
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

  const filteredData = data.concat(expenceData).filter((item) => {
    const entryDate = parseISO(item.entry_date);
    return isWithinInterval(entryDate, interval);
  });

  console.log(filteredData);

  const balance = filteredData.reduce(
    (accum, cur) =>
      accum +
      Number(cur?.salary || 0) +
      Number(cur?.rent_income || 0) +
      Number(cur?.remittances || 0) +
      Number(cur.business_income || 0) +
      Number(cur?.cafe_restaurant || 0) +
      Number(cur?.groceries_shopping || 0) +
      Number(cur?.health || 0) +
      Number(cur.other || 0) +
      Number(cur.transportation || 0) +
      Number(cur.utilities || 0),
    0
  );

  return { filteredData, balance };
}
