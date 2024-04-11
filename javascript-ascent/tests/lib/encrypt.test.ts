import { SignJWT } from "jose";
import { encrypt } from "../../src/lib";

describe("encrypt", () => {
  it("given HS256 payload, should give HS256 SignJWT", async () => {
    const someExpirationTime = new Date(10000);
    const someIssuedAt = new Date(0);
    const someKey = new TextEncoder().encode("key");
    const somePayload = {
      user: { email: "some@email.com", name: "Some Name" },
      expires: new Date(0),
    };
    const someProtectedHeader = { alg: "HS256" };

    const actual = await encrypt(
      someExpirationTime,
      someIssuedAt,
      someKey,
      somePayload,
      someProtectedHeader,
    );
    const expected =
      "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7ImVtYWlsIjoic29tZUBlbWFpbC5jb20iLCJuYW1lIjoiU29tZSBOYW1lIn0sImV4cGlyZXMiOiIxOTcwLTAxLTAxVDAwOjAwOjAwLjAwMFoiLCJpYXQiOjAsImV4cCI6MTB9.TUv3V2R099do6WTPuc1HCP3UxN4ejlxEkKAT6XLapi0";

    expect(actual).toEqual(expected);
  });

  it("given HS512 payload, should give HS512 SignJWT", async () => {
    const someExpirationTime = new Date(10000);
    const someIssuedAt = new Date(0);
    const someKey = new TextEncoder().encode("key");
    const somePayload = {
      user: { email: "some@email.com", name: "Some Name" },
      expires: new Date(0),
    };
    const someProtectedHeader = { alg: "HS512" };
    const expected =
      "eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImVtYWlsIjoic29tZUBlbWFpbC5jb20iLCJuYW1lIjoiU29tZSBOYW1lIn0sImV4cGlyZXMiOiIxOTcwLTAxLTAxVDAwOjAwOjAwLjAwMFoiLCJpYXQiOjAsImV4cCI6MTB9.vCaNU3FoWXHWc8Ex4Q7lB9v-JaXEYhOzHcWpU-3ODH9HElHlsilgnZsRiTDAVvd_vZGRYypLXyiDs43czF4HLA";

    const actual = await encrypt(
      someExpirationTime,
      someIssuedAt,
      someKey,
      somePayload,
      someProtectedHeader,
    );

    expect(actual).toEqual(expected);
  });
});
