import isCountryCode from "./isCountryCode";
import listOfCountries from "./listOfCountries";

export default function getCountryName(countryCode: string) {
  if (!isCountryCode(countryCode)) return "";

  const countryName = listOfCountries[countryCode.toUpperCase()];

  return countryName;
}
