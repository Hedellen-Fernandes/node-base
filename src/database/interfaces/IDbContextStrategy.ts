
type databaseMethod = () => {};

export default interface IdbContextStrategy {
	isConnected: databaseMethod,
	connect: databaseMethod,
	create: databaseMethod,
	read: databaseMethod,
	update: databaseMethod,
	delete: databaseMethod
}
