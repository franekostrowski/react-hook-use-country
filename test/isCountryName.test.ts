import isCountryName from "../src/isCountryName";

describe("isCountryName", () => {
  it("Should return an empty string", () => {
    const result = isCountryName("");
    expect(result).toEqual(false);
  });

  it("Should return false because given string is not a country name", () => {
    const expectedResult = false;
    const result = isCountryName("XX");
    expect(result).toEqual(expectedResult);
  });

  it("Should return true because 'poland' is a valid country name", () => {
    const expectedResult = true;
    const result = isCountryName("poland");
    expect(result).toEqual(expectedResult);
  });
});
