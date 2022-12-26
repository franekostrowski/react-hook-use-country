import isCountryCode from "./isCountryCode";
import listOfCountries from "./listOfCountries";

/**
 * @function returns country name for given country code
 * @param {string} countryCode - country code
 * @returns {string} country name
 * */
export default function getCountryName(countryCode: string) {
  if (!isCountryCode(countryCode)) return "";

  const countryName = listOfCountries[countryCode.toUpperCase()];

  return countryName;
}
