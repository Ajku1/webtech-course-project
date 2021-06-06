import express from 'express';
// controllers
import controller from '../controllers/chatroom.js';

const router = express.Router();

router
    .get('/', controller.getChatroom)
    .post('/', controller.createChatroom)

export default router;