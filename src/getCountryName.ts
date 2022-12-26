import isCountryCode from "./isCountryCode";
import listOfCountries from "./listOfCountries";

/**
 * @function returns country name for given country code
 * @param countryCode - country code
 * @returns country name or empty string if no country name was found
 * */
export default function getCountryName(countryCode: string) {
  if (!isCountryCode(countryCode)) return "";

  const countryName = listOfCountries[countryCode.toUpperCase()];

  return countryName;
}
