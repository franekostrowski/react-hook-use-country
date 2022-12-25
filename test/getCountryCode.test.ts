import { getCountryCode } from "../src/index";

describe("getCountryCode", () => {
  it("Should return an empty string because given country name is invalid", () => {
    const result = getCountryCode("XXXX");
    expect(result).toEqual("");
  });

  it("Should return correct country code for Poland", () => {
    const expectedResult = "PL";
    const result = getCountryCode("Poland");
    expect(result).toEqual(expectedResult);
  });

  it("Should return correct country code for United States of America", () => {
    const expectedResult = "US";
    const result = getCountryCode("United States of America");
    expect(result).toEqual(expectedResult);
  });

  it("Should return correct country code for norway (uncapitalized)", () => {
    const expectedResult = "NO";
    const result = getCountryCode("norway");

    expect(result).toEqual(expectedResult);
  });

  it("Should return correct country code for South Korea", () => {
    const expectedResult = "KR";
    const result = getCountryCode("South Korea");

    expect(result).toEqual(expectedResult);
  });
});
