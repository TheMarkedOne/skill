export function incomeAndOutcome(data, expenceData) {
  const income = data?.reduce(
    (accum, cur) =>
      accum +
      Number(cur?.salary) +
      Number(cur?.rent_income) +
      Number(cur?.remittances) +
      Number(cur.business_income),
    0
  );
  const expence = expenceData?.reduce(
    (accum, cur) =>
      accum +
      Number(cur?.cafe_restaurant) +
      Number(cur?.groceries_shopping) +
      Number(cur?.health) +
      Number(cur.other) +
      Number(cur.transportation) +
      Number(cur.utilities),
    0
  );

  return { income, expence };
}
