class NotImplmentedException extends Error {
	constructor() {
		super('Not Implemented Exception');
	}
}

abstract class IDb {
	create(item: Object) {
		throw new NotImplmentedException();
	}

	read(item: Object) {
		throw new NotImplmentedException();
	}

	update(item: Object) {
		throw new NotImplmentedException();
	}

	delete(item: Object) {
		throw new NotImplmentedException();
	}

	isConnected(item: Object) {
		throw new NotImplmentedException();
	}

	connect() {
		throw new NotImplmentedException();
	}
}


export default IDb;
