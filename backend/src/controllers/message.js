import Message from '../models/message.js';

export default {
  createMessage: async (req) => {
    const message = new Message({
        text: req.body.text,
        sender: req.body.sender,
        sendDate: Date.now()
    });
    message.save().then(
        (created) => {
            io.to(chatroomId).emit('message', {
                text: created.text,
                sender: created.sender,
                sendDate: created.sendDate
            });
        }
    ).catch(
        (error) => {
            return error;
        }
    );
  },
  getOrderedMessages: (req, res) => {

  }
}
