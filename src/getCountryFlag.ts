export default function getCountryFlag(countryCode: string) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    // @ts-ignore
    .map((char) => 127397 + char.charCodeAt());

  const countryFlag = String.fromCodePoint(...codePoints);

  return countryFlag;
}
