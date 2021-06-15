import Message from '../models/message.js';

export default {
  createMessage: async (req) => {
    const message = new Message({
        chatroom: req.body.chatroom,
        text: req.body.text,
        sender: req.body.sender,
        sendDate: Date.now()
    });
    message.save().then(
        () => {
            // io.emit('message', chatroom, created);
        }
    ).catch(
        (error) => {
            return error;
        }
    );
  },
  getOrderedMessages: async () => {

  }
};
