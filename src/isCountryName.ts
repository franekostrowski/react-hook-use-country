import listOfCountries from "./listOfCountries";

export default function isCountryName(countryName: string) {
  if (countryName.length === 0) return false;
  return Object.values(listOfCountries).some((existingCountryName) =>
    existingCountryName.toLowerCase().includes(countryName.toLowerCase())
  );
}
