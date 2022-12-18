import listOfCountries from "./listOfCountries";

export default function getCountryName(countryCode: string) {
  if (countryCode.length !== 2) throw new Error("Invalid country code");

  return listOfCountries[countryCode.toUpperCase()];
}
