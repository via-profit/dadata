import {
  DaDataNameProps, NameLookupParams, NameResponse, DaDataName as Interface,
} from '@via-profit/dadata';

import RequestHelper from '../utils/RequestHelper';

class DaDataName implements Interface {

  public props: DaDataNameProps;

  public constructor(props: DaDataNameProps){
    this.props = props;
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

    return response.map((suggestion) => ({
      ...suggestion,
      gender: (suggestion as any).gender === 'М' ? 'MALE' : 'FEMALE',
    }));
  }

}

export default DaDataName;