import getCountryCode from "./getCountryCode";
import getCountryFlag from "./getCountryFlag";
import getCountryName from "./getCountryName";

export default function getCountryData(country: string) {
  const countryData = {
    name: "",
    code: "",
    flag: ""
  };

  if (country.length < 2) throw new Error("Invalid country name or code");

  // Parameter country is a country name (eg. Poland)
  if (country.length > 2) {
    countryData.code = getCountryCode(country);
    countryData.name = getCountryName(countryData.code);
  }

  // Parameter country is a country code (eg. PL)
  if (country.length === 2) {
    countryData.name = getCountryName(country);
    countryData.code = getCountryCode(countryData.name);
  }

  countryData.flag = getCountryFlag(countryData.code);

  return countryData;
}
