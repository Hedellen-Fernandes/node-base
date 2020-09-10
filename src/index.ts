import "reflect-metadata"
import server from './server';
import * as mongoDatabase from './database/connect-mongo';

// import './database/connect-sql';
// import './database/connect-sql';

mongoDatabase.connect();

server.listen(3000, () => {
	console.log(`[SERVER] Running at http://localhost:3000`);
});
