import isCountryCode from "../src/isCountryCode";

describe("isCountryCode", () => {
  it("Should return an empty string", () => {
    const result = isCountryCode("");
    expect(result).toEqual(false);
  });

  it("Should return false because given string is not a country code", () => {
    const expectedResult = false;
    const result = isCountryCode("XX");
    expect(result).toEqual(expectedResult);
  });

  it("Should return true because 'pL' is a valid country code", () => {
    const expectedResult = true;
    const result = isCountryCode("pL");
    expect(result).toEqual(expectedResult);
  });
});
