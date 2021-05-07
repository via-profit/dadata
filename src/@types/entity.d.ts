import { AddressSuggestion } from './address';

export type EntityLookupParams = {
  /**
   * Search request
   */
  query: string;
  /**
   * Result limit\
   * Maximum: `300`
   */
  limit?: number;

  /**
   * Filter by entity statuses
   */
  status?: ('ACTIVE' | 'LIQUIDATING' | 'LIQUIDATED' | 'REORGANIZING' | 'BANKRUPT')[];

  /**
   * Legal entity or individual entrepreneur
   *  - `LEGAL` — Legal entity
   *  - `INDIVIDUAL` — Individual entrepreneur
   */
  type?: 'LEGAL' | 'INDIVIDUAL';

  /**
   * To search for organizations only in a specific region,\
   * specify its two-digit code in the locations parameter.\
   * Node: \
   * For Sverdlovsk region kladr ID — `66`\
   * For Moscow — `77`\
   * For Saint-Petersburg — `78`, etc.
   */
  locations?: string[];

  /**
   * To specify a priority city or region for an organization, use the locations_boost parameter.\
   * We rank companies by address, sole proprietors by region, INN.\
   * Pass the city's KLADR code.  You can specify multiple cities.
   */
  locationsBoost?: string[];
}


export type BankLookupParams = {
  /**
   * Search request
   */
  query: string;
  /**
   * Result limit\
   * Maximum: `20`\
   * Default: `10`
   */
  limit?: number;

  /**
   * Filter by entity statuses
   */
  status?: ('ACTIVE' | 'LIQUIDATING' | 'LIQUIDATED')[];

  /**
   * Organization type
   *  - `BANK` — Bank
   *  - `BANK_BRANCH` — Bank branch
   *  - `NKO` — Non-bank credit institution
   *  - `NKO_BRANCH` — Branch of a non-bank credit institution
   *  - `RKC` — RCC / GRCC
   *  - `OTHER` — Other
   */
  type?: 'BANK' | 'BANK_BRANCH' | 'NKO' | 'NKO_BRANCH' | 'RKC' | 'OTHER';

  /**
   * To search for organizations only in a specific region,\
   * specify its two-digit code in the locations parameter.\
   * Node: \
   * For Sverdlovsk region kladr ID — `66`\
   * For Moscow — `77`\
   * For Saint-Petersburg — `78`, etc.
   */
  locations?: string[];

  /**
   * To specify a priority city or region for an organization, use the locations_boost parameter.\
   * We rank companies by address, sole proprietors by region, INN.\
   * Pass the city's KLADR code.  You can specify multiple cities.
   */
  locationsBoost?: string[];
}

export type EntitySuggestion = {
  inn: string;
  kpp: string;
  ogrn: string;
  /**
   * Date of issue of the OGRN
   */
  ogrn_date: string;
  /**
   * DaData internal ID
   */
  hid: string;

  /**
   * Legal entity or individual entrepreneur
   *  - `LEGAL` — Legal entity
   *  - `INDIVIDUAL` — Individual entrepreneur
   */
  type: 'LEGAL' | 'INDIVIDUAL';
  successors: string | null;
  name: {
    full_with_opf: string;
    short_with_opf: string;
    latin: null;
  };
  okato: string;
  oktmo: string | null;
  okpo: string;
  okogu: string;
  okfs: string;
  okved: string;
  okved_type: '2001' | '2014';
  opf: {
    type: '2001' | '2014';
    code: string;
    full: string;
    short: string;
  };
  management?: null | {
    name: string;
    post: string;
  };
  branch_count?: number;
  branch_type?: 'MAIN' | 'BRANCH';
  state: {
    status: 'ACTIVE' | 'LIQUIDATING' | 'LIQUIDATED' | 'REORGANIZING' | 'BANKRUPT';
    code: string | null;
    registration_date: number;
    actuality_date: number;
    liquidation_date: number | null;
  };
  address: {
    value: string;
    unrestricted_value: string;
    data: AddressSuggestion;
  };
};

export type BankSuggestion = {
  /**
   * Bank Identification Code (BIC) of the Central Bank of the Russian Federation
   */
  bic: string;
  /**
   * Bank identification code in the SWIFT system
   */
  swift: string | null;
  inn: string;
  kpp: string;
  /**
   * Registration number in the Central Bank of the Russian Federation
   */
  registration_number: string;
  /**
   * Correspondent account with the Central Bank of the Russian Federation
   */
  correspondent_account: string;
  /**
   * Treasury accounts (for the UFK)
   */
  treasury_accounts: string | null;
  name: {
    /**
     * Payment name
     */
    payment: string;
    full: null;
    short: null;
  };
  cbr: null;
  address: {
    value: string;
    unrestricted_value: string;
    data: AddressSuggestion;
  };
  status: 'ACTIVE' | 'LIQUIDATING' | 'LIQUIDATED';
  okpo: null;
  phone: null;
  rkc: null;
};

export type EntityResponse = {
  suggestions: Array<{
    value: string;
    unrestricted_value: string;
    data: EntitySuggestion;
  }>;
}

export type BankResponse = {
  suggestions: Array<{
    value: string;
    unrestricted_value: string;
    data: BankSuggestion;
  }>;
}
