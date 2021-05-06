import {
  DaDataEmailProps, EmailLookupParams, EmailResponse, DaDataEmail as Interface,
} from '@via-profit/dadata';

import RequestHelper from '../utils/RequestHelper';

class DaDataEmail implements Interface {

  public props: DaDataEmailProps;

  public constructor(props: DaDataEmailProps){
    this.props = props;
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

}

export default DaDataEmail;