import express, {Request, Response} from 'express';
import {authRoute} from './auth/auth';


// Router
export const apiRoute = express.Router();

apiRoute.get('/uploads', async(req: Request, res: Response) => {
    res.send({
        lol: 'lmfao',
    });
});

apiRoute.use('/auth', authRoute);
