import { parseISO, format } from "date-fns";

export function formatDate(dateStr: string) {
  try {
    return format(parseISO(dateStr), "dd.MM");
  } catch (error) {
    console.error("Invalid date string:", dateStr);
    return "Invalid date";
  }
}