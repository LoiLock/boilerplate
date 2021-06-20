import express, {Request, Response} from 'express';

export const registerRoute = express.Router();

// /api/auth/register
registerRoute.post('/', async(req: Request, res: Response) => {
    console.info(req.body);
    // ! TODO: call function to create user here
    res.json({
        'uhhhhhh': req.body,
    });
});
