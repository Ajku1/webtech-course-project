import express from 'express';
import user from '../controllers/user.js';

const router = express.Router();

router
    .get('/', user.getUsers)
    .post('/register', user.createUser)
    .post('/login', user.loginUser);

export default router;
