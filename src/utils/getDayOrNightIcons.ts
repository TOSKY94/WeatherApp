import { replaceAt } from "react-query/types/core/utils";

export function getDayOrNightIcon(
    iconName: string,
    dateTimeString: string
): string {
    const hours = new Date(dateTimeString).getHours(); // get hours from given date and time
    const isDayTime = hours >= 6 && hours < 18; //consider daytime from 6 AM to 6 PM
    return isDayTime ? iconName.replace(/.$/, "d") : iconName.replace(/.$/, "n");
}