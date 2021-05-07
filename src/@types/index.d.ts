import { NameLookupParams, NameResponse } from './names';
import { AddressLookupParams, ReverseGeocodingParams, ReverseGeocodingResponse, AddressResponse } from './address';
import { EntityLookupParams, EntityResponse, BankLookupParams, BankResponse } from './entity';
import { EmailLookupParams, EmailResponse } from './email';
import { ResolveIPParams, ResolveIPResponse } from './ip';

export {
  NameResponse,
  ReverseGeocodingResponse,
  AddressResponse,
  EntityResponse,
  BankResponse,
  EmailResponse,
  ResolveIPResponse,
};

export type DaDataProps = {
  apiKey: string;
  apiSecret: string;
};

export default class DaData {
  props: DaDataProps;
  constructor(props: DaDataProps);

  /**
   * Finds address. Defines the coordinates of the address (house, street, city).\
   * `Only for Russia`\
   */
  addressLookup(params: AddressLookupParams): Promise<AddressResponse>;

  /**
   * Finds the nearest addresses (houses, streets, cities) by geographical coordinates.\
   * `Only for Russia`\
   * \
   * The addresses in the response are in the order of distance from the specified coordinates.
   */
  reverseGeocoding(params: ReverseGeocodingParams): Promise<ReverseGeocodingResponse>;

  /**
   * Auto-completion of an email address
   */
  emailLookup(params: EmailLookupParams): Promise<EmailResponse>;


  /**
   * Determines the city by IP address in Russia\
   * Supports both `ipv4` and `ipv6` addresses.\
   * `Only for Russia`\
   */
  resolveIPAddress(params: ResolveIPParams): Promise<ResolveIPResponse>;

  /**
   * Looking for companies and individual entrepreneurs:
   *  - by INN, OGRN and KPP;
   *  - name (full and short);
   *  - FULL name (for individual entrepreneurs);
   *  - Full name of the head of the company;
   *  - address to the street.
   */
  entityLookup(params: EntityLookupParams): Promise<EntityResponse>;

  /**
   * Looking for credit organizations:
   *  - by BIC,
   *  - SWIFT,
   *  - TIN,
   *  - INN + KPP,
   *  - name,
   *  - address to the street.
   *  - Filters by type: banks, NPOs, and branches.
   *  - Filters by region or city.
   *  - It can search for both existing banks and banks in liquidation.
   *  - Takes into account where you are (geolocation to the city).
   */
  bankLookup(params: BankLookupParams): Promise<BankResponse>;

  /**
   * Suggests the full name in one line or separately the last name, first name, patronymic.
   *  - Corrects keyboard layout («fynjy» → «Антон»).
   *  - Determines gender.
   */
  nameLookup(params: NameLookupParams): Promise<NameResponse>;
} 