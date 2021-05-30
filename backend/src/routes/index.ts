import express from 'express';

import users from '../controllers/user';

const router = express.Router();

router
  .post('/login/:userId', (req, res, next) => { });

export default router;