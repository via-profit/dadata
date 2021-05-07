import http from 'http';
import express from 'express';

import DaData from '../index';

const port = 8080;
const hostname = 'localhost';
const creditionals = {
  apiKey: '81c55d81e9f6d090778cc7d8d10721add4cd9f73',
  apiSecret: 'f7f84da4223c568dad2108edd7312a00884bcb3a',
};


(async () => {
  const app = express();
  const server = http.createServer(app);

  const dadata = new DaData(creditionals);

  app.use('/address', async (_req, res) => {

    const response = await dadata.addressLookup({
      query: 'Екатеринбург, Мира 28',
    });

    res.send(response);
  });

  app.use('/reverse-geo', async (_req, res) => {

    const response = await dadata.reverseGeocoding({
      longitude: '60.616195',
      latitude: '56.840419',
    });

    res.send(response);
  });

  app.use('/ip', async (_req, res) => {

    const response = await dadata.resolveIPAddress({
      ip: '176.226.150.69',
    });

    res.send(response);
  });

  app.use('/entity', async (_req, res) => {

    const response = await dadata.entityLookup({
      query: 'тлк трансфер',
      locations: ['66'],
    });

    res.send(response);
  });

  app.use('/bank', async (_req, res) => {

    const response = await dadata.bankLookup({
      query: 'точка',
    });

    res.send(response);
  });

  app.use('/email', async (_req, res) => {

    const response = await dadata.emailLookup({
      query: 'delhs@g',
    });

    res.send(response);
  });

  app.use('/name', async (_req, res) => {

    const response = await dadata.nameLookup({
      query: 'новосад василий',
    });

    res.send(response);
  });


  server.listen(port, hostname, () => {
    // eslint-disable-next-line no-console
    console.log(`Server started at http://${hostname}:${port}`);
  });
})();
