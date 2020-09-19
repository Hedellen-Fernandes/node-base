import { Request, Response } from 'express';
import MongoDbStrategy from '@mongoDbStrategies/mongoDbStrategy';
import UserSchema from '@mongoDbSchemas/UserSchema';

const userSchema = new MongoDbStrategy(UserSchema);

class UserController {
	async store(req: Request, res: Response) {
		await userSchema.connect();

		const { email, firstName, lastName, password } = req.body;
		const userExists = await userSchema.read({ email });

		if (userExists.length)
			return res.sendStatus(409);

		const user = await userSchema.create({ email, firstName, lastName, password });

		return res.json(user);
	}
}

export default new UserController();
