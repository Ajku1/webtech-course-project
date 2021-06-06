import express from 'express';
// controllers
import user from '../controllers/user.js';

const router = express.Router();

router
  .get('/', user.getUsers)
  .post('/', user.createUser)
  .post('/login', user.loginUser)

export default router;