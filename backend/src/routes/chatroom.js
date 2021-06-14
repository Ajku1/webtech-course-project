import express from 'express';
import chatroom from '../controllers/chatroom.js';
import { checkIfAuthenticated } from '../middleware/auth.js';

const router = express.Router();

router
    .get('/', checkIfAuthenticated, chatroom.getChatroom)
    .post('/', chatroom.createChatroom);

export default router;
