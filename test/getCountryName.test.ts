import { getCountryName } from "../src/index";

describe("getCountryName", () => {
  it("Should return an empty string because given country code is invalid", () => {
    const result = getCountryName("XX");
    expect(result).toEqual("");
  });

  it("Should return correct country name for country code 'US'", () => {
    const expectedResult = "United States of America";
    const result = getCountryName("US");
    expect(result).toEqual(expectedResult);
  });

  it("Should return correct country name for country code 'kr' (uncapitalized)", () => {
    const expectedResult = "South Korea";
    const result = getCountryName("kr");
    expect(result).toEqual(expectedResult);
  });
});
