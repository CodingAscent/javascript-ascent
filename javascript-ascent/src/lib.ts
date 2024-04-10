import { JWTPayload, jwtVerify } from "jose";

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

export async function decrypt(
  algorithms: string[],
  input: string,
  key: Uint8Array,
): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms,
  });

  return payload;
}
