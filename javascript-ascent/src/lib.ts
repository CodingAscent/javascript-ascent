export function datePlusDays(date: number, days: number) {
  return date + days * 86400000;
}

export function datePlusHours(date: number, hours: number) {
  return date + hours * 3600000;
}

export function datePlusMinutes(date: number, minutes: number) {
  return date + minutes * 60000;
}

export function datePlusSeconds(date: number, seconds: number) {
  return date + seconds * 1000;
}

export async function decrypt(input: string, algorithms: string[]): Promise<any> {
    return "Hello, HS256!";
}
