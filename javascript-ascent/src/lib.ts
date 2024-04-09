export function datePlusHours(date: number, hours: number) {
  return date + hours * 3600000;
}

export function datePlusMinutes(date: number, minutes: number) {
  return date + minutes * 60000;
}

export function datePlusSeconds(date: number, seconds: number) {
  return date + seconds * 1000;
}
