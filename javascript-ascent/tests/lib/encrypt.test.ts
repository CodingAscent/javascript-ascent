import { SignJWT } from "jose";
import { encrypt } from "../../src/lib";

describe("encrypt", () => {
  it("given HS256 payload, should give HS256 SignJWT", async () => {
    const someKey = new TextEncoder().encode("key");
    const somePayload = {
      user: { email: "some@email.com", name: "Some Name" },
      expires: new Date(0),
    };
    const someProtectedHeader = { alg: "HS256" };
    const someSignJWT = { ...somePayload };
    const expected = new SignJWT(someSignJWT);

    const actual = await encrypt(someKey, somePayload, someProtectedHeader);

    expect(actual).toEqual(expected);
  });
});
