import { getSession } from "../../src/lib";

describe("getSession", () => {
  it("given no session, it should return null", async () => {
    const mock = {
      cookies: () => {
        return {
          get: (key: string) => {
            return null;
          },
        };
      },
    };
    const someAlgorithms = ["HS256"];
    const someKey = new TextEncoder().encode("key");

    const actual = await getSession(someAlgorithms, mock.cookies, someKey);
    const expected = null;

    expect(actual).toEqual(expected);
  });

  describe("getSession", () => {
    it("given a session, it should return cookie's value", async () => {
      const mock = {
        cookies: () => {
          return {
            get: (key: string) => {
              return {
                value:
                  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.emP08u28tDrfxdyKmL_IyKHhpbxb8ghu8UEOyhdRWdw",
              };
            },
          };
        },
      };
      const someAlgorithms = ["HS256"];
      const someKey = new TextEncoder().encode("key");

      const actual = await getSession(someAlgorithms, mock.cookies, someKey);
      const expected = { iat: 1516239022, name: "John Doe", sub: "1234567890" };

      expect(actual).toEqual(expected);
    });
  });
});
