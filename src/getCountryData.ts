import getCountryCode from "./getCountryCode";
import getCountryFlag from "./getCountryFlag";
import getCountryName from "./getCountryName";
import isCountryCode from "./isCountryCode";
import isCountryName from "./isCountryName";

export default function getCountryData(country: string) {
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
