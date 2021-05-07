export type AddressLookupParams = {
  /**
   * Search request
   */
  query: string;
  /**
   * Result limit\
   * Maximum: `20`
   */
  limit?: number;
  /**
   * Language to return the result (ru / en)
   */
  language?: 'ru' | 'en';
}

export type ReverseGeocodingParams = {
  /**
   * Latitude
   */
  latitude: string;
  /**
   * Longitude
   */
  longitude: string;
  /**
   * Search radius in meters (maximum-1000)
   */
  radiusLimit?: number;
  /**
   * Result limit\
   * Maximum: `20`
   */
  limit?: number;
  /**
   * Language to return the result (ru / en)
   */
  language?: 'ru' | 'en';
}

export type AddressSuggestion = {
  /**
   * The source address is a single line
   */
  source: string;

  /**
   * Standardized single-line address
   */
  result: string;

  /**
   * Postal code
   */
  postal_code: string | null;

  /**
   * Country
   */
  country: string | null;

  /**
   * Country ISO-code
   */
  country_iso_code: string | null;

  /**
   * Federal District
   */
  federal_district: string | null;

  /**
   * FIAS-region code
   */
  region_fias_id: string | null;

  /**
   * KLADR-region code
   */
  region_kladr_id: string | null;

  /**
   * ISO code of the region
   */
  region_iso_code: string | null;

  /**
   * Region with type
   */
  region_with_type: string | null;

  /**
   * Region Type (abbreviated)
   */
  region_type: string | null;

  /**
   * Region Type
   */
  region_type_full: string | null;

  /**
   * Region
   */
  region: string | null;

  /**
   * FIAS-area code
   */
  area_fias_id: string | null;

  /**
   * KLADR-area code
   */
  area_kladr_id: string | null;

  /**
   * A district in a region with the type
   */
  area_with_type: string | null;

  /**
   * Type of district in the region (abbreviated)
   */
  area_type: string | null;

  /**
   * Type of district in the region
   */
  area_type_full: string | null;

  /**
   * District in the region
   */
  area: string | null;

  /**
   * FIAS-Area code
   */
  city_fias_id: string | null;

  /**
   * KLADR-city code
   */
  city_kladr_id: string | null;

  /**
   * City with type
   */
  city_with_type: string | null;

  /**
   * City type (abbreviated)
   */
  city_type: string | null;

  /**
   * City type
   */
  city_type_full: string | null;

  /**
   * City
   */
  city: string | null;

  /**
   * Administrative district (only for Moscow)
   */
  city_area: string | null;

  /**
   * FIAS-area code of the city (to be filled in only if the area is in FIAS)
   */
  city_district_fias_id: string | null;

  /**
   * KLADR-the area code of the city (not filled in)
   */
  city_district_kladr_id: string | null;

  /**
   * City district with the type
   */
  city_district_with_type: string | null;

  /**
   * Type of city district (abbreviated)
   */
  city_district_type: string | null;

  /**
   * Type of city district
   */
  city_district_type_full: string | null;

  /**
   * City district
   */
  city_district: string | null;

  /**
   * FIAS-code of the locality
   */
  settlement_fias_id: string | null;

  /**
   * KLADR - code of the locality
   */
  settlement_kladr_id: string | null;

  /**
   * Locality with the type
   */
  settlement_with_type: string | null;

  /**
   * Type of locality (abbreviated)
   */
  settlement_type: string | null;

  /**
   * Type of locality
   */
  settlement_type_full: string | null;

  /**
   * Locality
   */
  settlement: string | null;

  /**
   * FIAS-street code
   */
  street_fias_id: string | null;

  /**
   * KLADR-street code
   */
  street_kladr_id: string | null;

  /**
   * Street with type
   */
  street_with_type: string | null;

  /**
   * Street type (abbreviated)
   */
  street_type: string | null;

  /**
   * Street Type
   */
  street_type_full: string | null;

  /**
   * Street
   */
  street: string | null;

  /**
   * FIAS-code of the house
   */
  house_fias_id: string | null;

  /**
   * KLADR - code of the house
   */
  house_kladr_id: string | null;

  /**
   * Type of house (abbreviated)
   */
  house_type: string | null;

  /**
   * Type of house
   */
  house_type_full: string | null;

  /**
   * House
   */
  house: string | null;

  /**
   * Type of building / structure (abbreviated)
   */
  block_type: string | null;

  /**
   * Type of building / structure
   */
  block_type_full: string | null;

  /**
   * Housing/structure
   */
  block: string | null;

  /**
   * Entrance
   */
  entrance: string | null;

  /**
   * Floor
   */
  floor: string | null;

  /**
   * FIAS-apartment code
   */
  flat_fias_id: string | null;

  /**
   * Apartment type (abbreviated)
   */
  flat_type: string | null;

  /**
   * Apartment type
   */
  flat_type_full: string | null;

  /**
   * Appartment
   */
  flat: string | null;

  /**
   * Apartment size
   */
  flat_area: string | null;

  /**
   * Market value m2
   */
  square_meter_price: string | null;

  /**
   * The market value of the apartment
   */
  flat_price: string | null;

  /**
   * Subscriber box
   */
  postal_box: string | null;

  /**
   * FIAS-address code (FIAS ID)\
   * HOUSE.HOUSEGUID — if the house is found in FIAS\
   * ADDROBJ.AOGUID-otherwise
   */
  fias_id: string;

  /**
   * Hierarchical address code in FIAS
   */
  fias_code: string | null;

  /**
   * The level of detail to which the address is found in FIAS\
   * - `0` — country
   * - `1` - region
   * - `3` - district
   * - `4` — city
   * - `5` — city district
   * - `6` — locality
   * - `7` - street
   * - `8` - house
   * - `65` - planning structure
   * - `90` - additional territory
   * - `91` - street in the additional territory
   * - '-1` — foreign or empty
   */
  fias_level:
    | '0'
    | '1'
    | '3'
    | '4'
    | '5' 
    | '6' 
    | '7'
    | '8'
    | '65'
    | '90'
    | '91'
    | '-1';

  /**
   * Indicates whether the FIAS address is up-to-date
   * - `0` - current
   * - `1`-`50` — renamed
   * - `51` - reassigned
   * - `99` - deleted
   */
  fias_actuality_state:
    | '0'
    | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '28' | '29' | '30' | '31' | '32' | '33' | '34' | '35' | '36' | '37' | '38' | '39' | '40' | '41' | '42' | '43' | '44' | '45' | '46' | '47' | '48' | '49' | '50'
    | '51'
    | '99'
  /**
   * KLADR-address code
   */
  kladr_id: string;

  /**
   * Indicates the center of the district or region
   * - `1` — the center of the district (Moscow region, Odintsovo district, Odintsovo city)
   * - `2` — the centre of the region (Novosibirskaya obl, g Novosibirsk)
   * - `3` — center of the district and region (Tomskaya obl, g Tomsk)
   * - `4` — the Central area of the region (Tyumen region, Tyumen district)
   * - `0` — none of the above (Moskovskaya obl, g Balashiha)
   */
  capital_marker:
    | '0'
    | '1'
    | '2'
    | '3'
    | '4'
  /**
   * OKATO code
   */
  okato: string | null;

  /**
   * OKTMO code
   */
  oktmo: string | null;

  /**
   * IFNS code for individuals
   */
  tax_office: string | null;

  /**
   * IFNS code for organizations
   */
  tax_office_legal: string | null;

  /**
   * The city's time zone is for Russia, and the country's time zone is for foreign addresses. \
   * If a country has multiple zones, it returns the minimum and maximum using a slash: 'UTC+5/UTC+6`
   */
  timezone: string | null;
  /**
   * Coordinates: latitude
   */
  geo_lat: string | null;
  /**
   * Coordinates: longitude
   */
  geo_lon: string | null;
  /**
   * Inside the ring road?
   * - `IN_MKAD` - inside the Moscow Ring Road (Moscow)
   * - 'OUT_MKAD` - outside the Moscow Ring Road (Moscow and the region)
   * -' IN_KAD` - inside the Ring Road (Saint Petersburg)
   * - ' OUT_KAD` - outside the Ring Road (Saint Petersburg and the region)
   */
  beltway_hit: 
    | 'IN_MKAD'
    | 'OUT_MKAD'
    | 'IN_KAD'
    | 'OUT_KAD'
    | null;

  /**
   * Distance from the ring road in km.\
   * * Filled only if ' beltway_hit` = 'OT_MKAD' or ' OUT_KAD`, otherwise null
   */
  beltway_distance: string | null;

  /**
   * Coordinate accuracy code
   * - '0` — Exact coordinates
   * - `1` — Nearest house
   * - `2` - Street
   * - `3` — Locality
   * - `4` — City
   * - `5` - Coordinates not defined
   */
  qc_geo:
    | '0'
    | '1'
    | '2'
    | '3'
    | '4'
    | '5';
  
  /**
   * Mailing List Eligibility Code
   * - '0` - Suitable for mailing. for mailing lists
   * - `10` - Questionable. No home in FIAS
   * - `5` - Questionable. No apartment. Suitable for legal entities or private properties
   * - `8` - Questionable. To the post office — a subscriber's box or a demand address. Suitable for letters, but not for courier delivery.
   * - `9` - Questionable. First, check whether Dadada correctly parsed the source address
   * - `1` — Not suitable for mailing. No Region
   * - `2` — Not suitable for mailing. No city
   * - `3` — Not suitable for mailing. No street
   * - `4` — Not suitable for mailing. Not at home
   * - `6` — Not suitable for mailing. Address incomplete
   * - `7` — Not suitable for mailing. Foreign address
   */
  qc_complete:
    | '0'
    | '10'
    | '5'
    | '8'
    | '9'
    | '1'
    | '2'
    | '3'
    | '4'
    | '6'
    | '7';

  /**
   * Indication of the presence of a house in FIAS
   * Specify the probability of successful delivery of the message
   * - `2`, if 'qc_geo' is any - The probability of delivery is high. House found in FIAS
   * - `10` if 'qc_geo' = ' 0` - The probability of delivery is high. the house is not found in FIAS, but is on the maps
   * - `10` if 'qc_geo' = ' 1` — Average probability of delivery. The house is not found in FIAS, but there is a similar one on the maps
   * - `10` if 'qc_geo' ≥ ' 2` — The probability of delivery is low. The house is not found in FIAS and on maps
   */
  qc_house: '2' | '10';

  /**
   * Verification code\
   * Do I need to manually check the recognized address?
   * - '0` - The address is recognized confidently. 
   * - `2` - Address is empty or obviously "garbage"
   * - `1` - Address verification is required. There are "extra" parts left. Example: "109341 Tver region Moscow Upper Fields" - here the extra "Tver region". Or there is not enough data in the source address for sure parsing. Example: "Skhodnya Krasnaya 12" - there is no region or city here.
   * - `3` - Requires address verification. There are alternative options. Example: "Moscow Tverskaya-Yamskaya" — there are four Tverskaya-Yamskaya streets in Moscow. Yes
   */
  qc: '0' | '1' | '2' | '3';

  /**
   * Unrecognized part of the address.\
   * For the address "Moscow, Mitinskaya Street, 40, entrance from the end "will return" ENTRANCE, FROM, END»
   */
  unparsed_parts: string | null;
  metro: null | Array<{
    distance: string;
    line: string;
    name: string;
  }>;   
};

export type AddressResponse = {
  suggestions: Array<{
    value: string;
    unrestricted_value: string;
    data: AddressSuggestion;
  }>;
}

export type ReverseGeocodingResponse = {
  suggestions: Array<{
    value: string;
    unrestricted_value: string;
    data: AddressSuggestion;
  }>;
};