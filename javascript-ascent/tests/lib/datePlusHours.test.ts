import { datePlusHours } from "../../src/lib";

describe("datePlusHours", () => {
  it("should give date plus zero hours", () => {
    const someDate = Date.UTC(0);
    const hours = 0;
    const expected = Date.UTC(0);

    const actual = datePlusHours(someDate, hours);

    expect(actual).toEqual(expected);
  });
});
