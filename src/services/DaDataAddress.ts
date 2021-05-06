import {
  DaDataAddressProps, AddressResponse, AddressLookupParams, DaDataAddress as Interface,
  ReverseGeocodingParams, ReverseGeocodingResponse, ResolveIPParams, ResolveIPResponse,
} from '@via-profit/dadata';

import RequestHelper from '../utils/RequestHelper';

class DaDataAddress implements Interface {

  public props: DaDataAddressProps;

  public constructor(props: DaDataAddressProps){
    this.props = props;
  }

  public async addressLookup(params: AddressLookupParams): Promise<AddressResponse> {
    const { apiKey, apiSecret } = this.props;
    const { query, language, limit } = params;
    const response = await RequestHelper.request<AddressResponse>({
      apiMethod: 'suggest/address',
      apiKey,
      apiSecret,
      body: {
        query,
        language,
        count: limit,
      },
    });

    return response;
  }

  public async reverseGeocoding(params: ReverseGeocodingParams): Promise<ReverseGeocodingResponse> {
    const { apiKey, apiSecret } = this.props;
    const { radiusLimit, language, limit, latitude, longitude } = params;
    const response = await RequestHelper.request<ReverseGeocodingResponse>({
      apiMethod: 'geolocate/address',
      apiKey,
      apiSecret,
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

  public async resolveIPAddress(params: ResolveIPParams): Promise<ResolveIPResponse> {
    const { apiKey, apiSecret } = this.props;
    const { ip, language } = params;
    const response = await RequestHelper.request<ResolveIPResponse>({
      apiMethod: 'iplocate/address',
      apiKey,
      apiSecret,
      body: {
        ip,
        language,
      },
    });

    return response;
  }
}

export default DaDataAddress;