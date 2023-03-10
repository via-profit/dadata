import http from 'http';
import dotenv from 'dotenv';

import DaData from '../index';

dotenv.config();

/**
 * Routes list
 */
enum Route {
  Address = '/address',
  ReverseGeo = '/reverse-geo',
  Entity = '/entity',
  Bank = '/bank',
  IP = '/ip',
  Email = '/email',
  Name = '/name',
}

(async () => {
  const server = http.createServer(async (req, res) => {
    const { url } = req;

    /**
     * Response function
     */
    const sendJSON = (
      data: Record<string, any> | any[] | string | number | boolean,
      statusCode?: number,
    ) => {
      res.statusCode = statusCode || 200;
      res.setHeader('Content-Type', 'application/json; charset=UTF-8');
      res.write(JSON.stringify(data), 'utf8');
      res.end();
    };

    const sendHTML = (data: string, statusCode?: number) => {
      res.statusCode = statusCode || 200;
      res.setHeader('Content-Type', 'text/html; charset=UTF-8');
      res.write(data, 'utf8');
      res.end();
    };

    // Init DaData
    const dadata = new DaData({
      apiKey: process.env.API_KEY,
      apiSecret: process.env.API_SECRET,
    });

    // Simple routing
    switch (url) {
      case Route.Address:
        return sendJSON(
          await dadata.addressLookup({
            query: 'Екатеринбург, Мира 28',
          }),
        );

      case Route.ReverseGeo:
        return sendJSON(
          await dadata.reverseGeocoding({
            longitude: '60.616195',
            latitude: '56.840419',
          }),
        );

      case Route.Entity:
        return sendJSON(
          await dadata.entityLookup({
            query: '2411030380',
            // locations: ['66'],
          }),
        );

      case Route.Bank:
        return sendJSON(
          await dadata.bankLookup({
            query: 'точка',
          }),
        );

      case Route.IP:
        return sendJSON(
          await dadata.resolveIPAddress({
            query: '176.226.150.69',
          }),
        );

      case Route.Email:
        return sendJSON(
          await dadata.emailLookup({
            query: 'example@',
          }),
        );

      case Route.Name:
        return sendJSON(
          await dadata.nameLookup({
            query: 'Иванов Петр Олегович',
          }),
        );

      default:
        return sendHTML(
          `<h1>Route not found</h1>
          <p>Possible Routes:</p>
          <ul style="list-style:none;margin: 0;padding: 0;">
            ${Object.entries(Route)
              .map(([_key, route]) => route)
              .map(route => `<li><a href="${route}">${route}</a></li>`)
              .join('\n')}
          </ul>
          `,
          404,
        );
    }
  });

  server.listen(Number(process.env.SERVER_PORT), process.env.SERVER_HOSTNAME, () => {
    console.debug(
      `Server started at http://${process.env.SERVER_HOSTNAME}:${process.env.SERVER_PORT}`,
    );
  });
})();
