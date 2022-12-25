import listOfCountries from "./listOfCountries";

export default function isCountryName(countryName: string) {
  return Object.values(listOfCountries).some((existingCountryName) =>
    existingCountryName.toLowerCase().includes(countryName.toLowerCase())
  );
}
