import mongoose, { Mongoose } from 'mongoose';

export const connect = async (): Promise<Mongoose> => await mongoose.connect('mongodb://root:root@localhost:27017/financialManagement', {
	useCreateIndex: true,
	useNewUrlParser: true,
	useUnifiedTopology: true
}, err => {
	if (err)
		console.log(err);

	console.log('connect to mongo')
});


export const close = (): Promise<void> => mongoose.connection.close();
