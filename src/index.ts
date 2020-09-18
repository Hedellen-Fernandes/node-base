import 'reflect-metadata';
import express from 'express';

import MongoDb from '@mongoDbStrategies/mongoDbStrategy';
import UserSchema from '@mongoDbStrategies/schemas/UserSchema';

const mongoDbInstance = new MongoDb(UserSchema);
mongoDbInstance.connect();

const server = express();

server.get('/', (req, res) => {
  res.send('Hello World');
});

server.listen(3000, () => {
  console.log('[SERVER] Running at http://localhost:3000');
});
