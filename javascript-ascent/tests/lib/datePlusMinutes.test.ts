import { datePlusMinutes } from "../../src/lib";

describe("datePlusMinutes", () => {
  it("should give date plus zero minutes", () => {
    const someDate = Date.UTC(0);
    const minutes = 0;

    const actual = datePlusMinutes(someDate, minutes);
    const expected = Date.UTC(0);

    expect(actual).toEqual(expected);
  });

  it("should give date plus 1 minute", () => {
    const someDate = Date.UTC(0);
    const minutes = 1;

    const actual = datePlusMinutes(someDate, minutes);
    const expected = Date.UTC(0) + 60 * 1000;

    expect(actual).toEqual(expected);
  });
});
