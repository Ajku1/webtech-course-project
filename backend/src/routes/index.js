import express from 'express';
import { encode } from '../middleware/auth.js';

const router = express.Router();

router
  .post('/login/:userId', encode, (req, res, next) => {
    return res
      .status(200)
      .json({
        success: true,
        authorization: req.authToken,
      });
  });

export default router;