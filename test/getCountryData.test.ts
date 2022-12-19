import { getCountryData } from "../src/index";
import type { Country } from "../src/types";

describe("getCountryData", () => {
  it("Should throw because given country name is invalid", () => {
    expect(() => getCountryData("akdjwhwad")).toThrow();
  });

  it("Should return correct country data for country code 'PL'", () => {
    const expectedResult: Country = {
      name: "Poland",
      code: "PL",
      flag: "🇵🇱"
    };

    const result = getCountryData("PL");

    expect(result).toEqual(expectedResult);
  });

  it("Should return correct country data for Poland", () => {
    const expectedResult: Country = {
      name: "Poland",
      code: "PL",
      flag: "🇵🇱"
    };

    const result = getCountryData("Poland");

    expect(result).toEqual(expectedResult);
  });

  it("Should return correct country data for sweden (uncapitalized)", () => {
    const expectedResult: Country = {
      name: "Sweden",
      code: "SE",
      flag: "🇸🇪"
    };

    const result = getCountryData("sweden");

    expect(result).toEqual(expectedResult);
  });
});
