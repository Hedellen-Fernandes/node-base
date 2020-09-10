import InterfaceDb from './interfaceDb';

type databaseMethod = () => {};

type database = {
	isConnected?: databaseMethod,
	connect?: databaseMethod,
	create?: databaseMethod,
	read?: databaseMethod,
	update?: databaseMethod,
	delete?: databaseMethod
}

class ContextStrategy extends InterfaceDb {
	dataBase: database;

	constructor(database: database) {
		super();
		this.dataBase = database;
	}

	isConnected() { }
	connect() { }
	create() { }
	read() { }
	update() { }
	delete() { }
}
