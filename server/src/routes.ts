import { Router } from 'express';
import { sampleRouter } from './modules/sample/index.router';
import { userRouter } from './modules/user/user.router';

export const apiRoute = Router();
apiRoute.use('/user', userRouter);
apiRoute.use('/sample', sampleRouter);
