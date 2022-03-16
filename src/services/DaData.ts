import type {
  AddressLookupParams,
  ReverseGeocodingParams,
  AddressResponse,
  ReverseGeocodingResponse,
} from '../@types/address';
import type {
  EntityLookupParams,
  BankLookupParams,
  EntityResponse,
  BankResponse,
} from '../@types/entity';
import type { EmailLookupParams, EmailResponse } from '../@types/email';
import type { NameLookupParams, NameResponse } from '../@types/names';
import type { ResolveIPParams, ResolveIPResponse } from '../@types/ip';
import RequestHelper from './RequestHelper';

export type DaDataProps = {
  apiKey: string;
  apiSecret: string;
};

class DaData {
  props: DaDataProps;
  constructor(props: DaDataProps) {
    this.props = props;
  }

  public async addressLookup(params: AddressLookupParams): Promise<AddressResponse> {
    const { apiKey } = this.props;
    const { query, language, limit } = params;
    const response = await RequestHelper.request<AddressResponse>({
      apiMethod: 'suggest/address',
      apiKey,
      body: {
        query,
        language,
        count: limit,
      },
    });

    return response;
  }

  public async reverseGeocoding(params: ReverseGeocodingParams): Promise<ReverseGeocodingResponse> {
    const { apiKey } = this.props;
    const { radiusLimit, language, limit, latitude, longitude } = params;
    const response = await RequestHelper.request<ReverseGeocodingResponse>({
      apiMethod: 'geolocate/address',
      apiKey,
      body: {
        language,
        lat: latitude,
        lon: longitude,
        count: limit,
        radius_meters: radiusLimit,
      },
    });

    return response;
  }

  public async entityLookup(params: EntityLookupParams): Promise<EntityResponse> {
    const { apiKey } = this.props;
    const { query, limit, status, type, locations, locationsBoost } = params;

    const response = await RequestHelper.request<EntityResponse>({
      apiMethod: 'suggest/party',
      apiKey,
      body: {
        query,
        status,
        type,
        locations:
          typeof locations !== 'undefined'
            ? locations.map(kladrID => ({ kladr_id: kladrID }))
            : undefined,
        locations_boost:
          typeof locationsBoost !== 'undefined'
            ? locationsBoost.map(kladrID => ({ kladr_id: kladrID }))
            : undefined,
        count: limit,
      },
    });

    return response;
  }

  public async bankLookup(params: BankLookupParams): Promise<BankResponse> {
    const { apiKey } = this.props;
    const { query, limit, status, type, locations, locationsBoost } = params;

    const response = await RequestHelper.request<BankResponse>({
      apiMethod: 'suggest/bank',
      apiKey,
      body: {
        query,
        status,
        type,
        locations:
          typeof locations !== 'undefined'
            ? locations.map(kladrID => ({ kladr_id: kladrID }))
            : undefined,
        locations_boost:
          typeof locationsBoost !== 'undefined'
            ? locationsBoost.map(kladrID => ({ kladr_id: kladrID }))
            : undefined,
        count: limit,
      },
    });

    return response;
  }

  public async emailLookup(params: EmailLookupParams): Promise<EmailResponse> {
    const { apiKey, apiSecret } = this.props;
    const { query, limit } = params;

    const response = await RequestHelper.request<EmailResponse>({
      apiMethod: 'suggest/email',
      apiKey,
      apiSecret,
      body: {
        query,
        count: limit,
      },
    });

    return response;
  }

  public async nameLookup(params: NameLookupParams): Promise<NameResponse> {
    const { apiKey, apiSecret } = this.props;
    const { query } = params;

    const response = await RequestHelper.request<NameResponse>({
      apiMethod: 'clean/name',
      apiKey,
      apiSecret,
      body: typeof query === 'string' ? [query] : query,
    });

    return response.map(suggestion => ({
      ...suggestion,
      gender: (suggestion as any).gender === 'М' ? 'MALE' : 'FEMALE',
    }));
  }

  public async resolveIPAddress(params: ResolveIPParams): Promise<ResolveIPResponse> {
    const { apiKey, apiSecret } = this.props;
    const { query, language } = params;
    const response = await RequestHelper.request<ResolveIPResponse>({
      apiMethod: 'iplocate/address',
      apiKey,
      apiSecret,
      body: {
        ip: query,
        language,
      },
    });

    return response;
  }
}

export default DaData;
