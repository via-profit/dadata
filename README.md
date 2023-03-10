# Via Profit / DaData API

![via-profit-cover](./assets/via-profit-cover.png)

> Via Profit / **DaData** - [Dadata.ru](https://dadata.ru) service API

## Table of Contents
 
 - [Overview](#overview)
 - [Installation](#installation)
 - [Getting Started](#getting-started)
 - [API](#api)

## <a name="overview"></a> Overview

This package is an implementation of the API for the service [Dadata.ru](https://dadata.ru). To use this module, you will need to register on [Dadata.ru](https://dadata.ru) and get the `API key` and `Secret key`.

### Why

Despite the fact that in [npmjs.com](https://www.npmjs.com/search?q=dadata) some api modules for data are already present, this package differs from the others in that it is written in **typescript** and contains all the types for the API response with comments.

You can import the types of all responses separately too:

```ts
import type { AddressResponse, EntityResponse } from '@via-profit/dadata';
```

## <a name="installation"></a> Installation

Just install the package use `npm`

```bash
# with npm
$ npm install @via-profit/dadata
```


## <a name="getting-started"></a> Getting Started

You need to import the module, create an instance of the class, and call one of the possible methods.

```ts
import DaData from '@via-profit/dadata';

const dadata = new DaData({
  apiKey: 'your-api-key',
  apiSecret: 'your-secret-key',
});

// Search the bank suggestions
const bankSuggestions = await dadata.bankLookup({
  query: 'alfa'
});

// Email autocomplete
const emailSuggestions = await dadata.emailLookup({
  query: 'example@'
});
```


## <a name="api"></a> API

| Method | Description | Reference |
|:-------|:------------|:---------:|
|`addressLookup`|Finds address. Defines the coordinates of the address (house, street, city).|[Link](https://dadata.ru/api/suggest/address/)|
|`reverseGeocoding`|Finds the nearest addresses (houses, streets, cities) by geographical coordinates. The addresses in the response are in the order of distance from the specified coordinates.|[Link](https://dadata.ru/api/geolocate/)|
|`emailLookup`|Auto-completion of an email address.|[Link](https://dadata.ru/api/suggest/email/)|
|`resolveIPAddress`|Determines the city by IP address in Russia. Supports both `ipv4` and `ipv6` addresses.|[Link](https://dadata.ru/api/iplocate/)|
|`entityLookup`|Looking for companies and individual entrepreneurs.|[Link](https://dadata.ru/api/suggest/party/)|
|`bankLookup`|Looking for credit organizations.|[Link](https://dadata.ru/api/suggest/bank/)|
|`nameLookup`|Suggests the full name in one line or separately the last name, first name, patronymic.|[Link](https://dadata.ru/api/suggest/name/)|