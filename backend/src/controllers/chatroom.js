import Chatroom from '../models/chatroom.js';

export default {
  createChatroom: async (req, res) => {
    const chatroom = new Chatroom({
        name: req.body.name,
        members: req.body.members,
        description: req.body.description,
    });
    chatroom.save().then(
        (createdChatroom) => {
            res.status(200).json({ result: true, chatroom: createdChatroom });
        }
    ).catch(
        (error) => {
            console.log(error)
            res.status(500).json({ result: false, message: 'Unable to create chatroom', error: error });
        }
    );
  },
  getChatroom: async (req, res) => {
    Chatroom.find({})
    .populate('chatroom')
    .exec(function (error, createdChatrooms) {
        if (error) {
            res.status(500).json({ result: false, message: 'Unable to get created chatrooms', error: error });
        }
        res.status(200).json({ result: true, chatrooms: createdChatrooms });
    })
  },
};
