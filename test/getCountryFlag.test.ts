import { getCountryFlag } from "../src/index";

describe("getCountryFlag", () => {
  it("Should return an empty string because given country code is invalid", () => {
    const result = getCountryFlag("XX");
    expect(result).toEqual("");
  });

  it("Should return correct flag for country code 'PL'", () => {
    const expectedResult = "🇵🇱";
    const result = getCountryFlag("PL");
    expect(result).toEqual(expectedResult);
  });

  it("Should return correct flag for country code 'nO' (wrong capitalization)", () => {
    const expectedResult = "🇳🇴";
    const result = getCountryFlag("nO");
    expect(result).toEqual(expectedResult);
  });
});
