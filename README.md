# `country-utils 🌏`

Dealing with codes, flags and other country related logic is boring and repetetive. Many projects (including mine) need functions for that kind of thing so I started this project. It simplifies everything for you. Enjoy 🤗

## ~Installation~ not installable yet ⚠️

```
npm i @franekostrowski/country-utils
```

Or with yarn:

```
yarn add @franekostrowski/country-utils
```

## Usage

### getCountryData

```typescript
getCountryData(country: string): Country
```

```typescript
interface Country {
  name: string;
  code: string;
  flag: string;
}
```

- `country` - country code such as 'PL' or full country name eg. Poland

#### Example #1

```typescript
const countryData = getCountryData("PL");

console.log(countryData); 
// { name: "Poland", code: "PL", flag: "🇵🇱" }
```

#### Example #2

```typescript
const countryData = getCountryData("Sweden");

console.log(countryData); 
// { name: "Sweden", code: "SE", flag: "🇸🇪" }
```

### getCountryCode

```typescript
getCountryCode(countryName: string): string
```

#### Example

```typescript
const countryCode = getCountryCode("Poland")

console.log(countryCode); 
// "PL"
```

### getCountryFlag

```typescript
getCountryFlag(countryCode: string): string
```

#### Example

```typescript
const countryFlag = getCountryFlag("PL")

console.log(countryFlag); 
// "🇵🇱"
```


### getCountryName

```typescript
getCountryName(countryCode: string): string
```

#### Example

```typescript
const countryName = getCountryName("PL")

console.log(countryName); 
// "Poland"
```
