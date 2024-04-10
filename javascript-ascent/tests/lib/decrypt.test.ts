import { decrypt } from "../../src/lib";

describe("decrypt", () => {
  it("given HS256 algoritm, should give HS256 payload", async () => {
    const someInput = "Hello, world!";
    const expected = "Hello, HS256!";

    const actual = await decrypt(someInput, ["HS256"]);

    expect(actual).toEqual(expected);
  });
});
