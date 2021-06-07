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
        (created) => {
            io.emit('message', chatroom, created);
        }
    ).catch(
        (error) => {
            return error;
        }
    );
  },
  getOrderedMessages: async (req, res) => {
    const sortDate = { sendDate: 1 };
    Message.find({ chatroom: req.query.chatroom })
        .sort(sortDate)
        .populate('message')
        .exec((error, listMessages) => {
            if (error) {
                res.status(500).json({ result: false, message: 'Cannot get message list!', error });
            }
            res.status(200).json({ result: true, message_list: listMessages });
        });
  }
};
