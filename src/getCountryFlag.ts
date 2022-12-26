import isCountryCode from "./isCountryCode";

/**
 *  @function returns country emoji flag for given country code
 *  @param countryCode - country code
 *  @returns string with emoji flag or empty string if no emoji flag was found
 * */
export default function getCountryFlag(countryCode: string) {
  if (!isCountryCode(countryCode)) return "";

  const codePoints = countryCode
    .toUpperCase()
    .split("")
    // @ts-ignore
    .map((char) => 127397 + char.charCodeAt());

  const countryFlag = String.fromCodePoint(...codePoints);

  return countryFlag;
}
