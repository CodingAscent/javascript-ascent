import { datePlusDays } from "../../src/lib";

describe("datePlusDays", () => {
  it("should give date plus zero days", () => {
    const someDate = Date.UTC(0);
    const days = 0;
    const expected = Date.UTC(0);

    const actual = datePlusDays(someDate, days);

    expect(actual).toEqual(expected);
  });
});
