import { Router } from 'express';
import UserController from './user/userController'

const router = Router();

router.post('/users', UserController.store);

export default router;
