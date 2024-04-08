import { datePlusSeconds } from "../../src/lib";

describe("datePlusSeconds", () => {
  it("should give date plus zero seconds", () => {
    const someDate = Date.UTC(0);
    const seconds = 0;
    const expected = Date.UTC(0);

    const actual = datePlusSeconds(someDate, seconds);

    expect(actual).toEqual(expected);
  });
});
