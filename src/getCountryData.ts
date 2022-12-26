import getCountryCode from "./getCountryCode";
import getCountryFlag from "./getCountryFlag";
import getCountryName from "./getCountryName";
import isCountryCode from "./isCountryCode";
import isCountryName from "./isCountryName";
import type { Country } from "./types";

/**
 *  @function returns country data for given country code or name
 *  @param country - country code such as 'PL' or full country name eg. Poland
 *  @returns object with country data or empty object if given country was not found
 * */
export default function getCountryData(country: string): Country | {} {
  const countryData = {
    name: "",
    code: "",
    flag: ""
  };

  // Parameter country is a country name (eg. Poland)
  if (country.length > 2) {
    if (!isCountryName(country)) return {};
    countryData.code = getCountryCode(country);
    countryData.name = getCountryName(countryData.code);
  }

  // Parameter country is a country code (eg. PL)
  if (country.length === 2) {
    if (!isCountryCode(country)) return {};
    countryData.name = getCountryName(country);
    countryData.code = getCountryCode(countryData.name);
  }

  countryData.flag = getCountryFlag(countryData.code);

  return countryData;
}
