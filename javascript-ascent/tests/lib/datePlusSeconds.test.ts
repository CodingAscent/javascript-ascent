import { datePlusSeconds } from "../../src/lib";

describe("datePlusSeconds", () => {
  it("should give date plus zero seconds", () => {
    const someDate = Date.UTC(0);
    const seconds = 0;
    const expected = Date.UTC(0);

    const actual = datePlusSeconds(someDate, seconds);

    expect(actual).toEqual(expected);
  });

  it("should give date plus 1 second", () => {
    const someDate = Date.UTC(0);
    const seconds = 1;
    const expected = Date.UTC(0) + 1000;

    const actual = datePlusSeconds(someDate, seconds);

    expect(actual).toEqual(expected);
  });
});
