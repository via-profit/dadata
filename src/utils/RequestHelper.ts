import https, { RequestOptions } from 'https';
import { IncomingMessage } from 'http';
import { ResponseError, RequestBody } from '@via-profit/dadata';

type APIMrthod =
  | 'geolocate/address'
  | 'iplocate/address'
  | 'suggest/address'
  | 'suggest/party'
  | 'suggest/bank'
  | 'suggest/email'
  | 'clean/name';

class RequestHelper {

  private static isResponseError(payload: any): payload is ResponseError {
    return typeof payload?.family === 'string'
      && typeof payload?.message === 'string'
      && typeof payload?.reason === 'string';
  }

  public static request<T>(props: {
    apiKey: string,
    apiSecret: string,
    body: RequestBody,
    apiMethod: APIMrthod,
  }): Promise<T> {
    const { apiKey, apiSecret, apiMethod, body } = props;
    const host = apiMethod === 'clean/name'
      ? 'cleaner.dadata.ru'
      : 'suggestions.dadata.ru';
    const path = apiMethod === 'clean/name'
      ? '/api/v1/clean/name'
      : `/suggestions/api/4_1/rs/${apiMethod}`;

    const requestParams: RequestOptions = {
      host,
      path,
      protocol: 'https:',
      method: 'POST',
      headers: {
        Accept: 'application/json',
         'User-Agent': 'openid-client',
        'Content-Type': 'application/json',
        'X-Secret': apiSecret,
        Authorization: `Token ${apiKey}`,
      },
    };

    return new Promise((resolve, reject) => {
      const requestCallback: (e: IncomingMessage) => void = (response) => {
        response.setEncoding('utf8');

        let responseData = '';

        response.on('data', (chunk) => {
          responseData += chunk.toString();
        })

        response.on('end', () => {
          try {
            const data: ResponseError | T = JSON.parse(responseData);

            if (this.isResponseError(data)) {
              reject(
                `Request error. «${data.message}»`,
              );
            }

            resolve(data as T);
          } catch (err) {
            reject(err);
          }
        });
      }

      const request = https.request(requestParams, requestCallback);
      request.write(JSON.stringify(body));
      request.end();
    });
  }
}

export default RequestHelper;
