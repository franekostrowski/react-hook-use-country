import isCountryName from "./isCountryName";
import listOfCountries from "./listOfCountries";

export default function getCountryCode(countryName: string) {
  if (!isCountryName(countryName)) return "";

  const countryCodes = Object.keys(listOfCountries).filter((key: string) =>
    listOfCountries[key].toLowerCase().includes(countryName.toLowerCase())
  );

  const countryCode = countryCodes[0];

  return countryCode;
}
