export function formatGeorgianLari(number) {
  if (isNaN(number)) {
    console.error("Invalid number");
    return "Invalid number";
  }

  const formattedNumber = number.toLocaleString("ka-GE", {
    style: "currency",
    currency: "GEL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formattedNumber;
}
