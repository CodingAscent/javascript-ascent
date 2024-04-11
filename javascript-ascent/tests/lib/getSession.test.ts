import { getSession } from "../../src/lib";

describe("getSession", () => {
  it("given no session, it should return null", async () => {
    const expected = null;

    const actual = await getSession();

    expect(actual).toEqual(expected);
  });
});
