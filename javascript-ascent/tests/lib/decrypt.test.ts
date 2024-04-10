import { decrypt } from "../../src/lib";

describe("decrypt", () => {
  it("given HS256 algoritm, should give HS256 payload", async () => {
    const someAlgorithms = ["HS256"];
    const someInput =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.emP08u28tDrfxdyKmL_IyKHhpbxb8ghu8UEOyhdRWdw";
    const someKey = new TextEncoder().encode("key");
    const expected = { iat: 1516239022, name: "John Doe", sub: "1234567890" };

    const actual = await decrypt(someAlgorithms, someInput, someKey);

    expect(actual).toEqual(expected);
  });

  it("given HS512 algoritm, should give HS512 payload", async () => {
    const someAlgorithms = ["HS512"];
    const someInput =
      "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.YEWolTAKVcnso3pikulvAaVISdEvPFzWEQ3vaTJLprk_Dn4GyhUVwTosR00sLJqO6rTjhYRksydtvUep25CTXA";
    const someKey = new TextEncoder().encode("key");
    const expected = { iat: 1516239022, name: "John Doe", sub: "1234567890" };

    const actual = await decrypt(someAlgorithms, someInput, someKey);

    expect(actual).toEqual(expected);
  });
});
