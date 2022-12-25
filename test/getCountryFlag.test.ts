import { getCountryFlag } from "../src/index";

describe("getCountryFlag", () => {
  it("Should return an empty string because given country code is invalid", () => {
    const result = getCountryFlag("XX");
    expect(result).toEqual("");
  });
});
