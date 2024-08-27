import { parseISO, format } from "date-fns";

export function formatDay(dateStr: string) {
  try {
    return format(parseISO(dateStr), "EEEE");
  } catch (error) {
    console.error("Invalid date string:", dateStr);
    return "Invalid day";
  }
}
