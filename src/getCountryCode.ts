import listOfCountries from "./listOfCountries";

export default function getCountryCode(countryName: string) {
  if (!countryName || countryName.length === 0) {
    throw new Error("Invalid country name");
  }

  const countryCodes = Object.keys(listOfCountries).filter((key: string) =>
    listOfCountries[key].toLowerCase().includes(countryName.toLowerCase())
  );

  if (countryCodes.length === 0) throw new Error("Invalid country name");

  const countryCode = countryCodes[0];

  return countryCode;
}
