import express from 'express';
// controllers
import chatroom from '../controllers/chatroom';

const router = express.Router();

router
  .get('/', chatroom.getRecentConversation)
  .get('/:roomId', chatroom.getConversationByRoomId)
  .post('/initiate', chatroom.initiate)
  .post('/:roomId/message', chatroom.postMessage)
  .put('/:roomId/mark-read', chatroom.markConversationReadByRoomId)

export default router;