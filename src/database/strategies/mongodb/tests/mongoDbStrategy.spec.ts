import MongoDbStrategy from '../mongoDbStrategy';
import UserSchema from '../schemas/UserSchema';
import ConnectionStateEnum from '../enums/ConnectionState';

const mongoDbContext = new MongoDbStrategy(UserSchema);
let mockUser = generateNewUser();

function generateNewUser(): Object {
	return {
		email: `${new Date().getTime()}@gmail.com`,
		firstName: `${new Date().getTime()}`,
		lastName: `${new Date().getFullYear()}`,
		password: '123456'
	}
}

describe('MongoDb Tests Suite', () => {

	beforeAll(async () => {
		await mongoDbContext.connect();
		mockUser = generateNewUser();
	});

	afterAll(async () => {
		await mongoDbContext.disconnect();
	});

	describe('Connection Tests', () => {
		test('Should return status connection', async () => {
			const isConnected = await mongoDbContext.isConnect();

			expect(isConnected).toEqual(ConnectionStateEnum.Connected);
		});
	});

	describe('CRUD Tests', () => {
		test('Should create and return new User', async () => {
			let insertedUser = await mongoDbContext.create(mockUser).then(insertedUser => {
				return {
					email: insertedUser.email,
					firstName: insertedUser.firstName,
					lastName: insertedUser.lastName,
					password: insertedUser.password
				}
			});

			expect(insertedUser).toEqual(mockUser);
		});

		test('Should read and return new User', async () => {

		});

		test('Should update and return new User', async () => {

		});

		test('Should delete and return new User', async () => {

		});
	});
})
