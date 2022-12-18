import listOfCountries from "./listOfCountries";

export default function getCountryCode(countryName: string) {
  const countryCodes = Object.keys(listOfCountries).filter((key: string) =>
    listOfCountries[key].toLowerCase().includes(countryName.toLowerCase())
  );

  if (countryCodes.length === 0) throw new Error("Invalid country name");

  return countryCodes[0];
}
