export function formatDate(date_string: string) {
  const formattedDate = new Date(date_string);
  return formattedDate.toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
  });
}
