import express from 'express';
import chatroom from '../controllers/chatroom.js';

const router = express.Router();

router
    .get('/', chatroom.getChatroom)
    .post('/', chatroom.createChatroom);

export default router;
