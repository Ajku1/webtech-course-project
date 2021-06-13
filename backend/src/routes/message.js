import express from 'express';
import message from '../controllers/message.js';

const router = express.Router();

router
    .get('/', message.getOrderedMessages)
    .post('/', message.createMessage);

export default router;
