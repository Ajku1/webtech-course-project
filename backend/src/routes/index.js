import express from 'express';
import users from '../controllers/user.js';
import { encode } from '../middleware/auth.js';

const router = express.Router();

router
  .post('/login/:userId', encode, (req, res, next) => { });

export default router;