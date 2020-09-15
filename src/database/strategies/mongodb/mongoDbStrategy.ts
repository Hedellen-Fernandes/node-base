import mongoose, { Model } from 'mongoose';
import IDb from '../../interfaces/IDb';
import IUser from '../../interfaces/IUser';

class mongoDb extends IDb {
	_schema: Model<any>

	constructor(schema: Model<any>) {
		super();

		this._schema = schema;
	}

	async connect() {
		const connectionParams = {
			useCreateIndex: true,
			useNewUrlParser: true,
			useUnifiedTopology: true
		};

		await mongoose.connect('mongodb://root:root@localhost:27017/financialManagement', connectionParams, error => {
			if (!error) return;
			console.log('Connection failed!');
		});

		const connection = mongoose.connection;
		connection.once('open', () => console.log("Database is runing"));

		return connection
	}

	create(item: Object) {
		return this._schema.create(item);
	}
}

export const close = (): Promise<void> => mongoose.connection.close();

export default mongoDb;
