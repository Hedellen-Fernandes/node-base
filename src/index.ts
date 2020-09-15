import "reflect-metadata";
import express from 'express';

import MongoDb from './database/strategies/mongodb/mongoDbStrategy';
import UserSchema from './database/strategies/mongodb/schemas/UserSchema';

const mongoDbInstance = new MongoDb(UserSchema);
mongoDbInstance.connect();
mongoDbInstance.create({ firstName: "Hedellen", lastName: "Pereira", email: "hedellenf@gmail.com", password: "123456" });

const server = express();

server.get("/", (req, res) => {
	res.send("Hello ts-node!");
});

server.listen(3000, () => {
	console.log(`[SERVER] Running at http://localhost:3000`);
});
