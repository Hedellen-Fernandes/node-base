class NotImplmentedException extends Error {
	constructor() {
		super('Not Implemented Exception');
	}
}

class InterfaceDb {
	create() {
		throw new NotImplmentedException();
	}

	read() {
		throw new NotImplmentedException();
	}

	update() {
		throw new NotImplmentedException();
	}

	delete() {
		throw new NotImplmentedException();
	}

	isConnected() {
		throw new NotImplmentedException();
	}
}


export default InterfaceDb;
