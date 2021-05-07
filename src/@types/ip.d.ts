import { AddressSuggestion } from './address';

export type ResolveIPParams = {
  /**
   * IP address (`ipv4` or `ipv6`)
   */
  query: string;
  /**
   * Language to return the result (ru / en)
   */
  language?: 'ru' | 'en';
};

export type ResolveIPResponse = {
  location: null | {
    value: string;
    unrestricted_value: string;
    data: AddressSuggestion;
  };
};