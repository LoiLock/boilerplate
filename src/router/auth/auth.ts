import express from 'express';
import {loginRoute} from './login';
import {registerRoute} from './register';

export const authRoute = express.Router();

// Declare auth subroutes
authRoute.use('/register', registerRoute);

authRoute.use('/login', loginRoute);
