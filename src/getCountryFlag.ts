import isCountryCode from "./isCountryCode";

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
