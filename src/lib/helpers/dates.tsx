export function convertDateToString(date: Date): string {
  const [year, month, day] = date.toISOString().split("T")[0].split("-");
  return `${Number(day) + 1}-${month}-${year}`;
}
