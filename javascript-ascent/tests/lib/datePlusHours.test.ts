import { datePlusHours } from "../../src/lib";

describe("datePlusHours", () => {
  it("should give date plus zero hours", () => {
    const someDate = Date.UTC(0);
    const hours = 0;

    const actual = datePlusHours(someDate, hours);
    const expected = Date.UTC(0);

    expect(actual).toEqual(expected);
  });

  it("should give date plus one hour", () => {
    const someDate = Date.UTC(0);
    const hours = 1;

    const actual = datePlusHours(someDate, hours);
    const expected = Date.UTC(0) + 60 * 60 * 1000;

    expect(actual).toEqual(expected);
  });
});
