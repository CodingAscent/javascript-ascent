import { datePlusDays } from "../../src/lib";

describe("datePlusDays", () => {
  it("should give date plus zero days", () => {
    const someDate = Date.UTC(0);
    const days = 0;
    const expected = Date.UTC(0);

    const actual = datePlusDays(someDate, days);

    expect(actual).toEqual(expected);
  });

  it("should give date plus one day", () => {
    const someDate = Date.UTC(0);
    const days = 1;
    const expected = Date.UTC(0) + 24 * 60 * 60 * 1000;

    const actual = datePlusDays(someDate, days);

    expect(actual).toEqual(expected);
  });
});
