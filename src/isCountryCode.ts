import listOfCountries from "./listOfCountries";

export default function isCountryCode(countryCode: string) {
  if (countryCode.length !== 2) return false;
  return countryCode.toUpperCase() in listOfCountries;
}
