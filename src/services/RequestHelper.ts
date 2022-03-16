import https, { RequestOptions } from 'https';
import { IncomingMessage, OutgoingHttpHeaders } from 'http';

type RequestBody = Record<string, any> | (string | Record<string, any>)[];

type ResponseError = {
  family: 'CLIENT_ERROR';
  reason: string;
  message: string;
};

type APIMethod =
  | 'geolocate/address'
  | 'iplocate/address'
  | 'suggest/address'
  | 'suggest/party'
  | 'suggest/bank'
  | 'suggest/email'
  | 'clean/name';

type RequestProps = {
  apiKey?: string;
  apiSecret?: string;
  body: RequestBody;
  apiMethod: APIMethod;
};

class RequestHelper {
  private static isResponseError(payload: any): payload is ResponseError {
    return (
      typeof payload?.family === 'string' &&
      typeof payload?.message === 'string' &&
      typeof payload?.reason === 'string'
    );
  }

  public static resolveApi(apiMethod: APIMethod) {
    switch (apiMethod) {
      case 'clean/name':
        return {
          host: 'cleaner.dadata.ru',
          path: '/api/v1/clean/name',
        };

      default:
        return {
          host: 'suggestions.dadata.ru',
          path: `/suggestions/api/4_1/rs/${apiMethod}`,
        };
    }
  }

  public static request<T>(props: RequestProps): Promise<T> {
    const { apiKey, apiSecret, apiMethod, body } = props;
    const { host, path } = this.resolveApi(apiMethod);

    const headers: OutgoingHttpHeaders = {
      Accept: 'application/json',
      'User-Agent': 'openid-client',
      'Content-Type': 'application/json',
    };

    if (typeof apiKey !== 'undefined') {
      headers.Authorization = `Token ${apiKey}`;
    }

    if (typeof apiSecret !== 'undefined') {
      headers['X-Secret'] = apiSecret;
    }

    const requestParams: RequestOptions = {
      host,
      path,
      protocol: 'https:',
      method: 'POST',
      headers,
    };

    return new Promise((resolve, reject) => {
      const requestCallback: (e: IncomingMessage) => void = response => {
        response.setEncoding('utf8');

        let responseData = '';

        response.on('data', chunk => {
          responseData += chunk.toString();
        });

        response.on('end', () => {
          try {
            const data: ResponseError | T = JSON.parse(responseData);

            if (this.isResponseError(data)) {
              reject(`Request error. «${data.message}»`);
            }

            resolve(data as T);
          } catch (err) {
            reject(err);
          }
        });
      };

      const request = https.request(requestParams, requestCallback);
      request.write(JSON.stringify(body));
      request.end();
    });
  }
}

export default RequestHelper;
