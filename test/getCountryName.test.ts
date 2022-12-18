import { getCountryName } from "../src/index";

describe("getCountryName", () => {
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
