import {
  DaDataEntityProps, EntityLookupParams, EntityResponse, BankLookupParams, BankResponse,
  DaDataEntity as Interface,
} from '@via-profit/dadata';

import RequestHelper from '../utils/RequestHelper';

class DaDataEntity implements Interface {

  public props: DaDataEntityProps;

  public constructor(props: DaDataEntityProps){
    this.props = props;
  }

  public async entityLookup(params: EntityLookupParams): Promise<EntityResponse> {
    const { apiKey, apiSecret } = this.props;
    const { query, limit, status, type, locations, locationsBoost } = params;

    const response = await RequestHelper.request<EntityResponse>({
      apiMethod: 'suggest/party',
      apiKey,
      apiSecret,
      body: {
        query,
        status,
        type,
        locations: typeof locations !== 'undefined'
          ? locations.map((kladrID) => ({ kladr_id: kladrID }))
          : undefined,
        locations_boost: typeof locationsBoost !== 'undefined'
          ? locationsBoost.map((kladrID) => ({ kladr_id: kladrID }))
          : undefined,
        count: limit,
      },
    });

    return response;
  }

  public async bankLookup(params: BankLookupParams): Promise<BankResponse> {
    const { apiKey, apiSecret } = this.props;
    const { query, limit, status, type, locations, locationsBoost } = params;

    const response = await RequestHelper.request<BankResponse>({
      apiMethod: 'suggest/bank',
      apiKey,
      apiSecret,
      body: {
        query,
        status,
        type,
        locations: typeof locations !== 'undefined'
          ? locations.map((kladrID) => ({ kladr_id: kladrID }))
          : undefined,
        locations_boost: typeof locationsBoost !== 'undefined'
          ? locationsBoost.map((kladrID) => ({ kladr_id: kladrID }))
          : undefined,
        count: limit,
      },
    });

    return response;
  }
}

export default DaDataEntity;