import http from 'http';
import express from 'express';

import { DaDataAddress, DaDataEntity, DaDataEmail, DaDataName } from '../index';

const port = 8080;
const hostname = 'localhost';
const creditionals = {
  apiKey: '81c55d81e9f6d090778cc7d8d10721add4cd9f73',
  apiSecret: 'f7f84da4223c568dad2108edd7312a00884bcb3a',
};


(async () => {
  const app = express();
  const server = http.createServer(app);

  app.use('/address', async (_req, res) => {

    const address = new DaDataAddress(creditionals);
    const response = await address.addressLookup({
      query: 'Екатеринбург, Мира 28',
    });

    res.send(response);
  });

  app.use('/reverse-geo', async (_req, res) => {

    const address = new DaDataAddress(creditionals);
    const response = await address.reverseGeocoding({
      longitude: '60.616195',
      latitude: '56.840419',
    });

    res.send(response);
  });

  app.use('/ip', async (_req, res) => {

    const address = new DaDataAddress(creditionals);
    const response = await address.resolveIPAddress({
      ip: '176.226.150.69',
    });

    res.send(response);
  });

  app.use('/entity', async (_req, res) => {

    const address = new DaDataEntity(creditionals);
    const response = await address.entityLookup({
      query: 'тлк трансфер',
      locations: ['66'],
    });

    res.send(response);
  });

  app.use('/bank', async (_req, res) => {

    const address = new DaDataEntity(creditionals);
    const response = await address.bankLookup({
      query: 'точка',
    });

    res.send(response);
  });

  app.use('/email', async (_req, res) => {

    const address = new DaDataEmail(creditionals);
    const response = await address.emailLookup({
      query: 'delhs@g',
    });

    res.send(response);
  });

  app.use('/name', async (_req, res) => {

    const address = new DaDataName(creditionals);
    const response = await address.nameLookup({
      query: 'новосад василий',
    });

    res.send(response);
  });


  server.listen(port, hostname, () => {
    // eslint-disable-next-line no-console
    console.log(`Server started at http://${hostname}:${port}`);
  });
})();
