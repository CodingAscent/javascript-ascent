import { datePlusMinutes } from "../../src/lib";

describe("datePlusMinutes", () => {
  it("should give date plus zero minutes", () => {
    const someDate = Date.UTC(0);
    const minutes = 0;
    const expected = Date.UTC(0);

    const actual = datePlusMinutes(someDate, minutes);

    expect(actual).toEqual(expected);
  });
});
