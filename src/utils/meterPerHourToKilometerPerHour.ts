export function meterPerHourToKilometerPerHour(speedinMeterPerHour: number): string{
    const speedinKilometerPerHour= speedinMeterPerHour * 3.6;
    return `${speedinKilometerPerHour.toFixed(0)}km/h`;
}